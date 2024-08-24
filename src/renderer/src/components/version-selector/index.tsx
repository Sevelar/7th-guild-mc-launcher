import { Select, SelectItem } from '@nextui-org/react'
import icon from '../../../images/icon.png'

const mockup = [
  {
    id: 'modpack-bare',
    label: '7th Guild Modpack: Bare',
    description: 'Only required mods for the server.'
  },
  {
    id: 'modpack-full',
    label: '7th Guild Modpack: Full',
    description: 'Full package including required and client-side mods.'
  },
  {
    id: 'modpack-customized',
    label: '7th Guild Modpack: Customized',
    description: 'Barebone installation with customization.'
  }
]

export const VersionSelector = () => {
  return (
    <div className="flex-1 flex gap-custom-5 items-center">
      <img src={icon} className="h-custom-25" />
      <Select
        label="Modpack version"
        size="sm"
        defaultSelectedKeys={['modpack-bare']}
        classNames={{
          popoverContent: '!w-custom-200'
        }}
      >
        {mockup.map(({ id, label, description }) => (
          <SelectItem key={id} textValue={label} className="w-custom-200">
            <div className="flex gap-custom-3 items-center">
              <img src={icon} className="h-custom-20" />
              <div className="flex flex-col">
                <span>{label}</span>
                <span className="text-custom-6 text-gray-400">{description}</span>
              </div>
            </div>
          </SelectItem>
        ))}
      </Select>
    </div>
  )
}
