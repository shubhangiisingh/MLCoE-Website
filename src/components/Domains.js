import React from 'react';
import { Box, Typography } from '@mui/material';

const OurDomains = () => {
  return (
    <Box sx={{ py: '2.5rem', textAlign: 'center', bgcolor: '#020016' }}>
      <Typography
        variant="h4"
        sx={{
          color: '#D8D8D8',
          fontWeight: 300,
          mb: '0.625rem',
          fontSize: { xs: '1rem', sm: '1.125rem', md: '1rem' },
        }}
      >
        OUR DOMAINS
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
          fontWeight: 500,
          color: '#D8D8D8',
          span: {
            background: 'linear-gradient(0deg, #35A1D2 31.54%, #0E57FF 63.08%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          },
        }}
      >
        Beyond Limitations: <span>Technology</span> that<br /> Breaks Barriers
      </Typography>
      <Box
        sx={{
          width: '90%',
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
          mt: '1.25rem',
          px: '1.25rem',
          ml: { xs: '1.2rem', md: '5.125rem' },
          color: 'white',
        }}
      >
        <Box
          sx={{
            height: '12rem',
            width: '15rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            p: '1.875rem',
            background: 'linear-gradient(319.73deg, rgba(255, 255, 255, 0.1) 0%, rgba(64, 64, 64, 0.1) 96.71%)',
            border: '0.0625rem solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(0.75rem)',
            borderRadius: '1.5rem',
          }}
        >
          <Box
            component="img"
            src="/ML-Icon.png"
            alt="ML Icon"
            sx={{ width: '3rem', height: '3rem', mb: '0.625rem' }}
          />
          <Typography variant="h6" sx={{ mb: '0.3125rem', fontWeight: 500, color: 'white' }}>
            Machine Learning
          </Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            Transforming data into intelligent insights for a smarter tomorrow.
          </Typography>
        </Box>

        <Box
          sx={{
            height: '12rem',
            width: '15rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            p: '1.875rem',
            background: 'linear-gradient(319.73deg, rgba(255, 255, 255, 0.1) 0%, rgba(64, 64, 64, 0.1) 96.71%)',
            border: '0.0625rem solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(0.75rem)',
            borderRadius: '1.5rem',
          }}
        >
          <Box
            component="img"
            src="/WebD-Icon.png"
            alt="WebD Icon"
            sx={{ width: '3rem', height: '3rem', mb: '0.625rem' }}
          />
          <Typography variant="h6" sx={{ mb: '0.3125rem', fontWeight: 500, color: 'white' }}>
            Web Development
          </Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            Crafting seamless and dynamic web experiences that engage and inspire.
          </Typography>
        </Box>

        <Box
          sx={{
            height: '12rem',
            width: '15rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            p: '1.875rem',
            background: 'linear-gradient(319.73deg, rgba(255, 255, 255, 0.1) 0%, rgba(64, 64, 64, 0.1) 96.71%)',
            border: '0.0625rem solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(0.75rem)',
            borderRadius: '1.5rem',
          }}
        >
          <Box
            component="img"
            src="/UIUX-Icon.png"
            alt="UI/UX Icon"
            sx={{ width: '3rem', height: '3rem', mb: '0.625rem' }}
          />
          <Typography variant="h6" sx={{ mb: '0.3125rem', fontWeight: 500, color: 'white' }}>
            UI/UX Designing
          </Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            Designing captivating interfaces that delight users at every touchpoint.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default OurDomains;


