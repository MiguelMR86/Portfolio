export const handleScroolSmooth = (id) => {
  window.scrollTo({
    top: document.getElementById(id).offsetTop,
    behavior: "smooth",
  });
};
