import React , {useEffect,useState} from 'react'
import './MainScreen.css';
import HeadingTop from '../../Components/headingTop/headingTop';
import ListItem from '../../Components/ListItem/Item';
import { Get_Search , Get_Search_With_Filter , ArticleFeedback , VoteApi } from '../../services/api';
import { processResponse } from '../../services/ResponseProcess';
import FormModal from '../../screens/detailComp/FormModal';
import { FaTimes } from 'react-icons/fa';
import ButtonComponent from '../../Components/button/buttonComponent';
import { useHistory }  from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner'
import SweetAlert from 'sweetalert2-react';


function MainScreen() {
    
    const history = useHistory();

    const [mostPopular, setMostPopular] = useState([]);
    const [filter, setFilter] = useState('MostViewed');

    const [specificContentID,setSpecificContentID] = useState();

    const [modalShow, setModalShow] = useState(false);
    const [markup,setMarkUp] = useState('');


    const [hide, setHide] = useState(false);
    const [apiClick, setApiClick] = useState(true);
    const [spinnerState , setSpinnerState] = useState(true);
    const [spinnerContentState , setSpinnerContentState] = useState(true);
    const [spinnerYesState , setSpinnerYesState] = useState(false);

    const [sweetAlertYes, setSweetAlertYes] = useState(false);
    const [sweetAlertNo, setSweetAlertNo] = useState(false);

    const hideContentinfo = () => {
        setApiClick(true); 
        setHide(false);
    }

    function createMarkup() {
        return {__html: markup};
    }

    const voteSubmitted = async () => {
        
        setSpinnerYesState(true);        
        
        let body = {
            "contentId": specificContentID,     //PLACE contentID
            "culture": "en-US",       //remains the same
            "isHelpful": true,        //TRUE: Like FALSE: Dislike
        }

        console.log("feedback Body ", JSON.stringify(body));
        
        await fetch(VoteApi , {
            method: 'POST',
            headers: {    
            "Content-Type":"application/json",
            'Ocp-Apim-Subscription-Key':'07c8cfc0ec86488aa722711c8d2f92e7',
            'Authorization' : barer+getToken,
            },
            body: JSON.stringify(body)

        }).then(res => {
            
            setSweetAlertYes(true);
            setSpinnerYesState(false);
            
        }).catch((err)=>{
            alert('not submitted');
        });
    }


    const formvalue = async (e) => {

        setSpinnerState(true);

        let body = {
            "contentId": specificContentID,               
            "culture": "en-US",                 
            "reason": e.reason,
            "email": e.email,     
            "title": e.title 
        } 

        console.log("feedback Body ", JSON.stringify(body));
        
        await fetch(ArticleFeedback , {
            method: 'POST',
            headers: {    
            "Content-Type":"application/json",
            'Ocp-Apim-Subscription-Key':'07c8cfc0ec86488aa722711c8d2f92e7',
            'Authorization' : barer+getToken,
            },
            body: JSON.stringify(body)

        }).then(res => {
            
            console.log(res); 

            alert("Thanks for your vote.")

            // setSweetAlertNo(true);
            setSpinnerState(false);
            setModalShow(false); 
            
    
        }).catch((err)=>{
            alert('not submitted');
        });

    }


    let barer = 'bearer ';
    let getToken = localStorage.getItem("authToken");

    const filterVal = async (e)=>{
        
        setFilter(e);
        setSpinnerState(true);

        await fetch(Get_Search+filter , {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
              'Ocp-Apim-Subscription-Key':'07c8cfc0ec86488aa722711c8d2f92e7',
              'Authorization' : barer+getToken
            },
        }).then(res => {
            processResponse(res,history).then(res2 => {
                if(res2.status === 200 || res2.status === 201){
                   setMostPopular(res2.response.result);
                   setSpinnerState(false);
                }
            });
        }).catch((err)=>{
         
        });
    };



    const searchFieldVal = async (e) => {

        console.log(e); 
        setSpinnerState(true);

        await fetch(`${Get_Search_With_Filter+e}&SortBy=${filter}` , {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
              'Ocp-Apim-Subscription-Key':'07c8cfc0ec86488aa722711c8d2f92e7',
              'Authorization' : barer+getToken
            },
        }).then(res => {
            processResponse(res, history).then(res2 => {
                if(res2.status === 200 || res2.status === 201){
                   setMostPopular(res2.response.result);
                   setSpinnerState(false);
                }
            });
        }).catch((err)=>{
         
        });

    }
    

    useEffect(() => {
        
        fetch(Get_Search+filter , {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
              'Ocp-Apim-Subscription-Key':'07c8cfc0ec86488aa722711c8d2f92e7',
              'Authorization' : barer+getToken
            },
        }).then(res => {
            processResponse(res , history).then(res2 => {
                if(res2.status === 200 || res2.status === 201){
                   setMostPopular(res2.response.result);
                   setSpinnerState(false);
                }
            });
        }).catch((err)=>{
            
        });

    }, [barer,getToken,filter]);


    const get_Content = async (content_id) => {
        
        setSpecificContentID(content_id);
        setApiClick(false); 
        setHide(true);
        setSpinnerContentState(true);

        await fetch(`https://api2.comaround.com/rest/v2/content/${content_id}` , {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
              'Ocp-Apim-Subscription-Key':'07c8cfc0ec86488aa722711c8d2f92e7',
              'Authorization' : barer+getToken 
            },
        }).then(res => {
            processResponse(res , history).then(res2 => {
                if(res2.status === 200 || res2.status === 201){
                    setMarkUp(res2.response.translations[0].articlePartViewModels[0].markup);
                    setSpinnerContentState(false);
                }
            });
        }).catch((err)=>{
            console.log(err);
        });
    }
    

    return (
        
        <>
        <div className="container-fluid mainscreen"> 

            <div className="container">
                

                <div className="row">

                { apiClick && <div className="col-md-3 col-lg-3 col-xl-3"></div>}

                <div className="col-md-6 col-lg-6 col-xl-6">

                    <HeadingTop heading={filter} subHeading="203 Tickets" showField={false} />

                    <hr style={{ background: 'white' }} />
                    
                    <ListItem 
                     items={mostPopular}
                     spinnerState={spinnerState} 
                     filterSelectedValue={(e) => filterVal(e)} 
                     serachFieldValue={(e) => searchFieldVal(e)}
                     getContentID = {(e) => get_Content(e)}
                    />                

                </div>
                
                {hide &&
                
                <div className="col-md-6 col-lg-6 col-xl-6" style={{ paddingTop: '56px'}}>
                    
                    <div className="det card  p-3" style={{height:"630px" , overflowY: 'hidden' , }}>
                            <p style={{fontWeight:"500"}}>{`These are sample Articles Details`}</p>
                            
                            <div style={{maxHeight:"520px" , overflowY: 'scroll'}} className="mb-5" >

                                { spinnerContentState &&    
                                    <Spinner animation="border" size="md" variant="danger" />
                                }

                                { !spinnerContentState && <div dangerouslySetInnerHTML={createMarkup()} />}
                            
                            </div>

                            <p className="detBotPara">
                                {`Was the article helpfull?`}
                            
                            <ButtonComponent 
                             className="link1" 
                             title={spinnerYesState === true ?  <Spinner animation="border" size="sm" variant="danger" /> : "Yes"} 
                             onClick={() => voteSubmitted()} />
                             
                             <SweetAlert
                                show={sweetAlertYes}
                                title="Successful"
                                type = "success"
                                text="Thanks for feedback"
                                onConfirm={() => setSweetAlertYes(!sweetAlertYes)}
                            />

                            
                            <ButtonComponent className="link2" title="No" onClick={() => setModalShow(true)} />
                            </p>

                            <FaTimes className="close-content-div" onClick={() => hideContentinfo()} />

                    </div>

                    

                </div>}

                </div>

            </div>

        </div>

                    <FormModal
                     show={modalShow}
                     sweetAlertNo={sweetAlertNo}
                     onHide={() => setModalShow(false)}
                     dialogClassName="modal-80w"
                     getFieldvalue={(e) => formvalue(e)}
                     showLoader={spinnerState}
                    />

        </>
    )
}

export default MainScreen
