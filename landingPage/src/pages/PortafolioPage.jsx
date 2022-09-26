import { Avatar, Button, Grid, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'

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
          textAlign="justify" 
          marginY={5} 
          marginX={10}
          padding={1}
          backgroundColor="white"
          borderRadius= {1}
          boxShadow={20}
          > 
          Emprendedor, con iniciativa y capacidad de organización y gestión. Capacidad de análisis conducente a la resolución de problemas. Me considero una persona activa, habituado al trabajo bajo.
        </Typography>
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
          alt="CristianA"
          src="/src/assets/APPtoDO.PNG"
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
              <Button   variant="contained"><Typography variant='h6'sx={{
                fontFamily: 'system-ui',
                fontWeight: 'bold',
                fontSize: 14,
                textTransform: 'none',
                
              }} 
              href="https://github.com/Claristizabalg"
              >GitHub <img id="Git2" src="/src/assets/Octicons-mark-github.svg"></img> </Typography></Button>
          </Box>
        </Grid>
        <Grid item lg={1} sx={{padding:1,}}>
          <Box sx={{ 
                textAlign: 'center',
              }}>
              <Button variant="contained" ><Typography variant='h6'sx={{
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
          alt="CristianA"
          src="/src/assets/Landing.PNG"
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
              <Button  variant="contained">
                <Typography variant='h6'sx={{
                fontFamily: 'system-ui',
                fontWeight: 'bold',
                fontSize: 14,
                textTransform: 'none',
                
                
              }} >GitHub <img id="Git2" src="/src/assets/Octicons-mark-github.svg"></img> 
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

