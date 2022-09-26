import { Avatar, Button, Grid, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';


export const PortafolioPage = () => {
  return (
    
<Container
    sx={{
      
      backgroundColor: "white",
      boxShadow: "0px 1px 20px",
      paddingTop: 15,
      paddingBottom: 7,
      marginTop: 5,
      borderRadius: 2,
           
    }}
       
 
 >
  
  <Grid container sx={{
  justifyContent: 'center',
  textAlign: 'center', 
  display: 'absolute',    
}}>
  
  <Typography
    sx={{ 
    textAlign: 'center',
    backgroundColor: "#BF3604",
    width: 400,
    height: 60,
    borderRadius: 1,
    fontFamily: 'system-ui',
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 40,
    boxShadow: '5px 2px 10px rgba(1, 1, 1,1)',

    }}>Portafolio
  </Typography>
  </Grid>

   <Grid  container>
    
   <Grid item lg={12} sm={12}>
      
        
      
      <Typography variant="h6" 
          color="initial"
          textAlign="center" 
          marginY={5} 
          marginX={10}
          padding={1}
          backgroundColor="white"
          borderRadius= {1}
          boxShadow={20}
          > Proyectos realizados en el Diplomado en Desarrollo Front-end con React JS de la Fundación Internacional Maria Luisa de Moreno y LiveVox</Typography>
    </Grid>
    <Grid sx={{
        
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        
            
      }}
      item lg={6} 
      >
      <Grid item lg={3}>
    
        <Avatar 
          alt="APPtoDO"
          src="APPtoDO.PNG"
          sx={{ width:250, height:250, 
          boxShadow: "7px 10px 10px rgba(0, 0, 0, 0.3)",
          display: "flex",
         
          }}
        />
        <Grid container>
        <Grid item lg={10} sx={{padding:1,}}>
          <Box sx={{ 
                textAlign: 'center',
              }}>
              <Button  href='https://github.com/Claristizabalg/To-do-list' variant="contained"><Typography variant='h6'sx={{
                fontFamily: 'system-ui',
                fontWeight: 'bold',
                fontSize: 12,
                textTransform: 'none',
                
              }} 
              
              >GitHub <GitHubIcon/> </Typography></Button>
          </Box>
        </Grid>
        <Grid item lg={1} sx={{padding:1,}}>
          <Box sx={{ 
                textAlign: 'center',
              }}>
              <Button href='https://grand-narwhal-03ce9b.netlify.app/' variant="contained" ><Typography variant='h6'sx={{
                fontFamily: 'system-ui',
                fontWeight: 'bold',
                fontSize: 17,
                textTransform: 'none',
                
              }} >Vista</Typography></Button>
          </Box>
        </Grid>
        </Grid>

    </Grid>

    </Grid>
    <Grid item lg={6}>
    <Box sx={{padding:1,}}>
        <Avatar 
          alt="LandingPage"
          src="Landing.PNG"
          sx={{ width:250, height:250, 
          boxShadow: "7px 10px 10px rgba(0, 0, 0, 0.3)",
          display: "flex",
         
          }}
        />
        <Grid container>
          <Grid item lg={3} sx={{padding:1,}}>
          <Box sx={{ 
                textAlign: 'center',
              }}>
              
              <Button  variant="contained" 
                href='https://github.com/Claristizabalg/Landing-Page'>
                <Typography variant='h6'sx={{
                fontFamily: 'system-ui',
                fontWeight: 'bold',
                fontSize: 14,
                textTransform: 'none',
                
                
              }} >GitHub <GitHubIcon/> 
              </Typography>
              </Button>
            </Box>
          </Grid>
        <Grid item lg={1} sx={{padding:1,}}>
          <Box sx={{ 
                textAlign: 'center',
              }}>
              <Button variant="contained" >
                <Typography variant='h6'sx={{
                  fontWeight: 'bold',
                  fontFamily: 'system-ui',
                  textTransform: 'none',
                  fontSize: 17,
                
              }} >Vista
              </Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
    </Grid>
  </Grid>
                
    
 </Container>

  )}

