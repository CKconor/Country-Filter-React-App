import './App.css';
import Countries from './components/Countries'
import styles from './styles'

function App() {
  return (
    <div className="App" style={styles.main}>
      <div style={styles.container}>
        <Countries  />
      </div>
    </div>
  );
}

export default App;
