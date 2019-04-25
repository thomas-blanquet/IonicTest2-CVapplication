import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  name:string;
  password:string;

  constructor(private storage: Storage,
    private router: Router) { }

  ngOnInit() {
  }

  // Create the user in storage
  register() {
    this.storage.set(this.name, JSON.stringify({password: this.password, name: this.name, about: "", experiences: [], formation: [], contact: []}));
    this.router.navigateByUrl('/login');
  }
}
