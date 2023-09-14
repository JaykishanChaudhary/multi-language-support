import "./aside.css";
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import '../AsideBar/aside.css'
import { useTranslation } from 'react-i18next';

const SideNavBar = () => {
    const navigate = useNavigate(); 
    const { t } = useTranslation(); 

    const handleAboutClick = () => {
      navigate('/about');
    };

    return (
        <>
            <div className='sidebarconatiner'>
                <div className="logooption">
                    <header>{t('Multi Language Support')}</header>
                </div>
                <div className='sidesubcontainer' >
                    <div className="sideoption property">
                        <Link to="/"><div className='navvalue'>{t('Home')}</div></Link>
                    </div>
                    <div className="sideoption">
                   <div className='navvalue' onClick={handleAboutClick}>{t('About')}</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SideNavBar