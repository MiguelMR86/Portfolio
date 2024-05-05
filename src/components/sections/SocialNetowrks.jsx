import React from "react"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import Button from "../buttons/Button"

function SocialNetworks() {
  const socialNetworks = [
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/miguelmr86/",
    },
    {
      icon: FaGithub,
      link: "https://github.com/MiguelMR86",
    },
  ]

  return socialNetworks.map((social_network, index) => {
    const { icon, link } = social_network

    return (
      <Button
        key={index}
        Icon={icon}
        iconSize={20}
        className="w-[40px] h-[40px] rounded-md"
        onClick={() => window.open(link, "_blank")}
      />
    )
  })
}

export default SocialNetworks
