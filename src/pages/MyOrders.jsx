import { useEffect, useState } from 'react'

export default function MyOrder() {

    const [orderData, setorderData] = useState({})

    const getOrderHistory = async () => {
        console.log(localStorage.getItem('userEmail'))
        await fetch("http://localhost:5000/api/orderHistory", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                email:localStorage.getItem('userEmail')
            })
        }).then(async (res) => {
            let response = await res.json()
            //await setorderData(response)
            console.log(response);
        })




    }

    useEffect(() => {
        getOrderHistory()
    }, [])

    return (
        <div>
            <div className='container'>
                <div className='row'>

                    <div>
                        <div className='m-auto mt-5'>

                           "Sat Apr 13 2023" 
                        </div> 
                            <hr />

                            <div className='col-12 col-md-6 col-lg-3' >
                                <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                    {/*<img src="" className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />*/}
                                    <div className="card-body">
                                        <h5 className="card-title">Chicken Biryani</h5>
                                        <div className='container w-100 p-0' style={{ height: "38px" }}>
                                            <span className='m-1'>2</span>
                                            <span className='m-1'>full</span>
                                            <span className='m-1'>{}</span>
                                            <div className=' d-inline ms-2 h-100 w-20 fs-5' >
                                                Rs. 740/-
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
    }
