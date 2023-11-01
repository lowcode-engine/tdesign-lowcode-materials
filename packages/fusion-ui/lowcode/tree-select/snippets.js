module.exports = [
  {
    title: '树型选择控件',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_tree-select.png',
    schema: {
      componentName: 'TreeSelect',
      props: {
        prefix: 'next-',
        size: 'medium',
        hasArrow: true,
        hasBorder: true,
        autoWidth: true,
        notFoundContent: 'Not Found',
        treeCheckedStrategy: 'parent',
      },
    },
  },
  {
    title: '树形控件',
    screenshot:
      'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_tree.png',
    schema: {
      componentName: 'Tree',
      props: {
        prefix: 'next-',
        selectable: true,
        checkedStrategy: 'all',
        autoExpandParent: true,
        animation: true,
        focusable: true,
      },
    },
  },
];
