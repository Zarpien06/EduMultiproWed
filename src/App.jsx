import { motion } from "framer-motion";
import logo from "./assets/logo.png";
import loginImg from "./assets/1.png";

export default function App() {
  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white">
      {/* FONDO CON PARTICULAS */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_40%)] animate-pulse"></div>
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(236,72,153,0.15),transparent_40%)] animate-pulse"></div>
      </div>

      {/* NAVBAR */}
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="bg-slate-950/70 backdrop-blur-md shadow-lg sticky top-0 z-50"
      >
        <div className="container mx-auto flex items-center justify-between p-4">
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold flex items-center gap-2"
          >
            <img src={logo} alt="logo" className="w-10 drop-shadow-lg" />
            EduMultiPro
          </motion.h1>
          <span className="text-sm text-gray-300">
            Tu Aliado en el Camino Educativo
          </span>
        </div>
      </motion.header>

      {/* MAIN */}
      <main className="flex flex-1 items-center justify-center p-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl flex flex-col md:flex-row items-center p-10 gap-10 border border-white/20 w-full max-w-5xl"
        >
          {/* FORMULARIO */}
          <div className="w-full md:w-96">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold mb-6 text-center"
            >
              Iniciar Sesión
            </motion.h2>
            <form className="flex flex-col gap-4">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                placeholder="Correo"
                className="p-3 rounded-xl bg-slate-900/70 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
              />
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="password"
                placeholder="Contraseña"
                className="p-3 rounded-xl bg-slate-900/70 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="p-3 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 font-bold shadow-md text-white transition-all duration-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
              >
                Ingresar
              </motion.button>
              <a
                href="#"
                className="text-sm text-center text-gray-300 hover:text-pink-400 transition-colors"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </form>
          </div>

          {/* IMAGEN ANIMADA */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="hidden md:block"
          >
            <img
              src={loginImg}
              alt="login"
              className="w-80 rounded-2xl shadow-lg border border-white/20"
            />
          </motion.div>
        </motion.div>
      </main>

      {/* FOOTER */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="bg-slate-950/70 backdrop-blur-md mt-10"
      >
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
              <a href="#" className="hover:text-pink-400 transition-colors">
                🌐 Facebook
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors">
                🐦 Twitter
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors">
                📸 Instagram
              </a>
            </div>
            <a
              href="#"
              className="block mt-3 text-sm hover:text-pink-400 transition-colors"
            >
              Términos y Condiciones
            </a>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm border-t border-slate-700 py-3">
          © 2025 EduMultiPro • Todos los derechos reservados
        </div>
      </motion.footer>
    </div>
  );
}


