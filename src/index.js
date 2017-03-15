/* global chrome */
console.log('load content script')

chrome.runtime.onMessage.addListener((msg, _, sendResponse) => {
  console.log('Got message from background page: ' + msg)
})

document.addEventListener('mouseup', event => {
  var sel = window.getSelection().toString()

  if (sel.length) {
    chrome.runtime.sendMessage({data: sel}, response => {})
  }
})
