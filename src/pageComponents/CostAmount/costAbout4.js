import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Ferrari from '../../assets/About4.jpg';
import '../../index.css';

const costAbout4 = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'black',
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
        paddingTop: {
          xl: '0px',
          lg: '0px',
          md: '0px',
          sm: '45px',
          xs: '45px',
        },
        paddingBottom: {
          xl: '0px',
          lg: '0px',
          md: '0px',
          sm: '45px',
          xs: '45px',
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
            color: 'white',
            width: '100%',
            fontFamily: 'Lemon',
            fontSize: { xl: '24px', lg: '28px', md: '24px' },
          }}
        >
          More About Quick Wheels
        </Typography>
        <Typography
          sx={{
            textAlign: 'left',
            width: '100%',
            color: 'white',
            fontSize: {
              xl: '22px',
              lg: '16px',
              md: '14px',
              sm: '18px',
              xs: '14px',
            },
          }}
        >
          Your car's protection is our priority. Our experienced team
          understands the ins and outs of car transport, guaranteeing the safe
          and secure relocation of your vehicle.
        </Typography>
        <Typography
          sx={{
            textAlign: 'left',
            width: '100%',
            color: 'white',
            fontSize: {
              xl: '22px',
              lg: '16px',
              md: '14px',
              sm: '18px',
              xs: '14px',
            },
          }}
        >
          Quick Wheels operates across the country, ensuring that we can move
          your car to and from any location with ease.
        </Typography>
        <Button
          href='tel:14159423491'
          variant='contained'
          sx={{
            backgroundColor: 'white',
            color: 'black',
            marginRight: 'auto',
            '&:hover': { color: 'white' },
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
            'rgba(225, 225, 225, 0.4) 5px 5px, rgba(225, 225, 225, 0.3) 10px 10px, rgba(225, 225, 225, 0.2) 15px 15px, rgba(225, 225, 225, 0.1) 20px 20px, rgba(225, 225, 225, 0.05) 25px 25px',
        }}
      />
    </Box>
  );
};

export default costAbout4;
