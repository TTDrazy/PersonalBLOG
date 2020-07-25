export default interface Result<T> {
    data: T;
    message: string;
    statusCode: number;
}
