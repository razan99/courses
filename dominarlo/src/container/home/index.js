import React from "react";
import Navbar from '../../components/home/Navbar'
import Header from'../../components/home/Header'
import About from '../../components/home/AboutUs'
import Tool from '../../components/home/Tool'
import Footer from '../../components/home/Footer'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './main.css'

export default class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Header />
                <About />
                <Tool />
                <Footer />
            </React.Fragment>
        )
    }
}
