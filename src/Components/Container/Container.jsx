import React from "react"
import UserInfo from "../UserInfo/UserInfo"
import axios from "../../../node_modules/axios/dist/axios.js"
import "./Container.css" 
import {InputGroup,FormControl,Button} from "react-bootstrap"



class Container extends React.Component {
    constructor() {
      super()
      this.state = {
        usersArr: ["ShaniBel","Nati-Dor","odeliamelloul", "Sparco7", "nitsan1412","leib-ran","Fareska","Harduf-l","shaharbest"],
        infoArrUsers: [],
        newUser: ""
      }
    }
    componentDidMount= () => {
        for (let i = 0; i < this.state.usersArr.length; i++) 
            this.myAxios(this.state.usersArr[i])
    }

    changeNewUser=(e)=>{
        e.preventDefault()
        const myUser = e.target.value;
        this.setState({newUser:myUser})
    }

    addNewUser=()=>{
        let arr=[...this.state.usersArr]
        if(arr.find(element => element===this.state.newUser))
        return
        arr.push(this.state.newUser)
        this.setState({usersArr:arr})
        this.myAxios(this.state.newUser)
    }

    myAxios=(str)=>{
        const response = axios
        .get(`https://api.github.com/users/${str}`)
        .then((response) => {
            const arrColors=['primary','secondary','success','danger','warning','info','light','dark']
            const numRandom=Math.floor(Math.random() * 8);
            let arr = [...this.state.infoArrUsers]
            let {avatar_url,login,followers,following,created_at} = response.data
            let objUser = {avatar_url,login,followers,following,created_at,color:arrColors[numRandom], myWeb: 'https://github.com/'+login}
            arr.push(objUser)
            this.setState({infoArrUsers:arr})
        })
        .catch((err) => console.log(err));
    }


      render () {
            return (
                <div className="container">
                    <div className="inputUser">
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Enter User Name: </InputGroup.Text>
                        <FormControl
                         onChange={this.changeNewUser}
                         placeholder="Name of user GitHub"
                         aria-label="Username"
                         aria-describedby="basic-addon1"
                        />
                        <Button variant="primary" onClick={this.addNewUser}>+</Button>
                        </InputGroup>
                    </div>
                    <div className="AllUsers">
                    {this.state.infoArrUsers.map((user,index) => 
                    <UserInfo user ={user} key= {index}/>
                    )}
                    </div>

                
        </div>
      )
    }
  }
  
  export default Container;