<template>
  <div>
    <script id="editor" type="text/plain" ></script>
  </div>
</template>

<script>
import '../../../../static/ueditor/ueditor.config'
import '../../../../static/ueditor/ueditor.all.js'
import '../../../../static/ueditor/lang/zh-cn/zh-cn.js'

export default {
  name: "UEditor",
  props: {
    // id: {
    //     type: String
    // },
    config: {
        type: Object
    }
  },
  data() {
    return {
      editor: null
    }
  },
  mounted () {
    //初始化UE
    // const _this = this;
    this.editor = UE.getEditor('editor',this.config);
  },
  // destoryed() {
  //   this.editor.destory();
  // },
  methods: {
    getUEContent () {
      let html = ''
      this.editor.ready(() => {
        console.log(this);
        html =  this.editor.getContent()
      })
      return html
    }
  }
}
</script>