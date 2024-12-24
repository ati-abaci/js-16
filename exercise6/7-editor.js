/*
Look at editor.png, you should create a text editor similar to that.

- The first button removes the last letter when clicked.
- The second button deletes the entire text when clicked.
- The third button bolds the text when clicked.
- The fourth button italicizes the text when clicked.
*/


//todo-1
const removeLastBtn = document.querySelector('.removeLast'); 
removeLastBtn.addEventListener('click', () => { 
    let editableDiv = document.querySelector('#textarea'); 
    let content = editableDiv.innerText;
    editableDiv.innerText = content.slice(0, -1); 
}); 

//todo-2
const removeAllBtn = document.querySelector('.removeAll'); 
removeAllBtn.addEventListener('click', () => { 
    let editableDiv = document.querySelector('#textarea'); 
    editableDiv.innerText = ''; 
});

//todo-3
const boldTextBtn = document.querySelector('.bold');
boldTextBtn.addEventListener('click', () => {
    let editableDiv = document.querySelector('#textarea');
    let inputText = editableDiv.innerHTML;
    editableDiv.innerHTML = inputText.split(' ').map(word => `<b>${word}</b>`).join(' ');
});

//todo-4
const italicTextBtn = document.querySelector('.italic');
italicTextBtn.addEventListener('click', () => {
    let editableDiv = document.querySelector('#textarea');
    let inputText = editableDiv.innerHTML;
    editableDiv.innerHTML = inputText.split(' ').map(word => `<em>${word}</em>`).join(' ');
});
