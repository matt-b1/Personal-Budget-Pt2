import axios from '../../Api/axios';

export const logout = async() => {
    try {
        const response = await axios.get('/logout',
        {
            withCredentials: true
        }); 
    } catch (err) {
        console.log(err);
    }
}
