import logo from './logo.svg';
import './App.css';
import FeatureFlagGlobalState from './context';
import FeatureFlags from './FeatureFlags';




function App() {
  return (
    <div className="App">

      Feature Flag IMplementation
       <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState>
    </div>
  );
}

export default App;
