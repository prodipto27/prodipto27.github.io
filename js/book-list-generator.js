var bookname, edition;
var htmlString = '';

function generateBookList(books, editions, credits){
    var listParent = document.getElementsByClassName("mdc-list")[0];

    for(var i = 0; i < books.length; i++){
        bookname = books[i];
        edition = editions[i];

        htmlString += '<li onclick="openBook(\'' + bookname + '\', ' + i + ')" class="mdc-list-item" ' + ((i == 0) ? 'tabindex="0"' : '') + '><span class="mdc-list-item__ripple"></span><i class="material-icons mdc-list-item__graphic" aria-hidden="true">import_contacts</i><span class="mdc-list-item__text"><span class="mdc-list-item__primary-text">' + bookname + '</span><span class="mdc-list-item__secondary-text">' + edition + '</span></span></li>';    
    }

    listParent.innerHTML = htmlString;
}

generateBookList(books, editions, credits);