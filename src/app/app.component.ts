import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterLink, RouterOutlet } from '@angular/router';
import { SpinnerComponent } from '../library/spinner/spinner.component';
import { delay, filter, map, Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { LoadingService } from '../core/services/loading.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, SpinnerComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular18Spinner';

  constructor(
    private http: HttpClient
  ){
  }

  ngOnInit() {
  }

  getPost(){
    this.http.get('https://jsonplaceholder.typicode.com/todos/1')
    .pipe(
      delay(3000)
    )
    .subscribe((res)=>{
      console.log(res);
      if(res){
      }
      
    })
  }

}