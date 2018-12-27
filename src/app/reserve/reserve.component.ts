import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {

  resrvationForm: FormGroup;
  date = new Date();

  timeOption = ['12:00', '12:30', '13:00', '13:30', '14:00', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30' ];

  peopleOption = [1, 2, 3, 4, 5, 6, 7, 8];

  isScheduleOk = false;
  client = { firstName: '', lastName: '', email: '', phone: '' };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
  this.resrvationForm = this.fb.group({
    date: new Date(),
    time: '',
    people: 1
  });
}

saveResarvation() {
  if (this.resrvationForm.valid) {
    this.isScheduleOk = true;
    console.log(this.resrvationForm.value);
  }
}

finalizeReservation(formValue) {
  console.log(formValue);
}


}
