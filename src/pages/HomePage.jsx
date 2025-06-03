import { Box, Typography } from "@mui/material"
import { useEffect, useState, useMemo } from "react"
import { categoryProductService } from "../services/api"
import SearchComponent from "../components/SearchComponent"
import ProductList from "../components/ProductList"

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
        setError('Falha ao buscar produtos')
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

  if (loading) return <Typography>Carregando...</Typography>
  if (error) return <Typography color="error">Falha ao buscar produtos</Typography>

  return (
    <Box sx={{ pb: 10 }}>
      <SearchComponent search={search} onSearchChange={setSearch} />
      <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3, mt: 4 }}>
        Produtos
      </Typography>
      <ProductList products={filteredItems} search={search} />
    </Box>
  )
}

export default HomePage
