import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto max-w-screen-xl px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">© 2024 Наталья Балышканова. Все права защищены.</p>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="tel:+79198635629"
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-lg">📞</span>
              <span>+7 (919) 863 56-29</span>
            </Link>
            <Link
              href="https://t.me/BNatasha2709"
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-lg">💬</span>
              <span>Telegram</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
