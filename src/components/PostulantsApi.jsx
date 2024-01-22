import React, {Component} from "react"

class PostulantsApi extends Component {
constructor(props){
    super(props)
    this.state = {
        postulant: []
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

showPostulant = (data)=>{
    this.setState({
        postulant: data.data.postulantes
    })
} 
componentDidMount(){
    this.apiCall("http://localhost:3002/api/postulants", this.showPostulant)
}


render() {
    const { postulant } = this.state;

    return (
      <div>
        {postulant.length === 0 ? (
          <p style={{ textAlign: "center" }}>Cargando...</p>
        ) : (
          <div>
            <h2>Postulants</h2>
            {postulant.map((postulant) => (
              <div key={postulant.id}>
                <p><b>Nombre:</b> {postulant.nombre}</p>
                <p><b>Apellido:</b> {postulant.apellido}</p>
                <p><b>Email:</b> {postulant.email}</p>
                <p><b>Curriculum:</b> {postulant.curriculum}</p> 
                <hr />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default PostulantsApi;