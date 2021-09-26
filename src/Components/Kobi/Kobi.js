import React from 'react';
import "./Kobi.css"

const Kobi = (props) => {
    const { name, id, famousbook, birthDate, bookPrice, image } = props.allDetail;
    // console.log(props.allDetail)
    return (

        <div className="col-md-4 self-style">
            <div className="card mb-3 style" style={{ "max-width": "540px;" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={image} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <h5>Birth-date:{birthDate}</h5>
                            <h5>Id:{id}</h5>
                            <h5>Famous-book:{famousbook}</h5>
                            <h6>Price:{bookPrice}</h6>


                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Kobi;