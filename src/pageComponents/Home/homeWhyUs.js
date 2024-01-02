import React from 'react';
import { Box, Typography, SvgIcon } from '@mui/material';
import { ReactComponent as One } from '../../assets/one.svg';
import { ReactComponent as Two } from '../../assets/two.svg';
import { ReactComponent as Three } from '../../assets/three.svg';
import { MyStyledButton } from '../../styledComponents.js';

const homeWhyUs = () => {
  const steps = [
    {
      title: 'Fill Out Form',
      desc: 'Begin your cars journey across the USA with Quick Wheels. Fill out our easy form for fast, secure vehicle transport. Trust us for reliable, hassle-free service. Start now!',
      icon: One,
      color: 'black',
      button: <MyStyledButton />,
    },
    {
      title: 'Car Gets Shipped',
      desc: 'Ship your car across the USA effortlessly with Quick Wheels. We guarantee safe, prompt delivery, ensuring a worry-free experience. Choose Quick Wheels for reliable vehicle transport. Your cars journey, made simple.',
      icon: Two,
      color: 'black',
      button: <MyStyledButton />,
    },
    {
      title: 'Car Gets Delivered',
      desc: 'Experience the ease of Quick Wheels service as your car is delivered across the USA. We ensure safe, timely transport with a focus on customer satisfaction. Trust Quick Wheels for a smooth vehicle delivery process. ',
      icon: Three,
      color: 'black',
      button: <MyStyledButton />,
    },
  ];
  return (
    <Box
      sx={{
        width: '100%',
        height: {
          xl: '100vh',
          lg: '100vh',
          md: 'auto',
          sm: 'auto',
          xs: 'auto',
        },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        backgroundColor: 'black',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          color: 'white',
          height: {
            xl: '30vh',
            lg: '30vh',
            md: '30vh',
            sm: '20vh',
            xs: '20vh',
          },
          width: '100%',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          sx={{
            color: 'white',
            fontFamily: 'Lemon',
            paddingBottom: '.2em',
            borderBottom: '3px solid gold',
            fontSize: {
              xl: '56px',
              lg: '46px',
              md: '46px',
              sm: '46px',
              xs: '28px',
            },
          }}
        >
          How It All Works
        </Typography>
      </Box>
      <Box
        sx={{
          height: {
            xl: '70vh',
            lg: '70vh',
            md: 'auto',
            sm: 'auto',
            xs: 'auto',
          },
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '50px',
          flexDirection: {
            xl: 'row',
            lg: 'row',
            md: 'column',
            sm: 'column',
            xs: 'column',
          },
          marginTop: {
            xl: '0px',
            lg: '0px',
            md: '25px',
            sm: '25px',
            xs: '25px',
          },
          marginBottom: {
            xl: '0px',
            lg: '0px',
            md: '25px',
            sm: '25px',
            xs: '25px',
          },
        }}
      >
        {steps.map(({ title, desc, icon, color, button }) => (
          <Box
            sx={{
              width: {
                xl: '30%',
                lg: '30%',
                md: '65%',
                sm: '80%',
                xs: '90%',
              },
              padding: '.5em',
              height: '60vh',
              backgroundColor: '#ffffff',
              borderRadius: '15px',
              border: '3px solid gold',
              boxShadow:
                'rgba(11, 15, 13, 0.48) 6px 2px 16px 0px, rgba(212, 215, 213, 0.8) -6px -2px 16px 0px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'start',
            }}
          >
            <SvgIcon
              component={icon}
              inheritViewBox
              sx={{
                height: {
                  xl: '100px',
                  lg: '70px',
                  md: '100px',
                  sm: '100px',
                  xs: '100px',
                },
                width: {
                  xl: '100px',
                  lg: '70px',
                  md: '100px',
                  sm: '100px',
                  xs: '100px',
                },
                color: '#000000',
              }}
            />
            <Typography
              sx={{
                color: 'black',
                paddingTop: '.5em',
                paddingBottom: '.2em',
                width: '90%',
                textAlign: 'center',
                borderBottom: '3px solid black',
                fontFamily: 'Lemon',
                fontSize: { xl: '40px', lg: '28px', md: '38px', sm: '38px' },
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                color: 'black',
                paddingTop: '.5em',
                paddingBottom: '.2em',
                width: '90%',
                textAlign: 'left',
                fontSize: {
                  xl: '18px',
                  lg: '16px',
                  md: '22px',
                  sm: '18px',
                  xs: '16px',
                },
              }}
            >
              {desc}
            </Typography>
            <Typography
              sx={{
                color: 'black',
                paddingTop: { xl: '.5em', lg: '.2px' },
                paddingBottom: { xl: '.2em', lg: '.2px' },
                width: '90%',
                textAlign: 'left',
                fontSize: {
                  xl: '18px',
                  lg: '16px',
                  md: '22px',
                  sm: '18px',
                  xs: '16px',
                },
              }}
            >
              {desc}
            </Typography>
            {button}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default homeWhyUs;
