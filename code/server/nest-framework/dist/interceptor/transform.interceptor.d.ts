import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import Result from '../interface/result.ineterface';
export declare class TransformInterceptor<T> implements NestInterceptor<T, Result<T>> {
    intercept(context: ExecutionContext, next: CallHandler): Observable<Result<T>>;
}
