import './App.css';
import { router } from './Routs/Routes/Routes';
import { RouterProvider } from 'react-router';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
