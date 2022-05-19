const base = "http://localhost:8080/api/v1/";

const routes = {
    causes: {
        addCause: "cause/addCause",
        getAll: "cause/getAllCauses",
        getCause: (id) => `cause/getCause/${id}`,
        deleteCause: (id) => `cause/deleteCause/${id}`
    },
    donations: {
        makeDonation: "donation/addDonation",
        getAllDonations: "donation/getAllDonations",
        myDonations: (id) => `donation/getDonation/${id}`,
    },
    profile: {
        setupProfile: "user/registerUser",
        getProfile: "user/viewUserData",
        getProfileForUser: (email) => `user/viewUserData/?email=${email}`,
    },
}

export { base, routes };