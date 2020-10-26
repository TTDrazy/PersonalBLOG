import React, { Component } from 'react'
import { Input, Cascader, Button } from 'antd'

export default class MySelect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchedName: '',
      searchedId: '',
    }
  }
  onChange = (value) => {
    this.setState(
      {
        // 更新选中的 classify 名称
        searchedName: value,
        // 将选中的 classifyId 放入
        searchedId: value[value.length - 1],
      },
      () => {
        this.props.changeSelect(this.state.searchedId)
      }
    )
    console.log(this.state.searchedName)
    // this.props.changeSelect && this.props.changeSelect(this.state.searchInfo)
  }

  render() {
    const { type, isClassify, placeholder, selectTree } = this.props
    const { searchedName } = this.state
    // console.log(searchInfo);
    //console.log({selectValue });
    return (
      <>
        <Input.Group compact>
          <div style={{ display: 'flex' }}>
            <Cascader
              defaultValue={this.props.defaultValue?this.props.defaultValue:[]}
              //自定义字段名
              fieldNames={{
                label: 'name',
                value: 'id',
                children: 'children',
              }}
              //可以选中任意一项
              changeOnSelect
              style={{ width: '100%' }}
              value={searchedName}
              options={selectTree}
              placeholder={
                placeholder
                  ? placeholder
                  : `按类别检索${isClassify ? '分类' : '文章'}`
              }
              expandTrigger="hover"
              onChange={this.onChange}
            />
            {type === 'select' ? (
              <></>
            ) : (
              <Button type="primary" onClick={() => this.selectArticle()}>
                搜索
              </Button>
            )}
          </div>
        </Input.Group>
      </>
    )
  }
}
