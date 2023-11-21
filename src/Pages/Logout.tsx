import {useEffect} from 'react';

const Logout = () => {

    useEffect(() => {
        try{
            const token = localStorage.getItem("token");
            if(token){
                localStorage.removeItem("token");
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