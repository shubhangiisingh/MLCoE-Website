
import { Box, Typography, Button } from '@mui/material';

function Langchat() {
  return (
    <Box display="flex" flexDirection="column" bgcolor="#020016" >
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        mt="3.125rem"
        borderRadius="1.25rem"
        alignItems="center"
        justifyContent="center"
        paddingTop={{ xs: "3.25rem", md: "3.125rem" }}
      >
        <Box
          ml={{ xs: "0", md: "0.70rem"}}
          mt={{ xs: "0.625rem", md: "3.125rem" }}
          sx={{
            width: { xs: "90%", md: "49.4375rem" },
            height: { xs: "auto", md: "37.5rem" },
          }}
        >
          <img
            src="/Group 108 (1).png"
            alt="Logo"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          ml={{ xs: "0", md: "0.9375rem" }}
          mt={{ xs: "1.25rem", md: "3.125rem" }}
          borderRadius="1.25rem"
          border="1px solid #FFFFFF"
          p="1.25rem"
          sx={{
            width: { xs: "90%", md: "24.25rem" },
            height: { xs: "auto", md: "33rem" },
            textAlign: { xs: "left", md: "left" },
          }}
        >
          <Typography
            variant="h4"
            color="#FFFFFF"
            fontWeight={700}
            fontSize={{ xs: "1.5rem", md: "1.875rem" }}
          >
            LangChat
          </Typography>
          <Typography
            variant="h5"
            color="#FFFFFF"
            mt="1.25rem"
            fontSize={{ xs: "1rem", md: "1.125rem" }}
          >
            LangChat is RAG based QnA system over langchain documentation. By using this application, AI developers can chat with langchain docs to make the AI apps efficiently. and..
          </Typography>
          <img
            src="/all1.png"
            alt="all"
            style={{ marginTop: "3.75rem", width: "100%", objectFit: "contain" }}
          />
          <Button
            variant="contained"
            sx={{
              marginTop: "2.5rem",
              background: "linear-gradient(90.05deg, #35A1D2 31.54%, #0E57FF 63.08%)",
              borderRadius: "0.5rem",
              color: "white",
              "&:hover": {
                background: "linear-gradient(90.05deg, #2c8dc4 31.54%, #0b4dc0 63.08%)",
              },
            }}
          >
            Visit Project
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Langchat;
