import {AfterViewInit,Component,DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.scss'
})
export class LifecycleComponent implements OnInit,AfterViewInit,DoCheck,OnChanges,OnDestroy,OnInit {

  counter = 0;
 lifecycleLogs: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
      this.addLogs('ngOnChanges');
    }
   

     ngOnInit(): void {
      this.addLogs('ngOnInit');
    }

    ngAfterViewInit(): void {
      this.addLogs('ngAfterViewInit');
    }

    ngDoCheck(): void {
      this.addLogs('ngDoCheck');
    }

   
    ngOnDestroy(): void {
      if(this.counter === 0){
      this.addLogs('ngOnDestroy');
      }
      
    }

    increament():void {
      this.counter++;
    }

    addLogs(message : string):void {
      this.lifecycleLogs.unshift(
        `${new Date().toLocaleTimeString()} - ${message}`
      );
    }

    resetCounter():void {
      this.counter = 0;
    }

}
