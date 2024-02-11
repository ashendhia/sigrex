import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import img from '../../assets/usthb.jpg'
import img1 from '../../assets/esipic.png'
import img2 from '../../assets/Sonatrach.png'
import img3 from '../../assets/gsg.png'
import img4 from '../../assets/cse.jpg'

const logos = [
  img,
  img1,
  img2,
  img3,
  img4,
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e911fa22f2203d7514c_TerraDark.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0990f3717787fd49245_colorado-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5ca4e548b0deb1041c33_Ankara-black.svg',
];

const logoStyle = {
  width: '100px',
  height: '80px',
  margin: '0 32px',
  opacity: 0.7,
};

export default function Partenaire() {

  return (
    <Box  id="logoCollection" sx={{ py: 4 }} >
      <Typography
        component="p"
        variant="subtitle2"
        align="center"
        color="text.secondary"
      >
          Our Trusted Partenaire 
      </Typography>
      <Grid container justifyContent="center" sx={{ mt: 0.5, opacity: 0.6 }}>
        {logos.map((logo) => (
          <Grid item >
            <img
              src={logo}
              alt={`Image  company number  1}`}
              style={logoStyle}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}