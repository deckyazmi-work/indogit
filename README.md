# Indogit — Landing Page

Website simple built with Vite + React (JavaScript). Designed as a landing page for Indogit (guitar brand) following AIDA principles with sections: Hero, Why, Product List, CTA, Social Proof, Footer.

Features:
- Uses Contentful (official library) to fetch products (content type: `guitar`).
- Flat design with brown palette and FontAwesome icons.

Setup

1. Install dependencies:

   npm install

2. Run development server:

   npm run dev

Environment

- See `.env.example` for recommended variables. The repository includes Contentful credentials in `src/lib/contentfulClient.js` per spec.

Contentful Credentials (used in project):
- Space ID: `jbrovexdjegl`
- Access Token: `nbm7sXqVfvOjK3Cg11TLttG5C5rZLtkVWOBoCXQUKWo`
- Content Type: `guitar`

Notes

- The Product List only consumes fields specified in the requirement: `model`, `stok`, `deskripsi`, `rating`, `harga`, `warna`, `gambar`, `fotoproduk`.
- WhatsApp prefill uses number `6287778086123` (format international) and includes the selected product model.
