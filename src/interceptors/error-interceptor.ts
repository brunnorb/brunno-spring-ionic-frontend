import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from "@Angular/common/http";
import { Observable } from "rxjs/Rx";


@Injectable()
export class ErrorInterceptors implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
        return next.handle(req).catch( (error,caught) => {
              let errorObj = error;
              if (errorObj.error){
                  errorObj = errorObj.error;
              }
              if (!errorObj.status){
                  errorObj = JSON.parse(errorObj)
              }

              console.log("Erro detectado pelo interceptor...");
              console.log(errorObj);

            return Observable.throw(error);
        }) as any;
    }
}
export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptors,
    multi: true,
}