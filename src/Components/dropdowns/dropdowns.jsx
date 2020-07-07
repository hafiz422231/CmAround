import React , {useState} from 'react'
import { Dropdown } from 'react-bootstrap';


const Dropdowns = (props) => {
        
    const [dropdownValue, setDropdownValue] = useState('Latest');
    
    const RecentlyAded = () => {
        props.value('RecentlyAdded');
        setDropdownValue('Latest');
    }

    const MostHelpful = () => {
        props.value('MostHelpful');
        setDropdownValue('Resolution Rate');
    }

    const MostViewed = () => {
        props.value('MostViewed');
        setDropdownValue('Views');
    }

    const MostRelevant = () => {
        props.value('MostRelevant');
        setDropdownValue('Relevance');
    }

    return <Dropdown style={props.container}>
    
                <Dropdown.Toggle style={props.style} >
                    <span style={props.titleStyle}>
                        {dropdownValue}
                    </span>

                </Dropdown.Toggle>
                    
                <Dropdown.Menu style={props.menu} >
    
                    <Dropdown.Item onClick={() => RecentlyAded()}> 
                        Latest
                    </Dropdown.Item>

                    <Dropdown.Item eventKey="Resolution Rate" onClick={() => MostHelpful()}>
                        Resolution Rate
                    </Dropdown.Item>

                    <Dropdown.Item eventKey="Views" onClick={() => MostViewed()}>
                        Views
                    </Dropdown.Item>

                    <Dropdown.Item eventKey="Relevance" onClick={() => MostRelevant()}>
                        Relevance
                    </Dropdown.Item>
    
                </Dropdown.Menu>
    
            </Dropdown>
}

export default Dropdowns;
