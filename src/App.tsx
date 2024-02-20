import { RouterProvider } from 'react-router-dom';
import { router } from './config/routes';
import { CssBaseline } from '@mui/material';

const App = () => {
  return (
    <div>
      <CssBaseline />
      <RouterProvider router={router} />
    </div>
  );
};
export default App;
