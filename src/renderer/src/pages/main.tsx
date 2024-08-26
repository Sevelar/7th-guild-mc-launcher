import { Button, Progress } from '@nextui-org/react'
import { AccountSelector } from '@renderer/components/account-selector'
import { VersionSelector } from '@renderer/components/version-selector'
import { useGlobalStore } from '@renderer/hooks/index.global-store'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import _7thLogo from '../../images/7th-guild-logo.png'
import bgImage from '../../images/minecraft-bg.jpg'

export const Main = () => {
  const { defaultJavaInstancePath } = useGlobalStore()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)

  const detectJavaInstallation = async () => {
    if (defaultJavaInstancePath) return setIsLoading(false)

    // const isJavaInstalled = await window.api.detectJavaInstallation()
    const isJavaInstalled = false
    if (!isJavaInstalled) return navigate('/set-java-installation')
    else return setIsLoading(false)
  }

  useEffect(() => {
    setTimeout(() => {
      detectJavaInstallation()
    }, 1_000)
  }, [])

  return isLoading ? (
    <div className="flex flex-col items-center justify-center gap-custom-60 h-full w-full bg-gradient-to-tr from-background to-danger-100">
      <img src={_7thLogo} className="h-custom-120" />
      <Progress
        color="danger"
        aria-label="Loading..."
        isIndeterminate
        classNames={{ track: 'mx-40 h-custom-5' }}
      />
    </div>
  ) : (
    <motion.div
      className="flex flex-col h-screen text-foreground bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="flex-1 overflow-hidden">
        <img src={bgImage} className="brightness-75" />
      </div>
      <div className="flex justify-between items-center gap-custom-50 p-custom-10 bg-content1">
        <VersionSelector />
        <Button color="danger" size="lg" variant="shadow" className="flex-1">
          Play
        </Button>
        <AccountSelector />
      </div>
    </motion.div>
  )
}
