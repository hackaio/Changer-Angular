import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UiService} from '../../services/ui.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  title = 'change';
  hide = true;
  loadingState = false;

  constructor(
    private uiService: UiService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }
  register(registerForm: NgForm): void {
    if (registerForm.invalid) {
      this.uiService.showSnackbar('Check your form for errors and refill');
      // console.log(registerForm.getError);
      return;
    }
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(registerForm.value.email)) {
      this.uiService.showSnackbar('Enter the valid email, please to register');
      return;
    }
    if (registerForm.value.password !== registerForm.value.confirmPassword) {
      this.uiService.showSnackbar('Passwords are not the same, use the visibility icon for help');
      return;
    }
    if ((registerForm.value.password || registerForm.value.confirmPassword).length < 6) {
      this.uiService.showSnackbar('Passwords should be 6+ characters');
      return;
    }
    this.authService.register(registerForm);
  }
}
