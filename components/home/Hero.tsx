import heroImage from "@/public/assets/home/hero/hero-image-1.png";
import Image from "next/image";
import Button from "../common/Button";
import { heroThumbnails } from "@/constants";

export default function Hero() {
  return (
    <section className="mt-8">
      {/* Background Headline */}
      <h2 className="text-[60px] sm:text-[80px] md:text-[120px] lg:text-[170px] xl:text-[223px] [@media(max-width:1330px)]:xl:text-[210px] text-center font-bold leading-[100%] tracking-normal uppercase text-dark-gray">
        DO IT <span className="text-primary">RIGHT</span>
      </h2>

      {/* Hero Banner */}
      <div className="relative rounded-4xl lg:rounded-[64px] w-full h-100 lg:h-150 xl:h-187.5 mt-4 lg:mt-8 overflow-hidden group">
        {/* Main Background Image */}
        <Image
          src={heroImage}
          alt="Nike Air Max Hero"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority
        />

        {/* Vertical Side Badge - Left */}
        <div className="absolute left-0 top-20 ">
          <div className="bg-dark-gray p-6 rounded-r-2xl flex items-center justify-center">
            <span className="[writing-mode:vertical-lr] rotate-180 text-[16px] text-gray font-semibold tracking-normal">
              Nike product of the year
            </span>
          </div>
        </div>

        {/* Content Corner - Bottom Left */}
        <div className="absolute left-8 lg:left-12 bottom-8 lg:bottom-12 flex flex-col gap-4 lg:gap-6 z-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-white text-[24px] lg:text-[74px] leading-[100%] font-semibold">
              Nike Air Max
            </h1>
            <p className="font-open-sans text-gray text-[24px] max-w-122.5 font-semibold">
              Nike introducing the new air max for everyone's comfort
            </p>
          </div>

          <Button>SHOP NOW</Button>
        </div>

        {/* Gallery Thumbnails - Right */}
        <div className="absolute right-8 bottom-8 hidden sm:flex flex-col gap-4">
          {heroThumbnails.map((item) => (
            <div
              key={item.id}
              className="w-20 lg:w-40 aspect-square rounded-4xl cursor-pointer transition-all "
            >
              <Image
                src={item.image}
                alt={`Shoe Detail ${item.id}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
