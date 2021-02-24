import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/',
  headers: {
    Authorization: 'Bearer sXjmbeHSYH4EIu3rfudXHXLpq5cQAab3MF5zJR7Vh1zHr7IOYOXLdCraFiDxjjw0gMZgbZxcGRdPeDMrvbAtqpwwz_Vm3VNv6Ir3-plDLBYWsyqM0qb0G2Nf1nY2YHYx'
  }
})