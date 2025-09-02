import { motion } from "framer-motion";
import { useState } from "react";
import logo from "./assets/logo.png";
import loginImg from "./assets/1.png";

// Para 3D
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial } from "@react-three/drei";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* NAVBAR */}
      <header className="fixed w-full top-0 z-50 bg-slate-950/70 backdrop-blur-md shadow-md">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-10" />
            <span className="font-bold text-xl bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
              EduMultiPro
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6 text-gray-300 font-medium">
            <a href="#features" className="hover:text-pink-400">Funciones</a>
            <a href="#objetivos" className="hover:text-pink-400">Objetivos</a>
            <a href="#contacto" className="hover:text-pink-400">Contacto</a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-300"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-slate-900 md:hidden flex flex-col gap-4 p-4"
          >
            <a href="#features" className="hover:text-pink-400">Funciones</a>
            <a href="#objetivos" className="hover:text-pink-400">Objetivos</a>
            <a href="#contacto" className="hover:text-pink-400">Contacto</a>
          </motion.nav>
        )}
      </header>

      {/* HERO + LOGIN */}
      <section className="relative h-screen flex items-center justify-center px-6">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover -z-10 opacity-30"
        >
          <source src="https://cdn.coverr.co/videos/coverr-students-studying-1292/1080p.mp4" type="video/mp4" />
        </video>

        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text Left */}
          <div className="text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent"
            >
              Educación Digital al Alcance de Todos
            </motion.h1>
            <p className="text-gray-300 max-w-lg mb-6">
              EduMultiPro centraliza la gestión académica en colegios con recursos limitados. 
              Comunicación, organización y aprendizaje en una sola plataforma.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#features"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 shadow-lg font-bold"
            >
              Explorar Funciones
            </motion.a>
          </div>

          {/* Login Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-slate-900/80 p-8 rounded-2xl shadow-2xl backdrop-blur-lg border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Inicia Sesión</h3>
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Correo electrónico"
                className="p-3 rounded-lg bg-slate-800 border border-slate-700 text-white"
              />
              <input
                type="password"
                placeholder="Contraseña"
                className="p-3 rounded-lg bg-slate-800 border border-slate-700 text-white"
              />
              <button className="px-4 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-blue-500 font-bold">
                Entrar
              </button>
            </form>
            <p className="text-sm text-gray-400 mt-4 text-center">
              ¿No tienes cuenta? <a href="#" className="text-pink-400 hover:underline">Regístrate</a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3D INTERACTIVO MEJORADO */}
      <section className="relative h-[500px] bg-slate-900 flex items-center justify-center">
        <Canvas camera={{ position: [0, 0, 6] }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[3, 3, 3]} intensity={1} />
          <Float speed={3} rotationIntensity={2} floatIntensity={2}>
            <mesh>
              <torusKnotGeometry args={[1.2, 0.4, 128, 32]} />
              <MeshDistortMaterial
                color="#60a5fa"
                distort={0.3}
                speed={2}
                roughness={0.2}
                metalness={0.6}
              />
            </mesh>
          </Float>
          <OrbitControls enableZoom={false} />
        </Canvas>
        <div className="absolute bottom-10 text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
            Innovación en 3D 🚀
          </h2>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-20 container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Funciones Clave</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {["Usuarios", "Cursos", "Noticias", "Horarios", "Materias", "Mensajería"].map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 rounded-2xl p-6 backdrop-blur-lg shadow-lg border border-white/10"
            >
              <h3 className="font-bold text-lg mb-2">{f}</h3>
              <p className="text-gray-300 text-sm">
                Gestión sencilla y centralizada para mejorar la organización escolar.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* OBJETIVOS */}
      <section id="objetivos" className="py-20 bg-slate-900 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Objetivos</h2>
          <ul className="grid md:grid-cols-2 gap-6 text-gray-300 text-lg">
            <li>✔ Gestionar usuarios, cursos, grados y noticias.</li>
            <li>✔ Facilitar comunicación entre docentes y estudiantes.</li>
            <li>✔ Permitir envío y revisión de trabajos.</li>
            <li>✔ Optimizar acceso a información académica.</li>
          </ul>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contacto" className="bg-slate-950/80 backdrop-blur-lg mt-20">
        <div className="container mx-auto px-6 py-10 grid md:grid-cols-4 gap-8 text-gray-300">
          <div>
            <h3 className="text-white font-bold mb-2">EduMultiPro</h3>
            <p>Tu aliado digital en la educación.</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-2">Enlaces</h3>
            <ul className="space-y-1">
              <li><a href="#features" className="hover:text-pink-400">Funciones</a></li>
              <li><a href="#objetivos" className="hover:text-pink-400">Objetivos</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-2">Contacto</h3>
            <p>📧 Edu_Pro@gmail.com</p>
            <p>📞 +546-160000</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-2">Suscríbete</h3>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Tu correo"
                className="p-2 rounded-lg bg-slate-900 border border-slate-700 flex-1"
              />
              <button className="px-4 rounded-lg bg-gradient-to-r from-pink-500 to-blue-500 font-bold">
                OK
              </button>
            </form>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm border-t border-slate-700 py-3">
          © 2025 EduMultiPro • Todos los derechos reservados
        </div>
      </footer>
    </div>
  );
}


