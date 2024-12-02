import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  @Input() employee: Employee;
  @Output() onRemoveEmployee = new EventEmitter<number>();
  @Output() onEditEmployee = new EventEmitter<number>();

  constructor() {
    this.employee = {
      firstname: '',
      lastname: '',
      birthdate: '',
      gender: '',
      education: '',
      company: '',
      jobExperience: 0,
      salary: 0,
      profile: '',
    };
  }

  ngOnInit(): void {
    console.log(this.employee);
  }

  deleteEmployeeClicked() {
    console.log('Delete');
    this.onRemoveEmployee.emit(this.employee.id);
  }

  editEmployeeClicked() {
    this.onEditEmployee.emit(this.employee.id);
  }
}
