import "./aside.css";
import React from 'react';
import {  useNavigate } from 'react-router-dom'; 
import './aside.css'
import { useTranslation } from 'react-i18next';

const SideNavBar = () => {
    const navigate = useNavigate(); 
    const { t } = useTranslation(); 

    const handleAboutClick = () => {
        navigate('/about');
      };
      const handleHomeClick = () => {
        navigate('/');
      };
    
    return (
        <>
            <div className='sidebarconatiner'>
                <div className="logooption">
                    <h2>{t('Multi Language Support')}</h2>
                </div>
                <div className='sidesubcontainer' >
                    <div className="sideoption link">
                        <h3>{t('home')}</h3>
                        <div className='navvalue' onClick={handleHomeClick}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.218 19l-1.782-1.75 5.25-5.25-5.25-5.25 1.782-1.75 6.968 7-6.968 7z"/></svg></div>
                    </div>
                    <div className="sideoption link">
                        <h3>{t('about')}</h3>
                        <div className='navvalue' onClick={handleAboutClick}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.218 19l-1.782-1.75 5.25-5.25-5.25-5.25 1.782-1.75 6.968 7-6.968 7z"/></svg></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SideNavBar