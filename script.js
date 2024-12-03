
const submitbutton = document.getElementById("submitButton");
const popup = document.querySelector(".popup");
popup.style.bottom='-150px';
popup.style.opacity='0';

submitbutton.onclick = () => {
    const inputBox = document.getElementById("inputBox");

    if (!inputBox.value) {
        // alert("Enter the value");
        popup.style.bottom='50px';
        popup.style.opacity='1';
        setTimeout(() => {
            popup.style.bottom='-100px';
            popup.style.opacity='0';
          }, 3000);
        
        return;
    }
    
    // time 
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    console.log(`Current time: ${hours}:${minutes}:${seconds} ${ampm}`);
    // end of time

    const listItem = document.createElement("li");
    listItem.innerText = inputBox.value;
    const lists = document.getElementById("lists");
    lists.appendChild(listItem);

    const divElement = document.createElement("div");
    listItem.appendChild(divElement);

    const timepara = document.createElement("p");
    divElement.appendChild(timepara);
    timepara.innerText=`${hours}:${minutes}:${seconds} ${ampm}`;
    timepara.classList.add("time");

    const deleteButton = document.createElement("button");
    divElement.appendChild(deleteButton);
    deleteButton.innerText = "DELETE";

    deleteButton.onclick = () => {
        listItem.remove();
    }

    const finshButton = document.createElement("button");
    divElement.appendChild(finshButton);
    finshButton.innerText = "COMPLETED";
    finshButton.classList.add("button2");

    finshButton.onclick = () => {
        listItem.classList.add("completed");
        finshButton.classList.add("completed");
        timepara.classList.add("timecom");
    }
  

    inputBox.value = "";


}
