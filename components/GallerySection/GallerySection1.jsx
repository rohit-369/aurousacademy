'use client';

import { Box, Card, Container, Skeleton, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid2';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StarIcon from '@mui/icons-material/Star';
import Network from '@/lib/Netwrok';
import Endpoints from '@/constant/endpoints';
import instId from '@/constant/instId';

const decodeEntities = (value) =>
  (typeof value === 'string' ? value : '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');

const stripHtml = (value) =>
  decodeEntities(value)
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const getMediaUrl = (item) => {
  const raw = item?.thumb || item?.image || item?.url || item?.banner;
  if (!raw) return null;
  return raw.startsWith('http') ? raw : `${Endpoints?.mediaBaseUrl || ''}${raw}`;
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

const GallerySection1 = () => {
  const [course, setCourse] = useState(null);
  const [level1, setLevel1] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
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
      setLevel1(list);
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
      const list = (response?.contentList || []).filter(
        (it) => it?.active !== false
      );
      setTestimonials(list);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [course]);

  useEffect(() => {
    if (course?.id && level1.length > 0) {
      loadTestimonials(course.id, level1[0].id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [course, level1]);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f3f7ff 0%, #f2fdf7 50%, #eef6ff 100%)',
        py: { xs: 5, md: 9 },
      }}
    >
      <Container maxWidth="xl">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              color: '#047857',
              borderRadius: '50px',
              px: 3,
              py: 1,
              mb: 3,
            }}
          >
            <StarIcon sx={{ fontSize: 18 }} />
            <Typography
              variant="body2"
              sx={{
                fontWeight: 700,
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
              }}
            >
              Student Testimonials
            </Typography>
          </Box>

          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: '#0f172a',
              fontSize: { xs: '1.9rem', md: '3rem' },
              mb: 2,
            }}
          >
            What Our Students Say
          </Typography>

          <Typography
            sx={{
              color: '#64748b',
              maxWidth: 640,
              mx: 'auto',
              fontSize: { xs: '0.95rem', md: '1.1rem' },
              lineHeight: 1.7,
            }}
          >
            Real words from Aurous Academy students who turned their dedication into
            extraordinary results.
          </Typography>
        </Box>

        {/* Loading skeletons */}
        {loading && testimonials.length === 0 && (
          <Grid container spacing={3}>
            {[0, 1, 2, 3].map((i) => (
              <Grid size={{ xs: 12, md: 6 }} key={i}>
                <Skeleton variant="rounded" height={260} sx={{ borderRadius: 4 }} />
              </Grid>
            ))}
          </Grid>
        )}

        {/* Error */}
        {!loading && error && (
          <Typography sx={{ textAlign: 'center', color: '#e11d48', fontWeight: 600, py: 6 }}>
            {error}
          </Typography>
        )}

        {/* Empty */}
        {!loading && !error && testimonials.length === 0 && (
          <Typography sx={{ textAlign: 'center', color: '#64748b', py: 6 }}>
            No testimonials available right now.
          </Typography>
        )}

        {/* Testimonial Cards */}
        {testimonials.length > 0 && (
          <Grid container spacing={3}>
            {testimonials.map((item) => {
              const { quote, name, achievement } = parseTestimonial(item?.title);
              const mediaUrl = getMediaUrl(item);
              return (
                <Grid size={{ xs: 12, md: 6 }} key={item?.id}>
                  <Card
                    elevation={0}
                    sx={{
                      display: 'flex',
                      flexDirection: { xs: 'column', sm: 'row' },
                      borderRadius: '24px',
                      background: '#ffffff',
                      border: '1px solid rgba(59, 130, 246, 0.18)',
                      boxShadow: '0 8px 30px rgba(30, 64, 175, 0.08)',
                      overflow: 'hidden',
                      height: '100%',
                      transition: 'transform 0.35s ease, box-shadow 0.35s ease',
                      '&:hover': {
                        transform: 'translateY(-6px)',
                        boxShadow: '0 20px 45px rgba(30, 64, 175, 0.14)',
                      },
                    }}
                  >
                    {/* Student Photo */}
                    <Box
                      sx={{
                        width: { xs: '100%', sm: 190 },
                        minHeight: { xs: 260, sm: 'auto' },
                        flexShrink: 0,
                        position: 'relative',
                        background: 'linear-gradient(160deg, #eef4ff, #f1fbf5)',
                      }}
                    >
                      {mediaUrl ? (
                        <Box
                          component="img"
                          src={mediaUrl}
                          alt={name || 'Student testimonial'}
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'top center',
                          }}
                        />
                      ) : (
                        <Box
                          sx={{
                            position: 'absolute',
                            inset: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#cbd5e1',
                          }}
                        >
                          <FormatQuoteIcon sx={{ fontSize: 64 }} />
                        </Box>
                      )}
                    </Box>

                    {/* Quote Content */}
                    <Box sx={{ p: { xs: 3, sm: 4 }, flex: 1, position: 'relative' }}>
                      <FormatQuoteIcon
                        sx={{
                          position: 'absolute',
                          top: 16,
                          right: 20,
                          fontSize: { xs: 48, sm: 64 },
                          color: '#bbf7d0',
                          transform: 'rotate(180deg)',
                        }}
                      />

                      {quote && (
                        <Typography
                          sx={{
                            position: 'relative',
                            zIndex: 1,
                            color: '#374151',
                            fontSize: { xs: '0.9rem', md: '0.98rem' },
                            lineHeight: 1.75,
                            fontWeight: 500,
                            pr: { xs: 0, sm: 4 },
                            minHeight: 110,
                          }}
                        >
                          {quote}
                        </Typography>
                      )}

                      <Stack sx={{ mt: 3 }}>
                        {name && (
                          <Typography
                            sx={{
                              color: '#0f172a',
                              fontWeight: 800,
                              fontSize: '1.05rem',
                              mb: 0.5,
                            }}
                          >
                            {name}
                          </Typography>
                        )}
                        {achievement && (
                          <Typography
                            sx={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: 0.5,
                              color: '#047857',
                              fontWeight: 700,
                              fontSize: '0.82rem',
                            }}
                          >
                            <EmojiEventsIcon sx={{ fontSize: 16, color: '#f59e0b' }} />
                            {achievement}
                          </Typography>
                        )}
                      </Stack>
                    </Box>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        )}
      </Container>
    </Box>
  );
}

export default GallerySection1


