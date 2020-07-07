import React,{Fragment,useState} from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import FormModal from './FormModal';
import './FormModalStyle.css'

export default function DetailScreen() {
	const [modalShow, setModalShow] = useState(false);

	return (
		<Fragment>
		
		
			<div className="container mt-2" >
				

				<div className="row">
					<div className="col-md-6"></div>
					<div className="col-md-6">
						<div className="det card  p-3" style={{minHeight:"400px"}}>
						<p style={{fontWeight:"500"}}>{`Add Cloud Storage in OneDrive via Teams`}</p>
						
						<p className="detBotPara">
							{`Was the article helpfull?`}
						<Link className="pr-2 pl-2 link1" >
							{`Yes`}
						</Link>
						<Link className="link2" onClick={() => setModalShow(true)}>
							{`No`}
						</Link>
						</p>
						</div>
					</div>
				</div>
					

			</div>
			<FormModal
	        show={modalShow}
	        onHide={() => setModalShow(false)}
	        dialogClassName="modal-80w"
	        />
		</Fragment>
	)
}