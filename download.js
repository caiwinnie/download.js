/*! @preserve https://github.com/wusfen/download.js */

(function(window, document){

  // click a[download]
  function aDownload(url) {
    var a = document.createElement('a')
    if (!('download' in a)){
      return
    }

    a.download = ''
    a.target =  '_blank'
    a.href =  url

    var event = document.createEvent('MouseEvents')
    event.initEvent('click')
    setTimeout(function () {
			a.dispatchEvent(event)
		}, 41}

    return true
  }

  // open + saveAs
  function openSaveAs(url) {
    // open
    var win = window.open(url, '_blank')

    // saveAs
    setTimeout(function () {
      if (url.match(/(.jpg|.jpeg|.png|.gif|.bmp|.webp|.txt|.md|.js|.json|.css|.html|.htm|.xml|.svg)$/i)) {
        win.document.execCommand('saveAs')
      }
    }, 41)
  }

  function download(url) {
    aDownload(url) || openSaveAs(url)
  }

  if (typeof module != 'undefined') {
    module.exports = download
  } else{
    window.download = download
  }

})(window, document)
