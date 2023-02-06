// SORTEIO DE ARRAY
function randomArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

export default randomArray;
