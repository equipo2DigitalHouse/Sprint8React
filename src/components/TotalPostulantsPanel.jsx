import React, {Component} from "react"
import {Link} from "react-router-dom"


class TotalPostulantsPanel extends Component {
constructor(props){
    super(props)
    this.state = {
        postulantQuantity: {}
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
        postulantsQuantity: data.count
    })
} 
componentDidMount(){
    this.apiCall("http://localhost:3002/api/postulants", this.showPostulant)
}


render() {
    const { postulantsQuantity } = this.state;

    
    return (
        <div style={{ textAlign: "center" }}>
          {postulantsQuantity && postulantsQuantity.quantity ? (
            <h2>
              <b>Cantidad de Postulantes: </b>
              {postulantsQuantity.quantity} <br/>
              <Link to="/postulantsApi">Api de Postulantes</Link>
            </h2>
          ) : (
            <p>Cargando...</p>
          )}
        </div>
      );
    }
  }
export default TotalPostulantsPanel;
    