//100代表成功，101代表失败
const status = {
    success: 100,
    error: 101,
};
class Result {
    constructor(data) {
        this.status =
            data.affectedRows === 1 || data.length > 0
                ? status.success
                : status.error;
        this.message = data;
    }
}
export default Result;
