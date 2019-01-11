window.onload = function() {
    chrome.storage.local.get(['status','autostatus'], function(result) {
        
        var status = result.status;
        var autostatus = result.autostatus;

        function format () {
            var image = "<div align='center'>"+document.getElementsByClassName("col-md-2 col-md-push-1 hidden-sm hidden-xs")[0].innerHTML+"</div>";
            var titles = "<div align='center' style=' margin-top: 20px; margin-bottom: 20px;'>"+document.getElementsByClassName("col-md-5 col-lg-6 col-md-offset-1 text-center md-text-left")[0].innerHTML+"</div>";
            var top_buttons = "<div align='center' style=' margin-top: 20px; margin-bottom: 20px;'>"+document.getElementsByClassName("col-md-4 col-lg-3 fic-buttons text-center md-text-left")[0].innerHTML+"</div>";
            var info = image+titles+top_buttons
            var chapter = document.getElementsByClassName("chapter-inner chapter-content")[0].outerHTML;
            var buttons = document.getElementsByClassName("row margin-bottom-10 margin-left-0 margin-right-0")[0].outerHTML;

            var style_sheet1 = '<link type="text/css" rel="stylesheet" href="/Content/Themes/Styles/main-bundle.min.css?v=_fHbhi2CRG01nug60zED2X4MFeey15-QQhQfrc8FYjI" />';
            var style_sheet2 = '<link type="text/css" rel="stylesheet" href="/Content/Themes/Bootstrap/Site-dark.css?v=WYwgjhQhmxH5F1uertX0K5iAg8P245t9-oDD_39UywU" />';
            var style_sheet3 = '<link rel="stylesheet" type="text/css" href="/Content/profile-2.min.css" />';
            var style_sheet4 = '<link rel="stylesheet" type="text/css" href="/Content/plugins/socicon/socicon.css" />';
            var style_sheet5 = '<link rel="stylesheet" type="text/css" href="/Content/blog.min.css" />';

            var style_sheets = style_sheet1 + style_sheet2 + style_sheet3 + style_sheet4 + style_sheet5;

            var html = "<div class='portlet light chapter' style='width: 50%; margin: 25%; margin-top: 20px; margin-bottom: 20px;'>"+style_sheets+info+chapter+buttons+"</div>";

            document.write(html);
        }

        if (autostatus == "enabled") {
            format();
        } else {
            var status_str = "Enable";
            var status = "disabled";
            // Save it using the Chrome extension storage API.
            chrome.storage.local.set({'autostatus': autostatus, 'status': status, 'status_str': status_str}, function() {
                console.log('Settings saved');
            });
        }
    });
}