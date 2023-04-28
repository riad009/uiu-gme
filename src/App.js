
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import GameOne from './Componenets/Game/GameOne';
import Home from './Componenets/Home';
import Login from './Componenets/Login';
import Main from './Componenets/Main';
import SplashScreen from './Componenets/SplashScreen';
import TopPlayer from './Componenets/TopPlayer/TopPlayer';
import GameOnelvl2 from './Componenets/Game/GameOnelvl2';
import ResultGameOne from './Componenets/Game/ResultGameOne';

function App() {
  const router=createBrowserRouter(
   
    [
      {
        path: '/',
        element:  <SplashScreen></SplashScreen>
      },
      {
        path: '/login',
        element:  <Login></Login>
      },
      {
        path: '/gameone',
        element: <GameOne></GameOne>
      },
      {
        path: '/topplayer',
        element: <TopPlayer></TopPlayer>
      },
      {
        path: '/gameonelvl2',
        element: <GameOnelvl2></GameOnelvl2>
      },
      {
        path: '/resultgameone',
        element: <ResultGameOne></ResultGameOne>
      },

    

    ]
    
  )
  return (
    <div className="App">
      
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
