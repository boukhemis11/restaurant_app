import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ScheduleService } from '../services/schedule.service';
import { map, tap, switchMap, debounceTime } from 'rxjs/operators';
import { EveningEvent } from '../models/evening-event.interface';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  searchTerm = new FormControl();
  serchTerms$: Observable<string> = this.searchTerm.valueChanges;
  result: EveningEvent[] = [];

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit() {
    this.serchTerms$.
    pipe(debounceTime(1000),
      switchMap(res => this.scheduleService.search(res)),
      tap(res => console.log(res))
    )
    .subscribe(data => this.result = data );
  }

}
