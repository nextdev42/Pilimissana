import React from "react";

const AboutExtra = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold">Dira Yetu (Vision)</h2>
        <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
          Kuona Tanzania isiyo na dawa za kulevya—jamii yenye afya, heshima na malengo, iliyo huru dhidi ya minyororo ya uraibu.
        </h3>

        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Maadili Yetu ya Msingi (Core Values)
        </p>

        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          1. Huruma – Tunakutana na kila mtu kwa heshima na upendo, bila kujali historia yake.
        </p>

        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          2. Uadilifu – Tunazingatia ukweli, uwazi na uwajibikaji katika kila hatua ya kazi yetu.
        </p>

        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          3. Matumaini – Tunaamini kuwa kila mtu anaweza kupona, haijalishi changamoto alizopitia.
        </p>

        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          4. Mabadiliko – Tunahimiza ukuaji wa kibinafsi, uwajibikaji na kujifunza kwa maisha yote.
        </p>

        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          5. Jamii – Tunaamini kuwa uponyaji wa kweli hutokea ndani ya mahusiano na msaada wa pamoja.
        </p>

        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          6. Nidhamu – Tunadumisha mpangilio na uthabiti kama nguzo muhimu ya safari ya uponyaji.
        </p>

        <div className="mt-5 sm:mt-8 sm:flex sm:justify-start lg:justify-start">
          <div className="rounded-md">
            <a
              href="/contact/"
              className="transition-all duration-500 ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-black border border-purple hover:bg-transparent md:text-lg md:px-10"
            >
              WASILIANA NASI
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
  );
};

export default AboutExtra;
