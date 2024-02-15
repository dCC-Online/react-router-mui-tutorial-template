import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="85vh" p={2}>
      <Card elevation={4}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
            Welcome
          </Typography>
          <Typography variant="body1" color="text.secondary" align="center">
            To my awesome app!
          </Typography>
          <Box display="flex" justifyContent="center" mt={2}>
            <Button variant="outlined" color="primary" component={Link} to="/">
              Explore
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default HomePage;
