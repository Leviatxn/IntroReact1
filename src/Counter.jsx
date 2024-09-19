import { useState } from "react";
import './hello.css';



export default function Counter(){
    const [count,setCount] = useState(0);
    const [value,setValue] = useState("0");
    return(<>
        <div style={{margin : 50}}>
            <input type="text"
                    value = {value}
                    onChange={e=>setValue(e.target.value)}
            />
            <h1>Typing {value.length + count}</h1>
            <button onClick={()=>setCount(count+1)}
            style={{width: 400,height: 70,borderRadius: 100,backgroundColor: 'red'}}> 
                <p style={{flex:'center',fontSize:20}}>You Clicked  {count} time</p>
            </button>
            <button onClick={()=>setCount(0)}
            style={{width: 100,height: 70,borderRadius: 100,backgroundColor: 'teal'}}> 
                <p style={{flex:'center',fontSize:9}}>Reset</p>
            </button>
        </div>
    </>);
}