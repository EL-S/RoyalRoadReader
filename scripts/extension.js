document.addEventListener('DOMContentLoaded', function() {
    
    var button = document.getElementById('formatpage');
    
    var checkbox = document.getElementById('checkbox-slider');

    checkbox.addEventListener('click', function () {
        
        var status = "";
        var autostatus = "";
        var status_str = "";

        if (checkbox.checked == true) {
            autostatus = "enabled";
            status = "enabled";
            status_str = "Disable";
        } else {
            autostatus = "disabled";
            status = "disabled";
            status_str = "Enable";
        }
    
        // Save it using the Chrome extension storage API.
        chrome.storage.local.set({'autostatus': autostatus, 'status': status, 'status_str': status_str}, function() {
            console.log('Settings saved');
        });
        document.getElementById("formatpage").innerHTML = status_str;
        alert(autostatus);
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {data: autostatus}, function(response) {
                console.log('Success');
            });
        });
    });

    button.addEventListener('click', function () {
        
        var status_str = document.getElementById("formatpage").innerHTML;
        var autostatus = "";
        var status = "";

        if (status_str == "Enable") {
            status = "enabled";
            status_str = "Disable" //the new button text
        } else if (status_str == "Disable") {
            status = "disabled";
            autostatus = "disabled";
            status_str = "Enable"; //the new button text
        } else {
            status = "disabled";
            autostatus = "disabled";
            status_str = "Enable"; //the new button text
        }

        if (autostatus == 'disabled') {
            // Save it using the Chrome extension storage API.
            chrome.storage.local.set({'status': status, 'autostatus': autostatus, 'status_str': status_str}, function() {
                console.log('Settings saved');
            });
            document.getElementById("checkbox-slider").checked = false;
        }   else {
            // Save it using the Chrome extension storage API.
            chrome.storage.local.set({'status': status, 'status_str': status_str}, function() {
                console.log('Settings saved');
            });
        }
    
        
        document.getElementById("formatpage").innerHTML = status_str;

        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {data: status}, function(response) {
                console.log('Success');
            });
        });
    });
});

