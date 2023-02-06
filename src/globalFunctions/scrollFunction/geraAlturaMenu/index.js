function geraAlturaMenu(pagesData, tipoChamada) {
  let menuList = Array.apply(null, document.querySelectorAll("section"));
  if (pagesData.curso.menu != '') { menuList = Array.apply(null, document.querySelectorAll(pagesData.curso.menu)); }

  if (tipoChamada) {
    return menuList;
  } else {
    let menuListTop = menuList.map((menuItem, id) => {
      return { menu: menuItem.offsetTop, index: id };
    })

    return menuListTop;
  }
}

export default geraAlturaMenu;
