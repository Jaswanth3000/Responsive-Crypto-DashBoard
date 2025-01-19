
import CryptoDataProvider from './Dashboard/CryptoDataProvider/CryptoDataProvider';
import Dashboard from './Dashboard/Components/DashBoard';

function App() {
  return (
    <CryptoDataProvider>
      <Dashboard />
    </CryptoDataProvider>
  );
}

export default App;
