import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  Card,
  Typography,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const options = ["Faculty", "4th Year", "3rd Year", "2nd Year"];

const SplitButton = ({ selectedIndex, setSelectedIndex }) => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Navbar />
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
            marginTop: { xs: "30%", md: "5%" },
          }}
        >
          Our Team
        </Box>
        <Box sx={{ display: "inline-flex", marginLeft: "5.25rem", marginTop: "2.125rem" }}>
          <ButtonGroup
            variant="contained"
            ref={anchorRef}
            aria-label="Button group with a nested menu"
          >
            <Button sx={{ bgcolor: "#1C1C1C", color: "#FFF" }}>
              {options[selectedIndex]}
            </Button>
            <Button
              size="small"
              sx={{ bgcolor: "#1C1C1C", color: "#FFF" }}
              aria-controls={open ? "split-button-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="menu"
              onClick={handleToggle}
            >
              <ArrowDropDownIcon />
            </Button>
          </ButtonGroup>
          <Popper
            sx={{ zIndex: 1 }}
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList id="split-button-menu" autoFocusItem>
                      {options.map((option, index) => (
                        <MenuItem
                          key={option}
                          selected={index === selectedIndex}
                          onClick={(event) => handleMenuItemClick(event, index)}
                        >
                          {option}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Box>
      </Box>
    </>
  );
};

const CardComponent = ({ name, title, image }) => (
  <Card
    sx={{
      width: "15.75rem",
      height: "18.75rem",
      background: "#FFFFFF",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      margin: "0.2rem",
      marginRight: { xs: "0.6rem", md: "0.25rem" },
    }}
  >
    <Box
      sx={{
        width: "90%",
        height: "90%",
        background: `url(${image})`,
        backgroundSize: "cover",
        borderRadius: "1rem 1rem 1rem 0",
      }}
    />
    <Box sx={{ padding: "1rem" , position: "absolute", bottom: 0, marginRight: "4rem", bgcolor: "#FFFFFF", borderRadius: " 0 1rem 0 0", width: "75%" }}>
      <Typography
        sx={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 600,
          fontSize: "1rem",
          color: "#000000",
        }}
      >
        {name}
      </Typography>
      <Typography
        sx={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 400,
          fontSize: "0.875rem",
          color: "#000000",
        }}
      >
        {title}
      </Typography>
    </Box>
  </Card>
);

const CardsGrid = ({ selectedIndex }) => {
  const cardsData = [
    { name: "Dev Brat Tripathi", title: "Machine Learning", image: "image8.jpg" },
    { name: "Anubha Sharma", title: "AI Specialist", image: "image18.jpg" },
    { name: "Anant Tyagi", title: "Data Scientist", image: "image20.jpg" },
    { name: "Aman Singh", title: "Data Scientist", image: "image11.jpg" },
    { name: "Vibhu Dixit", title: "Data Scientist", image: "image19.jpg" },
    { name: "Raj Gautam", title: "Data Scientist", image: "image5.jpg" },
    { name: "Aarush Agarwal", title: "Data Scientist", image: "image20.jpg" },
    { name: "Aditya Kushwaha", title: "Data Scientist", image: "image5.jpg" },
    { name: "Ashika Goyal", title: "Data Scientist", image: "image16.jpg" },
    { name: "Manish Kumar", title: "Data Scientist", image: "image21.jpg" },
    { name: "Abhay", title: "Data Scientist", image: "image6.jpg" },
  ];
  const cardsData1 = [
    { name: "Kavyansh Gupta ", title: "Designing", image: "placeholder2.png" },
    { name: "Kunj Tyagi ", title: "Backend Development", image: "image4.jpg" },
    { name: "Sardul ", title: "Frontend Development", image: "image17.jpg" },
    { name: "Omdeep Tyagi ", title: "Backend Development", image: "image7.jpg" },
    { name: "Shubhangi Singh ", title: "Frontend Development", image: "image1.jpg" },
    { name: "Raj Aryan ", title: "Machine Learning", image: "image9.jpg" },
    { name: "Vanshika Goyal ", title: "Designing", image: "image14.jpg" },
    { name: "Om Manoj Sharma", title: "Machine Learning", image: "image13.jpg" },
    { name: "Dakshita ", title: "Designing", image: "image2.jpg" },
    { name: "Samarth ", title: "Dev Opps", image: "$RHE0A7U.jpg" },
    { name: "Devroop Shah ", title: "Machine Learning", image: "image3.jpg" },
  ];
  const cardsData2 = [
    { name: "Dev dfg", title: "Machine Learning", image: "placeholder2.png" },
    { name: "Johnfgh ", title: "AI Specialist", image: "$RHE0A7U.jpg" },
    { name: "Janebhj ", title: "Data Scientist", image: "$RHE0A7U.jpg" },
  ];
  const cardsData3 = [
    { name: "Dev dfg", title: "Machine Learning", image: "placeholder2.png" },
  ];
  return (
    <Box>
      {selectedIndex === 1 && (
        <Box
          className="1"
          sx={{
            display: "flex",
            width: "90%",
            flexWrap: "wrap",
            gap: "1.25rem",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "5rem",
            marginLeft: "6%",
          }}
        >
          {cardsData.map((card, index) => (
            <CardComponent key={index} {...card} />
          ))}
        </Box>
      )}
      {selectedIndex === 2 && (
        <Box
          className="2"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: "90%",
            gap: "1.25rem",
            justifyContent: "center",
            marginTop: "2.5rem",
            marginLeft: "6%",
          }}
        >
          {cardsData1.map((card, index) => (
            <CardComponent key={index} {...card} />
          ))}
        </Box>
      )}
      {selectedIndex === 3 && (
        <Box
          className="3"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: "90%",
            gap: "1.25rem", 
            justifyContent: "center",
            marginTop: "2.5rem", 
            marginLeft: "6%",
          }}
          >
            {cardsData2.map((card, index) => (
              <CardComponent key={index} {...card} />
            ))}
          </Box>
          )}
          {selectedIndex === 0 && (
          <Box
            className="0"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              width: "90%",
              gap: "1.25rem", 
              justifyContent: "center",
              marginTop: "2.5rem", 
              marginLeft: "6%",
            }}
          >
            {cardsData3.map((card, index) => (
              <CardComponent key={index} {...card} />
            ))}
          </Box>
          )}
          </Box>
          );
          };
          
          const MainComponent = () => {
          const [selectedIndex, setSelectedIndex] = React.useState(1);
          
          return (
          <Box sx={{ bgcolor: "#020016" }}>
            <SplitButton
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
            />
            <CardsGrid selectedIndex={selectedIndex} />
            <Footer />
          </Box>
          );
          };
          
          export default MainComponent;
          

