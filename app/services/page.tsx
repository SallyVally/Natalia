import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Section } from "@/components/section"
import { CTASection } from "@/components/cta-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Clock } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "Индивидуальная консультация",
    price: "3 000 ₽",
    duration: "90 минут",
    description: "Персональная встреча для решения конкретных вопросов профориентации",
    features: ["Диагностическая беседа", "Анализ текущей ситуации", "Рекомендации по развитию", "План действий"],
    popular: false,
  },
  {
    title: "Тестирование и разбор",
    price: "4 000 ₽",
    duration: "2 часа",
    description: "Комплексное психологическое тестирование с подробным разбором результатов",
    features: [
      "Тест профессиональных интересов",
      "Диагностика способностей",
      "Анализ личностных особенностей",
      "Подробный отчет",
      "Рекомендации по профессиям",
    ],
    popular: true,
  },
  {
    title: "Профнавигатор для подростков",
    price: "7 500 ₽",
    duration: "3 встречи",
    description: "Специальная программа для школьников 8-11 классов",
    features: [
      "Диагностика интересов и способностей",
      "Изучение рынка профессий",
      "Выбор профиля обучения",
      "Планирование поступления",
      "Работа с родителями",
    ],
    popular: false,
  },
  {
    title: "Профориентация для взрослых",
    price: "7 500 ₽",
    duration: "3 встречи",
    description: "Полное сопровождение процесса профессионального самоопределения",
    features: [
      "Диагностика способностей и талантов",
      "3 индивидуальных консультаций",
      "Исследование проф интересов",
      "Выбор профессии",
      "Составление плана развития",
    ],
    popular: false,
  },
]

const faqItems = [
  {
    question: "Сколько длится процесс профориентации?",
    answer:
      "Это зависит от сложности запроса. Базовая консультация занимает 1-2 встречи, комплексная профориентация может длиться от 1 до 3 месяцев.",
  },
  {
    question: "С какого возраста можно проходить профориентацию?",
    answer:
      "Я работаю с подростками от 14 лет и взрослыми любого возраста. Для младших школьников есть специальные игровые методики.",
  },
  {
    question: "Гарантируете ли вы результат?",
    answer:
      "Я гарантирую профессиональный подход и качественную диагностику. Результат зависит от вашей готовности к изменениям и следованию рекомендациям.",
  },
  {
    question: "Можно ли пройти консультацию онлайн?",
    answer: "Да, я провожу консультации как очно, так и онлайн. Эффективность не снижается при дистанционном формате.",
  },
  {
    question: "Что если я не определюсь с выбором?",
    answer:
      "Это нормально. Профориентация — это процесс. Мы будем работать до тех пор, пока вы не почувствуете уверенность в своем выборе.",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <Section className="pt-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Услуги</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Выберите подходящий формат работы для решения ваших задач
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {services.map((service) => (
            <Card key={service.title} className={`relative ${service.popular ? "ring-2 ring-primary" : ""}`}>
              {service.popular && (
                <Badge className="absolute -top-3 left-6 bg-primary text-primary-foreground">Популярное</Badge>
              )}
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{service.price}</div>
                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {service.duration}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground text-pretty">{service.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/contacts">Записаться</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Часто задаваемые вопросы</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      <CTASection
        title="Не нашли подходящий вариант?"
        description="Свяжитесь со мной, и мы обсудим индивидуальный формат работы"
        buttonText="Связаться"
        buttonHref="/contacts"
      />

      <SiteFooter />
    </div>
  )
}
