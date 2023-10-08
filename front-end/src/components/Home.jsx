import React, {useState, useEffect} from 'react'
import authService from '../services/authService';
import UserService from '../services/userServices';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    const [currentUser,setCurrentUser] = useState(undefined);
    const [events,setEvents] = useState([{id:'1',name:'srg'},{id:'2',name:'SG'}]);
    const [userEvents,setUserEvents] = useState([]);
    useEffect(()=>{
        const user = authService.getCurrentUser();
        if (user) {
            setCurrentUser(user);
            const userId= user.user.userId;
            axios.post("http://127.0.0.1:3000/userEvents",{userId}).then(res=>{
            setUserEvents(res.data);
        })

        }
        var eventDetails=[]
        UserService.getGloabalEvents().then(res=>{
            res.map(obj=>{
                eventDetails.push(obj);
            });
            if(res.length !== 0) setEvents(eventDetails);
        });
        // console.log(eventDetails)
        
    },[]);
    // console.log(events)
    const search = (id) => {
        if(currentUser) {
            console.log(currentUser);
            for(let i=0;i<userEvents.length;i++) {
                if(userEvents[i]==id) return true;
            }
            return false;
        }
        return false;
    }

    const handleRegister =  (obj) => {
        if(!currentUser) {
            navigate("/login");
            window.location.reload();
        }
        else {
            const flag = search(obj.eventId);
            var event;
            if(flag) {
                UserService.getEventDetails(obj.eventId).then((response) => {event = response.data});
                if(event.started) {
                    navigate("/meet/"+`${obj.eventId}`);
                    window.location.reload();
                }
                else {
                    window.location.reload();
                }
            }
            else {
                // if(true) {
                    console.log("hi")
                    UserService.registerEvent(currentUser.user.userId,obj.eventId);
                    window.location.reload();
                // }
                // else {
                //     //payement gateway
                // }
            }
        }
    }
    const handleLogOut = ()=>{
        authService.logout();
        navigate('/');
        window.location.reload();
    }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'#e3f2fd'}}>
  <a className="navbar-brand" href="#"><strong>Host - It !!!</strong></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    {currentUser ? 
        <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#">Contact Us</a>
        </li>
        
        <li className="nav-item">
        <button className="nav-link" onClick={handleLogOut}>Logout</button>
        </li>
    </ul>
    : 
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact Us</a>
      </li>
      
      <li className="nav-item">
        <a className="nav-link" href="/signinh">LoginIN</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/signuph">Signup</a>
      </li>
    </ul>
    }
  </div>
</nav>
<div>
    <h1 className='m-5' style={{textAlign:"center"}}>UpComming Events</h1>
    {/* {events[0].name} */}
    {events.map(obj => (
        <div key="1" className="container-fluid mt-5" style={{maxWidth:"56rem"}}>
            <div className="row">
                <div className="col-12 mt-3">
                    <div className="card">
                        <div className="card-horizontal">
                            <div className="img-square-wrapper">
                                <img className="" src="http://via.placeholder.com/300x180" alt="Card image cap"/>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">{obj.title} </h4>
                                <p className="card-text">{obj.description}</p>
                                <div className='d-flex flex-row-reverse'><button type="button" onClick={()=> {handleRegister(obj)}} className="btn btn-success">{search(obj.eventId) ? "Join" : "Register"}</button></div>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <h1 key="1">{obj.name}</h1>
    ))}
    </div>
    </div>
  )
}
