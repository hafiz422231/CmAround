import React from 'react';
import './Headerstyle.css';

function Header() {
	
		return (
			 <div className="container header pt-3">
			 	
				<div className="row">

					<div className="col-md-6 col-lg-6 col-xl-6">
						<img src={require('../../assets/university-of-oklahoma-wordmark.png')} width="275px" alt="" />				
					</div>	
					
				</div>
				<hr />		

				

			  
			 </div>
		
		)
}

export default Header