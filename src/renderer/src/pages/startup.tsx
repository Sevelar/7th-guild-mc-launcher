import { Progress } from '@nextui-org/react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import _7thLogo from '../../images/7th-guild-logo.png'

export const Startup = () => {
  const navigate = useNavigate()

  const detectJavaInstallation = async () => {
    const isJavaInstalled = await window.api.detectJavaInstallation()
    if (!false) return navigate('/java/no-installation')
    return navigate('/launcher')
  }

  useEffect(() => {
    setTimeout(() => {
      detectJavaInstallation()
    }, 1_000)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center gap-custom-60 h-full w-full bg-gradient-to-tr from-background to-danger-100">
      <img src={_7thLogo} className="h-custom-120" />
      <Progress
        color="danger"
        aria-label="Loading..."
        isIndeterminate
        classNames={{ track: 'mx-40 h-custom-5' }}
      />
    </div>
  )
}
