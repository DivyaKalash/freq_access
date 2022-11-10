import React, { useState } from 'react'
import { Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { accessFreq, checkAccess } from '../../actions/blockchain';
import './style.css';

const Home = (props) => {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [freq, setFreq] = useState("");
    const block = useSelector((state) =>state.blockchain);
    if (!auth.authenticate) {
        return <Redirect to={"/signin"} />;
      }
      console.log(auth.user._id);
      const getAccess = (e) =>{
            const userId = {
                "id": auth.user._id
            }
            const frequency = {
                "freq": freq
            }
        dispatch(checkAccess(userId)).then((result)=>{
            if(result){
                dispatch(accessFreq(frequency));
            }
        })
        
      }

      const renderAuthorizediv = (mess) =>{
        return(
          <div id="access" className="ress">
          <h1>Access Granted!!!</h1>
          
          <p style={{fontWeight: "bold", fontSize: "35px", paddingTop: "20px"}}>{mess}</p>
        </div>
        )
      }

      const renderUnAuthorizediv = () => {
        return(
          <div id="unccess"className="validd">
          <h1 style={{paddingTop: "25px"}}>Access Denied!!!</h1>
      
        </div>
        )
      }
    return (
        
        <Container style={{marginTop: "60px", textAlign: "center"}}>
        <h1 style={{marginTop: "120px", marginBottom: "15px"}}>Ask Access</h1>
        <label style={{paddingRight: "15px"}}for="frequency">Frequency:</label>
  <input style={{marginRight: "15px"}}type="number" id="frequency" name="frequency" min="400" max="2000" step="50" value={freq} onChange={(e)=>setFreq(e.target.value)} />
  <Button variant='primary' type='submit' onClick={getAccess}>Access</Button>
  {block.clicked && block.access ? renderAuthorizediv(block.message):null}
  {block.clicked && !block.access ? renderUnAuthorizediv() : null}
        </Container>
        
    )
}

export default Home;
