import mecanico from '@/assets/mecanico.jpg'
import Image from 'next/image'

export default function AboutUs() {
  return (
    <section
      id="aboutus"
      className="mt-4 scroll-mt-2 p-4 text-zinc-50 md:mt-8 md:p-8"
    >
      <h1 className="font-heading font-semibold text-3xl">Sobre nós</h1>

      <div className="mt-8 grid gap-4 px-2 sm:grid-cols-3 sm:px-5">
        <div className="flex flex-col space-y-3 pr-4 sm:col-span-2 sm:pr-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quam
            ratione ipsam sapiente velit sequi quasi, rerum eaque veniam quod,
            molestiae harum doloribus. Esse earum dolores ipsa laudantium
            aliquam consectetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quam
            ratione ipsam sapiente velit sequi quasi, rerum eaque veniam quod,
            molestiae harum doloribus. Esse earum dolores ipsa laudantium
            aliquam consectetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quam
            ratione ipsam sapiente velit sequi quasi, rerum eaque veniam quod,
            molestiae harum doloribus. Esse earum dolores ipsa laudantium
            aliquam consectetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quam
            ratione ipsam sapiente velit sequi quasi, rerum eaque veniam quod,
            molestiae harum doloribus. Esse earum dolores ipsa laudantium
            aliquam consectetur.
          </p>
        </div>
        <div>
          <Image
            src={mecanico}
            alt="mecanico"
            className="h-[300px] rounded-lg bg-center object-cover sm:h-[400px]"
          />
        </div>
      </div>
    </section>
  )
}
