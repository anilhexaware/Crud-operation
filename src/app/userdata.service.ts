// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class UserdataService {
//   constructor(private http: HttpClient) {}

//   private url = 'http://3.6.235.187:8080/ATMPortal/htd/details';

//   getusers(): Observable<any> {
//     let body = {
//       empId: 'All',
//       competency: 'All',
//       enrollmentDate: 'All',
//       dueDate: 'All',
//       learningPlan: 'All',
//       modules: 'All',
//       lmsStatus: [1227],
//       empName: 'All',
//     };

//     return this.http.post(this.url, body);
//   }
// }
