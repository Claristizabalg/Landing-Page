import { Avatar, Button, Grid, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'

export const EstudiosPage = () => {
  return (
    
<Container
      sx={{
        flexGrow:1,
        backgroundColor: "#F2D335",
        boxShadow: "0px 1px 20px",
        paddingTop: 3,
        paddingBottom: 7,
            
      }}
        maxWidth="full"
 
 >
  <Grid  container>
    <Grid sx={{
        
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        
            
      }}
      item lg={4} 
      >
      
        <img src="/src/assets/Estudios.PNG" alt="Estudios"/>

    </Grid>
    
    <Grid item lg={8} sm={12}>
      <Grid container sx={{
        justifyContent: 'center',
        textAlign: 'center',     
      }}>
        
        <Typography  sx={{ 
          textAlign: 'center',
          backgroundColor: "#40592E",
          width: 300,
          height: 50,
          borderRadius: 1,
          fontFamily: 'system-ui',
          fontWeight: 'bold',
          color: '#ffffff',
          fontSize: 30,
          boxShadow: '5px 2px 10px rgba(1, 1, 1,1)',

          }}>Estudios
        </Typography>
        
      </Grid>
      <Typography variant="h6" 
          color="initial"
          textAlign="justify" 
          marginY={5} 
          marginX={10}
          padding={1}
          backgroundColor="white"
          borderRadius= {1}
          boxShadow={20}
          > 
          Emprendedor, con iniciativa y capacidad de organización y gestión. Capacidad de análisis conducente a la resolución de problemas. Me considero una persona activa, habituado al trabajo bajo presión, en equipo y con gran sentido de responsabilidad y con alta vocación de servicio. Con experiencia en liderar equipos de trabajo, con gran imaginación e iniciativa para desarrollar ideas nuevas. Poseo conocimiento en todo el ciclo de vida del desarrollo de software.
        </Typography>
    </Grid>
    
  </Grid>
        
        
    
  </Container>
 
  )
}



