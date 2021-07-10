var container=document.querySelector(".container")
var movie=document.querySelector("select");
//console.log(`movie`,movie.value)

container.addEventListener("click",(e)=>
{
    if(e.target.classList.contains("seat")
        && !e.target.classList.contains("occupied")  )
    {
        console.log(`not occupy`)
        e.target.classList.toggle("selected")
        updatecount();
    }
    if(e.target.classList.contains("occupied"))
    {
        console.log(`it is occupy`)    
    }   
})

function updatecount()
{
    var selectedseats=document.querySelectorAll(".row .selected").length;
    console.log(`selectetdseats =`,selectedseats)

    var count=document.querySelector("#count");
    count.innerHTML=selectedseats;

    var total=document.querySelector("#total");
    total.innerHTML=selectedseats*movie.value;

}