"use client";

import { createContext, ReactNode, useCallback, useContext, useState } from "react";

// Since framer-motion is not in package.json, I'll use CSS animations instead or check if I can add it.
// Actually, I should check if I can use framer-motion. If not, I'll use vanilla CSS.
// The user didn't ask to install libraries. I'll stick to Vanilla CSS/Tailwind animations.

interface Toast {
  id: string;
  message: string;
  type: "success" | "error" | "info";
  productImage?: string;
}

interface ToastContextType {
  showToast: (message: string, type?: "success" | "error" | "info", productImage?: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback(
    (message: string, type: "success" | "error" | "info" = "success", productImage?: string) => {
      const id = Math.random().toString(36).substring(2, 9);
      setToasts((prev) => [...prev, { id, message, type, productImage }]);

      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 3000);
    },
    [],
  );

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed bottom-4 right-4 z-9999 flex flex-col gap-2 pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="pointer-events-auto flex items-center gap-3 bg-dark-gray text-white px-4 py-3 rounded-xl shadow-2xl animate-slide-in-right max-w-sm border border-white/10"
          >
            {toast.productImage && (
              <div className="w-12 h-12 rounded-lg bg-gray overflow-hidden shrink-0">
                <img
                  src={toast.productImage}
                  alt="Product"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="flex flex-col">
              <span className="font-rubik font-semibold text-[14px] uppercase tracking-wide">
                Added to Cart
              </span>
              <span className="font-open-sans text-[12px] opacity-80 line-clamp-1">
                {toast.message}
              </span>
            </div>
            <div className="w-1 h-10 bg-primary/30 rounded-full ml-2" />
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in-right {
          animation: slideInRight 0.3s ease-out forwards;
        }
      `}</style>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within ToastProvider");
  return context;
};
