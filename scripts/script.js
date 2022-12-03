
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