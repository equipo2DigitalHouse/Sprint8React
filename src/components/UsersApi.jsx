import React, {Component} from "react"

class UsuariosApi extends Component {
constructor(props){
    super(props)
    this.state = {
        user: []
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
        user: data.data.users
    })
} 
componentDidMount(){
    this.apiCall("http://localhost:3002/api/users", this.showUser)
}


render() {
    const { user } = this.state;
    
    return (
        <div>
            {user.length === 0 ? (
          <p style={{ textAlign: "center" }}>Cargando...</p>
        ) : (
            <div>
                <h2>Users</h2>
                {this.state.user && this.state.user.map((user) => (
                    <div key={user.id}>
                        <p>Nombre: {user.name} </p>
                        <p>Apellido: {user.last_name} </p>
                        <p>Email: {user.email} </p>
                        <p>Nombre de Usuario: {user.name} </p>
                        <img src={user.avatar}></img>
                        <hr />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}



export default UsuariosApi;
    