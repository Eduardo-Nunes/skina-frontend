import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import ListIcon from "@mui/icons-material/List";

function BottomNavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = useState(() => {
    if (location.pathname.startsWith("/lists")) return 1;
    return 0;
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) navigate("/");
    if (newValue === 1) navigate("/lists");
  };

  return (
    <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0, borderRadius: "20px 20px 0 0", boxShadow: 3, bgcolor: "#f5f0f7" }} elevation={3}>
      <BottomNavigation
        value={value}
        onChange={handleChange}
        showLabels
        sx={{ bgcolor: "#f5f0f7", borderRadius: "20px 20px 0 0" }}
      >
        <BottomNavigationAction
          label="Busca"
          icon={<SearchIcon />}
          sx={{ color: value === 0 ? "#7c65a9" : "#3c3147", fontWeight: value === 0 ? 700 : 400, borderRadius: 3, bgcolor: value === 0 ? "#b6a3d6" : "transparent", mx: 1 }}
        />
        <BottomNavigationAction
          label="Listas"
          icon={<ListIcon />}
          sx={{ color: value === 1 ? "#7c65a9" : "#3c3147", fontWeight: value === 1 ? 700 : 400, borderRadius: 3, bgcolor: value === 1 ? "#b6a3d6" : "transparent", mx: 1 }}
        />
      </BottomNavigation>
    </Paper>
  );
}

export default BottomNavBar; 