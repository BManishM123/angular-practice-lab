import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { HighlightPipe } from '../../shared/pipes/highlight.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [UpperCasePipe,DatePipe,DecimalPipe,JsonPipe,LowerCasePipe,PercentPipe,TitleCasePipe,HighlightPipe,CurrencyPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {
  employee = {
    name: 'manish mrityunjay',
    role: 'senior frontend develepor',
    salary: 523890,
    joiningDate: new Date(2022, 5, 10),
    performance: 0.92,
    rating: 4
  }

}
