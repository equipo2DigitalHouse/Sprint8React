import React, {Component} from "react"
import {Link} from "react-router-dom"


class TotalProductPanel extends Component {
constructor(props){
    super(props)
    this.state = {
        productQuantity: {}
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

showProduct = (data)=>{
    this.setState({
        productQuantity: data.count
    })
} 
componentDidMount(){
    this.apiCall("http://localhost:3002/api/products", this.showProduct)
}


render() {
    const { productQuantity } = this.state;

    
    return (
        <div style={{ textAlign: "center" }}>
          {productQuantity && productQuantity.quantity ? (
            <h2>
              <b>Cantidad de Productos: </b>
              {productQuantity.quantity} <br/>
              <Link to="/productsApi">Api de Productos</Link>
            </h2>
          ) : (
            <p>Cargando...</p>
          )}
        </div>
      );
    }
  }
export default TotalProductPanel;
    