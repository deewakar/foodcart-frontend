import {useState, useEffect, useRef} from 'react';
import { useNavigate } from "react-router-dom";

export default function Card(props) {

  let navigate = useNavigate()
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState("")
  const priceRef = useRef();
  let options = props.options;
  let priceOptions = Object.keys(options);
  let foodItem = props.item;

 const handleQty = (e) => {
    setQty(e.target.value);
  }
  const handleOptions = (e) => {
    setSize(e.target.value);
  }

 useEffect(() => {
    setSize(priceRef.current.value)
  }, [])


  let finalPrice = qty * parseInt(options[size]); 

  return (
    <div>
      <div className="card mt-3 " style={{ width: '20rem', height: '26rem' }}>
        <img
          src={props.ImgSrc}
          className="card-img-top"
          alt="..."
          style={{ width: 'fit-content(20em)', objectFit:'fill'}}
        />
        <div className="card-body">
          <h5 className="card-title">{props.foodName}</h5>
          {/* <p className="card-text">This is some random text. This is description.</p> */}
          <div className="container w-100 p-0" style={{ height: '38px' }}>
            <select
              className="m-2 h-100 w-20 bg-info text-black rounded"
              style={{ select: '#FF0000' }}
              onChange={handleQty}
            >
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>)
              })}
            </select>
            <select
              className="m-2 h-100 w-20 bg-info text-black rounded"
              style={{ select: '#FF0000' }}
              ref={priceRef}
              onChange={handleOptions}
            >
              {priceOptions.map((i) => {
                return <option key={i} value={i}>{i}</option>
              })}
            </select>
            <div className=" d-inline ms-2 h-100 w-20 fs-5">Rs. {finalPrice}/-</div>
          </div>
          <hr></hr>
          <button className={`btn btn-warning justify-center ms-2 `}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
