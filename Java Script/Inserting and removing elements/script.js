console.log("Insering and removing elements")
let bod=document.body
let cont=document.querySelector(".container")
let box=document.querySelector(".box")
console.log(cont.innerHTML)
console.log(bod.innerText)
console.log(cont.outerHTML)
console.log(cont.outerText)
console.log(cont.tagName)
console.log(cont.nodeName)
console.log(bod.textContent)
console.log(box.innerHTML)
console.log(box.innerText)

console.log(box.innerHTML="Hello I was changed")
console.log(box.hasAttribute("style"))
console.log(box.getAttribute("style"))
console.log(box.setAttribute("style","background-color:red"))
console.log(box.attributes)
// console.log(box.removeAttribute("style"))
// document.designMode="on"  // Funny command ca be used any website

//Inserting element in the html
/*let div=document.createElement("div")
div.setAttribute("class","inserted")
div.innerHTML="Hello this is the <b><i>Inserted</i></b> element"
cont.before(div)
cont.prepend(div)
cont.append(div)
cont.after(div)
cont.replaceWith(div)*/

//Insering adjacent html in html
/*const div=document.createElement("div")
div.innerHTML="Hello Bros"
div.setAttribute("style","color:blue")
cont.insertAdjacentElement("beforebegin",div)
cont.insertAdjacentElement("afterbegin",div)
cont.insertAdjacentElement("afterend",div)
cont.insertAdjacentElement("beforeend",div)*/

//Removing Element
// box.remove()
console.log(document.getElementsByClassName("box"))
cont.classList.add("red","blue")
cont.classList.remove("red")
cont.classList.toggle("blue")
cont.classList.toggle("blue")
cont.classList.toggle("blue")
console.log(cont.classList)

let rem=document.querySelector(".container").lastElementChild
// rem.remove()
console.log(cont.classList.add("container2"))
console.log(cont.classList)
