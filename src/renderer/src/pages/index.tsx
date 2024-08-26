import { Outlet } from 'react-router-dom'

export const Index = () => {
  return (
    <main className="flex flex-col h-screen text-foreground bg-background">
      <Outlet />
    </main>
  )
}
