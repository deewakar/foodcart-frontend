import { useState, useEffect } from 'react';
import Carousel from '../components/Carousel';
import Card from '../components/Card';
import './page.css';

export default function Home() {
    const [foodCat, setFoodCat] = useState([])
    const [foodItems, setFoodItems] = useState([])
    const [recommendedItems, setRecommendedItems] = useState([])
    const [popularItems, setPopularItems] = useState([])
    const [search, setSearch] = useState('')

    function handleSearch(term) {
        setSearch(term);
    }

    const loadFoodItems = async () => {
        let response = await fetch(`${import.meta.env.VITE_API_URL}/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }

        });

        response = await response.json();
        setFoodItems(response[0]);
        setFoodCat(response[1]);
    }

    const loadRecommended = async () => {
        let test = [
            {
                'CategoryName': "Dessert",
                'description': "Rich and fudgy chocolate brownie served with a scoop of vanilla ice cream.",
                'img': "https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?cs=srgb&dl=pexels-ella-olsson-3026804.jpg&fm=jpg",
                'name': "Chocolate Brownie",
                'options': [{ 'regular': "80", 'with ice cream': "120" }],
                '_id': "645f3e55f3fe19284a401aa9"
            }
        ];
        let response = await fetch(`${import.meta.env.VITE_API_URL}/recommendations`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": localStorage.getItem('userEmail')
            })
        });

        response = await response.json();
        setRecommendedItems(response.data);
    }

 const loadPopular = async () => {
        let response = await fetch(`${import.meta.env.VITE_API_URL}/popular`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        response = await response.json();
        setPopularItems(response);
    }
    useEffect(() => {
        loadFoodItems();
        loadRecommended();
        loadPopular();
    }, [])
    return (
        <>
            <Carousel handleSearch={handleSearch} />
            <div className='container'>


                {search !== '' ? <div className='fs-3 m-3'>Search Results </div> : ""}

                {localStorage.getItem('token') && recommendedItems.length > 0 && search === '' ?
                    <div className='row mb-3'>
                        <div className='fs-3 m-3 recommendation h1'>Recommended For You</div>

                        <hr id="hr-success" style={{ height: "4px", backgroundImage: "-webkit-linear-gradient(left,rgb(0, 255, 137),rgb(0, 0, 0))" }} />
                        {recommendedItems.length !== 0 ?
                            recommendedItems.map(items => {
                                return (
                                    <div key={items.id} className='col-12 col-md-6 col-lg-3'>
                                        <Card foodName={items.name} description={items.description} item={items} options={items.options[0]} ImgSrc={items.img} ></Card>
                                    </div>
                                )
                            }) : <div> Nothing to Show Here </div>}
                    </div>
                    : ""}

                 {popularItems.length > 0 && search === '' ?
                    <div className='row mb-3'>
                        <div className='fs-3 m-3 recommendation h1'>Most Popular</div>

                        <hr id="hr-success" style={{ height: "4px", backgroundImage: "-webkit-linear-gradient(left,rgb(0, 255, 137),rgb(0, 0, 0))" }} />
                        {popularItems.length !== 0 ?
                            popularItems.map(items => {
                                return (
                                    <div key={items.id} className='col-12 col-md-6 col-lg-3'>
                                        <Card foodName={items.name} description={items.description} item={items} options={items.options[0]} ImgSrc={items.img} ></Card>
                                    </div>
                                )
                            }) : <div> Nothing to Show Here </div>}
                    </div>
                    : ""}
   
                {
                    foodCat.length !== 0
                        ? foodCat.map((data) => {
                            return (
                                // justify-content-center
                                <div key={data.id} className='row mb-3'>
                                    {search === '' ?
                                        <>
                                            <div className='fs-3 m-3 h2'>{data.CategoryName} </div>
                                            <hr id="hr-success" style={{ height: "4px", backgroundImage: "-webkit-linear-gradient(left,rgb(0, 255, 137),rgb(0, 0, 0))" }} />
                                        </> : ""}
                                    {foodItems.length !== 0 ? foodItems.filter(
                                        (items) => (items.CategoryName === data.CategoryName) && (items.name.toLowerCase().includes(search.toLowerCase())))
                                        .map(filterItems => {
                                            return (
                                                <div key={filterItems.id} className='col-12 col-md-6 col-lg-3'>
                                                    <Card foodName={filterItems.name} description={filterItems.description} item={filterItems} options={filterItems.options[0]} ImgSrc={filterItems.img} ></Card>
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
