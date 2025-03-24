import { Container, Typography, Box, Grid } from '@mui/material';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import ContentPage from './components/ContentPage';
import About from './components/About';
import Service from './components/ServiceCard';
import Footer from './components/Footer';
import Link from 'next/link';
import EventsActivitiesSection from './components/HeroSecComp';

export default function Home() {
  return (
    <>
      <NavBar />
      <ContentPage />
      <EventsActivitiesSection/>
      <Box sx={{
        textAlign: 'left',
        backgroundColor: 'background.paper',
        width: '100%',
        overflow: 'hidden',
        mt: -1, // Negative margin to pull up the hero section
      }}>
        <Box sx={{ 
          position: 'relative',
          width: '100%',
        }}>
         
        </Box>
      </Box>
      
      <About />
    


     
      <Footer/>
    </>
  );
}
