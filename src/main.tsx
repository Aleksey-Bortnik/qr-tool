import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import { QrCodeGenerator } from "./components/QrCodeGenerator/QrCodeGenerator"
import { QrCodeScanner } from "./components/QrCodeScanner/QrCodeScanner"
import { GenerateHistory } from "./components/History/GenerateHistory"
import { ScannedHistory } from "./components/History/ScannedHistory"

const router = createBrowserRouter([
  {
    path: '/generator',
    element: <QrCodeGenerator />,
  },
  {
    path: '/',
    element: <QrCodeScanner />,
  }, 
  {
    path: '/generate-history', 
    element: <GenerateHistory />,
  },
  {
    path: '/scanned-history',
    element: <ScannedHistory />,
  }
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
