const HandlerUtils = {
  /**
   * 将 13 位时间戳转化为格式化时间
   *
   * @param {timestamp} - 需要转换成为格式化时间的 13 位时间戳
   * @return {number} 转换好的格式化时间
   * @memberof HandlerUtils
   */
  transformTimestamp: (timestamp) => {
    let date = new Date(timestamp)
    const Y = date.getFullYear() + '-'
    const M =
      (date.getMonth() + 1 < 10
        ? '0' + (date.getMonth() + 1)
        : date.getMonth() + 1) + '-'
    const D =
      (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' '
    const h =
      (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
    const m =
      (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) +
      ':'
    const s =
      date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
    return Y + M + D + h + m + s
  },
  /**
   * 将递归树扁平化
   * @param {data} - 递归树
   * @return {flattenData} 转换好的扁平化递归树
   * @memberof HandlerUtils
   */
  flattenTreeDataClosure(data) {
    const treeData = JSON.parse(JSON.stringify(data))
    const flattenData = []
    function flattenTree(data, lastId) {
      data.forEach((ele) => {
        const { id, name, children } = ele
        flattenData.push({ id, name, lastId })
        if (children) {
          flattenTree(children, id)
        }
      })
    }
    flattenTree(treeData, null)
    return flattenData
  },
  /**
   * 根据节点找到他的所有父节点
   * @param {id} - 需要找到父节点的子节点
   * @param {flattenTree} - 转换好的扁平化递归树
   * @return {parentArr} - 子节点的所有父节点
   * @memberof HandlerUtils
   */
  findParent(id, flattenTree) {
    const parentArr = [] // 存储所有的父级元素
    function find(id, flattenTree) {
      flattenTree.forEach((ele) => {
        if (ele.id === id) {
          parentArr.unshift(ele.id)
          find(ele.lastId, flattenTree)
        }
      })
    }
    find(id, flattenTree)
    return parentArr
  },
}
export default HandlerUtils
