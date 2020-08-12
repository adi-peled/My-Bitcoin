import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/userService/user.service'
import { User } from 'src/app/services/userService/user.model';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {



  constructor(private userService: UserService, private router: Router) { }
  user = {
    name: '',
    password: '',
    coins: ''
  }

  get loggedinUser() {
    return this.userService.getLoggedinUser()
  }

  signup(ev) {
    ev.preventDefault()
    this.userService.signup(this.user)
  }

  login(ev) {
    ev.preventDefault()
    this.userService.login(this.user)
    console.log(this.loggedinUser);

    if (this.loggedinUser) {
      this.router.navigate([``]);
    }
    else {
      console.log('name or password are wrong');
    }

  }
  ngOnInit(): void {
  }

}
