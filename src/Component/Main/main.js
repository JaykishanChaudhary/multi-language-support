// import Form from "./form"
import SideNavBar from "../AsideBar/aside";
import Header from "../header/header";
import Form from "../form/form";



const Home = () => {

    return (
        <>
            <div className="maincontainer">
                <div className="sidenav">
                    <SideNavBar />
                </div>
                <div className="subpart">
                    <div className="headerpart">
                        <Header />
                    </div>
                    <div className="propertylstpart"> <Form /></div>
                   
                </div>

            </div>
        </>
    )
}

export default Home;