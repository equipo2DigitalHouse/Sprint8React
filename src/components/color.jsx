import React, {Component} from 'react';

class MiComponente extends Component {

   constructor(props){

       super(props);

       this.state = {

          message: "Hacé click para suscribirte y recibir noticias"

       }

   }

   styles = {

       color: "teal"

   }

 

   cambiarColor(){

       this.styles = {

           color: "pink"

       }

   }

   render(){

       return(

            <div>


                    <h3 styles={this.styles } onMouseOver={()=> this.cambiarColor}>{this.state.message}</h3>



           </div>

       )

   }

}

export default MiComponente