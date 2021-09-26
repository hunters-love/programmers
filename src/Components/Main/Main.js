import React, { useState, useEffect } from 'react';
import Kobi from '../Kobi/Kobi';
import "./Main.css"

const Main = () => {

    const [details, setdetails] = useState([]);

    useEffect(() => {
        fetch("/Kobi.json")
            .then(Response => Response.json())
            .then(data => setdetails(data))
    }, [])

    return (
        <div>
            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        {
                            details.map(detail => <Kobi
                                allDetail={detail}

                            ></Kobi>)
                        }


                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>

        </div>
    );
};

export default Main;