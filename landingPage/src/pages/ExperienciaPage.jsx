import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

export const ExperienciaPage = () => {
  return (
<Container
    sx={{
      flexGrow:1,
      backgroundColor: "white",
      boxShadow: "0px 1px 20px",
      paddingTop: 15,
      paddingBottom: 7,
           
    }}
       maxWidth="full"
 
 >
   <Grid  container>
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

          }}>Experiencia
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
          >Mi experiencia en el área de desarrollo de software inició en Abril del 2022 en <strong>Servicios Especializados de Tecnología (SETI)</strong>  Brindando soporte en el área de incidentes del banco <strong>Banistmo Panamá</strong> . 
           </Typography>
    </Grid>
    <Grid sx={{
        
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        
            
      }}
      item lg={4} 
      >
      
        <img src="Experiencia.PNG" alt="Estudios"/>

    </Grid>
    
  </Grid>
 </Container>
     
  )
}


