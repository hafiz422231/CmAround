import React from 'react'
import './Item.css';
import Item from './Item/ticketItem';
import TopFilter from '../Filter/Filter';
import Spinner from 'react-bootstrap/Spinner'

const ListItem = ({ items , spinnerState , filterSelectedValue , serachFieldValue , getContentID }) => {
  

    const filterValue = (e) => {
        filterSelectedValue(e);
    }

    const searchVal = (e) => {
        serachFieldValue(e);
    }

    const get_id = (id) => {
        getContentID(id);
    }

  
    return (
        <div id="main-wrapper-my-tickets">
            
            
            <div className="container-fluid h-100">
                <div className="row">
                    <div className="col-sm-12 col-12 col-lg-12 col-md-12 card-left">

                        <TopFilter filterSelectedValue={(e) => filterValue(e)} serachFieldValue={(e) => searchVal(e)} />

                        <div className="box-shadow">

                            { spinnerState &&
                                <div className="text-center">
                                    <Spinner animation="border" size="md" variant="danger" />
                                </div>
                            }
                            
                            { !spinnerState &&
                            <>{
                                    items.map( ({ ...otherProps }) => (
                                        
                                        <div className="m-0 pl-3 pr-3" key={Math.random()}>
                                            <Item {...otherProps} getID={(e) => get_id(e)} />
                                            <hr />
                                        </div>
                                    ))
                                }</>
                            }  
                          
                        </div>

                    </div>
              
                </div>
            </div>
        </div>
    )
}

export default ListItem;
