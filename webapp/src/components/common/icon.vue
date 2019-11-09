<!--
  icon 组件

  props:
    size: icon 的尺寸
    name: icon 的名称（见 src/assets/images/icon/ 目录里的 icon 文件，支持 svg 与 png 两种 icon）
 -->

<template>
  <i
    v-if="fixed ? true : backgroundImagePath"
    :class="{'icon': true, [`icon-${name}`]: true}"
    :style="{
    width: width,
    height: height,
    backgroundSize: backgroundSize,
    backgroundImage: backgroundImage
  }"
    @click="$emit('click')"
  />
</template>

<script>
import { isString, isNumber, isArray } from 'lodash';
const iconContext = require.context('@/assets/icons/', true, /\.(svg|png)$/);
const iconPaths = new Set(iconContext.keys());

export default {
  name: 'icon',
  props: {
    name: String,
    fixed: Boolean,
    size: [String, Number, Array]
  },
  computed: {
    width () {
      if (isNumber(this.size)) {
        return `${this.size}px`;
      }
      if (isArray(this.size)) {
        return `${this.size[0]}px`;
      }
      if (isString(this.size)) {
        if (this.size.includes(',')) {
          const [w] = this.size.split(',');
          return w.trim();
        } else {
          return this.size;
        }
      }
      return undefined;
    },
    height () {
      if (isNumber(this.size)) {
        return `${this.size}px`;
      }
      if (isArray(this.size)) {
        return `${this.size[1]}px`;
      }
      if (isString(this.size)) {
        if (this.size.includes(',')) {
          // eslint-disable-next-line no-unused-vars
          const h = this.size.split(',')[1];
          return h === undefined ? '' : h.trim();
        } else {
          return this.size;
        }
      }
      return undefined;
    },
    backgroundSize () {
      if (isString(this.size)) {
        return this.size;
      }
      if (isNumber(this.size)) {
        return `${this.size}px ${this.size}px`;
      }
      if (isArray(this.size)) {
        const [w, h] = this.size;
        return `${w}px ${h}px`;
      }
      return undefined;
    },
    backgroundImagePath () {
      const svgPath = `./${this.name}.svg`;
      const pngPath = `./${this.name}.png`;
      if (iconPaths.has(svgPath)) {
        return iconContext(svgPath);
      } else if (iconPaths.has(pngPath)) {
        return iconContext(pngPath);
      }
      return '';
    },
    backgroundImage () {
      return `url(${this.backgroundImagePath})`;
    }
  }
};
</script>

<style lang="scss" scoped>
.icon {
  display: inline-block;
  vertical-align: sub;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
