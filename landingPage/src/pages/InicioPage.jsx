import { Alert, Avatar, Button, Container, Grid, Typography, } from '@mui/material'
import { Box } from '@mui/material'
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';


export const InicioPage = () => {
  return (
  
<Container
    sx={{
      
      backgroundColor: "white",
      boxShadow: "0px 1px 20px",
      paddingTop: 15,
      paddingBottom: 7,
           
    }}
      maxWidth="full"
 
 >
   <Grid  container>
    
    <Grid item lg={8} xs={12}>
    
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

          }}>Cristian Aristizabal</Typography>
          </Grid>
        
          <Typography variant="h6" 
          color="initial"
          textAlign="justify" 
          marginY={5} 
          marginX={10}
          > 
          Emprendedor, con iniciativa y capacidad de organización y gestión. Capacidad de análisis conducente a la resolución de problemas. Me considero una persona activa, habituado al trabajo en equipo y con gran sentido de responsabilidad y con alta vocación de servicio. Con experiencia en liderar equipos de trabajo, con gran imaginación e iniciativa para desarrollar ideas nuevas. Poseo conocimiento en todo el ciclo de vida del desarrollo de software.
          </Typography>
        
        <Box sx={{ 
          textAlign: 'center',
        }}>
        <Button href="https://github.com/Claristizabalg" variant="contained"><Typography variant='h6'sx={{
          fontFamily: 'system-ui',
          fontWeight: 'bold',
          fontSize: 30,
          textTransform: 'none',
          
         }} >GitHub <GitHubIcon/></Typography></Button>
        </Box>

    </Grid>
    
    <Grid item lg={4}>
    <Box sx={{padding:5,}}>
        <Avatar 
          alt="CristianA"
          src="https://media-exp1.licdn.com/dms/image/C4E03AQGVdEEALeRIvg/profile-displayphoto-shrink_200_200/0/1650847507398?e=1669852800&v=beta&t=PZTOz1krNLpi2x_j6s52MhsW9ZJi4T5-A74CPhiehYk"
          sx={{ width:250, height:250, 
          boxShadow: "7px 10px 10px rgba(0, 0, 0, 0.3)",
         
          }}
        />
        </Box>

    </Grid>
    </Grid> 


 
    
  </Container>


)}


