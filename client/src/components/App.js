import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Header from './Header';
import Landing from './pages/Landing';
import About from './pages/About';
import Shop from './shop/Shop';
import Chatbot from './chatbot/Chatbot';

//updated syntax based on latest reactrouter doc
const App = () => (
    <div>
       <BrowserRouter>
           <div>
               <Header />
               <Routes>
               <Route path="/" element={<Landing />} />  
               <Route path="/about" element={<About />} />
               <Route path="/shop" element={<Shop />} />
               </Routes>
               <Chatbot />
           </div>
       </BrowserRouter>
    </div>
)

export default App;