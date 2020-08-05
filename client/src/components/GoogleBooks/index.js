import React from 'react';
import './style.css';
import API from '../../utils/API';
class googleBookResult extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="card">
                    <h4 className="card-title">{this.props.title}</h4>
                    <img className="card-img-top" src={this.props.image} alt={this.props.title}/>
                    <div className="card-body">
                            <h5 className="card-title">{this.props.authors}</h5>
                            <p className="card-text">{this.props.description}</p>
                            <a href={this.props.url} target="_blank" className="btn btn-secondary">More?</a>
                            <a href="#" onClick={() => API.createBook(this.props)} className="btn btn-secondary">Save</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default googleBookResult;
