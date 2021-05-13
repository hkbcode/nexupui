import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import  Button  from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';


export default function About() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js with TypeScript example
        </Typography>
        <Button color="primary" variant="contained"> Build Some</Button>
        <Button color="secondary" variant="outlined"> Great App</Button>
        <Button color="defualt" variant="contained"> Build Some</Button>


        <Link href="/">Go to the main page</Link>
<IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>

        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
