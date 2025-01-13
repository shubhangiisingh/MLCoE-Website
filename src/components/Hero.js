import React from 'react';
import { Box, Typography } from '@mui/material';

const Hero = () => {
    return (
        <Box
            component="section"
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                width: '100%',
                mt: 7.5,
                overflowX: 'hidden',
                textAlign: 'center',
                paddingTop: { xs: '0.5rem', sm: '3rem' },
                bgcolor: '#020016',

            }}
            id="home"
        >
            <Box
                sx={{
                    marginTop: { xs: '3rem', sm: '2rem' , md: '4rem' },
                    textAlign: 'center',
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: { xs: '0.9250rem', sm: '1.25rem' },
                        fontWeight: 700,
                        lineHeight: { xs: '1.375rem', sm: '1.25rem' },
                        background: 'linear-gradient(99.24deg, #699BF7 9.77%, #698BF6 25.68%, #663EEF 61%, #6633EE 81.73%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        textFillColor: 'transparent',
                        border: '1px solid #000000',
                        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    }}
                >
                    INNOVATE EMPOWER TRANSFORM.
                </Typography>

                <Typography
                    sx={{
                        fontSize: { xs: '2.25rem', sm: '4rem' },
                        fontWeight: 700,
                        lineHeight: { xs: '3.75rem', sm: '5.8rem' },
                        marginBottom: { xs: '2rem', sm: '3rem' }, // Responsive margin
                        color: '#FFFFFF',
                        
                    }}
                >
                    Empowering Innovation through <br /> Machine Learning
                </Typography>
            </Box>

            <Box
                sx={{
                    width: '100%',
                    height: { xs: '15rem', sm: '18rem', md: '20rem' }, // Responsive height for the image
                    backgroundImage: 'url(/xxa.png)',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}
            ></Box>
        </Box>
    );
};

export default Hero;
