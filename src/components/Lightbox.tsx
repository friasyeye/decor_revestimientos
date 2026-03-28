import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxImage {
  src: string;
  srcMobile?: string;
  srcDesktop?: string;
  alt: string;
  material: string;
  space: string;
  location: string;
}

interface LightboxProps {
  images: LightboxImage[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const Lightbox = ({ images, currentIndex, onClose, onNavigate }: LightboxProps) => {
  const image = images[currentIndex];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === images.length - 1;

  const handlePrev = useCallback(() => {
    if (!isFirst) onNavigate(currentIndex - 1);
  }, [isFirst, currentIndex, onNavigate]);

  const handleNext = useCallback(() => {
    if (!isLast) onNavigate(currentIndex + 1);
  }, [isLast, currentIndex, onNavigate]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, handlePrev, handleNext]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[70] bg-black/90 flex flex-col items-center justify-center"
        onClick={onClose}
      >
        {/* Close */}
        <button
          className="absolute top-5 right-5 z-10 text-white/70 hover:text-white transition-colors"
          onClick={onClose}
          aria-label="Cerrar"
        >
          <X size={28} />
        </button>

        {/* Prev */}
        {!isFirst && (
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            aria-label="Anterior"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        {/* Next */}
        {!isLast && (
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            aria-label="Siguiente"
          >
            <ChevronRight size={24} />
          </button>
        )}

        {/* Image + Info */}
        <div className="flex flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <picture>
              {image.srcMobile && (
                <source media="(max-width: 600px)" srcSet={image.srcMobile} type="image/webp" />
              )}
              {image.srcDesktop && (
                <source srcSet={image.srcDesktop} type="image/webp" />
              )}
              <img
                src={image.src}
                alt={image.alt}
                className="max-w-[90vw] max-h-[80vh] object-contain"
              />
            </picture>
          </motion.div>
          <p className="text-xs font-body uppercase tracking-widest text-white/60">
            {image.material} — {image.space} — {image.location}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;
