import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  users: any = [
    { id: 1,
      name: 'Hammad',
      email: 'Hammad@email.com',
      contact: '+92335698563',
      location: 'Karachi',
      type: 'Un Examined',
    },
    { id: 2,
      name: 'Ahmed',
      email: 'Ahmed@email.com',
      contact: '+92335698563',
      location: 'Karachi',
      type: 'Un Examined',
    },
    { id: 3,
      name: 'Awais',
      email: 'Awais@email.com',
      contact: '+92335698563',
      location: 'Karachi',
      type: 'Un Examined',
    },
    { id: 4,
      name: 'Shayan',
      email: 'Shayan@email.com',
      contact: '+92335698563',
      location: 'Karachi',
      type: 'Un Examined',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
