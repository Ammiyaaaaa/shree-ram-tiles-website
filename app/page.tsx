"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, MapPin, MessageCircle, Phone, Sparkles, X } from "lucide-react";
import { motion } from "framer-motion";
import { SplineScene } from "@/components/ui/spline";

const products = [
  ["Golden Mirage Green", "Premium marble-look tile", "/products/golden-mirage-green.jpg"],
  ["Torrent Green Gold", "Elegant marble-look tile", "/products/torrent-green-gold.jpg"],
  ["Endless Kairos Aqua", "Statement bathroom tile", "/products/kairos-aqua.jpg"],
  ["Loften Grey", "Modern grey stone-look tile", "/products/loften-grey.jpg"],
  ["Endless Claret Aqua", "Decorative premium tile", "/products/claret-aqua.jpg"],
  ["Endless Arina Aqua", "Bold blue marble-look tile", "/products/arina-aqua.jpg"],
  ["Endless Velwin Blue", "Soft blue statement tile", "/products/velwin-blue.jpg"],
  ["Endless Velwin Aqua", "Calm aqua finish", "/products/velwin-aqua.jpg"],
  ["Endless Maestro Blue", "Blue & gold premium tile", "/products/maestro-blue.jpg"],
  ["Sterling Gold", "White & gold marble-look tile", "/products/sterling-gold.jpg"],
];

const categories = [
  ["Tiles", "Wall & floor collections", "▦"],
  ["Marble & Granite", "Premium natural surfaces", "◇"],
  ["Sanitary", "Modern bathroom essentials", "⌂"],
  ["Basins & Faucets", "Elegant finishing touches", "◯"],
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Tiles");
  const [selectedProduct, setSelectedProduct] = useState<typeof products[number] | null>(null);
  const featured = useMemo(() => products.slice(0, 6), []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0c0c0b] text-stone-100">
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
          <a href="#home" className="flex items-center gap-3">
            <div className="relative h-11 w-16 overflow-hidden rounded-lg bg-white"><Image src="/brand/logo.png" alt="Shree Ram Tiles & Sanitary" fill className="object-contain" /></div>
            <div className="hidden sm:block"><div className="text-xs font-bold uppercase tracking-[.22em] text-[#d7b77a]">Shree Ram</div><div className="font-black">Tiles & Sanitary</div></div>
          </a>
          <div className="hidden gap-7 text-sm text-stone-300 md:flex"><a href="#collections">Collections</a><a href="#showcase">Showcase</a><a href="#about">Why Us</a><a href="#contact">Contact</a></div>
          <a href="tel:+918594867381" className="rounded-full bg-[#d7b77a] px-4 py-2 text-sm font-bold text-black">Call Store</a>
        </div>
      </nav>

      <section id="home" className="relative min-h-[790px] overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_35%,rgba(215,183,122,.20),transparent_28%),radial-gradient(circle_at_18%_18%,rgba(255,255,255,.07),transparent_24%)]" />
        <div className="mx-auto grid min-h-[700px] max-w-7xl items-center gap-8 px-5 py-14 lg:grid-cols-2">
          <motion.div initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{duration:.7}} className="relative z-10">
            <div className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[.3em] text-[#d7b77a]"><Sparkles size={15}/> Angul • Odisha</div>
            <h1 className="max-w-3xl text-5xl font-black leading-[.94] tracking-tight sm:text-7xl">Elevate your <span className="text-[#d7b77a]">living space.</span></h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-stone-300">Premium tiles, marble, granite and sanitary solutions for homes, bathrooms and modern interiors — curated at Shree Ram Tiles & Sanitary.</p>
            <div className="mt-8 flex flex-wrap gap-3"><a href="#showcase" className="flex items-center gap-2 rounded-full bg-[#d7b77a] px-6 py-3 font-bold text-black">Explore Collection <ArrowRight size={18}/></a><a href="https://wa.me/918594867381" className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-bold">WhatsApp Us</a></div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-stone-400"><span>✓ Wall & Floor Tiles</span><span>✓ Marble & Granite</span><span>✓ Sanitary & Faucets</span></div>
          </motion.div>
          <div className="relative h-[500px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#171512] shadow-2xl">
            <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="h-full w-full" />
            <div className="pointer-events-none absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/55 px-4 py-2 text-xs text-stone-300 backdrop-blur">Interactive 3D showroom • drag to explore</div>
          </div>
        </div>
      </section>

      <section id="collections" className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-10"><div className="text-xs font-bold uppercase tracking-[.25em] text-[#d7b77a]">Shop by category</div><h2 className="mt-2 text-4xl font-black">Everything for your space</h2></div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(([name, desc, icon]) => <button key={name} onClick={()=>setSelectedCategory(name)} className={`group rounded-3xl border p-6 text-left transition hover:-translate-y-1 ${selectedCategory===name?"border-[#d7b77a] bg-[#d7b77a]/10":"border-white/10 bg-white/[.035] hover:border-white/25"}`}><div className="text-4xl text-[#d7b77a]">{icon}</div><h3 className="mt-5 text-xl font-bold">{name}</h3><p className="mt-2 text-sm text-stone-400">{desc}</p><div className="mt-5 flex items-center gap-2 text-sm font-bold text-[#d7b77a]">Explore <ArrowRight size={15}/></div></button>)}
        </div>
      </section>

      <section id="showcase" className="border-y border-white/10 bg-[#13120f]">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><div className="text-xs font-bold uppercase tracking-[.25em] text-[#d7b77a]">Product showcase</div><h2 className="mt-2 text-4xl font-black">Featured tile designs</h2></div><p className="text-sm text-stone-400">Selected category: <span className="text-white">{selectedCategory}</span></p></div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map(([name, desc, src], i) => <motion.button whileHover={{y:-5}} key={name} onClick={()=>setSelectedProduct([name,desc,src])} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[.035] text-left"><div className="relative aspect-[4/5] overflow-hidden"><Image src={src} alt={name} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" /><div className="absolute inset-x-3 bottom-3 rounded-2xl bg-black/60 p-4 backdrop-blur"><div className="text-lg font-bold">{name}</div><div className="text-xs text-stone-300">{desc}</div></div></div></motion.button>)}
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{products.slice(6).map(([name,desc,src])=><button key={name} onClick={()=>setSelectedProduct([name,desc,src])} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[.035] text-left"><div className="relative aspect-[3/4]"><Image src={src} alt={name} fill className="object-cover" sizes="25vw"/></div><div className="p-4"><div className="font-bold">{name}</div><div className="mt-1 text-xs text-stone-500">{desc}</div></div></button>)}</div>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-2 lg:items-center">
        <div><div className="text-xs font-bold uppercase tracking-[.25em] text-[#d7b77a]">Why Shree Ram</div><h2 className="mt-3 text-4xl font-black">Premium look. Practical choice.</h2><p className="mt-5 max-w-xl leading-8 text-stone-400">From everyday renovation to premium interiors, discover designs that balance beauty, durability and value — with local store support in Angul.</p></div>
        <div className="grid gap-3 sm:grid-cols-2">{["Wide tile collection","Marble & granite","Sanitary essentials","Basins & faucets","Local store support","Home-project guidance"].map(x=><div key={x} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[.035] p-4"><CheckCircle2 size={19} className="text-[#d7b77a]"/><span className="text-sm font-semibold">{x}</span></div>)}</div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 pb-24"><div className="overflow-hidden rounded-[2rem] border border-[#d7b77a]/30 bg-gradient-to-br from-[#292116] to-[#15130f] p-8 sm:p-12"><div className="max-w-3xl"><div className="text-xs font-bold uppercase tracking-[.25em] text-[#d7b77a]">Visit our store</div><h2 className="mt-3 text-4xl font-black sm:text-5xl">Let’s build a beautiful space.</h2><p className="mt-5 text-stone-300">Near CPP Chowk, Banarpal, Angul, Odisha<br/><span className="text-stone-400">+91 85948 67381 • +91 81448 50533</span></p><div className="mt-8 flex flex-wrap gap-3"><a href="tel:+918594867381" className="flex items-center gap-2 rounded-full bg-[#d7b77a] px-6 py-3 font-bold text-black"><Phone size={17}/> Call Us</a><a href="https://wa.me/918594867381" className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-bold"><MessageCircle size={17}/> WhatsApp</a><a href="https://maps.app.goo.gl/vTTJhEyxnsgEhqLE6" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-bold"><MapPin size={17}/> Get Directions</a></div></div></div></section>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-stone-500">© {new Date().getFullYear()} Shree Ram Tiles & Sanitary, Angul • +91 85948 67381 • +91 81448 50533</footer>

      {selectedProduct && <div className="fixed inset-0 z-[100] grid place-items-center bg-black/80 p-5 backdrop-blur-sm" onClick={()=>setSelectedProduct(null)}><div className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-3xl border border-white/15 bg-[#171512]" onClick={e=>e.stopPropagation()}><button onClick={()=>setSelectedProduct(null)} className="absolute right-4 top-4 z-10 rounded-full bg-black/70 p-2"><X size={20}/></button><div className="grid md:grid-cols-2"><div className="relative min-h-[420px]"><Image src={selectedProduct[2]} alt={selectedProduct[0]} fill className="object-cover" sizes="50vw"/></div><div className="flex flex-col justify-center p-8"><div className="text-xs font-bold uppercase tracking-[.25em] text-[#d7b77a]">Product</div><h3 className="mt-3 text-3xl font-black">{selectedProduct[0]}</h3><p className="mt-4 text-stone-400">{selectedProduct[1]}. Visit the store to check current stock, available sizes and finish options.</p><a href="https://wa.me/918594867381" className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#d7b77a] px-6 py-3 font-bold text-black"><MessageCircle size={17}/> Ask on WhatsApp</a></div></div></div></div>}
    </main>
  );
}
