/*! @preserve https://github.com/wusfen/download.js */

(function(window, document){

  // {h5}: click a[download] 
  function aDownload(url, filename) {
    var a = document.createElement('a')
    if (!('download' in a)){
      return
    }

    a.download = filename || ''
    a.target =  '_blank'
    a.href =  url

    var event = document.createEvent('MouseEvents')
    event.initEvent('click')
    a.dispatchEvent(event)

    // document.body.appendChild(a) // {firefox}
    // a.click()
    // document.body.removeChild(a)

    return true
  }

  // open + saveAs
  function openSaveAs(url) {
    // {others}: open
    var win = window.open(url, '_blank')

    // {ie}: saveAs 
    setTimeout(function () {
    	// 非浏览器可查看的文件 open时已调下载框
      if (url.match(/(.jpg|.jpeg|.png|.gif|.bmp|.webp|.txt|.md|.js|.json|.css|.html|.htm|.xml|.svg)$/i)) {
      	// ie有效，其它已open做为降级处理
        win.document.execCommand('saveAs') 
        // && win.close() // open的win execCommand都返回false
      }
    }, 41)
  }

  function download(url, filename) {
    aDownload(url, filename) || openSaveAs(url)
  }

  if (typeof module != 'undefined') {
    module.exports = download
  } else{
    window.download = download
  }

})(window, document)
