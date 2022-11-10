import React, { useEffect, useState } from 'react'
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { grantAccess } from '../../actions';
import { registeredUsers } from '../../actions';


const Home = (props) => {
    const dispatch = useDispatch();
    const [userId, setUserId] = useState("");
    const registereduser = useSelector(state => state.registeredusers);
    useEffect(()=>{
        dispatch(registeredUsers());
    }, []);
    
    const gAccess = (e) => {
        let name ="";
    for(let use of registereduser.userList){
        console.log(use._id);
        if(use._id == userId){
            name = use.name;
            break;
        }
    }
        const user = {
            "name": name,
            "userId": userId
        }
        dispatch(grantAccess(user));
    }
    const createUserList = (users) => {
        return(
            
            <select style={{marginRight: "15px"}}value={userId} onChange={(e) => setUserId(e.target.value)}>
        {users.length > 0
            ? users.map((user)=>(
           <option key={user._id} value={user._id} name={user.name}>{user._id}</option>
            ))
            :null
        }
        </select>
        )
    }

    
    return (
        
        
        <Container style={{marginTop: "60px", textAlign: "center"}}>
        <h1 style={{marginTop: "120px", marginBottom: "15px"}}>User Access</h1>
        
        <label style={{paddingRight: "15px"}}>User Id:</label>
                {createUserList(registereduser.userList)}
                <Button variant='primary' type='submit' onClick={gAccess}>
                    Grant Access
                </Button>
         
        </Container>
        
    )
}

export default Home;
