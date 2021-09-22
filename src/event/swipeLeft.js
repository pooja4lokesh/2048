import addNewRandomNumber from '../utils/addNewRandomNumber';
import cloneDeep from 'lodash.clonedeep';

const swipeLeft = ({ data }) => {
  let old_grid_data = data;
  let grid_data = cloneDeep(data);

  for (let counter = 0; counter < 4; counter++) {
    let grid_data_new = grid_data[counter];
    let selected_index = 0;
    let neigh_index = 1;
    while (selected_index < 4) {
      if (neigh_index === 4) {
        neigh_index = selected_index + 1;
        selected_index++;
        continue;
      }
      
      if (grid_data_new[selected_index] === 0 && grid_data_new[neigh_index] === 0) {
        neigh_index++;
      } else if (grid_data_new[selected_index] === 0 && grid_data_new[neigh_index] !== 0) {
        grid_data_new[selected_index] = grid_data_new[neigh_index];
        grid_data_new[neigh_index] = 0;
        neigh_index++;
      } else if (grid_data_new[selected_index] !== 0 && grid_data_new[neigh_index] === 0) {
        neigh_index++;
      } else if (grid_data_new[selected_index] !== 0 && grid_data_new[neigh_index] !== 0) {
        if (grid_data_new[selected_index] === grid_data_new[neigh_index]) {
          grid_data_new[selected_index] = grid_data_new[selected_index] + grid_data_new[neigh_index];
          grid_data_new[neigh_index] = 0;
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
export default swipeLeft;