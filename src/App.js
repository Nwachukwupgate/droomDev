import './App.css';
import Layout from './Layout/Layout';
import AllRoutes from './config/routes';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className='App'>
        <div className='min-h-screen'>
          <AllRoutes />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
