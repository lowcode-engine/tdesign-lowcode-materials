import snippets from './snippets';

export default {
  componentName: 'Button',
  title: '按钮',
  category: '通用',
  props: [
    {
      title: '功能',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'children',
          title: {
            label: '内容',
            tip: 'children | 内容',
          },
          propType: {
            type: 'oneOfType',
            value: ['node', 'string'],
          },
          setter: ['SlotSetter', 'StringSetter', 'VariableSetter'],
        },
        {
          name: 'type',
          title: {
            label: '原生类型',
            tip: '设置 `button` 原生的 `type` 值',
          },
          propType: {
            type: 'oneOf',
            value: ['submit', 'reset', 'button'],
          },
          setter: [
            {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: 'Submit',
                    value: 'submit',
                  },
                  {
                    title: 'Reset',
                    value: 'reset',
                  },
                  {
                    title: 'Button',
                    value: 'button',
                  },
                ],
              },
            },
            'VariableSetter',
          ],
          defaultValue: 'button',
        },
        {
          name: 'href',
          title: {
            label: '跳转地址',
            tip: 'href | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致',
          },
          propType: 'string',
          setter: ['StringSetter', 'VariableSetter'],
        },
      ],
    },
    {
      title: '外观',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'variant',
          title: { label: '类型', tip: 'variant | 设置按钮类型' },
          propType: {
            type: 'oneOf',
            value: ['base', 'outline', 'dashed', 'text'],
          },
          setter: [
            {
              componentName: 'SelectSetter',
              props: {
                options: [
                  {
                    title: '基础',
                    value: 'base',
                  },
                  {
                    title: '线框',
                    value: 'outline',
                  },
                  {
                    title: '虚线',
                    value: 'dashed',
                  },
                  {
                    title: '文字',
                    value: 'text',
                  },
                ],
              },
            },
            'VariableSetter',
          ],
        },
        {
          name: 'size',
          title: { label: '尺寸', tip: 'size | 设置按钮大小' },
          propType: { type: 'oneOf', value: ['large', 'medium', 'small'] },
          setter: [
            {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: '大',
                    value: 'large',
                  },
                  {
                    title: '中',
                    value: 'medium',
                  },
                  {
                    title: '小',
                    value: 'small',
                  },
                ],
              },
            },
            'VariableSetter',
          ],
          defaultValue: 'medium',
        },
        {
          name: 'shape',
          title: {
            label: '形状',
            tip: 'shape | 设置按钮形状，可选值为 `circle`、 `round` 或者不设',
          },
          propType: { type: 'oneOf', value: ['rectangle', 'square', 'round', 'circle'] },
          defaultValue: 'rectangle',
          setter: [
            {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: '长方形',
                    value: 'rectangle',
                  },
                  {
                    title: '正方形',
                    value: 'square',
                  },
                  {
                    title: '圆角长方形',
                    value: 'round',
                  },
                  {
                    title: '圆形',
                    value: 'circle',
                  },
                ],
              },
            },
            'VariableSetter',
          ],
        },
        {
          name: 'block',
          title: {
            label: '自适应',
            tip: 'block | 将按钮宽度调整为其父宽度的选项',
          },
          propType: 'bool',
          setter: 'BoolSetter',
          defaultValue: false,
        },
        {
          name: 'theme',
          title: { label: '组件风格', tip: 'theme | 组件风格' },
          propType: { type: 'oneOf', value: ['rectangle', 'square', 'round', 'circle'] },
          setter: [
            {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: '默认色',
                    value: 'default',
                  },
                  {
                    title: '品牌色',
                    value: 'primary',
                  },
                  {
                    title: '危险色',
                    value: 'danger',
                  },
                  {
                    title: '警告色',
                    value: 'warning',
                  },
                  {
                    title: '成功色',
                    value: 'success',
                  },
                ],
              },
            },
            'VariableSetter',
          ],
          defaultValue: false,
        },
        {
          name: 'ghost',
          title: { label: '幽灵属性', tip: 'ghost | 幽灵属性，使按钮背景透明' },
          propType: 'bool',
          setter: 'BoolSetter',
          defaultValue: false,
        },
      ],
    },
    {
      title: '状态',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'loading',
          title: { label: '载入状态', tip: 'loading | 设置按钮载入状态' },
          propType: 'bool',
          setter: ['BoolSetter', 'VariableSetter'],
        },
        {
          name: 'disabled',
          title: { label: '是否禁用', tip: 'disabled | 是否为禁用状态' },
          propType: 'bool',
          setter: ['BoolSetter', 'VariableSetter'],
          defaultValue: false,
        },
      ],
    },
    {
      name: 'onClick',
      title: { label: '点击回调', tip: '点击按钮时的回调' },
      propType: 'func',
    },
  ],
  configure: {
    supports: {
      events: [
        {
          name: 'onClick',
          template:
            "onClick(event,${extParams}){\n// 点击按钮时的回调\nconsole.log('onClick', event);}",
        },
      ],
      style: true,
    },
  },
  snippets,
};
