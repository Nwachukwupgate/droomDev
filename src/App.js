import './App.css';
import AllRoutes from './config/routes';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className='App'>
        <div className=''>
          <AllRoutes />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
