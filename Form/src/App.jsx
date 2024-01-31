import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    userFirstName: '',
    userLastName: '',
    userEmail: '',
    userPhoneNumber: '',
  })
  const [userAlerts, setUserAlerts] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  })
  const [focusState, setFocusState] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phoneNumber: false,
  })

  const [registrationSuccess, setRegistrationSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFocus = (name) => {
    setFocusState((prevfocusState) => ({ ...prevfocusState, [name]: true }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAlerts = {};

    if (formData.userFirstName === '') {
      newAlerts.firstName = 'Please enter your first name.';
    } else {
      newAlerts.firstName = '';
    }

    if (formData.userLastName === '') {
      newAlerts.lastName = 'Please enter your last name.';
    } else {
      newAlerts.lastName = '';
    }

    if (formData.userPhoneNumber === '') {
      newAlerts.phoneNumber = 'Please enter your phone number.';
    } else {
      newAlerts.phoneNumber = '';
    }

    if (formData.userEmail === '') {
      newAlerts.email = 'Please enter your email.';
    } else {
      newAlerts.email = '';
    }

    setUserAlerts(newAlerts);

    if (
      newAlerts.firstName === '' &&
      newAlerts.lastName === '' &&
      newAlerts.phoneNumber === '' &&
      newAlerts.email === ''
    ) {
      setRegistrationSuccess(true);
    }
  }

  return (
    <>
      <div className="App">
        {registrationSuccess && (
          <div style={{ backgroundColor: 'blue', color: 'white', padding: '10px', marginTop: '10px', borderRadius: '8px', textAlign: 'center' }}>
            Registration Successful!
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <label>
            <input type='text' name="userFirstName" value={formData.userFirstName} onChange={handleChange} placeholder="Enter your first name" onFocus={() => handleFocus('firstName')} style={{ borderColor: focusState.firstName ? 'navy' : '#ccc' }} />
            <div className="alert">{userAlerts.firstName}</div>
          </label>
          <br />
          {/* For last name  */}
          <label>
            <input type='text' name="userLastName" value={formData.userLastName} onChange={handleChange} placeholder="Enter your last name" onFocus={() => handleFocus('lastName')} style={{ borderColor: focusState.lastName ? 'navy' : '#ccc' }} />
            <div className="alert">{userAlerts.lastName}</div>
          </label>
          <br />
          {/* For email */}
          <label>
            <input type='email' name="userEmail" value={formData.userEmail} onChange={handleChange} placeholder="Enter your email" onFocus={() => handleFocus('email')} style={{ borderColor: focusState.email ? 'navy' : '#ccc' }} />
            <div className="alert">{userAlerts.email}</div>
          </label>
          <br />
          {/* For phone number */}
          <label>
            <input type='tel' name="userPhoneNumber" value={formData.userPhoneNumber} onChange={handleChange} placeholder="Enter your phone number" onFocus={() => handleFocus('phoneNumber')} style={{ borderColor: focusState.phoneNumber ? 'navy' : '#ccc' }} />
            <div className="alert">{userAlerts.phoneNumber}</div>
          </label>
          <br />
          {/* submit button  */}
          <button id='submit' type='submit' style={{ backgroundColor: 'green', color: 'white', padding: '10px', border: 'none', cursor: 'pointer' }}>Register</button>
        </form>
      </div>
    </>
  )
}

export default App
