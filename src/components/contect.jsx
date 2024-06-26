import React, { useEffect, useState } from "react";
import {Typography ,TextField} from '@mui/material'
import {Box,Button} from '@mui/material'

const form = () => {
  const data = { name: "", lastname: "", phone: "" ,address: ""};
  const [inputdata, setinputdata] = useState(data);
  const [flage,setflage] = useState(false)
  useEffect(()=>{
      console.log("registrad");
  },[flage])
  const handledata = (e)=>{
    setinputdata({ ...inputdata, [e.target.name]: e.target.value})
    console.log(inputdata)
  }
  const handlesubmit = (e) =>{
    e.preventDefault();
    if(!inputdata.name || !inputdata.lastname || !inputdata.phone || !inputdata.address){
      alert('All fields are Mandatory')
    }
    else{
       setflage(true)
    }
  }
  return (
    <>
    <pre>{(flage)? <h2 className="ui-define">{inputdata.name},u are registrad Sucessfully</h2> : ""}</pre>
    <Box>
    <form className="container" onSubmit={handlesubmit}>
      <div className="header">
      <Typography variant='h4' mt={4} mb={4}>
            Contact Us
        </Typography>
      </div>
      <div>
        <TextField 
          type="text"
          name="name"
          label="First name"
          variant="outlined"
          sx={{width:"360px", m:1}}
          value={inputdata.name}
          onChange={handledata}
        >
        
        </TextField>
        <TextField
          type="text"
          name="lastname"
          label="last Name"
          variant="outlined"
          sx={{width:"360px", m:1}}
          value={inputdata.lastname}
          onChange={handledata}
          >
          </TextField>
        
        <TextField
          type="number"
          name="phone"
          label="Phone Number"
          variant="outlined"
          sx={{width:"360px", m:1}}
          value={inputdata.password}
          onChange={handledata}
          > 
          </TextField>
          <TextField
          type="text"
          name="address"
          label="address"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          sx={{width:"360px", m:1}}
          value={inputdata.address}
          onChange={handledata}
          > 
          </TextField>
        
        <Button size='large' variant='contained' type='Submit' sx={{m:7 ,borderRadius:5}} >Submit</Button>
      </div>
    </form>
    </Box>
    </>
  );
};

export default form;
