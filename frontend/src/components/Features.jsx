import React from 'react';
import { Brain, Building2, MessageSquare, Users, BarChart3, Code } from 'lucide-react';

const iconMap = {
  Brain,
  Building2, 
  MessageSquare,
  Users,
  BarChart3,
  Code
};

const Features = ({ features }) => {
  return (
    <section className="py-20 bg-bg-page">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-1 mb-4">
            Comprehensive Interview Preparation Platform
          </h2>
          <p className="body-large text-text-secondary max-w-2xl mx-auto">
            Everything you need to ace your dream job interview, powered by cutting-edge AI technology.
          </p>
        </div>

        <div className="voice-grid">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            const colorClass = `accent-${['purple', 'blue', 'orange', 'green', 'pink', 'grey'][index % 6]}`;
            
            return (
              <div key={index} className={`voice-card ${colorClass}`}>
                <div className="mb-4">
                  <IconComponent className="w-8 h-8 text-text-primary" />
                </div>
                <h3 className="voice-card-title">{feature.title}</h3>
                <p className="voice-card-description">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;