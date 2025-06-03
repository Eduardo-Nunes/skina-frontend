import { Box, Typography, List, ListItem, ListItemText, Checkbox } from '@mui/material';
import { useShoppingList } from '../context/ShoppingListContext';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';

function ListsPage() {
  const { shoppingList, toggleItem } = useShoppingList();

  return (
    <Box sx={{ pb: 10, pt: 2, bgcolor: '#f8f4fa'}}>
      <Typography variant="h4" component="h1" sx={{ mb: 3, ml: 1, fontWeight: 700, color: '#3c3147' }}>
        Lista de Compras
      </Typography>
      {shoppingList.length === 0 ? (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8, color: '#7c65a9' }}>
          <PlaylistAddCheckIcon sx={{ fontSize: 64, mb: 2 }} />
          <Typography variant="h6" sx={{ color: '#3c3147', mb: 1 }}>
            Sua lista está vazia
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Adicione produtos à sua lista para vê-los aqui.
          </Typography>
        </Box>
      ) : (
        <List>
          {shoppingList.map((item) => (
            <ListItem
              key={item.id}
              divider
              disablePadding
              secondaryAction={
                <Checkbox edge="end" checked={item.checked} sx={{ color: '#7c65a9' }} onChange={() => toggleItem(item.id)} />
              }
              sx={{
                transition: 'background 0.2s',
                bgcolor: item.checked ? '#ede7f6' : '#f3f0fa',
                cursor: 'pointer',
                '&:hover': {
                  bgcolor: item.checked ? '#d1c4e9' : '#e0e0e0',
                },
              }}
            >
              <ListItemText
                primary={<Typography sx={{ fontSize: 18 }}>{item.name}</Typography>}
                secondary={<Typography sx={{ fontWeight: 500, color: '#222' }}>{item.price}</Typography>}
                sx={{ ml: 1 }}
                onClick={() => toggleItem(item.id)}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
}

export default ListsPage; 