var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popupbox")
var button = document.getElementById("add-popup-button")

button.addEventListener("click",function()
{
    popupbox.style.display="block"
    popupoverlay.style.display="block"
})

var cancelbutton=document.getElementById("cancel-popup")
cancelbutton.addEventListener("click",function(event)
{
    event.preventDefault
    popupbox.style.display="none"
    popupoverlay.style.display="none"
})

var addbutton=document.getElementById("add-book")
var container=document.querySelector(".container")
var titleinput=document.getElementById("book-title-input")
var authorinput=document.getElementById("book-author-input")
var bookdesc=document.getElementById("book-desc-input")

addbutton.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${titleinput.value}</h2>
            <h4>${authorinput.value}</h4>
            <p>${bookdesc.value}</p>
            <button onclick="dltbtn(event)">Delete</button>`
    container.append(div)
    popupbox.style.display="none"
    popupoverlay.style.display="none"
})

    function dltbtn(event)
    {
        event.target.parentElement.remove()
    }