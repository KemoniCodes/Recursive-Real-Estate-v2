import React, { Component } from 'react'

class SearchBar extends Component {
    render() {
        return (
            <div className="search-bar">
                <form method="GET">
                    <input type="text" name="results" className="search" placeholder="Search by city, county, or postal code" />
                    <button type="submit"><i class="fas fa-search"></i></button>
                </form>
            </div>
        )
    }
}

export default SearchBar