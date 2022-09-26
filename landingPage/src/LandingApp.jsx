
import React from 'react'
import {LandingPage} from './pages/LandingPage'
import {AppTheme} from './theme/AppTheme'
import {NavBar} from '../src/components/NavBar'
import {Footer} from '../src/components/Footer'

export const LandingApp = () => {
  return (
    <>
    <AppTheme>
      <NavBar/>
    <LandingPage/>
     <Footer/> 
    </AppTheme>
  </>
    
  )
}



