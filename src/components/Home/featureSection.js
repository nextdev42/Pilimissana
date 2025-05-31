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
      {/* Top Feature Boxes */}
      <Fade bottom cascade>
        <div className="mt-10 flex flex-row xxs:flex-col xs:flex-col sm:flex-row items-center justify-center text-center">
          <div className="w-1/3 bg-gradient-to-r from-pink-500 to-purple-500 p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-black text-2xl">Huduma zetu</h3>
            <h4 className="mt-10 text-black opacity-70 text-xl">95+</h4>
          </div>
          <div className="w-1/3 bg-gray-900 p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Accessibility</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">100</h4>
          </div>
          <div className="w-1/3 bg-gray-900 p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Best Practices</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">100</h4>
          </div>
          <div className="lg:rounded-xl lg:w-1/3 lg:bg-gray-900 bg-gray-900 p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:hidden md:hidden lg:block">
            <h3 className="text-white text-2xl">SEO</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">100</h4>
          </div>
        </div>
      </Fade>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto lg:px-8 md:px-3">
        <div className="mx-auto max-w-7xl px-4 sm:mt-10 sm:px-6 md:mt-10 lg:mt-10 lg:px-0 xl:mt-10 flex flex-col lg:flex-row gap-3">
          <div className="lg:w-1/2 my-4">
            <img
              className="rounded-xl h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src={HeroImage}
              alt="Hero"
            />
          </div>
          <div className="lg:w-1/2 sm:text-center lg:text-right flex flex-col justify-center">
            <h2 className="text-black text-4xl font-semibold">HUDUMA ZETU</h2>
            <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Time to unlock new speeds
            </h3>
            <p className="mt-3 text-base text-black opacity-70 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto lg:mr-0">
              Katika Pilimisanah Foundation Sober House, tunatoa huduma za kina
              na za kitaalamu kwa ajili ya matibabu ya uraibu na afya ya akili.
              Kila mteja hupokea huduma kulingana na mahitaji yake binafsi, kwa
              lengo la kuhakikisha mabadiliko ya kweli, ya kudumu na yenye
              maana. Huduma zetu ni pamoja na:
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-end">
              <div className="rounded-md">
                <a
                  href="tel:+255700000000"
                  className="transition-all duration-500 ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple-500 text-white hover:text-black border border-purple-500 hover:bg-transparent md:text-lg md:px-10"
                >
                  Call Us Now
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="/gallery"
                  className="transition-all duration-500 ease-in-out w-full flex items-center justify-center px-8 py-3 border border-purple-500 text-base font-medium rounded-md text-black hover:text-white bg-transparent hover:bg-purple-500 md:py-3 md:text-lg md:px-10"
                >
                  View Gallery
                  <svg
                    className="w-3.5 h-3.5 ml-2 rtl:rotate-180"
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

      {/* TECH & Counseling Section */}
      <Fade bottom cascade>
        <div className="mt-10 flex flex-row xxs:flex-col xs:flex-col sm:flex-row">
          <div className="w-2/6 bg-gradient-to-r from-pink-500 to-purple-500 p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-2/6">
            <span className="text-black font-semibold font-montserrat text-4xl">
              TECH STACK
            </span>
            <div className="mt-5">
              <p className="text-black text-2xl">Gatsby 5+</p>
              <p className="text-black opacity-50 text-sm">SSG and more...</p>
              <div className="mt-5">
                <p className="text-black text-2xl">React 18+</p>
                <p className="text-black opacity-50 text-sm">Create more...</p>
              </div>
              <div className="mt-5">
                <p className="text-black text-2xl">Tailwind CSS 3+</p>
                <p className="text-black opacity-50 text-sm">
                  A utility-first CSS
                </p>
              </div>
            </div>
          </div>
          <div className="w-4/6 bg-gray-900 p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-4/6">
            <h2 className="text-white text-4xl">
              🧠 Ushauri Nasaha (Counseling)
            </h2>
            <p className="mt-10 text-white opacity-70">
              Tunatoa ushauri nasaha wa mtu mmoja mmoja, wa kikundi, na wa ndoa
              au familia, kwa ajili ya kusaidia waraibu kuelewa hali yao na
              kupata mwongozo wa kihisia na kisaikolojia katika safari ya
              kupona.
            </p>
          </div>
        </div>
      </Fade>

      {/* Therapy Sections */}
      {[
        {
          title: "♂️ Afya ya Akili",
          subtitle: "Mental Health Services",
          desc: "Tunatambua kuwa changamoto nyingi za uraibu huambatana na matatizo ya afya ya akili...",
        },
        {
          title: "🔄 Mpango wa Hatua 12",
          subtitle: "12 Step Program – Narcotics Anonymous",
          desc: "Tunatumia mfumo wa kimataifa wa hatua 12 uliothibitishwa kusaidia waraibu...",
        },
        {
          title: "🧑‍🤝‍🧑 Tiba ya Kijamii",
          subtitle: "Social Therapy",
          desc: "Kupitia shughuli za kijamii, michezo, kazi za pamoja na mijadala ya vikundi...",
        },
        {
          title: "👨‍👩‍👧‍👦 Tiba ya Familia",
          subtitle: "Family Therapy",
          desc: "Uraibu huathiri familia nzima. Tunahusisha familia katika mchakato wa uponyaji...",
        },
        {
          title: "🛠️ Ujuzi wa Maisha",
          subtitle: "Life Skills Training",
          desc: "Tunawafundisha waraibu stadi muhimu za maisha kama vile usimamizi wa muda...",
        },
      ].map((item, index) => (
        <div className="mt-10 px-8" key={index}>
          <h2 className="text-black text-4xl font-semibold opacity-70">
            {item.title}
          </h2>
          <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            ({item.subtitle})
          </h3>
          <p className="text-black opacity-70 font-normal mt-3 text-xs md:text-sm lg:text-lg">
            {item.desc}
          </p>
        </div>
      ))}

      {/* Ending CTA */}
      <div className="mt-10 px-8">
        <p className="text-black opacity-70 font-normal mt-3 text-xs md:text-sm lg:text-lg">
          Tunaamini kuwa kwa kutumia njia hizi za kitaalamu, kila mtu ana nafasi
          ya kupona, kurejea katika jamii, na kuanza upya maisha yenye matumaini.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md">
            <a
              href="/contact/"
              className="transition-all duration-500 ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple-500 text-white hover:text-black border border-purple-500 hover:bg-transparent md:text-lg md:px-10"
            >
              Send Enquiry
            </a>
          </div>
        </div>
      </div>

      {/* Image Grid */}
      <Fade bottom cascade>
        <div className="grid grid-cols-3 mt-10 gap-4 xxs:grid-cols-1 lg:grid-cols-3 px-5">
          {[Image1, Image2, Image3].map((src, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden relative hover:opacity-100 flex justify-center ${
                index === 2 ? "hidden lg:block" : ""
              }`}
            >
              <img alt="Image" src={src} />
            </div>
          ))}
        </div>
      </Fade>

      {/* Footer Feature Boxes */}
      <Fade bottom cascade>
        <div className="mt-10 flex flex-row xxs:flex-col xs:flex-col sm:flex-row items-center justify-center text-center">
          <div className="w-1/3 bg-gradient-to-r from-pink-500 to-purple-500 p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-black text-2xl">v1.0.0</h3>
            <h4 className="mt-10 text-black opacity-70 text-xl">Released</h4>
          </div>
          <div className="w-1/3 bg-gray-900 p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Fork</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">PR's welcome</h4>
          </div>
          <div className="w-1/3 bg-gray-900 p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Stars</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">Give support</h4>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default FeatureSection;
