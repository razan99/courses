import React from "react";
import { Link } from 'react-router-dom'
export default class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="header">
                    <div className="overlay">
                        <div className="container">
                            <div className="row centering-vh">
                                <div className="col-md-6">
                                    <h1 className="uppercase text-center-xs">dom<span>inarlo</span></h1>
                                    <p className="lead uppercase text-center-xs">We help indecators teach and students learn</p>
                                    
                                    <button>Learn more about our tool</button>
                                </div>
                                <div className="col-md-6">
                                    <form className="center-block">
                                        <input className="btn btn-block" Type="submit" value="Login" />
                                        <input className="btn btn-block" Type="submit" value="StudentRegestration" />
                                        <input className="btn btn-block" Type="submit" value="InstructorRegistration"/>  
                                        <Link to="/instructor-registration"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}