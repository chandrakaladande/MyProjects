
import './App.css';
import ScrollIndicator from './Components/ScrollIndicator';

function App() {
  return (
    <div className="App">
       Scroll indicator component
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
    </div>
  );
}

export default App;
