<script>
import isUndefined from 'lodash/isUndefined';
import '@/assets/icon/iconfont.css';
// import { Menu, Submenu, MenuItem } from 'element-ui';

const regUrl = /^(?:\w+:)?\/\/([^\s.]+\.\S{2}|localhost[:?\d]*)\S*$/;
const isUrl = function (string) {
  return regUrl.test(string);
};

const renderMenuItem = function (h, item) {
  const { title, path, target = '_self' } = item;
  let $menuItem = null;
  if (isUrl(path)) {
    $menuItem = (
      <li class="el-menu-item">
        <a class="link el-menu-item__inner" domPropsHref={path} target={target}>
          {title}
        </a>
      </li>
    );
  } else if (!isUndefined(path)) {
    $menuItem = (
      <el-menu-item index={path}>
        <span slot="title">{title}</span>
      </el-menu-item>
    );
  }
  return $menuItem;
};

const renderSubMenu = function (h, item) {
  const { title, icon, path, children } = item;
  const $children = renderMenuItems(h, children);
  return (
    <el-submenu index={path} class="submenu">
      <template slot="title">
        <i class={icon}></i>
        <span slot="title">{title}</span>
      </template>
      {$children.map(item => item)}
    </el-submenu>
  );
};

const renderMenuItems = function (h, menuData) {
  return menuData.map(item => {
    const { children } = item;
    const hasSubMenu = Array.isArray(children) && children.length;
    return hasSubMenu ? renderSubMenu(h, item) : renderMenuItem(h, item);
  });
};

export default {
  props: {
    data: {
      type: Array, // 菜单项数组
      required: true
    },
    isCollapse: Boolean,
    defaultActive: String, // 当前激活菜单的 index
    router: Boolean, // 是否使用 vue-router 的模式
    mode: {
      type: String,
      default: 'horizontal', // 模式, [horizontal / vertical]
      validator (value) {
        return ['horizontal', 'vertical'].indexOf(value) > -1;
      }
    }
  },
  mounted () {
    this.$forceUpdate();
  },
  render (h) {
    const { $attrs, $props } = this;
    const { mode, defaultActive, router, data, isCollapse } = $props;
    const $menuItems = renderMenuItems(h, data);
    const $menu = (
      <el-menu
        class="navmenu"
        ref="navmenu"
        {...{ $attrs }}
        router={router}
        defaultActive={defaultActive}
        mode={mode}
        collapse={isCollapse}
        // 打开时自动展开二级菜单
        // defaultOpeneds='/sec-assets'
      >
        {$menuItems}
      </el-menu>
    );
    return $menu;
  }
};
</script>

<style lang="scss">
$--menu-color: rgba(255, 255, 255, 0.65);
$--menu-default-color: #909399;
$--menu-active-color: #fff;
$--menu-background-active-color: #1890ff;
$--menu-height: 35px;
$--hearder-height: 60px;

.el-menu--horizontal {
  border-bottom: none;

  .link {
    display: block;
    color: $--menu-default-color;
    &:hover {
      color: $--menu-active-color;
    }
  }
  .el-menu-item,
  .el-submenu .el-submenu__title {
    height: $--hearder-height;
    line-height: $--hearder-height;
  }
}
.navmenu.el-menu {
  flex: 1;
  overflow-y: auto;
  border-right: none;
  background-color: transparent;

  .el-menu {
    background: #152130;
  }

  .el-menu.el-menu--inline {
    background-color: transparent;
  }

  .el-submenu .el-menu-item {
    min-width: 1;
  }
  .el-menu-item,
  .el-submenu__title {
    color: $--menu-color;

    &:hover,
    &:active {
      background-color: transparent;
      color: #fff;
    }
  }

  .el-menu-item,
  .el-submenu .el-submenu__title {
    height: $--menu-height;
    line-height: $--menu-height;
  }

  .el-menu-item.is-active {
    border-radius: 3px;
    background: $--menu-background-active-color;
    color: $--menu-active-color;
  }

  .el-submenu.is-active,
  .el-submenu.is-opened {
    .el-submenu__title {
      color: #fff;
      margin: 0;
    }
  }
  .iconfont{
    font-size: 25px;
    margin-right: 5px;
  }
}
</style>
