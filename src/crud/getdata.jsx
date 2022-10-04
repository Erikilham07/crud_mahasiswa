import axios from 'axios';
import {React,useState} from 'react';

const Getdata = () => {

    const [data,setData] = useState([]);
    const fetchData = async () => {
        try{
            const response = await axios.get('http://localhost:8077/get'); 
            console.log(response.data);
        }
        catch(error){
            console.log(error);
        }
          
    }
    return (
        <div>
            
        </div>
    );
}

export default Getdata;
