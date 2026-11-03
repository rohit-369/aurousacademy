'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Network from '@/lib/Netwrok';
import Endpoints from '@/constant/endpoints';
import instId from '@/constant/instId';

const getMediaUrl = (item) => {
  const raw = item?.thumb || item?.image || item?.url || item?.banner;
  if (!raw) return null;
  return raw.startsWith('http') ? raw : `${Endpoints?.mediaBaseUrl || ''}${raw}`;
};

const stripHtml = (value) =>
  (typeof value === 'string' ? value.replace(/<[^>]*>/g, '') : value || '').trim();

const sanitizeHtml = (html) => {
  if (typeof html !== 'string') return html || '';
  let out = html
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<title[\s\S]*?<\/title>/gi, '')
    .replace(/<link[^>]*>/gi, '')
    .replace(/<meta[^>]*>/gi, '')
    .replace(/<base[^>]*>/gi, '');
  const firstTag = out.indexOf('<');
  if (firstTag > 0) out = out.slice(firstTag);
  return out.trim();
};

// The testimonial title is HTML with 3 paragraphs: quote, name, achievement.
const parseTestimonial = (html) => {
  if (typeof html !== 'string') return { quote: '', name: '', achievement: '' };
  const paragraphs = html
    .split(/<\/p>/i)
    .map((p) => stripHtml(p))
    .filter(Boolean);
  const quote = (paragraphs[0] || '')
    .replace(/^[\u201C\u201D"'']+|[\u201C\u201D"'']+$/g, '')
    .trim();
  return {
    quote,
    name: paragraphs[1] || '',
    achievement: paragraphs[2] || '',
  };
};

const StudentStoriesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [course, setCourse] = useState(null);
  const [level1, setLevel1] = useState([]);
  const [level2, setLevel2] = useState([]);
  const [level3, setLevel3] = useState([]);
  const [selectedLevel1, setSelectedLevel1] = useState(null);
  const [selectedLevel2, setSelectedLevel2] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Load courses and keep only the "VERIFIED RESULTS 2026" course
  const loadCourses = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await Network.fetchCourses(instId.instId);
      const courses = response?.courses || [];
      const target = courses.find(
        (c) =>
          (c?.name || c?.title || '').trim().toLowerCase() ===
            'verified results 2026'
      );
      setCourse(target || null);
    } catch (err) {
      console.error('Error fetching courses:', err);
      setError('Failed to load courses.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCourses();
  }, []);

  // fetchScheduleApi call #1: load the folders of the selected course (auto-run)
  const loadFolders = async (courseId) => {
    try {
      setLoading(true);
      setError('');
      const response = await Network.fetchScheduleApi(courseId, 0);
      const list = (response?.contentList || []).filter(
        (item) =>
          (item?.title || item?.name || '').trim().toLowerCase() ===
          'student testimonials'
      );
      // const sorted = sortLevel1(list);
      setLevel1(list);
      // setLevel2([]);
      // setLevel3([]);
      setSelectedLevel1(null);
      setSelectedLevel2(null);
    } catch (err) {
      console.error('Error fetching schedule:', err);
      setError('Failed to load results.');
    } finally {
      setLoading(false);
    }
  };

  // fetchScheduleApi call #2: load the children (testimonials) of the selected folder
  const loadTestimonials = async (courseId, parentId) => {
    try {
      setLoading(true);
      setError('');
      const response = await Network.fetchScheduleApi(courseId, parentId);
      const list = response?.contentList || [];
      console.log('testimonials', list);
      setLevel2(list);
    } catch (err) {
      console.error('Error fetching testimonials:', err);
      setError('Failed to load testimonials.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (course?.id) {
      loadFolders(course.id);
    }
  }, [course]);

  useEffect(() => {
    if (course?.id && level1.length > 0) {
      loadTestimonials(course.id, level1[0].id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [course, level1]);

  // Auto-select the first level-1 folder by default
  // useEffect(() => {
  //   if (level1.length > 0 && !selectedLevel1) {
  //     handleLevel1Click(level1[0]);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [level1]);

  // Auto-select the first level-2 sub-tab by default
  // useEffect(() => {
  //   if (level2.length > 0 && !selectedLevel2) {
  //     handleLevel2Click(level2[0]);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [level2]);

  useEffect(() => {
    if (level2.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % level2.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [level2]);

  const goTo = (index) =>
    setCurrentIndex(((index % level2.length) + level2.length) % level2.length);

  return (
    <section className="bg-slate-50 px-4 py-10 sm:px-6 lg:px-8" id="student-stories">
      <div
        className="mx-auto max-w-[92rem] rounded-3xl border border-emerald-900/10 p-6 shadow-sm sm:p-10"
        style={{
          background: 'linear-gradient(115deg, #f6fbfc, #f0f9fb)',
        }}
      >
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          {/* Left Title Block */}
          <div className="space-y-4 lg:col-span-5">
            <span className="inline-block rounded-full bg-emerald-100/80 px-3 py-1 text-[11px] font-black uppercase tracking-widest text-emerald-800">
              Student Stories
            </span>
            <h2 className="text-2xl font-extrabold leading-snug tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              Real Journeys.<br className="hidden sm:inline" />Real Inspiration.
            </h2>
            <p className="text-sm font-medium text-slate-600">
              Hear from our students and parents.
            </p>
            <div className="pt-2">
              <Link
                href="/gallery"
                className="group inline-flex items-center gap-2 rounded-xl bg-aurous-darkGreen px-6 py-3 text-xs font-extrabold text-white shadow-md shadow-emerald-950/10 transition hover:bg-[#00523F] sm:text-sm"
              >
                <span>View All Stories</span>
                <span className="text-aurous-yellow transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

          {/* Right Student Quote Carousel */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm lg:col-span-7">
            {/* Quote Mark Accent */}
            <div className="pointer-events-none absolute right-6 top-4 z-10 select-none font-serif text-8xl font-black leading-none text-emerald-600/15">
              “
            </div>

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {level2.map((item, index) => {
                  const mediaUrl = getMediaUrl(item);
                  const title = item?.title || item?.name || '';
                  const { quote, name, achievement } = parseTestimonial(title);
                  return (
                    <div key={item?.id ?? index} className="w-full flex-shrink-0 p-6 sm:p-8">
                      <div className="relative z-10 flex flex-col items-center gap-5 sm:flex-row sm:items-start">
                        {mediaUrl && (
                          <div className="flex-shrink-0">
                            <img
                              src={mediaUrl}
                              alt={name || stripHtml(title) || 'Student testimonial'}
                              className="h-24 w-20 rounded-xl border-2 border-emerald-100 object-cover shadow-sm sm:h-36 sm:w-36"
                            />
                          </div>
                        )}
                        <div className="space-y-2 text-center sm:text-left">
                          {quote && (
                            <p className="text-sm font-semibold leading-relaxed text-slate-700 sm:text-base">
                              {quote}
                            </p>
                          )}
                          {name && (
                            <p className="text-base font-extrabold text-slate-900">{name}</p>
                          )}
                          {achievement && (
                            <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">
                              {achievement}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {level2.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Previous story"
                  onClick={() => goTo(currentIndex - 1)}
                  className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-slate-200 bg-white/90 p-2 text-slate-700 shadow-sm transition hover:bg-white hover:text-aurous-darkGreen"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button
                  type="button"
                  aria-label="Next story"
                  onClick={() => goTo(currentIndex + 1)}
                  className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-slate-200 bg-white/90 p-2 text-slate-700 shadow-sm transition hover:bg-white hover:text-aurous-darkGreen"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                </button>

                <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
                  {level2.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      aria-label={`Go to story ${index + 1}`}
                      onClick={() => goTo(index)}
                      className={
                        index === currentIndex
                          ? 'h-2.5 w-6 rounded-full bg-aurous-darkGreen transition-all duration-300'
                          : 'h-2.5 w-2.5 rounded-full bg-slate-300 transition-all duration-300 hover:bg-slate-400'
                      }
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentStoriesSection;




