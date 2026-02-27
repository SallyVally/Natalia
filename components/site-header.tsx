"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Sheet, SheetTrigger, SheetContent,
  SheetHeader, SheetTitle, SheetDescription, SheetClose
} from "@/components/ui/sheet"

import { cn } from "@/lib/utils"

const navigation = [
  { name: "Главная", href: "/" },
  { name: "Услуги", href: "/services" },
  { name: "Кейсы", href: "/cases" },
  { name: "Статьи", href: "/blog" },
  { name: "Контакты", href: "/contacts" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="font-serif text-xl font-bold text-gray-900 hover:text-purple-600 transition-all duration-300"
          >
            Наталья Балышканова
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-all duration-300 hover:text-purple-600 relative group",
                  pathname === item.href
                    ? "text-purple-600 after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-purple-600"
                    : "text-gray-700 hover:text-purple-600",
                )}
              >
                {item.name}
                <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300"
              >
                <span className="text-xl">☰</span>
                <span className="sr-only">Открыть меню</span>
              </Button>
            </SheetTrigger>
             <SheetContent
   side="right"
   className="w-[88vw] max-w-[420px] p-6 sm:p-7"
 >
   <SheetHeader className="mb-2">
     <SheetTitle className="text-lg font-semibold">Меню</SheetTitle>
     <SheetDescription className="sr-only">
       Основная навигация по сайту
     </SheetDescription>
   </SheetHeader>

   <nav className="mt-4 flex flex-col gap-1">
     {[
       { href: "/", label: "Главная" },
       { href: "/services", label: "Услуги" },
       { href: "/cases", label: "Кейсы" },
       { href: "/blog", label: "Статьи" },
       { href: "/contacts", label: "Контакты" },
     ].map((item) => (
       <SheetClose asChild key={item.href}>
         <a
           href={item.href}
           className="block rounded-xl px-4 py-3 text-lg text-slate-800
                      hover:bg-slate-100 focus:outline-none
                      focus:ring-2 focus:ring-offset-2
                      focus:ring-[var(--color-lilac-bright)] focus:ring-offset-white"
         >
           {item.label}
         </a>
       </SheetClose>
     ))}
   </nav>

   <div className="mt-6 border-t pt-6">
     <SheetClose asChild>
       <a
         href="/contacts"
         className="inline-flex w-full items-center justify-center rounded-xl
                    bg-[var(--color-lilac-bright)]/85 hover:bg-[var(--color-lilac-bright)]
                    text-black py-3 font-medium transition-colors"
       >
         Записаться на консультацию
       </a>
     </SheetClose>
   </div>
 </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
