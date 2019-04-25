import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  currentUser:string;

  constructor(private router: Router, private authService: AuthenticationService, private storage: Storage) { }

  // Create the logged user from the currentUser
  ngOnInit() {
    this.storage.get("currentUser")
    .then((val) => {
      if (val !== null) {
        this.currentUser = val;
      } else {
        this.router.navigateByUrl('/public/login');
      };
    });
  }

  logout() {
    this.storage.set("currentUser", null);
    this.authService.logout();
  }
}