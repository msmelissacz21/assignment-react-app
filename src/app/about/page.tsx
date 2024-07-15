'use client'

import Footer from "../components/footer";
import Navbar from "../components/nav";
import About from "../components/about";



export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="shadow-2xl shadow-orange-500/50">
        <Navbar />
      </header>
      <main className="flex-grow">
        <About/>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}