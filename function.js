chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
    if (changeInfo.status == 'complete'){
        chrome.scripting.executeScript({
            target: {tabId: tabId, allFrames: true},
            files: ['content.js']
        }).then(() => {
            console.log("Base extension loaded")
        })
    }
})