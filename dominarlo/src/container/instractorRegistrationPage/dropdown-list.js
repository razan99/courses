import React from "react";
// import "./style.css";

export default class DropdownList extends React.Component {
    onChange = (event) => {
        var title = event.target.value;
        this.props.onChange(title);
    }
    render() {
        return (
            <div className="form-group">
                <label htmlFor="select" className="label-title">{this.props.title}</label>
                <select value={this.props.value} onChange={this.onChange} className="form-control">
                    {this.props.options.map(option => {
                        return <option value={option} key={option} >{option}</option>
                    })}
                </select>
            </div>

        )
    }
}


