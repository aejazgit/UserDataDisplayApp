import React from 'react';
import { useHistory} from 'react-router-dom';

const singleUser = {
    background: "lightblue",
	border: "1px solid black",
	fontSize: "30px",
	fontWeight: "600",
	cursor: "pointer",
    outline: "none",
    padding : "20px",
    width : "80%",
    margin : "auto"
};

export default function UserDetail(props){
    
    const historyDetail = useHistory();
    const location = historyDetail.location;
    const userData = location && location.state;

    const _individualDataComp = (label, value) =>{
        return <div>{label} : {value}</div>;
    }

    const handleGoBack = (event) =>{
        event.preventDefault();
        historyDetail.goBack();
    }

    return <div><h1>User Data</h1>
        <div style={singleUser}>
        {_individualDataComp('Name', userData.name)}
        {_individualDataComp('Email', userData.email)}
        {_individualDataComp('Phone', userData.phone)}
        <button onClick={handleGoBack}>Go Back to Previous Page</button>
        </div>
    </div>;
};