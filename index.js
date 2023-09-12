import React, { useState } from 'react';eval 
import ReactDOM from 'react-dom';
import './index.css'; 

function ProfilePage() {
    // initial user details ( fetch these from a backend later)
    const initialDetails = {
        fullName: 'John Doe',
        gender: 'Male',
        country: 'United States',
        state: 'California',
        phone: '+1 (123) 456-7890',
        language: 'English',
        email: 'johndoe@example.com', 
    };

    
    const [userDetails, setUserDetails] = useState(initialDetails);
    const [isEditing, setIsEditing] = useState(false);

    // handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({
            ...userDetails,
            [name]: value,
        });
    };

    // saving edited details
    const handleSave = () => {
        setIsEditing(false);
    };

    return (
        <div className="profile-page">
            <div className="profile-header">
                <h1>Profile</h1>
               <button className="verification-button">Verify</button>
            </div>
            <div className="profile-card">
                <div className="profile-content">
                    <div className="profile-picture">
                        
                        <img
                            src="https://picsum.photos/150" //image URL
                            alt="Profile"
                            className="profile-image"
                        />
                    </div>
                    <div className="profile-details-section">
                        <h2 style={{ fontWeight: 'bold', fontSize: '24px', margin: '0' }}>
                            {userDetails.fullName}
                        </h2>
                        <p style={{ margin: '0' }}>{userDetails.email}</p>
                    </div>
                    <button className="edit-button" onClick={() => setIsEditing(true)}>
                        Edit
                    </button>
                    </div>
                
               
                <div className="profile-columns">
                    <div className="profile-column">
                        <div className="profile-field">
                            {isEditing ? (
                                <input
                                    type="text"
                                    name="fullName"
                                    value={userDetails.fullName}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                <>
                                    <label>Full Name:</label>
                                    <span>{userDetails.fullName}</span>
                                </>
                            )}
                        </div>
                        <div className="profile-field">
                            {isEditing ? (
                                <input
                                    type="text"
                                    name="country"
                                    value={userDetails.country}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                <>
                                    <label>Country:</label>
                                    <span>{userDetails.country}</span>
                                </>
                            )}
                        </div>
                        <div className="profile-field">
                            {isEditing ? (
                                <input
                                    type="text"
                                    name="phone"
                                    value={userDetails.phone}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                <>
                                    <label>Phone:</label>
                                    <span>{userDetails.phone}</span>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="profile-column">
                        <div className="profile-field">
                            {isEditing ? (
                                <input
                                    type="text"
                                    name="gender"
                                    value={userDetails.gender}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                <>
                                    <label>Gender:</label>
                                    <span>{userDetails.gender}</span>
                                </>
                            )}
                        </div>
                        <div className="profile-field">
                            {isEditing ? (
                                <input
                                    type="text"
                                    name="state"
                                    value={userDetails.state}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                <>
                                    <label>State:</label>
                                    <span>{userDetails.state}</span>
                                </>
                            )}
                        </div>
                        <div className="profile-field">
                            {isEditing ? (
                                <input
                                    type="text"
                                    name="language"
                                    value={userDetails.language}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                <>
                                    <label>Language:</label>
                                    <span>{userDetails.language}</span>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <ProfilePage />
    </React.StrictMode>,
    document.getElementById('root')
);
