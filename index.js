let header = document.querySelector("#page-header")
header.style.textAlign="right"
let dogimages = document.querySelectorAll(".dog-image")
for (let i =0; i< dogimages.length; i++)
{
    dogimages[i].style.borderRadius = '25px'
}
let dogname = document.querySelectorAll(".dog-name")
for (let i =0; i<dogname.length; i++)
{
    dogname[i].style.textAlign="left"
}
let footertext =document.querySelector(".footer")
footertext.style.color="red"

//for (let u=0; u<dogimages.length; u++)
//{}
// Select some elements...
