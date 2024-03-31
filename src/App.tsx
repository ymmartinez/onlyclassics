import AppRoutes from './router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import '/node_modules/primeflex/primeflex.css';
import { Toast } from 'primereact/toast';
import { useRef } from 'react';

const App = () => {
  const toast = useRef<Toast>(null);

  return (
    <BrowserRouter>
    <Toast ref={toast} />
      <AppRoutes/>
    </BrowserRouter>
  );
}

export default App;
