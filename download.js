/*! @preserve https://github.com/wusfen/download.js */

(function(window, document){

  // {h5}: click a[download] 
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
    setTimeout(function () { // 不延迟曾遇无效
			a.dispatchEvent(event)
		}, 41}

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
      	// 不一定成功，但已open做为降级处理
        win.document.execCommand('saveAs') 
        // && win.close() // open的win execCommand都返回false
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
