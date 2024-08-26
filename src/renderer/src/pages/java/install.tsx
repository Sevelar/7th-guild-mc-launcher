import { Button, Code, Select, SelectItem, SharedSelection } from '@nextui-org/react'
import { javaInstallations } from '@renderer/components/java-installation/index.consts'
import { useAppPath } from '@renderer/hooks'
import { motion } from 'framer-motion'
import { useState } from 'react'

export const Install = () => {
  const [selectedJava, setSelectedJava] = useState<string | null>(null)

  const appPath = useAppPath()
  if (!appPath) return null

  const onSelectionChange = (keys: SharedSelection) => {
    setSelectedJava(keys.currentKey || null)
  }

  return (
    <motion.div
      className="flex-1 flex flex-col p-10 bg-content1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="text-custom-25 text-gray-500">Installing new Java instance</div>
      <div className="mb-10 text-custom-11 text-gray-300">
        The launcher will store all local portable Java installations in <Code>{appPath}\java</Code>{' '}
        folder.
      </div>
      <Select
        label="Java installation"
        placeholder="Choose desired Java installation"
        className="w-1/2"
        size="lg"
        selectionMode="single"
        onSelectionChange={(keys) => onSelectionChange(keys)}
      >
        {javaInstallations.map(({ id, name, version }) => (
          <SelectItem key={id} textValue={`${name} ${version}`}>
            {name} {version}
          </SelectItem>
        ))}
      </Select>
      <div className="flex gap-4 mt-auto ml-auto w-1/4">
        <Button color="primary" variant="light" className="flex-1">
          Back
        </Button>
        <Button color="primary" className="flex-1" isDisabled={!selectedJava}>
          Install
        </Button>
      </div>
    </motion.div>
  )
}
