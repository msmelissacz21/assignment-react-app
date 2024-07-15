'use client'

import { useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/nav";
import RecipeList from "../components/recipelist";



export default function Home() {

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="shadow-2xl shadow-orange-500/50">
        <Navbar />
      </header>
      <main className="flex-grow">
        <RecipeList/>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}