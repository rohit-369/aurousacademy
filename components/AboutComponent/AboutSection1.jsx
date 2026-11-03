import { Box, Typography } from '@mui/material';
import React from 'react';

const GREEN = '#00382b';
const YELLOW = '#ffc800';
const INK = '#17251f';
const MUTED = '#637068';

const aboutParagraphs = [
  'Aurous Academy is a coaching institute in Bhopal for IIT-JEE, NEET and Olympiad preparation. We work with students at different stages of their academic journey—from building a foundation in Classes 7 to 10 to preparing for entrance exams in Classes 11, 12 and the dropper year.',
  'We believe good preparation begins with understanding. In class, we explain concepts, work through examples and help students connect what they learn with the questions they solve. In Physics, Chemistry, Mathematics and Biology, the aim is to build a base that students can return to when a problem becomes more demanding.',
  'Learning does not always happen at the same pace for everyone. A student may understand a chapter in class and still struggle to apply it independently. Doubt-solving sessions and personal guidance give them a chance to revisit a concept, ask questions and work through the steps they find difficult.',
  'Regular practice and tests are part of this process. Reviewing an attempt matters as much as the score: which ideas were clear, where mistakes happened and what needs more practice. This helps students make their next study session more focused and useful.',
  'We also understand that schoolwork, board exams and entrance-exam preparation can be difficult to balance. Our school-integrated programs bring these priorities into a shared study plan. For younger students, our Foundation programs focus on core concepts and problem-solving, with an introduction to Olympiad preparation.',
  'Our role is to make that journey clearer through teaching, feedback and support. We want students to feel comfortable asking for help, take responsibility for their preparation and build confidence through the progress they make each day.',
];

const eyebrowSx = {
  fontSize: '11px',
  letterSpacing: '2px',
  textTransform: 'uppercase',
  fontWeight: 700,
  color: GREEN,
  mb: '20px',
};

const beliefTitleSx = {
  fontSize: { xs: '24px', md: '27px' },
  fontWeight: 800,
  lineHeight: 1.25,
  letterSpacing: '-0.7px',
  color: INK,
  mb: '20px',
};

const beliefParagraphSx = {
  fontSize: '14px',
  lineHeight: 1.9,
  color: MUTED,
  m: 0,
};

const AboutSection1 = () => {
  return (
    <Box sx={{ background: '#f8fafc', minHeight: '100vh' }}>
      <Box
        sx={{
          maxWidth: '1100px',
          mx: 'auto',
          px: { xs: '20px', md: '38px' },
          pt: { xs: '25px', md: '48px' },
          pb: { xs: '30px', md: '55px' },
        }}
      >
        {/* About panel */}
        <Box
          sx={{
            background: '#ffffff',
            border: '1px solid #e0e7e2',
            borderRadius: { xs: '17px', md: '22px' },
            p: { xs: '27px 23px', md: '44px 48px' },
            mb: { xs: '18px', md: '24px' },
          }}
        >
          <Typography component="div" sx={eyebrowSx}>
            Aurous Academy · Bhopal
          </Typography>

          <Typography
            component="h1"
            sx={{
              fontSize: { xs: '32px', md: '40px' },
              fontWeight: 800,
              lineHeight: 1.21,
              letterSpacing: '-1.8px',
              color: GREEN,
              mb: '17px',
            }}
          >
            About Us
          </Typography>

          <Box
            sx={{
              width: '62px',
              height: '5px',
              background: YELLOW,
              borderRadius: '5px',
              mb: '28px',
            }}
          />

          {aboutParagraphs.map((text, i) => (
            <Typography
              key={i}
              component="p"
              sx={{
                fontSize: { xs: '14px', md: '15px' },
                lineHeight: { xs: 1.85, md: 1.95 },
                color: MUTED,
                maxWidth: '900px',
                mb: i === aboutParagraphs.length - 1 ? 0 : '19px',
              }}
            >
              {text}
            </Typography>
          ))}
        </Box>

        {/* Mission & Vision */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: '18px', md: '24px' },
          }}
        >
          <Box
            sx={{
              background: '#edf4ef',
              border: '1px solid #dce7db',
              borderRadius: { xs: '17px', md: '20px' },
              p: { xs: '25px', md: '32px' },
            }}
          >
            <Typography component="div" sx={eyebrowSx}>
              Our Purpose
            </Typography>
            <Typography component="h2" sx={beliefTitleSx}>
              Our Mission
            </Typography>
            <Typography component="p" sx={beliefParagraphSx}>
              To make learning clear and preparation manageable through thoughtful teaching, regular practice and honest feedback. We aim to help students ask questions, work through difficulties and build steady study habits. We want each student to understand what to work on next and feel comfortable seeking help along the way. Our focus is on consistent effort, stronger concepts and learning from mistakes.
            </Typography>
          </Box>

          <Box
            sx={{
              background: '#fff9e6',
              border: '1px solid #f0e5bb',
              borderRadius: { xs: '17px', md: '20px' },
              p: { xs: '25px', md: '32px' },
            }}
          >
            <Typography component="div" sx={eyebrowSx}>
              What We Work Towards
            </Typography>
            <Typography component="h2" sx={beliefTitleSx}>
              Our Vision
            </Typography>
            <Typography component="p" sx={beliefParagraphSx}>
              To help students become confident, independent learners who understand what they study and can apply it to new problems. We want them to carry that curiosity and confidence beyond the classroom. We hope to see young people who think carefully, make informed choices and keep learning as their goals evolve. For us, education should build both academic readiness and the confidence to take the next step.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutSection1;



