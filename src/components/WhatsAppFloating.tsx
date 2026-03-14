import { MessageCircle } from 'lucide-react';

const WhatsAppFloating = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <a 
        href="https://wa.me/yournumber" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-black text-white px-6 py-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 group"
      >
        <MessageCircle size={20} className="group-hover:rotate-12 transition-transform" />
        <span className="font-bold tracking-tight">WhatsApp</span>
      </a>
    </div>
  );
};

export default WhatsAppFloating;
