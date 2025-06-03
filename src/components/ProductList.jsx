import { Grid, Typography, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ProductItem from "./ProductItem";

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
            <ProductItem item={item} />
          </Grid>
        ))
      )}
    </Grid>
  );
}

export default ProductList; 