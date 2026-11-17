import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/centreData';
import { GallerySceneIllustration } from './StorybookIllustrations';

const CATEGORIES: Array<'All Moments' | GalleryItem['category']> = [
  'All Moments',
  'Classroom',
  'Arts & Craft',
  'Outdoor Play',
  'Celebrations',
];

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All Moments' | GalleryItem['category']>(
    'All Moments'
  );
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    selectedCategory === 'All Moments'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const activeItem = lightboxIndex !== null ? filteredItems[lightboxIndex] ?? null : null;

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % filteredItems.length
        );
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev - 1 + filteredItems.length) % filteredItems.length
        );
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, filteredItems.length]);

  return (
    <section id="gallery" className="py-16 md:py-20 bg-[#F9FCFF] border-t border-slate-100">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <p className="text-sm font-semibold text-[#3B9AE8] mb-1.5">
              Photo & Activity Gallery · 校园精彩瞬间
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E325C] tracking-tight text-balance">
              Inside Our Happy Classrooms in Melaka
            </h2>
            <p className="text-slate-600 mt-2.5 text-base leading-relaxed">
              Explore everyday moments at Tze En KidZ — from morning block discovery and sensory art
              to multicultural celebrations.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div
            className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white border border-slate-200 rounded-2xl shadow-xs"
            role="tablist"
            aria-label="Filter gallery by activity category"
          >
            {CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => {
                    setSelectedCategory(category);
                    setLightboxIndex(null);
                  }}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-[#3B9AE8] text-white shadow-xs'
                      : 'text-slate-600 hover:text-[#1E325C] hover:bg-slate-50'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <article
              key={item.id}
              className="group bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col"
            >
              <button
                type="button"
                onClick={() => setLightboxIndex(idx)}
                className={`relative aspect-[4/3] w-full overflow-hidden ${item.bgTint} text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B9AE8]`}
                aria-label={`View ${item.title} details`}
              >
                <div className="w-full h-full transition-transform duration-300 group-hover:scale-[1.03]">
                  <GallerySceneIllustration sceneKey={item.sceneKey} />
                </div>
                <span className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white/90 text-[#1E325C] flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <Expand className="w-4 h-4" />
                </span>
              </button>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1.5">
                    <span className="font-semibold text-[#EE5A7B]">{item.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.ageGroup}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#1E325C] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E325C]/70 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`relative aspect-[16/10] w-full ${activeItem.bgTint}`}>
              <GallerySceneIllustration sceneKey={activeItem.sceneKey} />
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                aria-label="Close photo viewer"
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/95 hover:bg-white text-[#1E325C] shadow-md flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {filteredItems.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxIndex(
                        (lightboxIndex - 1 + filteredItems.length) % filteredItems.length
                      )
                    }
                    aria-label="Previous moment"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 hover:bg-white text-[#1E325C] shadow-md flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setLightboxIndex((lightboxIndex + 1) % filteredItems.length)}
                    aria-label="Next moment"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 hover:bg-white text-[#1E325C] shadow-md flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            <div className="p-6">
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-2">
                <span className="font-semibold text-[#EE5A7B]">{activeItem.category}</span>
                <span aria-hidden="true">·</span>
                <span>{activeItem.ageGroup}</span>
                <span aria-hidden="true">·</span>
                <span>{activeItem.termLabel}</span>
                <span className="ml-auto tabular-nums font-medium">
                  {lightboxIndex + 1} / {filteredItems.length}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#1E325C]">{activeItem.title}</h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">{activeItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
