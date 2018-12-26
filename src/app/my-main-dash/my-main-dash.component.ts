import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { QuichLunchService } from '../services/quich-lunch.service';
import { Food } from '../models/food.interface';

@Component({
  selector: 'app-my-main-dash',
  templateUrl: './my-main-dash.component.html',
  styleUrls: ['./my-main-dash.component.css']
})
export class MyMainDashComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Burgers', cols: 1, rows: 1, id: 'brg' },
          { title: 'Galettes/Crepes', cols: 1, rows: 1, id: 'glt' },
          { title: 'Pizzas', cols: 1, rows: 1, id: 'piz' },
          { title: 'Dessert', cols: 1, rows: 1, id: 'dsr' }
        ];
      }

      return [
        { title: 'Burgers', cols: 2, rows: 1, id: 'brg' },
        { title: 'Galettes/Crepes', cols: 1, rows: 1, id: 'glt' },
        { title: 'Pizzas', cols: 1, rows: 2, id: 'piz' },
        { title: 'Dessert', cols: 1, rows: 1, id: 'dsr' }
      ];
    })
  );

  burgers: Food[];
  pizzas: Food[];
  galettes: Food[];
  dessert: Food[];

  constructor(private breakpointObserver: BreakpointObserver, private qlService: QuichLunchService) {}

  ngOnInit() {
    this.burgers = this.qlService.getBurgers();
    this.galettes = this.qlService.getGalettes();
    this.pizzas = this.qlService.getPizzas();
    this.dessert = this.qlService.getDessert();
  }
}
