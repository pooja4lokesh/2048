
const addNewRandomNumber = (newGrid) => {
  let added = false;
  let gridFull = false;
  while (!added) {
    if (gridFull) {
      break;
    }
    let rand1 = Math.floor(Math.random() * 4);
    let rand2 = Math.floor(Math.random() * 4);
    if (newGrid[rand1][rand2] === 0) {
      newGrid[rand1][rand2] = Math.random() > 0.5 ? 2 : 4;
      added++;
    }
  }
};
export default addNewRandomNumber;