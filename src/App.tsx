import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  ChevronRight,
  Bookmark,
  Share2,
  Menu,
  X,
  Users,
  ShieldCheck,
  BookOpen,
  HeartHandshake,
  MessageCircle,
  Navigation,
  Check,
  Home,
  GraduationCap,
  School,
  Calendar,
  Image as ImageIcon,
  Heart,
  Mail,
  Puzzle,
  Sparkles,
} from 'lucide-react';
import {
  CENTRE_INFO,
  PROGRAM_PILLARS,
  DAILY_HIGHLIGHTS,
  ProgramPillar,
} from './data/centreData';
import { MeadowLandscapeDecor } from './components/StorybookIllustrations';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { VisitBookingModal } from './components/VisitBookingModal';

const SmilingSunIcon: React.FC<{ className?: string }> = ({ className = 'w-11 h-11' }) => (
  <svg viewBox="0 0 48 48" className={`${className} shrink-0 drop-shadow-xs select-none`} aria-hidden="true">
    {/* Sun Rays */}
    <g stroke="#F59E0B" strokeWidth="3" strokeLinecap="round">
      <line x1="24" y1="3" x2="24" y2="7" />
      <line x1="24" y1="41" x2="24" y2="45" />
      <line x1="3" y1="24" x2="7" y2="24" />
      <line x1="41" y1="24" x2="45" y2="24" />
      <line x1="9.15" y1="9.15" x2="11.98" y2="11.98" />
      <line x1="36.02" y1="36.02" x2="38.85" y2="38.85" />
      <line x1="9.15" y1="38.85" x2="11.98" y2="36.02" />
      <line x1="36.02" y1="11.98" x2="38.85" y2="9.15" />
    </g>
    {/* Sun Body */}
    <circle cx="24" cy="24" r="14" fill="#FFD13B" stroke="#F59E0B" strokeWidth="2.5" />
    {/* Smiling Eyes */}
    <path d="M19 21 Q20.5 19 22 21" stroke="#4A2E20" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M26 21 Q27.5 19 29 21" stroke="#4A2E20" strokeWidth="2" strokeLinecap="round" fill="none" />
    {/* Cheerful Rosy Cheeks */}
    <circle cx="18" cy="24" r="2.2" fill="#FF8DA1" opacity="0.8" />
    <circle cx="30" cy="24" r="2.2" fill="#FF8DA1" opacity="0.8" />
    {/* Smile */}
    <path d="M20.5 25 Q24 29.5 27.5 25" stroke="#8C4A3E" strokeWidth="2" strokeLinecap="round" fill="#EE5A7B" />
  </svg>
);

const NAV_ITEMS = [
  { label: 'HOME', href: '#top', icon: Home, color: 'text-[#EE5A7B]', active: true },
  { label: 'ABOUT US', href: '#about', icon: Users, color: 'text-[#38A3E8]' },
  { label: 'PROGRAMS', href: '#programs', icon: GraduationCap, color: 'text-[#F4A623]' },
  { label: 'CLASSES', href: '#programs', icon: School, color: 'text-[#82C332]' },
  { label: 'SCHEDULE', href: '#about', icon: Calendar, color: 'text-[#A855F7]' },
  { label: 'GALLERY', href: '#gallery', icon: ImageIcon, color: 'text-[#EE5A7B]' },
  { label: 'PARENTS', href: '#testimonials', icon: Heart, color: 'text-[#EC4899]' },
  { label: 'CONTACT', href: '#contact', icon: Mail, color: 'text-[#38A3E8]' },
];

const HERO_SLIDES = [
  {
    caption: 'Hands-on wooden block play & morning discovery',
  },
  {
    caption: 'Trilingual songs in English, Mandarin & Bahasa Melayu',
  },
  {
    caption: 'Warm small-group care in Taman Desa Cheng Perdana 1',
  },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [heroSlide, setHeroSlide] = useState(0);
  const [visitModalOpen, setVisitModalOpen] = useState(false);
  const [visitProgramme, setVisitProgramme] = useState('Play & Learn (18 Months – 3 Years)');
  const [selectedProgram, setSelectedProgram] = useState<ProgramPillar | null>(null);
  const [showFullHours, setShowFullHours] = useState(false);
  const [isSaved, setIsSaved] = useState<boolean>(() => {
    try {
      return localStorage.getItem('tze_en_saved') === 'true';
    } catch {
      return false;
    }
  });
  const [shareFeedback, setShareFeedback] = useState('');
  const [logoFailed, setLogoFailed] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProgram(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const openVisitWithProgramme = (programmeLabel?: string) => {
    if (programmeLabel) {
      setVisitProgramme(programmeLabel);
    }
    setSelectedProgram(null);
    setVisitModalOpen(true);
  };

  const toggleSaveCentre = () => {
    const next = !isSaved;
    setIsSaved(next);
    try {
      localStorage.setItem('tze_en_saved', String(next));
    } catch {
      // Ignore storage failures in restricted contexts
    }
  };

  const handleShare = async () => {
    const shareText = `${CENTRE_INFO.englishName} (${CENTRE_INFO.chineseName}) — ${CENTRE_INFO.fullAddress} · Tel: ${CENTRE_INFO.phoneDisplay}`;
    try {
      if (navigator.share) {
        await navigator.share({
          title: `${CENTRE_INFO.englishName} ${CENTRE_INFO.chineseName}`,
          text: shareText,
          url: window.location.href,
        });
        setShareFeedback('Shared centre info');
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareText);
        setShareFeedback('Address & phone copied');
      } else {
        setShareFeedback('Call 013-625 6189');
      }
    } catch {
      setShareFeedback('Address ready to share');
    }
    setTimeout(() => setShareFeedback(''), 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1E325C]">
      {/* Top Header — 2-Row Storybook Contract directly matching Reference 2 */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
        {/* Row 1: Brand Mascot + Direct Contact & Primary Booking */}
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          {/* Brand Lockup with Smiling Sun Mascot */}
          <a
            href="#top"
            className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B9AE8] rounded-xl"
          >
            <SmilingSunIcon className="w-11 h-11" />
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#1E325C] flex items-center gap-1.5">
                {CENTRE_INFO.shortName}
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#FFF0F4] text-[#EE5A7B] border border-[#FFCCD8] hidden sm:inline-block">
                  {CENTRE_INFO.chineseName}
                </span>
              </span>
              <span className="text-xs font-medium text-slate-500 tracking-wide flex items-center gap-1">
                Where Little Minds Bloom
                <Heart className="w-3 h-3 text-[#EE5A7B] fill-[#EE5A7B] inline" />
              </span>
            </div>
          </a>

          {/* Right: Phone Consultation + Book a Visit + Mobile Menu */}
          <div className="flex items-center gap-3 sm:gap-6">
            <a
              href={CENTRE_INFO.phoneHref}
              className="hidden sm:flex items-center gap-2.5 text-right group hover:opacity-95"
            >
              <div className="w-9 h-9 rounded-full bg-[#3B9AE8]/15 text-[#3B9AE8] flex items-center justify-center shrink-0 group-hover:bg-[#3B9AE8] group-hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Call Us
                </p>
                <p className="text-sm font-bold text-[#1E325C] tabular-nums group-hover:text-[#3B9AE8]">
                  {CENTRE_INFO.phoneDisplay}
                </p>
              </div>
            </a>

            <button
              type="button"
              onClick={() => openVisitWithProgramme()}
              className="px-5 sm:px-6 py-2.5 rounded-full bg-[#EE5A7B] hover:bg-[#DC486A] text-white text-xs sm:text-sm font-bold shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0 cursor-pointer"
            >
              Book a Visit
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2 rounded-xl text-[#1E325C] hover:bg-slate-100 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Row 2: Floating Rounded Navigation Pill Bar (Directly matching Reference 2) */}
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 pb-3 hidden lg:block">
          <div className="bg-white/90 backdrop-blur-sm rounded-full shadow-xs border border-slate-200/80 px-4 py-1.5 flex items-center justify-between gap-4">
            {/* Centered/Spanning 8 Navigation Icon Pills */}
            <nav aria-label="Primary navigation" className="flex items-center gap-1 xl:gap-2 flex-1 justify-around">
              {NAV_ITEMS.map((item) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                      item.active
                        ? 'bg-[#FFF0F4] text-[#EE5A7B] shadow-2xs'
                        : 'text-slate-600 hover:text-[#1E325C] hover:bg-slate-100/70'
                    }`}
                  >
                    <IconComponent className={`w-3.5 h-3.5 ${item.color}`} />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </nav>

            {/* Social Media Circular Buttons on the Far Right */}
            <div className="flex items-center gap-2 pl-3 border-l border-slate-200/70 shrink-0">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Tze En KidZ on Facebook"
                className="w-7 h-7 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Tze En KidZ on Instagram"
                className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={CENTRE_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Tze En KidZ"
                className="w-7 h-7 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Channel"
                className="w-7 h-7 rounded-full bg-[#FF0000] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-2 shadow-lg">
            {NAV_ITEMS.map((item) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-semibold text-[#1E325C] hover:bg-[#EAF5FF]"
                >
                  <IconComponent className={`w-4 h-4 ${item.color}`} />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>
        )}
      </header>

      <main id="top" className="flex-1">
        {/* HERO SECTION — Wide Sky Canvas with Full-Bleed Storybook Decorations (No Empty Gutters) */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#CBE7FF] via-[#E5F3FF] to-[#F3FAFF] pt-8 pb-20 md:pt-12 md:pb-28">
          {/* Full-Bleed Edge-to-Edge Sky Artwork: Smiling Sun, Clouds, Rainbow, Hearts & Sparkles */}
          <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
            {/* Top-Left Smiling Sun (Fills far left space) */}
            <div className="absolute top-2 left-4 sm:left-10 lg:left-14 xl:left-20">
              <svg viewBox="0 0 110 110" className="w-20 h-20 sm:w-24 sm:h-24 opacity-95 drop-shadow-sm">
                <g stroke="#F59E0B" strokeWidth="3.5" strokeLinecap="round">
                  <line x1="55" y1="10" x2="55" y2="18" />
                  <line x1="55" y1="92" x2="55" y2="100" />
                  <line x1="10" y1="55" x2="18" y2="55" />
                  <line x1="92" y1="55" x2="100" y2="55" />
                  <line x1="23" y1="23" x2="29" y2="29" />
                  <line x1="81" y1="81" x2="87" y2="87" />
                  <line x1="23" y1="87" x2="29" y2="81" />
                  <line x1="81" y1="29" x2="87" y2="23" />
                </g>
                <circle cx="55" cy="55" r="28" fill="#FFD43F" stroke="#F59E0B" strokeWidth="2.5" />
                <path d="M45 49 Q48 46 51 49" stroke="#4A2E20" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <path d="M59 49 Q62 46 65 49" stroke="#4A2E20" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <circle cx="43" cy="56" r="3.5" fill="#FF8DA1" opacity="0.85" />
                <circle cx="67" cy="56" r="3.5" fill="#FF8DA1" opacity="0.85" />
                <path d="M48 58 Q55 65 62 58" stroke="#8C4A3E" strokeWidth="2.5" strokeLinecap="round" fill="#EE5A7B" />
              </svg>
            </div>

            {/* Drifting Clouds on Left Flank */}
            <div className="absolute top-20 left-2 sm:left-8 lg:left-16 xl:left-24">
              <svg viewBox="0 0 160 80" className="w-28 sm:w-36 h-auto fill-white/85">
                <ellipse cx="80" cy="50" rx="60" ry="24" />
                <circle cx="56" cy="38" r="24" />
                <circle cx="94" cy="34" r="28" />
              </svg>
            </div>

            <div className="absolute top-48 left-3 sm:left-10 lg:left-16 xl:left-24 flex items-center gap-3">
              <svg viewBox="0 0 32 32" className="w-5 h-5 stroke-[#EE5A7B] fill-none stroke-[2.5]">
                <path d="M16 26 C16 26 5 19 5 11 C5 6.5 8.5 4 12 4 C14.5 4 15.5 5.5 16 6.5 C16.5 5.5 17.5 4 20 4 C23.5 4 27 6.5 27 11 C27 19 16 26 16 26 Z" />
              </svg>
              <span className="text-[#F59E0B] text-lg font-bold select-none">✦</span>
              <span className="text-[#82C332] text-xs font-bold select-none">✚</span>
            </div>

            {/* Drifting Clouds on Right Flank */}
            <div className="absolute top-6 right-2 sm:right-8 lg:right-16 xl:right-24">
              <svg viewBox="0 0 180 90" className="w-32 sm:w-44 h-auto fill-white/85">
                <ellipse cx="90" cy="55" rx="70" ry="28" />
                <circle cx="65" cy="40" r="28" />
                <circle cx="110" cy="36" r="32" />
              </svg>
            </div>

            <div className="absolute top-40 right-4 sm:right-12 lg:right-20 xl:right-28 flex flex-col items-center gap-2">
              <span className="text-[#FFD43F] text-xl drop-shadow-xs select-none">★</span>
              <svg viewBox="0 0 32 32" className="w-5 h-5 stroke-[#EE5A7B] fill-none stroke-[2.5]">
                <path d="M16 26 C16 26 5 19 5 11 C5 6.5 8.5 4 12 4 C14.5 4 15.5 5.5 16 6.5 C16.5 5.5 17.5 4 20 4 C23.5 4 27 6.5 27 11 C27 19 16 26 16 26 Z" />
              </svg>
              <span className="text-[#38A3E8] text-sm select-none">✦</span>
            </div>
          </div>

          <div className="max-w-[1140px] mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Hero Left Copy */}
              <div className="lg:col-span-6 space-y-5 xl:space-y-6">
                <p className="text-xs sm:text-sm font-semibold text-[#257BC4] tracking-wide inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 border border-[#3B9AE8]/20 backdrop-blur-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                  {CENTRE_INFO.englishName} · {CENTRE_INFO.chineseName}
                </p>

                <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-bold leading-[1.1] tracking-tight text-[#1E325C] text-balance">
                  Nurturing Today,{' '}
                  <span className="text-[#EE5A7B]">Inspiring</span> Tomorrow
                </h1>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-xl">
                  A warm, joyful nursery school in Taman Desa Cheng Perdana 1, Melaka where your
                  child can{' '}
                  <span className="font-semibold text-[#257BC4]">learn</span>,{' '}
                  <span className="font-semibold text-[#609919]">grow</span>, and{' '}
                  <span className="font-semibold text-[#EE5A7B]">shine</span> every day.
                </p>

                {/* Essential Info Strip (Clean unboxed metadata) */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-700 pt-1">
                  <span className="inline-flex items-center gap-1.5 font-medium">
                    <Clock className="w-4 h-4 text-[#82C332]" />
                    Opens 8:00 AM (Mon–Fri)
                  </span>
                  <span aria-hidden="true" className="text-slate-400">
                    ·
                  </span>
                  <a
                    href={CENTRE_INFO.phoneHref}
                    className="inline-flex items-center gap-1.5 font-semibold text-[#1E325C] hover:text-[#3B9AE8] tabular-nums"
                  >
                    <Phone className="w-4 h-4 text-[#3B9AE8]" />
                    {CENTRE_INFO.phoneDisplay}
                  </a>
                  <span aria-hidden="true" className="text-slate-400">
                    ·
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#EE5A7B]" />
                    Cheng Perdana 1, Melaka
                  </span>
                </div>

                {/* Hero CTAs */}
                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <button
                    type="button"
                    onClick={() => openVisitWithProgramme()}
                    className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-[#EE5A7B] hover:bg-[#DC486A] text-white font-semibold text-sm sm:text-base shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer whitespace-nowrap"
                  >
                    Enroll Now
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <a
                    href="#about"
                    className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#1E325C] border border-slate-300 font-semibold text-sm sm:text-base shadow-2xs transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
                  >
                    Learn More
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Hero Right Real Photo & Slide Dots */}
              <div className="lg:col-span-6 flex flex-col items-center">
                <div className="relative group w-full flex justify-center">
                  <img
                    src="/assets/images/hero_teacher_kids.jpg"
                    alt="Caring teacher helping happy children build colorful wooden blocks under a rainbow"
                    className="w-full h-auto max-w-[480px] object-cover rounded-3xl shadow-md border-4 border-white select-none"
                  />
                </div>
                <div className="flex flex-col items-center gap-2 mt-3">
                  <p className="text-xs font-medium text-slate-600 text-center">
                    {HERO_SLIDES[heroSlide].caption}
                  </p>
                  <div className="flex items-center gap-2" role="tablist" aria-label="Hero showcase slides">
                    {HERO_SLIDES.map((slide, idx) => (
                      <button
                        key={slide.caption}
                        type="button"
                        role="tab"
                        aria-selected={heroSlide === idx}
                        aria-label={`Show slide ${idx + 1}: ${slide.caption}`}
                        onClick={() => setHeroSlide(idx)}
                        className={`h-2.5 rounded-full transition-all cursor-pointer ${
                          heroSlide === idx
                            ? 'w-7 bg-[#EE5A7B]'
                            : 'w-2.5 bg-[#3B9AE8]/35 hover:bg-[#3B9AE8]/60'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scalloped White Cloud Wave Separator */}
          <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true">
            <svg
              viewBox="0 0 1440 72"
              preserveAspectRatio="none"
              className="w-full h-10 sm:h-14 fill-white"
            >
              <path d="M0,48 C60,12 120,12 180,44 C240,12 300,12 360,44 C420,12 480,12 540,44 C600,12 660,12 720,44 C780,12 840,12 900,44 C960,12 1020,12 1080,44 C1140,12 1200,12 1260,44 C1320,12 1380,12 1440,44 L1440,72 L0,72 Z" />
            </svg>
          </div>
        </section>

        {/* 4 COLOURFUL PROGRAM PILLARS (Directly below cloud wave) */}
        <section id="programs" className="py-12 md:py-16 bg-white">
          <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {PROGRAM_PILLARS.map((pillar) => {
                const getIcon = () => {
                  switch (pillar.id) {
                    case 'play-learn':
                      return <Puzzle className="w-5 h-5 text-white/95" />;
                    case 'growing-together':
                      return <Heart className="w-5 h-5 text-white/95 fill-white/20" />;
                    case 'smart-start':
                      return <BookOpen className="w-5 h-5 text-white/95" />;
                    case 'safe-caring':
                      return <ShieldCheck className="w-5 h-5 text-white/95" />;
                    default:
                      return <Sparkles className="w-5 h-5 text-white/95" />;
                  }
                };

                const getPhotoSrc = () => {
                  switch (pillar.id) {
                    case 'play-learn':
                      return '/assets/images/card_play_learn.jpg';
                    case 'growing-together':
                      return '/assets/images/card_growing_together.jpg';
                    case 'smart-start':
                      return '/assets/images/card_smart_start.jpg';
                    case 'safe-caring':
                      return '/assets/images/card_safe_caring.jpg';
                    default:
                      return '/assets/images/card_play_learn.jpg';
                  }
                };

                return (
                  <article
                    key={pillar.id}
                    className={`${pillar.cardBg} rounded-[28px] p-5 sm:p-6 text-white flex flex-col items-center text-center shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-1`}
                  >
                    <div className="w-full flex items-center justify-center gap-2 mb-3.5">
                      {getIcon()}
                      <h2 className="font-display text-lg sm:text-xl font-bold tracking-tight">
                        {pillar.title}
                      </h2>
                    </div>

                    {/* Circular Real Photo Frame matching Reference Image */}
                    <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-white shadow-md mb-4 bg-white shrink-0">
                      <img
                        src={getPhotoSrc()}
                        alt={pillar.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <p className="text-xs font-semibold text-white/90 mb-1.5">
                      {pillar.chineseTitle} · {pillar.ageRange}
                    </p>
                    <p className="text-xs sm:text-sm text-white/95 leading-relaxed mb-5 flex-1">
                      {pillar.shortDesc}
                    </p>

                    <button
                      type="button"
                      onClick={() => setSelectedProgram(pillar)}
                      className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white hover:bg-white/95 ${pillar.buttonText} text-xs font-bold shadow-xs transition-colors cursor-pointer whitespace-nowrap`}
                    >
                      Read More
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </article>
                );
              })}
            </div>

            {/* WHY CHOOSE US — Warm Cream Trust Strip */}
            <div className="mt-10 sm:mt-12 rounded-[24px] bg-[#FFF8DB] border border-[#F5E7B2] px-6 py-6 sm:px-8 shadow-xs">
              <div className="grid lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-3">
                  <h2 className="font-display text-2xl font-bold text-[#1E325C] leading-tight">
                    Why <span className="text-[#EE5A7B]">Choose Us</span>
                  </h2>
                </div>
                <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-4 gap-5">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-[#82C332]/20 text-[#5C911A] flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5" />
                    </div>
                    <p className="text-sm font-bold text-[#1E325C] leading-snug">
                      Experienced Teachers
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-[#EE5A7B]/15 text-[#D63F61] flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <p className="text-sm font-bold text-[#1E325C] leading-snug">
                      Safe &amp; Clean Environment
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-[#F4A623]/20 text-[#C47C08] flex items-center justify-center shrink-0">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <p className="text-sm font-bold text-[#1E325C] leading-snug">
                      Trilingual Learning
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-[#3B9AE8]/15 text-[#257BC4] flex items-center justify-center shrink-0">
                      <HeartHandshake className="w-5 h-5" />
                    </div>
                    <p className="text-sm font-bold text-[#1E325C] leading-snug">
                      Trusted by Parents
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WELCOME TO OUR KINDERGARTEN & LATEST NEWS (Directly matching Reference 2) */}
        <section id="about" className="py-14 md:py-18 bg-white border-t border-slate-100">
          <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              {/* Left Column: Welcome + Real Photo */}
              <div className="lg:col-span-7 space-y-4">
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1E325C] tracking-tight flex items-center gap-2">
                    Welcome to Our Kindergarten!
                    <span className="text-[#EE5A7B] text-xl font-normal select-none">♡</span>
                  </h2>
                </div>

                {/* Real Photo of 4 Diverse Preschool Children at Play Table */}
                <div className="overflow-hidden rounded-2xl border-2 border-slate-100 shadow-xs">
                  <img
                    src="/assets/images/welcome_kids_table.jpg"
                    alt="Four cheerful preschool children smiling with colorful building blocks"
                    className="w-full h-52 sm:h-60 object-cover"
                  />
                </div>

                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  We provide a loving and engaging environment where children develop a lifelong
                  joy for learning. Our programs focus on creativity, curiosity and confidence
                  through play-based education and warm multicultural care in Melaka.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a
                    href="#programs"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3B9AE8] hover:bg-[#2A89D8] text-white text-xs sm:text-sm font-bold shadow-xs transition-colors whitespace-nowrap"
                  >
                    More About Us
                    <ChevronRight className="w-4 h-4" />
                  </a>
                  <a
                    href={CENTRE_INFO.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#1FB857] text-white text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Us
                  </a>
                  <a
                    href={CENTRE_INFO.mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#1E325C] text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap"
                  >
                    <Navigation className="w-4 h-4 text-[#3B9AE8]" />
                    Directions
                  </a>
                </div>
              </div>

              {/* Right Column: Latest News with Real Photo Thumbnails */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-2xl font-bold text-[#1E325C]">
                    Latest News
                  </h3>
                  <span className="text-xs font-semibold text-slate-400">
                    Events &amp; Updates
                  </span>
                </div>

                <div className="space-y-3.5">
                  {/* News Item 1: Summer Camp */}
                  <div className="rounded-2xl bg-white border border-slate-200/80 p-3.5 sm:p-4 flex items-center gap-3.5 shadow-2xs hover:shadow-xs transition-shadow">
                    <img
                      src="/assets/images/news_summer_camp.jpg"
                      alt="Kindergarten children in summer camp"
                      className="w-20 h-20 rounded-xl object-cover shrink-0 border border-slate-100"
                    />
                    <div className="min-w-0">
                      <h4 className="font-bold text-[#1E325C] text-sm sm:text-base leading-snug">
                        Fun Summer Camp 2024
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                        Our summer camp is full of fun, hands-on learning, outdoor discovery and joyful adventure!
                      </p>
                      <button
                        type="button"
                        onClick={() => openVisitWithProgramme('Holiday Camp')}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#3B9AE8] hover:text-[#257BC4] mt-1.5 cursor-pointer"
                      >
                        Read More →
                      </button>
                    </div>
                  </div>

                  {/* News Item 2: Parent Workshop */}
                  <div className="rounded-2xl bg-white border border-slate-200/80 p-3.5 sm:p-4 flex items-center gap-3.5 shadow-2xs hover:shadow-xs transition-shadow">
                    <img
                      src="/assets/images/news_parent_workshop.jpg"
                      alt="Parent and teacher workshop"
                      className="w-20 h-20 rounded-xl object-cover shrink-0 border border-slate-100"
                    />
                    <div className="min-w-0">
                      <h4 className="font-bold text-[#1E325C] text-sm sm:text-base leading-snug">
                        Parent Workshop
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                        Join our upcoming interactive workshop on early child development, speech milestones and positive parenting.
                      </p>
                      <button
                        type="button"
                        onClick={() => openVisitWithProgramme('Parent Workshop')}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#3B9AE8] hover:text-[#257BC4] mt-1.5 cursor-pointer"
                      >
                        Read More →
                      </button>
                    </div>
                  </div>
                </div>

                {/* Daily Highlights Quick Dropdown */}
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={() => setShowFullHours((prev) => !prev)}
                    className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#FFFDF2] border border-[#F3E9C4] text-xs font-semibold text-[#1E325C] hover:bg-[#FFF8E6] transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#82C332]" />
                      Opens 8:00 AM (Mon – Fri) · View Daily Schedule
                    </span>
                    <span className="text-slate-400">{showFullHours ? '▲' : '▼'}</span>
                  </button>
                  {showFullHours && (
                    <div className="mt-2 p-3 bg-slate-50 rounded-xl space-y-2 text-xs border border-slate-200">
                      {DAILY_HIGHLIGHTS.map((item) => (
                        <div key={item.id} className="flex justify-between gap-3">
                          <span className="font-bold text-[#1E325C]">{item.title}</span>
                          <span className="text-[#3B9AE8] font-semibold">{item.time}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PHOTO & ACTIVITY GALLERY */}
        <GallerySection />

        {/* PARENT TESTIMONIALS */}
        <TestimonialsSection />

        {/* HAPPY CHILDREN, BRIGHT FUTURES SPOTLIGHT (Reference 2 Bottom Meadow Band) */}
        <section className="relative pt-12 pb-2 bg-gradient-to-b from-white via-[#F6FBFF] to-[#EAF6FF] overflow-hidden">
          <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 space-y-4 text-center md:text-left">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1E325C] leading-tight text-balance">
                  Happy Children,{' '}
                  <span className="text-[#EE5A7B]">Bright Futures!</span>
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Visit Tze En KidZ Childcare Centre in Taman Desa Cheng Perdana 1 to meet our
                  warm educators and tour our bright, sunny classrooms.
                </p>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-1">
                  <a
                    href="#gallery"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#EE5A7B] hover:bg-[#DC486A] text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors whitespace-nowrap"
                  >
                    View Photo Gallery
                    <ChevronRight className="w-4 h-4" />
                  </a>
                  <button
                    type="button"
                    onClick={() => openVisitWithProgramme()}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-[#1E325C] text-xs sm:text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Book a Visit
                  </button>
                </div>
              </div>

              {/* Real Photo of Smiling Girl with Sunhat Framed in Floral Wreath */}
              <div className="md:col-span-7 flex justify-center">
                <div className="relative inline-block mx-auto select-none">
                  <div className="w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden border-8 border-[#77B931] shadow-xl relative z-10 bg-white">
                    <img
                      src="/assets/images/girl_sunhat_smiling.jpg"
                      alt="Smiling little girl in a sun hat resting chin on hands"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative colorful flowers around the green wreath */}
                  <div className="absolute -top-2 left-6 z-20 text-2xl" aria-hidden="true">🌸</div>
                  <div className="absolute -top-1 right-8 z-20 text-2xl" aria-hidden="true">🌼</div>
                  <div className="absolute bottom-4 -left-2 z-20 text-2xl" aria-hidden="true">🌺</div>
                  <div className="absolute bottom-6 -right-2 z-20 text-2xl" aria-hidden="true">🌸</div>
                  <div className="absolute top-1/2 -right-4 z-20 text-xl" aria-hidden="true">🌼</div>
                  <div className="absolute top-1/3 -left-3 z-20 text-xl" aria-hidden="true">🌷</div>
                </div>
              </div>
            </div>
          </div>

          <MeadowLandscapeDecor />
        </section>
      </main>

      {/* LUSH MEADOW GREEN FOOTER */}
      <footer id="contact" className="bg-[#64A62D] text-white pt-10 pb-12">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/20">
            {/* Brand Summary */}
            <div className="lg:col-span-4 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white p-1.5 flex items-center justify-center shrink-0">
                  {!logoFailed ? (
                    <img
                      src={CENTRE_INFO.logoPath}
                      alt="Tze En KidZ logo"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span className="font-display font-bold text-[#EE5A7B] text-sm">慈恩</span>
                  )}
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold leading-tight">
                    {CENTRE_INFO.shortName}
                  </h3>
                  <p className="text-xs text-white/90">{CENTRE_INFO.chineseName} · Nursery School</p>
                </div>
              </div>
              <p className="text-sm text-white/90 leading-relaxed max-w-xs">
                Warm, attentive childcare and early learning in Taman Desa Cheng Perdana 1, Melaka.
              </p>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2 space-y-2.5">
              <h4 className="font-display text-base font-bold">Quick Links</h4>
              <ul className="space-y-1.5 text-sm text-white/90">
                <li>
                  <a href="#programs" className="hover:text-white hover:underline">
                    Programs
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="hover:text-white hover:underline">
                    Photo Gallery
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-white hover:underline">
                    Parent Reviews
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="lg:col-span-4 space-y-2.5">
              <h4 className="font-display text-base font-bold">Contact &amp; Location</h4>
              <ul className="space-y-2.5 text-sm text-white/95">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 shrink-0 mt-1" />
                  <span>{CENTRE_INFO.fullAddress}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 shrink-0" />
                  <a href={CENTRE_INFO.phoneHref} className="hover:underline font-semibold tabular-nums">
                    {CENTRE_INFO.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 shrink-0" />
                  <span>Mon – Fri · Opens 8:00 AM</span>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="font-display text-base font-bold">Visit &amp; Connect</h4>
              <div className="flex flex-col gap-2.5">
                <a
                  href={CENTRE_INFO.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-[#4A811D] hover:bg-white/90 text-xs font-bold transition-colors whitespace-nowrap"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Get Directions
                </a>
                <a
                  href={CENTRE_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#4A811D] hover:bg-[#3F6F18] text-white text-xs font-bold transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp Centre
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/85">
            <p>
              © {new Date().getFullYear()} {CENTRE_INFO.englishName} ({CENTRE_INFO.chineseName}). All
              rights reserved.
            </p>
            <p>Taman Desa Cheng Perdana 1, 75260 Melaka</p>
          </div>
        </div>
      </footer>

      {/* Programme Detail Modal */}
      {selectedProgram && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E325C]/50 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="program-modal-title"
          onClick={() => setSelectedProgram(null)}
        >
          <div
            className="w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`${selectedProgram.cardBg} px-6 py-5 text-white flex items-start justify-between gap-4`}
            >
              <div>
                <p className="text-xs font-semibold text-white/90">
                  {selectedProgram.chineseTitle} · {selectedProgram.ageRange}
                </p>
                <h3 id="program-modal-title" className="font-display text-2xl font-bold mt-0.5">
                  {selectedProgram.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProgram(null)}
                aria-label="Close programme details"
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-sm text-slate-700 leading-relaxed">{selectedProgram.fullDesc}</p>
              <div>
                <h4 className="text-xs font-bold text-[#1E325C] mb-2">
                  What Children Experience
                </h4>
                <ul className="space-y-2">
                  {selectedProgram.highlights.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <Check className="w-4 h-4 text-[#82C332] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-xs font-medium text-slate-500 pt-1">
                {selectedProgram.scheduleNote}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="button"
                  onClick={() =>
                    openVisitWithProgramme(
                      `${selectedProgram.title} (${selectedProgram.ageRange})`
                    )
                  }
                  className="flex-1 px-5 py-3 rounded-xl bg-[#EE5A7B] hover:bg-[#DC486A] text-white text-sm font-semibold transition-colors cursor-pointer"
                >
                  Book a Visit for {selectedProgram.title}
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedProgram(null)}
                  className="px-5 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 text-sm font-semibold transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Visit Booking / Enrolment Modal */}
      <VisitBookingModal
        isOpen={visitModalOpen}
        initialProgramme={visitProgramme}
        onClose={() => setVisitModalOpen(false)}
      />
    </div>
  );
}
