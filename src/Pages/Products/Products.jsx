import React from 'react';
import './Products.css';
import { AiOutlineArrowLeft} from 'react-icons/ai';
import { Link } from 'react-router-dom';
//import bgimage from "../../assets/img/bg.jpg";
const Products = () => {
	
  return (
	<div>
		<header>
		<div className='profile-row1'>
					<Link to='/'  style={{ color: 'black', textDecoration: 'none',fontSize:'25px'}} className='arrowleft'><AiOutlineArrowLeft /></Link>
					<Link to='/' style={{ color: 'black', textDecoration: 'none',fontSize:'25px' }} className='backbutton'>
						&nbsp; <span>Back</span>
					</Link>
				</div>
        <h1 style={{fontWeight:'600'}}>PRODUCTS</h1>
    </header>

    <main>
        <div class="product">
            <div class="product-item">
                <img src="https://i5.walmartimages.com/asr/61f43c8a-627a-4b2a-92fb-f6718e74ad65_1.b7427d519611aad696492dbf438c468a.jpeg" alt="Product 1" />
                <h2 className='label'>Kids Bag</h2>
                <button className='product-btn'>Add to Cart</button>
            </div>

            <div class="product-item">
                <img src="https://th.bing.com/th/id/OIP.KipthNZIWBoDW14inonStQAAAA?rs=1&pid=ImgDetMain" alt="Product 2"/>
                <h2 className='label'>Nameplate</h2>
                <button className='product-btn'>Add to Cart</button>
            </div>
				<div class="product-item">
                <img src="https://i.pinimg.com/736x/8e/f2/7a/8ef27a9bf1b8f25db522a5bd44bec813.jpg" alt="Labels"/>
                <h2 className='label'>Label</h2>
                <button className='product-btn'>Add to Cart</button>
            </div>

				<div class="product-item">
                <img src="https://www.carsbase.com/photo/Ford-Falcon_XR8_mp8_pic_52392.jpg" alt="Product 1"/>
                <h2 className='label'>Car</h2>
                <button className='product-btn'>Add to Cart</button>
            </div>

				<div class="product-item">
                <img src="https://i5.walmartimages.com/asr/9ba22635-c63f-4879-8054-87cb84058867.e8bd84903d0c69c95dc9857b5f18d985.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff" alt="Product 1"/>
                <h2 className='label'>Kids Bag</h2>
                <button className='product-btn'>Add to Cart</button>
            </div>

				<div class="product-item">
                <img src="https://i.pinimg.com/736x/f2/d6/a9/f2d6a9564a08a59e917b2b4ed10457e2--name-plates-murals.jpg" alt="Product 1"/>
                <h2 className='label'>Nameplate</h2>
                <button className='product-btn'>Add to Cart</button>
            </div>

				<div class="product-item">
                <img src="https://i.pinimg.com/474x/ba/ca/5b/baca5b0fc6d43ae70b0fb45ce7847e89--free-french-printables-vintage-labels-printables-free.jpg" alt="Product 1"/>
                <h2 className='label'>Label</h2>
                <button className='product-btn'>Add to Cart</button>
            </div>

				<div class="product-item">
                <img src="https://www.pngarts.com/files/8/Audi-Car-PNG-Photo.png" alt="Product 1"/>
                <h2 className='label'>Car</h2>
                <button className='product-btn'>Add to Cart</button>
            </div>


        </div>
    </main>

    

	</div>
  )
}

export default Products













/*import React,{useState} from 'react';
import './/Products.css';
import { AiOutlineArrowLeft} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import bgimage from '../../assets/img/bg.jpg';

const Products = () => {
   const [images, setImages] = useState({
		img1: 'https://th.bing.com/th?id=OPA.eemrg%2bBnPNb8Wg474C474&o=5&pid=21.1&w=160&h=220',
		img2: 'https://th.bing.com/th/id/OIP.aWQBJUMgnBA5jUHdlE4SLAHaHa?pid=ImgDet&w=188&h=188&c=7',
		img3: 'https://th.bing.com/th/id/OIP.gCsGVEJJl1YyWfvv-rsTqAHaDq?w=313&h=180&c=7&r=0&o=5&pid=1.7',
		img4: 'https://th.bing.com/th/id/OIP.1WG-hJWQEqynAUX7UdNSjwHaHa?pid=ImgDet&rs=1',
		img5: 'https://media.istockphoto.com/id/1446515732/photo/blank-white-label-mockup.jpg?s=1024x1024&w=is&k=20&c=MSCklzl4KAj2tqO-FidKSzOzVJ8uQxIR0a2N0BJq3u8=',
		img6: 'https://th.bing.com/th/id/R.07e0a7a9ea26ff9eea5be3dae5049659?rik=F%2fKjHTVPYoIVzg&riu=http%3a%2f%2fimages.esellerpro.com%2f2149%2fI%2f742%2f460%2f2%2fLittle-Tikes-Cozy-Coupe-2.jpg&ehk=fzXDtSisvUtwHFPK%2biPoRoudWlxXlZ3Wmw6J2MfsqxE%3d&risl=&pid=ImgRaw&r=0',
		img7: 'https://th.bing.com/th/id/OIP.5Zq3MnkDWU_lR1YBiqA8gwHaHa?pid=ImgDet&rs=1',
		img8: 'https://static.vecteezy.com/system/resources/previews/000/431/736/original/vector-labels.jpg',
		img9: 'https://i.etsystatic.com/9177505/r/il/e9fe10/1232247821/il_1588xN.1232247821_ho4q.jpg',
		img10: 'https://th.bing.com/th/id/OIP.-vKu9AXD63sQ4SWjjPTa1AHaHa?pid=ImgDet&rs=1',
	});
	return (
		<div className='body-container' 
		style={{backgroundImage: `url(${bgimage})`}}>
			<div className='profile-row1'>
					<Link to='/'  style={{ color: 'black', textDecoration: 'none',fontSize:'25px'}}><AiOutlineArrowLeft /></Link>
					<Link to='/' style={{ color: 'black', textDecoration: 'none',fontSize:'25px' }}>
						&nbsp; <span>Back</span>
					</Link>
				</div>
			<h1 className='h1' style={{marginTop:'-35px'}}>PRODUCTS</h1>
			
			
			<div className='picture' style={{marginRight:'-25px',marginLeft:'50px'}}>
				<div className='flex-one'>
					<img src={images.img1} alt='image1' className='img'></img>
					<div className='label-name'>
						<label>Bag</label>
					</div>

					<div className='button-products'>
						<button type='button' className='btn'>
							Add to Cart
						</button>
					</div>
				</div>

				<div className='flex-one'>
					<img src={images.img2} alt='' className='img'></img>
					<div className='label-name'>
						<label>Bag</label>
					</div>
					<div className='button-products'>
						<button type='button' className='btn'>
							Add to Cart
						</button>
					</div>
				</div>

				<div className='flex-one'>					
				<img src={images.img3} alt='' className='img'></img>
					<div className='label-name'>
						<label>Nameplate</label>
					</div>
					<div className='button-products'>
						<button type='button' className='btn'>
							Add to Cart
						</button>
					</div>
				</div>

				<div className='flex-one'>
					<img src={images.img4} alt='' className='img'></img>
					<div className='label-name'>
						<label>Bag</label>
					</div>
					<div className='button-products'>
						<button type='button' className='btn'>
							Add to Cart
						</button>
					</div>
				</div>

				<div className='flex-one'>
					<img src={images.img5} alt='' className='img'></img>
					<div className='label-name'>
						<label>Label</label>
					</div>
					<div className='button-products'>
						<button type='button' className='btn'>
							Add to Cart
						</button>
					</div>
				</div>

				<div className='flex-one'>
					<img src={images.img6} alt='' className='img'></img>
					<div className='label-name'>
						<label>Car</label>
					</div>
					<div className='button-products'>
						<button type='button' className='btn'>
							Add to Cart
						</button>
					</div>
				</div>

				<div className='flex-one'>
					<img src={images.img7} alt='' className='img'></img>
					<div className='label-name'>
						<label>Car</label>
					</div>
					<div className='button-products'>
						<button type='button' className='btn'>
							Add to Cart
						</button>
					</div>
				</div>

				<div className='flex-one'>
					<img src={images.img8} alt='' className='img'></img>
					<div className='label-name'>
						<label>Label</label>
					</div>
					<div className='button-products'>
						<button type='button' className='btn'>
							Add to Cart
						</button>
					</div>
				</div>

				<div className='flex-one'>
					<img src={images.img9} alt='' className='img'></img>
					<div className='label-name'>
						<label>Nameplate</label>
					</div>
					<div className='button-products'>
						<button type='button' className='btn'>
							Add to Cart
						</button>
					</div>
				</div>

				<div className='flex-one'>
					<img src={images.img10} alt='' className='img'></img>
					<div className='label-name'>
						<label>Car</label>
					</div>
					<div className='button-products'>
						<button type='button' className='btn' >
							Add to Cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Products;*/