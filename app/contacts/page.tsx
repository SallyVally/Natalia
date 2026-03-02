import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Section } from "@/components/section"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MessageCircle, Clock, MapPin, Send } from "lucide-react"

export default function ContactsPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <Section className="pt-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Свяжитесь со мной удобным способом или запишитесь на консультацию
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Контактная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Телефон</p>
                    <a href="tel:89198635629" className="text-muted-foreground hover:text-primary">
                      +7 (919) 863 56-29
                    </a>
                  </div>
                </div>


                <div className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Telegram</p>
                    <a href="https://t.me/BNatasha2709" className="text-muted-foreground hover:text-primary">
                      @BNatasha2709
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Адрес</p>
                    <p className="text-muted-foreground"> г. Оренбург, пер. Матросский д.12, каб. 202</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Режим работы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Понедельник - Пятница</span>
                    <span className="text-muted-foreground">10:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Суббота</span>
                    <span className="text-muted-foreground">10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Воскресенье</span>
                    <span className="text-muted-foreground">Выходной</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-accent/10 border-accent/20">
              <CardHeader>
                <CardTitle>Быстрая связь</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Для срочных вопросов или быстрой записи на консультацию</p>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                  <a href="https://t.me/username" className="flex items-center justify-center gap-2">
                    <Send className="h-4 w-4" />
                    Написать в Telegram
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </Section>

      <SiteFooter />
    </div>
  )
}
