import {createSlice} from "@reduxjs/toolkit";

const profile = {
    firstName: 'Bin',
    lastName: 'Feng',
    handle: '@fengbin',
    profilePicture: 'bin.jpg',
    bannerPicture: 'banner.jpg',
    bio: 'NEU CS student',
    website: 'www.youtube.com',
    location: 'Portland, ME',
    dateOfBirth : '32-13-1999',
    dateJoined: ' 03-2023',
    followingCount: 340,
    followersCount: 223
}

const profileSlice = createSlice({
    name: "profile",
    initialState: profile,
    reducers: {
        updateProfile(state, action) {
            state.firstName = action.payload.firstName.firstName;
            state.lastName = action.payload.lastName.lastName;
            state.bio = action.payload.bio.bio;
            state.dateOfBirth = action.payload.dateOfBirth.dateOfBirth;
            state.location = action.payload.location.location;
            state.website = action.payload.website.website;
        }
    }
});

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;