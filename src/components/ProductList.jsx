import { Grid, Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function ProductList({ products, search }) {
  return (
    <Grid container spacing={3}>
      {products.length === 0 && search ? (
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
        products.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <CardMedia 
                component="img" 
                height="140" 
                image={item.image_url || `https://source.unsplash.com/random/300x200?${item.produto}`} 
                alt={item.produto} 
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h3">
                  {item.produto}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Categoria: {item.categoria}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
  );
}

export default ProductList; 