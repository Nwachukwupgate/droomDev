import './App.css';
import Layout from './Layout/Layout';
import AllRoutes from './config/routes';

function App() {
  return (
    <div className='App'>
      <div className='min-h-screen'>
        <AllRoutes />
      </div>
    </div>
  );
}

export default App;
