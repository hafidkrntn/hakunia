import React, { useEffect } from 'react'
import axios from '../axios'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import categories from '../Categories'
import './Home.css'
import Carousel from 'react-bootstrap/Carousel'
import { useDispatch, useSelector } from 'react-redux'
import { updateProducts } from '../features/productSlice'
import PreviewProduct from '../components/PreviewProduct'
import Footer from './Footer'


const Home = () => {
  const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    const lastProducts = products.slice(0, 8);
    useEffect(() => {
        axios.get("/products").then(({ data }) => dispatch(updateProducts(data)));
    }, []);

  return (
    <div>
      {/* home banner */}
      <img src="https://res.cloudinary.com/hafidkrntn/image/upload/v1663148017/hakunia/hero-banner_usswuz.jpg" className="home-banner" alt="hero-banner" />
      <div className="featured-products-container container mt-4">
        <h2>Last Product</h2>
        {/* last product */}
        <div className="d-flex justify-content-center flex-wrap">
        {lastProducts.map((product) => (
          <PreviewProduct {...product} />
        ))}
        </div>
        <div>
        <Link to="/category/all" style={{textAlign: 'right', display: 'block', textDecoration: 'none'}}>
        See more{">>"} 
        </Link>
        </div>
      </div>
      {/* Sale Banner */}
      <div className="sale__banner--container mt-4">
      <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/hafidkrntn/image/upload/v1663148093/hakunia/banner_pxivlo.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-50"
          src="https://res.cloudinary.com/hafidkrntn/image/upload/v1664216230/hakunia/SL_040621_42020_24_ixm3nu.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/hafidkrntn/image/upload/v1664216148/hakunia/flash-sale-banner-template-design-2568380_lislrr.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
      </div>
      
      {/* end Sale Banner */}
      <div className="recent-products-container container mt-4">
        <h2>Categories</h2>
        <Row>
          {categories.map((category) => (
              <LinkContainer to={`/category/${category.name.toLocaleLowerCase()}`}>
                  <Col md={4}>
                      <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${category.img})`, gap: "10px" }} className="category-tile">
                          {category.name}
                      </div>
                  </Col>
              </LinkContainer>
          ))}
        </Row>
      </div>
      <div className="mt-5">
        <Footer />
      </div>
      </div>
  )
}

export default Home