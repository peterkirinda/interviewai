import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

const FAQ = ({ faqs }) => {
  return (
    <section className="py-20 bg-bg-section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-1 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="body-large text-text-secondary max-w-2xl mx-auto">
            Everything you need to know about our AI Mock Interview platform.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="voice-card accent-grey-200 border-0"
              >
                <AccordionTrigger className="voice-card-title text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="voice-card-description pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;