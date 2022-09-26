import { Grid, Typography } from '@mui/material'
import { Box, Container, flexbox } from '@mui/system'
import React from 'react'
export const Footer = () => {
  return (
    <Container 
    maxWidth="full" sx={{backgroundColor: "#BF3604"}}
    >
       <Box sx={{
        display: 'flex',
        justifyContent: 'center',
       }}>
        <Typography sx={{
          href: "/",
          fontWeight: 'bold',
          fontSize: 30,
          color: "white",
          mt: 2,
          mb: 2
        }}>Cristian Aristizabal - Desarrollo de Software</Typography>
       </Box >
    </Container>
  )
}