import { Box } from '@mui/material'
import React from 'react'
import { InicioPage } from './InicioPage'
import { EstudiosPage } from './EstudiosPage'
import { ExperienciaPage } from './ExperienciaPage'
import { PortafolioPage } from './PortafolioPage'
import { ContactoPage } from './ContactoPage'

export const LandingPage = () => {
  return (
    <>
   <Box>
    <Box id="inicio">
     <InicioPage/>
    </Box>
    <Box id="estudios">
    <EstudiosPage/>
    </Box>
    <Box id="experiencia">
    <ExperienciaPage/>
    </Box>
    <Box id="portafolio">
    <PortafolioPage/>
    </Box>
    <Box id="contacto">
    <ContactoPage/>
    </Box>
  </Box>
  </>
    

  )
}


