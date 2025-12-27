# 📚 Bookworm - Katalog Buku

<div align="center">

![Bookworm Logo](public/logo-with-name.png)

**Temukan Bacaan Favoritmu**

Eksplorasi ribuan koleksi buku terbaik. Temukan kisah yang menginspirasi dan pengetahuan baru setiap hari.

[![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

</div>

---

## ✨ Features

### 🏠 Homepage

- **Hero Section** - Carousel menampilkan 5 buku dengan diskon tertinggi
- **Category Sidebar** - Filter buku berdasarkan kategori (Beauty, Fragrances, Furniture, Groceries)
- **Responsive Grid** - Tampilan grid 1-4 kolom yang responsif
- **Search** - Pencarian buku dengan debounce
- **Skeleton Loading** - Loading state yang menarik dengan animasi shimmer

### 📖 Book Detail

- **Image Gallery** - Carousel gambar dengan navigasi dan thumbnail
- **Product Info** - Informasi lengkap (judul, brand, rating, harga, deskripsi)
- **Specifications** - Detail spesifikasi buku
- **Reviews** - Ulasan dari pembeli
- **Add to Cart** - Tambah ke keranjang dengan quantity selector

### 🛒 Shopping Cart

- **Persistent Cart** - Data keranjang tersimpan di localStorage
- **Mini Cart Dropdown** - Preview keranjang di header
- **Quantity Management** - Update jumlah item
- **Price Calculation** - Total harga dengan diskon

### 🎨 Design

- **Emerald Green Theme** - Warna tema hijau emerald yang konsisten
- **Dark Mode Support** - Dukungan mode gelap
- **DM Sans Font** - Typography yang modern dan mudah dibaca
- **Responsive Design** - Mobile-first design

---

## 🛠️ Tech Stack

| Technology                                    | Version | Description                     |
| --------------------------------------------- | ------- | ------------------------------- |
| [Next.js](https://nextjs.org/)                | 16.1.1  | React framework with App Router |
| [React](https://react.dev/)                   | 19.2.3  | UI library                      |
| [TypeScript](https://www.typescriptlang.org/) | 5       | Type-safe JavaScript            |
| [Tailwind CSS](https://tailwindcss.com/)      | 4       | Utility-first CSS framework     |
| [pnpm](https://pnpm.io/)                      | -       | Fast package manager            |

---

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── books/[id]/        # Book detail page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── AddToCartButton/   # Add to cart functionality
│   ├── AppLayout/         # App layout wrapper
│   ├── BookCard/          # Book card component
│   ├── BookCatalog/       # Book catalog with search
│   ├── BookDetail/        # Book detail components
│   ├── BookGrid/          # Grid layout for books
│   ├── CartButton/        # Cart dropdown
│   ├── EmptyState/        # Empty state component
│   ├── ErrorState/        # Error state component
│   ├── Header/            # App header
│   ├── HeroSection/       # Homepage hero carousel
│   ├── HomeClient/        # Home page client component
│   ├── LoadingSpinner/    # Loading skeleton
│   ├── RatingStars/       # Star rating component
│   ├── SearchBar/         # Search input
│   └── Sidebar/           # Category sidebar
├── contexts/              # React contexts
│   └── CartContext.tsx    # Shopping cart state
├── hooks/                 # Custom hooks
│   ├── useBooks.ts        # Books data fetching
│   └── useDebounce.ts     # Debounce hook
├── lib/                   # Utilities
│   └── api.ts             # API functions
├── types/                 # TypeScript types
│   └── book.ts            # Book type definitions
└── utils/                 # Helper functions
    └── search.ts          # Search utilities
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- pnpm (recommended) or npm/yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/sincanmaulanaa/book-catalog.git
   cd book-catalog
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Run development server**

   ```bash
   pnpm dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
pnpm build
pnpm start
```

---

## 📡 API

This project uses [DummyJSON](https://dummyjson.com/) API for product data.

### Endpoints Used

| Endpoint                  | Description          |
| ------------------------- | -------------------- |
| `GET /products?limit={n}` | Get list of products |
| `GET /products/{id}`      | Get product by ID    |

---

## 🎯 Key Components

### CartContext

Manages shopping cart state with localStorage persistence.

```tsx
const { items, addToCart, removeFromCart, totalItems, totalPrice } = useCart();
```

### useBooks Hook

Fetches and filters books with debounced search.

```tsx
const { books, filteredBooks, isLoading, error, searchQuery, setSearchQuery } =
  useBooks({ category });
```

### HeroSection

Auto-sliding carousel featuring top discounted books.

### ProductGallery

Interactive image gallery with thumbnails and navigation.

---

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## 📄 License

This project is for educational purposes.

---

## 🙏 Acknowledgments

- [DummyJSON](https://dummyjson.com/) for the mock API
- [Heroicons](https://heroicons.com/) for icons
- [Tailwind CSS](https://tailwindcss.com/) for styling

---

<div align="center">

**Made with ❤️ by Sincan Maulana**

</div>
