import { createHashRouter } from 'react-router-dom'
import { Index } from './pages'
import { Main } from './pages/main'
import { SetJavaInstallation } from './pages/set-java-installation'

export const router = createHashRouter([
  {
    path: '/',
    element: <Index />,
    children: [
      {
        index: true,
        element: <Main />
      },
      {
        path: 'set-java-installation',
        element: <SetJavaInstallation />
      }
    ]
  }
])
