import { MessageCircle } from 'lucide-react';

const WhatsAppFloating = () => {
  return (
    <div className="fixed bottom-8 right-8 flex items-center gap-2">
      <a 
        href="https://wa.me/yournumber" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-2"
      >
        <MessageCircle size={24} />
        <span>WhatsApp</span>
      </a>
    </div>
  );
};

export default WhatsAppFloating;
