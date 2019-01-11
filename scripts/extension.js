document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('formatpage');

    button.addEventListener('click', function () {
        
        var status_str = document.getElementById("formatpage").innerHTML;
        var status = "";

        if (status_str == "Enable") {
            status = "enabled";
            status_str = "Disable" //the new button text
        } else if (status_str == "Disable") {
            status = "disabled";
            status_str = "Enable"; //the new button text
        } else {
            status = "disabled";
            status_str = "Enable"; //the new button text
        }
    
        // Save it using the Chrome extension storage API.
        chrome.storage.local.set({'status': status, 'status_str': status_str}, function() {
            console.log('Settings saved');
        });
        document.getElementById("formatpage").innerHTML = status_str;

        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {data: status}, function(response) {
                console.log('Success');
            });
        });
    });
});

