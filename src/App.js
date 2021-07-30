
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

import React,{Component} from 'react'
import './App.css';
class App extends Component{
  constructor()
  {
    super();
    this.state={
    data:"kapil"
    }
  }
  setShow()
  {
this.setState({data:this.state.data})
  }
  render()
  {
    return ( 
      <div className="App">
         
       {
            data?<h1>{this.state.data}</h1>:null
       }
           <button onClick={()=>this.setShow(!data)  }>hide</button>
              
         
           </div>
    );
  }
}
export default App;
