export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* NAVBAR */}
      <header className="bg-slate-950 shadow-lg">
        <div className="container mx-auto flex items-center justify-between p-4">
          <h1 className="text-2xl font-bold text-futuristic flex items-center gap-2">
            <img src="/logo.png" alt="logo" className="w-10" />
            EduMultiPro
          </h1>
          <span className="text-sm text-gray-300">Tu Aliado en el Camino Educativo</span>
        </div>
      </header>

      {/* MAIN */}
      <main className="flex flex-1 items-center justify-center">
        <div className="bg-slate-800/70 backdrop-blur-lg rounded-2xl shadow-2xl flex flex-col md:flex-row items-center p-10 gap-10">
          {/* FORMULARIO */}
          <div className="w-80">
            <h2 className="text-2xl font-bold mb-6 text-center text-futuristic">Iniciar Sesión</h2>
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Correo"
                className="p-3 rounded-xl bg-slate-900 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-futuristic"
              />
              <input
                type="password"
                placeholder="Contraseña"
                className="p-3 rounded-xl bg-slate-900 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-futuristic"
              />
              <button
                type="submit"
                className="p-3 rounded-xl bg-futuristic font-bold hover:bg-secondary transition-all"
              >
                Ingresar
              </button>
              <a href="#" className="text-sm text-center text-gray-300 hover:text-futuristic">
                ¿Olvidaste tu contraseña?
              </a>
            </form>
          </div>

          {/* IMAGEN */}
          <div className="hidden md:block">
            <img src="/imagen1.png" alt="login" className="w-80 rounded-2xl shadow-lg" />
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-950 mt-10">
        <div className="container mx-auto p-6 grid md:grid-cols-3 gap-6 text-gray-300">
          <div>
            <h3 className="font-bold text-white">EduMultiPro</h3>
            <p className="text-sm">
              Innovación y apoyo para tu formación profesional. Cursos, guías y recursos pensados
              para tu crecimiento.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white">Contactos</h3>
            <ul className="text-sm space-y-1">
              <li>+546-160000</li>
              <li>Edu_Pro@gmail.com</li>
              <li>edumultipro.com</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white">Síguenos</h3>
            <div className="flex gap-4 mt-2">
              <a href="#" className="hover:text-futuristic">Facebook</a>
              <a href="#" className="hover:text-futuristic">Twitter</a>
              <a href="#" className="hover:text-futuristic">Instagram</a>
            </div>
            <a href="#" className="block mt-3 text-sm hover:text-futuristic">Términos y Condiciones</a>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm border-t border-slate-700 py-3">
          © 2025 EduMultiPro • Todos los derechos reservados
        </div>
      </footer>
    </div>
  );
}
