import MenuSections from "./sections/MenuSections"

function Menu(props) {
  return (
    <div className="fixed bottom-0 left-0 w-full h-[132px] p-5 flex items-center justify-center">
      <div className="xs:w-[350px] bg-primary flex gap-4 justify-between p-4 items-center rounded-xl backdrop-blur-md text-white shadow-md shadow-default/30">
        <MenuSections />
      </div>
    </div>
  )
}

export default Menu
