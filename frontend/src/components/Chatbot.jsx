import React, { useState } from 'react';
import { Button } from './ui/button';
import { MessageCircle, Send, X, User, Bot } from 'lucide-react';

const Chatbot = ({ responses }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', content: responses.greeting }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const quickReplies = [
    { label: 'Pricing Plans', key: 'pricing' },
    { label: 'Supported Companies', key: 'companies' },
    { label: 'Platform Features', key: 'features' },
    { label: 'Free Trial', key: 'trial' }
  ];

  const handleSendMessage = (message = inputMessage) => {
    if (!message.trim()) return;

    const userMessage = { type: 'user', content: message };
    setMessages(prev => [...prev, userMessage]);
    
    // Simple keyword-based responses
    let botResponse = responses.default;
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('pricing') || lowerMessage.includes('cost') || lowerMessage.includes('price')) {
      botResponse = responses.pricing;
    } else if (lowerMessage.includes('company') || lowerMessage.includes('tcs') || lowerMessage.includes('accenture')) {
      botResponse = responses.companies;
    } else if (lowerMessage.includes('feature') || lowerMessage.includes('what') || lowerMessage.includes('how')) {
      botResponse = responses.features;
    } else if (lowerMessage.includes('support') || lowerMessage.includes('help') || lowerMessage.includes('contact')) {
      botResponse = responses.support;
    } else if (lowerMessage.includes('trial') || lowerMessage.includes('free') || lowerMessage.includes('demo')) {
      botResponse = responses.trial;
    }
    
    setTimeout(() => {
      const botMessage = { type: 'bot', content: botResponse };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
    
    setInputMessage('');
  };

  const handleQuickReply = (key) => {
    const message = quickReplies.find(reply => reply.key === key)?.label || '';
    handleSendMessage(message);
  };

  return (
    <>
      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          onClick={() => setIsOpen(true)}
          className="btn-primary rounded-full w-14 h-14 p-0 shadow-lg hover:scale-110 transition-transform"
          style={{ display: isOpen ? 'none' : 'flex' }}
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-bg-card rounded-xl shadow-2xl border border-border-light z-50 flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-border-light flex items-center justify-between bg-gradient-hero-subtle rounded-t-xl">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-accent-purple-400 rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="font-semibold text-sm">AI Assistant</div>
                <div className="text-xs text-text-muted">Online now</div>
              </div>
            </div>
            <Button 
              onClick={() => setIsOpen(false)}
              className="btn-nav w-8 h-8 p-0"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`flex gap-2 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.type === 'bot' && (
                  <div className="w-6 h-6 bg-accent-purple-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-3 h-3 text-white" />
                  </div>
                )}
                <div className={`max-w-[80%] p-3 rounded-lg text-sm ${
                  message.type === 'user' 
                    ? 'bg-text-primary text-white rounded-br-none' 
                    : 'bg-accent-grey-200 text-text-primary rounded-bl-none'
                }`}>
                  {message.content}
                </div>
                {message.type === 'user' && (
                  <div className="w-6 h-6 bg-text-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-3 h-3 text-white" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          {messages.length === 1 && (
            <div className="p-4 pt-0">
              <div className="text-xs text-text-muted mb-2">Quick questions:</div>
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply) => (
                  <button
                    key={reply.key}
                    onClick={() => handleQuickReply(reply.key)}
                    className="btn-tag text-xs"
                  >
                    {reply.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-border-light">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-border-input rounded-lg text-sm focus:outline-none focus:border-border-input-focus"
              />
              <Button 
                onClick={() => handleSendMessage()}
                className="btn-primary p-2"
                disabled={!inputMessage.trim()}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;