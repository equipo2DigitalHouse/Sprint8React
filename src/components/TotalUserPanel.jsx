import React, {Component} from "react"
import {Link} from "react-router-dom"

class TotalUserPanel extends Component {
constructor(props){
    super(props)
    this.state = {
        userQuantity: []
    }
}

apiCall(url,handle){
    fetch(url)
    .then(response => response.json())
    .then(data => handle(data))
    .catch(e => {console.log(e)})
} catch(error){
    console.log(error);
}

showUser = (data)=>{
    this.setState({
        userQuantity: data.count
    })
} 
componentDidMount(){
    this.apiCall("http://localhost:3002/api/users", this.showUser)
}


render() {
    const { userQuantity } = this.state


    return (
        <div style={{ textAlign: "center" }}>
          {userQuantity && userQuantity.quantity ? (
            <h2>
              <b>Cantidad de Usuarios: </b>
              {userQuantity.quantity} <br/>
              <Link to="/usuariosApi">Api de Usuarios</Link>
            </h2>
          ) : (
            <p>Cargando...</p>
          )}
        </div>
    );
}


}
export default TotalUserPanel;
    