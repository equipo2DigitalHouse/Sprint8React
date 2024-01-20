import React, { Component } from "react";

class ProductId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
    };
  }

  apiCall(url, handle) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => handle(data))
      .catch((error) => {
        console.log(error);
      });
  }

  showProduct = (data) => {
    const lastProduct = data.data.products[data.data.products.length - 1];
    this.setState({
      product: lastProduct,
    });
  };

  componentDidMount() {
    this.apiCall("http://localhost:3002/api/products", this.showProduct);
  }

  render() {
    return (
      <div>
        <h2>ULTIMO PRODUCTO AGREGADO</h2>
        {this.state.product && (
          <div key={this.state.product.id}>
            <p>
              <b>ID:</b> {this.state.product.id}
            </p>
            <p>
              <b>Nombre:</b> {this.state.product.product_name}
            </p>
            <p>
              <b>Descripción:</b> {this.state.product.description}
            </p>
            <p>
              <b>Fecha:</b> {this.state.product.date}
            </p>
            <p>
              <b>Precio:</b> {this.state.product.price}
            </p>
            <p>
              <b>Img:</b> {this.state.product.image}
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default ProductId;


// import React, {Component} from "react"

// class ProductId extends Component{
//  constructor(props) {
//     super(props)
//     this.state = {
//         product: []
//     }

// }
//  apiCall(url,handle){
//     fetch(url)
//     .then(response => response.json())
//     .then(data => handle(data))
//     .catch(e => {console.log(e)})
// } catch(error){
//     console.log(error);
// }

// showProduct = (data)=>{
//     this.setState({
//         product: data.data.products
//     })
// } 

// componentDidMount(){
//     this.apiCall("http://localhost:3002/api/products", this.showProduct)
// }

// render(){
//     return(
//         <div>
//             <h2>ULTIMO PRODUCTO AGREGADO</h2>
//             {this.state.product && this.state.product.map((product) => (
//                 <div key={product.id}>
//                     <p><b>ID:</b>{product.product_name}</p>
//                     <p><b>Nombre:</b></p>
//                     <p><b>Descripción:</b></p>
//                     <p><b>Fecha:</b></p>    
//                     <p><b>Precio:</b></p>
//                     <p><b>Img:</b></p>
//                 </div>
//             ))}   
//         </div>
//     )
// }





// }
// export default ProductId