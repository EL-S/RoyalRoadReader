// Read it using the storage API
chrome.storage.local.get('status', function(result) {
    var status = result.status;
    var status_str = "";
    if (status == "enabled") {
        status_str = "Disable";
        //code to call a page change
    } else if (status == "disabled") {
        status_str = "Enable";
    } else {
        status_str = "Error";
    }
    document.getElementById("formatpage").innerHTML = status_str;
});