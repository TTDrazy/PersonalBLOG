//100代表成功，101代表失败
const status = {
    success: 100,
    error: 101,
};
class Result {
    constructor(data) {
        this.status = this.getStatus(data);
        this.info = data.message ? data.message : "";
        this.message = data;
    }
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
