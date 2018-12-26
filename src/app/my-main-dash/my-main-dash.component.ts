import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-my-main-dash',
  templateUrl: './my-main-dash.component.html',
  styleUrls: ['./my-main-dash.component.css']
})
export class MyMainDashComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'A la carte', cols: 1, rows: 1 },
          { title: 'Burgers', cols: 1, rows: 1 },
          { title: 'Galettes/Crepes', cols: 1, rows: 1 },
          { title: 'Pizzas', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'A la carte', cols: 2, rows: 1 },
        { title: 'Burgers', cols: 1, rows: 1 },
        { title: 'Galettes/Crepes', cols: 1, rows: 2 },
        { title: 'Pizzas', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
