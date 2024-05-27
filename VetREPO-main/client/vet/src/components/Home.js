import React from 'react'
import './Home.css'
import Footer from './Footer'
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-container">
        <div className="home-header">
        <img src="https://tracymainphotography.co.uk/wp-content/uploads/2021/04/Pet-portraits-13-1024x768.jpg" alt="banner" />
        <div className='home-header-btn'>
        <NavLink to="/products">
           <button>Shop now</button>
        </NavLink>
        </div>
        <div className="home-header-text">
        <h1>Petopia - Your Pet's Paradise</h1>
        <p>Welcome to Petopia, your ultimate destination for premium, natural, and organic pet food and treats. We know how much your pets mean to you, and we are dedicated to providing the highest quality nutrition to keep them healthy, happy, and thriving. Explore our wide selection of wholesome products, crafted with love and care, to give your furry friends the best life possible. Join the Petopia family today and discover a world where pet wellness and happiness come first.</p>
        </div>
       
        </div>
        <div className="home-mid">
        <div className="home-mid-text">
        <h4>Latest Products</h4>
        <h2>Discover New</h2>
        <hr />
        </div>
        <div className="home-mid-images">
        <div className="home-mid-content">
        <img src="https://cdn.dsmcdn.com/ty206/product/media/images/20211020/19/152976211/122274144/1/1_org_zoom.jpg" alt="" />
        <h3>BEEF TWISTS</h3>
        <p>ksh 600 </p>
        </div>
        <div className="home-mid-content">
        <img src="https://supertails.com/cdn/shop/products/Frame10597_f9145197-92f4-4645-86fc-05bbd46d382a-287516.png?v=1696431749" alt="" />
        <h3>CHICKEN ROLLS</h3>
        <p>ksh 800</p>
        </div>
        <div className="home-mid-content">
        <img src="https://media.tractorsupply.com/is/image/TractorSupplyCompany/1528714" alt="" />
        <h3>PORK ROLLS</h3>
        <p>ksh 700</p>
        </div>
        <div className="home-mid-content">
        <img src="https://thepetcabin.store/5748-product_zoom/churu-pops-tuna-chicken-4x15g.jpg" alt="" />
        <h3>CHICKEN POPS</h3>
        <p>ksh 750</p>
        </div>
        </div>
        <div className="home-mid-text">
        <h4>SHOP</h4>
        <h2>Best selling</h2>
        <hr />
        </div>
        <div className="home-mid-images">
        <div className="home-mid-content">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLopLG5JcxmZWCk6fjVXEx2FRpPTwtHZWFH4qsiYAMRQ&s" alt="" />
        <h3>LITTER LEMON</h3>
        <p> ksh 650</p>
        </div>
        <div className="home-mid-content">
        <img src="https://sg-live-01.slatic.net/p/537a130869b507bbcaa066e28304380a.jpg" alt="" />
        <h3>CAT CHUP</h3>
        <p>ksh 450</p>
        </div>
        <div className="home-mid-content">
        <img src="https://fluffycollective.com/cdn/shop/files/Recipe-_2-Chicken-_-Salmon-Fluffy-Collective-108775948.jpg?v=1714921771&width=1920" alt="" />
        <h3>CHICKEN AND SALMON</h3>
        <p>ksh 1050 </p>
        </div>
        <div className="home-mid-content">
        <img src="https://cdn0.woolworths.media/content/wowproductimages/large/847710.jpg" alt="" />
        <h3>SEA FOOD</h3>
        <p>USD ksh90</p>
        </div>
        </div>
        </div>
        <div className="home-lower">
        <div className="home-lower-text">
        <h4>ABOUT US</h4>
        <h2>Welcome to petopia</h2>
        <p>At petopia, we understand that pets are an integral part of your family. That’s why we strive to provide the best quality, natural and organic pet food and treats to keep your furry friends healthy and happy. Our products are made with only the highest quality ingredients, ensuring your pet gets the best nutrition possible.Our mission is to enhance the lives of pets and their owners by offering premium, nutritious, and delicious pet food and treats. We believe that a healthy pet is a happy pet, and we're committed to supporting the well-being of your companions through superior nutrition.At Petopia, quality is our top priority. We meticulously source ingredients from trusted suppliers who share our commitment to natural and organic standards. Each product is crafted with care, ensuring that your pet enjoys wholesome, nutritious meals free from artificial preservatives, colors, and flavors.</p>
        </div>
        <div className='home-lower-right'>
        <img src="https://images.squarespace-cdn.com/content/v1/58373fd42994ca2c6bc2ae1a/386bf67f-cc65-4794-a00b-8104b2313c82/cat-studio-picture-vancouver.jpg" alt="" />
        </div>
        </div>
        <div className="why-choose-us-container">
        <h4>Best In Business</h4>
        <h2>Why Choose Us</h2>
        <p>At petopia, we believe that pets deserve the same high-quality food as humans. Our natural and organic pet food and treats are made with only the highest quality ingredients, ensuring your pet gets the best nutrition possible. Plus, our fast and easy ordering process means you can always keep your pet happy and healthy.</p>
        <hr />
        </div>
        <div className="promotion-container">
        </div>
        <div>
            <Footer />
        </div>
        </div> 
    )
}

export default Home