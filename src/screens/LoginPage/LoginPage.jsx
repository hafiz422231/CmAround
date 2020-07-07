import React , {useState} from 'react'
import './LoginPage.css';
import ButtonComponent from '../../Components/button/buttonComponent';
import { FaLock } from 'react-icons/fa';
import { useHistory }  from 'react-router-dom';
import { Authentication_End_Point } from '../../services/api';
import { processResponse } from '../../services/ResponseProcess';
import Spinner from 'react-bootstrap/Spinner'
import SweetAlert from 'sweetalert2-react';


const LoginPage = () => {

    const history = useHistory();

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [ showLoader , setShowLoader ] = useState(false);

    const [sweetAlertEmpty, setSweetAlertEmpty] = useState(false);
    const [sweetAlertInvalid, setSweetAlertInvalid] = useState(false);

    const loginToComAround = async (e) => {
        
        e.preventDefault();
        

        if(email === '' || password === ''){
            setSweetAlertEmpty(true);
        }

        else{
            setShowLoader(true);
            await fetch(Authentication_End_Point , {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors',
                headers: {
                  'Content-Type': 'application/json',
                  'Ocp-Apim-Subscription-Key':'07c8cfc0ec86488aa722711c8d2f92e7',
                },
                body: JSON.stringify({ "username": email, "password": password })
                
            }).then(res => {
                processResponse(res).then(res2 => {
                    if(res2.status === 200 || res2.status === 201){
                        let token = res2.response.access_token;
                        console.log(res2);
                        localStorage.setItem("authToken" , token);
                        history.push('/main');                    
                    }else{
                        setSweetAlertInvalid(true);
                    }
                });
            }).catch((err)=>{
                setSweetAlertInvalid(true);
            });
        }

    }

    const invalidCre = () => {
        setSweetAlertInvalid(false);
        setShowLoader(false);
    }

    return (
        <div id="login-container">
            <div className="container-fluid w-100">
                
                <div className="main-wrapper">
                    
                    <div className="overlay">
                    </div>

                    <div className="page-logo">
                        <img alt="logo" src="university-of-oklahoma-wordmark.png" className="main-logo" />
                    </div>

                        <div className="form-section">

                            <form>
                                
                                <div className="form-group">
                                    <input type="email" placeholder="Email" className="" onChange={(e) => setEmail(e.target.value)} required />
                                </div>

                                <div className="form-group mb-5">
                                    <input type="password" placeholder="Password" className="" required onChange={(e) => setPassword(e.target.value)} />
                                </div>

                                <ButtonComponent 
                                 title={showLoader === true ? 
                                 <Spinner animation="border" size="md" variant="danger" /> 
                                 : 'login to ComAround'}
                                 
                                 className="login"
                                 isset="false"
                                 onClick={(e) =>  loginToComAround(e)}
                                />
                                
                                <ButtonComponent 
                                    title="login with Azure" 
                                    className="login-azure btn-sm"
                                    isset="true"
                                    icon={<FaLock style={{ position: 'absolute' , left: '14px' , top: '7px' ,fontSize: '17px' }} />}
                                    />
                                   
                                   <SweetAlert
                                        show={sweetAlertEmpty}
                                        title="Error"
                                        type = "error"
                                        text="UserEmail or password is empty"
                                        onConfirm={() => setSweetAlertEmpty(!sweetAlertEmpty)}
                                    />

                                    <SweetAlert
                                        show={sweetAlertInvalid}
                                        title="Error"
                                        type = "error"
                                        text="Invalid user credentials"
                                        onConfirm={() => invalidCre()}
                                    />

                            </form>

                        </div>
                

                </div>

            </div>
        </div>
    )
}

export default LoginPage;


 