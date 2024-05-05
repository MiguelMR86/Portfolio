import { HiDevicePhoneMobile } from "react-icons/hi2"
import { IoMailOpenOutline } from "react-icons/io5"
import { FaLocationDot } from "react-icons/fa6"
import { LiaBirthdayCakeSolid } from "react-icons/lia"
import Button from "../buttons/Button"

function PersonalDataInfo() {
  const personalData = [
    {
      title: "Teléfono",
      content: "+34 645 95 72 29",
      icon: <HiDevicePhoneMobile size={20} color="#FFA2B3" />,
    },
    {
      title: "Email",
      content: "migueldevinfo@gmail.com",
      icon: <IoMailOpenOutline size={20} color="#4BE4C8" />,
    },
    {
      title: "Localización",
      content: "Las Palmas, España",
      icon: <FaLocationDot size={20} color="#E44B68" />,
    },
    {
      title: "Cumpleaños",
      content: "10 de Noviembre ( 2002 )",
      icon: <LiaBirthdayCakeSolid size={20} color="#7F4AA6" />,
    },
  ]

  return personalData.map((data, index) => {
    const { icon, title, content } = data

    return (
      <div key={index} className="flex gap-3 items-center">
        <Button
          Icon={icon}
          className={`w-[40px] h-[40px] rounded-md bg-primary shadow`}
        />
        <div className="text-left flex flex-col w-4/5">
          <small className="font-bold text-default/50">{title}</small>
          <p className="font-medium truncate" title={content}>
            {content}
          </p>
        </div>
      </div>
    )
  })
}
export default PersonalDataInfo
