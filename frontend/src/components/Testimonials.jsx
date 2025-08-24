import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = ({ testimonials }) => {
  return (
    <section className="py-20 bg-bg-section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-1 mb-4">
            Success Stories from Our Community
          </h2>
          <p className="body-large text-text-secondary max-w-2xl mx-auto">
            Join thousands of professionals who landed their dream jobs with our AI-powered interview preparation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const colorClass = `accent-${['purple', 'blue', 'orange'][index % 3]}`;
            
            return (
              <div key={index} className={`voice-card ${colorClass}`}>
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="voice-card-title text-sm">{testimonial.name}</div>
                    <div className="caption">{testimonial.role}</div>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="voice-card-description">"{testimonial.content}"</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;