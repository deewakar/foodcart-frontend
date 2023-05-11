export default function Carousel() {
	const CarouselItems = [
		{
			"name": "Pancakes with fruit salad and maple sauce",
			"img": "./carousel1.jpg",
		},
		{
			"name": "Pasta with Chicken breast and hard boiled eggs",
			"img": "./carousel2.jpg",
		},
		{
			"name": "Crispy bacon with eggs",
			"img": "./carousel3.jpg",
		}];

	return (
		<div>
			<div
				id="carouselExampleFade"
				className="carousel slide"
				data-bs-ride="carousel"
			>
				<div
					className="carousel-inner "
					id="carousel"
					style={{ height: 500 }}
				>
					<div className=" carousel-caption  " style={{ zIndex: '9' }}>
						<form className=" d-flex justify-content-center">
							{' '}
							{/* justify-content-center, copy this <form> from navbar for search box */}
							<input
								className="form-control me-2 w-75 bg-white text-dark"
								type="search"
								placeholder="Type in..."
								aria-label="Search"
							/>
							<button className="btn text-white bg-success" type="submit">
								Search
							</button>
						</form>
					</div>
		                {CarouselItems.map((i) => {
							return (
								<div key={i.name} className="carousel-item active">
									<img
										src={i.img}
										className="d-block w-100"
										style={{
											height: 500,
											filter: 'brightness(50%)',
											objectFit: 'cover',
										}}
										alt="..."
									/>
								</div>
							)
						})}
					<button
						className="carousel-control-prev"
						type="button"
						data-bs-target="#carouselExampleFade"
						data-bs-slide="prev"
					>
						<span
							className="carousel-control-prev-icon"
							aria-hidden="true"
						></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button
						className="carousel-control-next"
						type="button"
						data-bs-target="#carouselExampleFade"
						data-bs-slide="next"
					>
						<span
							className="carousel-control-next-icon"
							aria-hidden="true"
						></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</div>
		</div>
	);
} 
