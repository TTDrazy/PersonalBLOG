import { format } from 'silly-datetime';
const BaseUtils = {
  /**
   * 将指定时间转化成时间戳
   *
   * 通过 silly-datetime 中间件的 format 方法实现
   * @param {datetime} data - 需要转换成为 11 位时间戳格式的 datetime 格式时间
   * @return {number} 转换好的 11 位时间戳格式时间
   * @memberof ClassifyVO
   */
  transformDate: (date: any) => {
    const newDate = new Date(format(date, 'YYYY-MM-DD HH:mm:ss'));
    return newDate.getTime();
  },
};
export default BaseUtils;
