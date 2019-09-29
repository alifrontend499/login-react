import axios from 'axios';

const checkUser = async () => {
    if (window.localStorage.getItem('authToken') !== null) {
        const token = window.localStorage.getItem('authToken');
        await axios.get(
            'http://localhost:5000/api/user/checkuser',
            { headers: { "authorization": token } }
        ).then(function (response) {
            return {
                date: response.data,
                isAutheniticated: true
            }
        }).catch(function (error) {
            console.log(error);
        });
    }
}
// MONGOLAB_URI="mongodb+srv://ash232:ashum499@cluster0-6mrv8.mongodb.net/test?retryWrites=true&w=majority"
// SECRET_KEY = securityIsTheMainPriority
export default checkUser;