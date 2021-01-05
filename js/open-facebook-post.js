// var fbPostClickListener = function(e){
//     showSnackbar("Opening Facebook Post...", "OK");
// setTimeout(function () {
//     console.log("Opening Facebook Post...");
//     window.open("https://www.facebook.com/groups/IST.CSE27th/permalink/613081512739482", "_blank");
// }, 2000);
// }

// function openFbPost() {
//     clearAcceptListener();
//     var dialog = new mdc.dialog.MDCDialog(document.querySelector('.mdc-dialog'));

//     try {
//         document.getElementsByClassName('mdc-dialog__button')[1].removeEventListener("click", fbPostClickListener, true);
//     } catch (err) {
//         console.log(err);
//     }

//     try {
//         document.getElementsByClassName('mdc-dialog__button')[1].removeEventListener("click", pwaButtonListener, true);
//     } catch (err) {
//         console.log(err);
//     }


//     document.getElementById("my-dialog-content").textContent = "গোগনীয়তার খাতিরে ভিডিও প্লেলিস্টগুলোর লিংক এখানে না দিয়ে লিংক সম্বলিত ফেসবুক পোস্টে তোমাকে নিয়ে যাওয়া হচ্ছে।";
//     // const dialog = new mdc.dialog.MDCDialog(document.querySelector('.mdc-dialog'));

//     dialog.open();
//     //var stat = 'fbpost'
//     //document.getElementById('dialog-accept').id = "facebook-post-open-accept";
//     document.getElementsByClassName("mdc-dialog__button")[1].id = 'facebook-post-open-accept';

//     document.getElementById('facebook-post-open-accept').addEventListener("click", fbPostClickListener, true);
// }

var link = "www.facebook.com/groups/IST.CSE27th/permalink/613081512739482/";

function openFbVidLinkPost() {

    var ua = navigator.userAgent.toLowerCase();
    var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");

    if (isAndroid) {
        var fbDialog = new mdc.dialog.MDCDialog(document.getElementsByClassName('mdc-dialog')[1]);
        fbDialog.open();

    }
    else {
        showSnackbar("Opening Facebook Post...", "OK");
        setTimeout(function () {
            window.open("https://" + link, "_blank");
        }, 2000);
    }
}

document.getElementById("fbapp").addEventListener('click', (e) => {
    showSnackbar("Opening Facebook Post...", "OK");

    setTimeout(function () {
        console.log("Opening Facebook Post...");
        document.location = "intent://" + link + "#Intent;package=com.facebook.katana;scheme=https;end";
    }, 2000);

    setTimeout(function () {
        showSnackbar("ফেসবুক অ্যাপ ওপেন হয়েছে কি? না হয়ে থাকলে পরের বার ব্রাউজার সিলেক্ট করুন।", "ঠিকাছে")
    }, 6000);
});

document.getElementById("fbapplite").addEventListener('click', (e) => {
    showSnackbar("Opening Facebook Post...", "OK");
    setTimeout(function () {
        console.log("Opening Facebook Post...");
        document.location = "intent://" + link + "#Intent;package=com.facebook.lite;scheme=https;end";
    }, 2000);

    setTimeout(function () {
        showSnackbar("ফেসবুক লাইট অ্যাপ ওপেন হয়েছে কি? না হয়ে থাকলে পরের বার ব্রাউজার সিলেক্ট করুন।", "ঠিকাছে")
    }, 6000);
});

document.getElementById("fbbrowser").addEventListener('click', (e) => {
    showSnackbar("Opening Facebook Post...", "OK");
    setTimeout(function () {
        window.open("https://" + link, "_blank");
    }, 2000);
});
