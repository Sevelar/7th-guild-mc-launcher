import { Card, CardBody } from '@nextui-org/react'
import { MdSettings } from 'react-icons/md'
import accountSkin from '../../../images/account-skin.png'

export const AccountSelector = () => {
  return (
    <Card className="flex-1">
      <CardBody>
        <div className="flex gap-custom-10">
          <img src={accountSkin} className=" h-custom-25" />
          <div className="flex flex-col flex-1">
            <div className="text-custom-6 text-gray-600">Logged in to Microsoft account.</div>
            <div className="">TheSeviest</div>
          </div>
          <div className="self-end flex">
            <MdSettings className="text-custom-12" />
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
