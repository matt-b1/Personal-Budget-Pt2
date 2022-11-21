import axios from '../../Api/axios';
import jwt_decode from "jwt-decode";

export const refresh = async(setAuth, setLoading, navigate) => {
    try {
        const response = await axios.get('/refresh', 
        {
            withCredentials: true //need with credentials to persist login
        });
        if (response.status === 200) {
            const token = response.data.accessToken;
            //console.log(token);
            const decoded = jwt_decode(token);
            const user = decoded.UserInfo.username;
            //console.log(user);
            setAuth({user, token});
            setLoading(false);
            navigate('/budget', { replace: true });
        } else {
            console.log('Could not find refresh token');
            setLoading(false);
            navigate('/login', { replace: true });
        }
    } catch (err) {
        console.log(err);
        setLoading(false);
        if (window.location.pathname === '/budget') {
            navigate('/login', { replace: true });
        }
    }
}
