

import { Provider } from "react-redux";
import {store} from "./store";

import Counter from "./Counter";
import Array from "./Array";

function App(){
       
     
        return(
            <>
            <Provider store={store}>
            <h1>Hi</h1>
            <Counter/>
            <Array />
            </Provider>
           </>
        );
   
}
export default App;








/*
class App extends React.Component{
    render(){
        console.log(this.props);
        return(
            <>
            <Appcontext.Provider 
            value={
                {
                    name:"Hari",
                }
            }
            > 
           <h1>Hari</h1>
            <Test1 />
            </Appcontext.Provider>
           </>
        );
    }
}

export default App;*/