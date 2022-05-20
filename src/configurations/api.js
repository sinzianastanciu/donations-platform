const base = "http://localhost:8080/api/v1/";

const routes = {
    causes: {
        addCause: "cause/addCause",
        getAll: "cause/getAllCauses",
        getCause: (id) => `cause/getCause/${id}`,
        deleteCause: (id) => `cause/deleteCause/${id}`,
        updateAmountRaised: (id) => `cause/updateAmountRaised/${id}`,
        updateCause: (id) => `cause/updateCause/${id}`
    },
    donations: {
        makeDonation: "donation/addDonation",
        getAllDonations: "donation/getAllDonations",
        myDonations: (email) => `donation/getDonation/?email=${email}`,
    },
    profile: {
        setupProfile: "user/registerUser",
        getProfile: "user/viewUserData",
        updateProfile: (id) => `user/updateUser/${id}`,
        getProfileForUser: (email) => `user/viewUserData/?email=${email}`,
    },
}

export { base, routes };