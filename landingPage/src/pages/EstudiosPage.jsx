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
        paddingTop: 15,
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
      
        <img src="Estudios.PNG" alt="Estudios"/>


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
          textAlign="center" 
          marginY={5} 
          marginX={10}
          padding={1}
          backgroundColor="white"
          borderRadius= {1}
          boxShadow={20}
          > 
Titulo: Técnico en Línea de Aviones (TLA) 
Escuela de Aviación INEC.<br></br>
Añ0 2004


        </Typography>
        <Typography variant="h6" 
          color="initial"
          textAlign="center" 
          marginY={5} 
          marginX={10}
          padding={1}
          backgroundColor="white"
          borderRadius= {1}
          boxShadow={20}
          > 
Finalizando Licenciatura en Inglés como Lengua Extrajera.
Universidad Nacional Abierta y a Distancia (UNAD)


        </Typography>
        <Typography variant="h6" 
          color="initial"
          textAlign="center" 
          marginY={5} 
          marginX={10}
          padding={1}
          backgroundColor="white"
          borderRadius= {1}
          boxShadow={20}
          > 

Estudiante en Desarrollo de software 
PLATZI - Udemy <br></br>
Año 2022

        </Typography>
    </Grid>
    
  </Grid>
        
        
    
  </Container>
 
  )
}



