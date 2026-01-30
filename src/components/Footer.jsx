import React from 'react'

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Indogit • Gitar Luthier Lokal</p>
        <p className="small">Kontak: <a href="https://wa.me/6287778086123">WhatsApp</a> • Built with ❤️</p>
      </div>
    </footer>
  )
}