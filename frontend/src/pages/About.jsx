import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Button,
  Card,
  CardMedia,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: "#fff8f0", py: 10 }}>
      <Container maxWidth="lg">
        {/* ===== Header ===== */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", color: "#e74c3c", mb: 2 }}
          >
            🍔 About Our Restaurant
          </Typography>
          <Typography
            sx={{ color: "text.secondary", maxWidth: "700px", mx: "auto" }}
          >
            We bring you the finest flavors crafted with love. From sizzling grills
            to fresh salads and desserts, our chefs prepare every dish with care,
            passion, and tradition.
          </Typography>
        </Box>

        {/* ===== Restaurant Story Section ===== */}
        <Grid
          container
          spacing={6}
          alignItems="center"
          sx={{
            mb: 12,
            bgcolor: "linear-gradient(135deg, #fff5eb 0%, #ffe0cc 100%)",
            borderRadius: "20px",
            p: 5,
            boxShadow: 3,
          }}
        >
          {/* Left Image */}
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: "16px", boxShadow: 4 }}>
              <CardMedia
                component="img"
                height="420"
                image="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=900&q=80"
                alt="Restaurant"
              />
            </Card>
          </Grid>

          {/* Right Content */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", mb: 3, color: "#2c3e50" }}
            >
              🏢 Our Story
            </Typography>
            <Typography sx={{ color: "text.secondary", mb: 3 }}>
              Since 2010, <b>Royal Fare</b> has been redefining dining with a blend
              of authenticity and innovation. Every plate we serve is a journey of
              flavors made to delight your senses.
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#e67e22",
                "&:hover": { bgcolor: "#d35400" },
                fontWeight: "bold",
                px: 4,
                py: 1.5,
                borderRadius: "30px",
              }}
              onClick={() => navigate("/services")}
            >
              Order Now
            </Button>
          </Grid>
        </Grid>

        {/* ===== Chef Section ===== */}
        <Grid container spacing={6} alignItems="center" sx={{ mb: 12 }}>
          {/* Left Content */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", mb: 3, color: "#2c3e50" }}
            >
              👨‍🍳 Meet Our Chef
            </Typography>
            <Typography sx={{ color: "text.secondary", mb: 3 }}>
              <b>Chef Antonio</b> brings over 20 years of culinary excellence.
              Combining traditional recipes with modern creativity, he crafts dishes
              that are both unique and unforgettable.
            </Typography>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#e67e22",
                color: "#e67e22",
                fontWeight: "bold",
                px: 4,
                py: 1.2,
                borderRadius: "30px",
                "&:hover": { bgcolor: "#ffe6d5" },
              }}
              onClick={() => navigate("/services")}
            >
              Explore Menu
            </Button>
          </Grid>

          {/* Right Image */}
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: "16px", boxShadow: 4 }}>
              <CardMedia
                component="img"
                height="420"
                image="https://images.unsplash.com/photo-1548943487-a2e4e43b4853?auto=format&fit=crop&w=900&q=80"
                alt="Chef"
              />
            </Card>
          </Grid>
        </Grid>

        {/* ===== Delivery Info Section ===== */}
        <Grid
          container
          spacing={6}
          alignItems="center"
          sx={{
            bgcolor: "linear-gradient(135deg, #ffe8d9 0%, #ffd5b5 100%)",
            borderRadius: "20px",
            p: 6,
            boxShadow: 3,
          }}
        >
          {/* Left Image */}
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: "16px", boxShadow: 2 }}>
              <CardMedia
                component="img"
                height="420"
                image="https://images.unsplash.com/photo-1600891964335-6d5f2e91d1c5?auto=format&fit=crop&w=900&q=80"
                alt="Delivery"
              />
            </Card>
          </Grid>

          {/* Right Content */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", mb: 3, color: "#2c3e50" }}
            >
              🚚 Delivery & Contact
            </Typography>
            <Typography sx={{ mb: 2, color: "text.secondary" }}>
              📍 <b>Address:</b> 123 Foodie Street, Gourmet City
            </Typography>
            <Typography sx={{ mb: 2, color: "text.secondary" }}>
              📞 <b>Phone:</b> +91 98765 43210
            </Typography>
            <Typography sx={{ mb: 2, color: "text.secondary" }}>
              ⏰ <b>Timing:</b> Mon - Sun | 10:00 AM - 11:00 PM
            </Typography>
            <Typography sx={{ mb: 3, color: "text.secondary" }}>
              🍴 <b>Specialties:</b> Burgers, Salads, Platters, Desserts, Pasta
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#e74c3c",
                "&:hover": { bgcolor: "#c0392b" },
                fontWeight: "bold",
                px: 5,
                py: 1.5,
                borderRadius: "30px",
              }}
              onClick={() => navigate("/services")}
            >
              Order Now
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default About;
