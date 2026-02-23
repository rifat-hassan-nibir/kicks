# Kicks - Premium Sneaker Marketplace

Kicks is a modern, high-performance sneaker e-commerce application built with Next.js 16. It features a premium design aesthetic, responsive layouts, and a seamless shopping experience.

## 🚀 Overview

Kicks provides a curated shopping experience for sneaker enthusiasts. The platform focuses on high-quality visuals, smooth transitions, and an intuitive user interface.

### Key Features:

- **Dynamic Home Page**: Featuring Hero banners, new drops, and category sliders.
- **Advanced Cart System**: Global cart state management with instant UI feedback (Toast notifications).
- **Premium Product Details**: Interactive image galleries and size/color selection.
- **Performance Optimized**: Built with Next.js App Router and Turbopack for lightning-fast speeds.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Core Library**: [React 19](https://react.dev/)
- **Icons**: Custom SVG icons & optimized image assets
- **Fonts**: Google Fonts (Rubik & Open Sans)
- **Deployments**: Vercel ready

## 🏗️ Setup & Installation

Follow these steps to get the project running locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/rifat-hassan-nibir/kicks.git
   cd kicks
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Build for production:**

   ```bash
   npm run build
   ```

5. **Start production server:**
   ```bash
   npm run start
   ```

## 🔗 Live URL

The application is deployed and available at:
[https://kicks-store-nibir.vercel.app/](https://kicks-store-nibir.vercel.app/)

## 📝 Developer Notes

- **State Management**: Uses React Context API (`CartContext` and `ToastContext`) for lightweight and efficient state handling.
- **Animations**: Custom CSS-based animations (`fadeInUp`, `slideInRight`) are used to ensure a high-end feel without the weight of external animation libraries.
- **Scroll Stability**: Implemented `scrollbar-gutter: stable` to prevent layout shifts during navigation and loading.
- **Image Optimization**: Utilizes `next/image` for automatic resizing, lazy loading, and formatting.
