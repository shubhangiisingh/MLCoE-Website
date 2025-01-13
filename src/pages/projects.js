import { Box } from '@mui/system'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Langchat from '@/components/Langchat'
import Morepro from '@/components/Morepro'

const project = () => {
  return (
    <Box>
     <Navbar/>
     <Langchat/>
     <Morepro/>
     <Footer/> 
    </Box>
  )
}

export default project


