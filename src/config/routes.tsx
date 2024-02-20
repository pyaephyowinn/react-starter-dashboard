import DashboardPage from '@/pages/dashboard/DashboardPage';
import RootLayout from '@/layouts/RootLayout';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/d',
        children: [
          {
            index: true,
            element: <DashboardPage />,
          },

          {
            path: 'products',
            element: <div>Products List</div>,
          },
          {
            path: 'products/new',
            element: <div>Products Create</div>,
          },
          {
            path: 'products/:id',
            element: <div>Product Detail</div>,
          },
          {
            path: 'products/:id/edit',
            element: <div>Products Edit</div>,
          },
        ],
      },
    ],
  },
]);
