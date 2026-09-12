import { HttpErrorResponse, HttpInterceptorFn } from "@angular/common/http";
import { catchError, finalize, throwError } from "rxjs";


export const apiInterceptor: HttpInterceptorFn = (req, next) => {

    const startTime = performance.now();

    const modifiedRequest = req.clone({
        setHeaders: {
            'X-Application': 'Angular-Interview-Lab',
            'Authorization': 'Bearer demo-token'
        }
    });

    console.log(
        `➡️ ${modifiedRequest.method} ${modifiedRequest.url}`
    );

    return next(modifiedRequest).pipe(
        catchError((error: HttpErrorResponse) => {
            console.log(
                'API Error:',
                error.status,
                error.message
            );

            return throwError(()=>error);
        }),

        finalize(() => {
            const duration = 
            performance.now() - startTime;

            console.log(
                  `⬅️ ${modifiedRequest.method} ${modifiedRequest.url} - ${duration.toFixed(2)} ms`  
            );
        })

    );
};