"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Section } from "@/components/section"
import { CTASection } from "@/components/cta-section"
import { PostCard } from "@/components/post-card"
import { posts } from "@/data/posts"
import HeroRings from "@/components/hero-rings"
import MobileGallery from "@/components/mobile-gallery"
export default function HomePage() {
  const latestPosts = [...posts]
   .sort((a, b) => +new Date(b.date) - +new Date(a.date))
   .slice(0, 3)

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

{/* HERO */}
<Section id="hero" className="hero">
  <div className="hero__bg" />

  <div className="container">
    <div className="grid lg:grid-cols-[1.15fr_1fr] gap-4 xl:gap-6 items-center">

      
      <div
        data-hero-img
        className="hero__img-wrap relative hidden lg:block lg:order-1 lg:justify-self-end lg:mr-[var(--hero-img-mr)]"
      >
      
        <div className="hero__ring" />

        <div className="relative z-10">
          <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-lilac-bright)]/20 to-pink-200/30 rounded-3xl blur-2xl opacity-50" />
          <Image
            src="/natalia-photo.png"
            alt="Наталья Балышканова - профориентолог"
            width={394}
            height={830}
            sizes="(min-width:1024px) 394px, 66vw"
            className="relative z-10 h-auto w-[var(--hero-img-w)] max-w-[80vw] object-contain drop-shadow-2xl select-none"
            priority
          />
        </div>
      </div>

    
      <div className="order-1 lg:order-2">
        <div className="glass-panel relative z-30 rounded-3xl p-6 sm:p-8 lg:p-10 w-full lg:w-[var(--hero-card-w)] lg:ml-[var(--hero-card-ml)]">
          <Badge className="mb-6 glass-lilac text-slate-900 border-transparent hover:bg-[var(--color-lilac-bright)]/90 transition-all duration-300">
            Профориентолог
          </Badge>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-slate-900 leading-tight tracking-tight">
            Наталья
            <br />
            <span className="bg-gradient-to-r from-[var(--color-lilac-bright)] to-pink-500 bg-clip-text text-transparent">
              Балышканова
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-700 mb-8 leading-relaxed">
            Помогаю осознать профессиональное призвание и реализовать потенциал
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
 
  <Button
    asChild
    size="lg"
    className="glass-button bg-[var(--color-lilac-bright)]/80 hover:bg-[var(--color-lilac-bright)]/90 text-black px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 border-white/30"
  >
    <Link href="/#contacts">Записаться на консультацию</Link>
  </Button>

 
  <Button
    asChild
    size="lg"
    variant="outline"
    className="glass-button border-[var(--color-lilac-bright)]/50 text-[var(--color-lilac-bright)] hover:bg-[var(--color-lilac-bright)]/10 px-8 py-4 rounded-xl font-medium transition-all duration-300 bg-transparent"
  >
    <Link href="/#help">Узнать больше</Link>
  </Button>
</div>
        </div>

      
        <div className="mt-8 glass-card rounded-2xl p-6 overflow-hidden">
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--color-lilac-bright)] mb-1">5+</div>
              <div className="text-sm text-slate-600">лет опыта</div>
            </div>

            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--color-lilac-bright)] mb-1">1:1</div>
              <div className="text-sm text-slate-600">индивидуально</div>
            </div>
          </div>

          <div className="mt-5 text-sm text-slate-700 leading-relaxed">
            Программу, по которой я работаю, успешно прошли и нашли свою профессию мечты уже{' '}
            <span className="font-semibold text-[var(--color-lilac-bright)]">более 15 000 человек</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</Section>



<Section className="lg:hidden bg-white py-10">
  <div className="max-w-md mx-auto">
    <h2 className="text-2xl font-bold text-slate-900 text-center mb-6">Обо мне</h2>

    <MobileGallery
      images={[
        "/about-1.jpg",
        "/about-2.jpg",
        "/about-3.jpg",
        "/about-4.jpg",
      ]}
      ratioW={3}
      ratioH={4}
      altBase="Наталья Балышканова"
     
    />

    <p className="text-slate-700 leading-relaxed mt-6 mb-5">
      Помогаю осознать профессиональное призвание и реализовать потенциал. Работаю со школьниками (8-11 класс), 
      студентами, начинающими специалистами, взрослыми людьми и женщинами в декрете.
    </p>

    <div className="flex gap-3">
      <Button className="flex-1">Записаться</Button>
      <Button variant="outline" className="flex-1">Подробнее</Button>
    </div>
  </div>
</Section>



      {/* Дальше — как в твоём файле */}
      <Section className="py-14 md:py-16 lg:py-20 mt-0 lg:-mt-36 relative z-[12] rounded-t-3xl bg-[var(--color-beige-light)] shadow-[0_-20px_60px_rgba(0,0,0,0.06)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Чем я помогаю</h2>
          <p className="text-xl text-slate-600 mb-16 max-w-2xl mx-auto">
            Профессиональная поддержка на каждом этапе карьерного пути
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Распаковка уникальности",
                description: "Помогаю исследовать потенциал вашей личности и определить ваши способности, таланты, сильные стороны, роль в командной работе и тип мышления.",
              },
              {
                title: "Выбор профессии",
                description: "Помогаю определить подходящее профессиональное направление на основе вашей уникальности.",
              },
              {
                title: "Развитие профессионального пути",
                description: "Помогаю разработать Action-план по развитию в профессиональной деятельности.",
              },
            ].map((service) => (
              <Card
                key={service.title}
                className="glass-card hover:border-[var(--color-lilac-bright)]/30 transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-slate-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Как проходит работа</h2>
          </div>

          <div className="space-y-12">
            {[
              { step: "01", title: "Знакомство и диагностика", description: "Изучаем ваши способности, таланты, сильные стороны, жизненные ценности." },
              { step: "02", title: "Исследование", description: "Определяем критерии вашей будущей профессии, профессиональные интересы и актуальность профессий на рынке труда." },
              { step: "03", title: "Анализ и планирование", description: "Определяем подходящую профессию и составляем план действий." },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-8">
                <div className="flex-shrink-0 w-16 h-16 glass-lilac text-white rounded-2xl flex items-center justify-center font-bold text-lg shadow-lg">
                  {item.step}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-20 mt-16 lg:mt-24 relative rounded-t-3xl bg-[var(--color-beige-light)] shadow-[0_-20px_60px_rgba(0,0,0,0.06)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Отзывы клиентов</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Анна К.", role: "Маркетолог", text: "Благодаря консультации смогла сменить карьеру с бухгалтерии на маркетинг. Теперь работаю с удовольствием!" },
              { name: "Максим Р.", role: "Студент IT", text: "Помогли определиться с выбором профессии. Сейчас учусь программированию и очень доволен." },
              { name: "Екатерина М.", role: "Врач", text: "Долго не могла выбрать специализацию. Консультация помогла принять правильное решение." },
            ].map((testimonial) => (
              <Card
                key={testimonial.name}
                className="glass-card hover:border-[var(--color-lilac-bright)]/30 transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-yellow-400 text-sm">★</span>
                    ))}
                  </div>
                  <CardTitle className="text-lg text-slate-900">{testimonial.name}</CardTitle>
                  <Badge variant="secondary" className="w-fit glass-lilac text-white border-transparent">
                    {testimonial.role}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Полезные статьи</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Практические советы по выбору профессии и развитию карьеры
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {latestPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" asChild className="border-slate-200 text-slate-700 hover:bg-slate-50 bg-transparent">
              <Link href="/blog">Все статьи</Link>
            </Button>
          </div>
        </div>
      </Section>

      <CTASection 
      
        title="Готовы найти свое призвание?"
        description="Запишитесь на консультацию и сделайте первый шаг к профессии мечты"
        buttonText="Записаться на консультацию"
        buttonHref="/contacts"
      />

      <SiteFooter />
    </div>
  )
}
