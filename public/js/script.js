function goto(){
    let message =document.getElementById('message');
    console.log("Fired!!");
   
    parent.top.location="./services";

    message.innerHTML="Action completed...Please reload Page!!"
    
}