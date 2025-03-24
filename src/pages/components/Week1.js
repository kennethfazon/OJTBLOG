import React, { useState } from 'react';
import {
  Modal,
  Box,
  Typography,
  Paper,
  IconButton,
  Fade,
  Backdrop,
} from '@mui/material';
import {
  Close as CloseIcon,
  ChildCare as EarlyChildhoodIcon,
  ZoomIn as ZoomInIcon,
  NavigateNext as NextIcon,
  NavigateBefore as PrevIcon,
} from '@mui/icons-material';
import a from './week1/a.png';
import b from './week1/b.jpg';
import c from './week1/c.jpg';
import d from './week1/d.png';


import Image from 'next/image';


const style = {
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '90%',
    height: '90vh',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    borderRadius: 3,
    boxShadow: 24,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    px: 4,
    py: 3,
    borderBottom: '1px solid',
    borderColor: 'divider',
    bgcolor: '#f8f9fa',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 1,
  },
  content: {
    flex: 1,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    overflowY: 'auto',
    bgcolor: '#f8f9fa',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    p: 4,
    borderRadius: 3,
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    '&:hover': {
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.12)',
      transform: 'translateY(-5px)',
    },
    bgcolor: '#ffffff',
  },
  iconWrapper: {
    display: 'flex',
    alignItems: 'center',
    mb: 3,
  },
  icon: {
    fontSize: 42,
    color: 'primary.main',
    mr: 2,
    backgroundColor: 'rgba(25, 118, 210, 0.1)',
    padding: 1,
    borderRadius: '50%',
  },
  titleText: {
    fontWeight: 600,
    color: '#2c3e50',
    lineHeight: 1.3,
  },
  description: {
    mt: 2,
    mb: 4, 
    color: '#5a6a7f',
    lineHeight: 1.6,
    fontSize: '1rem',
    flex: 1,
  },
  imageGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 2,
    '@media (max-width: 1200px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    '@media (max-width: 900px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '@media (max-width: 600px)': {
      gridTemplateColumns: '1fr',
    },
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 0,
    paddingBottom: '65%', // Aspect ratio
    overflow: 'hidden',
    borderRadius: 2,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.03)',
      cursor: 'pointer',
    },
  },
  image: {
    objectFit: 'cover',
  },
  // Styles for the lightbox modal
  lightboxModal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightboxContent: {
    position: 'relative',
    width: '90%',
    height: '90%',
    maxWidth: '1200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
  },
  lightboxImageContainer: {
    position: 'relative',
    width: '100%',
    height: '85%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lightboxImage: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
  },
  lightboxNavigation: {
    position: 'absolute',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    padding: '0 20px',
    boxSizing: 'border-box',
    zIndex: 10,
  },
  lightboxCloseButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: '#fff',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
  },
  navigationButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: '#fff',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
  },
  imageCount: {
    position: 'absolute',
    bottom: '10px',
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '5px 10px',
    borderRadius: '15px',
    fontSize: '0.875rem',
  }
};

const Week1 = ({ open, onClose }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const programs = [
    {
      icon: <EarlyChildhoodIcon sx={style.icon} />,
      title: 'First Week of Training: Encoding with IClinicSys',
      description: "This week, we dive into advanced backend development concepts to take my skills to the next level. Topics include optimizing database performance with MongoDB, mastering authentication and authorization protocols. We’ll explore strategies for scaling backend systems efficiently, improving security with encryption and API protection, and troubleshooting complex server-side issues. Additionally, we’ll explore how to integrate these concepts within the Next.js framework to build robust backend systems for modern web applications. By the end of this week, you’ll have the knowledge to build high-performing, secure, and scalable backend solutions using Next.js and MongoDB.",
      images: [
        a, b, c, d
      ],
    },
  ];

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };
  
  const handleLightboxClose = () => {
    setLightboxOpen(false);
  };
  
  const handlePrevImage = (e) => {
    e.stopPropagation();
    const totalImages = programs[0].images.length;
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? totalImages - 1 : prevIndex - 1));
  };
  
  const handleNextImage = (e) => {
    e.stopPropagation();
    const totalImages = programs[0].images.length;
    setCurrentImageIndex((prevIndex) => (prevIndex === totalImages - 1 ? 0 : prevIndex + 1));
  };
  
  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      handlePrevImage(e);
    } else if (e.key === 'ArrowRight') {
      handleNextImage(e);
    } else if (e.key === 'Escape') {
      handleLightboxClose();
    }
  };

  return (
    <>
     <Modal
            open={open}
            onClose={onClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
            aria-labelledby="week-12-modal-title"
          >
            <Fade in={open}>
              <Box sx={style.modal}>
                <Box sx={style.header}>
                  <Typography variant="h5" component="h2" id="week-12-modal-title" fontWeight="600" sx={{ color: '#1e3a8a' }}>
                    Week 1
                  </Typography>
                  <IconButton
                    onClick={onClose}
                    size="medium"
                    aria-label="close"
                    sx={{
                      color: 'grey.500',
                      '&:hover': { color: 'primary.main', bgcolor: 'rgba(25, 118, 210, 0.1)' },
                      transition: 'all 0.2s',
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>
    
                <Box sx={style.content}>
                  {programs.map((program, index) => (
                    <Paper key={index} sx={style.card} elevation={0}>
                      <Box sx={style.iconWrapper}>
                        {program.icon}
                        <Typography variant="h5" sx={style.titleText}>
                          {program.title}
                        </Typography>
                      </Box>
                      
                      <Typography variant="body1" sx={style.description}>
                        {program.description}
                      </Typography>
    
                      <Box sx={style.imageGrid}>
                        {program.images.map((img, idx) => (
                          <Box 
                            key={idx} 
                            sx={style.imageContainer}
                            onClick={() => handleImageClick(idx)}
                          >
                            <Image
                              src={img}
                              alt={`Final OJT Week Image ${idx + 1}`}
                              layout="fill"
                              className={style.image}
                            />
                            <Box 
                              sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                opacity: 0,
                                transition: 'opacity 0.2s',
                                backgroundColor: 'rgba(0,0,0,0.3)',
                                '&:hover': {
                                  opacity: 1,
                                }
                              }}
                            >
                              <ZoomInIcon sx={{ color: 'white', fontSize: 40 }} />
                            </Box>
                          </Box>
                        ))}
                      </Box>
                    </Paper>
                  ))}
                </Box>
              </Box>
            </Fade>
          </Modal>
    
          {/* Lightbox Modal for Full Image View */}
          <Modal
            open={lightboxOpen}
            onClose={handleLightboxClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 300,
            }}
            sx={style.lightboxModal}
          >
            <Fade in={lightboxOpen}>
              <Box 
                sx={style.lightboxContent}
                tabIndex={0}
                onKeyDown={handleKeyDown}
              >
                <IconButton
                  onClick={handleLightboxClose}
                  sx={style.lightboxCloseButton}
                  aria-label="close lightbox"
                >
                  <CloseIcon />
                </IconButton>
                
                <Box sx={style.lightboxNavigation}>
                  <IconButton
                    onClick={handlePrevImage}
                    sx={style.navigationButton}
                    aria-label="previous image"
                  >
                    <PrevIcon fontSize="large" />
                  </IconButton>
                  <IconButton
                    onClick={handleNextImage}
                    sx={style.navigationButton}
                    aria-label="next image"
                  >
                    <NextIcon fontSize="large" />
                  </IconButton>
                </Box>
                
                <Box sx={style.lightboxImageContainer}>
                  {programs[0].images[currentImageIndex] && (
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                      <Image
                        src={programs[0].images[currentImageIndex]}
                        alt={`Full size image ${currentImageIndex + 1}`}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  )}
                </Box>
                
                <Typography sx={style.imageCount}>
                  {currentImageIndex + 1} / {programs[0].images.length}
                </Typography>
              </Box>
            </Fade>
          </Modal>
    </>
  );
};

export default Week1;