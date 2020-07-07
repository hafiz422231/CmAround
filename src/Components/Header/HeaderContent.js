import React,{Fragment} from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {GoBook} from 'react-icons/go';
import {FiSearch} from 'react-icons/fi';

export default function HeaderContent(props) {
	return (
		<Fragment>
		<div className="container helptext "  style={{zIndex:"10"}}>
			  
			  	<div className="row " style={{float:"right",paddingRight:"80px"}}>
			  		<div className="col-1 ticket" style={{zIndex:"10"}}>
			  			<ReactBootStrap.Dropdown >
							  <ReactBootStrap.Dropdown.Toggle className="ticketdrop" style={{paddingLeft:"15px",background:"white",color:"#3E5262",borderRadius:"25px 0 0 25px",border:"none"}}>
							    Tickets
							  </ReactBootStrap.Dropdown.Toggle>

							  <ReactBootStrap.Dropdown.Menu>
							    <ReactBootStrap.Dropdown.Item href="#/action-1">Action</ReactBootStrap.Dropdown.Item>
							    <ReactBootStrap.Dropdown.Item href="#/action-2">Another action</ReactBootStrap.Dropdown.Item>
							    <ReactBootStrap.Dropdown.Item href="#/action-3">Something else</ReactBootStrap.Dropdown.Item>
							  </ReactBootStrap.Dropdown.Menu>
						</ReactBootStrap.Dropdown>
			  		</div>
			  		
			  	</div>
		</div>

		
		</Fragment>
	)
}


// <FiSearch className="searchicon"/>