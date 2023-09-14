import "./Headers.css";
import React from 'react';
import { useTranslation } from 'react-i18next'; 


const Header = () => {
 
    const { i18n } = useTranslation(); 

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };
  
    const handleLanguageChange = (e) => {
      const selectedLanguage = e.target.value;
      changeLanguage(selectedLanguage);
    };
    return (
        <>
            <div className='headercontainer'>
                        <select id="language" style={{ width: '15rem', height: '2rem' }} onChange={handleLanguageChange}>
                            <option>Select Language</option>
                            <option value="en">English</option>
                            <option value="hn">Hindi</option>
                            <option value="kn">Kannada</option>
                        </select>
                    </div>
        </>
    )
}
export default Header