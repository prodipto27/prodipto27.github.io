var siteHome = document.location.protocol + "//" + document.location.hostname + ((document.location.port == '') ? '' : ':' + document.location.port);
var url = siteHome + "/data/book_list.json";

console.log("url: " + url)
//console.log(jsondata)

listHTMLTemplateStart = '<ul class="mdc-list mdc-list--two-line">';
listHTMLTemplateStop = '</ul>';
divStart = "<div style='margin-left: 30px;'>";
divStop = "</div>";

var booksPath = siteHome + "/books"

function returnDownloadPath(bookPath){
    if(bookPath.includes("UNAVAILABLE")){
        return "#";
    }
    return booksPath + "/" + bookPath;
}

function generateBookList(jsondata) {
    var mainHtmlData = '';
    for(var semester in jsondata){
        mainHtmlData += "<h2>" + semester + "</h2><hr>"; 
        //var listParent = document.getElementsByClassName("mdc-list")[0];
        var subjectList = jsondata[semester][0];
        
        for (var subject in subjectList) {
            mainHtmlData += divStart;
            mainHtmlData += "<h3>" + subject + "</h3>";
            bookList = subjectList[subject];
            mainHtmlData += listHTMLTemplateStart;
            var i = 0;
            for(var book in bookList){
                //console.log(bookList[book]["name"]);
                if(bookList[book]["url"].includes("UNAVAILABLE")){
                    colorHTML = 'style="color: red;"';
                    iconName = "report_problem";
                }
                else{
                    colorHTML = '';
                    iconName = "import_contacts";
                }

                listHtmlString = '<li ' + colorHTML + ' onclick="openBook(\'' + bookList[book]["url"] + '\', \'' + bookList[book]["collection_credit"] + '\')" class="mdc-list-item" ' + ((i == 0) ? 'tabindex="0"' : '') + '><span class="mdc-list-item__ripple"></span><i ' + colorHTML + ' class="material-icons mdc-list-item__graphic" aria-hidden="true">' + iconName + '</i><span class="mdc-list-item__text"><span class="mdc-list-item__primary-text">' + bookList[book]["name"] + '</span><span class="mdc-list-item__secondary-text">' + bookList[book]["edition"] + " Edition" + '</span></span><span style="position: absolute;float: right;right: 0px;"><a style="color: inherit;"><i class="material-icons">download</i></a></span></span></li>';
                
                mainHtmlData += listHtmlString;
                i++;
            }
            mainHtmlData += listHTMLTemplateStop + divStop;
        }
    }
    var dataDiv = document.getElementById("data");
    dataDiv.innerHTML = mainHtmlData;
    //console.log(mainHtmlData);
}

var jsondata;
fetch(url).then(
    function (u) { return u.json(); }
).then(
    function (json) {
        jsondata = json;
        generateBookList(jsondata);        
    }
)
