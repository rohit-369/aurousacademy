'use client';

import Link from 'next/link';
import { Box } from '@mui/material';
import images from '@/lib/images';

const MinimalHeader = () => {
  return (
    <Box
      component="header"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: { xs: '78px', md: '90px' },
        maxWidth: '1320px',
        mx: 'auto',
        px: { xs: '20px', md: '38px' },
        borderBottom: '1px solid #dee5dc',
        background: '#ffffff',
      }}
    >
      <Link href="/" aria-label="Aurous Academy home">
        <Box
          component="img"
          src={images.logo}
          alt="Aurous Academy"
          sx={{
            width: { xs: '155px', md: '184px' },
            height: 'auto',
            objectFit: 'contain',
            display: 'block',
          }}
        />
      </Link>

      <Link href="/" style={{ textDecoration: 'none' }}>
        <Box
          component="span"
          sx={{
            fontSize: { xs: '10px', md: '12px' },
            fontWeight: 700,
            color: '#00382b',
            '&:hover': { color: '#6d7b16' },
          }}
        >
          ← Back to Home
        </Box>
      </Link>
    </Box>
  );
};

export default MinimalHeader;
