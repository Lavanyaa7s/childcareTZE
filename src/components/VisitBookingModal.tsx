import React, { useState, useEffect } from 'react';
import { X, Calendar, Phone, MapPin, CheckCircle2, MessageCircle } from 'lucide-react';
import { CENTRE_INFO } from '../data/centreData';

interface VisitBookingModalProps {
  isOpen: boolean;
  initialProgramme?: string;
  onClose: () => void;
}

export const VisitBookingModal: React.FC<VisitBookingModalProps> = ({
  isOpen,
  initialProgramme = 'Play & Learn (18 Months – 3 Years)',
  onClose,
}) => {
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [childAge, setChildAge] = useState('2 – 3 Years');
  const [programme, setProgramme] = useState(initialProgramme);
  const [preferredDay, setPreferredDay] = useState('Wednesday Morning (8:30 AM – 10:30 AM)');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setProgramme(initialProgramme);
  }, [initialProgramme]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanedPhone = phone.replace(/[\s-]/g, '');
    if (parentName.trim().length < 2) {
      setError('Please enter your name so our teachers know who to welcome.');
      return;
    }
    if (!/^(?:\+?60|0)[0-9]{8,10}$/.test(cleanedPhone)) {
      setError('Please enter a valid Malaysian phone number (e.g. 013-625 6189).');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setError('');
    onClose();
  };

  const whatsappPrefilled = `https://wa.me/60136256189?text=${encodeURIComponent(
    `Hello Tze En KidZ Childcare Centre! I am ${parentName || 'a parent'} inquiring for my child (${childAge}) in ${programme}. Preferred visit: ${preferredDay}.`
  )}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E325C]/50 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="visit-modal-title"
      onClick={resetAndClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Band */}
        <div className="bg-gradient-to-r from-[#3B9AE8] to-[#58B0F3] px-6 py-5 text-white flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-medium text-white/90">
              {CENTRE_INFO.englishName} · {CENTRE_INFO.chineseName}
            </p>
            <h3 id="visit-modal-title" className="text-2xl font-bold mt-0.5">
              Book a Centre Visit
            </h3>
          </div>
          <button
            type="button"
            onClick={resetAndClose}
            aria-label="Close booking dialog"
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 max-h-[82vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-4 space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#82C332]/15 text-[#609919] flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#1E325C]">Visit Request Received!</h4>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                  Thank you, <span className="font-semibold text-[#1E325C]">{parentName}</span>. Our
                  centre coordinator will reach out on{' '}
                  <span className="font-semibold tabular-nums">{phone}</span> to confirm your{' '}
                  <span className="font-semibold">{preferredDay}</span> tour at Taman Desa Cheng
                  Perdana 1.
                </p>
              </div>
              <div className="bg-[#FFF8DB] rounded-2xl p-4 text-left text-xs text-slate-700 space-y-1.5">
                <p className="font-semibold text-[#1E325C]">Centre Address & Direct Line</p>
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#EE5A7B] shrink-0 mt-0.5" />
                  <span>{CENTRE_INFO.fullAddress}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#3B9AE8] shrink-0" />
                  <span className="tabular-nums">{CENTRE_INFO.phoneDisplay} (Opens 8:00 AM)</span>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={whatsappPrefilled}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#25D366] hover:bg-[#1FB857] text-white font-semibold text-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Confirm via WhatsApp
                </a>
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="flex-1 px-4 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold text-sm transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {error && (
                <div
                  role="alert"
                  className="p-3 rounded-xl bg-[#EE5A7B]/10 border border-[#EE5A7B]/30 text-sm text-[#B82849] font-medium"
                >
                  {error}
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="parentName" className="block text-xs font-semibold text-[#1E325C] mb-1.5">
                    Parent / Guardian Name
                  </label>
                  <input
                    id="parentName"
                    type="text"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    placeholder="e.g. Mei Ling Tan"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-[#1E325C] focus:outline-none focus:border-[#3B9AE8] focus:ring-2 focus:ring-[#3B9AE8]/20"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="parentPhone" className="block text-xs font-semibold text-[#1E325C] mb-1.5">
                    Mobile / WhatsApp Number
                  </label>
                  <input
                    id="parentPhone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="013-625 6189"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-[#1E325C] tabular-nums focus:outline-none focus:border-[#3B9AE8] focus:ring-2 focus:ring-[#3B9AE8]/20"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="childAge" className="block text-xs font-semibold text-[#1E325C] mb-1.5">
                    Child’s Age
                  </label>
                  <select
                    id="childAge"
                    value={childAge}
                    onChange={(e) => setChildAge(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-[#1E325C] bg-white focus:outline-none focus:border-[#3B9AE8] focus:ring-2 focus:ring-[#3B9AE8]/20"
                  >
                    <option>18 Months – 2 Years</option>
                    <option>2 – 3 Years</option>
                    <option>3 – 4 Years</option>
                    <option>4 – 5 Years</option>
                    <option>5 – 6 Years</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="programme" className="block text-xs font-semibold text-[#1E325C] mb-1.5">
                    Programme Interest
                  </label>
                  <select
                    id="programme"
                    value={programme}
                    onChange={(e) => setProgramme(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-[#1E325C] bg-white focus:outline-none focus:border-[#3B9AE8] focus:ring-2 focus:ring-[#3B9AE8]/20"
                  >
                    <option>Play & Learn (18 Months – 3 Years)</option>
                    <option>Growing Together (3 – 4 Years)</option>
                    <option>Smart Start (4 – 6 Years)</option>
                    <option>Full-Day Childcare (8:00 AM – 6:00 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="preferredDay" className="block text-xs font-semibold text-[#1E325C] mb-1.5">
                  Preferred Tour Slot (Opens 8:00 AM Mon – Fri)
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
                  <select
                    id="preferredDay"
                    value={preferredDay}
                    onChange={(e) => setPreferredDay(e.target.value)}
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-[#1E325C] bg-white focus:outline-none focus:border-[#3B9AE8] focus:ring-2 focus:ring-[#3B9AE8]/20"
                  >
                    <option>Wednesday Morning (8:30 AM – 10:30 AM)</option>
                    <option>Thursday Morning (8:30 AM – 10:30 AM)</option>
                    <option>Friday Morning (8:30 AM – 10:30 AM)</option>
                    <option>Weekday Afternoon (3:00 PM – 5:00 PM)</option>
                    <option>Saturday (By Special Appointment)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="visitNotes" className="block text-xs font-semibold text-[#1E325C] mb-1.5">
                  Questions or Dietary / Care Notes (Optional)
                </label>
                <textarea
                  id="visitNotes"
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Share any questions about meals, half-day/full-day hours, or siblings..."
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm text-[#1E325C] focus:outline-none focus:border-[#3B9AE8] focus:ring-2 focus:ring-[#3B9AE8]/20"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <button
                  type="submit"
                  className="flex-1 px-5 py-3 rounded-xl bg-[#EE5A7B] hover:bg-[#DC486A] text-white font-semibold text-sm transition-colors cursor-pointer"
                >
                  Request Visit Slot
                </button>
                <a
                  href={CENTRE_INFO.phoneHref}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-slate-300 text-[#1E325C] hover:bg-slate-50 font-semibold text-sm transition-colors whitespace-nowrap"
                >
                  <Phone className="w-4 h-4 text-[#3B9AE8]" />
                  {CENTRE_INFO.phoneDisplay}
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
