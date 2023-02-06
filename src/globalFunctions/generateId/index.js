let arrayWithAllIds = [];
let randomId;
let counterCallings = 0;

// gera um id único
function generateId() {
  randomId = generateRandomString();
  counterCallings++;

  if (!arrayWithAllIds.includes(randomId)) {
    arrayWithAllIds.push(randomId);
  } else {
    generateId();
  }

  return randomId;
}

//gera um array de ids únicos
export function createRandomIds(itemArray) {
  return itemArray.map((inputItem, index) => {
    return generateId();
  });
}

//gera uma string random não única
function generateRandomString() {
  return `rd${Math.random().toString(36).substring(2)}`;
}

export default generateId;
