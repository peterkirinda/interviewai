import React, { useState } from 'react';
import { Clock, TrendingUp, ChevronRight } from 'lucide-react';

const Companies = ({ companies }) => {
  const [selectedCompany, setSelectedCompany] = useState(companies[0]);

  return (
    <section className="py-20 bg-bg-section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-1 mb-4">
            Master Company-Specific Interview Processes
          </h2>
          <p className="body-large text-text-secondary max-w-2xl mx-auto">
            Experience authentic hiring simulations for top MNCs in India. Each simulation follows the exact process used by these companies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Company Selection */}
          <div className="space-y-4">
            {companies.map((company) => (
              <div 
                key={company.id}
                className={`voice-card cursor-pointer transition-all ${
                  selectedCompany.id === company.id ? `accent-${company.color} ring-2 ring-text-primary` : ''
                }`}
                onClick={() => setSelectedCompany(company)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img 
                      src={company.logo} 
                      alt={company.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="voice-card-title">{company.name}</h3>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {company.avgDuration}
                        </span>
                        <span className="flex items-center gap-1">
                          <TrendingUp className="w-4 h-4" />
                          {company.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-text-muted" />
                </div>
              </div>
            ))}
          </div>

          {/* Selected Company Process */}
          <div className="voice-card accent-grey-200">
            <div className="voice-card-title mb-6">
              {selectedCompany.name} Interview Process
            </div>
            
            <div className="space-y-4">
              {selectedCompany.process.map((step, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-text-primary text-white flex items-center justify-center font-mono text-sm">
                    {index + 1}
                  </div>
                  <div className="body-medium">{step}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-border-light">
              <div className="flex items-center justify-between">
                <div>
                  <div className="caption">Average Duration</div>
                  <div className="body-medium font-semibold">{selectedCompany.avgDuration}</div>
                </div>
                <div>
                  <div className="caption">Difficulty Level</div>
                  <div className="body-medium font-semibold">{selectedCompany.difficulty}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;