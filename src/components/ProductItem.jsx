import { Card, CardContent, CardMedia, Typography, Avatar, Box, IconButton, Divider, Stack } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';

function getInitials(name) {
  if (!name) return '';
  return name.split(' ').map(word => word[0]).join('').slice(0, 2).toUpperCase();
}

function ProductItem({ item }) {

  const observacoes = item.description
    ? item.description.split('\n').filter(Boolean)
    : [];

  return (
    <Card sx={{ borderRadius: 3, boxShadow: 2, overflow: 'hidden', display: 'flex', flexDirection: 'column', minHeight: 420 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', px: 2, pt: 2, pb: 1 }}>
        <Avatar sx={{ bgcolor: '#8e7cc3', mr: 2 }}>{getInitials(item.produto)}</Avatar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="subtitle1" fontWeight={700} noWrap>
            {item.produto}
          </Typography>
        </Box>
      </Box>
      {/* Imagem */}
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CardMedia
          component="img"
          image={item.image_url || `https://source.unsplash.com/random/300x200?${item.produto}`}
          alt={item.produto}
          sx={{ objectFit: 'cover', height: 240, }}
        />
      </Box>
      {/* Informações extras */}
      <Box sx={{ bgcolor: '#ede7f6', px: 2, py: 1.5 }}>
        <Typography variant="body2" color="text.secondary">
          {item.categoria}
        </Typography>
      </Box>
      <Divider />
      {/* Observações */}
      <CardContent sx={{ bgcolor: '#f6f4fa', flexGrow: 1 }}>
        <Stack component="ul" spacing={0.5} sx={{ pl: 2, m: 0 }}>
          {observacoes.map((obs, idx) => (
            <Typography key={idx} component="li" variant="body2" color="text.secondary">
              {obs}
            </Typography>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ProductItem; 