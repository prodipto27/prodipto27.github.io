var checkbox = new mdc.checkbox.MDCCheckbox(
  document.querySelector(".mdc-checkbox")
);
var formField = new mdc.formField.MDCFormField(
  document.querySelector(".login-form")
);
formField.input = checkbox;

checkbox.listen("click", () => {
  console.log(checkbox.checked); //will return true or false
  if (checkbox.checked == true) {
    document.getElementById("input").removeAttribute("type");
  } else {
    document.getElementById("input").setAttribute("type", "password");
  }
});

function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table, data) {
  var i = 0;
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createElement("p");
      var idString = "cell" + i;
      text.id = idString;
      //text.onclick = copyToClipboard("cell"+i);
      if (element[key].includes("href")) {
        text.setAttribute("onclick", "copyURI(event)");
        text.setAttribute("ontouch", "copyURI(event)");
        //text.setAttribute("target", "_parent");
      } else {
        text.setAttribute("onclick", "copyText(" + idString + ")");
      }

      text.innerHTML = element[key];
      cell.appendChild(text);
      i++;
    }
  }
}

// var url_string = document.location.href
// var url = new URL(url_string);
// var c = url.searchParams.get("pass");
// console.log(c);

// let table = document.querySelector("table");
// let data = Object.keys(mountains[0]);
// generateTable(table, mountains); // generate the table first
// generateTableHead(table, data); // then the head

function copyText(element) {
  var range, selection, worked;

  if (document.body.createTextRange) {
    range = document.body.createTextRange();
    range.moveToElementText(element);
    range.select();
  } else if (window.getSelection) {
    selection = window.getSelection();
    range = document.createRange();
    range.selectNodeContents(element);
    selection.removeAllRanges();
    selection.addRange(range);
  }

  try {
    document.execCommand("copy");
    //alert('text copied');
    showSnackbar("Copied successfully!");
  } catch (err) {
    showSnackbar("Can't copy. Please try manually!");
  }
}

function showSnackbar(text) {
  var x = document.getElementById("snackbar");
  x.textContent = text;
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}

function copyURI(evt) {
  var link = evt.target.firstChild.href;
  console.log(link);
  if (link == undefined) {
    var link = evt.target.href;
  }
  console.log(link);
  //evt.preventDefault();
  navigator.clipboard.writeText(evt.target.getAttribute("href")).then(
    () => {
      //console.log(this);
      console.log("clipboard successfully set");
      showSnackbar("Link copied successfully.");
    },
    () => {
      console.log("clipboard write failed");
      showSnackbar("Can't copy link.");
    }
  );
  // setTimeout(function() {
  //   document.location.href = link;
  // }, 2000);
}

var code = (function () {
  return {
    encryptMessage: function (messageToencrypt = "", secretkey = "") {
      var encryptedMessage = CryptoJS.AES.encrypt(messageToencrypt, secretkey);
      return encryptedMessage.toString();
    },
    decryptMessage: function (encryptedMessage = "", secretkey = "") {
      var decryptedBytes = CryptoJS.AES.decrypt(encryptedMessage, secretkey);
      var decryptedMessage = decryptedBytes.toString(CryptoJS.enc.Utf8);

      return decryptedMessage;
    },
  };
})();

// document.getElementById("login").addEventListener("onclick", function () {

// });

function login() {
  console.log("clicked");
  var crypt_file = new XMLHttpRequest();
  crypt_file.onreadystatechange = function () {
    if (crypt_file.readyState == XMLHttpRequest.DONE) {
      pass = document.getElementById("input").value;
      //console.log(pass);
      try {
        var dec = code.decryptMessage(crypt_file.responseText, pass);
        //console.log(dec);
        eval(dec);
        document.getElementsByClassName("login-container")[0].remove();
        console.log(pass);
        localStorage.setItem("passString", Base64.encode(pass));
        // let table = document.querySelector("table");
        // let data = Object.keys(mountains[0]);
        // generateTable(table, mountains); // generate the table first
        // generateTableHead(table, data);
      } catch (err) {
        console.log(err);
        showSnack("Password is incorrect!!!");
        // console.log();
        if (window.top == window.self) {
            showSnackbar("Password is incorrect!!!");
        }
      }
    }
  };
  crypt_file.open("GET", "../js/creds.dat", true);
  crypt_file.send(null);
}

var pass;
pass = localStorage.getItem("passString");
// console.log(pass);
if (pass != null) {
  var crypt_file = new XMLHttpRequest();
  crypt_file.onreadystatechange = function () {
    if (crypt_file.readyState == XMLHttpRequest.DONE) {
      try {
        var dec = code.decryptMessage(
          crypt_file.responseText,
          Base64.decode(pass)
        );
        //console.log(dec);
        eval(dec);
        document.getElementsByClassName("login-container")[0].remove();
      } catch {
        localStorage.removeItem("passString");
        showSnack("Incorrect password stored in cache!!!");
      }
    }
  };
  crypt_file.open("GET", "../js/creds.dat", true);
  crypt_file.send(null);
}

function toggleAppOrBrowser() {
  var selected = document.getElementById("preference").value;
  var anchorTags = document.getElementsByTagName("a");

  var forBrowser = "/wc/join/";
  var forApp = "/j/";

  if (selected == "app") {
    for (var i = 0; i < anchorTags.length; i++) {
      if (anchorTags[i].href.includes(forBrowser)) {
        anchorTags[i].href = anchorTags[i].href.replace(forBrowser, forApp);
      }
    }
    showSnack("Links will redirect to App!");
  } else {
    for (var i = 0; i < anchorTags.length; i++) {
      if (anchorTags[i].href.includes(forApp)) {
        anchorTags[i].href = anchorTags[i].href.replace(forApp, forBrowser);
      }
    }
    showSnack("Links will redirect to Browser!");
  }
}
