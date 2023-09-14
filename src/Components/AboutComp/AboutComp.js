import './AboutComp.css'
import { useTranslation } from 'react-i18next';

function About(){
    const { t } = useTranslation();
    return <>
        <div className='about-container'>
            <h1>{t('ABOUT')}</h1>
                <p>{t('he 1910 Cuba hurricane was said to be one of the worst tropical cyclones that has ever hit Cuba. The storm formed in the southern Caribbean Sea on October 9, 1910. It grew stronger as it moved northwest. It then made landfall on the western end of Cuba. The storm made a loop over open water, and then began moving towards the United States. After crossing Florida, the storm moved near the rest of the southeastern United States and passed out to sea.Because of the storms loop some reports said it was actually two hurricanes. In Cuba the storm was one of the worst disasters in the islands history. There was bad damage and thousands of people lost their homes. In Florida, the storm also caused damage and caused flooding in some areas. It is not known exactly how much damage the storm caused. However, losses in Havana, Cuba were over $1 million. At least 100 people died in Cuba alone.')}</p>
            </div>
    </>
}

export default About