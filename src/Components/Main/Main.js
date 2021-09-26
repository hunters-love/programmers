import React, { useState, useEffect } from 'react';
import Cart from '../Cart/Cart';
import Kobi from '../Kobi/Kobi';
import "./Main.css"

const Main = () => {

    const [details, setdetails] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch("/Kobi.json")
            .then(Response => Response.json())
            .then(data => setdetails(data))
    }, [])

    // for detail named button purpose
    const handelButton = (detail) => {
        const newCart = [...cart, detail]
        setCart(newCart);
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        {
                            details.map(detail => <Kobi
                                allDetail={detail}
                                handelButton={handelButton}
                                key={detail.id}

                            ></Kobi>)
                        }


                    </div>
                </div>
                <div className="col-md-3">
                    <Cart

                        cart={cart}

                    ></Cart>
                </div>
            </div>

        </div>
    );
};

export default Main;