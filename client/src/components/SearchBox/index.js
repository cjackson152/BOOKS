import React from 'react';
import ResultCard from '../GoogleBooks';
const axios = require('axios');

class Searchbox extends React.Component {
    state={
        searchField: null,
        searchResult: []
    };
    handleInputChange = event => {
        const { name, value } = event.tareget;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.setState({
            searchResult: [] 
        });

        axios.get("hhtps://www.googleapis.com/books/v1/volumes?q" + this.state.searchField).then((response) => {
            for (var i = 0; i < response.data.items.length; i++) {
                this.setState({ searchResult: [...this.state.searchResult, response.data.items[i].volumeInfo]});

            }
        });
    };

    render() {
        return (
            <div>
                <div className="container">
                    <form>
                        <div className="form-group">
                            <label for="booksearchbox">Search</label>
                            <input type="text" className="form-control" name="searchField" id="booksearchbox" placeholder="Title" onChange={this.handleInputchange}/>
                        </div>
                        <button id="booksearchsubmit" type="submit" onClick={this.handleFormSubmit} className="btn btn-secondary">Submit</button>
                    </form>
                </div>
                {this.state.searchResult.map(x => <ResultCard
                    authors={x.authors}
                    title={x.title}
                    url={x.previewLink}
                    description={x.description}
                    image={x.imageLinks.thumbnail}
                    />)}
            </div>
        )
    }
}

export default Searchbox