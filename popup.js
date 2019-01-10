

// Read it using the storage API
chrome.storage.sync.get('status', function(value_name) {
    console.log(value_name);
    message('Settings retrieved', value_name);
});
document.getElementById("formatpage").innerHTML = "test";
document.getElementById("formatpage").innerHTML = value_name;