/* eslint-disable no-unreachable */
import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getAllUsers: function() {
       return axios.get('https://randomuser.me/api/?results=20&nat=us')
        .then(response => {
            console.log(response.data.results);
        }).catch(err => {
            alert("Error get detail user : "+err)
        })
        
    }  
};