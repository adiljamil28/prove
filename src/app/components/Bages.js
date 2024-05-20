import React from 'react'

const bagesOption = [
  {
      id: 1,
      src: "awardlogo2.webp",
      headings:"Top Mobile App Development Company",
      pra:"App Futura recognized our teams and organization for being one of the top mobile app development companies.",
    },
    {
      id: 2,
      src: "awardlogo7.webp",
      headings:"Top Mobile App Development Company",
      pra:"App Futura recognized our teams and organization for being one of the top mobile app development companies.",
    },
    {
      id: 3,
      src: "awardlogo1.webp",
      headings:"Top Mobile App Development Company",
      pra:"App Futura recognized our teams and organization for being one of the top mobile app development companies.",
    },
    {
      id: 4,
      src: "awardlogo5.webp",
      headings:"Top Mobile App Development Company",
      pra:"App Futura recognized our teams and organization for being one of the top mobile app development companies.",
    },
    {
      id: 5,
      src: "best-digital-agency.webp",
      headings:"Top Mobile App Development Company",
      pra:"App Futura recognized our teams and organization for being one of the top mobile app development companies.",
    },
]  

export const Bages = () => {
  return (
    <div>
        
           {/* -----------------------------AWARD BAGES SECTION START------------------*/}

      <section className="body-font bg-white pt-20">
      <h2 class="text-4xl md:text-8xl lg:text-8xl font-black py-4 text-black text-center">Awards <span class="stroke">&</span> Recognitions</h2> 
        <div className="px-14 py-14">
          <div className="flex flex-wrap">

          {bagesOption.map((bage) => (
            <div className="lg:w-1/5 md:w-1/2 p-4 text-center border-dashed border-2" key={bage.id}>
              <a className="block relative rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center mx-auto"
                  src={bage.src}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-black text-lg  title-font mb-1 font-bold">
                {bage.headings}
                </h3>
                <h2 className="text-black title-font text-xs font-semibold">
                {bage.pra}
                </h2>
              </div>
            </div>
        ))}



          </div>
        </div>
      </section>

      {/* -----------------------------AWARD BAGES SECTION END------------------*/}

    </div>
  )
}
