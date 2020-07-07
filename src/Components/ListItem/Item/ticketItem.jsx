import React from 'react'
import './ticketItem.css';

const Item = ({ id , knowledgeState , solutionRatio , title , body , views ,  getID }) => {
    
    const get_Content_id = (content_id) => {
        getID(content_id)
    }

    return (
        <>
        <div className="link-separate" onClick={() => get_Content_id(id)}>
            
                                            <div className="row all-lists-tickets" key={id}>
                                                
                                                <div className="col-lg-12 col-xl-12 col-sm-12 col-12 col-md-12 toc">
                                                    <span className="subject">{title}</span>
                                                    <span className="text">{body}</span>
                                                </div>
                                                
                                                <div className="col-lg-12 col-xl-12 col-sm-12 col-12 col-md-12 toc">
                                                    
                                                    <div className="mt-3 d-flex whole">
                                                        <div className="likes d-flex mr-3">
                                                            <img src="/icons/like.png" alt="like" />
                                                            <span>{solutionRatio}</span>
                                                        </div>

                                                        <div className="views d-flex mr-3">
                                                            <img src="/icons/view.png" alt="view" className="views-icon" />
                                                            <span className="all-views">{views}</span>
                                                        </div>

                                                        <div className="status d-flex">
                                                            <img src="/icons/kms_status.png" alt="status" />
                                                            <span className={knowledgeState === 'published' ?
                                                                     'publish' : knowledgeState === 'pending' ? 'pend' : 
                                                                     knowledgeState === 'approved' ? 'arch' : null
                                                                     }>{knowledgeState}</span>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                                
                                            
                                            </div>
                
                                        </div>
                
        </>
    )
}

export default Item;
