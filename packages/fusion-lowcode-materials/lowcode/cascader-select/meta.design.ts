import snippets from './snippets.design';
import parseData from '../utils/parse-data';
import { createDataSource } from './adaptor';

export default {
  group: '原子组件',
  componentName: 'CascaderSelect',
  title: '级联选择器',
  docUrl: '',
  screenshot: '',
  npm: {
    package: '@alilc/lowcode-materials',
    version: '{{version}}',
    exportName: 'CascaderSelect',
    main: '',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'prefix',
      propType: 'string',
      defaultValue: 'next-',
    },
    {
      name: 'label',
      title: {
        label: 'label',
        tip: '自定义内联 label',
      },
      propType: 'string',
      description: '自定义内联 label',
    },
    {
      name: 'className',
      propType: 'string',
    },
    {
      name: 'size',
      propType: {
        type: 'oneOf',
        value: ['small', 'medium', 'large'],
      },
      description: '大小',
      defaultValue: 'medium',
    },
    {
      name: 'placeholder',
      propType: 'string',
      description: '占位符',
    },
    {
      name: 'dataSource',
      propType: {
        type: 'arrayOf',
        value: 'object',
      },
    },
    {
      name: 'disabled',
      propType: 'bool',
      description: '是否禁用',
      defaultValue: false,
    },
    {
      name: 'hasArrow',
      propType: 'bool',
      description: '下拉箭头',
      defaultValue: true,
    },
    {
      name: 'hasBorder',
      propType: 'bool',
      description: '边框',
      defaultValue: true,
    },
    {
      name: 'hasClear',
      propType: 'bool',
      description: '清除按钮',
      defaultValue: false,
    },
    {
      name: 'notFoundContent',
      title: {
        label: '无数据时显示内容',
        tip: 'notFoundContent',
      },
      propType: {
        type: 'oneOfType',
        value: ['node', 'string'],
      },
      description: '无数据时显示内容',
      defaultValue: 'Not Found',
    },
    {
      name: 'loadData',
      propType: 'func',
      description: '异步加载数据函数\n@param {Object} data 当前点击异步加载的数据',
    },
    {
      name: 'header',
      propType: 'node',
      description: '自定义下拉框头部',
    },
    {
      name: 'footer',
      propType: 'node',
      description: '自定义下拉框底部',
    },
    {
      name: 'defaultVisible',
      title: {
        label: '初始下拉框是否显示',
        tip: 'defaultVisible',
      },
      propType: 'bool',
      description: '初始下拉框是否显示',
      defaultValue: false,
    },
    {
      name: 'visible',
      title: {
        label: '当前下拉框是否显示',
        tip: 'visible',
      },
      propType: 'bool',
      description: '当前下拉框是否显示',
    },
    {
      name: 'readOnly',
      propType: 'bool',
      description: '是否只读',
    },
    {
      name: 'onChange',
      propType: 'func',
      description:
        '选中值改变时触发的回调函数\n@param {String|Array} value 选中的值，单选时返回单个值，多选时返回数组\n@param {Object|Array} data 选中的数据，包括 value 和 label，单选时返回单个值，多选时返回数组，父子节点选中关联时，同时选中，只返回父节点\n@param {Object} extra 额外参数\n@param {Array} extra.selectedPath 单选时选中的数据的路径\n@param {Boolean} extra.checked 多选时当前的操作是选中还是取消选中\n@param {Object} extra.currentData 多选时当前操作的数据\n@param {Array} extra.checkedData 多选时所有被选中的数据\n@param {Array} extra.indeterminateData 多选时半选的数据',
    },
    {
      name: 'expandTriggerType',
      propType: {
        type: 'oneOf',
        value: ['click', 'hover'],
      },
      description: '展开触发方式',
      defaultValue: 'click',
    },
    {
      name: 'onExpand',
      propType: 'func',
    },
    {
      name: 'useVirtual',
      propType: 'bool',
      description: '虚拟滚动',
      defaultValue: false,
    },
    {
      name: 'multiple',
      propType: 'bool',
      description: '是否多选',
      defaultValue: false,
    },
    {
      name: 'changeOnSelect',
      title: {
        label: '选中即改变',
        tip: 'changeOnSelect|是否选中即发生改变, 该属性仅在单选模式下有效',
      },
      propType: 'bool',
      description: '是否选中即发生改变, 该属性仅在单选模式下有效',
      defaultValue: false,
    },
    {
      name: 'canOnlyCheckLeaf',
      title: {
        label: 'canOnlyCheckLeaf',
        tip: '是否只能勾选叶子项的checkbox，该属性仅在多选模式下有效',
      },
      propType: 'bool',
      description: '是否只能勾选叶子项的checkbox，该属性仅在多选模式下有效',
      defaultValue: false,
    },
    {
      name: 'checkStrictly',
      title: {
        label: 'checkStrictly',
        tip: '父子节点是否选中不关联',
      },
      propType: 'bool',
      description: '父子节点是否选中不关联',
      defaultValue: false,
    },
    {
      name: 'listStyle',
      propType: 'object',
      description: '每列列表样式对象',
    },
    {
      name: 'resultAutoWidth',
      title: {
        label: 'resultAutoWidth',
        tip: '搜索结果列表是否和选择框等宽',
      },
      propType: 'bool',
      description: '搜索结果列表是否和选择框等宽',
      defaultValue: true,
    },
    {
      name: 'showSearch',
      propType: 'bool',
      description: '搜索框',
      defaultValue: false,
    },
    {
      name: 'filter',
      propType: 'func',
      description:
        '自定义搜索函数\n@param {String} searchValue 搜索的关键字\n@param {Array} path 节点路径\n@return {Boolean} 是否匹配\n@default 根据路径所有节点的文本值模糊匹配',
    },
    {
      name: 'onVisibleChange',
      propType: 'func',
      description:
        '下拉框显示或关闭时触发事件的回调函数\n@param {Boolean} visible 是否显示\n@param {String} type 触发显示关闭的操作类型, fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发',
    },
    {
      name: 'popupStyle',
      propType: 'object',
      description: '下拉框自定义样式对象',
    },
    {
      name: 'popupProps',
      propType: 'object',
      description: '透传到 Popup 的属性对象',
    },
    {
      name: 'followTrigger',
      title: {
        label: '是否跟随滚动',
        tip: 'followTrigger',
      },
      propType: 'bool',
      description: '是否跟随滚动',
    },
    {
      name: 'isPreview',
      title: {
        label: '是否为预览态',
        tip: 'isPreview',
      },
      propType: 'bool',
      description: '是否为预览态',
    },
    {
      name: 'style',
      propType: 'object',
    },
    {
      name: 'popupContainer',
      propType: 'any',
      description: '弹层容器\n@param {Element} target 目标元素\n@return {Element} 弹层的容器元素',
    },
  ],
  configure: {
    supports: {
      style: true,
      events: ['onChange', 'onExpand', 'onVisibleChange'],
    },
    props: [
      {
        name: 'label',
        title: {
          label: '内联文案',
          tip: 'label|输入框内置标签',
        },
        setter: 'StringSetter',
      },
      {
        name: 'placeholder',
        title: {
          label: '占位提示',
          tip: '属性: placeholder',
        },
        defaultValue: '请选择', // 不生效
        setter: 'StringSetter',
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '尺寸',
            en_US: 'Button Size',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: size | 说明: 按钮尺寸',
            en_US: 'prop: size | description: button size',
          },
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                label: '小',
                value: 'small',
              },
              {
                label: '中',
                value: 'medium',
              },
              {
                label: '大',
                value: 'large',
              },
            ],
          },
        },
        defaultValue: 'medium',
      },
      {
        name: 'visible',
        title: {
          label: '状态',
          tip: '属性: visible',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            defaultValue: 'single',
            options: [
              { value: false, title: '普通' },
              { value: true, title: '展开' },
            ],
          },
        },
      },
      {
        name: 'hasBorder',
        title: {
          label: {
            type: 'i18n',
            zh_CN: '显示边框',
            en_US: 'ShowBorder',
          },
          tip: {
            type: 'i18n',
            zh_CN: '属性: hasBorder | 说明: 是否有边框',
            en_US: 'prop: hasBorder | description: HasBorder',
          },
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                label: '无',
                value: false,
              },
              {
                label: '有',
                value: true,
              },
            ],
          },
        },
      },
      {
        name: 'multiple',
        title: '复选框',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                label: '无',
                value: false,
              },
              {
                label: '有',
                value: true,
              },
            ],
          },
        },
        defaultValue: false,
      },
      {
        name: 'style.width',
        title: '宽度',
        setter: 'NumberSetter',
      },
      {
        name: 'showSearch',
        title: {
          label: '可搜索',
          tip: '属性: showSearch',
        },
        setter: 'BoolSetter',
        defaultValue: false,
      },
      {
        name: 'disabled',
        title: '是否禁用',
        setter: 'BoolSetter',
        defaultValue: false,
      },
      {
        name: 'plainData',
        display: 'block',
        title: '内容',
        tip: {
          title: '数据格式',
          url: '',
        },
        setValue: (target, value) => {
          const list = parseData(value).filter(({ type }) => 'node' === type);
          const keys = { selected: [], expanded: [] };
          const dataSource = createDataSource(list, keys);
          target.parent.setPropValue('dataSource', dataSource);
          target.parent.setPropValue('value', keys.selected);
        },
        setter: {
          componentName: 'MagicEditorSetter',
          props: {
            toolbar: ['normal', 'active', 'disable'],
            disableIcon: true,
          },
        },
      },
    ],
  },
  icon: '',
  category: '信息输入',
  snippets,
};