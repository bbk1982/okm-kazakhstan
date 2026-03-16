"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { products } from "@/data/products";

export default function Home() {

const [rate,setRate] = useState<number>(580)
const [mobileMenu,setMobileMenu] = useState(false)

useEffect(()=>{
fetch("https://open.er-api.com/v6/latest/EUR")
.then(res=>res.json())
.then(data=>{
if(data?.rates?.KZT) setRate(data.rates.KZT)
})
.catch(()=>setRate(580))
},[])

const formatPrice = (eur:number)=>{

const priceWithMargin = eur + 500
const kzt = priceWithMargin * rate

return new Intl.NumberFormat("ru-RU",{
style:"currency",
currency:"KZT",
maximumFractionDigits:0
}).format(kzt)

}

const getWhatsappLink = (productName:string)=>{
const text = `Здравствуйте! Интересует ${productName}`
return `https://wa.me/77772321214?text=${encodeURIComponent(text)}`
}

const commonWhatsapp =
"https://wa.me/77772321214?text=" +
encodeURIComponent("Здравствуйте! Интересует детектор OKM")

return(

<>

{/* SEO schema для Google */}

<script
type="application/ld+json"
dangerouslySetInnerHTML={{
__html: JSON.stringify({
"@context":"https://schema.org",
"@type":"Organization",
"name":"OKM Kazakhstan",
"url":"https://okm-kazakhstan.kz",
"logo":"https://okm-kazakhstan.kz/logo/okm-logo.png",
"description":"Официальный дистрибьютор OKM Detectors в Казахстане. Продажа немецких 3D металлодетекторов и георадаров.",
"address":{
"@type":"PostalAddress",
"streetAddress":"Байконыр 32",
"addressLocality":"Кызылорда",
"addressCountry":"KZ"
},
"contactPoint":{
"@type":"ContactPoint",
"telephone":"+77772321214",
"contactType":"sales",
"areaServed":"KZ"
}
})
}}
/>

<main className="bg-[#efefef] text-[#555]">

{/* верхняя строка */}

<div className="bg-[#f4f4f4] text-center py-2 text-xs md:text-sm text-[#a57a25]">

📞 
<a href="tel:+77772321214" className="hover:underline">
+7 777 232 12 14
</a>

•

<a href="tel:+77029648833" className="hover:underline">
+7 702 964 88 33
</a>

• ✉️ bbk1982@gmail.com

</div>

{/* HEADER */}

<header className="bg-[#756f6f] text-white">

<div className="max-w-[1600px] mx-auto flex items-center justify-between px-4">

<div className="flex items-center">

<div className="bg-white w-[70px] h-[70px] md:w-[90px] md:h-[80px] flex items-center justify-center">

<Image
src="/logo/okm-logo.png"
alt="OKM"
width={50}
height={50}
/>

</div>

<nav className="ml-6 hidden lg:flex gap-6 text-xs uppercase">

<a href="#products">Детекторы</a>
<a href="#guide">Подбор</a>
<a href="#certificate">Сертификат</a>
<a href="#contacts">Контакты</a>

</nav>

</div>

<div className="hidden lg:block text-sm text-[#e2d2a4] text-right">

Доставка по Казахстану • 5–25 дней
<br/>
+7 777 232 12 14 • +7 702 964 88 33

</div>

<button
className="lg:hidden text-2xl"
onClick={()=>setMobileMenu(!mobileMenu)}
>

☰

</button>

</div>

{mobileMenu && (

<div className="lg:hidden bg-[#6b6666] p-4 space-y-3">

<a href="#products">Детекторы</a><br/>
<a href="#guide">Подбор</a><br/>
<a href="#certificate">Сертификат</a><br/>
<a href="#contacts">Контакты</a>

</div>

)}

</header>

<section className="bg-[#b08d46] text-white text-center py-3">

<h2 className="text-sm md:text-xl font-semibold">

Официальный дистрибьютор OKM в Казахстане

</h2>

</section>

{/* HERO */}

<section className="relative h-[420px] md:h-[620px]">

<Image
src="/banners/hero.jpg"
alt="OKM"
fill
className="object-cover"
/>

<div className="absolute inset-0 bg-black/30"/>

<div className="relative max-w-[1600px] mx-auto px-6 md:px-10 pt-24 md:pt-40 text-white">

<p className="uppercase text-xs md:text-sm mb-3">

Немецкие детекторы OKM

</p>

<h1 className="text-2xl md:text-5xl leading-tight">

Мировой лидер
<br/>
в производстве детекторов

</h1>

<p className="mt-3 text-sm md:text-lg">

Сделано в Германии

</p>

</div>

</section>

{/* товары */}

<section id="products" className="py-12 md:py-16">

<div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">

{products.map(p=>(

<div key={p.name} className="bg-white p-4 rounded shadow">

<div className="h-[200px] flex items-center justify-center">

<Image
src={p.image}
alt={p.name}
width={220}
height={180}
className="object-contain"
/>

</div>

<div className="text-[#b08d46] mt-2">★★★★★</div>

<h3 className="font-semibold mt-2 text-sm md:text-base">

{p.name}

</h3>

<p className="text-xs md:text-sm mt-2 text-gray-600">

{p.description}

</p>

<div className="text-center text-lg md:text-xl text-[#b08d46] font-semibold mt-3">

{formatPrice(p.priceEur)}

</div>

<div className="text-center text-xs text-gray-500">

* Цена без НДС и доставки

</div>

<a
href={getWhatsappLink(p.name)}
target="_blank"
className="block w-full bg-[#b08d46] text-white text-center mt-4 py-2 text-sm"
>

Узнать подробнее

</a>

</div>

))}

</div>

</section>

{/* подбор */}

<section id="guide" className="bg-white py-12">

<div className="max-w-[1200px] mx-auto px-4">

<h2 className="text-center text-2xl md:text-3xl font-semibold text-[#666]">

Подбор детектора

</h2>

<div className="mt-8">

<Image
src="/files/podbor-detektora.jpg"
alt="Подбор детектора"
width={1200}
height={800}
className="w-full object-contain rounded"
/>

</div>

<p className="text-center text-gray-600 mt-6 max-w-[800px] mx-auto text-sm md:text-base">

Глубина обнаружения детекторов OKM может достигать до 25 метров
в зависимости от размера объекта, типа грунта и условий поиска.

</p>

</div>

</section>

{/* сертификат */}

<section id="certificate" className="py-12 md:py-16 bg-white">

<div className="max-w-[1000px] mx-auto px-4">

<h2 className="text-center text-2xl md:text-3xl font-semibold text-[#666]">

Сертификат официального дилера

</h2>

<div className="mt-8">

<Image
src="/files/certificate.jpg"
alt="Сертификат OKM"
width={900}
height={600}
className="w-full rounded shadow-lg object-contain"
/>

</div>

</div>

</section>

{/* контакты */}

<section id="contacts" className="max-w-[900px] mx-auto py-12 px-4">

<div className="border bg-[#efe1bf] p-6">

<h3 className="text-lg md:text-2xl">

Поможем подобрать лучший детектор

</h3>

<p className="mt-2">

Свяжитесь с нами через WhatsApp или по телефону.

</p>

</div>

<div className="grid md:grid-cols-2 border mt-6">

<div className="p-6 text-sm">

<p className="font-semibold">Email</p>
<p className="mb-4">bbk1982@gmail.com</p>

<p className="font-semibold">Контакты</p>

<a href="tel:+77772321214" className="block mb-2 hover:underline">
+7 777 232 12 14 — Бахытжан
</a>

<a href="tel:+77029648833" className="block mb-2 hover:underline">
+7 702 964 88 33 — Алина
</a>

<a href="tel:+77754088443" className="block mb-4 hover:underline">
+7 775 408 84 43 — Калмурат
</a>

<p className="font-semibold">Адрес</p>
<p>Казахстан</p>
<p>Байконыр 32</p>

</div>

<div className="bg-[#b08d46] flex items-center justify-center p-6">

<a
href={commonWhatsapp}
target="_blank"
className="bg-white text-black px-6 py-3"
>

Написать в WhatsApp

</a>

</div>

</div>

</section>

<footer className="bg-[#6b6666] text-white text-center py-8 text-sm">

<p>OKM Kazakhstan</p>

<p className="text-xs mt-2">

Официальный дистрибьютор OKM в Казахстане

</p>

<p className="text-xs mt-4">

© 2026 OKM Kazakhstan

</p>

</footer>

{/* WhatsApp кнопка */}

<a
href={commonWhatsapp}
target="_blank"
className="fixed bottom-5 right-5 z-50"
>

<div className="w-[60px] h-[60px] bg-green-500 rounded-full flex items-center justify-center shadow-lg">

💬

</div>

</a>

{/* кнопка звонка */}

<a
href="tel:+77772321214"
className="fixed bottom-20 right-5 z-50"
>

<div className="w-[60px] h-[60px] bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg">

📞

</div>

</a>

</main>

</>
)
}