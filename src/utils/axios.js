import axios from 'axios'

    function init(){

        
        let token='';
        
        const userInfoString=localStorage.getItem('user')
        
        if(userInfoString){
            const  user=JSON.parse(userInfoString)
            token=user.token
        }
        
        const instance=axios.create({
            baseURL:`http://localhost:5000`,
            headers:{'authorization':`Bearer ${token}`}
        })
    return instance;
    }
    


export default init;