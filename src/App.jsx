import './App.css'
import MainRoutes from './routes/Mainroutes';
import Navbar from './components/Navbar/Navbar';

function App() {
  console.log(import.meta.env.VITE_API_KEY);
  return (
    <>
      <Navbar/>
      <MainRoutes/>
    </>
  )
}

export default App
