import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
//   login(username, password) {
//     this.urlhandler.login(username, password).subscribe((response) => {
//       if (response.token) {
//         console.log(response);
//         this.localstorage.setToken(response.token);
//         const details = jwt_decode(response.token);
//         this.router.navigate(['/home']);
//       } else {
//   this.registeredUser = false;
//       }
//   });
// }
}
