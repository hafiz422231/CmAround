import React , {useState} from 'react'
import './headingTop.css';
import { FaSearch } from 'react-icons/fa';

const HeadingTop = (props) => {

    const [searchText,setSearchText] = useState('');

    const getSearchValue = (e) => {
        setSearchText(e.target.value);
        props.callMe(false);
    }

    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            props.callMe(searchText);
        }
    }

    return (
        <div className="row" id="topName-heading">
            <div className="col-12 col-sm-12 col-md-6 col-xl-12 col-lg-12 text-center text-white">
                <p className="mb-0">
                    {props.heading === 'RecentlyAdded' ? 'Most Viewed Articles' 
                    : props.heading === 'MostHelpful' ? 'Resolution Rate Articles' 
                    : props.heading === 'MostViewed' ? 'Latest Articles' : 'Most Relevant Articles' }
                    </p>
            </div>
            {
                props.showField &&
                    <div className="col-12 col-sm-12 col-md-6 col-xl-4 col-lg-4">
                        <input 
                         value={searchText}
                         type="text" 
                         placeholder="Search"
                         onChange={(e) => getSearchValue(e)}
                         onKeyPressCapture={(e) => handleKeyPress(e)} 
                         className="search-input" /> <FaSearch className="s-icon" />
                    </div>
            }
        </div>
    )
}

export default HeadingTop;
