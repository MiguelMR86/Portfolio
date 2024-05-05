import { useContext } from "react"
import { Context } from "../../context/Context"
import Button from "../buttons/Button"
import { BsPerson } from "react-icons/bs"
import { AiOutlineMessage } from "react-icons/ai"
import { GrDocumentText } from "react-icons/gr"
import { TbTemplate } from "react-icons/tb"

const MenuSections = () => {
  const { setCurrentSection } = useContext(Context)

  const menuSections = [
    {
      Icon: <BsPerson size={30} />,
      section: "About",
    },
    {
      Icon: <GrDocumentText size={30} />,
      section: "Resume",
    },

    {
      Icon: <TbTemplate size={30} />,
      section: "Projects",
    },
    {
      Icon: <AiOutlineMessage size={30} />,
      section: "Contact",
    },
  ]

  return menuSections.map((item, index) => {
    const { Icon, section } = item
    return (
      <Button
        key={index}
        Icon={Icon}
        section={section}
        onClick={() => setCurrentSection(item.section)}
        className="w-[60px] h-[60px] rounded-lg font-bold"
      />
    )
  })
}

export default MenuSections
