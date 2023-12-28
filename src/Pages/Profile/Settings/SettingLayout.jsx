import React, { useState } from 'react';
import './setting-layout.css'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import team1 from '../../../assets/img/profile/team-1.jpg'
import Switch from '@material-ui/core/Switch'; 

function AccountSetting() {
  const [photo, setPhoto] = useState(team1);

  const [profile, setProfile] = useState({
    name: 'John Kumar',
    email: 'Johnkumar@me.com',
  });

  const [editMode, setEditMode] = useState({
    name: false,
    email: false,
  });

  const handleEditClick = (field) => {
    setEditMode({ ...editMode, [field]: true });
  };

  const handleSaveClick = (field) => {
    setEditMode({ ...editMode, [field]: false });
    // Save the changes to the server or update state as needed
  };

  const handleInputChange = (field, event) => {
    setProfile({ ...profile, [field]: event.target.value });
  };

  const handleRemovePhoto = () => {
    // Handle removing the profile photo here, set to a default photo
    setPhoto('default.jpg');
  };

  const handleEditPhoto = () => {
    // Create a file input element and trigger a click event to open the file picker dialog
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.onchange = (e) => {
      const selectedFile = e.target.files[0];
      if (selectedFile) {
        // Assuming you have a function to upload the file to your server
        // Replace the following line with your actual file upload logic
        // uploadPhoto(selectedFile).then((newPhotoURL) => {
        //   setPhoto(newPhotoURL);
        // });
        
        // Here, we're simulating a new photo URL using a local URL
        const newPhotoURL = URL.createObjectURL(selectedFile);
        setPhoto(newPhotoURL);
      }
    };
    fileInput.click();
  }

  const [isConnected, setIsConnected] = useState(true);

  // Function to toggle the button state
  const toggleConnection = () => {
    setIsConnected(!isConnected);
  };
  
  const [isConnectedInsta, setIsConnectedInsta] = useState(true);

  // Function to toggle the button state
  const toggleConnectionInsta = () => {
    setIsConnectedInsta(!isConnected);
  };

  return (
    <>
      <h4>Your Account</h4>
      <h6>Profile photo</h6>
      {/* profile photo section here */}
  

      <div className="user-switch-details">
  <img src={photo} alt="Profile Photo" />
  <button className='transparent-btn' onClick={handleRemovePhoto}>Remove Photo</button>
  <button onClick={handleEditPhoto}>Change Photo</button>
</div>

      <hr />

      <div className="user-switch-details">
        <div>
          <h6>Name</h6>
          {editMode.name ? (
            <input
              type="text"
              value={profile.name}
              onChange={(e) => handleInputChange('name', e)}
            />
          ) : (
            <p>{profile.name}</p>
          )}
        </div>
        {editMode.name ? (
          <button onClick={() => handleSaveClick('name')}>Save</button>
        ) : (
          <button onClick={() => handleEditClick('name')}>Edit</button>
        )}
      </div>

      <div className="user-switch-details">
        <div>
          <h6>Email Address</h6>
          {editMode.email ? (
            <input
              type="text"
              value={profile.email}
              onChange={(e) => handleInputChange('email', e)}
            />
          ) : (
            <p>{profile.email}</p>
          )}
        </div>
        {editMode.email ? (
          <button onClick={() => handleSaveClick('email')}>Save</button>
        ) : (
          <button onClick={() => handleEditClick('email')}>Edit</button>
        )}
      </div>

      <hr />
      
      {/* social accounts section here */}
   
<br />
<h6>Social Accounts</h6>
<p>Services you can use to log in</p>

<div className="social-div">
  <div>
    <BsFacebook style={{ fontSize: "25px", color: "blue" }} />
    <div>
      <h6>Facebook</h6>
      <p>John Kumar</p>
    </div>
  </div>
  <button className='setting-btn'onClick={toggleConnection}>
        {isConnected ? 'Connect' : 'Disconnect'}</button>
</div>

<div className="social-div">
  <div>
    <AiFillTwitterCircle style={{ fontSize: "28px", color: "blue" }} />
    <div>
      <h6>Twitter</h6>
      <p>John Kumar</p>
    </div>
  </div>
  <button className='setting-btn'onClick={toggleConnectionInsta}>
        {isConnectedInsta ? 'Connect' : 'Disconnect'}</button>
</div>

    </>
  );
}




function LoginSecurity() {
  return (
    <>
      <h4>Login and Security</h4>
      <h6>Change password</h6> 
      <p className='setting-p'>Change your password if you feel someone has access to your account</p>

      <button className='setting-btn'>Change Password</button>

      <br /><br /><hr /><br />

      <h6>Delete your account</h6>
      <p  className='setting-p'>By deleting your account, you’ll no longer be able to access any of Ubrikk’s unique features.</p>

      <button className='setting-btn'>Delete Account</button>


    </>
  )
} 

function Notification() {
  return (
    <>
      <h4>Notification</h4>
      <h6>Account notification</h6>
      <p className='setting-p'>Choose the type of notifications you would like to receive</p>


      <div className="user-notification">
        <div>
          <input type="checkbox" />
          <p className="setting-p">Password change</p>
          <input type="checkbox" />
          <p className="setting-p">Successful payment</p>
        </div>
        <div>
          <input type="checkbox" />
          <p className="setting-p">Order delivered</p>
          <input type="checkbox" />
          <p className="setting-p">Order cancelled</p>
        </div>
      </div>

      <hr />


      <h6>Email notification</h6>
      <p className='setting-p'>Decide which email you would like to receive from us</p>

      <div className="user-switch-details">
        <div>
          <h6>Weekly Update</h6>
          <p>Get weekly update of what’s happening on Ubrikk</p>
        </div>
        <Switch color="primary"  />
      </div>

      <div className="user-switch-details">
        <div>
          <h6>Monthly Update</h6>
          <p>Get monthly update of what’s happening on Ubrikk</p>
        </div>
        <Switch color="primary" />
      </div>

      <div className="user-switch-details">
        <div>
          <h6>Recommendations</h6>
          <p>Discover recommended templates</p>
        </div>
        <Switch color="primary"  />
      </div>

      <div className="user-switch-details">
        <div>
          <h6>Holiday Greetings</h6>
          <p>Opt in to receive holiday greetings from us</p>
        </div> 
        <Switch color="primary" />
      </div>


    </>
  )
}

function BillingPayment() {
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingBillingAddress, setIsEditingBillingAddress] = useState(false);
  const [isEditingPaymentType, setIsEditingPaymentType] = useState(false);
  const [isEditingCardHolderName, setIsEditingCardHolderName] = useState(false);
  const [isEditingCardNumber, setIsEditingCardNumber] = useState(false);
  const [isEditingExpirationDate, setIsEditingExpirationDate] = useState(false);
  const [isEditingCvv, setIsEditingCvv] = useState(false);

  const [name, setName] = useState('John Kumar');
  const [billingAddress, setBillingAddress] = useState('4517 Washington Ave. Manchester, Kentucky 39495');
  const [selectedPaymentType, setSelectedPaymentType] = useState('Credit Card');
  const [cardHolderName, setCardHolderName] = useState('John Kumar');
  const [cardNumber, setCardNumber] = useState('8934 9324 2343 3244');
  const [expirationDate, setExpirationDate] = useState('04/25');
  const [cvv, setCvv] = useState('***');

  const handleEditName = () => {
    setIsEditingName(true);
  };

  const handleSaveName = () => {
    // Save the updated name
    setIsEditingName(false);
  };

  const handleEditBillingAddress = () => {
    setIsEditingBillingAddress(true);
  };

  const handleSaveBillingAddress = () => {
    // Save the updated billing address
    setIsEditingBillingAddress(false);
  };

  const handleEditPaymentType = () => {
    setIsEditingPaymentType(true);
  };

  const handleSavePaymentType = () => {
    // Save the updated payment type
    setIsEditingPaymentType(false);
  };

  const handleEditCardHolderName = () => {
    setIsEditingCardHolderName(true);
  };

  const handleSaveCardHolderName = () => {
    // Save the updated card holder name
    setIsEditingCardHolderName(false);
  };

  const handleEditCardNumber = () => {
    setIsEditingCardNumber(true);
  };

  const handleSaveCardNumber = () => {
    // Save the updated card number
    setIsEditingCardNumber(false);
  };

  const handleEditExpirationDate = () => {
    setIsEditingExpirationDate(true);
  };

  const handleSaveExpirationDate = () => {
    // Save the updated expiration date
    setIsEditingExpirationDate(false);
  };

  const handleEditCvv = () => {
    setIsEditingCvv(true);
  };

  const handleSaveCvv = () => {
    // Save the updated CVV
    setIsEditingCvv(false);
  };

  return (
    <>
      <h4>Billing and Payment info</h4>
      <h6>Billing Address</h6>

      <div className="user-switch-details">
        <div>
          <h6>Name</h6>
          {isEditingName ? (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          ) : (
            <p>{name}</p>
          )}
        </div>
        {isEditingName ? (
          <button onClick={handleSaveName}>Save</button>
        ) : (
          <button onClick={handleEditName}>Edit</button>
        )}
      </div>

      <div className="user-switch-details">
        <div>
          <h6>Billing Address</h6>
          {isEditingBillingAddress ? (
            <input
              type="text"
              value={billingAddress}
              onChange={(e) => setBillingAddress(e.target.value)}
            />
          ) : (
            <p>{billingAddress}</p>
          )}
        </div>
        {isEditingBillingAddress ? (
          <button onClick={handleSaveBillingAddress}>Save</button>
        ) : (
          <button onClick={handleEditBillingAddress}>Edit</button>
        )}
      </div>

      <hr />

      <h6>Payment method</h6>

      <div className="user-switch-details">
        <div>
          <h6>Payment Type</h6>
          {isEditingPaymentType ? (
            <select
              className="payment-type"
              value={selectedPaymentType}
              onChange={(e) => setSelectedPaymentType(e.target.value)}
            >
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
            </select>
          ) : (
            <p>{selectedPaymentType}</p>
          )}
        </div>
        {isEditingPaymentType ? (
          <button onClick={handleSavePaymentType}>Save</button>
        ) : (
          <button onClick={handleEditPaymentType}>Edit</button>
        )}
      </div>

      <div className="user-switch-details">
        <div>
          <h6>Card Holder's Name</h6>
          {isEditingCardHolderName ? (
            <input
              type="text"
              value={cardHolderName}
              onChange={(e) => setCardHolderName(e.target.value)}
            />
          ) : (
            <p>{cardHolderName}</p>
          )}
        </div>
        {isEditingCardHolderName ? (
          <button onClick={handleSaveCardHolderName}>Save</button>
        ) : (
          <button onClick={handleEditCardHolderName}>Edit</button>
        )}
      </div>

      <div className="user-switch-details">
        <div>
          <h6>Card Number</h6>
          {isEditingCardNumber ? (
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          ) : (
            <p>{cardNumber}</p>
          )}
        </div>
        {isEditingCardNumber ? (
          <button onClick={handleSaveCardNumber}>Save</button>
        ) : (
          <button onClick={handleEditCardNumber}>Edit</button>
        )}
      </div>

      <div className="user-switch-details">
        <div>
          <h6>Expiration Date</h6>
          {isEditingExpirationDate ? (
            <input
              type="text"
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
            />
          ) : (
            <p>{expirationDate}</p>
          )}
        </div>
        {isEditingExpirationDate ? (
          <button onClick={handleSaveExpirationDate}>Save</button>
        ) : (
          <button onClick={handleEditExpirationDate}>Edit</button>
        )}
      </div>

      <div className="user-switch-details">
        <div>
          <h6>CVV</h6>
          {isEditingCvv ? (
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          ) : (
            <p>{cvv}</p>
          )}
        </div>
        {isEditingCvv ? (
          <button onClick={handleSaveCvv}>Save</button>
        ) : (
          <button onClick={handleEditCvv}>Edit</button>
        )}
      </div>
    </>
  );
}



export default AccountSetting
export { LoginSecurity, Notification, BillingPayment }