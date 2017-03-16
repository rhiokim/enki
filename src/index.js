/* global chrome PouchDB */
console.log('load content script')

const db = new PouchDB('enki')

/*
chrome.runtime.onMessage.addListener((msg, _, sendResponse) => {
  console.log('Got message from background page: ' + msg)
})

document.addEventListener('mouseup', event => {
  var sel = window.getSelection().toString()

  if (sel.length) {
    chrome.runtime.sendMessage({data: sel}, response => {})
  }
})
*/

const insert = (selection, page) => {
  db.post({
    text: selection,
    page: page,
    created_at: new Date()
  }).then(data => {
    console.log('insert succeed: ', data)
  })
}

const getPageInfo = tab => {
  return {
    title: tab.title,
    url: tab.url
  }
}

chrome.runtime.onMessage.addListener((msg, _, sendResponse) => {
  console.log(msg.data[0])
  insert(msg.data[0], getPageInfo(msg.tab))
})
