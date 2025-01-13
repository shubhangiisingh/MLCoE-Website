import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { ArrowForward as NextIcon } from "@mui/icons-material";

const Domain = () => {
  const domains = [
    { domain: "Data Science", description: "Extracting insights from data to solve problems." },
    { domain: "Generative AI", description: "Creating AI that can tackle various tasks." },
    { domain: "Deep Learning", description: "Artificial neural networks modeled after the human brain." },
    { domain: "Large Language Models", description: "AI models trained on massive amounts of text data for advanced language processing." },
    { domain: "Natural Language Processing", description: "Making computers understand human language." },
    { domain: "MLOps", description: "Automating the development and deployment of machine learning models." },
    { domain: "Computer Vision", description: "Equipping computers with the ability to 'see' and interpret visual data." },
    { domain: "Competitive Kaggle", description: "Online platform for data science competitions and collaboration." },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % domains.length);
  };

  return (
    <Box
      component="section"
      sx={{
        textAlign: "center",
        py: { xs: 4, sm: 6 },
        bgcolor: "#020016",
        color: "#D8D8D8",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: 300,
          fontSize: { xs: "1rem", sm: "1.25rem" },
          mb: { xs: 2, sm: 4 },
        }}
      >
        KNOW THE ML DOMAINS
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontSize: { xs: "1.5rem", sm: "2.25rem", md: "3rem" },
          fontWeight: 500,
          lineHeight: { xs: "2rem", sm: "2.375rem", md: "4.25rem" },
          span: {
            background: "linear-gradient(0deg, #35A1D2 31.54%, #0E57FF 63.08%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          },
        }}
      >
        The Future is Now:<span> Embrace </span>
        <br />
        Machine Learning
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 8,
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: { xs: "75%", sm: "30%" },
            backgroundImage: "url('/JJJJ.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            p: { xs: 2, sm: 3 },
            borderRadius: "10px",
            border: "0.3rem solid rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(40px)",
            zIndex: 1,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              mb: 2,
              fontWeight: 700,
              fontSize: { xs: "1.2rem", sm: "1.5rem" },
              color: "#FFFFFF",
            }}
          >
            {domains[currentIndex].domain}
          </Typography>
          <Typography sx={{ mb: 3, color: "#D8D8D8" }}>
            {domains[currentIndex].description}
          </Typography>
          <IconButton
            onClick={handleNextClick}
            sx={{
              position: "absolute",
              right: "10px",
              bottom: "10px",
              color: "white",
              bgcolor: "rgba(255, 255, 255, 0.2)",
              "&:hover": { bgcolor: "rgba(255, 255, 255, 0.4)" },
            }}
          >
            <NextIcon />
          </IconButton>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          mt: 4,
          mx: { xs: "7%", sm: "25%" },
          width: { xs: "90%", sm: "50%" },
        }}
      >
        {domains.map((domain, index) => (
          <Box
            key={index}
            onClick={() => setCurrentIndex(index)}
            sx={{
              px: { xs: 2, sm: 5 },
              py: 1,
              border: "0.6px solid #FFFFFF",
              borderRadius: "12px",
              backgroundColor:
                currentIndex === index ? "rgba(255, 255, 255, 0.1)" : "transparent",
              cursor: "pointer",
              opacity: currentIndex === index ? 1 : 0.6,
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.15)",
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: "12px",
                textAlign: "center",
                color: "#D8D8D8",
              }}
            >
              {domain.domain}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Domain;

