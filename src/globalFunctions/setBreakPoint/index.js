function setBreakPoint(breakPoint) {
  let innerWidth;
  switch (breakPoint) {
    case "xxl":
      return (innerWidth = 1400);

    case "xl":
      return (innerWidth = 1200);

    case "lg":
      return (innerWidth = 992);

    case "md":
      return (innerWidth = 768);

    case "sm":
      return (innerWidth = 576);

    case "xs":
      return (innerWidth = 575);

    default:
      return "erro";
  }
}

export default setBreakPoint;
