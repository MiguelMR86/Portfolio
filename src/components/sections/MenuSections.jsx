import { BsPerson } from "react-icons/bs"
import { AiOutlineFolderOpen, AiOutlineMessage } from "react-icons/ai"
import { GrDocumentText } from "react-icons/gr"
import { IoBriefcaseOutline } from "react-icons/io5"

const MenuSections = [
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

export default MenuSections
