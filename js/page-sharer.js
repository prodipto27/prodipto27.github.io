function copyText(str) {
    //var range, selection, worked;

    var el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();

    try {
        document.execCommand('copy');
        //alert('text copied');
        showSnackbar("Sharing link wasn't possible, copied to clipboard instead!", "OK");
    }
    catch (err) {
        showSnackbar("Can't share or copy link. Please try to copy the link manually!", "OK");
    }
    document.body.removeChild(el);
}


var urlLastSegment;
//console.log(urlLastSegment);
var urlToShare;


function shareThisPage() {
    urlLastSegment = document.getElementById('ifrm').src.split("/").pop();
    urlToShare = document.location.protocol + "//" + document.location.hostname + ((document.location.port == '') ? '' : ':' + document.location.port) + "/?page=" + urlLastSegment;
    if (navigator.share) {
        navigator.share({
            title: document.title,
            text: 'প্রদীপ্ত-২৭ এর এক অ্যাপে সবকিছু!',
            url: urlToShare,
        })
            .then(() => console.log('Successful share'))
            .catch((error) => console.log('Error sharing', error));
    } else {
        copyText(urlToShare);
    }
}

