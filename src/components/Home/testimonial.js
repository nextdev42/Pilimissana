import React from "react"
import Fade from "react-reveal/Fade"

const Testimonial = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 mt-14 mb-14">
      <Fade bottom>
        <div className="w-full h-full  flex flex-row justify-between align-middle bg-[url('../images/holographic-background.webp')] p-12 rounded-lg xxs:flex-col xs:flex-col sm:flex-row xxs:p-5 lg:p-12">
          <div className="w-3/4 xxs:w-full xs:w-full backdrop-blur-sm bg-white/30 p-10 rounded-lg lg:p-10">
            <div className="text-black font-semibold text-xl xxs:text-s xxs:font-normal sm:text-xl font-notoserif">
             Ushuhuda wa Mafanikio (Success Stories)

Katika Pilimisanah Foundation, tunaamini kwamba kila maisha yaliyogusa chini kabisa yanaweza kuinuka tena juu. Tuna maelfu ya hadithi za kweli za watu waliokuwa mateka wa dawa za kulevya—waliopitia upotevu, fedheha, na uharibifu—lakini sasa ni mashahidi hai wa mabadiliko.

Hadithi zao ni ushuhuda kuwa:

Uponyaji unawezekana

Matumaini yapo

Na hakuna aliye mbali mno kiasi cha kushindwa kuokolewa


"Nilianza dawa nikiwa kijana mdogo, nikapoteza familia na maisha. Nilifika Pilimisanah nikiwa nimevunjika moyo kabisa. Leo hii, ni miaka mitatu tangu niachane na uraibu. Nimeanzisha biashara yangu, na naisaidia familia yangu. Natumaini kesho yangu kuliko jana."
— Jackson, aliyepokea tiba mwaka 2021

"Nilifikiri sitawahi kupona. Lakini walinionyesha upendo, wakaniamini hata nilipojichukia. Leo hii, ninaishi maisha huru na najitolea kuwasaidia wengine."
— Zainabu, aliyekuwa mraibu wa heroin kwa miaka 7

Karibu usome zaidi au shiriki nasi hadithi yako ya ushindi. Ushuhuda wako unaweza kuwa taa kwa mwingine."
            </div>
            <div className="mt-10">
              <h3 className="text-black text-2xl font-smibold">Lorem Ipsum</h3>
              <p className="text-black text-sm font-semibold opacity-50">
                Google review
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Testimonial
