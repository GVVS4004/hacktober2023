import axios from "axios";
import authHeader from "./authHeader";

const API_URL = "http://localhost:3000/";

const getGloabalEvents = async() => {
    const res = await axios.post(API_URL + "getAllEvents");
    console.log(res);
    return res.data;
  };

  const getEventDetails = (id) => {
    return axios.post(API_URL + "getEvent" , id,{ headers: authHeader() });
  };

  const registerEvent = async(userId,eventId)=>{
    const res= await axios.post(API_URL+"userRegisterEvent",{userId,eventId});
  }


const UserService = {
  getGloabalEvents,
  getEventDetails,
  registerEvent,
};

export default UserService;