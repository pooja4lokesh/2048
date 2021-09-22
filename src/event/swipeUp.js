import addNewRandomNumber from '../utils/addNewRandomNumber';
import cloneDeep from 'lodash.clonedeep';

const swipeUp = ({ data }) => {

  let grid_data = cloneDeep(data);
  let old_grid_data = JSON.parse(JSON.stringify(data));

  for (let counter = 0; counter < 4; counter++) {
    let selected_index = 0;
    let neigh_index = 1;
    while (selected_index < 4) {
      if (neigh_index === 4) {
        neigh_index = selected_index + 1;
        selected_index++;
        continue;
      }
      if (grid_data[selected_index][counter] === 0 && grid_data[neigh_index][counter] === 0) {
        neigh_index++;
      } else if (grid_data[selected_index][counter] === 0 && grid_data[neigh_index][counter] !== 0) {
        grid_data[selected_index][counter] = grid_data[neigh_index][counter];
        grid_data[neigh_index][counter] = 0;
        neigh_index++;
      } else if (grid_data[selected_index][counter] !== 0 && grid_data[neigh_index][counter] === 0) {
        neigh_index++;
      } else if (grid_data[selected_index][counter] !== 0 && grid_data[neigh_index][counter] !== 0) {
        if (grid_data[selected_index][counter] === grid_data[neigh_index][counter]) {
          grid_data[selected_index][counter] = grid_data[selected_index][counter] + grid_data[neigh_index][counter];
          grid_data[neigh_index][counter] = 0;
          neigh_index = selected_index + 1;
          selected_index++;
        } else {
          selected_index++;
          neigh_index = selected_index + 1;
        }
      }
    }
  }
  if (JSON.stringify(old_grid_data) !== JSON.stringify(grid_data)) {
    addNewRandomNumber(grid_data);
  }
  return (grid_data);
};
export default swipeUp;
