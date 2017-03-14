/* global chrome */
const getCurrentTab = (callback) => {
  chrome.tabs.getSelected(null, (tab) => {
    callback(null, tab)
  })
}

getCurrentTab((err, tab) => {
  if (err) {
    throw (new Error('error'))
  }
  console.log(tab)
})
