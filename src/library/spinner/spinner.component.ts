import { Component, ContentChild, inject, input, Input, TemplateRef } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoadingService } from '../../core/services/loading.service';
import { NavigationEnd, NavigationStart, RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss'
})
export class SpinnerComponent {
  loading = inject(LoadingService).loading;

  constructor(
  private loadingService: LoadingService, 
  private router: Router) {
  }

  ngOnInit() {
    this.listenToNativagion();
  }
  
  listenToNativagion(){
    this.router.events
      .pipe(
        tap((event) => {
          if (event instanceof NavigationStart) {
            this.loadingService.show();
          } else if (event instanceof NavigationEnd) {
            this.loadingService.hide();
          }
        })
      )
      .subscribe(
        // res => console.log(res)
      );

  }
}