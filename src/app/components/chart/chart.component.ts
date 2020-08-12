import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  constructor() { }

  chart = {
    title: 'fff',
    type: 'fff',
    columnNames: ['fgf', 'grdgd', 'fg'],
    data: 'gd',
    options: ['grd', 'gdr', 'rdg']
  }

  ngOnInit(): void {
    
  }

}
