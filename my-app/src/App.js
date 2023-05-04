
import './App.css';

import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import { Code } from '@chakra-ui/react';
import { Route, BrowserRouter as Router ,Routes} from 'react-router-dom';


import ProductTile  from './components/productTile';
import ChatGPT  from './components/ChatGPT/ChatGPT';
import NavBar from './components/NavBar/navbar';
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}
const theme = extendTheme({ colors })


function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <>
    <NavBar/>

     <Routes>
      
        <Route  path="/products" element={<ProductTile/>} />
        <Route  path="/chat" element={<ChatGPT/>} />

        </Routes>

    </>
  );
}

export default App;
