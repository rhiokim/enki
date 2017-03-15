/* global chrome */
let lastTabId

const sendMessage = () => {
  chrome.tabs.query({active: true, currentWindow: true}, tabs => {
    lastTabId = tabs[0].id
    chrome.tabs.sendMessage(lastTabId, 'Background page started.')
  })
}

sendMessage()

chrome.runtime.onInstalled.addListener(() => {
  console.log('Installed.')
})

chrome.runtime.onMessage.addListener((msg, _, sendResponse) => {
  console.log('recive message', msg.data)
})
