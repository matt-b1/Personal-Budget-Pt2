import axios from '../../Api/axios';

export const testRefresh = async(test, setTest) => {
    try {
        const response = await axios.get('/refresh', 
        {
            withCredentials: true //need with credentials to persist login
        });
        if (response.status === 200) {
            setTest(true);
            return test;
        } else {
            setTest(false);
            return test;
        }
    } catch (err) {
        console.log(err);
    }
}
