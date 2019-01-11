// Read it using the storage API
chrome.storage.local.get(['status','autostatus'], function(result) {
    var status = result.status;
    var autostatus = result.autostatus;
    var status_str = "";
    if (status == "enabled") {
        status_str = "Disable";
        //code to call a page change
    } else if (status == "disabled") {
        status_str = "Enable";
    } else {
        status_str = "Enable";
    }
    document.getElementById("formatpage").innerHTML = status_str;
    if (autostatus == 'enabled') {
        document.getElementById("checkbox-slider").checked = true;
    } else {
        document.getElementById("checkbox-slider").checked = false;
    }
});