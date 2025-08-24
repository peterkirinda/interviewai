import React from 'react';
import { Button } from './ui/button';
import { Play, ArrowRight } from 'lucide-react';

const Hero = ({ data }) => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-announcement">
            <span>{data.announcement}</span>
          </div>
          
          <h1 className="heading-hero hero-title">
            {data.title}
          </h1>
          
          <p className="body-large hero-subtitle">
            {data.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button className="btn-primary">
              Start Free Trial
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button className="btn-secondary">
              <Play className="mr-2 w-4 h-4" />
              Watch Demo
            </Button>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
            {data.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="heading-2 text-accent-purple-400">{stat.value}</div>
                <div className="caption">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;