import logo from './logo.svg';
import './App.css';
import StarRating from './StarRating';

function App() {
  return (
    <div>
      <h1>Rate this product</h1>
      <StarRating totalStars={5} />
    </div>
  );
}

export default App;
