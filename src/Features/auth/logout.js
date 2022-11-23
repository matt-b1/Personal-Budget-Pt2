import axios from '../../Api/axios';

export const logout = async(setAuth, navigate) => {
    try {
        const response = await axios.get('/logout',
        {
            withCredentials: true
        }); 
        setAuth({});
        navigate('/login');
    } catch (err) {
        console.log(err);
    }
}
