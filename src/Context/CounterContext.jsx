import { createContext, useContext, useState } from "react";     

export const CounterContext = createContext(null);

export const useCart = () =>{   
    const CounterState = useContext(CounterContext);
    return CounterState;
}

export const CountProvider = (props) =>{
    const [counter , setCounter] = useState(0);


    return(
    <CounterContext.Provider value={{ counter, setCounter, name:"aakhib" }}>
        {props.children}
    </CounterContext.Provider>
)

}



