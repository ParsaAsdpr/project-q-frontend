import AuthApi from '@/utils/Services/auth.api';
import {useEffect} from 'react';

const Logout = () => {

    useEffect(() => {
        try{
            const token = localStorage.getItem("token");
            if(token){
                AuthApi.logout();
                window.location.href = "/feed";
            }
        }catch(e) {
            console.log(e);
        }
    })

    return (
        <div>
            
        </div>
    );
};

export default Logout;