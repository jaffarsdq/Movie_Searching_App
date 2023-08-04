import './App.css'
import NavBar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import MainRoutes from './routes/Mainroutes';

function App() {
  console.log(import.meta.env.VITE_API_KEY);
  return (
    <>
      <nav> simple nav</nav>
      <MainRoutes/>
    </>
  )
}

export default App
