import { Box, Typography, Button } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"

function NotFoundPage() {
  return (
    <Box sx={{ textAlign: "center", py: 8 }}>
      <Typography variant="h1" component="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h4" component="h2" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="body1" paragraph>
        The page you are looking for doesn't exist or has been moved.
      </Typography>
      <Button variant="contained" color="primary" component={RouterLink} to="/">
        Go to Home
      </Button>
    </Box>
  )
}

export default NotFoundPage
