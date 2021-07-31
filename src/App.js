
// import './App.css';
// import React,{useState} from 'react';

// function App() {
//   const [show,setShow ] = useState(true)
//   return (
//     <div className="App">

//      {
//        show?<h1>toggle button</h1>:null
//      }
//        <button onClick={()=> setShow(!show)}>Show</button>
//     </div>
//   );
// }

// export default App;




// import React,{Component} from 'react'
// import './App.css';
// class App extends Component{

//   constructor()
//   {
//     super();
//     this.state={
//     data:"kapil"
//     }

//   }
//   setShow()
//   {
// this.setState({data: this.state.data})
//   }
//   render()
//   {
//     return ( 
//       <div className="App">

//        {
//             <h1>{this.state.data}</h1>
//        }
//            <button onClick={()=>this.setShow(!this.state.data)  }>hide</button>


//            </div>
//     );
//   }
// }
// export default App;




// component didMount
// import React from 'react'
// import './App.css';

// class App extends React.Component {
//   constructor()
//   {
//     super()
//     this.state={
//       data:null
//     }
//     console.warn("constructor")
//   }
//   componentDidMount()
//   {
//     this.setState({data:'update'});
//     console.warn("componentDidMount")

//   }
//   render() {
//     console.warn("render")
//     return(
//       <div>
//         <h1>component DidMount</h1>
//       </div>
//     )
//   }
// }
// export default App;



// component didUpdate

// import React from 'react';

// class ComponentDidUpdated extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       data: null,
//       showdata: null,
//     }
//   }
//   componentDidUpdate() {
//     console.warn("didUpadate");
//     if (this.state.showdata == null) {
//       this.setState({showdata: "Hello  " })
//       console.log('data');
//     }

//   }

//   render() {

//     return (
//       <div>
//         <h1>Component Did Updete {this.state.showdata}</h1>

//         <button onClick={() => this.setState({ data: "yes" })}>Update Counter </button>
//       </div>
//     )
//   }
// }

// export default ComponentDidUpdated;


import React, {Component} from 'react';

export default class App extends Component {
    state = {
        data:false,
    }
        toggle = () => {
        this.setState({
            data:!this.state.data
        })
    }
    render() {
        return(
            <div>
                {
                    this.state.data &&  <h1>Toggle  button</h1>
                     }
                <button onClick={this.toggle}>Shoe/hide</button>
            </div>
        )
    }
}