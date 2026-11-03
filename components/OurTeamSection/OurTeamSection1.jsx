import { Box, Typography } from '@mui/material';
import React from 'react';

const GREEN = '#00382b';
const YELLOW = '#ffc800';
const MUTED = '#637068';

const letterParagraphs = [
  'Preparing for JEE, NEET or an Olympiad is a demanding journey. Some topics come easily; others take several attempts. Both are part of learning. What matters is making a steady effort and being willing to ask for help.',
  'At Aurous Academy, we believe hard work needs direction. Our role is to explain concepts clearly, encourage questions and help students use their study time well. Practice, classroom discussions and regular assessments give that effort a structure.',
  'We encourage students to look beyond a test score. Understand what went wrong, revisit the idea and try the question again. This is how stronger understanding and confidence develop over time.',
  'To our students: you do not need to know every answer immediately. Be curious, stay consistent and speak up when something is unclear. To parents: thank you for placing your trust in us and supporting your child through this important stage.',
  'We look forward to helping our students prepare with purpose, learn from setbacks and take their next steps with confidence.',
];

const eyebrowSx = {
  fontSize: '11px',
  letterSpacing: '2px',
  textTransform: 'uppercase',
  fontWeight: 700,
  color: GREEN,
  mb: '20px',
};

const OurTeamSection1 = () => {
  return (
    <Box sx={{ background: '#f8fafc', minHeight: '100vh' }}>
      <Box
        sx={{
          maxWidth: '1140px',
          mx: 'auto',
          px: { xs: '20px', md: '38px' },
          pt: { xs: '28px', md: '40px' },
          pb: { xs: '32px', md: '55px' },
        }}
      >
        {/* Heading */}
        <Box sx={{ padding: '5px 0 28px' }}>
          <Typography component="div" sx={eyebrowSx}>
            From the Directors
          </Typography>
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: '30px', md: '38px' },
              fontWeight: 800,
              lineHeight: 1.21,
              letterSpacing: '-1px',
              color: GREEN,
              mb: '12px',
            }}
          >
            Directors&rsquo; Message
          </Typography>
          <Typography component="p" sx={{ fontSize: '14px', color: MUTED, m: 0 }}>
            A few words for our students and their parents.
          </Typography>
        </Box>

        {/* Layout */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '260px 1fr' },
            border: '1px solid #e0e7e1',
            borderRadius: '20px',
            overflow: 'hidden',
            background: '#ffffff',
            boxShadow: '0 8px 30px rgba(0, 56, 43, 0.02)',
          }}
        >
          {/* Side panel */}
          <Box
            sx={{
              padding: { xs: '25px', md: '32px 27px' },
              background: GREEN,
              color: '#ffffff',
            }}
          >
            <Typography
              component="div"
              sx={{ ...eyebrowSx, color: YELLOW, fontSize: '9px', lineHeight: 1.8, mb: 0 }}
            >
              Aurous Academy · Bhopal
            </Typography>
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: '24px', md: '27px' },
                lineHeight: 1.45,
                fontWeight: 700,
                letterSpacing: '-0.5px',
                mt: { xs: '16px', md: '35px' },
                mb: { xs: '16px', md: '23px' },
                maxWidth: { xs: '350px', md: 'none' },
              }}
            >
              Keep learning.<br />Keep asking.<br />Keep going.
            </Typography>
            <Box
              sx={{
                display: { xs: 'none', md: 'block' },
                width: '44px',
                height: '4px',
                background: YELLOW,
                my: '28px',
              }}
            />
            <Typography
              component="p"
              sx={{
                display: { xs: 'none', md: 'block' },
                fontSize: '12px',
                color: '#d2e2d8',
                lineHeight: 1.9,
                m: 0,
              }}
            >
              Preparation grows through everyday effort, clear understanding and the willingness to try again.
            </Typography>
          </Box>

          {/* Letter */}
          <Box sx={{ padding: { xs: '26px 24px', md: '38px 42px' } }}>
            <Typography
              component="p"
              sx={{
                color: GREEN,
                fontWeight: 700,
                fontSize: { xs: '15px', md: '16px' },
                lineHeight: 1.95,
                mb: '24px',
              }}
            >
              Dear students and parents,
            </Typography>

            {letterParagraphs.map((text, i) => (
              <Typography
                key={i}
                component="p"
                sx={{
                  fontSize: '14px',
                  lineHeight: { xs: 1.85, md: 1.95 },
                  mb: '19px',
                  color: '#506159',
                }}
              >
                {text}
              </Typography>
            ))}

            <Box
              sx={{
                borderTop: '1px solid #e2e8e1',
                mt: '28px',
                pt: '22px',
                color: GREEN,
                fontSize: '13px',
                lineHeight: 1.8,
              }}
            >
              Warm regards,
              <Box component="strong" sx={{ display: 'block', fontSize: '15px', mt: '4px', fontWeight: 700 }}>
                The Directors
              </Box>
              <Box component="small" sx={{ fontSize: '12px', color: '#627268' }}>
                Aurous Academy
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OurTeamSection1;