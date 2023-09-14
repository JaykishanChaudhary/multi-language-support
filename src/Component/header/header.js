import "./header.css";

import React from 'react';
import { useTranslation } from 'react-i18next'; 


const Header = () => {
 
    const { i18n } = useTranslation(); // Initialize the useTranslation hook

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
                {/* <div className='userid'>USER ID: {id}</div> */}
                <div className='dropdown'>
                
                </div>
                    <select id="language" style={{ width: '15rem', height: '2rem' }} onChange={handleLanguageChange}>
                        <option>Select Language</option>
                        <option value="en">English</option>
                        <option value="hn">Hindi</option>
                        <option value="kn">Kannada</option>
          {/* Add more languages as needed */}
        </select>
            </div>
            {/* <div className="headerbtmline"></div> */}
        </>
    )
}
export default Header