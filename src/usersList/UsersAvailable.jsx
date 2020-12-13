import React,{useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';

const singleUser = {
    background: "lightblue",
	border: "2px solid white",
	fontSize: "30px",
	fontWeight: "600",
	cursor: "pointer",
    outline: "none",
    padding : "20px"
};
const styleBoard = {
	border: "2px dotted grey",
    borderRadius: "10px",
    padding : "20px",
    margin: "0 auto",
    width : "80%",
	display: "grid",
    gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};

const SingleUserComp = (props) =>{
    const {userData} = props;
    const historyDetail = useHistory();
    const handleUserSelection = (event)=>{
        event.preventDefault();
        historyDetail.push({
            pathname : `/userData/:${userData.email}`,
            state : userData,
            search : userData.email
        });
    }
    const chageBackgroundOnEnter = event =>{
        event.preventDefault();
        event.target.style.background = 'black';
    }
    const changeBackgoundOnLeave = event =>{
        event.preventDefault();
        event.target.style.background = 'lightblue';
    }
    return <div onMouseEnter={chageBackgroundOnEnter} onMouseLeave={changeBackgoundOnLeave}
                className="highlightHover" style={singleUser}>
        <a href="#" onClick={handleUserSelection}>{userData.name}</a>
    </div>
};

const RenderErrorComp = ({isErrorHappened})=>{
    return isErrorHappened && <div className="display-error">Unable To Load Data</div>
};

const RenderMultiUsersComp = ({usersList}) =>{
    const usersToRender = [];
    if(usersList && usersList.length){
        for(const userData of usersList){
            usersToRender.push(<SingleUserComp key={userData.id} userData={userData}/>)
        }    
    }
    return usersToRender;
};

export default function usersAvailalbe(props) {
    const initialValue = [
        {
          "id": 1,
          "name": "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz",
          "phone": "1-770-736-8031 x56442",
        },
        {
          "id": 2,
          "name": "Ervin Howell",
          "username": "Antonette",
          "email": "Shanna@melissa.tv",
          "phone": "010-692-6593 x09125",
        }
      ];

    const [usersList, setUserList] = useState(initialValue);
    const [isErrorHappened, setisErrorHappened] = useState(false);

    useEffect(function(){
        fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json() ).then(response => {
            setUserList(response);
        }).catch(errorResp =>{
            setisErrorHappened(true);
        })
    },[]);

    return <div>
        <h1>Users Lists</h1>
        <div><RenderErrorComp isErrorHappened={isErrorHappened}/></div>
        <div style={styleBoard}><RenderMultiUsersComp usersList={usersList}/></div>
    </div>;

}