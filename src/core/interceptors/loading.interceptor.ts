import { HttpContextToken, HttpHandler, HttpRequest, HttpInterceptorFn, HttpHandlerFn } from '@angular/common/http';
import { LoadingService } from '../services/loading.service';
import { inject } from '@angular/core';
import { finalize, Subject, takeUntil, tap, timer } from 'rxjs';

export const httpLoadingInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const loadingService = inject(LoadingService);
  const stopLoading$ = new Subject<void>();

  loadingService.show(); // Show the loading spinner
  timer(0).pipe(
    tap(() => {
    }),
    takeUntil(stopLoading$) 
  ).subscribe();

  // Handle the HTTP request
  return next(req).pipe(
    finalize(() => {
      stopLoading$.next(); // Stop the timer when request finalizes
      loadingService.hide(); // Hide the loading spinner
    })
  );
};