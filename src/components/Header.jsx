import Photo from "../assets/photo.png"
import Button from "./buttons/Button"
import SocialNetworks from "./sections/SocialNetowrks"
import PersonalData from "./sections/PersonalData"
// import CV from "../assets/CV-Miguel-Medina.pdf"
import { MdOutlineFileDownload } from "react-icons/md"
import PropTypes from "prop-types"

function Header(props) {
  // const { handleContactWithGithub, handleContactWithLinkedin } =
  //   useContext(Context);

  return (
    <div
      id="home"
      className="relative w-full bg-primary rounded-xl mt-[100px] p-6 max-w-[350px] max-h-[600px] h-[calc(100vh-240px)]"
    >
      <figure className="flex items-end justify-center bg-[#516F83] rounded-xl w-[150px] h-[150px] absolute -top-24 left-1/2 transform -translate-x-1/2">
        <img src={Photo} alt="Photo" className="h-36" />
      </figure>

      <div
        className="flex flex-col items-center justify-between gap-5 mt-12 text-center overflow-auto"
        style={{
          height: "calc(100% - 2.8rem)",
        }}
      >
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-3xl font-bold text-white">Miguel Medina</h1>
          <div className="bg-button rounded-lg w-fit px-4 py-2">
            <p className="text-white text-xs">Full Stack Developer</p>
          </div>

          <div className="flex items-center w-24 h-10 gap-4">
            {SocialNetworks.map((network, index) => {
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

        <div className="flex flex-col gap-4 text-white bg-settings p-6 rounded-xl w-full">
          {PersonalData.map((data, index) => {
            const { icon, title, content, iconColor } = data

            return (
              <div key={index} className="flex gap-3 items-center">
                <Button
                  Icon={icon}
                  iconSize={20}
                  iconColor={iconColor}
                  className={`w-[40px] h-[40px] rounded-md bg-primary shadow`}
                />
                <div className="text-left flex flex-col">
                  <small className="font-bold text-default/50">{title}</small>
                  <p className=" font-medium">{content}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div>
          <a
            // href={CV}
            download="Miguel Medina CV"
            className="text-button text-mb rounded-lg w-fit p-4 flex items-center gap-2 cursor-pointer bg-button-focus hover:bg-button-focus/80 transition-all duration-300 ease-in-out"
          >
            <MdOutlineFileDownload size={24} />
            <p className="text-white">Descargar CV</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
