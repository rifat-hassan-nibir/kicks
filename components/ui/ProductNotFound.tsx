import Link from "next/link";
import Button from "../common/Button";

export default function ProductNotFound() {
  return (
    <div className="body-width px-4 lg:px-0 flex flex-col items-center justify-center py-20 lg:py-40 text-center gap-6 lg:gap-8">
      <div className="flex flex-col gap-2 lg:gap-4">
        <h1 className="font-rubik text-dark-gray text-[48px] lg:text-[120px] font-bold leading-[100%] uppercase">
          Oops!
        </h1>
        <h2 className="font-rubik text-dark-gray text-[24px] lg:text-[48px] font-semibold leading-[100%] uppercase">
          Product Not Found
        </h2>
      </div>

      <p className="text-dark-gray/70 text-[14px] lg:text-[18px] max-w-125 leading-[160%]">
        The product you are looking for might have been removed, had its name changed, or is
        temporarily unavailable.
      </p>

      <Link href="/">
        <Button variant="primary" className="uppercase">
          Back to Home
        </Button>
      </Link>
    </div>
  );
}
