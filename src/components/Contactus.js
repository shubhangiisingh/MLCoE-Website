import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const CustomForm = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: { xs: '3rem', md: '2.5rem' },
        width: '100%',
        background: '#020016',
      }}
    >
      <Typography
        sx={{
          fontFamily: 'DM Sans',
          fontWeight: 500,
          fontSize: { xs: '1.75rem', md: '1.875rem' },
          lineHeight: { xs: '120%', md: 'normal' },
          textAlign: 'center',
          color: '#FFFFFF',
          width: { xs: '20.5rem', md: 'auto' },
          mt: { xs: '2.5rem', md: '2.5rem' },
        }}
      >
        Contact Us
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: { xs: '1.667rem', md: '3.75rem' },
          width: { xs: '80%', md: '60%' },
          marginBottom: { xs: '0rem', md: '3.75rem' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: '0.875rem', md: '1rem' },
            flex: 1,
            width: { xs: '95%', md: '20%' },
          }}
        >
          <TextField
            variant="outlined"
            placeholder="First Name"
            fullWidth
            sx={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '0.3125rem',
              justifyContent: 'center',
              input: { color: 'rgba(255, 255, 255, 0.6)' },
              height: { xs: '2.05rem', md: 'auto' },
            }}
          />
          <TextField
            variant="outlined"
            placeholder="Email"
            fullWidth
            sx={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '0.3125rem',
              justifyContent: 'center',
              input: { color: 'rgba(255, 255, 255, 0.6)' },
              height: { xs: '2.05rem', md: 'auto' },
            }}
          />
          <TextField
            variant="outlined"
            placeholder="Message"
            multiline
            rows={4}
            fullWidth
            sx={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '0.3125rem',
              '& .MuiInputBase-input': {
                color: 'rgba(255, 255, 255, 0.6)',
              },
              height: { xs: '3.788rem', md: 'auto' },
            }}
          />
          <Button
            fullWidth
            sx={{
              background: 'linear-gradient(90.55deg, #1053DC 49.64%, #319AD6 100%)',
              borderRadius: '0.3125rem',
              fontSize: { xs: '0.75rem', md: '1.125rem' },
              fontWeight: 500,
              color: '#FFFFFF',
              height: { xs: '2.327rem', md: 'auto' },
              '&:hover': {
                background: 'linear-gradient(90.55deg, #319AD6 49.64%, #1053DC 100%)',
              },
            }}
          >
            Submit
          </Button>
        </Box>

        <Box
          sx={{
            flex: 1,
            maxWidth: { xs: '20.5rem', md: '21.875rem' },
            height: { xs: '12.5rem', md: '21.875rem' },
            background: '#D9D9D9',
            borderRadius: '1rem',
            alignSelf: { xs: 'stretch', md: 'center' },
          }}
        />
      </Box>
    </Box>
  );
};

export default CustomForm;

