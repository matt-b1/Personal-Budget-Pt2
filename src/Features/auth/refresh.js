import axios from '../../Api/axios';
import jwt_decode from "jwt-decode";

export const refresh = async(setAuth, setLoading) => {
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
            console.log('loop');
            setAuth({user, token});
            setLoading(false);
        } else {
            console.log('Could not find refresh token');
            setLoading(false);
        }
    } catch (err) {
        console.log(err);
        setLoading(false);
        
        }
    }

