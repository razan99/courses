import React from "react";

export default class ToolRight extends React.Component {
    render() {
        return (
            <div className="sublist">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="list-info">
                                <h3 className="standard-head head-border">{this.props.title}</h3>
                                {this.props.subTitle.map((subTitle) => {
                                    return <p className="standard-desc" key={subTitle}>{subTitle}</p>
                                })}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img className="img-responsive center-block standard-image" src={this.props.img.src} alt="" />
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
