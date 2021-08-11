import React from "react";
import "./UserInfo.css" 
import {Card,Button} from "react-bootstrap"

function UserInfo (userData) {
    // const arrColors=['primary','secondary','success','danger','warning','info','light','dark']
    // const numRandom=Math.floor(Math.random() * 8);
    let but;
    if(userData.user.color === 'dark')
     but = <Button variant="outline-light">My Web</Button>
    else
     but= <Button variant="outline-dark" href={userData.user.myWeb}>My Web</Button>
   
  return (
        <Card
        bg={userData.user.color}
        key={userData.user.login}
        text={userData.user.color === 'dark' ? 'light' : 'black'}
        style={{ maxWidth: 'min-content',minWidth: '250px'}}
        className="mb-2"
    >
        <Card.Header><img src= {userData.user.avatar_url}/></Card.Header>
        <Card.Body>
        <Card.Title><p>{userData.user.login}</p></Card.Title>
        <Card.Text>
       <p>Followers: {userData.user.followers}</p> 
       <p>Following: {userData.user.following} </p> 
       <p>Created at: {userData.user.created_at.split('T')[0]}</p> 
        {but}
      </Card.Text>
        </Card.Body>
    </Card>
     )
}

export default UserInfo