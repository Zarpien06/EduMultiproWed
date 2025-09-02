import logo from "./assets/logo.png";
import loginImg from "./assets/1.png";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white">
      {/* NAVBAR */}
      <header className="bg-slate-950/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between p-4">
          <h1 className="text-2xl font-bold flex items-center gap-2 text-futuristic">
            <img src={logo} alt="logo" className="w-10 drop-shadow-lg" />
            EduMultiPro
          </h1>
          <span className="text-sm text-gray-300">
            Tu Aliado en el Camino Educativo
          </span>
        </div>
      </header>

      {/* MAIN */}
      <main className="flex flex-1 items-center justify-center p-6">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl flex flex-col md:flex-row items-center p-10 gap-10 border border-white/20 w-full max-w-4xl">
          {/* FORMULARIO */}
          <div className="w-full md:w-96">
            <h2 className="text-3xl font-bold mb-6 text-center text-futuristic">
              Iniciar Sesión
            </h2>
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Correo"
                className="p-3 rounded-xl bg-slate-900/60 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-futuristic"
              />
              <input
                type="password"
                placeholder="Contraseña"
                className="p-3 rounded-xl bg-slate-900/60 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-futuristic"
              />
              <button
                type="submit"
                className="p-3 rounded-xl bg-futuristic font-bold hover:bg-secondary transition-all duration-300 shadow-md hover:scale-105"
              >
                Ingresar
              </button>
              <a
                href="#"
                className="text-sm text-center text-gray-300 hover:text-futuristic transition-colors"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </form>
          </div>

          {/* IMAGEN */}
          <div className="hidden md:block">
            <img
              src={loginImg}
              alt="login"
              className="w-80 rounded-2xl shadow-lg border border-white/20"
            />
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-950/80 backdrop-blur-md mt-10">
        <div className="container mx-auto p-6 grid md:grid-cols-3 gap-6 text-gray-300">
          <div>
            <h3 className="font-bold text-white text-lg">EduMultiPro</h3>
            <p className="text-sm leading-relaxed">
              Innovación y apoyo para tu formación profesional. Cursos, guías y
              recursos pensados para tu crecimiento.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white text-lg">Contactos</h3>
            <ul className="text-sm space-y-1">
              <li>📞 +546-160000</li>
              <li>📧 Edu_Pro@gmail.com</li>
              <li>🌐 edumultipro.com</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white text-lg">Síguenos</h3>
            <div className="flex gap-4 mt-2">
              <a href="#" className="hover:text-futuristic transition-colors">
                🌐 Facebook
              </a>
              <a href="#" className="hover:text-futuristic transition-colors">
                🐦 Twitter
              </a>
              <a href="#" className="hover:text-futuristic transition-colors">
                📸 Instagram
              </a>
            </div>
            <a
              href="#"
              className="block mt-3 text-sm hover:text-futuristic transition-colors"
            >
              Términos y Condiciones
            </a>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm border-t border-slate-700 py-3">
          © 2025 EduMultiPro • Todos los derechos reservados
        </div>
      </footer>
    </div>
  );
}



