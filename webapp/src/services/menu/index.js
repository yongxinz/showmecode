function generateMenu (children, path = '/') {
  const menu = [];
  children.forEach(route => {
    if (isShow(route)) {
      const parentPath = prefixPath(path) + (route.path && `/${route.path}`);
      menu.push({
        title: route.meta.title,
        icon: route.meta.icon,
        path: parentPath
      });
      if (route.children && route.children.length > 0) {
        menu[menu.length - 1].children = generateMenu(route.children, parentPath);
      }
    }
  });
  return menu;
}

function isShow (route) {
  return route.meta && route.meta.show;
}

function prefixPath (path) {
  return (/^\//.test(path) ? '' : '/') + path.replace(/\/$/, '');
}

export default generateMenu;
