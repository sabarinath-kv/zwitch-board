import { getFirebaseToken, handleForegroundMessageRecieve } from './firebase';

function App() {
  getFirebaseToken()
  handleForegroundMessageRecieve();
  return (
    <div className="App">
      <p>Zwitch Board!! </p>
    </div>
  );
}

export default App;
