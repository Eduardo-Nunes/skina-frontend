import { Box, Typography, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchComponent({ search, onSearchChange }) {
  return (
    <Box
      sx={{
        minHeight: 340,
        width: '100%',
        bgcolor: '#faf9fb',
        borderRadius: 3,
        px: 2,
        pt: 3,
        pb: 5,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background SVG com opacidade */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: `url('/src/assets/ic_background.svg') no-repeat right bottom`,
          backgroundSize: { xs: 'cover', md: 'contain' },
          opacity: 0.5,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      {/* Conteúdo acima do background */}
      <Typography
        variant="h3"
        sx={{
          fontFamily: 'Lobster, cursive',
          color: '#6633FF',
          fontWeight: 700,
          mb: 3,
          ml: 1,
          fontSize: { xs: 32, md: 40 },
          position: 'relative',
          zIndex: 1,
        }}
      >
        Skina
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          bgcolor: 'white',
          borderRadius: 999,
          px: 2,
          py: 1,
          boxShadow: 1,
          maxWidth: 320,
          mx: 1,
          mt: 1,
          position: 'relative',
          zIndex: 1,
        }}
      >
        <SearchIcon sx={{ color: '#6633FF', mr: 1 }} />
        <InputBase
          placeholder="Busque aqui"
          sx={{ color: '#6633FF', fontWeight: 500, width: '100%' }}
          inputProps={{ 'aria-label': 'busque aqui' }}
          value={search}
          onChange={e => onSearchChange(e.target.value)}
        />
      </Box>
    </Box>
  );
}

export default SearchComponent; 