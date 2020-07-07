import React,{useState} from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import ButtonComponent from '../../Components/button/buttonComponent';
import { Dropdown } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import SweetAlert from 'sweetalert2-react';


import './FormModalStyle.css';

const FormModal = (props) => {

	const [selectreason,setSelectreason] = useState('');
	const [selectEmail,setSelectEmail] = useState('');
	const [selectTitle,setSelectTitle] = useState('');
	
	const [sweetAlertEmpty, setSweetAlertEmpty] = useState(false);
    const [sweetAlertInvalidEmail, setSweetAlertInvalidEmail] = useState(false);

	var dropdown = {
        
        btn: {
			background: 'none !important',
            color: 'black',
            fontFamily: 'Helvetica',
            fontSize: '13px',
			borderColor: 'grey',
			padding: '0px'			
        },
        title: {
            color: 'gray',
			marginRight: '100px',
			marginLeft: '8px',
			fontSize: '14px',	
		},
		toggle:{
			background: 'none',
			color: 'gray',
			width: '100%',
            display: 'flex',
			justifiContent: 'space-between',
			alignItems: 'center',
			border: 'none',
			outline: 'none'
		}
	}
	
	const clickSubmit = () => {
		
		let validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

		if(selectEmail === '' || selectTitle === '' || selectreason === ''){
			// setSweetAlertEmpty(true);
			alert("Please select values")
		}

		else if(!validEmailRegex.test(selectEmail)){
			alert("Please select valid email")
			// setSweetAlertInvalidEmail(true)
		}
		else {
			props.getFieldvalue({ reason: selectreason , email: selectEmail , title: selectTitle });
		}

	}

	return (

		 <ReactBootStrap.Modal
		      {...props}
		      size="lg"
		      aria-labelledby="contained-modal-title-vcenter"
		      centered
          >
          
      <ReactBootStrap.Modal.Header closeButton className="formHead pb-5" >
      		
      

      <ReactBootStrap.Modal.Body className="formBody mt-3">
        <div className="container">
        	<div className="row det card ">
        		<div className="col-md-6 fontMod mt-2 text-left">
        			<p>{`The article didn't help me because`}</p>
        		</div>
        		<div className="col-md-8">
	
					<Dropdown className="formInp shadow " style={dropdown.btn}>
    
						<Dropdown.Toggle style={dropdown.toggle} >
							<span style={dropdown.title}>
								{selectreason === '' ? 'Select a reason' : selectreason}
							</span>

						</Dropdown.Toggle>
							
						<Dropdown.Menu  >
			
							<Dropdown.Item onClick={() => setSelectreason('The content does not give an expected result')} > 
								The content does not give an expected result
							</Dropdown.Item>

							<Dropdown.Item eventKey="Resolution Rate" onClick={() => setSelectreason("I don't understand the content")}>
								I don't understand the content
							</Dropdown.Item>

							<Dropdown.Item eventKey="Views" onClick={() => setSelectreason('Information is missing')}>
								Information is missing
							</Dropdown.Item>
			
						</Dropdown.Menu>
			
					</Dropdown>
        		</div>

        		<div className="col-md-6 fontMod mt-2 text-left">
        			<p>{`Email`}</p>
        		</div>

        		<div className="col-md-8 detCenter">
					<input 
					type="email" 
					className="formInp shadow" 
					onChange={(e)=>setSelectEmail(e.target.value)}
					placeholder="Email" />
        		</div>

        		<div className="col-md-6 fontMod mt-2 text-left">
        			<p>{`Title`}</p>
        		</div>
        		<div className="col-md-8 detCenter">
					<input 
					type="text" 
					className="formInp shadow"
					onChange={(e)=>setSelectTitle(e.target.value)} 
					placeholder="Title" />
        		</div>

        		<div className="col-md-6 fontMod mt-2 text-left">
        			<p>{`Tell us More`}</p>
        		</div>
        		<div className="col-md-8 detCenter mb-2">
        			<textarea className="formInp shadow" placeholder="Feedback" />
        		</div>
        	</div>

        	<div className="row text-center mt-3" >
				<div className="col-md-3"></div>
				<div className="col-md-3 floatDiv">
					<ButtonComponent
						title="CANCEL"
						className="cancelbtn shadow" 
						type="submit"
						onClick={() => props.onHide()}
					/>
				</div>
				<div className="col-md-3 ">
					<ButtonComponent
						title={props.showLoader === true ? <Spinner animation="border" size="sm" variant="danger" /> : 'SUBMIT'}
						className="submitbtn shadow" 
						type="submit"
						onClick={() => clickSubmit()}
					/>
					
							<SweetAlert
                                show={props.sweetAlertNo}
                                title="Successful"
                                type = "success"
                                text="Thanks for feedback"
                                onConfirm={() => !props.sweetAlertNo}
                            />

									<SweetAlert
                                        show={sweetAlertEmpty}
                                        title="Error"
                                        type = "error"
                                        text="Email, title or reason is empty"
                                        onConfirm={() => setSweetAlertEmpty(!sweetAlertEmpty)}
                                    />

                                    <SweetAlert
                                        show={sweetAlertInvalidEmail}
                                        title="Error"
                                        type = "error"
                                        text="Invalid Email"
                                        onConfirm={() => setSweetAlertInvalidEmail(!sweetAlertInvalidEmail)}
                                    />

				</div>
			</div>
       			
        </div>

      </ReactBootStrap.Modal.Body>
</ReactBootStrap.Modal.Header> 
	   
    </ReactBootStrap.Modal>

	)
}

export default FormModal;
