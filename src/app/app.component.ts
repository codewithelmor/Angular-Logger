import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoggerService } from './shared/services/logger.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit {

  title = 'angular-logger';

  constructor(
    private logger: LoggerService
  ) {    
  }
  
  ngOnInit(): void {
    this.logger.log('On Init was called!');
  }

  ngAfterViewInit(): void {
    this.logger.log('After Vuew Init was called!');
  }

}
