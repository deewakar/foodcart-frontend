import { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatchCart, useCart } from './ContextReducer';
import './componentcss.css';

export default function Card(props) {

  let navigate = useNavigate()
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState("")
  const priceRef = useRef();
  let options = props.options;
  let priceOptions = Object.keys(options);
  let foodItem = props.item;

  let data = useCart();
  const dispatch = useDispatchCart();

  const handleQty = (e) => {
    setQty(e.target.value);
  }

  const handleOptions = (e) => {
    setSize(e.target.value);
  }

  const handleAddToCart = async () => {
    let food = []
    for (const item of data) {
      if (item.id === foodItem._id) {
        food = item;

        break;
      }
    }

    if (food.length !== 0) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: foodItem._id, price: finalPrice, qty: qty })
        return
      }
      else if (food.size !== size) {
        await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size, img: props.ImgSrc })
        return
      }
      return
    }

    await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size })


  }

  useEffect(() => {
    setSize(priceRef.current.value)
  }, [])


  let finalPrice = qty * parseInt(options[size]);

  return (


    <div>
      <div className="container">
        <div className="card">
          <div className="row">
            <div className="col-lg-3">
              <div className="card_section">
                <div className="card_img fourth">
                  <img src={props.ImgSrc}
                    className="card_img" alt="..." />
                </div>
                <div className="title">
                  <h5 className="card-title">{props.foodName}</h5>
                </div>
                <div className="description">
                  <p>
                    {props.description}
                  </p>
                </div>
                <div className="number">
                  <div className="count">
                    <select className="m-2 h-100 w-20 bg-info text-black rounded" style={{
                      select: '#FF0000'
                    }} onChange={handleQty}>
                      {Array.from(Array(6), (e, i) => {
                        return (
                          <option key={i + 1} value={i + 1}>{i + 1}</option>)
                      })}
                    </select>
                    <select className="m-2 h-100 w-20 bg-info text-black rounded"
                      style={{ select: '#FF0000' }}
                      ref={priceRef} onChange={handleOptions}>
                      {priceOptions.map((i) => {
                        return <option key={i} value={i}>{i}</option>
                      })}
                    </select>
                    <div className="price">Rs. {finalPrice}/-</div>
                  </div>
                </div>
                <hr />
                <div className="button">
                  <button className="card_button" onClick={handleAddToCart}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div>
    //   <div className="card mt-3 " style={{ width: '20rem' }}>
    //     <img
    //       src={props.ImgSrc}
    //       className="card-img-top object-fit-scale"
    //       alt="..."
    //     />
    //     <div className="card-body">
    //       <h5 className="card-title">{props.foodName}</h5>
    //       <p className="card-text">{props.description}</p>
    //       <div className="container w-100 p-0" style={{ height: '38px' }}>
    //         <select
    //           className="m-2 h-100 w-20 bg-info text-black rounded"
    //           style={{ select: '#FF0000' }}
    //           onChange={handleQty}
    //         >
    //           {Array.from(Array(6), (e, i) => {
    //             return (
    //               <option key={i + 1} value={i + 1}>{i + 1}</option>)
    //           })}
    //         </select>
    //         <select
    //           className="m-2 h-100 w-20 bg-info text-black rounded"
    //           style={{ select: '#FF0000' }}
    //           ref={priceRef}
    //           onChange={handleOptions}
    //         >
    //           {priceOptions.map((i) => {
    //             return <option key={i} value={i}>{i}</option>
    //           })}
    //         </select>
    //         <div className=" d-inline ms-2 h-100 w-20 fs-5">Rs. {finalPrice}/-</div>
    //       </div>
    //       <hr></hr>
    //       <button className={`btn btn-warning justify-center ms-2 `}
    //         onClick={handleAddToCart}>
    //         Add to Cart
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
}
