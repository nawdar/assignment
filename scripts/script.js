
const ChangeTheme = document.querySelector("#DarkTheme");
const aside = document.querySelector(".div1");
const textArea = document.querySelector("textarea");
const button = document.querySelectorAll("button");


function darkTheme () {
    aside.classList.toggle("DarkTheme");
    textArea.classList.toggle("DarkTheme"); 
    for(let item of button) {
        item.classList.toggle("DarkTheme"); 
    }
    

}
ChangeTheme.addEventListener('click', darkTheme);


const changeText = () => {
    if (ChangeTheme.textContent === "Dark Theme") {
        ChangeTheme.textContent = "Light Theme";
    } else if (ChangeTheme.textContent === "Light Theme") {
        ChangeTheme.textContent = "Dark Theme";
    }
  };
  ChangeTheme.addEventListener("click", changeText);


const cancel = document.querySelector("#Cancelbtn")
const save = document.querySelector(".b")
function cancelBttn () {

    textArea.style.visibility = "hidden"
    cancel.style.visibility = "hidden"
    save.style.visibility = "hidden"
}
cancel.addEventListener("click", cancelBttn)

const NewNote = document.querySelector(".bb")
function NewNoteBttn (){
    textArea.style.visibility = "visible"
    cancel.style.visibility = "visible"
    save.style.visibility = "visible"

}
NewNote.addEventListener("click", NewNoteBttn)

function NewNote2 () {
    textArea.value = ""

}
NewNote.addEventListener("click", NewNote2);

let NotesArray = [{title:"note one", body:"this is my first note"},]

const NotesArrayElements = document.querySelector("ul")

function saveBttn () {
    let notesText = textArea.value
let titlenote = prompt("save as:")
    if (titlenote === null){
      return
     } else  { 
        NotesArray.push({title: titlenote, body: notesText});
        const listItem = document.createElement("li");
     listItem.textContent = titlenote;
    NotesArrayElements.appendChild(listItem);
   


    }
}
save.addEventListener("click", saveBttn)