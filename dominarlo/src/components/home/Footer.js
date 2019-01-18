import React from 'react'

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-lg-8">
                            <div className="site-info">
                                <h2><span>domaiarlo</span></h2>
                                <p>help student learn and instructor teach</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="contact">
                                <h2>Contact Us</h2>
                                <ul className="list-unstyled">
                                    <li>Phone: 012-129345678</li>
                                    <li>Email: <a href="domainarlo@domaiarlo.com?subject=Contact">domainarodomainarlo</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}