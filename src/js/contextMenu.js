/* global chrome */
const getSelection = (info, tab) => {
  chrome.tabs.executeScript({
    code: 'window.getSelection().toString();'
  }, selection => {
    console.log('selection', info)
    console.log('selection', selection)
    console.log('selection', selection[0])
    console.log('tab', tab)
  })
}

chrome.contextMenus.create({
  'title': 'Memorizing...',
  'contexts': ['selection'],
  'onclick': getSelection
})
