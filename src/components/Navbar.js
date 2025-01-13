import React, { useState } from 'react';
import { Box, Typography, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';

const Navbar = () => {
    const router = useRouter();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                px: { xs: '0.5rem', sm: '1.25rem', md: '2.5rem' },
                alignItems: 'center',
                justifyContent: 'space-between',
                bgcolor: 'transparent',
                color: 'white',
                width: '100%',
                borderBottom: '0.0375rem solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(15px)',
                WebkitBackdropFilter: 'blur(15px)',
                zIndex: 10,
                background: 'linear-gradient(to bottom, #020016, rgba(2, 0, 22, 0.4))',
                position: 'fixed',

            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    marginLeft: { xs: '0', sm: '1rem', md: '3rem' },
                }}
                onClick={() => router.push('/')}
            >
                <Box
                    component="img"
                    src="/logo2.png"
                    alt="logo"
                    sx={{
                        width: { xs: '10rem', sm: '15.375rem' },
                        height: '5.125rem',
                    }}
                />

            </Box>

            <Box
                sx={{
                    display: { xs: 'none', md: 'flex' },
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '3rem',
                }}
            >
               
                {['Home', 'Projects', 'Events', 'Our Team', 'Contact Us'].map((item, index) => (
    <Typography
        key={index}
        variant="body1"
        sx={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 400,
            fontSize: '0.875rem',
            lineHeight: '100%',
            letterSpacing: '0.02em',
            color: 'rgba(255, 255, 255, 0.6)',
            cursor: 'pointer',
            borderBottom: '0.125rem solid transparent',
            transition: 'all 0.3s',
            '&:hover': {
                color: '#ffffff',
                borderBottom: '0.125rem solid #ffffff',
            },
        }}
        onClick={() =>
            router.push(item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`)
        }
    >
        {item}
    </Typography>
))}

            </Box>

            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
                    <MenuIcon />
                </IconButton>
            </Box>

            <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
                <List sx={{ width: '15.625rem', bgcolor: '#020016', height: '100%' }}>
                    {['Home', 'Projects', 'Events', 'Our Team', 'Contact Us'].map((item, index) => (
                        <ListItem
                            button
                            key={index}
                            onClick={() => {
                                router.push(`/${item.toLowerCase().replace(' ', '')}`);
                                handleDrawerToggle();
                            }}
                        >
                            <ListItemText
                                primary={item}
                                primaryTypographyProps={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontWeight: 400,
                                    fontSize: '1rem',
                                    lineHeight: '100%',
                                    color: 'rgba(255, 255, 255, 0.6)',
                                    '&:hover': {
                                        color: '#ffffff',
                                    },
                                }}
                            />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
};

export default Navbar;

