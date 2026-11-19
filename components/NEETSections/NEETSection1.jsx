'use client';

import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  FormControlLabel,
  IconButton,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/navigation';

const COLORS = {
  green: '#003e34',
  greenHover: '#10634e',
  greenDark: '#12614d',
  ink: '#123d36',
  cream: '#fff5c9',
  cardTint: '#eff3cf',
  cardBorder: '#a9bcb2',
  cardTitle: '#07543f',
  campus: '#003e30',
  campusDeep: '#003f34',
  yellow: '#ffda2a',
};

const WRAP_SX = {
  maxWidth: '90rem',
  margin: '0 auto',
  padding: '0 36px',
  '@media (max-width: 1100px)': { padding: '0 24px' },
  '@media (max-width: 760px)': { padding: '0 16px' },
};

const FILTERS = [
  { id: '11', label: 'Class 11' },
  { id: '12', label: 'Class 12' },
  { id: 'dropper', label: 'Dropper' },
];

const NEET_PROGRAMS = [
  {
    id: 'class-11-classroom',
    stage: '11',
    cardTitle: 'Classroom Program',
    cardClass: 'Class 11',
    cardTiming: 'Evening Program',
    cardTarget: '2028',
    cardImage: '/Images/aurous-student.png',
    slug: 'class11-classroom',
  },
  {
    id: 'class-11-sankalp',
    stage: '11',
    cardTitle: 'Sankalp Program',
    cardClass: 'Class 11',
    cardTiming: 'Morning Program',
    cardTarget: '2028',
    cardImage: '/Images/aurous-male-2.png',
    slug: 'class11-sankalp',
  },
  {
    id: 'class-11-school-integrated',
    stage: '11',
    cardTitle: 'School Integrated Program',
    cardClass: 'Class 11',
    cardTiming: 'Within-School',
    cardTarget: '2028',
    cardImage: '/Images/aurous-student-3.png',
    slug: 'class11-school-integrated',
  },
  {
    id: 'class-12-sankalp',
    stage: '12',
    cardTitle: 'Sankalp Program',
    cardClass: 'Class 12',
    cardTiming: 'Evening Program',
    cardTarget: '2027',
    cardImage: '/Images/aurous-male-2.png',
    slug: 'class12-sankalp',
  },
  {
    id: 'dropper-extended-classroom',
    stage: 'dropper',
    cardTitle: 'Extended Classroom Program',
    cardClass: 'Class 12 passout',
    cardTiming: 'Morning Program',
    cardTarget: '2027',
    cardImage: '/Images/aurous-student-3.png',
    slug: 'dropper-extended-classroom',
  },
];

const CourseCard = ({ program, onExplore }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Box
      component="article"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        flex: { xs: '0 0 280px', md: '0 0 calc((100% - 54px) / 4)' },
        minWidth: 265,
        maxWidth: 400,
        border: `1px solid ${COLORS.cardBorder}`,
        borderRadius: '10px',
        overflow: 'hidden',
        background: '#fff',
        scrollSnapAlign: 'start',
        position: 'relative',
        boxShadow: hovered ? '0 7px 18px rgba(0, 62, 52, 0.08)' : 'none',
        transition: 'box-shadow 0.2s ease',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          isolation: 'isolate',
          overflow: 'hidden',
          height: { xs: 320, md: 330 },
          padding: '19px 16px 0',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            background: COLORS.cardTint,
            clipPath: 'polygon(75% 0, 100% 0, 100% 100%, 22% 100%)',
          }}
        />
        <Typography
          component="h3"
          sx={{
            position: 'relative',
            zIndex: 3,
            color: COLORS.cardTitle,
            fontSize: { xs: 23, md: 25 },
            fontWeight: 800,
            lineHeight: '27px',
            letterSpacing: '-0.5px',
            maxWidth: 185,
            height: 81,
            minHeight: 81,
            margin: 0,
          }}
        >
          {program.cardTitle}
        </Typography>
        <Box
          sx={{
            position: 'relative',
            zIndex: 3,
            width: 145,
            marginTop: '12px',
            display: 'grid',
            gridTemplateRows: '26px 29px 30px 43px',
          }}
        >
          <Typography sx={{ fontSize: 15, fontWeight: 800, color: '#233b32', marginBottom: '3px', lineHeight: 1.5 }}>
            {program.cardClass}
          </Typography>
          <Typography sx={{ fontSize: 10, fontWeight: 500, color: '#30473d', whiteSpace: 'nowrap', lineHeight: 1.5, marginBottom: '14px' }}>
            NEET-UG
          </Typography>
          <Typography sx={{ fontSize: 10, fontWeight: 500, color: '#30473d', whiteSpace: 'nowrap', lineHeight: 1.5 }}>
            {program.cardTiming}
          </Typography>
          <Box>
            <Typography component="small" sx={{ display: 'block', fontSize: 9, fontWeight: 600, letterSpacing: '0.4px', color: '#4d6257', marginBottom: '3px', lineHeight: 1 }}>
              TARGET
            </Typography>
            <Typography component="strong" sx={{ display: 'block', fontSize: 23, lineHeight: 1.2, fontWeight: 700, color: COLORS.cardTitle }}>
              {program.cardTarget}
            </Typography>
          </Box>
        </Box>
        <Box
          component="img"
          src={program.cardImage}
          alt={`${program.cardTitle} — Aurous Academy student`}
          loading="lazy"
          sx={{
            position: 'absolute',
            zIndex: 1,
            width: { xs: 221, md: 235 },
            height: { xs: 332, md: 352 },
            objectFit: 'contain',
            right: -22,
            bottom: { xs: -64, md: -75 },
            maxWidth: 'none',
            pointerEvents: 'none',
          }}
        />
      </Box>
      <Button
        onClick={() => onExplore(program)}
        sx={{
          position: 'absolute',
          zIndex: 4,
          left: 16,
          bottom: 43,
          width: 119,
          minHeight: 35,
          padding: '9px 11px',
          background: COLORS.green,
          color: '#fff',
          borderRadius: '4px',
          fontSize: 9,
          lineHeight: 1.2,
          fontWeight: 800,
          textTransform: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          '&:hover': { background: COLORS.greenDark },
        }}
      >
        Explore More
        <Typography component="span" aria-hidden="true" sx={{ fontSize: 11, fontWeight: 700, lineHeight: 1 }}>
          ↗
        </Typography>
      </Button>
    </Box>
  );
};

const NEETSection1 = () => {
  const router = useRouter();

  const [activeStage, setActiveStage] = useState('11');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('');
  const [consent, setConsent] = useState(false);
  const [form, setForm] = useState({
    student: '',
    mobile: '',
    stage: '11',
    program: 'Help me choose',
  });

  const visiblePrograms = NEET_PROGRAMS.filter((program) => program.stage === activeStage);

  const scrollToPrograms = () => {
    const element = document.getElementById('programs');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleExplore = (program) => {
    router.push(`/neet-course/${program.slug}`);
  };

  const handleFilterChange = (stage) => {
    setActiveStage(stage);
    setForm((prev) => ({ ...prev, stage }));
  };

  const openRegistration = (program) => {
    setForm((prev) => ({ ...prev, program }));
    setFormStatus('');
    setDialogOpen(true);
  };

  const closeRegistration = () => {
    setDialogOpen(false);
  };

  const handleFieldChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!consent) {
      setFormStatus('Please agree to share your details to continue.');
      return;
    }
    const message = `Hello Aurous Academy, I would like NEET-UG counselling.\nStudent: ${form.student}\nMobile: ${form.mobile}\nClass: ${form.stage}\nProgram: ${form.program}`;
    window.open(`https://wa.me/919993936947?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
    setFormStatus('Please send the prepared message in WhatsApp. Your enquiry has not been saved on this page.');
  };

  return (
    <Box
      component="main"
      sx={{
        background: '#fff',
        color: COLORS.ink,
        fontFamily: 'var(--font-plus-jakarta-sans), Arial, sans-serif',
      }}
    >
      {/* Banner */}
      <Box sx={WRAP_SX}>
        <Box
          component="section"
          sx={{
            position: 'relative',
            isolation: 'isolate',
            overflow: 'hidden',
            background: COLORS.cream,
            borderRadius: '10px',
            marginTop: '18px',
            minHeight: { xs: 390, md: 292 },
            display: 'flex',
            alignItems: { xs: 'flex-start', md: 'center' },
            '@media (min-width: 1450px)': { minHeight: 310 },
          }}
        >
          <Box
            component="img"
            src="/Images/aiims-delhi-side-view.png"
            alt="Illustrated sketch of AIIMS New Delhi main building"
            sx={{
              position: 'absolute',
              zIndex: -1,
              right: 0,
              bottom: 0,
              width: { xs: '100%', md: '54%' },
              height: { xs: 175, md: '100%' },
              objectFit: 'cover',
              objectPosition: 'center',
              mixBlendMode: 'multiply',
              opacity: { xs: 0.9, md: 1 },
              maskImage: {
                xs: 'linear-gradient(to bottom, transparent, #000 20%)',
                md: 'linear-gradient(to right, transparent, #000 13%)',
              },
              WebkitMaskImage: {
                xs: 'linear-gradient(to bottom, transparent, #000 20%)',
                md: 'linear-gradient(to right, transparent, #000 13%)',
              },
            }}
          />
          <Box sx={{ padding: { xs: '25px 22px', md: '36px 38px' }, maxWidth: { xs: '100%', md: 760 } }}>
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: 38, md: 'clamp(40px, 4.6vw, 64px)' },
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: { xs: '-1.6px', md: '-2.5px' },
                color: COLORS.ink,
                marginBottom: '8px',
              }}
            >
              Your goal is medicine.
            </Typography>
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: 23, md: 'clamp(23px, 2.6vw, 36px)' },
                lineHeight: 1.2,
                letterSpacing: { xs: '-0.6px', md: '-1.1px' },
                fontWeight: 700,
                color: COLORS.ink,
                marginBottom: '12px',
                maxWidth: { xs: 330, md: 'none' },
              }}
            >
              Let&apos;s build your next chapter.
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 11, md: 14 },
                lineHeight: 1.7,
                color: '#3e4b3d',
                maxWidth: { xs: 290, md: 610 },
                marginBottom: { xs: '16px', md: '18px' },
              }}
            >
              NEET-UG preparation for Class 11, Class 12 and droppers.
            </Typography>
            <Button
              onClick={scrollToPrograms}
              sx={{
                background: COLORS.green,
                color: '#fff',
                borderRadius: '6px',
                padding: { xs: '11px 15px', md: '12px 20px' },
                fontSize: { xs: 10, md: 12 },
                fontWeight: 800,
                textTransform: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '21px',
                '&:hover': { background: COLORS.greenHover },
              }}
            >
              Find Your Program
              <Typography component="span" aria-hidden="true" sx={{ fontSize: 21, lineHeight: 1 }}>
                →
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Programs */}
      <Box
        component="section"
        id="programs"
        sx={{ ...WRAP_SX, padding: { xs: '28px 16px 20px', md: '39px 36px 27px' } }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '24px',
            alignItems: 'center',
            marginBottom: { xs: '18px', md: '22px' },
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: 27, md: 34 },
              fontWeight: 800,
              letterSpacing: '-0.9px',
              lineHeight: 1.2,
              color: COLORS.ink,
              margin: 0,
            }}
          >
            Find your NEET-UG program
          </Typography>
          <Box
            sx={{
              display: 'flex',
              border: '1px solid #aebbb5',
              borderRadius: '7px',
              overflow: 'hidden',
              flexShrink: 0,
              width: 'fit-content',
            }}
            role="group"
            aria-label="Choose your class"
          >
            {FILTERS.map((filter) => (
              <Button
                key={filter.id}
                onClick={() => handleFilterChange(filter.id)}
                aria-pressed={activeStage === filter.id}
                sx={{
                  background: activeStage === filter.id ? COLORS.green : '#fff',
                  color: activeStage === filter.id ? '#fff' : COLORS.green,
                  padding: { xs: '11px 22px', md: '12px 25px' },
                  fontSize: 11,
                  fontWeight: 700,
                  borderRadius: 0,
                  borderRight: '1px solid #bdc7c0',
                  textTransform: 'none',
                  minWidth: 0,
                  '&:last-child': { borderRight: 'none' },
                  '&:hover': { background: activeStage === filter.id ? COLORS.green : '#f4f6ee' },
                }}
              >
                {filter.label}
              </Button>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            gap: '18px',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            padding: '0 0 5px',
            scrollbarWidth: 'thin',
            scrollbarColor: '#b7c6b8 #f4f6ee',
            '&::-webkit-scrollbar': { height: 8 },
            '&::-webkit-scrollbar-thumb': { background: '#b7c6b8', borderRadius: 4 },
          }}
        >
          {visiblePrograms.map((program) => (
            <CourseCard key={program.id} program={program} onExplore={handleExplore} />
          ))}
        </Box>
      </Box>

      {/* Campus showcase */}
      <Box sx={WRAP_SX}>
        <Box
          component="section"
          id="campus"
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '34% 66%' },
            background: COLORS.campus,
            color: '#fff',
            margin: { xs: '0 0 18px', md: '0 9px 20px' },
            border: '1px solid #0b5142',
            borderRadius: '17px',
            overflow: 'hidden',
            minHeight: { md: 285 },
            boxShadow: '0 10px 18px rgba(0, 62, 48, 0.1)',
          }}
        >
          <Box sx={{ position: 'relative', minHeight: { xs: 170, md: 285 } }}>
            <Box
              component="img"
              src="/Images/building.webp"
              alt="Aurous Academy MP Nagar campus"
              loading="lazy"
              sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 54%' }}
            />
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background: {
                  xs: 'linear-gradient(0deg, #003e30, transparent 65%)',
                  md: 'linear-gradient(90deg, transparent 10%, rgba(0, 62, 48, 0.25) 50%, #003e30 100%)',
                },
              }}
            />
          </Box>
          <Box sx={{ padding: { xs: '0 20px 22px', md: '20px 27px 20px 8px' } }}>
            <Box
              component="span"
              sx={{
                display: 'inline-block',
                border: '1px solid #0b6950',
                borderRadius: '25px',
                background: '#00513e',
                color: '#ffd900',
                fontSize: 9,
                fontWeight: 800,
                letterSpacing: '0.5px',
                padding: '5px 11px',
              }}
            >
              VISIT OUR CAMPUS
            </Box>
            <Typography component="h2" sx={{ fontSize: { xs: 23, md: 25 }, letterSpacing: '-0.75px', fontWeight: 800, margin: '8px 0 5px' }}>
              AUROUS ACADEMY
            </Typography>
            <Typography sx={{ color: '#c5e6db', fontSize: 11, lineHeight: 1.7 }}>
              A modern learning environment designed for focus, growth and success.
            </Typography>
            <Typography component="address" sx={{ fontStyle: 'normal', fontSize: 10, lineHeight: 1.8, color: '#d7eae3', fontWeight: 700, margin: '11px 0 3px' }}>
              <Box component="span" sx={{ color: '#ffd700', marginRight: '8px', fontSize: 17 }} aria-hidden="true">
                ◎
              </Box>
              Plot No. R-4, Opposite Railway Track, Zone-2, MP Nagar, Bhopal, Madhya Pradesh (India)–462011
            </Typography>
            <Box component="a" href="tel:+919993936947" sx={{ color: '#fff', textDecoration: 'none', fontSize: 12, fontWeight: 800, display: 'inline-block' }}>
              <Box component="span" sx={{ color: '#ffd700', marginRight: '8px', fontSize: 17 }} aria-hidden="true">
                ☎
              </Box>
              9993936947
            </Box>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: { xs: '9px 12px', md: '9px 16px' },
                borderTop: '1px solid #155947',
                paddingTop: '12px',
                marginTop: '12px',
                fontSize: { xs: 10, md: 11 },
                fontWeight: 700,
              }}
            >
              <Box component="span">
                <Box component="b" sx={{ fontSize: 17, lineHeight: 1, color: '#39c6a0', marginRight: '10px', fontWeight: 400 }} aria-hidden="true">▥</Box>
                Modern Classrooms
              </Box>
              <Box component="span">
                <Box component="b" sx={{ fontSize: 17, lineHeight: 1, color: '#39c6a0', marginRight: '10px', fontWeight: 400 }} aria-hidden="true">⌁</Box>
                Well-equipped Labs
              </Box>
              <Box component="span">
                <Box component="b" sx={{ fontSize: 17, lineHeight: 1, color: '#39c6a0', marginRight: '10px', fontWeight: 400 }} aria-hidden="true">▤</Box>
                Library &amp; Study Spaces
              </Box>
              <Box component="span">
                <Box component="b" sx={{ fontSize: 17, lineHeight: 1, color: '#39c6a0', marginRight: '10px', fontWeight: 400 }} aria-hidden="true">◇</Box>
                Safe &amp; Secure Campus
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '16px', flexWrap: 'wrap' }}>
              <Button
                onClick={() => openRegistration('Campus visit')}
                sx={{
                  background: '#ffd000',
                  color: '#001f17',
                  borderRadius: '7px',
                  padding: '10px 16px',
                  fontSize: 11,
                  fontWeight: 900,
                  textTransform: 'none',
                  gap: '22px',
                  '&:hover': { background: '#ffe05a' },
                }}
              >
                Plan a Visit <span aria-hidden="true">→</span>
              </Button>
              <Box
                component="a"
                href="https://www.google.com/maps/search/?api=1&query=Aurous+Academy+MP+Nagar+Bhopal"
                target="_blank"
                rel="noopener"
                sx={{
                  border: '1px solid #059d71',
                  borderRadius: '7px',
                  padding: '10px 16px',
                  fontSize: 11,
                  fontWeight: 700,
                  color: '#fff',
                  textDecoration: 'none',
                  '&:hover': { background: '#07533f' },
                }}
              >
                ◎ &nbsp; View on Map
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Registration invitation */}
      <Box sx={WRAP_SX}>
        <Box
          component="section"
          sx={{
            position: 'relative',
            isolation: 'isolate',
            overflow: 'hidden',
            background: COLORS.campusDeep,
            color: '#fff',
            border: '1px solid #13654e',
            borderRadius: '16px',
            padding: { xs: '22px', md: '23px 29px' },
            marginBottom: { xs: '20px', md: '23px' },
            display: { xs: 'grid', md: 'flex' },
            gridTemplateColumns: { xs: '44px 1fr', md: 'none' },
            alignItems: 'center',
            gap: { xs: '14px', md: '21px' },
            boxShadow: '0 7px 18px rgba(0, 62, 52, 0.07)',
          }}
        >
          <Box
            aria-hidden="true"
            sx={{ position: 'absolute', left: 0, top: 24, bottom: 24, width: 4, borderRadius: '0 4px 4px 0', background: COLORS.yellow }}
          />
          <Box
            aria-hidden="true"
            sx={{
              position: 'absolute',
              zIndex: -1,
              width: 240,
              height: 240,
              right: { xs: -70, md: 140 },
              top: { xs: -100, md: -150 },
              border: '1px solid rgba(255, 255, 255, 0.07)',
              borderRadius: '50%',
              boxShadow: '0 0 0 32px rgba(255, 255, 255, 0.02), 0 0 0 64px rgba(255, 255, 255, 0.01)',
            }}
          />
          <Box
            aria-hidden="true"
            sx={{
              flexShrink: 0,
              width: { xs: 44, md: 58 },
              height: { xs: 44, md: 58 },
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid #4a7957',
              borderRadius: { xs: '12px', md: '15px' },
              color: COLORS.yellow,
              display: 'grid',
              placeItems: 'center',
              transform: 'rotate(-5deg)',
            }}
          >
            <Box
              component="svg"
              viewBox="0 0 40 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              sx={{ width: { xs: 30, md: 36 }, height: { xs: 30, md: 36 }, transform: 'rotate(5deg)' }}
            >
              <path d="M8 30V12a3 3 0 0 1 3-3h15M8 30h20V19M8 30l5 3h17" />
              <path d="m17 23 15-15 4 4-15 15-6 2 2-6ZM29 11l4 4" />
            </Box>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography
              component="span"
              sx={{
                display: 'block',
                fontSize: { xs: 7, md: 8 },
                fontWeight: 700,
                letterSpacing: { xs: '1.1px', md: '1.8px' },
                color: '#a6c9b8',
                marginBottom: { xs: '7px', md: '8px' },
              }}
            >
              YOUR NEXT CHAPTER STARTS HERE
            </Typography>
            <Typography component="h2" sx={{ fontSize: { xs: 21, md: 25 }, fontWeight: 800, lineHeight: 1.25, letterSpacing: '-0.6px', margin: 0 }}>
              Ready to begin your <Box component="span" sx={{ color: '#ffdf50' }}>NEET preparation?</Box>
            </Typography>
          </Box>
          <Button
            onClick={() => openRegistration('Help me choose')}
            sx={{
              gridColumn: { xs: 2, md: 'auto' },
              justifySelf: { xs: 'start', md: 'auto' },
              minWidth: { xs: 174, md: 187 },
              flexShrink: 0,
              background: COLORS.yellow,
              color: '#00392d',
              fontWeight: 800,
              fontSize: { xs: 11, md: 12 },
              borderRadius: '9px',
              padding: { xs: '10px 12px 10px 17px', md: '12px 14px 12px 20px' },
              gap: '25px',
              boxShadow: '0 4px 0 #bfa21c',
              textTransform: 'none',
              '&:hover': { background: '#ffe269' },
            }}
          >
            Register Now
            <Typography component="span" aria-hidden="true" sx={{ display: 'grid', placeItems: 'center', width: 30, height: 30, background: 'rgba(0, 62, 52, 0.06)', borderRadius: '50%', fontSize: 20, lineHeight: 1 }}>
              ↗
            </Typography>
          </Button>
        </Box>
      </Box>

      {/* Registration dialog */}
      <Dialog
        open={dialogOpen}
        onClose={closeRegistration}
        fullWidth
        maxWidth="sm"
        PaperProps={{
          sx: {
            borderRadius: '18px',
            padding: { xs: 3, md: 4 },
            maxHeight: '90vh',
            overflowY: 'auto',
            boxShadow: '0 25px 70px rgba(0, 0, 0, 0.2)',
            color: COLORS.ink,
            width: { xs: '92vw', sm: 560 },
          },
        }}
      >
        <DialogContent sx={{ position: 'relative', padding: 0 }}>
          <IconButton
            onClick={closeRegistration}
            aria-label="Close registration"
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: 30,
              height: 30,
              borderRadius: '50%',
              background: '#edf3e9',
              color: COLORS.green,
              '&:hover': { background: '#e1eadf' },
            }}
          >
            <CloseIcon sx={{ fontSize: 23 }} />
          </IconButton>
          <Typography sx={{ fontSize: 9, letterSpacing: '1.4px', fontWeight: 800, color: '#66856a' }}>
            AUROUS ACADEMY
          </Typography>
          <Typography component="h2" sx={{ fontSize: 25, fontWeight: 800, margin: '15px 0 9px' }}>
            Register your interest
          </Typography>
          <Typography sx={{ fontSize: 12, lineHeight: 1.7, color: '#788575', marginBottom: '20px' }}>
            Share your details with our admissions team via WhatsApp.
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: '15px' }}>
              <TextField
                label="Student name"
                name="student"
                value={form.student}
                onChange={handleFieldChange}
                required
                size="small"
                inputProps={{ maxLength: 80, autoComplete: 'name' }}
              />
              <TextField
                label="Mobile number"
                name="mobile"
                value={form.mobile}
                onChange={handleFieldChange}
                required
                size="small"
                type="tel"
                inputProps={{ inputMode: 'numeric', maxLength: 10, autoComplete: 'tel-national', title: 'Enter a 10-digit Indian mobile number' }}
              />
              <TextField
                select
                label="Current class"
                name="stage"
                value={form.stage}
                onChange={handleFieldChange}
                size="small"
              >
                <MenuItem value="11">Class 11</MenuItem>
                <MenuItem value="12">Class 12</MenuItem>
                <MenuItem value="dropper">Class 12 passout / Dropper</MenuItem>
              </TextField>
              <TextField
                label="Program"
                name="program"
                value={form.program}
                onChange={handleFieldChange}
                size="small"
                inputProps={{ maxLength: 100 }}
              />
            </Box>
            <FormControlLabel
              control={<Checkbox checked={consent} onChange={(event) => setConsent(event.target.checked)} size="small" />}
              label="I agree to share these details with Aurous Academy for counselling about NEET-UG programs."
              sx={{
                alignItems: 'flex-start',
                margin: '18px 0 0',
                '& .MuiFormControlLabel-label': { fontSize: 10, lineHeight: 1.7, fontWeight: 400 },
              }}
            />
            <Button
              type="submit"
              fullWidth
              sx={{
                marginTop: '8px',
                background: COLORS.green,
                color: '#fff',
                borderRadius: '7px',
                padding: '13px 20px',
                fontSize: 12,
                fontWeight: 700,
                textTransform: 'none',
                '&:hover': { background: COLORS.greenHover },
              }}
            >
              Send registration enquiry ↗
            </Button>
            <Typography sx={{ fontSize: 10, color: '#73816d', lineHeight: 1.8, marginTop: '13px' }}>
              Opens a prepared message. Please press Send in WhatsApp to contact the team. A counselling slot is confirmed only after the team replies.
            </Typography>
            {formStatus && (
              <Typography role="status" sx={{ fontSize: 10, color: '#73816d', lineHeight: 1.8, marginTop: '13px' }}>
                {formStatus}
              </Typography>
            )}
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default NEETSection1;
