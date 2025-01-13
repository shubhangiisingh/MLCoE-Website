import React from 'react';
import { Box, Typography, } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        padding: { xs: '20px 0', md: '50px 0' },
        backgroundColor: '#020016',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        mt={10}
        sx={{
          width: '100%',
          height: '1px',
          background: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #FFFFFF 52%, rgba(0, 0, 0, 0) 100%)',
          opacity: 0.8,
          mb: 2,
        }}
      />
      <Box
        sx={{
          background: `url('/logo2.png') no-repeat center center / cover`,
          width: { xs: '180px', md: '265px' },
          height: { xs: '60px', md: '80px' },
          mb: 2,
        }}
      />
      <Box sx={{ textAlign: 'center', mb: 2 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            fontSize: { xs: '17px', md: '25px' },
            lineHeight: '28px',
            color: '#FFFFFF',
            mb: 1,
          }}
        >
          Where Learners Shape Tomorrow&apos;s Tech
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 400,
            fontSize: { xs: '14px', md: '18px' },
            lineHeight: '28px',
            textTransform: 'uppercase',
            color: 'rgba(255, 255, 255, 0.5)',
          }}
        >
          INNOVATE EMPOWER TRANSFORM
        </Typography>
      </Box>
      <Box sx={{ width: { xs: '90%', md: '80%' }, maxWidth: '80%', m: 1 }}>
        <Box display={'flex'} flexDirection={'row'} gap={{ xs: 8, md: 15 }} justifyContent={'space-between'} width={'100%'} px={{ xs: 0, md: 0 }}>
          <Box display={'flex'} flexDirection={'column'} gap={1} justifyContent={'start'} >
            <Typography color='white' sx={{
              fontSize: { xs: '18px', md: '23px' },
            }} >Quick Links</Typography>
            <Typography color='white' sx={{ fontSize: { xs: '12px', md: '18px' }, }}>Events</Typography>
            <Typography color='white' sx={{ fontSize: { xs: '12px', md: '18px' }, }}>Projects</Typography>
            <Typography color='white' sx={{ fontSize: { xs: '12px', md: '18px' }, }}>Our Team</Typography>
          </Box>
          <Box display={"flex"} flexDirection={{ xs: 'column', md: 'row' }} gap={{ xs: 2, md: 45 }} >

            < Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                justifyContent: { xs: 'flex-end', md: 'center' },
                alignItems: { xs: 'flex-end', md: 'center' },
                width: '100%',
              }}
            >
              <Typography
                color="white"
                sx={{
                  fontSize: { xs: '18px', md: '23px' },
                  textAlign: { xs: 'left', md: 'center' },
                }}
              >
                Write Us
              </Typography>



              <Typography color='white' sx={{ fontSize: { xs: '12px', md: '18px' }, }}>mlcoe.akgec@gmail.com</Typography>

            </Box>
            <Box display={'flex'} flexDirection={'column'} width={'100%'} >
              <Typography
                color="white"
                sx={{
                  fontSize: { xs: '18px', md: '23px' },
                  textAlign: { xs: 'right', md: 'center' },
                }}
              >
                Contact Us
              </Typography>
              <Typography
                color="white"
                sx={{
                  fontSize: { xs: '12px', md: '18px' },
                  textAlign: 'right',
                }}
              >
                +91-9811021619
              </Typography>
              <Typography
                color="white"
                sx={{
                  fontSize: { xs: '12px', md: '18px' },
                  textAlign: 'right',
                }}
              >
                +91-9711605607
              </Typography>
            </Box>

          </Box>

        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', mb: 2, gap: 2, py: 2 }}>
          <a href="https://www.instagram.com/mlcoe_akgec?igsh=bW4ybnkweWthcjl4" aria-label="instagram">
            <img src="/Vector.png" alt="Instagram" style={{ width: 20, height: 20 }} />
          </a>
          <a href="https://www.linkedin.com/company/mlcoe-akgec/" aria-label="linkedin">
            <img src="/bi_linkedin.png" alt="LinkedIn" style={{ width: 20, height: 20 }} />
          </a>
          <a href="https://medium.com" aria-label="medium">
            <img src="/medium (2).png" alt="Medium" style={{ width: 20, height: 20 }} />
          </a>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          <Box
            sx={{
              width: '100%',
              height: '0.6px',
              backgroundColor: '#FFFFFF',
              opacity: 0.3,
              mb: 1
            }}
          />

          <Typography
            variant="body2"
            sx={{
              fontSize: '10px',
              lineHeight: '16px',
              color: '#FFFFFF',
              textAlign: 'center'
            }}
          >
            © Machine Learning Centre of Excellence
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

