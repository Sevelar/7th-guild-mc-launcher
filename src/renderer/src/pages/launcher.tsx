import { Button } from '@nextui-org/react'
import { AccountSelector } from '@renderer/components/account-selector'
import { VersionSelector } from '@renderer/components/version-selector'
import { motion } from 'framer-motion'
import bgImage from '../../images/minecraft-bg.jpg'

export const Launcher = () => {
  return (
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
