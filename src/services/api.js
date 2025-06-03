const API_BASE_URL = 'http://127.0.0.1:8000/api';

export const categoryProductService = {
  getAll: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/categoria_produto/`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching category products:', error);
      throw error;
    }
  }
}; 