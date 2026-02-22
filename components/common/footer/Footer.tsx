import { footerCategories, footerCompany, footerSocialLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary body-width rounded-b-3xl lg:rounded-b-[48px] overflow-hidden">
      <div className="bg-dark-gray rounded-3xl lg:rounded-[48px] overflow-hidden">
        <div className="px-4 lg:px-10 pt-6 lg:pt-10">
          {/* About Us and Important Links */}
          <div className="flex justify-between items-start lg:gap-20 xl:gap-30.5 gap-10 flex-wrap">
            {/* About Us */}
            <div className="flex flex-col gap-y-1 max-w-111.5">
              <h1 className="text-secondary text-[24px] lg:text-4xl font-semibold">About Us</h1>
              <p className="text-gray font-open-sans text-[16px] lg:text-[20px] font-medium">
                We are the biggest hyperstore in the universe. We got you all cover with our
                exclusive collections and latest drops.
              </p>
            </div>

            {/* Important Links */}
            <div className="w-full xl:w-auto flex flex-col lg:flex-row justify-between gap-6 lg:gap-32 flex-wrap">
              {/* Categories */}
              <div className="flex flex-col gap-4">
                <p className="text-secondary text-[24px] lg:text-2xl font-semibold">Categories</p>
                <div className="flex flex-col gap-y-1">
                  {footerCategories.map((link) => (
                    <Link
                      key={link.id}
                      href={link.href}
                      className="text-gray font-open-sans text-[16px] lg:text-[20px] font-medium"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Company */}
              <div className="flex flex-col gap-4">
                <p className="text-secondary text-[24px] lg:text-2xl font-semibold">Company</p>
                <div className="flex flex-col gap-y-1">
                  {footerCompany.map((link) => (
                    <Link
                      key={link.id}
                      href={link.href}
                      className="text-gray font-open-sans text-[16px] lg:text-[20px] font-medium"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Follow Us */}
              <div className="flex flex-col gap-4">
                <p className="text-secondary text-[24px] lg:text-2xl font-semibold">Follow Us</p>
                <div className="flex gap-6">
                  {footerSocialLinks.map((link) => (
                    <Link
                      key={link.id}
                      href={link.href}
                      className="text-gray font-open-sans text-[20px] font-medium"
                    >
                      <Image src={link.icon} alt={link.title} width={24} height={24} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Logo */}
        <div className="w-full px-0.75 lg:px-7.25 mt-11.25 lg:mt-24.25">
          <Image
            src="/assets/logo/footer-logo.png"
            alt="footer-logo"
            width={1262}
            height={313}
            className="w-full h-auto block"
          />
        </div>
      </div>
    </footer>
  );
}
