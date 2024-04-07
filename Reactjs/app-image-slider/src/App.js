
import './App.css';
import ImageSlider from './Components/ImageSlider';


function App() {
  return (
    <div className="App">
    Image slider component
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
    </div>
  );
}

export default App;
