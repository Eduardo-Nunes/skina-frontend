import { Box, Typography, Card, CardContent, CardMedia, Grid, Button, Container, InputBase } from "@mui/material"
import { useEffect, useState, useMemo } from "react"
import { categoryProductService } from "../services/api"
import SearchIcon from "@mui/icons-material/Search"

function HomePage() {
  const [featuredItems, setFeaturedItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState("")

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await categoryProductService.getAll()
        setFeaturedItems(data)
        setLoading(false)
      } catch (err) {
        setError('Failed to fetch products')
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  const filteredItems = useMemo(() => {
    if (!search) return featuredItems
    return featuredItems.filter(item =>
      item.produto.toLowerCase().includes(search.toLowerCase()) ||
      item.categoria.toLowerCase().includes(search.toLowerCase())
    )
  }, [search, featuredItems])

  if (loading) return <Typography>Loading...</Typography>
  if (error) return <Typography color="error">{error}</Typography>

  return (
    <Box sx={{ pb: 10 }}>
      {/* Welcome Section */}
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
            onChange={e => setSearch(e.target.value)}
          />
        </Box>
      </Box>

      {/* Featured Products */}
      <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3, mt: 4 }}>
        Featured Products
      </Typography>
      <Grid container spacing={3}>
        {filteredItems.length === 0 && search ? (
          <Grid item xs={12} sx={{ textAlign: 'center', mt: 6 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 6 }}>
              <SearchIcon sx={{ fontSize: 60, color: '#ccc', mb: 2 }} />
              <Typography variant="h6" color="text.secondary">
                Nenhum produto encontrado
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Tente buscar por outro nome ou categoria.
              </Typography>
            </Box>
          </Grid>
        ) : (
          filteredItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <CardMedia 
                  component="img" 
                  height="140" 
                  image={`https://source.unsplash.com/random/300x200?${item.produto}`} 
                  alt={item.produto} 
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h3">
                    {item.produto}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Category: {item.categoria}
                  </Typography>
                  <Button size="small" color="primary" sx={{ mt: 2 }}>
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  )
}

export default HomePage
