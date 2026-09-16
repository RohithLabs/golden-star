import React, { useEffect } from 'react';
import { X, Star } from 'lucide-react';
import { QuoteForm } from './QuoteForm';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialProduct
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 md:p-6 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-navy-900 border border-navy-700 rounded-lg shadow-2xl p-5 sm:p-7 md:p-8 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy-800 via-gold-500 to-navy-800" />

        {/* Modal Header */}
        <div className="flex items-start justify-between pb-4 border-b border-navy-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-navy-950 border border-gold-500/40 flex items-center justify-center text-gold-400">
              <Star className="w-4 h-4 fill-gold-500/20 text-gold-400" />
            </div>
            <div>
              <span className="text-[10px] font-semibold tracking-widest text-gold-500 uppercase font-heading">
                International Trade Desk
              </span>
              <h3 id="quote-modal-title" className="text-xl font-bold text-white font-heading">
                Request a Formal Quotation
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded bg-navy-950 border border-navy-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-gold-500 transition-colors"
            aria-label="Close quote modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="mt-5 max-h-[75vh] overflow-y-auto pr-1">
          <QuoteForm initialProduct={initialProduct} />
        </div>
      </div>
    </div>
  );
};
