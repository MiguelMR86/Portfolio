import React, { useContext } from "react"
import { Context } from "../context/Context"
import photo from "../assets/photo.png"
import socialNetworks from "../components/sections/socialNetowrks"
import personalData from "../components/sections/personalData"
import CV from "../assets/CV-Miguel-Medina.pdf"
import Button from "../components/buttons/Button"
import ScrollToButton from "../components/buttons/ScrollToButton"
import { MdOutlineFileDownload } from "react-icons/md"
import { IoIosArrowDown } from "react-icons/io"

function PersonalData() {
  const {
    handleContactWithGithub,
    handleContactWithLinkedin,
    scrollToTopSmoothById,
  } = useContext(Context)

  const width = "w-[300px] xs:w-[350px]"
  const height = "h-[calc(100vh-240px)] max-h-[600px]"

  return (
    <div
      className={`relative bg-primary rounded-xl mt-[100px] md:mt-0 p-6 ${width} ${height}`}
    >
      <figure
        id="about-header"
        className="flex items-end justify-center bg-[#516F83] rounded-xl w-[150px] h-[150px] absolute -top-24 left-1/2 transform -translate-x-1/2"
      >
        <img src={photo} alt="Photo" className="h-36" />
      </figure>

      <div
        className="flex flex-col items-center justify-between gap-5 mt-12 text-center overflow-auto"
        style={{
          height: "calc(100% - 2.8rem)",
        }}
      >
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-3xl font-bold">Miguel Medina</h2>
          <div className="bg-button rounded-lg w-fit px-4 py-2">
            <p className="text-xs">Full Stack Developer</p>
          </div>

          <div className="flex items-center w-24 h-10 gap-4">
            {socialNetworks.map((network, index) => {
              const { icon, link } = network

              return (
                <Button
                  key={index}
                  Icon={icon}
                  iconSize={20}
                  className="w-[40px] h-[40px] rounded-md"
                  onClick={() => window.open(link, "_blank")}
                />
              )
            })}
          </div>
        </div>

        <div className="flex flex-col gap-4  bg-settings p-6 rounded-xl w-full">
          {personalData.map((data, index) => {
            const { icon, title, content, iconColor } = data

            return (
              <div key={index} className="flex gap-3 items-center">
                <Button
                  Icon={icon}
                  iconSize={20}
                  iconColor={iconColor}
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
          })}
        </div>

        <div>
          <a
            href={CV}
            download="Miguel Medina CV"
            className="text-button text-mb rounded-lg w-fit p-3 flex items-center gap-2 cursor-pointer bg-button-focus hover:bg-button-focus/80 transition-all duration-300 ease-in-out"
          >
            <MdOutlineFileDownload size={24} />
            <p className="text-white">Descargar CV</p>
          </a>
        </div>

        <ScrollToButton
          className="absolute bottom-[1.4em] right-5 p-3 bg-white rounded-lg shadow-default/30 shadow-md md:hidden"
          Icon={() => <IoIosArrowDown size={24} />}
          onClick={() => scrollToTopSmoothById("about-main")}
        />
      </div>
    </div>
  )
}

export default PersonalData
