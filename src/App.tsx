import AppRoutes from './router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import '/node_modules/primeflex/primeflex.css';
import { PrimeReactProvider } from 'primereact/api';

  const App = () => {

    const value = {
      ripple: true,
    };

  return (
    <PrimeReactProvider value={value}>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </PrimeReactProvider>
  );
}

export default App;
