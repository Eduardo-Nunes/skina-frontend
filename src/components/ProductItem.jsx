import { Card, CardContent, CardMedia, Typography } from "@mui/material";

function ProductItem({ item }) {
  return (
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
  );
}

export default ProductItem; 