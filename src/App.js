import React, { useEffect, useState } from "react";
import cloneDeep from 'lodash.clonedeep';
import { useEvent } from "./utils/util";
import Board from './components/Board';
import ControlPanel from './components/ControlPanel';
import addNewRandomNumber from './utils/addNewRandomNumber';
import swipeDown from './event/swipeDown';
import swipeLeft from './event/swipeLeft';
import swipeRight from './event/swipeRight';
import swipeUp from './event/swipeUp';

function App() {

  //adding key values
  const UP_ARROW = 38;
  const DOWN_ARROW = 40;
  const LEFT_ARROW = 37;
  const RIGHT_ARROW = 39;

  const [data, setData] = useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ])

  useEffect(() => {
    intialize();
  }, [])

  //Initialize
  const intialize = () => {
    let newGrid = cloneDeep(data);
    addNewRandomNumber(newGrid);
    addNewRandomNumber(newGrid);
    setData(newGrid);
  };

  //to call swipes according to event
  const handleKeyDown = (event) => {
    console.log(event.keyCode);

    switch (event.keyCode) {
      case UP_ARROW:
        let upData = swipeUp({ data });
        setData(upData);
        break;

      case DOWN_ARROW:
        let downData = swipeDown({ data });
        setData(downData);
        break;

      case LEFT_ARROW:
        let leftData = swipeLeft({ data });
        setData(leftData);
        break;

      case RIGHT_ARROW:
        let rightData = swipeRight({ data });
        setData(rightData);
        break;

      default:
        break;
    }
  };
  useEvent("keydown", handleKeyDown);
  return (
    <div class="container" >
      <Board
        data={data}
      />
      <ControlPanel />
    </div>
  );
}
export default App;

