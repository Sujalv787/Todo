function btnclick() {
    const newtask = document.createElement('li');
    const tasklist = document.getElementById('to-do-cont');
    const textarea = document.getElementById('textarea');

    if (textarea.value === "") {
        alert("Please enter a task!");
        return;
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.marginRight = "10px";

    const textcont = document.createElement("span");
    textcont.textContent = textarea.value;

    const deletebtn = document.createElement("button");
    deletebtn.innerText = "\u00d7";
    deletebtn.classList.add("del");

    const editbtn = document.createElement("button");
    editbtn.classList.add("edit");
    editbtn.innerText = "edit";

    const savebtn = document.createElement("button");
    savebtn.classList.add("save");
    savebtn.innerText = "save";
    savebtn.style.display = "none"; // hide initially

    newtask.appendChild(checkbox);
    newtask.appendChild(textcont);
    newtask.appendChild(deletebtn);
    newtask.appendChild(editbtn);
    newtask.appendChild(savebtn);
    tasklist.appendChild(newtask);

    textarea.value = "";

    checkbox.addEventListener("click", () => {
        textcont.style.textDecoration = checkbox.checked ? "line-through" : "none";
    });

    deletebtn.addEventListener("click", () => {
        deletebtn.parentElement.remove();
    });

    editbtn.addEventListener("click", () => {
        savebtn.style.display = "inline";
        const currenttext = textcont.textContent;
        textcont.innerHTML = `<input type='text' value='${currenttext}'>`;
        textcont.style.backgroundColor = "aliceblue";
    });

    savebtn.addEventListener("click", () => {
        const inputField = textcont.querySelector("input");
        if (!inputField || inputField.value.trim() === "") {
            alert("Write something!");
            return;
        }
        const updatedText = inputField.value;
        textcont.textContent = updated})
    }
