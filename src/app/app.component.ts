import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterLink, RouterOutlet } from '@angular/router';
import { SpinnerComponent } from '../library/spinner/spinner.component';
import { filter, map, Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { LoadingService } from '../core/services/loading.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, SpinnerComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular18Spinner';

  constructor(private router: Router, private loadingService: LoadingService){
  }

  ngOnInit() {
    this.loadingSpinner();
  }


  loadingSpinner() {
    try {
      this.loadingService.show();
      // load courses from backend
    } catch (error) {
      // handle error message
    } finally {
      this.loadingService.hide();
    }
  }
}