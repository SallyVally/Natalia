"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)


    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Спасибо за обращение!",
      description: "Я свяжусь с вами в ближайшее время.",
    })

    setIsSubmitting(false)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Записаться на консультацию</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Имя *
              </label>
              <Input id="name" name="name" required placeholder="Ваше имя" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Телефон *
              </label>
              <Input id="phone" name="phone" type="tel" required placeholder="+7 (919) 863 56-29" />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Сообщение
            </label>
            <Textarea id="message" name="message" rows={4} placeholder="Расскажите о вашем запросе..." />
          </div>

          <div className="flex items-start space-x-2">
            <input type="checkbox" id="consent" name="consent" required className="mt-1" />
            <label htmlFor="consent" className="text-sm text-muted-foreground">
              Я согласен(а) на обработку персональных данных *
            </label>
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              "Отправляется..."
            ) : (
              <>
                <span className="text-lg mr-2">📤</span>
                Отправить заявку
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
