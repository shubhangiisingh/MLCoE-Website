import React from 'react';
import { Box, Typography } from '@mui/material';

const EventCard2 = () => {
  return (
    <Box sx={{ backgroundColor: '#060012', padding:{ xs: '1.25rem', md: '3.125rem'} , width: '100%', marginLeft: { xs: '0', md: '9.6875rem' }, }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, 
          justifyContent: 'space-between',
          alignItems: 'center',
          width: { xs: '100%', md: '80%' }, 
          marginTop: { xs: '1.25rem', md: '-3.125rem'},
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            width: { xs: '100%', md: '50%' },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              height: '2.9375rem',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'DM Sans',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize:{ xs: '1rem', md: '2.25rem'} ,
                lineHeight: '135%',
                letterSpacing: '-0.01em',
                color: '#FFFFFF',
              }}
            >
              Beyond the Binary
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0.625rem 0.875rem',
                gap: '0.625rem',
                width: { xs: '30%', md: '22%' }, 
                height: '2.625rem',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                borderRadius: '0.5rem',
                marginRight: { xs: '0', md: '2.3125rem' }, 
                marginLeft: { xs: '0', md: '0' },
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'DM Sans',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: { xs: '0.625rem', md: '1rem' }, 
                  lineHeight: '135%',
                  textAlign: 'right',
                  letterSpacing: '-0.02em',
                  color: '#FFFFFF',
                }}
              >
                27-28 Jul, 2024
              </Typography>
            </Box>
          </Box>

          <Typography
            sx={{
              fontFamily: 'DM Sans',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: { xs: '0.625rem', md: '1.25rem' }, 
              lineHeight: '190%',
              letterSpacing: '-0.01em',
              color: '#FFFFFF',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              marginTop: { xs: '1.25rem', md: '2.5rem' }, 
            }}
          >
            Successfully concluded, bringing together a stellar team of talented minds. <br />
            We're thrilled to welcome these new recruits and excited to see the future of AI they'll help us shape. <br />
            The MLCOE has successfully concluded, bringing together a stellar team of talented minds.
          </Typography>
        </Box>

        <Box sx={{ width: { xs: '100%', md: '50%' } }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              marginTop: { xs: '1.25rem', md: '0' },
              marginLeft: { xs: '0', md: '1.25%' },
            }}
          >
            <img
              src="Rectangle 9.png"
              alt="Event Icon"
              style={{
                width: '100%',
                maxWidth: '31.25rem',
                height: '20rem',
                objectFit: 'cover',
                borderRadius: '1rem',
              }}
            />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          width: { xs: '100%', md: '76.5%' }, 
          padding: '1%',
          marginLeft: { xs: '0', md: '0.6875rem' }, 
          borderBottom: '1px solid rgba(100, 97, 140, 0.8)',
        }}
      />
  <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, 
          justifyContent: 'space-between',
          alignItems: 'center',
          width: { xs: '100%', md: '80%' }, 
          marginTop: '3.125rem',
          marginLeft: { xs: '0', md: '0.6875rem' },
        }}
      >
         <Box sx={{ width: { xs: '100%', md: '50%' } }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              marginTop: { xs: '1.25rem', md: '0' },
              marginLeft: { xs: '0', md: '0' },
            }}
          >
            <img
              src="image 9.png"
              alt="Event Icon"
              style={{
                width: '100%',
                maxWidth: '31.25rem',
                height: '20rem',
                objectFit: 'cover',
                borderRadius: '1rem',
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            width: { xs: '100%', md: '50%' },
            marginTop: { xs: '1.25rem', md: '0' },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              height: '2.9375rem',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'DM Sans',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize:{ xs: '1rem', md: '2.25rem'} ,
                lineHeight: '135%',
                letterSpacing: '-0.01em',
                color: '#FFFFFF',
              }}
            >
              Beyond the Binary
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0.625rem 0.875rem',
                gap: '0.625rem',
                width: { xs: '30%', md: '22%' }, 
                height: '2.625rem',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                borderRadius: '0.5rem',
                marginRight: { xs: '0', md: '2.375rem' }, 
                marginLeft: { xs: '0', md: '0' },
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'DM Sans',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: { xs: '0.625rem', md: '1rem' }, 
                  lineHeight: '135%',
                  textAlign: 'right',
                  letterSpacing: '-0.02em',
                  color: '#FFFFFF',
                }}
              >
                27-28 Jul, 2024
              </Typography>
            </Box>
          </Box>

          <Typography
            sx={{
              fontFamily: 'DM Sans',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: { xs: '0.625rem', md: '1.25rem' }, 
              lineHeight: '190%',
              letterSpacing: '-0.01em',
              color: '#FFFFFF',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              marginTop: { xs: '1.25rem', md: '2.5rem' }, 
            }}
          >
            Successfully concluded, bringing together a stellar team of talented minds. <br />
            We're thrilled to welcome these new recruits and excited to see the future of AI they'll help us shape. <br />
            The MLCOE has successfully concluded, bringing together a stellar team of talented minds.
          </Typography>
        </Box>

       
      </Box>

      <Box
        sx={{
          display: 'flex',
          width: { xs: '100%', md: '76.5%' }, 
          padding: '1%',
          marginLeft: { xs: '0', md: '0.6875rem' }, 
          borderBottom: '1px solid rgba(100, 97, 140, 0.8)',
        }}
      />
      </Box>
  )
};

export default EventCard2;
