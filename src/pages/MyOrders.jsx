import { useEffect, useState } from 'react'

export default function MyOrder() {

    const [orderData, setorderData] = useState([])

    const getOrderHistory = async () => {
        let response = await fetch(`${import.meta.env.VITE_API_URL}/orderHistory`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                email:localStorage.getItem('userEmail')
            })
        });

            
        response = await response.json()
        setorderData(response.orderData)
        
    }

    useEffect(() => {
        getOrderHistory();
    }, [])

    return (
        <div>
            <div className='container'>
                {(orderData) ? 
                    orderData.map((order) => {
                        return (

                <div className='row '>

                    <div>
                        <div className='m-auto mt-5'>

                           <h2>{order[0]}</h2>
                        </div> 
                            <hr />

                            <div className="d-flex justify-content-between flex-wrap">
                            
                            {order.slice(1).map((foodItem) => {
                                return (

                                <div key={foodItem.id} className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                    {/*<img src="" className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />*/}
                                    <div className="card-body">
					<img src={foodItem.img} width="200" height="200" />
                                        <h5 className="card-title">{foodItem.name}</h5>
                                        <div className="container w-100 p-0" style={{ height: "38px" }}>
                                            <span className="m-1">{foodItem.qty}</span>
                                            <span className="m-1">{foodItem.size}</span>
                                            <span className="m-1">{}</span>
                                            <div className="d-inline ms-2 h-100 w-20 fs-5" >
                                                Rs. {foodItem.price}/-
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                )
                            })}
                            </div>
                    </div>
                </div>

                        )
                    })
                    : ""}
            </div>
        </div>
    );
    }
