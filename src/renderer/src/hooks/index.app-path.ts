import { useEffect, useState } from 'react'

export const useAppPath = () => {
  const [appPath, setAppPath] = useState<string | null>(null)

  const getAppPath = async () => {
    const path = await window.api.getAppPath()
    setAppPath(path)
  }

  useEffect(() => {
    getAppPath()
  }, [])

  return appPath
}
