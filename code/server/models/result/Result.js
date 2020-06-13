//100代表成功，101代表失败
const status = {
    success: 100,
    error: 101,
};

class Result {
    /**
     * 最终返回的结果模型
     * @constructor
     * @param {array} data - 返回的需要展示的数据或数据库结果
     * @class Result
     */
    constructor(data) {
        this.status = this.getStatus(data);
        this.message = data.message ? data.message : "";
        this.data = data;
    }
    /**
     * 判断 Result.status 的状态码
     *
     * 如果需要展示的数据不为空 或 数据库结果返回的受影响行存在且不为 0，状态码即为成功；否则则为失败
     * @param {array} data - 返回的需要展示的数据或数据库结果
     * @return {number} Result.status 的状态码
     * @memberof ClassifyVO
     */
    getStatus = (data) => {
        let statusCode = status.error;
        if (!!data.length) {
            if (data.length !== 0) {
                statusCode = status.success;
            }
        } else if (!!data.affectedRows && data.affectedRows !== 0) {
            statusCode = status.success;
        }
        return statusCode;
    };
}
export default Result;
