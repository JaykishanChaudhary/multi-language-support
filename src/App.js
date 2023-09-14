// import logo from './logo.svg';
import './App.css';
// import Content from './Component/Content/Content';
// import NavBar from './Component/Content/NavBar'
import Home from './Component/Main/main';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from './Component/About/About';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import './i18n';


function App() {
  return (
    <I18nextProvider i18n={i18next}>
    <div className="App">
      <BrowserRouter>
     {/* <Content/> */}
     {/* <NavBar/> */}
     <Routes>
     <Route path="/" element={<Home />}></Route>
     <Route path="/about" element={<About />}></Route>
     </Routes>
     </BrowserRouter>
    </div>
     </I18nextProvider>
  );
}

export default App;
