export const handleScroolSmooth = (id) => {
  window.scrollTo({
    top: document.getElementById(id).offsetTop,
    behavior: "smooth",
  })
}

export const handleContactWithWhatsapp = () => {
  window.open("https://api.whatsapp.com/send?phone=34645957229")
}

export const handleContactWithLinkedin = () => {
  window.open("https://www.linkedin.com/in/miguelmr86/")
}

export const handleContactWithGithub = () => {
  window.open("https://github.com/MiguelMR86")
}

export const scrollSmooth = (value) => {
  window.scrollTo({
    top: value === "top" ? 0 : document.body.scrollHeight,
    behavior: "smooth",
  })
}

export const is_mobile = () => {
  return window.innerWidth <= 768
}
