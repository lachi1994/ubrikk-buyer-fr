import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadingState, LoginUser } from 'redux/features/auth';
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import Bg2 from '../../assets/img/bg2.png';
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { toast } from 'react-toastify';
import { GrPinterest } from 'react-icons/gr';
import { GrGithub } from 'react-icons/gr';
import './Style.css';

function Signin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();
  const isLoading = useSelector(loadingState);
  const [formValues, setValues] = useState({ email: '', password: '' });

  const onChange = (e) => setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!formValues.email || !formValues.password) toast.warn('Please provide all fields');
    const res = await dispatch(LoginUser(formValues));
    !res.error &&
      navigate(
        !state || state?.from.pathname === '/' || state?.from?.pathname === '/register'
          ? '/profile'
          : state?.from,
        {
          replace: true,
        }
      );
  };

  useEffect(() => {
    return () => setValues({ email: '', password: '' });
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div>
           <div className='profile-row1'><Link to='/' style={{color: 'black', textDecoration: 'none'}}><AiOutlineArrowLeft /></Link> <Link to='/' style={{color: 'black', textDecoration: 'none'}}>&nbsp; <span>Back</span></Link></div>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-6 img-div'>
          <img src={Bg2} alt='error' className='img-fluid' style={{height: "70%", margin: "auto", marginTop: "10%", marginRight: "25%", marginBottom: "none"}} />
        </div>

        <div className='col-md-6 body-content' style={{margin: "auto", padding: "30px"}}>
          <h4>Welcome Back</h4>
          <b>Pick up from where you left</b>
          <br />
          <br />
          <form onSubmit={onSubmit}>

            <div className='mb-3'>
              <label htmlFor='email' className='form-label' style={{
                width: '100%',
                border: 'none',
                outline: 'none',
                borderRadius: '5px',
                padding: '5px 10px',
                fontSize: '17px',
              }}>
                Email
              </label>
              <input
                type='email'
                className='form-control'
                id='email'
                placeholder='eg abc@example.com'
                value={formValues.email}
                onChange={onChange}
                style={{
                  width: '100%',
                  border: 'none',
                  outline: 'none',
                  borderRadius: '5px',
                  padding: '5px 10px',
                  fontSize: '17px',
                }}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='password' className='form-label' style={{
                width: '100%',
                border: 'none',
                outline: 'none',
                borderRadius: '5px',
                padding: '5px 10px',
                fontSize: '17px',
              }}>
                Password
              </label>
              <input
                type='password'
                className='form-control'
                id='password'
                placeholder='***********'
                value={formValues.password}
                onChange={onChange}
                style={{
                  width: '100%',
                  border: 'none',
                  outline: 'none',
                  borderRadius: '5px',
                  padding: '5px 10px',
                  fontSize: '17px',
                }}
              />
            </div>
            <Link to='/profile'>
              <button type='submit' className='btn btn-primary' style={{
                width: '100%',
                border: 'none',
                outline: 'none',
                borderRadius: '10px',
                padding: '8px',
                fontSize: '17px',
                backgroundColor: 'blue',
                fontWeight: '800',
                color: 'white',
              }}>
                Login
              </button>
            </Link>
				</form>
          <div className='mt-3'>
            <span>Or signin with </span>
            <div style={{ alignItems: 'center', margin: 'auto' }}>
              <BsFacebook className='icon' style={{ color: '#0913FA', fontSize: '31px' }} />
              <AiFillTwitterCircle className='icon' style={{ color: '#0913FA', fontSize: '35px' }} />
              <AiFillInstagram className='icon' style={{ color: '#0913FA', fontSize: '35px' }} />
				  <GrPinterest className='icon' style={{ color: '#0913FA', fontSize: '31px' }} />
				  <GrGithub className='icon' style={{ color: '#0913FA', fontSize: '31px' }} />
            </div>
          </div>
          <br />
          <b style={{ textAlign: 'center' }}>
            Don't have an account? <Link to='/signup'>Create one Here</Link>
          </b>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Signin;





/*import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadingState, LoginUser } from 'redux/features/auth';
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import './Style.css';
import Bg2 from '../../assets/img/bg2.png';
import { toast } from 'react-toastify';


function Signin() {
	function clickLogin(){
		window.open("./Sidebar","_self")
	}
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { state } = useLocation();
	const isLoading = useSelector(loadingState);
	const [formValues, setValues] = useState({ email: '', password: '' });

	const onChange = (e) => setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));

	const onSubmit = async (e) => {
		e.preventDefault();
		if (!formValues.email || !formValues.password) toast.warn('Please provide all fields');
		const res = await dispatch(LoginUser(formValues));
		!res.error &&
			navigate(
				!state || state?.from.pathname === '/' || state?.from?.pathname === '/register'
					? '/profile'
					: state?.from,
				{
					replace: true,
				}
			);
	};

	useEffect(() => {
		return () => setValues({ email: '', password: '' });
	}, []);

	return isLoading ? (
		window.alert("Login Successfully")
	) : (
		<div className='sign-main-div'>
			<div className='img-div'>
				<img src={Bg2} alt='error'  />
			</div>
			

			<div className='body-content'>
				<h4>Welcome Back</h4>
				<b>Pick up from where you left</b> <br />
				<br />
				<br />
				<form onSubmit={onSubmit}>
					<label>
						Email <br />
						<input
							type='email'
							name='email'
							placeholder='eg abc@example.com'
							value={formValues.email}
							onChange={onChange}
						/>
					</label>
					<br />
					<br />
					<label>
						Password <br />
						<input
							type='password'
							name='password'
							placeholder='***********'
							value={formValues.password}
							onChange={onChange}
						/>
					</label>
					<br />
					<br />
					<br />
					
					<button type='submit' onClick={clickLogin}>Login</button>  <br />
					<br />
					<br />
				</form>
				<div>
					<span>Or signin with </span>
					<BsFacebook className='icon' />
					<AiFillTwitterCircle className='icon' />
					<AiFillInstagram className='icon' />
				</div>
				<br />
				<br />
				<br />
				<b style={{ textAlign: 'center' }}>
					Don't have an account? <Link to='/signup'>Create one Here</Link>
				</b>
			</div>
		</div>
	);
}

export default Signin;*/
