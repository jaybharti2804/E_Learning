const searchParams = new URLSearchParams(window.location.search);
const username = searchParams.get("username")
document.getElementById("welcome").innerHTML += username


document.getElementById("change-name").addEventListener("click",()=>{
    const newname = prompt("Enter new name:")
    document.getElementById("welcome").innerHTML = "Welcome, "+newname
});


document.getElementById("nav-menu").addEventListener("click",()=>{
    const x = document.getElementById("logout");
    if (x.style.display == "none"){
        x.style.display = "block"
    }else{
        x.style.display = "none"
    }
        
});