"use client";

import Button from "@/components/common/Button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center body-width px-4 text-center">
      <div className="bg-primary/10 p-6 rounded-full mb-8">
        <svg
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--primary-color, #4A51FF)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>
      <h1 className="text-3xl lg:text-5xl font-bold text-dark-gray mb-4">Something went wrong!</h1>
      <p className="text-dark-gray/60 text-lg mb-10 max-w-md">
        We encountered an unexpected error. Don't worry, our team has been notified.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button onClick={() => reset()} className="px-12 py-4">
          TRY AGAIN
        </Button>
        <Button
          onClick={() => (window.location.href = "/")}
          className="px-12 py-4 bg-white !text-dark-gray border border-dark-gray/20 hover:bg-gray-50"
        >
          GO HOME
        </Button>
      </div>
    </div>
  );
}
