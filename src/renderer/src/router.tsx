import { createHashRouter } from 'react-router-dom'
import * as Pages from './pages'

export const router = createHashRouter([
  {
    path: '/',
    element: <Pages.Main />,
    children: [
      {
        index: true,
        element: <Pages.Startup />
      },
      {
        path: 'launcher',
        element: <Pages.Launcher />
      },
      {
        path: 'java/no-installation',
        element: <Pages.Java.NoInstallation />
      },
      {
        path: 'java/install',
        element: <Pages.Java.Install />
      }
    ]
  }
])
