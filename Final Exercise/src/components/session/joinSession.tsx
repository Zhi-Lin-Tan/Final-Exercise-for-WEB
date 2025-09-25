import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import '../../App.css'

export default function JoinSession() {

    const { id } = useParams();

    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });
    const [saveButtonClicked, setSaveButtonClicked] = useState(false);

    

    function handleUserDataChange(event, fieldName) {
        setUserData({
        ...userData,
        [fieldName]: event.target.value
        });
    }

    function handleSave() {
        const sessions = JSON.parse(localStorage.getItem("sessions") || "[]");
        const sessionIndex = Number(id);

        if (sessions[sessionIndex]) {
            if (!sessions[sessionIndex].attendees) sessions[sessionIndex].attendees = [];
            sessions[sessionIndex].attendees.push(userData);
            localStorage.setItem("sessions", JSON.stringify(sessions));
            setSaveButtonClicked(true);
        } else {
            alert("Session not found!");
        }
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
                    <div>
                        <button onClick={handleSave}>Save</button>
                    </div>
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
