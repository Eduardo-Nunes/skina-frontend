import { Box, Typography, Card, CardContent, CardMedia, Grid, Button, Container } from "@mui/material"

function HomePage() {
  // Sample data for featured items
  const featuredItems = [
    {
      id: 1,
      title: "Product One",
      description: "This is a description for product one. It showcases the features and benefits.",
      image: "https://source.unsplash.com/random/300x200?product=1",
    },
    {
      id: 2,
      title: "Product Two",
      description: "This is a description for product two. It showcases the features and benefits.",
      image: "https://source.unsplash.com/random/300x200?product=2",
    },
    {
      id: 3,
      title: "Product Three",
      description: "This is a description for product three. It showcases the features and benefits.",
      image: "https://source.unsplash.com/random/300x200?product=3",
    },
  ]

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: "primary.light",
          color: "primary.contrastText",
          py: { xs: 6, md: 12 },
          mb: 4,
          borderRadius: 2,
          textAlign: "center",
        }}
      >
        <Container>
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome to Skina
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Your one-stop shop for amazing products
          </Typography>
          <Button variant="contained" color="secondary" size="large" sx={{ mt: 2 }}>
            Explore Now
          </Button>
        </Container>
      </Box>

      {/* Featured Products */}
      <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3 }}>
        Featured Products
      </Typography>
      <Grid container spacing={3}>
        {featuredItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <CardMedia component="img" height="140" image={item.image} alt={item.title} />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h3">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
                <Button size="small" color="primary" sx={{ mt: 2 }}>
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Call to Action */}
      <Box sx={{ textAlign: "center", mt: 6 }}>
        <Typography variant="h5" gutterBottom>
          Ready to get started?
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Sign Up Now
        </Button>
      </Box>
    </Box>
  )
}

export default HomePage
