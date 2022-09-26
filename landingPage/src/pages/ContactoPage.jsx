import { Button, Container, Grid, Typography } from "@mui/material";
import React from 'react'
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
export const ContactoPage = () => {
  return (
    <Container
      sx={{
        flexGrow:1,
        backgroundColor: "#F2D335",
        boxShadow: "0px 1px 20px",
        paddingTop: 3,
        paddingBottom: 2,
        marginTop: 5,
            
      }}
        maxWidth="full"
 
 >
  <Grid  container>
   
    
    <Grid item lg={12} sm={12}>
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

          }}>Contacto
        </Typography>
        
      </Grid>

      <Grid item lg={12} sm={12} sx={{
        justifyContent: 'center',
        textAlign: 'center',  
        paddingTop:3,   
      }}>
      <Button 
          sx={{
            borderRadius: 4,
            color: "primero.main",
            marginX: 2,
            marginY: 2,
          }}
          size="large"
          variant="contained"
          target="_blank"
          href="https://github.com/Claristizabalg"
        >
          <GitHubIcon
            sx={{
              marginRight: 1,
            }}
          />{" "}
          GitHub
        </Button>
        <Button
          sx={{
            borderRadius: 4,
            backgroundColor: "#0e76a8",
            color: "White",
            marginX: 2,
            marginY: 2,
          }}
          size="large"
          variant="contained"
          target="_blank"
          href="https://www.linkedin.com/in/claristizabalg/"
        >
          <LinkedInIcon
            sx={{
              marginRight: 1,
              color: "white",
            }}
          />{" "}
          <Typography sx={{color: "white"}}>LinkedIn</Typography>
        </Button>
        <Button
          sx={{
            borderRadius: 4,
            backgroundColor: "#00bb2d",
            marginX: 2,
            marginY: 2,
          }}
          size="large"
          variant="contained"
          target="_blank"
          href="https://wa.me/573113729469?text=Hola soy un desarrollador Font End"
        >
          <WhatsAppIcon
            sx={{
              marginRight: 1,
              color: "white",
            }}
          />{" "}
          <Typography sx={{color: "white"}}>WhatsApp</Typography>
        </Button>
    </Grid>
    </Grid>
    
  </Grid>
        
        
    
  </Container>
  )
}


