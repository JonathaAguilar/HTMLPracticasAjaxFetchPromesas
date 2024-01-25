//practica 2 uso del objecto fetch 
//manejando promesas 
//manejando await


llamandoFetch =()=>{

    const url = "https://jsonplaceholder.typicode.com/todos"
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(data =>mostrartodos(data))
    .catch((reject)=> {
        console.log("surgio un error" + reject)

    });
}

    //llamando await
    const llamandoAwait = async () => {

        try{
            const url ="https://jsonplaceholder.typicode.com/todos";
            const respuesta = await fetch(url)
            const data = await respuesta.json()
                mostrartodos(data);
        }

        catch(error){
            console.log("surgio un error" + error);
        }
    }

    const mostrartodos=(data)=>{
        console.log(data)
        const res=document.getElementById('respuesta');
        res.innerHTML= "";

        for (let item of data){
        res.innerHTML+=item.userId + "," + item.id + "," + item.title + ""+ item.completo + "<br>";
            } }


    document.getElementById("btnCargarP").addEventListener('click', function(){
        llamandoFetch();
    })

    document.getElementById("btnCargarA").addEventListener('click', function(){
        llamandoAwait();
    })

    document.getElementById("btnLimpiar").addEventListener("click",function(){
        let res = document.getElementById("respuesta");
        res.innerHTML="";
    });