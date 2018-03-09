<template>
  <div id="app" class="hello">
    <div>
        <button size="primary" type="info" icon="plus" @click="getContent">获取内容</button>
        <UEditor :config="config" ref="editor"></UEditor>
      </div>

  </div>
</template>

<script>
  import UEditor from './Ueditor/index'

  export default{
      name: 'hello',
      components: {UEditor},
      data(){
        return {
          config: {
            //可以在此处定义工具栏的内容
            toolbars: [
              ['fullscreen', 'source','|', 'undo', 'redo','|','bold', 'italic', 'underline', 'fontborder', 'strikethrough',
                '|','superscript','subscript','|', 'forecolor', 'backcolor','|', 'removeformat','|', 'insertorderedlist', 'insertunorderedlist',
                '|','selectall', 'cleardoc','fontfamily','fontsize','justifyleft','justifyright','justifycenter','justifyjustify','|',
                'link','unlink']
            ],
            autoHeightEnabled: false,
            autoFloatEnabled: true,　　//是否工具栏可浮动
            initialContent:'请输入内容',   //初始化编辑器的内容,也可以通过textarea/script给值，看官网例子
            autoClearinitialContent:true, //是否自动清除编辑器初始内容，注意：如果focus属性设置为true,这个也为真，那么编辑器一上来就会触发导致初始化的内容看不到了
            initialFrameWidth: null,
            initialFrameHeight: 450,
            BaseUrl: '',
            UEDITOR_HOME_URL: 'static/ueditor/'
          },
        }
      },
      methods: {
        //获取文档内容
        getContent: function(){
          let content = this.$refs.editor.getUEContent();
          console.log(content);
          // alert(content);
        }
      }
  }

</script>