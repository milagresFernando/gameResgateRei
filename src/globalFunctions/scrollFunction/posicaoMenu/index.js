function posicaoMenu(data) {
  let prevScroll = data.prev ? data.prev : 0;
  let arrMenu = data.menu;
  let bottomPage = data.bottom ? data.bottom : false;

  let scrollDirection = true;

  let altPosition = window.pageYOffset;
  let numMaior = 0;
  if (arrMenu != null) {  
    arrMenu.forEach((obj) => {
      if (Number(altPosition) >= obj.menu) { numMaior = obj.index; }
    });
    if (bottomPage) { numMaior = (arrMenu.length - 1); }
  }

  if (prevScroll <= altPosition) { scrollDirection = false; } else { scrollDirection = true; }

  return ({ menuPosition: numMaior, prevScroll: altPosition, scrollDirection : scrollDirection })
}

export default posicaoMenu;
