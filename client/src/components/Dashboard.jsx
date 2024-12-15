// Sample.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import LoginForm from './LoginForm';
import "../Dashboard.css"

const Dashboard = () => {
    return (
        <div>
            <div className="main">
                <div className="navbar">
                    <div className="icon">
                        <h2 className="logo">Event Hub</h2>
                    </div>
    
                    <div className="menu">
                        <ul>
                            <li><Link to="/home">HOME</Link></li>
                            <li><Link to="/about">ABOUT</Link></li>
                            <li><Link to="/contact">CONTACT</Link></li>
                        </ul>
                    </div>
    
                    {/* <div className="search">
                        <input className="srch" type="search" name="" placeholder="Type To text" />
                        <button className="btn">Search</button>
                    </div> */}
                </div> 
                <Outlet />
                <div className="content">
                    <h1>"Explore Events & Clubs <br /> Where Connections and <br />Community Thrive" </h1>
                    <p className="par">
                        "Events and clubs are at the heart of student life, offering endless opportunities to connect,<br />
                        share interests, and build a vibrant community. Whether you're passionate about academics,<br />
                        arts, sports, or cultural experiences, there's something for everyone. Our platform brings together<br />
                        all upcoming campus events and club activities, making it easy for you to discover new opportunities,<br />
                        meet like-minded people, and actively engage in student life. Join clubs, attend events, and make<br />
                        the most of your college experience by staying informed and involved!"
                    </p>
    
                    {/* <button className="cn"><Link to="/">JOIN US</Link></button> */}
    
                    <div className="form">
                        <h2>Login Here</h2>
                        <LoginForm/>
                        <p className="link">Don't have an account<br/>
                        <Link to="/signup">Sign up </Link>here</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
