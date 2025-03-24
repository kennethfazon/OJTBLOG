import { Box, Container, Typography, Paper } from '@mui/material';

export default function AboutSection() {
  return (
    // In your AboutSection component
      <Box id="about" sx={{ 
        background: 'linear-gradient(135deg, #D0F0EC, #E0E0E0, #C9F0E8)', // Use the 'background.paper' color
        overflow: 'hidden',
        scrollMarginTop: '80px', // Add this line
        pt: 2 // Add some padding top if needed
      }} mt={1}>
      {/* Header Section */}
      <Box sx={{ height: { xs: '60px', sm: '70px', md: '80px' } }}>
        <Box
          sx={{
            px: { xs: 2, sm: 3, md: 4 },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
            }}
          >
            About Me
          </Typography>
        </Box>
      </Box>

      {/* Hero Section - Reduced height and adjusted spacing */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          px: { xs: 2, sm: 4, md: 6, lg: 8 },
          py: { xs: 2, sm: 3, md: 4 },
          gap: { xs: 2, sm: 3, md: 4 },
          // Removed minHeight to allow content to be more compact
        }}
      >
        {/* Text Section */}
        <Box
          sx={{
            width: { xs: '100%', md: '45%' },
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '1.4rem', sm: '1.6rem', md: '1.8rem', lg: '2rem' },
              lineHeight: { xs: 1.4, md: 1.5 },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            Motto: "Pangit lang po ako mam/sir, Pero may pangarap po ako sa buhay"
          </Typography>
        </Box>

        {/* Image Section - Reduced height */}
        <Box
          sx={{
            width: { xs: '100%', md: '55%' },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            component="img"
            src="/graphics/dr&nrs.svg"
            alt="Healthcare facility"
            sx={{
              width: {
                xs: '100%',
                sm: 'min(500px, 90%)',
                md: 'min(600px, 90%)',
                lg: 'min(700px, 90%)',
              },
              height: {
                xs: '200px',
                sm: '250px',
                md: '300px',
                lg: '350px',
              },
              objectFit: 'cover',
              borderRadius: { xs: '16px', sm: '20px', md: '24px' },
            }}
          />
        </Box>
      </Box>

      {/* Rural Health Unit Section - Removed margin top */}
      <Box mb={5}>
        <Container maxWidth="lg">
          <Paper
            elevation={3}
            sx={{
              p: { xs: 2, sm: 3, md: 4 },
              borderRadius: { xs: '16px', sm: '20px' },
              maxWidth: '1500px',
              mx: 'auto',
              mt: { xs: 2, sm: 3, md: 4 },
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
              }
            }}
          >
            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' }, 
                lineHeight: 1.8 
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
          </Paper>
        </Container>
      </Box>

     


  
    </Box>
  );
}