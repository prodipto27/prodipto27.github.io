window.onhashchange = function () {
    console.log(document.location.href);
    var url = new URL(document.location.href);
    var c = url.searchParams.get("page");
    console.log(c);
    if (c != null) {
        var ifrm = document.getElementById("ifrm");
        ifrm.src = "pages/" + c;
    }
}

var url = new URL(document.location.href);
var c = url.searchParams.get("page");
console.log(c);
if (c != null) {
    var ifrm = document.getElementById("ifrm");
    ifrm.src = "pages/" + c;
}

[].forEach.call(document.getElementsByClassName("mdc-list-item"), function (el) {
    el.addEventListener("click", function (e) {
        console.log(el.getAttribute('data-location'));
        if (history.pushState) {
            history.pushState(null, null, el.getAttribute('data-location'));

        }
    });
});

var popped = ('state' in window.history && window.history.state !== null), initialURL = location.href;

window.addEventListener('popstate', function (event) {
    // Ignore inital popstate that some browsers fire on page load
    var initialPop = !popped && location.href == initialURL
    popped = true
    if (initialPop) return;

});