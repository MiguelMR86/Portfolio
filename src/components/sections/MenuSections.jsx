import { useContext } from "react"
import { Context } from "../../context/Context"
import { BsPerson } from "react-icons/bs"
import { AiOutlineMessage } from "react-icons/ai"
import { TbTemplate } from "react-icons/tb"
import { CgFileDocument } from "react-icons/cg"

const MenuSections = () => {
  const { setCurrentSection, currentSection } = useContext(Context)

  const menuSections = [
    {
      Icon: <BsPerson size={30} />,
      section: "About",
    },
    {
      Icon: <CgFileDocument size={30} />,
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
    const currentSectionStyle =
      currentSection === section
        ? "bg-button-focus text-focus"
        : "bg-settings hover:bg-button-hover"

    return (
      <button
        key={index}
        onClick={() => setCurrentSection(section)}
        className={`${currentSectionStyle} border-2 w-14 xs:w-16 flex flex-col items-center justify-center text-default rounded-lg p-2 transition-all duration-300 ease-in-out cursor-pointer`}
      >
        {Icon}
        {section && <p className="text-xs  md:block">{section}</p>}
      </button>
    )
  })
}

export default MenuSections
