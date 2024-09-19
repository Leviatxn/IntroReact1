import './hello.css';
export default function Hello({firstname,lastname = "Tummaimaibok"}){
    return(
        <>
        <div style={{marginLeft : 10}}>
            <h1>Hello {firstname} {lastname}</h1><hr/>
            <div style={{width: 200,height: 200,borderRadius: 100,backgroundColor: 'blue'}}>
                
            </div>

        </div>
        </>
    );
}




