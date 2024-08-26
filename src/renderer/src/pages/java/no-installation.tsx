import { useDisclosure } from '@nextui-org/react'
import { JavaInstallation } from '@renderer/components/java-installation'
import { useGlobalStore } from '@renderer/hooks/index.global-store'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export const NoInstallation = () => {
  const navigate = useNavigate()
  const { setDefaultJavaInstancePath } = useGlobalStore()
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const locateJavaInstallation = async () => {
    const path = await window.api.locateJavaInstallation()
    if (!path) return onOpen()
    setDefaultJavaInstancePath(path)
    navigate('/launcher')
  }

  const installNewJavaInstance = () => {
    navigate('/java/install')
  }

  return (
    <>
      <motion.div
        className="flex-1 flex flex-col justify-center items-center bg-content1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="text-custom-25 text-gray-500">Java installation not found</div>
        <div className="mb-10 text-custom-15 text-gray-300">
          Launcher could not locate a valid Java installation on your computer.
        </div>
        <div className="flex gap-5 px-20">
          <div
            className="flex-1 flex flex-col gap-2 px-2 py-10 rounded-md text-center hover:bg-content2 cursor-pointer"
            onClick={locateJavaInstallation}
          >
            <div className="text-custom-10 text-gray-400">Locate Java installation manually</div>
            <div>
              If you know where your Java is installed, choose this option to select a valid
              directory.
            </div>
            <div>
              If you don&apos;t have Java installed yet, use launcher&apos;s Java installation
              option or install proper Java version on your own.
            </div>
            <a
              href="https://learn.microsoft.com/pl-pl/java/openjdk/download"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              https://learn.microsoft.com/pl-pl/java/openjdk/download
            </a>
          </div>
          <div
            className="flex-1 flex flex-col gap-2 px-2 py-10 rounded-md text-center hover:bg-content2 cursor-pointer"
            onClick={installNewJavaInstance}
          >
            <div className="text-custom-10 text-gray-400">Install Java through the launcher</div>
            <div>
              You can use this launcher to download and configure a Java installation for you.
            </div>
            <div>
              This installation won&apos;t be setup as system&apos;s default Java installation, but
              rather a portable installation only designed for launching Minecraft.
            </div>
          </div>
        </div>
      </motion.div>
      <JavaInstallation.Modal {...{ isOpen, onOpenChange, onAction: locateJavaInstallation }} />
    </>
  )
}
