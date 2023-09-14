import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import './i18n';
import Home from './Component/Main/main';
import AboutPage from './Component/AbouPage';


function App() {
  return (
    <I18nextProvider i18n={i18next}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </I18nextProvider>
  );
}

export default App;
