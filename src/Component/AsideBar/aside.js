import "./aside.css";
import React from 'react';
import {  useNavigate } from 'react-router-dom'; 
import '../AsideBar/aside.css'
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
                        <div className='navvalue' onClick={handleHomeClick}><h3>{t('Home')}</h3></div>
                    </div>
                    <div className="sideoption link">
                        <div className='navvalue' onClick={handleAboutClick}><h3>{t('About')}</h3></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SideNavBar