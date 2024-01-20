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
    const { product } = this.state;

    return (
      <div>
        {product.length === 0 ? (
          <p style={{ textAlign: "center" }}>Cargando...</p>
        ) : (
          <div>
            <h2>Products</h2>
            {product.map((product) => (
              <div key={product.id}>
                <p><b>Nombre:</b> {product.product_name}</p>
                <p><b>Descripción:</b> {product.description}</p>
                <p><b>Fecha:</b> {product.date}</p>
                <p><b>Precio:</b> {product.price}</p>
                <img src={product.image} alt={product.product_name} />
                <hr />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default ProductsApi;