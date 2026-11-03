'use client';

import { Box, Typography } from '@mui/material';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';

const GREEN = '#00382b';
const YELLOW = '#ffc800';
const INK = '#17251f';
const MUTED = '#647169';

const campuses = [
  { id: 'campus-1', title: 'Campus 1', location: 'Bhopal, Madhya Pradesh', query: 'Aurous+Academy+Campus+1+Bhopal' },
  { id: 'campus-2', title: 'Campus 2', location: 'Bhopal, Madhya Pradesh', query: 'Aurous+Academy+Campus+2+Bhopal' },
  { id: 'campus-3', title: 'Campus 3', location: 'Bhopal, Madhya Pradesh', query: 'Aurous+Academy+Campus+3+Bhopal' },
  { id: 'campus-4', title: 'Lalghati Campus', location: 'Lalghati, Bhopal', query: 'Aurous+Academy+Lalghati+Campus+Bhopal' },
];

const placeholderGradients = [
  'linear-gradient(145deg, #eff7f1, #dcece2)',
  'linear-gradient(145deg, #faf6e8, #f0e7c9)',
  'linear-gradient(145deg, #f1f6f5, #dce9e8)',
  'linear-gradient(145deg, #edf4ef, #d3e5da)',
];

const ContactPageSection = () => {
  return (
    <Box sx={{ background: '#fbfcfb', minHeight: '100vh' }}>
      {/* Title bar */}
      <Box sx={{ background: '#eef6f1', position: 'relative', overflow: 'hidden' }}>
        <Box
          sx={{
            position: 'absolute',
            width: '210px',
            height: '210px',
            right: '9%',
            top: '-115px',
            border: '34px solid rgba(0, 56, 43, 0.03)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />
        <Box
          sx={{
            maxWidth: '1240px',
            mx: 'auto',
            px: { xs: '20px', md: '32px' },
            minHeight: { xs: '96px', md: '112px' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: '28px', md: '34px' },
              fontWeight: 700,
              letterSpacing: '-1.2px',
              color: INK,
              '&::before': {
                content: '""',
                display: 'block',
                width: '35px',
                height: '4px',
                borderRadius: '4px',
                background: YELLOW,
                mb: '10px',
              },
            }}
          >
            Contact Us
          </Typography>

          <Box sx={{ fontSize: '11px', color: '#7b857e', whiteSpace: 'nowrap' }}>
            <Box component="a" href="/" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
              Home
            </Box>
            <Box component="span" sx={{ mx: '10px' }}>
              /
            </Box>
            <Box component="b" sx={{ fontWeight: 600, color: GREEN }}>
              Contact Us
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={{ maxWidth: '1240px', mx: 'auto', px: { xs: '20px', md: '32px' } }}>
        {/* Campus nav */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: { xs: '8px', md: '32px' },
            flexWrap: 'wrap',
            background: '#ffffff',
            borderRadius: '10px',
            boxShadow: '0 4px 18px rgba(0, 56, 43, 0.03)',
            border: '1px solid #e1e7e3',
            px: { xs: '15px', md: '20px' },
            py: { xs: '13px', md: 0 },
            minHeight: { md: '49px' },
            fontSize: '11px',
            mt: { xs: '20px', md: '24px' },
            mb: '22px',
          }}
        >
          <Box component="strong" sx={{ color: GREEN, fontWeight: 700, fontSize: '11px', flexBasis: { xs: '100%', md: 'auto' }, mr: { md: 'auto' } }}>
            OUR CAMPUSES · BHOPAL
          </Box>
          {campuses.map((c) => (
            <Box
              key={c.id}
              component="a"
              href={`#${c.id}`}
              sx={{
                color: 'inherit',
                textDecoration: 'none',
                padding: { xs: '3px 6px', md: '5px 10px' },
                borderRadius: '5px',
                fontSize: { xs: '10px', md: '11px' },
                transition: 'background .2s',
                '&:hover': { background: '#edf6ef', textDecoration: 'none' },
              }}
            >
              {c.title}
            </Box>
          ))}
        </Box>

        {/* Contacts */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr 1fr', md: '1fr 1fr 1.15fr 1.35fr' },
            background: '#ffffff',
            borderRadius: { xs: '12px', md: '0' },
            py: { xs: 0, md: '15px 0 22px' },
            mb: { xs: '28px', md: '35px' },
            mt: { md: '7px' },
          }}
        >
          {/* For Admission Enquiry */}
          <Box
            sx={{
              textAlign: 'center',
              padding: { xs: '19px 9px', md: '7px 18px 13px' },
              borderRight: { md: '1px solid #e6e9e7' },
              borderBottom: { xs: '1px solid #e6e9e7' },
            }}
          >
            <Box sx={{ height: { xs: '43px', md: '55px' }, color: GREEN, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: { xs: '12px', md: '18px' } }}>
              <PhoneOutlinedIcon sx={{ width: { xs: '35px', md: '43px' }, height: { xs: '35px', md: '43px' } }} />
            </Box>
            <Typography component="h2" sx={{ fontSize: { xs: '11px', md: '15px' }, fontWeight: 500, color: INK, mb: '4px' }}>
              For Admission Enquiry
            </Typography>
            <Box component="a" href="tel:+919993936947" sx={{ color: GREEN, fontSize: { xs: '12px', md: '14px' }, fontWeight: 500, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
              +91 99939-36947
            </Box>
            <Typography sx={{ fontSize: { xs: '9px', md: '11px' }, color: '#77827b', mt: '6px' }}>
              08:00 AM – 08:00 PM
            </Typography>
          </Box>

          {/* For Enrolled Students */}
          <Box
            sx={{
              textAlign: 'center',
              padding: { xs: '19px 9px', md: '7px 18px 13px' },
              borderRight: { md: '1px solid #e6e9e7' },
              borderBottom: { xs: '1px solid #e6e9e7' },
            }}
          >
            <Box sx={{ height: { xs: '43px', md: '55px' }, color: GREEN, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: { xs: '12px', md: '18px' } }}>
              <HeadsetMicOutlinedIcon sx={{ width: { xs: '35px', md: '43px' }, height: { xs: '35px', md: '43px' } }} />
            </Box>
            <Typography component="h2" sx={{ fontSize: { xs: '11px', md: '15px' }, fontWeight: 500, color: INK, mb: '4px' }}>
              For Enrolled Students
            </Typography>
            <Box component="a" href="tel:+919993936947" sx={{ color: GREEN, fontSize: { xs: '12px', md: '14px' }, fontWeight: 500, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
              +91 99939-36947
            </Box>
            <Box component="a" href="mailto:support@aurousacademy.com" sx={{ display: 'block', mt: '3px', fontSize: { xs: '10px', md: '12px' }, color: GREEN, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
              Contact Support
            </Box>
          </Box>

          {/* Email */}
          <Box
            sx={{
              textAlign: 'center',
              padding: { xs: '19px 9px', md: '7px 18px 13px' },
              borderRight: { md: '1px solid #e6e9e7' },
              borderBottom: { xs: '1px solid #e6e9e7' },
            }}
          >
            <Box sx={{ height: { xs: '43px', md: '55px' }, color: GREEN, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: { xs: '12px', md: '18px' } }}>
              <EmailOutlinedIcon sx={{ width: { xs: '35px', md: '43px' }, height: { xs: '35px', md: '43px' } }} />
            </Box>
            <Typography component="h2" sx={{ fontSize: { xs: '11px', md: '15px' }, fontWeight: 500, color: INK, mb: '4px' }}>
              Email
            </Typography>
            <Box component="a" href="mailto:support@aurousacademy.com" sx={{ color: GREEN, fontSize: { xs: '9px', md: '12px' }, fontWeight: 500, textDecoration: 'none', overflowWrap: 'anywhere', '&:hover': { textDecoration: 'underline' } }}>
              support@aurousacademy.com
            </Box>
          </Box>

          {/* Address */}
          <Box sx={{ textAlign: 'center', padding: { xs: '19px 9px', md: '7px 18px 13px' } }}>
            <Box sx={{ height: { xs: '43px', md: '55px' }, color: GREEN, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: { xs: '12px', md: '18px' } }}>
              <LocationOnOutlinedIcon sx={{ width: { xs: '35px', md: '44px' }, height: { xs: '35px', md: '44px' } }} />
            </Box>
            <Typography component="h2" sx={{ fontSize: { xs: '11px', md: '15px' }, fontWeight: 500, color: INK, mb: '4px' }}>
              Address
            </Typography>
            <Box component="address" sx={{ fontStyle: 'normal', fontSize: { xs: '10px', md: '12px' }, color: GREEN, lineHeight: 1.75 }}>
              Plot No. R-4, Opposite Railway Track,
              <br />
              Zone-2, MP Nagar, Bhopal
              <br />
              Madhya Pradesh – 462011
            </Box>
          </Box>
        </Box>

        {/* Section heading */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: { xs: '10px', md: '18px' },
            textAlign: 'center',
            fontWeight: 700,
            fontSize: { xs: '12px', md: '17px' },
            letterSpacing: '0.3px',
            color: GREEN,
            mb: { xs: '23px', md: '29px' },
          }}
        >
          <Box sx={{ flex: 1, height: '4px', borderTop: '1px solid #dae5dd', borderBottom: '1px solid #e6ebe7' }} />
          <Box component="span" sx={{ whiteSpace: 'nowrap' }}>
            ADMISSION OFFICE &amp; CLASSROOM CAMPUSES
          </Box>
          <Box sx={{ flex: 1, height: '4px', borderTop: '1px solid #dae5dd', borderBottom: '1px solid #e6ebe7' }} />
        </Box>

        {/* Campuses */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' },
            gap: { xs: '17px 13px', md: '22px' },
            pb: { xs: '43px', md: '48px' },
          }}
        >
          {campuses.map((c, i) => (
            <Box
              key={c.id}
              id={c.id}
              sx={{
                textAlign: 'center',
                border: '1px solid #dce6df',
                borderRadius: { xs: '10px', md: '13px' },
                background: '#ffffff',
                overflow: 'hidden',
                pb: { xs: '18px', md: '23px' },
                boxShadow: '0 5px 17px rgba(0, 56, 43, 0.04)',
                transition: 'transform .2s, box-shadow .2s',
                scrollMarginTop: '25px',
                '&:hover': { transform: 'translateY(-5px)', boxShadow: '0 12px 27px rgba(0, 56, 43, 0.07)' },
              }}
            >
              <Box
                sx={{
                  height: { xs: '150px', md: '180px' },
                  position: 'relative',
                  borderBottom: '1px solid #e1ebe4',
                  background: placeholderGradients[i],
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '10px',
                  color: '#789d89',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: { xs: '9px', md: '13px' },
                    left: { xs: '9px', md: '13px' },
                    background: 'rgba(255, 255, 255, 0.85)',
                    border: '1px solid #fff',
                    borderRadius: '4px',
                    px: { xs: '5px', md: '8px' },
                    py: { xs: '3px', md: '4px' },
                    fontSize: { xs: '6px', md: '8px' },
                    letterSpacing: '1px',
                    fontWeight: 800,
                    color: GREEN,
                  }}
                >
                  AUROUS ACADEMY
                </Box>
                <ApartmentOutlinedIcon sx={{ width: { xs: '59px', md: '76px' }, height: { xs: '59px', md: '76px' }, strokeWidth: 1 }} />
                <Box component="span" sx={{ fontSize: { xs: '7px', md: '8px' }, letterSpacing: '1px', color: '#749582' }}>
                  CAMPUS PHOTOGRAPH
                </Box>
              </Box>

              <Typography
                component="h3"
                sx={{
                  mx: { xs: '11px', md: '17px' },
                  mb: { xs: '13px', md: '16px' },
                  pt: { xs: '14px', md: '17px' },
                  pb: { xs: '11px', md: '13px' },
                  borderBottom: '2px solid #ffc800',
                  fontSize: { xs: '13px', md: '16px' },
                  fontWeight: 800,
                  letterSpacing: '-0.3px',
                  color: INK,
                }}
              >
                {c.title}
              </Typography>

              <Box sx={{ fontSize: { xs: '9px', md: '10px' }, color: '#637269', lineHeight: 1.9, minHeight: { xs: '61px', md: '66px' }, mx: { xs: '7px', md: '12px' }, mb: { xs: '8px', md: '10px' } }}>
                <Box component="b" sx={{ fontWeight: 500, color: '#455b4e' }}>
                  {c.location}
                </Box>
                <br />
                Contact our team for the
                <br />
                campus address &amp; directions.
              </Box>

              <Box
                component="a"
                href={`https://www.google.com/maps/search/?api=1&query=${c.query}`}
                target="_blank"
                rel="noopener"
                aria-label={`Find ${c.title} on Google Maps`}
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: { xs: '5px', md: '8px' },
                  fontSize: { xs: '9px', md: '10px' },
                  fontWeight: 600,
                  background: GREEN,
                  color: '#fff',
                  borderRadius: '6px',
                  px: { xs: '10px', md: '16px' },
                  py: { xs: '7px', md: '8px' },
                  mt: '13px',
                  textDecoration: 'none',
                  '&:hover': { background: '#125b45' },
                }}
              >
                <LocationOnOutlinedIcon sx={{ width: '13px', height: '13px' }} />
                Map Location
              </Box>
            </Box>
          ))}
        </Box>

        {/* Notice */}
        <Typography sx={{ fontSize: '10px', color: '#859188', textAlign: 'center', mt: { md: '-24px' }, mb: { xs: '23px', md: '28px' } }}>
          Campus photographs and individual addresses will be updated after confirmation.
        </Typography>

        {/* Location strip */}
        <Box
          sx={{
            border: '1px solid #dde8df',
            borderLeft: '4px solid #ffc800',
            borderRadius: '10px',
            background: 'linear-gradient(100deg, #f0f7f2, #fafcf9)',
            padding: { xs: '19px', md: '23px 27px' },
            mb: '42px',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'flex-start', md: 'center' },
            justifyContent: 'space-between',
            gap: { xs: '14px', md: '30px' },
          }}
        >
          <Box>
            <Typography component="strong" sx={{ fontSize: { xs: '12px', md: '14px' }, color: GREEN, fontWeight: 700 }}>
              Planning a visit to Aurous Academy?
            </Typography>
            <Typography sx={{ fontSize: '11px', color: MUTED, mt: '4px' }}>
              Call +91 99939-36947 to confirm the campus and get directions before your visit.
            </Typography>
          </Box>
          <Box
            component="a"
            href="https://www.google.com/maps/search/?api=1&query=Aurous+Academy+MP+Nagar+Bhopal"
            target="_blank"
            rel="noopener"
            sx={{
              whiteSpace: 'nowrap',
              background: YELLOW,
              color: GREEN,
              fontSize: { xs: '10px', md: '11px' },
              fontWeight: 700,
              padding: { xs: '10px 14px', md: '10px 16px' },
              borderRadius: '6px',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            View MP Nagar Location ↗
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactPageSection;
