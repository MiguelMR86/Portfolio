import { useContext } from "react"
import { Context } from "../../context/Context"
import Button from "../buttons/Button"
import { BsPerson } from "react-icons/bs"
import { AiOutlineFolderOpen, AiOutlineMessage } from "react-icons/ai"
import { GrDocumentText } from "react-icons/gr"
import { IoBriefcaseOutline } from "react-icons/io5"

import React from "react"
const { setCurrentSection } = useContext(Context)

const MenuSections = () => {
  const menuSections = [
    {
      Icon: BsPerson,
      section: "About",
    },
    {
      Icon: GrDocumentText,
      section: "Resume",
    },
    // {
    //   Icon: AiOutlineFolderOpen,
    //   section: "Projects",
    // },
    {
      Icon: IoBriefcaseOutline,
      section: "Work",
    },
    {
      Icon: AiOutlineMessage,
      section: "Contact",
    },
  ]
  return menuSections.map((item, index) => (
    <Button
      key={index}
      Icon={item.Icon}
      section={item.section}
      onClick={() => setCurrentSection(item.section)}
      className="w-[60px] h-[60px]  rounded-lg"
    />
  ))
}

export default MenuSections
