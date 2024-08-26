import { Outlet } from 'react-router-dom'

export const Main = () => {
  return (
    <main className="flex flex-col h-screen text-foreground bg-background">
      <Outlet />
    </main>
  )
}
