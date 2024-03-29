import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Ferrari from '../../assets/homeabout2.jpg';
import '../../index.css';

const homeAbout2 = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        height: {
          xl: '60vh',
          lg: '60vh',
          md: 'auto',
          sm: 'auto',
          xs: 'auto',
        },
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: {
          xl: 'row',
          lg: 'row',
          md: 'column-reverse',
          sm: 'column-reverse',
          xs: 'column-reverse',
        },
        gap: {
          xl: '15em',
          lg: 'none',
          md: '6em',
          sm: 'none',
          xs: '45px',
        },
        marginTop: {
          xl: '0px',
          lg: '0px',
          md: '0px',
          sm: '0px',
          xs: '25px',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
          flexDirection: 'column',
          height: {
            xl: '400px',
            lg: '400px',
            md: 'auto',
            sm: 'auto',
            xs: 'auto',
          },
          width: {
            xl: '30vw',
            lg: '30vw',
            md: '80%',
            sm: '80%',
            xs: '80%',
          },
          gap: '1em',
        }}
      >
        <Typography
          variant='h4'
          sx={{
            textAlign: 'left',
            width: '100%',
            fontFamily: 'Lemon',
            fontSize: { xl: '24px', lg: '28px', md: '24px' },
          }}
        >
          About Us
        </Typography>
        <Typography
          sx={{
            textAlign: 'left',
            width: '100%',
            fontSize: {
              xl: '22px',
              lg: '16px',
              md: '14px',
              sm: '18px',
              xs: '14px',
            },
          }}
        >
          Quick Wheels expertly moves personal vehicles across the USA. Rely on us for secure, efficient transport. With Quick Wheels, your car's journey is in safe hands. Your peace of mind is our top priority.
        </Typography>
        <Typography
          sx={{
            textAlign: 'left',
            width: '100%',
            fontSize: {
              xl: '22px',
              lg: '16px',
              md: '14px',
              sm: '18px',
              xs: '14px',
            },
          }}
        >
          Your solution for expertly moving personal vehicles across the USA. We combine speed, safety, and reliability to ensure your car's journey is seamless. Choose Quick Wheels for unmatched vehicle transport service.        </Typography>
        <Button
          variant='contained'
          href='tel:14159423491'
          sx={{
            backgroundColor: 'black',
            color: 'white',
            
            marginRight: 'auto',
            '&:hover': { color: 'black' },
          }}
        >
          {' '}
          Start Today!
        </Button>
      </Box>
      <Box
        sx={{
          height: {
            xl: '400px',
            lg: '400px',
            md: '400px',
            sm: '400px',
            xs: '250px',
          },
          width: {
            xl: '400px',
            lg: '400px',
            md: '400px',
            sm: '400px',
            xs: '250px',
          },
          background: `url(${Ferrari})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow:
            'rgba(0, 0, 0, 0.4) 5px 5px, rgba(0, 0, 0, 0.3) 10px 10px, rgba(0, 0, 0, 0.2) 15px 15px, rgba(0, 0, 0, 0.1) 20px 20px, rgba(0, 0, 0, 0.05) 25px 25px',
        }}
      />
    </Box>
  );
};

export default homeAbout2;
