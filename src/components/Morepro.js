import React from 'react'
import { Box, Typography, useMediaQuery, createTheme, ThemeProvider } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Chip } from '@mui/material';

const Project = [
    {
      id: 1,
      title: 'LangChat',
      desc: 'LangChat is RAG based QnA system over langchain documentation. By using this application, AI developers can chat with langchain docs to make the AI apps efficiently. and..',
      img: '/Rectangle 3.png',
    },
    {
      id: 2,
      title: 'LangChat',
      desc: 'LangChat is RAG based QnA system over langchain documentation. By using this application, AI developers can chat with langchain docs to make the AI apps efficiently. and..',
      img: '/Rectangle 3.png',
    },
    {
      id: 3,
      title: 'LangChat',
      desc: 'LangChat is RAG based QnA system over langchain documentation. By using this application, AI developers can chat with langchain docs to make the AI apps efficiently. and..',
      img: '/Rectangle 3.png',
    },
];

const theme = createTheme();
const Morepro = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
        sx={{
          bgcolor: "#020016",
          display: "flex",
          flexDirection: "column",
          padding: "1.25rem",
        }}
      >
        <Box
          sx={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700,
            fontSize: { xs: "2rem", md: "2.75rem" },
            lineHeight: "135%",
            color: "#FFFFFF",
            marginBottom: "1.25rem",
            textAlign: "center",
            display: "inline-flex",
            width: { xs: "100%", md: "20%" },
            justifyContent: "center",
            marginLeft: { xs: "0", md: "40%" },
            marginTop: { xs: "3rem", md: "0.5rem" },
            marginBottom: { xs: "1.25rem", md: "5.25rem" },
          }}
        >
          More Projects
        </Box>
        {Project.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            flexDirection : isMobile ? 'column-reverse' : 'row',
            gap: '0.625rem',
            alignItems: 'center',
            marginLeft: isMobile ? '0' : '10%',
            marginRight: isMobile ? '0' : '6%',
            marginTop: isMobile ? '0.5rem' : '1rem',
          }}
        >
          <Box
            display={'flex'}
            flexDirection={'column'}
            width={isMobile ? '95%' : '50%'}
            gap={'1.5rem'}
            height={'100%'}
            justifyContent={'space-between'}
            marginTop={isMobile ? '1.25rem' : '0'}
          >
            <Box display={'flex'} flexDirection={'column'} gap={'0.5rem'} >
              <Box
                display={'flex'}
                flexDirection={'row'}
                gap={'0.0625rem'}
                alignItems={'center'}
                sx={{ marginTop: isMobile ? '-1.25rem' : '-5.125rem' }}
              >
                <Typography
                  sx={{
                    fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: isMobile ? '1.5rem' : '2.25rem',
                    color: '#FFFFFF',
                    textAlign: 'left',
                  }}
                >
                  {item.title}
                </Typography>
                <a
                  href="https://www.instagram.com/mlcoe_akgec?igsh=bW4ybnkweWthcjl4"
                  style={{ textDecoration: 'none' }}
                >
                  <ArrowOutwardIcon sx={{ color: '#FFFFFF' }} />
                </a>
              </Box>
              <Box display={'flex'} flexDirection={'row'} gap={'0.0625rem'}>
                <Chip
                  label="Machine Learning"
                  variant="outlined"
                  sx={{
                    color: '#FFFFFF',
                    borderRadius: '0.9375rem',
                    marginBottom: isMobile ? '0.625rem' : '5.375rem',
                  }}
                />
                <Chip
                  label="LLM"
                  variant="outlined"
                  sx={{
                    color: '#FFFFFF',
                    borderRadius: '0.9375rem',
                    marginBottom: isMobile ? '0.625rem' : '5.375rem',
                  }}
                />
                <Chip
                  label="RAG"
                  variant="outlined"
                  sx={{
                    color: '#FFFFFF',
                    borderRadius: '0.9375rem',
                    marginBottom: isMobile ? '0.625rem' : '5.375rem',
                  }}
                />
              </Box>
            </Box>
            <Typography
              sx={{
                fontFamily: 'poppins, sans-serif',
                color: '#FFFFFF',
                width: isMobile ? '100%' : '90%',
              }}
            >
              {item.desc}
            </Typography>
          </Box>
          <Box display={'flex'} flexDirection={'row'} width={isMobile ? '100%' : '50%'} marginTop={isMobile ? '1.875rem' : '0'}>
            <img
              src={item.img}
              alt="Logo"
              style={{
                width: isMobile ? '100%' : '90%',
                height: isMobile ? 'auto' : '70%',
                objectFit: 'contain',
                marginBottom: isMobile ? '1.25rem' : '2.875rem',
              }}
            />
          </Box>
           <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
              position: 'absolute',
              marginTop: '19.75rem',
              width: { xs: '89%', md: '78%' }, 
              height: '0.0375rem',
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
            }}
          /> 

        </Box>
      ))}
    </Box>
  );
};

export default Morepro
