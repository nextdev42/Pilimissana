import React from "react";
import Fade from "react-reveal/Fade";

// Assets
import HeroImage from "../../images/holographic-background-1.webp";
import Image1 from "../../images/3D-liquid-abstract-1.webp";
import Image2 from "../../images/3D-liquid-abstract.webp";
import Image3 from "../../images/3D-liquid-abstract-3.webp";

const FeatureSection = () => {
  return (
    <div className="max-w-7xl mx-auto">
    {/*<Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row content-center justify-center align-middle text-center">
          <div className="w-1/3 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-black text-2xl">Huduma zetu</h3>
            <h4 className="mt-10 text-black  opacity-70 text-xl">95+</h4>
          </div>

          <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Accessibility</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">100</h4>
          </div>
          <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Best Practices</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">100</h4>
          </div>
          <div className="lg:rounded-xl lg:w-1/3 lg:bg-dp bg-dp p-8 rounded-xl m-5 xxs:w-full xxs:bg-dp xxs:rounded-xl xs:w-full xs:bg-dp xs:rounded-xl sm:hidden md:hidden lg:block">
            <h3 className="text-white text-2xl">SEO</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">100</h4>
          </div>
        </div>
      </Fade>*/} 

      <div className="max-w-7xl mx-auto lg:px-8 md:px-3">
        <div className="mx-auto max-w-7xl px-4 sm:mt-10 sm:px-6 md:mt-10 lg:mt-10 lg:px-0 xl:mt-10 flex flex-col lg:flex-row gap-3 lg:flex-justify">
          <div className="lg:w-1/2 my-4">
            <img
              className="rounded-xl h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src={HeroImage}
              alt="HeroImage"
            />
          </div>

          <div className="lg:w-1/2 sm:text-center lg:text-right flex flex-col justify-center">
    {/* <h2 className="text-black text-4xl font-semibold">HUDUMA ZETU</h2>*/} 
            <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
              Huduma zetu
            </h3>

            <p className="mt-3 text-base text-black-70 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto lg:mr-0">
              Katika Pilimisanah Foundation Sober House, tunatoa huduma za kina na za kitaalamu kwa ajili ya matibabu ya uraibu na afya ya akili. Kila mteja hupokea huduma kulingana na mahitaji yake binafsi, kwa lengo la kuhakikisha mabadiliko ya kweli, ya kudumu na yenye maana. Huduma zetu ni pamoja na:
            </p>

            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-end">
              <div className="rounded-md">
                <a
                  href="tel:#"
                  className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-black border border-purple hover:bg-transparent md:text-lg md:px-10"
                >
                  Tupigie Sasa 
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="/gallery"
                  className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 border border-purple text-base font-medium rounded-md text-black hover:text-white bg-transparent hover:bg-purple md:py-3 md:text-lg md:px-10"
                >
                  View Gallery
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row">
          <div className="w-2/6 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-2/6">
            <span className="text-black font-semibold font-montserrat text-4xl">
              Huduma zetu
            </span>
            <div className="mt-5">
              <div>
                <p className="text-black text-2xl">Ushauri Nasaha</p>
                <p className="text-black opacity-50 text-sm">(Counseling)</p>
              </div>
              <div className="mt-5">
                <p className="text-black text-2xl">Tiba Tambuzi ya Tabia</p>
                <p className="text-black opacity-50 text-sm">(CBT – Cognitive Behavioral Therapy)</p>
              </div>
              <div className="mt-5">
                <p className="text-black text-2xl">Afya ya Akili</p>
                <p className="text-black opacity-50 text-sm">
                  (Mental Health Services)
                </p>
              </div>
            <div className="mt-5">
                <p className="text-black text-2xl">Mpango wa Hatua 12</p>
                <p className="text-black opacity-50 text-sm">(12 Step Program – Narcotics Anonymous)</p>
              </div>
             <div className="mt-5">
                <p className="text-black text-2xl">Tiba ya Kijamii</p>
                <p className="text-black opacity-50 text-sm">(Social Therapy)</p>
              </div>
               <div>
                <p className="text-black text-2xl">Tiba ya Familia</p>
                <p className="text-black opacity-50 text-sm">(Family Therapy)</p>
              </div>
                <div>
                <p className="text-black text-2xl">Ujuzi wa Maisha</p>
                <p className="text-black opacity-50 text-sm">(Life Skills Training)</p>
              </div>        
            </div>
          </div>

          <div className="w-4/6 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-4/6">
            <h2 className="text-white text-4xl">
              🧠 Ushauri Nasaha (Counseling)
            </h2>
            <p className="mt-10 text-white opacity-70">
              Tunatoa ushauri nasaha wa mtu mmoja mmoja, wa kikundi, na wa ndoa au familia, kwa ajili ya kusaidia waraibu kuelewa hali yao na kupata mwongozo wa kihisia na kisaikolojia katika safari ya kupona.
            </p>
          </div>
        </div>
      </Fade>

      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold opacity-70">
          Tiba Tambuzi ya Tabia 
        </h2>
        <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
          (CBT – Cognitive Behavioral Therapy)
        </h3>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Tiba hii husaidia mteja kubaini na kubadilisha mitazamo, fikra potofu, na tabia hatarishi zinazochochea uraibu.
        </p>
      </div>

      {/* 👇 FIX: These were unwrapped, causing JSX break */}
      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold opacity-70">
          ♂️ Afya ya Akili
        </h2>
        <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
          (Mental Health Services)
        </h3>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Tunatambua kuwa changamoto nyingi za uraibu huambatana na matatizo ya afya ya akili. Tunatoa huduma za tathmini, ushauri na ufuatiliaji wa afya ya akili kwa mteja.
        </p>
      </div>

      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold opacity-70">
          🔄 Mpango wa Hatua 12
        </h2>
        <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
          (12 Step Program – Narcotics Anonymous)
        </h3>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Tunatumia mfumo wa kimataifa wa hatua 12 uliothibitishwa kusaidia waraibu kukubali hali yao, kuachana na dawa za kulevya, na kuishi maisha mapya ya uwajibikaji, maadili, na matumaini.
        </p>
      </div>

      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold opacity-70">
          🧑‍🤝‍🧑 Tiba ya Kijamii
        </h2>
        <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
          (Social Therapy)
        </h3>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Kupitia shughuli za kijamii, michezo, kazi za pamoja na mijadala ya vikundi, tunawasaidia waraibu kujenga upya mahusiano, mawasiliano, na hali ya kujiamini katika jamii.
        </p>
      </div>

      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold opacity-70">
          👨‍👩‍👧‍👦 Tiba ya Familia 
        </h2>
        <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
          (Family Therapy)
        </h3>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Uraibu huathiri familia nzima. Tunahusisha familia katika mchakato wa uponyaji kwa kupitia vikao vya pamoja, elimu ya uraibu, na usuluhishi wa migogoro ya kifamilia.
        </p>
      </div>

      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold opacity-70">
          🛠️ Ujuzi wa Maisha
        </h2>
        <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
          (Life Skills Training)
        </h3>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Tunawafundisha waraibu stadi muhimu za maisha kama vile usimamizi wa muda, nidhamu ya kifedha, mawasiliano, kufanya maamuzi bora, na maandalizi ya maisha baada ya tiba (re-integration).
        </p>
      </div>

      <div className="mt-10 px-8">
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Tunaamini kuwa kwa kutumia njia hizi za kitaalamu, kila mtu ana nafasi ya kupona, kurejea katika jamii, na kuanza upya maisha yenye matumaini.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md">
            <a
              href="/contact/"
              className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-black border border-purple hover:bg-transparent md:text-lg md:px-10"
            >
              Send Enquiry
            </a>
          </div>
        </div>
      </div>

      <Fade bottom cascade>
        <div className="grid grid-cols-3 mt-10 gap-4 xxs:grid-cols-1 lg:grid-cols-3 px-5">
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 flex justify-center">
            <img alt="Image" src={Image1} />
          </div>
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 flex justify-center">
            <img alt="Image" src={Image2} />
          </div>
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 hidden lg:block ">
            <img alt="Image" src={Image3} />
          </div>
        </div>
      </Fade>

      <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row content-center justify-center align-middle text-center">
          <div className="w-1/3 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-black text-2xl">v1.0.0</h3>
            <h4 className="mt-10 text-black opacity-70 text-xl">Released</h4>
          </div>

          <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Fork</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">PR's welcome</h4>
          </div>
          <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Stars</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">Give support</h4>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default FeatureSection;
