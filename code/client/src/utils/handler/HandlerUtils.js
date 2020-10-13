const HandlerUtils = {
  /**
   * 将 13 位时间戳转化为格式化时间
   *
   * @param {timestamp} - 需要转换成为格式化时间的 13 位时间戳
   * @return {number} 转换好的格式化时间
   * @memberof HandlerUtils
   */
  transformTimestamp:(timestamp) => {
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
}
export default HandlerUtils
