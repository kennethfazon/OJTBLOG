import React from 'react';
import { Box, Container, Grid, Typography, Paper, Divider, Card, CardContent, Link } from '@mui/material';
import { Phone, Mail, Clock, MapPin, Facebook, ArrowUpRight } from 'lucide-react';

// Reusable contact card component
const ContactCard = ({ icon: Icon, title, children }) => (
  <Card
     
    elevation={0}
    sx={{
      height: '100%',
      p: 2,
      background: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(10px)',
      borderRadius: 3,
      border: '1px solid rgba(0, 0, 0, 0.08)',
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }
    }}
  >
    <CardContent sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Paper
          elevation={0}
          sx={{
            p: 1,
            borderRadius: 2,
            background: 'rgba(37, 99, 235, 0.1)',
            mr: 1.5
          }}
        >
          <Icon size={20} color="#2563eb" />
        </Paper>
        <Typography variant="h6" fontSize="1rem" fontWeight="600">
          {title}
        </Typography>
      </Box>
      {children}
    </CardContent>
  </Card>
);

export default function Footer() {
  return (
    <Box
    id="contact"
      component="footer"
      sx={{
        pt: 8,
        pb: 4,
        background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)'
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
              fontWeight: 800,
              background: 'linear-gradient(45deg, #1a365d 30%, #2563eb 90%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              mb: 2
            }}
          >
            Contact
          </Typography>
          <Typography 
            variant="subtitle1"
            color="text.secondary"
            sx={{ maxWidth: '500px', mx: 'auto', mb: 4 }}
          >
            We're here to help with any questions about our services, appointments, or general inquiries
          </Typography>
        </Box>

        {/* Contact Cards Grid */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          <Grid item xs={12} sm={6} md={3}>
            <ContactCard icon={MapPin} title="Visit Us">
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Gubat, Sorsogon
                Philippines, 4710
              </Typography>
              <Link
                href="https://www.google.com/maps/place/Paco+Elementary+School/@12.9779991,124.1266325,17z/data=!4m14!1m7!3m6!1s0x33a0ed183ec3d913:0x7f989461f3caf4b2!2sPaco+Elementary+School!8m2!3d12.9779939!4d124.1292074!16s%2Fg%2F11f13tz3dh!3m5!1s0x33a0ed183ec3d913:0x7f989461f3caf4b2!8m2!3d12.9779939!4d124.1292074!16s%2Fg%2F11f13tz3dh?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoJLDEwMjExNjM5SAFQAw%3D%3D"
                target="_blank"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  color: 'primary.main',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  '&:hover': { textDecoration: 'underline' }
                }}
              >
                Get directions <ArrowUpRight size={14} style={{ marginLeft: '4px' }} />
              </Link>
            </ContactCard>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <ContactCard icon={Phone} title="Contact">
              <Box sx={{ mb: 1 }}>
                <Typography variant="body2" color="text.secondary">TNT:</Typography>
                <Typography variant="body2" fontWeight="500">09105303302</Typography>
              </Box>
              <Box sx={{ mb: 1 }}>
                <Typography variant="body2" color="text.secondary">Smart:</Typography>
                <Typography variant="body2" fontWeight="500">0949-643-2073</Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary">Email:</Typography>
                <Typography variant="body2" fontWeight="500">kennethfazon14@gmail.com</Typography>
              </Box>
            </ContactCard>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <ContactCard icon={Clock} title="Hours">
              <Box sx={{ mb: 1 }}>
                <Typography variant="body2" color="text.secondary">Monday - Friday:</Typography>
                <Typography variant="body2" fontWeight="500">8:00 AM - 5:00 PM</Typography>
              </Box>
            
            </ContactCard>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <ContactCard icon={Facebook} title="Social Media">
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Follow us on Facebook for updates, health tips, and announcements
              </Typography>
              <Link
                href="https://www.facebook.com/kenneth.fazon.52"
                target="_blank"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  color: 'primary.main',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  '&:hover': { textDecoration: 'underline' }
                }}
              >
                Visit our Facebook page <ArrowUpRight size={14} style={{ marginLeft: '4px' }} />
              </Link>
            </ContactCard>
          </Grid>
        </Grid>

        

        {/* Footer Bottom */}
        <Divider sx={{ mb: 3 }} />
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Kenneth Fazon Pogi.
        </Typography>
      </Container>
    </Box>
  );
}