'use client'

import Navbar from "./components/nav";
import Footer from "./components/footer";
import PhotoGallery from "./components/photogallery";
import { useState } from "react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="shadow-2xl shadow-grey-400/40">
        <Navbar />
      </header>
      <main className="flex-grow">
        <div className="container m-4 p-4 text-black">
          Welcome to my recipe app
        </div>
        <PhotoGallery/>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
