/* global chrome */

chrome.runtime.onInstalled.addListener(() => {
  console.log('Installed.')
})

// chrome.runtime.onMessage.addListener((msg, _, sendResponse) => {
//   console.log('recive message', msg.data)
// })

chrome.browserAction.onClicked.addListener(function () {
  chrome.tabs.create({ url: chrome.runtime.getURL('list.html') })
})
