import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const AboutUs = () => {
  return (
    <Box
      component="section"
      sx={{
        padding: { xs: '2rem 2rem', sm: '4rem 4rem', md: '4rem 8rem' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        bgcolor: '#020016',
      }}
      id="about_us"
    >
      <Box
        sx={{
          textAlign: 'center',
          marginBottom: '2rem',
        }}
      >
        <Typography variant="h6" sx={{ color: '#D8D8D8', fontWeight: 300, marginBottom: '1rem', fontSize: { xs: '1rem', sm: '1.125rem', md: '1rem' } }}>
          About Us
        </Typography>
        <Typography
          variant="h4"
          sx={{
            color: '#D8D8D8',
            fontWeight: 500,
            textAlign: 'center',
            fontSize: { xs: '2rem', sm: '2rem', md: '3rem' },
          }}
        >
          Connecting Minds, <Box component="span" sx={{
            background: '-webkit-linear-gradient(0deg, #35A1D2 31.54%, #0E57FF 63.08%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Advancing </Box>
           Machine Learning
        </Typography>
      </Box>

      <Grid container sx={{ flexDirection: { xs: 'column', md: 'row' }, width: '80%', marginTop: '2rem', alignItems: { xs: 'center', md: 'flex-start' } }}>
        <Grid item xs={12} md={6}>
          <Box >
            <Box sx={{ display: 'flex', alignItems: 'center', paddingBottom: '2rem' }}>
              <Box component="img" src="/graph.png" sx={{ width: { xs: '3rem', md: '5.5rem' }, height: { xs: '3rem', md: '3.5rem' }, paddingRight: { xs: '1.5rem', md: '3rem' }, paddingTop: '0.5rem',marginTop:{xs:'2.5rem',md:'0'} }} />
              <Box>
                <Typography variant="h5" sx={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' ,color:'white'}}>
                  Innovate
                </Typography>
                <Typography sx={{color:'white'}}>Pioneer the future of machine learning with groundbreaking research.</Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', paddingBottom: '2rem' }}>
              <Box component="img" src="/handshake.png" sx={{ width: { xs: '3rem', md: '5.5rem' }, height: { xs: '3rem', md: '3.5rem' }, paddingRight: { xs: '1.5rem', md: '3rem' }, paddingTop: '0.5rem', marginTop:{xs:'2.5rem',md:'0'}  }} />
              <Box>
                <Typography variant="h5" sx={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem',color:'white' }}>
                  Empower
                </Typography>
                <Typography  sx={{color:'white'}}>Democratize knowledge by making machine learning accessible.</Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', paddingBottom: '2rem' }}>
              <Box component="img" src="/rocket.png" sx={{ width: { xs: '3rem', md: '5.5rem' }, height: { xs: '3rem', md: '3.5rem' }, paddingRight: { xs: '1.5rem', md: '3rem' }, paddingTop: '0.5rem', marginTop:{xs:'2.5rem',md:'0'} }} />
              <Box>
                <Typography variant="h5" sx={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' ,color:'white'}}>
                  Transform
                </Typography>
                <Typography  sx={{color:'white'}}>Drive impact with machine learning solutions that reshape industries.</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
          <Box sx={{ textAlign: 'center' }}>
            <Box component="img" src="/ai.gif" sx={{ borderRadius: '16px', width: '100%', paddingLeft: '1rem', height:'21.83rem'}} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
