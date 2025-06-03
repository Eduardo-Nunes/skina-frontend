import { Card, CardContent, CardMedia, Typography, Avatar, Box, Button, Divider, Stack, Snackbar } from "@mui/material";
import { useShoppingList } from "../context/ShoppingListContext";
import { useState } from "react";

function getInitials(name) {
  if (!name) return '';
  return name.split(' ').map(word => word[0]).join('').slice(0, 2).toUpperCase();
}

function ProductItem({ item }) {
  const { shoppingList, addItem, removeItem } = useShoppingList();
  const [toast, setToast] = useState({ open: false, message: '' });
  const observacoes = item.description
    ? item.description.split('\n').filter(Boolean)
    : [];

  const isInList = shoppingList.some((i) => i.id === item.id);

  const handleAdd = () => {
    addItem({
      id: item.id,
      name: item.produto,
      price: item.preco || '',
    });
    setToast({ open: true, message: 'Produto adicionado à lista!' });
  };

  const handleRemove = () => {
    removeItem(item.id);
    setToast({ open: true, message: 'Produto removido da lista!' });
  };

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
        <Button
          variant={isInList ? "outlined" : "contained"}
          color={isInList ? "error" : "secondary"}
          fullWidth
          sx={{ mt: 2, bgcolor: isInList ? undefined : '#7c65a9', color: isInList ? undefined : '#fff', fontWeight: 700 }}
          onClick={isInList ? handleRemove : handleAdd}
        >
          {isInList ? 'Remover da lista' : 'Adicionar à lista'}
        </Button>
        <Snackbar
          open={toast.open}
          autoHideDuration={2000}
          onClose={() => setToast({ open: false, message: '' })}
          message={toast.message}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        />
      </CardContent>
    </Card>
  );
}

export default ProductItem; 