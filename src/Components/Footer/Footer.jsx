import React from 'react'

function Footer() {
    return (
        <div className="container-fluid" style={{background:"#242424",height:"15vh",overflowY:"hidden"}}>
            
            <div className="row">
                
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 text-white text-center p-3">


                	<div className="row">
	                    <div className="col-4">
	                    	<p>The University of Oklahoma
							660 Parrington Oval,
							Norman, OK 73019-0390
							(405) 325-0311
							</p>
	                    </div>

	                    <div className="col-4">
	                    Accessibility
						Sustainability
						HIPAA
						OU Job Search
	                    </div>

	                    <div className="col-4">
	                    Policies
						Legal Notices
						Copyright
						Resources & Offices
	                    </div>
                	</div>

                	<hr style={{background:"white"}}/>
                    
                    <p >Updated 6/25/2020 by The University of Oklahoma: marcomm@ou.edu</p>

                </div>

            </div>

        </div>
    )
}

export default Footer;
