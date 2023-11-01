import classnames from 'classnames';
import React from 'react';
import { Table, Loading, ConfigProvider } from '@alifd/next'
import WebTable, { IWebTableProps } from './table/webTable';
import { fetchKey, tableProps } from "./utils/tableProps";
import buildNextTableMethod from "./utils/buildNextTableMethod";
import delegateFunctions from "./utils/delegateFunctions";
import getColumnsFromChildren from './utils/getColumnsFromChildern'
import zhCN from './locale/zh-cn'
import { LoadingProps } from '@alifd/next/types/loading';
import { IEditableMethods } from './mixin/editableMethods';
import { ICommonMethods } from './mixin/commonMethods';
import './index.scss';

const { GroupHeader, GroupFooter, Column, ColumnGroup } = Table

export interface ITableProps extends IWebTableProps {}

interface NextTable extends React.Component<ITableProps>, Omit<IEditableMethods, 'init'>, Pick<ICommonMethods, 'getDataSource'> {}
class NextTable extends React.Component<ITableProps> {
  static Column = Column
  static ColumnGroup = ColumnGroup
  static GroupHeader = GroupHeader
  static GroupFooter = GroupFooter

  static defaultProps = {
    columns: [],
    clsPrefix: 'deep-',
    locale: zhCN,
    tablePrefix: 'table-',
    primaryKey: 'id',
    maxWebShownActionCount: 3,
    expandedIndexSimulate: false,
    loadingComponent: (props: LoadingProps) => {
      return <Loading
        indicator={<img src="https://g.alicdn.com/uxcore/pic/loading.svg" width="45" alt="" />} {...props} />;
    },
  };
  tableRef: React.RefObject<WebTable>;

  constructor(props: ITableProps) {
    super(props);

    this.tableRef = React.createRef();
    buildNextTableMethod(this);
  }

  renderTable() {
    const { clsPrefix, tablePrefix } = this.props;
    const myProps = fetchKey<IWebTableProps>(this.props, tableProps);
    const { children } = myProps;
    if (children) {
      myProps.columns = getColumnsFromChildren(children)
    }
    myProps.nextTablePrefix = `${clsPrefix}${tablePrefix}`;
    myProps.actionColumn = delegateFunctions(myProps.actionColumn, 'callback', this, 2);
    myProps.actionBar = delegateFunctions(myProps.actionBar, 'callback', this);
    myProps.linkBar = delegateFunctions(myProps.linkBar, 'callback', this);

    return <WebTable {...myProps} ref={this.tableRef} />;
  }

  render() {
    const { clsPrefix, tablePrefix, className } = this.props;
    const nextTablePrefix = `${clsPrefix}${tablePrefix}`;

    return (
      <div className={classnames(`${nextTablePrefix}full-wrap`, className,)}>
        {this.renderTable()}
      </div>
    );
  }
}

export {
  NextTable,
};

export default ConfigProvider.config(NextTable);