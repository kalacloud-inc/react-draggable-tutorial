import './App.css';
import Draggable from 'react-draggable'; // The default


const Box = () => {
  return <div className="box">
    <div className='drag-handler'>拖这里可以</div>
    <img src="https://placekitten.com/400/350" alt="cat1" />
  </div >
}

const DraggableBox = () => {

  return <Draggable handle='.drag-handler'>
    <div>
      <Box />
    </div>
  </Draggable>

}

function App() {
  return (
    <div className="App">
      <DraggableBox></DraggableBox>
      <DraggableBox></DraggableBox>
    </div>
  );
}

export default App;
