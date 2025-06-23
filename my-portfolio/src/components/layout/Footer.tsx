// components/layout/Footer.tsx
export function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © 2024 GABA Kossi Martinien. Tous droits réservés.
          </div>
          <div className="text-gray-400">
            Conçu avec ❤️ en utilisant Next.js & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  )
}
