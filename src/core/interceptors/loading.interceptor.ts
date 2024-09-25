import { HttpContextToken, HttpHandler, HttpRequest, HttpInterceptorFn, HttpHandlerFn } from '@angular/common/http';
import { LoadingService } from '../services/loading.service';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';

// Create a context token for the skip loading flag
export const SkipLoading = new HttpContextToken<boolean>(() => false);

// Functional interceptor implementation
export const httpLoadingInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const loadingService = inject(LoadingService);

  // Check for the skip loading flag in the request context
  if (req.context.get(SkipLoading)) {
    // Pass the request directly to the next handler
    return next(req);
  }

  // Turn on the loading spinner
  loadingService.show();

  return next(req).pipe(
    finalize(() => {
      // Turn off the loading spinner
      loadingService.hide();
    })
  );
};