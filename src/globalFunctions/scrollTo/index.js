function scrollTo(element, spacingTop = 0, time = 100, behavior = "smooth") {
  setTimeout(() => {
    window.scrollTo({
      top:
        element.current.getBoundingClientRect().top +
        window.scrollY -
        spacingTop,
      behavior: behavior,
    });
  }, time);
}
export default scrollTo;
