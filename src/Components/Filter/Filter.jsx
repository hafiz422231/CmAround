import React , {useState} from 'react'
import {FaSearch} from 'react-icons/fa';
import './Filter.css';
import Dropdowns from '../dropdowns/dropdowns';


const TopFilter = (props) => {

    const [searchvalue , setSearchValue] = useState('');

    var dropdown = {
        
        btn: {
            background: 'white',
            color: '#154468',
            padding: '6px 14px 5px 14px',
            borderRadius: '0px',
            borderTopLeftRadius: '50px',
            borderBottomLeftRadius: '50px',
            fontFamily: 'Helvetica',
            fontSize: '15px',
            borderColor: 'grey'
        },
        title: {
            color: '#728599',
            marginRight: '7px',
        }
    }

    const getVal = (e) => {
        props.filterSelectedValue(e);
    }

    const onchangeResult = (e) => {
        if(e.key === 'Enter'){
            props.serachFieldValue(searchvalue);
        }
    }

    return (
        <div className="search-bar">
            
        <div className="input-group mb-4">
            <div className="input-group-prepend">
                
            
                <Dropdowns 
                 style={dropdown.btn} 
                 titleStyle={dropdown.title}
                 value={(e) => getVal(e)}
                 />

            </div>
            
            
            
            <input type="text" 
             className="form-control search-field" 
             placeholder="How we may help you"
             aria-label="Text input with segmented dropdown button"
             onChange={(e) => setSearchValue(e.target.value)}
             onKeyPressCapture={(e) => onchangeResult(e)}
             />

        </div>  
    </div>
    )
}

export default TopFilter
