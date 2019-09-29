const storeUser = (token) => {
    if (typeof token !== 'undefined' && window.localStorage.getItem("authToken") === null) {
        window.localStorage.setItem("authToken", token)
        console.log("User Stored");
    }
}

export default storeUser;