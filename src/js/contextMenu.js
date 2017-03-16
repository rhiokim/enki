/* global chrome */
let lastTabId

const sendMessage = data => {
  chrome.tabs.query({active: true, currentWindow: true}, tabs => {
    lastTabId = tabs[0].id
    chrome.tabs.sendMessage(lastTabId, {data: data, tab: tabs[0]})
  })
}

const getSelection = (info, tab) => {
  chrome.tabs.executeScript({
    code: 'window.getSelection().toString();'
  }, selection => {
    sendMessage(selection)
    // console.log('selection', info)
    // console.log('selection', selection)
    // console.log('selection', selection[0])
    // console.log('tab', tab)
  })
}

chrome.contextMenus.create({
  'title': 'Memorizing...',
  'contexts': ['selection'],
  'onclick': getSelection
})
