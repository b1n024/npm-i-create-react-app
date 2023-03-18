import React, {useState} from 'react';
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "../profile/profile-reducer";
import {Link} from "react-router-dom";

const EditProfileComponent = () => {
    const profile = useSelector(state => state.profile);
    const [firstName, setFirstName] = useState({firstName: profile.firstName});
    const [lastName, setLastName] = useState({lastName: profile.lastName});
    const [bio, setBio] = useState({bio: profile.bio});
    const [location, setLocation] = useState({location: profile.location});
    const [website, setWebsite] = useState({website: profile.website});
    const [dateOfBirth, setDateOfBirth] = useState({dateOfBirth: profile.dateOfBirth});
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const editProfile = (firstName, lastName, bio, location, website, dateOfBirth) => {
        const newProfile = {
            firstName: firstName,
            lastName: lastName,
            bio: bio,
            location: location,
            website: website,
            dateOfBirth: dateOfBirth,
        }
        dispatch(updateProfile(newProfile));
        navigate('/tuiter/profile');
    }

    return (
        <>
            <div className="position-relative">
                <div className="row mb-3">
                    <a className="col col-1" href="/tuiter/profile"><i className="bi bi-x-lg fs-4 "></i></a>
                    <div className="col"><span className="fs-4 fw-bold">Edit Profile</span></div>
                    <button className="col col-2 btn btn-dark fw-bold rounded-pill float-end"
                            onClick={() => editProfile(firstName, lastName, bio, location, website, dateOfBirth)}>
                        Save
                    </button>
                </div>
                <img src={profile.bannerPicture} width="100%" height="200px"/>
                <div className="row">
                    <div className="col col-7">
                        <img className="position-absolute rounded-circle bottom-0 start-0 ms-3"
                             height="100px" src={profile.profilePicture}/>
                    </div>
                    <div className="col">
                        <br/>
                    </div>
                </div>
            </div>
            <div className="mt-3 form-group">
                First Name
                <input type="text" className="form-control"
                       onChange={(event) => {
                           setFirstName({firstName: event.target.value})
                       }}
                       value={firstName.firstName}/><br/>

                Last Name
                <input type="text" className="form-control"
                       onChange={(event) => {
                           setLastName({lastName: event.target.value})
                       }}
                       value={lastName.lastName}/><br/>
                Bio
                <input type="text" className="form-control"
                       onChange={(event) => {

                           setBio({bio: event.target.value})
                       }}
                       value={bio.bio}/><br/>
                Location
                <input type="text" className="form-control"
                       onChange={(event) => {
                           setLocation({location: event.target.value})
                       }}
                       value={location.location}/><br/>
                Website
                <input type="text" className="form-control"
                       onChange={(event) => {
                           setWebsite({website: event.target.value})
                       }}
                       value={website.website}/><br/>
                Date of Birth
                <input type="date" className="form-control"
                       onChange={(event) => {
                           setDateOfBirth({dateOfBirth: event.target.value})
                       }}
                       value={dateOfBirth.dateOfBirth}/><br/>

            </div>
        </>
    )
}

export default EditProfileComponent;