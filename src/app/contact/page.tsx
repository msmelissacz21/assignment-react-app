'use client'

import Contact from "../components/contact";
import Footer from "../components/footer";
import Navbar from "../components/nav";



export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="shadow-2xl shadow-orange-500/50">
        <Navbar />
      </header>
      <main className="flex-grow">
        <Contact/>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}