import { ctaDetails } from "@/data/cta";

// import AppStoreButton from "./AppStoreButton"
// import PlayStoreButton from "./PlayStoreButton"

const CTA: React.FC = () => {
  return (
    <section id="cta" className="mt-10 mb-5 lg:my-20">
      <div className="relative h-full w-full z-10 mx-auto py-12 sm:py-20">
        <div className="h-full w-full">
          {/* <div className="rounded-3xl opacity-95 absolute inset-0 -z-10 h-full w-full bg-[#c0c0c0] bg-[linear-gradient(to_right,#c0c0c0_1px,transparent_1px),linear-gradient(to_bottom,#12170f_1px,transparent_1px)] bg-[size:6rem_4rem]"></div> */}

          <div className="rounded-3xl opacity-95 absolute inset-0 -z-10 h-full w-full bg-[#c0c0c0]  bg-[size:6rem_4rem]"></div>

          <div className="h-full flex flex-col items-center justify-center text-white text-center px-5">
            <h2 className="text-2xl sm:text-3xl md:text-5xl md:leading-tight font-semibold mb-4 max-w-2xl">
              {ctaDetails.heading}
            </h2>

            <p className="mx-auto max-w-xl md:px-5">{ctaDetails.subheading}</p>

            <div className="mt-4 flex flex-col sm:flex-row items-center sm:gap-4">
              {/* <AppStoreButton />
                        <PlayStoreButton /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
