import React from 'react'
import { useState } from 'react'
import '../../App.css'

export default function JoinSession() {

    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });
    const [saveButtonClicked, setSaveButtonClicked] = useState(false);

    function handleFirstNameChange(event) {   

        setUserData({
            ...userData,
            firstName: event.target.value
        });
    }

    function handleLastNameChange(event) {   
        setUserData({
            ...userData,
            lastName: event.target.value
        });
    }

    function handleEmailChange(event) {   
        setUserData({
            ...userData,
            email: event.target.value
        });
    }

    // altenative - on handling function to deal with all changes
    function handleUserDataChange(event, fieldName) {

        setUserData({
            ...userData,
            [fieldName]: event.target.value
        });
    }

    let output;
    if(saveButtonClicked === false) {
        output = <div>
                <div>
                    First Name: 
                    <input type="text" placeholder="First name" value={ userData.firstName }
                        onChange={(event) => handleUserDataChange(event, 'firstName')}/>
                </div>
                <div>
                    Last Name: 
                    <input type="text" placeholder="Last name" value={ userData.lastName }
                        onChange={(event) => handleUserDataChange(event, 'lastName')}/>
                </div>
                <div>
                    Email: 
                    <input type="email" placeholder="Email" value={ userData.email } 
                        onChange={ (event) => handleUserDataChange(event, 'email')} 
                    />
                </div>
                <div><button onClick={ () => setSaveButtonClicked(true)}>Save</button></div>
            </div>;
    } else {
        output = <div>
                Saved { userData.firstName } { userData.lastName } ({userData.email})
            </div>
    }

    return (
        <div className='joinSession'>
            <h1>Please fill the form</h1>
            { output }
        </div>
    )
}
