const {listFiles, createFile, listPublicFiles, publishFile} = require("./userOperations.js");
const path = require('path');

var privateList, publicList, form;

function updatePrivate() {
    const files = listFiles();
    privateList.innerHTML = '';

    files.forEach(it => {
        const li = document.createElement('li')
        li.className = 'mb-2';
        const fileName = path.basename(it);
        li.textContent = fileName;
        const btn = document.createElement('button')
        btn.textContent = 'Опубликовать';
        btn.className = 'btn btn-sm btn-secondary'
        btn.onclick = () => {
            publishFile(fileName);
            updateUI();
        }
        li.append(btn)
        privateList.append(li)
    })
}

function updatePublic() {
    const files = listPublicFiles();
    publicList.innerHTML = '';

    files.forEach(it => {
        const li = document.createElement('li')
        li.className = 'mb-2';
        li.textContent = path.basename(it);
        publicList.append(li)
    })
}

function updateUI() {
    form.reset();

    updatePrivate();
    updatePublic();
}

window.addEventListener('DOMContentLoaded', () => {
    privateList = document.getElementById('private-list');
    publicList = document.getElementById('public-list');
    form = document.getElementsByTagName('form')[0];

    updateUI();
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        createFile(formData.get('filename'), formData.get('contents'))
        updateUI();
    });
})
