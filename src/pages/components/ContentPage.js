// AnimatedProfile.tsx
import { useEffect, useState, useRef } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Button,
  IconButton,
  useTheme,
  styled,
  keyframes,
  Paper,
  Tooltip,
  Chip,
  useMediaQuery,
  Fade,
} from '@mui/material';
import kenneth from "./kenneth.jpg"
import Image from 'next/image';
import { 
  GitHub, 
  Twitter, 
  LinkedIn,
  Code,
  Brush,
  Storage,
  DevicesOutlined,
} from '@mui/icons-material';

// Enhanced animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(-30px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

// Styled components with enhanced effects
const AnimatedBox = styled(Box)(({ theme }) => ({
  animation: `${fadeIn} 1.2s ease-out`,
}));

const AnimatedTypography = styled(Typography)(({ theme }) => ({
  animation: `${slideIn} 1.2s ease-out`,
}));

const FloatingBox = styled(Box)(({ theme }) => ({
  animation: `${float} 3s ease-in-out infinite`,
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  transition: 'all 0.5s ease-in-out',
  '&:hover': {
    transform: 'scale(1.03) rotate(-2deg)',
  },
}));

const SkillChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.1)',
    boxShadow: theme.shadows[4],
  },
}));

const StatsBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[8],
  },
}));

export default function AnimatedProfile() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mounted, setMounted] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const words = ['Student']
  const [showStats, setShowStats] = useState(false);

  const skills = [
    { label: 'React', icon: <Code /> },
    { label: 'Node.js', icon: <Storage /> },
    { label: 'UI/UX', icon: <Brush /> },
    { label: 'Mobile', icon: <DevicesOutlined /> },
  ];

  const stats = [
    { label: 'Projects', value: '50+' },
    { label: 'Clients', value: '30+' },
    { label: 'Experience', value: '5+ Years' },
  ];

  useEffect(() => {
    setMounted(true);
    const showStatsTimer = setTimeout(() => setShowStats(true), 1000);
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    
    return () => {
      clearInterval(interval);
      clearTimeout(showStatsTimer);
    };
  }, []);

  if (!mounted) return null;

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.primary.light}20 100%)`,
        display: 'flex',
        alignItems: 'center',
        py: { xs: 4, md: 0 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 6,
          }}
        >
          {/* Text Content */}
          <AnimatedBox
            sx={{
              flex: 1,
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <AnimatedTypography
              variant="h6"
              color="primary"
              sx={{ mb: 1, fontWeight: 500 }}
            >
              Welcome to my Weekly Blog
            </AnimatedTypography>
            
            <AnimatedTypography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                letterSpacing: -0.5,
              }}
            >
              I'm Kenneth Fazon
            </AnimatedTypography>

            <FloatingBox sx={{ mb: 3 }}>
              <Typography variant="h4" sx={{ fontWeight: 500 }}>
                BS Information Technology
                <Box
                  component="span"
                  sx={{
                    color: 'primary.main',
                    borderBottom: '3px solid',
                    borderColor: 'primary.main',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -3,
                      left: 0,
                      width: '100%',
                      height: '3px',
                      background: theme.palette.primary.main,
                      animation: `${float} 3s ease-in-out infinite`,
                    },
                  }}
                >
                  
                </Box>
              </Typography>
            </FloatingBox>

            <Typography
              color="text.secondary"
              sx={{ 
                maxWidth: 500, 
                mb: 4,
                fontSize: '1.1rem',
                lineHeight: 1.6,
              }}
            >
             Follow my journey through On-the-Job Training (OJT) as I share the lessons, challenges, and experiences I face each week. Stay tuned for weekly updates on my OJT adventure!
            </Typography>

            

      

           

            {/* Social Links */}
           
          </AnimatedBox>

          {/* Image Section */}
          <FloatingBox>
            <ImageContainer
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Box
                sx={{
                  position: 'absolute',
                  width: { xs: 280, md: 320 },
                  height: { xs: 280, md: 320 },
                  borderRadius: '50%',
                  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  animation: `${rotate} ${isHovered ? '10s' : '20s'} linear infinite`,
                  opacity: 0.8,
                  filter: 'blur(20px)',
                  transform: 'scale(1.1)',
                }}
              />
              <Box
                sx={{
                  position: 'relative',
                  width: { xs: 280, md: 320 },
                  height: { xs: 280, md: 320 },
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '4px solid white',
                  boxShadow: theme.shadows[8],
                  zIndex: 1,
                  transition: 'all 0.3s ease',
                }}
              >
                <Image
                  src={kenneth}
                  alt="John Doe"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
            </ImageContainer>
          </FloatingBox>
        </Box>
      </Container>
    </Box>
  );
}