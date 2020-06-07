import { Component } from '@angular/core';
import { TalkService } from './talk.service';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TalkService]
})
export class AppComponent {
  constructor(private auth: AuthService, private router: Router) { }

  
  logout() {
    this.auth.logout();
    this.router.navigate(['login']);
  }
}