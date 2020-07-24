import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import Result from '../interface/result.ineterface';

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Result<T>> {
    intercept(context: ExecutionContext, next: CallHandler): Observable<Result<T>> {
        return next.handle().pipe(map((data) => {
            let message = "";
            if (typeof (data) == "string") {
                message = data;
                data = "";
            }
            return {
                data,
                statusCode: 0,
                message
            }
        }));
    }
}