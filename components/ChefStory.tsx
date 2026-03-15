"use client";

import Image from 'next/image'

interface ChefStoryProps {
  chefName?: string
  title?: string
  story?: string
  imageSrc?: string
  signatureDishes?: string[]
}

export default function ChefStory({
  chefName = 'Chef Lorenzo Bianchi',
  title = 'From Naples to New York',
  story = 'Chef Lorenzo brings three generations of southern Italian cooking to Margarita. His philosophy is simple: source the best ingredients, honor the old methods, and let every dish tell a story of family and place.',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577321/site-images/team-people/1181622.jpg',
  signatureDishes = ['Tagliatelle al Tartufo', 'Branzino al Forno', 'Tiramisu della Casa'],
}: Partial<ChefStoryProps>) {
  return (
    <section className="bg-[#FEFAE0] py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:px-6">
        <Image src={imageSrc} alt={chefName} width={1200} height={800} unoptimized className="h-[460px] w-full rounded-xl object-cover" />
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[#DDA15E]">Our Chef</p>
          <h3 className="mt-2 font-serif text-4xl text-[#722F37]">{chefName}</h3>
          <p className="mt-2 text-[#606C38]">{title}</p>
          <p className="mt-5 text-[#606C38]">{story}</p>
          <ul className="mt-6 space-y-2">
            {signatureDishes.map((dish, idx) => (
              <li key={dish + idx} className="text-[#722F37]">• {dish}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
