import config from './config';

function App() {
  return (
    <div>
      <h1>Welcome to the {config.environment.toUpperCase()} Environment</h1>
      {config.featureFlag && <p>Experimental features are enabled!</p>}
    </div>
  );
}

export default App;
