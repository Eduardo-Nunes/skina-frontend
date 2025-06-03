import { useState } from 'react';
import { Box, Typography, Paper, IconButton, List, ListItem, ListItemText, ListItemSecondaryAction, Checkbox, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const initialItems = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: 'Itens personalizados',
  price: 'R$ 5,28',
  checked: true,
}));

function ListsPage() {
  const [items, setItems] = useState(initialItems);

  const handleToggle = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <Box sx={{ pb: 10, pt: 2, bgcolor: '#f8f4fa'}}>
      <Typography variant="h4" component="h1" sx={{ mb: 3, ml: 1, fontWeight: 700, color: '#3c3147' }}>
        Lista de Compras
      </Typography>
      <List>
        {items.map((item) => (
          <ListItem
            key={item.id}
            divider
            disablePadding
            secondaryAction={
              <Checkbox edge="end" checked={item.checked} sx={{ color: '#7c65a9' }} onChange={() => handleToggle(item.id)} />
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
              onClick={() => handleToggle(item.id)}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default ListsPage; 