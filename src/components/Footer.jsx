import { Box, Container, Typography, Link } from "@mui/material"

function Footer() {
  return (
    <Box component="footer" sx={{ py: 3, bgcolor: "primary.main", color: "white", mt: "auto" }}>
      <Container maxWidth="lg">
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Skina. All rights reserved.
        </Typography>
        <Typography variant="body2" align="center" sx={{ mt: 1 }}>
          <Link color="inherit" href="#" sx={{ mx: 1 }}>
            Privacy Policy
          </Link>
          |
          <Link color="inherit" href="#" sx={{ mx: 1 }}>
            Terms of Service
          </Link>
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
