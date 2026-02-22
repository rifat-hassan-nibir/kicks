import newsletterLogo from "@/public/assets/logo/newsletter-logo.png";
import Image from "next/image";

export default function NewsLetter() {
  return (
    <div className="body-width flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-20 xl:gap-50.75 bg-primary rounded-t-3xl pt-4 lg:pt-16 px-4 lg:pl-18 lg:pr-42 lg:rounded-t-[48px] overflow-hidden">
      <div className="max-w-full lg:max-w-127.5 text-left">
        <h3 className=" text-white text-[32px] md:text-[36px] lg:text-[48px] font-semibold uppercase leading-tight">
          Join our KicksPlus <br /> Club & get 15% off
        </h3>
        <p className="mt-2 lg:mt-4 text-gray font-open-sans text-[16px] lg:text-[20px] font-semibold">
          Sign up for free! Join the community.
        </p>

        <div className="flex justify-start lg:justify-start mt-6 lg:mt-8 lg:mb-9.75">
          <div className="flex items-start gap-1 w-full max-w-md">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              className="flex-1 min-w-0 bg-none border border-white rounded-lg px-4 lg:px-6 py-3 lg:py-3.5 text-gray text-[14px] lg:text-[16px] font-normal placeholder:text-gray focus:outline-none font-open-sans h-10 lg:h-12"
            />
            <button className="whitespace-nowrap hover:cursor-pointer bg-dark-gray text-white px-4 lg:px-6 h-10 lg:h-12 rounded-lg uppercase hover:bg-black transition-all flex items-center justify-center text-[14px] font-medium tracking-[0.25px]">
              SUBMIT
            </button>
          </div>
        </div>
      </div>

      {/* Logo */}
      <div className="flex justify-start w-full lg:w-auto pb-10.25 lg:pb-0">
        <Image
          src={newsletterLogo}
          alt="newsletter-logo"
          width={367}
          height={112}
          className="w-[200px] md:w-[280px] lg:w-[367px] h-auto"
        />
      </div>
    </div>
  );
}
