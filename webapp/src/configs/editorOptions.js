import toolbarOptions from '@/configs/toolbarOptions';
import { Quill } from 'vue-quill-editor';

// 自定义插入a链接
var Link = Quill.import('formats/link');
class FileBlot extends Link { // 继承Link Blot
  static create (value) {
    let node;
    if (value && !value.href) { // 适应原本的Link Blot
      node = super.create(value);
    } else { // 自定义Link Blot
      node = super.create(value.href);
      // node.setAttribute('download', value.innerText); // 左键点击即下载
      node.innerText = value.innerText;
      node.download = value.innerText;
    }
    return node;
  }
}
FileBlot.blotName = 'link';
FileBlot.tagName = 'A';
Quill.register(FileBlot);

export default {
  serverUrl: 'http://127.0.0.1:8810/upload', // 上传图片服务器地址
  editorOption: {
    placeholder: '请在这里输入 ...',
    theme: 'snow', // or 'bubble'
    modules: {
      toolbar: {
        container: toolbarOptions,
        handlers: {
          // 上传图片
          'image': function (value) {
            if (value) {
              document.querySelector('.img-uploader input').click();
            } else {
              this.quill.format('image', false);
            }
          },
          // 上传附件
          'link': function (value) {
            if (value) {
              document.querySelector('.file-uploader input').click();
            } else {
              this.quill.format('link', false);
            }
          }
        }
      }
    }
  }
};
