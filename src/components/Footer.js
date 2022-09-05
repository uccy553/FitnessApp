import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px" >
      <h3 style={{ fontSize: '1.5rem' }}>Gymna<span style={{ color: '#ff25e2' }}>stic</span></h3>
        <Typography variant="h5" pb="40px" mt="20px">copyright 2022</Typography>
      </Stack>
    </Box>
  )
}

export default Footer