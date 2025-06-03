import { Box, Typography, Paper, IconButton, List, ListItem, ListItemText, ListItemSecondaryAction, Checkbox, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const mockItems = [
  { id: 1, name: 'Itens personalizados', price: 'R$ 5,28', checked: true },
  { id: 2, name: 'Itens personalizados', price: 'R$ 5,28', checked: true },
  { id: 3, name: 'Itens personalizados', price: 'R$ 5,28', checked: true },
  { id: 4, name: 'Itens personalizados', price: 'R$ 5,28', checked: true },
  { id: 5, name: 'Itens personalizados', price: 'R$ 5,28', checked: true },
];

function ListsPage() {
  return (
    <Box sx={{ pb: 10, pt: 2, bgcolor: '#f8f4fa'}}>
      <List>
        {mockItems.map((item) => (
          <ListItem key={item.id} divider disablePadding secondaryAction={
            <Checkbox edge="end" checked={item.checked} sx={{ color: '#7c65a9' }} />
          }>
            <ListItemText
              primary={<Typography sx={{ fontSize: 18 }}>{item.name}</Typography>}
              secondary={<Typography sx={{ fontWeight: 500, color: '#222' }}>{item.price}</Typography>}
              sx={{ ml: 1 }}
            />
          </ListItem>
        ))}
      </List>
      {/* Card fixo inferior */}
      <Paper elevation={3} sx={{ position: 'fixed', left: 0, right: 0, bottom: 80, mx: 'auto', width: { xs: '90%', sm: 400 }, borderRadius: 3, p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', bgcolor: '#faf7fd' }}>
        <Typography sx={{ color: '#3c3147', fontWeight: 500 }}>
          Adicione algum item à sua lista!
        </Typography>
        <Fab color="secondary" size="small" sx={{ bgcolor: '#7c65a9', color: '#fff', boxShadow: 0, ml: 2 }}>
          <AddIcon />
        </Fab>
      </Paper>
    </Box>
  );
}

export default ListsPage; 