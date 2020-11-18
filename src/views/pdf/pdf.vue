<template>
  <div id="pdf-wrap">
  </div>
</template>
<script>
export default {
  name: 'PDF',
  data(){
    return {
      url: 'http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf'
    }
  },
  mounted(){
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.worker.min.js';
    var loadingTask = pdfjsLib.getDocument(this.url);
    loadingTask.promise.then(function(pdf) {
    for (var i = 1; i <= pdf.numPages; i++) {
      pdf.getPage(i).then(function(page) {
        var scale = 1.5;
        var viewport = page.getViewport({scale: scale});
        //
        // Prepare canvas using PDF page dimensions
        //
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        // 这里拿body当pdf容器
        document.getElementById("pdf-wrap").appendChild(canvas);
        //
        // Render PDF page into canvas context
        //
        page.render({canvasContext: context, viewport: viewport});
      });
     }  
   });
  }
}
</script>
<style lang="less">
#pdf-wrap{
  width: 100%;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  canvas{
    width: 98vw !important;
    margin: 0 auto;
  }
}
</style>
