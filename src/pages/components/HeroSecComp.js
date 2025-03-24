import { Box, Container, Typography, Card, CardContent, CardMedia, Chip, IconButton } from '@mui/material';
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import HealthPopulationModal from './HealthPopulationModal';
import Week12 from './Week12';
import Week11 from './Week11';
import Week10 from './Week10';
import Week9 from './Week9';
import Week8 from './Week8';
import Week7 from './Week7';
import Week6 from './Week6';
import Week5 from './Week5';
import Week4 from './Week4';
import Week3 from './Week3';
import Week2 from './Week2';
import Week1 from './Week1';

export default function EventsActivitiesSection() {
  const [openHealthPopulation, setOpenHealthPopulation] = useState(false);
  const [openWeek12, setWeek12] = useState(false);
  const [openWeek11, setWeek11] = useState(false);
  const [openWeek10, setWeek10] = useState(false);
  const [openWeek9, setWeek9] = useState(false);
  const [openWeek8, setWeek8] = useState(false);
  const [openWeek7, setWeek7] = useState(false);
  const [openWeek6, setWeek6] = useState(false);
  const [openWeek5, setWeek5] = useState(false);
  const [openWeek4, setWeek4] = useState(false);
  const [openWeek3, setWeek3] = useState(false);
  const [openWeek2, setWeek2] = useState(false);
  const [openWeek1, setWeek1] = useState(false);
  
  // For the slider functionality
  const [scrollPosition, setScrollPosition] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const sliderRef = useRef(null);

  // Handle modals
  const handleWeek12Click = () => setWeek12(true);
  const handleWeek11Click = () => setWeek11(true);
  const handleWeek10Click = () => setWeek10(true);
  const handleWeek9Click = () => setWeek9(true);
  const handleWeek8Click = () => setWeek8(true);
  const handleWeek7Click = () => setWeek7(true);
  const handleWeek6Click = () => setWeek6(true);
  const handleWeek5Click = () => setWeek5(true);
  const handleWeek4Click = () => setWeek4(true);
  const handleWeek3Click = () => setWeek3(true);
  const handleWeek2Click = () => setWeek2(true);
  const handleWeek1Click = () => setWeek1(true);

  // Sample events data - in real application, this would come from your backend
  const events = [
    {
      id: 1,
      title: "The Final Chapter of My OJT Journey",
      description: 'Reflecting on the lessons, experiences, and growth during the final phase of my OJT.',
      time: "8:00 AM - 3:00 PM",
      location: "Main Clinic Hall",
      category: "Week 12",
      image: "/graphics/week12.jpg",
      participants: "150 slots",
     
    },
    {
      id: 2,
      title: "Building the Backend of a Simple Website",
      description: "Developed the server-side logic and database integration for a functional website.",
      time: "9:00 AM - 4:00 PM",
      location: "Immunization Center",
      category: "Week 11",
      image: "/graphics/backend.jpg",
      participants: "200 slots",
    },
    {
      id: 3,
      title: "Building the Frontend of a Simple Website",
      description: " Designed and implemented the user interface to ensure a seamless user experience.",
      time: "1:00 PM - 5:00 PM",
      location: "Conference Room",
      category: "Week 10",
      image: "/graphics/frontend.jpg",
      participants: "100 slots",
      
    },
    {
      id: 4,
      title: " Encoding Patient Data in iClinicSys",
      description: " Entered and managed patient records in the iClinicSys system to support healthcare operations.",
      time: "1:00 PM - 5:00 PM",
      location: "Conference Room",
      category: "Week 9",
      image: "/graphics/a.jpg",
      participants: "100 slots",
     
    },
    {
      id: 5,
      title: "PhilHealth Konsulta Event Participation",
      description: "Assisted in a community healthcare initiative, contributing to patient processing and documentation.",
      time: "10:00 AM - 3:00 PM",
      location: "IT Lab",
      category: "Week 8",
      image: "/graphics/week8.png",
      participants: "75 slots",
      
    },
    {
      id: 6,
      title: "Encoding Circumcision Data with New Interns",
      description: "Collaborated with fellow interns to record circumcision data accurately and efficiently.",
      time: "9:00 AM - 4:00 PM",
      location: "Tech Center",
      category: "Week 7",
      image: "/graphics/45.png",
      participants: "50 slots",
      
    },
    {
      id: 7,
      title: "Guiding the New Job Order and Interns",
      description: "Provided support and guidance to new team members to help them adapt to RHU processes.",
      time: "9:00 AM - 4:00 PM",
      location: "Tech Center",
      category: "Week 6",
      image: "/graphics/rt.png",
      participants: "50 slots",
      
    },
    {
      id: 8,
      title: "RHU Workflow Optimization Mastery",
      description: " Gained in-depth knowledge of improving and streamlining RHU operations for better efficiency.",
      time: "9:00 AM - 4:00 PM",
      location: "Tech Center",
      category: "Week 5",
      image: "/graphics/56.jpg",
      participants: "50 slots",
      
    },
    {
      id: 9,
      title: "Enhancing Confidence in RHU Workflow",
      description: "Built confidence in handling various RHU tasks through continuous learning and practice.",
      time: "9:00 AM - 4:00 PM",
      location: "Tech Center",
      category: "Week 4",
      image: "/graphics/78.jpg",
      participants: "50 slots",
      
    },
    {
      id: 10,
      title: "Various Tasks Assigned to Us",
      description: "Managed multiple responsibilities, adapting to different tasks as required by the RHU.",
      time: "9:00 AM - 4:00 PM",
      location: "Tech Center",
      category: "Week 3",
      image: "/graphics/90.png",
      participants: "50 slots",
      
    },
    {
      id: 11,
      title: "Adapting to RHU Workflow and Enhancing Efficiency",
      description: 'Quickly adjusted to RHU processes while finding ways to improve efficiency.',
      time: "9:00 AM - 4:00 PM",
      location: "Tech Center",
      category: "Week 2",
      image: "/graphics/mn.png",
      participants: "50 slots",
      
    },
    {
      id: 12,
      title: "First Week of Training: Encoding with IClinicSys",
      description: "Underwent training to master encoding and data management using the iClinicSys platform.",
      time: "9:00 AM - 4:00 PM",
      location: "Tech Center",
      category: "Week 1",
      image: "/graphics/h.jpg",
      participants: "50 slots",
      
    }
  ];

  // Check if we can scroll left or right
  const checkScrollability = () => {
    if (!sliderRef.current) return;
    
    // Can scroll left if we're not at the beginning
    setCanScrollLeft(scrollPosition > 0);
    
    // Can scroll right if we haven't reached the end
    setCanScrollRight(
      scrollPosition < sliderRef.current.scrollWidth - sliderRef.current.clientWidth
    );
  };

  // Update scroll position
  useEffect(() => {
    checkScrollability();
  }, [scrollPosition]);

  // Set up scrolling event listener
  useEffect(() => {
    const slider = sliderRef.current;
    
    if (slider) {
      const handleScroll = () => {
        setScrollPosition(slider.scrollLeft);
      };
      
      slider.addEventListener('scroll', handleScroll);
      
      // Initial check
      checkScrollability();
      
      return () => {
        slider.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  // Slider navigation functions - scroll by one card width
  const scrollRight = () => {
    if (!sliderRef.current || !canScrollRight) return;
    
    // Get width of one card including gap
    const cardWidth = sliderRef.current.querySelector('.event-card').offsetWidth + 16;
    
    // Scroll right by one card width
    sliderRef.current.scrollBy({
      left: cardWidth,
      behavior: 'smooth'
    });
  };

  const scrollLeft = () => {
    if (!sliderRef.current || !canScrollLeft) return;
    
    // Get width of one card including gap
    const cardWidth = sliderRef.current.querySelector('.event-card').offsetWidth + 16;
    
    // Scroll left by one card width
    sliderRef.current.scrollBy({
      left: -cardWidth,
      behavior: 'smooth'
    });
  };

  // Function to determine which modal to open based on category
  const handleEventClick = (category) => {
    switch (category) {
      case "Week 12": return handleWeek12Click();
      case "Week 11": return handleWeek11Click();
      case "Week 10": return handleWeek10Click();
      case "Week 9": return handleWeek9Click();
      case "Week 8": return handleWeek8Click();
      case "Week 7": return handleWeek7Click();
      case "Week 6": return handleWeek6Click();
      case "Week 5": return handleWeek5Click();
      case "Week 4": return handleWeek4Click();
      case "Week 3": return handleWeek3Click();
      case "Week 2": return handleWeek2Click();
      case "Week 1": return handleWeek1Click();
      default: return null;
    }
  };

  return (
    <Box id='blog'
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: '#f8fafc',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 5, md: 7 }
          }}
        >
          <Typography
            variant="overline"
            sx={{
              color: '#3b82f6',
              fontWeight: 600,
              letterSpacing: 1.2,
              mb: 1,
              display: 'block'
            }}
          >
            MY PROGRESS
          </Typography>
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.25rem' },
              fontWeight: 700,
              color: '#1e293b',
              mb: 2,
              position: 'relative',
              display: 'inline-block',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 60,
                height: 3,
                backgroundColor: '#3b82f6',
                borderRadius: 4
              }
            }}
          >
            Weekly Blogs
          </Typography>
          <Typography 
            variant="body1"
            sx={{ 
              color: '#64748b', 
              maxWidth: 560, 
              mx: 'auto',
              mt: 3
            }}
          >
            Follow my journey through weekly updates as I document my learning process,
            challenges, and achievements during my internship.
          </Typography>
        </Box>

        {/* Events Slider Container */}
        <Box 
          sx={{
            position: 'relative',
            py: 2,
            px: { xs: 0, sm: 5 },
            mt: 4
          }}
        >
          {/* Navigation Arrows */}
          <IconButton
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            sx={{
              position: 'absolute',
              left: { xs: -10, sm: -15 },
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: { xs: 40, sm: 50 },
              height: { xs: 40, sm: 50 },
              backgroundColor: 'white',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              color: !canScrollLeft ? '#cbd5e1' : '#1e293b',
              '&:hover': {
                backgroundColor: 'white',
                color: !canScrollLeft ? '#cbd5e1' : '#3b82f6',
              },
              '&.Mui-disabled': {
                backgroundColor: '#f1f5f9',
                boxShadow: 'none'
              }
            }}
          >
            <ChevronLeft />
          </IconButton>
          
          <IconButton
            onClick={scrollRight}
            disabled={!canScrollRight}
            sx={{
              position: 'absolute',
              right: { xs: -10, sm: -15 },
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: { xs: 40, sm: 50 },
              height: { xs: 40, sm: 50 },
              backgroundColor: 'white',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              color: !canScrollRight ? '#cbd5e1' : '#1e293b',
              '&:hover': {
                backgroundColor: 'white',
                color: !canScrollRight ? '#cbd5e1' : '#3b82f6',
              },
              '&.Mui-disabled': {
                backgroundColor: '#f1f5f9',
                boxShadow: 'none'
              }
            }}
          >
            <ChevronRight />
          </IconButton>

          {/* Events Slider */}
          <Box
            ref={sliderRef}
            sx={{
              display: 'flex',
              overflowX: 'auto',
              gap: 4,
              scrollbarWidth: 'none', // Firefox
              msOverflowStyle: 'none', // IE/Edge
              '&::-webkit-scrollbar': { // Chrome/Safari/Opera
                display: 'none'
              },
              scrollSnapType: 'x mandatory',
              pb: 2, // Add some padding to bottom so shadows don't get cut off
            }}
          >
            {events.map((event) => (
              <Card
                key={event.id}
                className="event-card"
                sx={{
                  flex: {
                    xs: '0 0 calc(100% - 16px)',
                    sm: '0 0 calc(50% - 16px)',
                    md: '0 0 calc(33.333% - 16px)'
                  },
                  scrollSnapAlign: 'start',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.04)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
                    '& .MuiCardMedia-root': {
                      transform: 'scale(1.05)'
                    }
                  },
                }}
                onClick={() => handleEventClick(event.category)}
              >
                <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={event.image}
                    alt={event.title}
                    sx={{
                      objectFit: 'cover',
                      transition: 'transform 0.6s ease',
                    }}
                  />
                  <Chip
                    label={event.category}
                    sx={{
                      position: 'absolute',
                      top: 16,
                      left: 16,
                      backgroundColor: 'rgba(59, 130, 246, 0.9)',
                      color: 'white',
                      fontWeight: 600,
                      backdropFilter: 'blur(4px)',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    }}
                  />
                </Box>
                <CardContent
                  sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1.5,
                    p: 3,
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: '#1e293b',
                      mb: 1,
                      fontSize: { xs: '1.2rem', sm: '1.35rem' },
                      lineHeight: 1.3,
                    }}
                  >
                    {event.title}
                  </Typography>

                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    color: '#64748b',
                    fontSize: '0.85rem',
                    mb: 2
                  }}>
                    <Box component="span" sx={{ mr: 0.5 }}>
                      {event.date}
                    </Box>
                  </Box>

                  <Typography
                    sx={{
                      color: '#64748b',
                      fontSize: '0.95rem',
                      lineHeight: 1.6,
                      flex: 1,
                      mb: 2
                    }}
                  >
                    {event.description}
                  </Typography>

                  <Box sx={{ 
                    mt: 'auto', 
                    pt: 2, 
                    borderTop: '1px solid #e2e8f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <Typography
                      sx={{
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: '#3b82f6',
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'pointer',
                        '&:hover': {
                          textDecoration: 'underline'
                        }
                      }}
                    >
                      Read More
                      <ChevronRight size={16} style={{ marginLeft: 4 }} />
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>

          {/* Slider Progress Bar */}
          <Box sx={{
            mt: 4,
            mx: 'auto',
            width: '100%',
            height: 6,
            bgcolor: '#e2e8f0',
            borderRadius: 3,
            position: 'relative',
            overflow: 'hidden'
          }}>
            {sliderRef.current && (
              <Box sx={{
                position: 'absolute',
                height: '100%',
                bgcolor: '#3b82f6',
                borderRadius: 3,
                width: `${sliderRef.current.clientWidth / sliderRef.current.scrollWidth * 100}%`,
                left: `${scrollPosition / sliderRef.current.scrollWidth * 100}%`,
                transition: 'left 0.1s ease-out'
              }} />
            )}
          </Box>
        </Box>
      </Container>

      {/* Modals */}
      <HealthPopulationModal open={openHealthPopulation} onClose={() => setOpenHealthPopulation(false)} />
      <Week12 open={openWeek12} onClose={() => setWeek12(false)} />
      <Week11 open={openWeek11} onClose={() => setWeek11(false)} /> 
      <Week10 open={openWeek10} onClose={() => setWeek10(false)} />
      <Week9 open={openWeek9} onClose={() => setWeek9(false)} />
      <Week8 open={openWeek8} onClose={() => setWeek8(false)} />
      <Week7 open={openWeek7} onClose={() => setWeek7(false)} />
      <Week6 open={openWeek6} onClose={() => setWeek6(false)} />
      <Week5 open={openWeek5} onClose={() => setWeek5(false)} />
      <Week4 open={openWeek4} onClose={() => setWeek4(false)} />
      <Week3 open={openWeek3} onClose={() => setWeek3(false)} />
      <Week2 open={openWeek2} onClose={() => setWeek2(false)} />
      <Week1 open={openWeek1} onClose={() => setWeek1(false)} />
    </Box>
  );
}