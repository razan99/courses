import React from "react";

export default class ToolLeft extends React.Component {
    render() {
        return (
            <div className="standard-picture">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img className="img-responsive center-block sub-image" src={this.props.img.src} alt="" />
                        </div>
                        <div className="col-md-6">
                            <div className="list-info">
                                <h3 className="sublist-head head-border">{this.props.title}</h3>
                                {this.props.subTitle.map((subTitle) => {
                                    return <p className="sublist-desc">{subTitle}</p>
                                })}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
