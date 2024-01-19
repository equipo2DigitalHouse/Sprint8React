import React, {Component} from 'react';

class MiComponente extends Component {

   constructor(props){

       super(props);

       this.state = {

          message: "Hacé click para suscribirte y recibir noticias"

       }

   }

   postSubscribe(){

       this.setState({

           message: "Gracias por suscribirte ;)"

       })

   }

   render(){

       return(

        <div>
        <h3 onClick={() => this.postSubscribe()}>{this.state.message}</h3>
    </div>

       )

   }

}

export default MiComponente