import React from 'react';
import opgg_icon from '../../images/opgg_icon.svg';
import '../../css/SearchBar.css';

const SearchBar = () => {
    return (
    <div className="search-bar-box">
        <div className="search-box">
            <input placeholder="소환사명, 소환사명, ..." className="search-input" />
            <button className="search-button">
                <img src={opgg_icon} alt="opgg 아이콘" />
            </button>
        </div>
    </div>
    )
} 

export default SearchBar;