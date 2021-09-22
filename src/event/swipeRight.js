import addNewRandomNumber from '../utils/addNewRandomNumber';
import cloneDeep from 'lodash.clonedeep';

const swipeRight = ({ data }) => {

  let old_grid_data = data;
  let grid_data = cloneDeep(data);

  for (let counter = 3; counter >= 0; counter--) {
    let grid_data_new = grid_data[counter];
    let selected_index = grid_data_new.length - 1;
    let neigh_index = selected_index - 1;
    while (selected_index > 0) {
      if (neigh_index === -1) {
        neigh_index = selected_index - 1;
        selected_index--;
        continue;
      }

      if (grid_data_new[selected_index] === 0 && grid_data_new[neigh_index] === 0) {
        neigh_index--;
      } else if (grid_data_new[selected_index] === 0 && grid_data_new[neigh_index] !== 0) {
        grid_data_new[selected_index] = grid_data_new[neigh_index];
        grid_data_new[neigh_index] = 0;
        neigh_index--;
      } else if (grid_data_new[selected_index] !== 0 && grid_data_new[neigh_index] === 0) {
        neigh_index--;
      } else if (grid_data_new[selected_index] !== 0 && grid_data_new[neigh_index] !== 0) {
        if (grid_data_new[selected_index] === grid_data_new[neigh_index]) {
          grid_data_new[selected_index] = grid_data_new[selected_index] + grid_data_new[neigh_index];
          grid_data_new[neigh_index] = 0;
          neigh_index = selected_index - 1;
          selected_index--;
        } else {
          selected_index--;
          neigh_index = selected_index - 1;
        }
      }
    }
  }
  if (JSON.stringify(grid_data) !== JSON.stringify(old_grid_data)) {
    addNewRandomNumber(grid_data);
  }
  return (grid_data);
};
export default swipeRight;