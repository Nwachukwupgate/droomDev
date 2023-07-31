import './App.css';
import AllRoutes from './config/routes';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div>
        <div className='bg-bkg text-content'>
          <AllRoutes />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
