<template>
  <div class="file-uploader">
    <Upload
      ref="upload"
      :name="name"
      :show-file-list="showList"
      :file-list="fileList"
      :multiple="multiple"
      :limit="limitCount"
      :action="uploadUrl"
      :auto-upload="autoUpload"
      :before-upload="handleBeforeUpload"
      :on-change="handleChange"
      :on-error="handleError"
      :on-success="handleSuccess"
    >
      <Button :type="buttonType">{{ buttonText }}</Button>
      <div slot="tip" class="el-upload__tip">{{ uploadTip }}</div>
    </Upload>
  </div>
</template>

<script>
export default {
  name: 'file-upload',
  props: {
    name: {
      type: String,
      default: 'file'
    },
    showList: {
      type: Boolean,
      default: false
    },
    fileList: {
      type: Array,
      default () {
        return [];
      }
    },
    multiple: {
      type: Boolean,
      default: false
    },
    limitCount: {
      type: Number,
      default: 5
    },
    limitSize: {
      type: Number,
      default: Number.MAX_SAFE_INTEGER
    },
    accepts: [String, Array],
    uploadTip: {
      type: String
    },
    uploadUrl: {
      required: true,
      type: String
    },
    autoUpload: {
      type: Boolean,
      default: true
    },
    buttonType: {
      type: String,
      default: 'primary'
    },
    buttonText: {
      type: String,
      default: '选择文件'
    },
    onBeforeUpload: Function
  },
  methods: {
    handleError (error) {
      this.$emit('error', error);
      this.$throw(error);
    },
    handleBeforeUpload (file) {
      let hookValidate = true;
      if (this.onBeforeUpload) {
        hookValidate = this.onBeforeUpload(file);
        if (hookValidate === false) return false;
      }
      const extName = file.name.slice(file.name.lastIndexOf('.') + 1);
      if (this.accepts && [].concat(this.accepts).length > 0 && !this.accepts.includes(extName)) {
        this.$throw(`上传文件类型不正确，允许类型为 ${this.accepts}!`);
        return false;
      }
      const isExceed = file.size > this.limitSize;
      if (isExceed) {
        this.$throw(`上传文件大小不能超过 ${this.limitSize}KB!`);
        return false;
      }
      return true;
    },
    handleChange (file, fileList) {
      this.$emit('change', { file, fileList });
    },
    handleSuccess (response) {
      this.$emit('success', response);
    },
    upload () {
      this.$refs.upload.submit();
    }
  }
};
</script>

<style lang="scss" scoped>
.file-uploader {
  display: inline-flex;
  margin-right: 5px;
  button {
    margin: 0;
  }
}
.el-upload__tip {
  display: inline-flex;
  margin: 0;
}
</style>
