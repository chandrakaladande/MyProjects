import logo from './logo.svg';
import './App.css';
import TreeView from './Components';
import menus from './Components/data';


function App() {
  return (
    <div className="App">
   Tree view component/menu UI component / recursive navigation menu
     <TreeView menus={menus} />

    </div>
  );
}

export default App;
