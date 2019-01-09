document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('formatpage');
    button.addEventListener('click', function () {
        var text = "test";
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {data: text}, function(response) {
                console.log('success');
            });
        });
    });
});

