import React from 'react';
import { Button } from './ui/button';
import { Check, Star } from 'lucide-react';

const Pricing = ({ pricing }) => {
  return (
    <section className="py-20 bg-bg-page">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-1 mb-4">
            Choose Your Interview Success Plan
          </h2>
          <p className="body-large text-text-secondary max-w-2xl mx-auto">
            Flexible pricing options designed to help you land your dream job at top MNCs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricing.map((plan, index) => {
            const colorClass = `accent-${['blue', 'purple', 'orange'][index]}`;
            
            return (
              <div 
                key={index} 
                className={`voice-card ${colorClass} relative ${
                  plan.popular ? 'ring-2 ring-text-primary scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-text-primary text-white px-4 py-1 rounded-full text-xs font-mono uppercase flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="voice-card-title mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="heading-hero">{plan.price}</span>
                    <span className="body-small text-text-muted">/{plan.period}</span>
                  </div>
                  <p className="caption">{plan.description}</p>
                </div>
                
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="body-small">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button className={plan.popular ? 'btn-primary' : 'btn-secondary'} size="lg">
                  {plan.popular ? 'Start Free Trial' : 'Get Started'}
                </Button>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <p className="body-small text-text-muted">
            All plans include 7-day money-back guarantee • No setup fees • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;