import {useState, useEffect} from 'react';
import Carousel from '../components/Carousel';
import Card from '../components/Card';

export default function Home() {
const [foodCat, setFoodCat] = useState([])
  const [foodItems, setFoodItems] = useState([])
  const [search, setSearch] = useState('')

 function handleSearch (term) {
      setSearch(term);
  }

  const loadFoodItems = async () => {
    let response = await fetch("http://localhost:5000/api/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }

    });

    response = await response.json()
      console.log(response[0]);
      console.log(response[1]);
    setFoodItems(response[0])
    setFoodCat(response[1])
  }

  useEffect(() => {
    loadFoodItems()
  }, [])
    return (
        <>
        <Carousel handleSearch={handleSearch}/>
            <div className='container'> 
                {
                    foodCat.length !== 0
                        ? foodCat.map((data) => {
                            return (
                                // justify-content-center
                                <div key={data.id} className='row mb-3'>
                                    <div className='fs-3 m-3'> {data.CategoryName} </div>

                                    <hr id="hr-success" style={{ height: "4px", backgroundImage: "-webkit-linear-gradient(left,rgb(0, 255, 137),rgb(0, 0, 0))" }} />
                                    {foodItems.length !== 0 ? foodItems.filter(
                                        (items) => (items.CategoryName === data.CategoryName) && (items.name.toLowerCase().includes(search.toLowerCase())))
                                        .map(filterItems => {
                                            return (
                                                <div key={filterItems.id} className='col-12 col-md-6 col-lg-3'>
                                                    <Card foodName={filterItems.name} item={filterItems} options={filterItems.options[0]} ImgSrc={filterItems.img} ></Card>
                                                </div>
                                            )
                                        }) : <div> No Such Data </div>}
                                </div>
                            );
                        })
                        : "No items to display"}
            </div>
        </>
    )

}