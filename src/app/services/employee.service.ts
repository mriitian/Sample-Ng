import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Correct import
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root', // Ensure the service is provided in the root injector
})
export class EmployeeService {
  private baseUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {}

  getEmployees() {
    console.log('All Posts');
    return this.http.get<Employee[]>(this.baseUrl);
  }

  postEmployee(employee: Employee) {
    return this.http.post<Employee>(this.baseUrl, employee);
  }

  deleteEmployee(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
