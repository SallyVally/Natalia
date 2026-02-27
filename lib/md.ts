// Очень лёгкий конвертер Markdown -> HTML под наш формат
// Поддержка: заголовки (#..######), списки (-, 1.), **bold**, *italic*, абзацы, code-blocks

const ESC_MAP = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
} as const
type EscKey = keyof typeof ESC_MAP

function escHtml(s: string): string {
  return s.replace(/[&<>]/g, (ch) => ESC_MAP[ch as EscKey])
}

export function mdToHtml(src: string): string {
  let s = src.replace(/\r\n?/g, "\n").trim()

  // code blocks: ``` ... ```
  s = s.replace(/```([\s\S]*?)```/g, (_m, code: string) => {
    const esc = escHtml(code)
    return `<pre><code>${esc}</code></pre>`
  })
// blockquotes: строки, начинающиеся с "> "
s = s.replace(/(?:^|\n)(> .+(?:\n> .+)*)/g, (block: string) => {
  const lines = block
    .trim()
    .split("\n")
    .map((l) => l.replace(/^>\s?/, "").trim());
  if (!lines.length || !lines.every((i) => i.length)) return block;
  return "\n<blockquote><p>" + lines.join("<br/>") + "</p></blockquote>";
});

  // заголовки
  s = s
    .replace(/^######\s+(.+)$/gm, "<h6>$1</h6>")
    .replace(/^#####\s+(.+)$/gm, "<h5>$1</h5>")
    .replace(/^####\s+(.+)$/gm, "<h4>$1</h4>")
    .replace(/^###\s+(.+)$/gm, "<h3>$1</h3>")
    .replace(/^##\s+(.+)$/gm, "<h2>$1</h2>")
    .replace(/^#\s+(.+)$/gm, "<h1>$1</h1>")

  // жирный/курсив (очень упрощённо)
  s = s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
  s = s.replace(/(^|[^*])\*(?!\s)(.+?)\*(?!\*)/g, "$1<em>$2</em>")

  // маркированные списки — блоки, где строки начинаются с "- "
  s = s.replace(/(?:^|\n)(- .+(?:\n- .+)*)/g, (block: string) => {
    const items = block
      .trim()
      .split("\n")
      .map((l) => l.replace(/^- /, "").trim())
    if (!items.length || !items.every((i) => i.length)) return block
    return "\n<ul>" + items.map((i) => `<li>${i}</li>`).join("") + "</ul>"
  })

  // нумерованные списки — блоки 1., 2., ...
  s = s.replace(/(?:^|\n)((?:\d+\. .+(?:\n))+)/g, (block: string) => {
    const items = block
      .trim()
      .split("\n")
      .map((l) => l.replace(/^\d+\.\s+/, "").trim())
    if (!items.length || !items.every((i) => i.length)) return block
    return "\n<ol>" + items.map((i) => `<li>${i}</li>`).join("") + "</ol>"
  })
// Эвристика: одиночный перенос после конца предложения ИЛИ после эмодзи
// превращаем в «пустую строку», чтобы дальше получился новый <p>.
// Не трогаем, если следующая строка — список/нумерация/заголовок/цитата.
s = s.replace(
  /([.!?…]|[\p{Extended_Pictographic}])\s*\n(?!\n)(?=(?![-*]\s|\d+\.\s|#{1,6}\s|>\s)\S)/gu,
  "$1\n\n"
);

  // абзацы — оборачиваем «голые» куски в <p>, не трогаем уже-сформированный HTML
  const lines = s.split(/\n{2,}/).map((chunk) => {
    if (/^\s*<(h\d|ul|ol|pre|p|blockquote)/i.test(chunk)) return chunk
    return `<p>${chunk.replace(/\n/g, "<br/>")}</p>`
  })

  return lines.join("\n")
}
