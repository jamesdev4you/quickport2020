import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Ferrari from '../../assets/About2.jpg';
import '../../index.css';

const costAbout2 = () => {
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
          Distance
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
          The distance your car needs to travel is a key factor influencing
          transportation costs. Longer journeys typically incur higher expenses
          due to factors like fuel, maintenance, and driver accommodations.
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
          However, Quick Wheels is committed to providing competitive rates
          while ensuring the safety and security of your vehicle. Choose Quick
          Wheels for a seamless journey from door to door, no matter the
          distance.
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

export default costAbout2;
