export const handleScroolSmooth = (id) => {
  window.scrollTo({
    top: document.getElementById(id).offsetTop,
    behavior: "smooth",
  });
};

export const handleContactWithWhatsapp = () => {
  window.open('https://api.whatsapp.com/send?phone=34645957229')
}