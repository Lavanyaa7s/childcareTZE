import React, { useState } from 'react';
import { Star, MessageSquarePlus, CheckCircle2 } from 'lucide-react';
import { INITIAL_TESTIMONIALS, ParentTestimonial } from '../data/centreData';

export const TestimonialsSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<ParentTestimonial[]>(INITIAL_TESTIMONIALS);
  const [showForm, setShowForm] = useState(false);
  const [parentName, setParentName] = useState('');
  const [relation, setRelation] = useState('');
  const [programme, setProgramme] = useState('Play & Learn');
  const [rating, setRating] = useState(5);
  const [quote, setQuote] = useState('');
  const [outcome, setOutcome] = useState('');
  const [formError, setFormError] = useState('');
  const [justSubmitted, setJustSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (parentName.trim().length < 2 || quote.trim().length < 15) {
      setFormError('Please share your name and a short note (at least 15 characters) about your child’s experience.');
      return;
    }

    const newEntry: ParentTestimonial = {
      id: `test-${Date.now()}`,
      parentName: parentName.trim(),
      relation: relation.trim() || 'Tze En KidZ Parent',
      childProgramme: programme,
      monthsEnrolled: 'Melaka Family',
      rating,
      quote: quote.trim(),
      outcome: outcome.trim() || 'Happy, confident daily drop-offs at Tze En KidZ.',
    };

    setTestimonials([newEntry, ...testimonials]);
    setParentName('');
    setRelation('');
    setQuote('');
    setOutcome('');
    setRating(5);
    setFormError('');
    setShowForm(false);
    setJustSubmitted(true);
  };

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-white">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <p className="text-sm font-semibold text-[#EE5A7B] mb-1.5">
              Parent Testimonials · 家长心声
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E325C] tracking-tight text-balance">
              Trusted by Melaka Parents Every Morning
            </h2>
            <p className="text-slate-600 mt-2.5 text-base leading-relaxed">
              Hear directly from families in Taman Desa Cheng Perdana and nearby Melaka
              neighbourhoods watching their little ones grow with confidence.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="bg-[#FFF8DB] rounded-2xl px-4 py-2.5 border border-[#F4E3A1] flex items-center gap-3">
              <div className="flex items-center text-[#F4A623]" aria-label="4.9 out of 5 stars">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-[#F4A623]" />
                ))}
              </div>
              <div className="text-xs text-[#1E325C]">
                <span className="font-bold tabular-nums">5.0</span>
                <span className="text-slate-600"> · {testimonials.length} parent reviews</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setShowForm((prev) => !prev);
                setJustSubmitted(false);
              }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#3B9AE8] hover:bg-[#2A89D8] text-white text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <MessageSquarePlus className="w-4 h-4" />
              {showForm ? 'Close Form' : 'Write a Review'}
            </button>
          </div>
        </div>

        {justSubmitted && (
          <div
            role="status"
            className="mb-8 p-4 rounded-2xl bg-[#F3FAE8] border border-[#C6E598] flex items-center gap-3 text-sm text-[#3F6B0B]"
          >
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <span>Thank you for sharing your kind words with the Tze En KidZ community!</span>
          </div>
        )}

        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="mb-10 p-6 rounded-3xl bg-[#F9FCFF] border border-slate-200 space-y-4"
            noValidate
          >
            <h3 className="text-lg font-bold text-[#1E325C]">Share Your Family’s Experience</h3>
            {formError && (
              <p role="alert" className="text-xs font-semibold text-[#D63F61]">
                {formError}
              </p>
            )}
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label htmlFor="rev-name" className="block text-xs font-semibold text-[#1E325C] mb-1">
                  Your Name
                </label>
                <input
                  id="rev-name"
                  type="text"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  placeholder="e.g. Hui Min Chong"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="rev-rel" className="block text-xs font-semibold text-[#1E325C] mb-1">
                  Parent Of (Name & Age)
                </label>
                <input
                  id="rev-rel"
                  type="text"
                  value={relation}
                  onChange={(e) => setRelation(e.target.value)}
                  placeholder="e.g. Mother of Lucas (Age 4)"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm"
                />
              </div>
              <div>
                <label htmlFor="rev-prog" className="block text-xs font-semibold text-[#1E325C] mb-1">
                  Programme
                </label>
                <select
                  id="rev-prog"
                  value={programme}
                  onChange={(e) => setProgramme(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm"
                >
                  <option>Play & Learn</option>
                  <option>Growing Together</option>
                  <option>Smart Start</option>
                  <option>Full-Day Care</option>
                </select>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="rev-quote" className="block text-xs font-semibold text-[#1E325C] mb-1">
                  Your Review
                </label>
                <textarea
                  id="rev-quote"
                  rows={3}
                  value={quote}
                  onChange={(e) => setQuote(e.target.value)}
                  placeholder="What did your child enjoy most at Tze En KidZ?"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm"
                  required
                />
              </div>
              <div className="space-y-3">
                <div>
                  <label htmlFor="rev-outcome" className="block text-xs font-semibold text-[#1E325C] mb-1">
                    Biggest Growth You Noticed (Optional)
                  </label>
                  <input
                    id="rev-outcome"
                    type="text"
                    value={outcome}
                    onChange={(e) => setOutcome(e.target.value)}
                    placeholder="e.g. More confident speaking and singing"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm"
                  />
                </div>
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-semibold text-[#1E325C] mr-1">Rating:</span>
                    {[1, 2, 3, 4, 5].map((starVal) => (
                      <button
                        key={starVal}
                        type="button"
                        onClick={() => setRating(starVal)}
                        aria-label={`Rate ${starVal} stars`}
                        className="p-0.5 cursor-pointer"
                      >
                        <Star
                          className={`w-5 h-5 ${
                            starVal <= rating
                              ? 'fill-[#F4A623] text-[#F4A623]'
                              : 'text-slate-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-[#EE5A7B] hover:bg-[#DC486A] text-white text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Post Review
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}

        {/* Testimonials 2x2 Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((item) => (
            <article
              key={item.id}
              className="rounded-3xl bg-[#FFFDF7] border border-[#F0E8CE] p-6 sm:p-7 flex flex-col justify-between gap-5 shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-0.5" aria-label={`${item.rating} out of 5 stars`}>
                    {Array.from({ length: item.rating }).map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-[#F4A623] text-[#F4A623]" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-500">
                    {item.childProgramme} · {item.monthsEnrolled}
                  </span>
                </div>

                <blockquote className="text-base text-[#1E325C] leading-relaxed font-medium">
                  “{item.quote}”
                </blockquote>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  {item.outcome}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F0E8CE] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#3B9AE8]/15 text-[#257BC4] font-display font-bold text-base flex items-center justify-center shrink-0">
                  {item.parentName.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1E325C]">{item.parentName}</p>
                  <p className="text-xs text-slate-500">{item.relation}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
