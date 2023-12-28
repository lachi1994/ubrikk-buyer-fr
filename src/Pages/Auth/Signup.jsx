import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadingState, RegisterUser } from 'redux/features/auth';
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import Mask from '../../assets/img/Mask.png';
import { toast } from 'react-toastify';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import { GrPinterest } from 'react-icons/gr';
import { GrGithub } from 'react-icons/gr';
import './Style.css';

const defaultValues = { full_name: '', email: '', password: '' };

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();
  const isLoading = useSelector(loadingState);
  const [formValues, setValues] = useState(defaultValues);
  const [agreed, setAgreed] = useState(false);

  const onChange = (e) => setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onChecked = (e) => setAgreed(e.target.checked);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!formValues.email || !formValues.full_name || !formValues.password)
      return toast.warning('Please fill all fields');
    if (!agreed) return toast.warn('Read terms and conditions and check checkbox');
    const res = await dispatch(RegisterUser(formValues));
    !res.error &&
      navigate(
        !state || state?.from.pathname === '/' || state?.from?.pathname === '/login'
          ? '/profile'
          : state?.from,
        { replace: true }
      );
  };

  useEffect(() => {
    return () => setValues(defaultValues);
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div>
           <div className='profile-row1'><Link to='/' style={{color: 'black', textDecoration: 'none'}}><AiOutlineArrowLeft /></Link> <Link to='/' style={{color: 'black', textDecoration: 'none'}}>&nbsp; <span>Back</span></Link></div>
    
    <div className='container-fluid'>
    
      <div className='row'>
        <div className='col-md-6 img-div'>
          <img src={Mask} alt='error' className='img-fluid' style={{height: "80%", margin: "auto", marginTop: "10%", marginLeft: "5%"}}  />
        </div>

        <div className='col-md-6 body-content' style={{margin: "auto", padding: "30px"}}>
          <h4>Join Us</h4>
          <b>Create an account to finish customizing your product and place your order</b>
			 <form onSubmit={onSubmit}>

			 <div className='mb-3'>
              <label htmlFor='name' className='form-label' style={{
                width: '100%',
                border: 'none',
                outline: 'none',
                borderRadius: '5px',
                padding: '5px 10px',
                fontSize: '17px',
              }}>
                Name
              </label>
              <input
               
                className='form-control'
                id='name'
               
					 type='text'
					 name='full_name'
					 placeholder='eg Kumar Jhon'
                value={formValues.full_name}
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
                       <div className='mb-3 checkbox-input'>
              <input
                type='checkbox'
                name='agreed'
                id='agreeed'
                checked={agreed}
                onChange={onChecked}
              />{' '}
              <span>
                I agree to Ubrikk's &nbsp;
                <Link to='/terms'> terms </Link> &nbsp;and &nbsp;
                <Link to='/conditions'> Conditions </Link>&nbsp;
              </span>
            </div>
            <div className='mb-3'>
              <Link to='/signin'>
                <button  
					  className='btn btn-primary' style={{
						width: '100%',
						border: 'none',
						outline: 'none',
						borderRadius: '10px',
						padding: '8px',
						fontSize: '17px',
						backgroundColor: 'blue',
						fontWeight: '800',
						color: 'white',
					 }}
					 >Create Account</button>
              </Link>
            </div>
				</form>
          {/* <form onSubmit={onSubmit}>
            <div className='mb-3'>
              <label>
                Name
                <br />
                <input
                  type='text'
                  name='full_name'
                  value={formValues.full_name}
                  onChange={onChange}
                  placeholder='eg Kumar Jhon'
                />
              </label>
            </div>
            <div className='mb-3'>
              <label>
                Email
                <br />
                <input
                  type='email'
                  name='email'
                  value={formValues.email}
                  onChange={onChange}
                  placeholder='eg abc@example.com'
                />
              </label>
            </div>
            <div className='mb-3'>
              <label>
                Password
                <br />
                <input
                  type='password'
                  placeholder='***********'
                  name='password'
                  value={formValues.password}
                  onChange={onChange}
                />
              </label>
            </div>
            <div className='mb-3 checkbox-input'>
              <input
                type='checkbox'
                name='agreed'
                id='agreeed'
                checked={agreed}
                onChange={onChecked}
              />{' '}
              <span>
                I agree to Ubrikk's &nbsp;
                <Link to='/terms'> terms </Link> &nbsp;and &nbsp;
                <Link to='/conditions'> Conditions </Link>&nbsp;
              </span>
            </div>
            <div className='mb-3'>
              <Link to='/signin'>
                <button>Create Account</button>
              </Link>
            </div>
          </form> */}
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
			 <br/>
          <b style={{ textAlign: 'center' }}>
            Already have an account? <Link to='/signin'>Login Here</Link>
          </b>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Signup;




/*import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadingState, RegisterUser } from 'redux/features/auth';

import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import './Style.css';

import Mask from '../../assets/img/Mask.png';
import { toast } from 'react-toastify';

const defaultValues = { full_name: '', email: '', password: '' };

function Signup() {
	function clickHandle(){
		window.open("/signin","_self")
	}
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { state } = useLocation();
	const isLoading = useSelector(loadingState);
	const [formValues, setValues] = useState(defaultValues);
	const [agreed, setAgreed] = useState(false);

	const onChange = (e) => setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));

	const onChecked = (e) => setAgreed(e.target.checked);

	const onSubmit = async (e) => {
		e.preventDefault();
		if (!formValues.email || !formValues.full_name || !formValues.password)
			return toast.warning('Please fill all fields');
		if (!agreed) return toast.warn('Read terms and conditions and check checkbox');
		const res = await dispatch(RegisterUser(formValues));
		!res.error &&
			navigate(
				!state || state?.from.pathname === '/' || state?.from?.pathname === '/login'
					? '/profile'
					: state?.from,
				{ replace: true }
			);
	};

	useEffect(() => {
		return () => setValues(defaultValues);
	}, []);

	return isLoading ? (
		window.alert("Account created go to Login")
	) : (
		<div className='sign-main-div'>
			<div className='img-div'>
				<img src={Mask} alt='error' />
			</div>

			<div className='body-content'>
				<h4>Join Us</h4>
				<b>Create an account to finish customizing your product and place your order</b>
				<br />
				<br />
				<form onSubmit={onSubmit}>
					<label>
						Name <br />
						<input
							type='text'
							name='full_name'
							value={formValues.full_name}
							onChange={onChange}
							placeholder='eg Kumar Jhon'
						/>
					</label>
					<br />
					<br />
					<label>
						Email <br />
						<input
							type='email'
							name='email'
							value={formValues.email}
							onChange={onChange}
							placeholder='eg abc@example.com'
						/>
					</label>
					<br />
					<br />
					<label>
						Password <br />
						<input
							type='password'
							placeholder='***********'
							name='password'
							value={formValues.password}
							onChange={onChange}
						/>
					</label>
					<br />
					<br />
					<br />
					<label className='checkbox-input'>
						<input
							type='checkbox'
							name='agreed'
							id='agreeed'
							checked={agreed}
							onChange={onChecked}
						/>{' '}
						<span>
							I agree to Ubrikk's &nbsp;
							<Link to='/terms'> terms </Link> &nbsp;and &nbsp;
							<Link to='/conditions'> Conditions </Link>&nbsp;
						</span>
					</label>
					<br />
					<br />
					<br />
					
					<button type='submit' onClick={clickHandle} >Create Account</button> <br />
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
					Already have an account? <Link to='/signin'>Login Here</Link>
				</b>
			</div>
		</div>
	);
}

export default Signup;*/
