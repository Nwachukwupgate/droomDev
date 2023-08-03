import './App.css';
import AllRoutes from './config/routes';
import { ThemeProvider } from './context/ThemeContext';


function App() {
  return (
    <ThemeProvider>
        <div >
          <AllRoutes />
        </div>
    </ThemeProvider>
  );
}

export default App;
