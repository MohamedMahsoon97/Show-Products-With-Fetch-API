import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "./Redux/productSlice";
import "./App.css";
import "antd/dist/antd.css";
import AMG from "./Component/Img/AMG.jpg";
import OutFit from "./Component/Img/OutFit.jpg";
import { Progress } from "antd";
import { Badge } from "antd";
import { Card } from "antd";

const { Meta } = Card;

const App = () => {
	const [count , setCount] = useState(1)
	const products = useSelector((state) => state.products);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	useEffect(() => {
		return products
	}, [products]);
	console.log(products);
	return (
		<div>
			<div className="product-container">
				<div className="container">
					<div className="product-section">
						<div className="products">

							<div className="product-progress">
								<div class="product-percent">
									<svg>
										<circle
											cx="65"
											cy="65"
											r="65"
										></circle>
										<circle
											cx="65"
											cy="65"
											r="65"
										></circle>
									</svg>
									<div class="product-num">
										<h2>382</h2>
										<h6>SOLD</h6>
										<span>OUT OF 975</span>
									</div>
								</div>
							</div>

							<div className="win-product">Win This</div>

							<div className="product-operations">
								<span onClick={() => setCount(count + 1)} className="increase-btn">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="18" height="18"><path fill-rule="evenodd" d="M7.75 2a.75.75 0 01.75.75V7h4.25a.75.75 0 110 1.5H8.5v4.25a.75.75 0 11-1.5 0V8.5H2.75a.75.75 0 010-1.5H7V2.75A.75.75 0 017.75 2z"></path></svg>
								</span>
								<div className="product-operands">
									<span className="count">{count <= 0 ? 0 : count}</span>
								</div>
								<span onClick={() => setCount(count - 1)} className="decrease-btn">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M2 7.75A.75.75 0 012.75 7h10a.75.75 0 010 1.5h-10A.75.75 0 012 7.75z"></path></svg>
								</span>
							</div>

							<span className="product-badge">
								<h2 class="ribbon">AED 50.00</h2>
							</span>

							<div className="cart-fav">
								<div className="product-fav">
									<span className="fav-btn">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M7.655 14.916L8 14.25l.345.666a.752.752 0 01-.69 0zm0 0L8 14.25l.345.666.002-.001.006-.003.018-.01a7.643 7.643 0 00.31-.17 22.08 22.08 0 003.433-2.414C13.956 10.731 16 8.35 16 5.5 16 2.836 13.914 1 11.75 1 10.203 1 8.847 1.802 8 3.02 7.153 1.802 5.797 1 4.25 1 2.086 1 0 2.836 0 5.5c0 2.85 2.045 5.231 3.885 6.818a22.075 22.075 0 003.744 2.584l.018.01.006.003h.002z"></path></svg>
									</span>
								</div>
								<div className="product-cart">
									<span className="fav-btn">
										<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>
									</span>
								</div>
							</div>

							<div className="show-products">
								<Card
									style={{ width: 300 }}
									cover={
										<img
											alt="example"
											src={OutFit}
										/>
									}
								>
									<Meta
										title="Buy a "
										description="H2H Hoodie"
									/>
									<p className="product-text">
										Lorem ipsum dolor sit amet
										consectetur adipisicing
										elit. Debitis unde sequi
										enim aperiam quos{" "}
									</p>
								</Card>
								<Card
									style={{ width: 300 }}
									cover={
										<img
											alt="example"
											src={AMG}
										/>
									}
								>
									<Meta
										title="Get a chance to win : "
										description="The all new Mercdec G63 AMG 2020"
									/>
									<p className="product-text">
										Lorem ipsum dolor sit amet
										consectetur adipisicing
										elit. Debitis unde sequi
										enim aperiam quos{" "}
									</p>
								</Card>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
