
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import Cryptocurrencies from "./components/Cryptocurrencies";
import Homepage from "./components/Homepage";
import News from "./components/News";
import CryptoDetails from "./components/CryptoDetails";
import RootLayout from "./layout/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route exact path="/" element={<Homepage/>}/>
      <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />}/>
      <Route exact path="/crypto/:coinid" element={<CryptoDetails />}/>
      <Route exact path="/news" element={<News/>}/> 
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
