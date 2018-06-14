(function(window, document){

  // a[download]
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

    // 通过 click **同时**触发 click ，可能会被无视
    setTimeout(function () {
      a.dispatchEvent(event)
    }, 46)

    return true
  }

  // open saveAs
  function winOpen(url) {
    // open
    var win = window.open(url, '_blank')

    // saveAs
    setTimeout(function () {
      if (url.match(/(.jpg|.jpeg|.png|.gif|.bmp|.txt|.js|.css|.html|.htm)$/i)) {
        win.document.execCommand('saveAs')
      }
    }, 46)
  }

  function download(url) {
    aDownload(url) || winOpen(url)
  }

  if (typeof module != 'undefined') {
    module.exports = download
  } else{
    window.download = download
  }

})(window, document)
