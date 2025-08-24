import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import { mockData } from "./mockData";

const Home = () => {
  return (
    <div className="min-h-screen bg-bg-page">
      <Header />
      
      <main>
        <section id="home">
          <Hero data={mockData.hero} />
        </section>
        
        <section id="companies">
          <Companies companies={mockData.companies} />
        </section>
        
        <section id="features">
          <Features features={mockData.features} />
        </section>
        
        <section id="testimonials">
          <Testimonials testimonials={mockData.testimonials} />
        </section>
        
        <section id="pricing">
          <Pricing pricing={mockData.pricing} />
        </section>
        
        <section id="faq">
          <FAQ faqs={mockData.faqs} />
        </section>
      </main>
      
      <Footer />
      <Chatbot responses={mockData.chatbotResponses} />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
