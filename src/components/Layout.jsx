import { Outlet } from "react-router-dom"
import { Box, Container } from "@mui/material"
import BottomNavBar from "./BottomNavBar"

function Layout() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Container component="main" sx={{ flexGrow: 1, py: 3 }}>
        <Outlet />
      </Container>
      <BottomNavBar />
    </Box>
  )
}

export default Layout
