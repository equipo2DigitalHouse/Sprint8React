import React, {Component} from "react"

class ProductsApi extends Component {
constructor(props){
    super(props)
    this.state = {
        product: []
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
        product: data.data.products
    })
} 
componentDidMount(){
    this.apiCall("http://localhost:3002/api/products", this.showProduct)
}


render() {
    
    return (
        <div>
            <h2>Products</h2>
            {this.state.product && this.state.product.map((product) => (
                <div key={product.id}>
                    <p>Nombre: {product.product_name} </p>
                    <p>Descripción: {product.description} </p>
                    <p>Fecha: {product.date} </p>
                    <p>Precio: {product.price} </p>
                    <img src={product.image}></img>
                    
                </div>
            ))}
        </div>
    );
}


}
export default ProductsApi;
    