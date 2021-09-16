function postWorker(){
    caches.keys().then(data => {
        var stored_latest_version = localStorage.getItem("stored_latest_version");
        
        if(stored_latest_version == null){
            stored_latest_version = data[data.length-1];
        }
        
        var current_latest_version = localStorage.getItem("current_latest_version");
        var showVersionChangePrompt = localStorage.getItem("showVersionChangePrompt");

        console.log(stored_latest_version, current_latest_version, showVersionChangePrompt);

        if(showVersionChangePrompt == '1'){
            localStorage.setItem("showVersionChangePrompt", "0");
            version = localStorage.getItem("current_latest_version");
            version_changes = localStorage.getItem("current_latest_version_changes");
        
            var arr = version_changes.split("\n");

            html_string = "<ol>";
            for(var i = 0; i < arr.length; i++){
                var temp = arr[i];
                html_string += "<li>" + temp + "</li>";
            }
            html_string += "</ol>";

            Swal.fire({
                title: version + ' release',
                icon: 'info',
                html: html_string
            });

            localStorage.getItem("stored_latest_version", version);
        }

        if(stored_latest_version != current_latest_version){
            localStorage.setItem("showVersionChangePrompt", "1");
        }
    });

    var showVersionChangePrompt = localStorage.getItem("showVersionChangePrompt");
    if(showVersionChangePrompt == null){
        localStorage.setItem("showVersionChangePrompt", "1");
    } 
}


function check_version_change(){

    (async () => {
        let response = await new Promise(resolve => {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "/version_log.json", true);
            xhr.onload = function (e) {
                resolve(xhr.response);
            };
            xhr.onerror = function () {
                resolve(undefined);
                console.error("** An error occurred during the XMLHttpRequest");
            };
            xhr.send();
        });
        var r = JSON.parse(response);
        var temp1 = r.version;
        var temp2 = r.changes;
        localStorage.setItem("current_latest_version", temp1);
        localStorage.setItem("current_latest_version_changes", temp2);
    })();

    setTimeout(postWorker, 2300);

}

check_version_change();