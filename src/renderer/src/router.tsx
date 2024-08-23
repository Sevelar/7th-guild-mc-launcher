import { createHashRouter } from 'react-router-dom'
import { Index } from './pages'

export const router = createHashRouter([
  {
    path: '/',
    element: <Index />
  }
])
