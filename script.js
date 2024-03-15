window.addEventListener("DOMContentLoaded", (event) => {
    const toDoApp = document.getElementById('box-of-content');
    const inputElement = document.getElementById('input-element');
    const listContainer = document.getElementById('list-container')
    const button = document.getElementById('button-box');
    button.addEventListener('click', addEntry);

    function addEntry(){
        if(inputElement.value ===''){
            const alertMessages = document.getElementsByClassName('alert-message');
            if(alertMessages.length == 0){
                const alertMessage = document.createElement("p");
                alertMessage.innerHTML = "You must enter a name";
                alertMessage.setAttribute("class", "alert-message");
                toDoApp.insertBefore(alertMessage, listContainer);
            }
        }
        else{
            const alertMessage = document.getElementsByClassName('alert-message')[0];
            if(alertMessage) toDoApp.removeChild(alertMessage);
            const listItem = document.createElement("li");
            listItem.innerHTML = inputElement.value;
            const spanElem = document.createElement("span");
            spanElem.setAttribute("class", "close-button");
            listItem.appendChild(spanElem);
            listContainer.appendChild(listItem);
            saveData();
            inputElement.value ='';
        }
    }

    listContainer.addEventListener('click', function(e){
        if(e.target.tagName ==="LI"){
            e.target.classList.toggle("checked-item");
            saveData();
        }
        if(e.target.tagName ==="SPAN"){
            e.target.parentElement.remove();
            saveData();
        }
    }
    )
    function saveData(){
        localStorage.setItem("data", listContainer.innerHTML);
    }
    function showTask(){
        listContainer.innerHTML = localStorage.getItem("data");
    }
    showTask();
}
);