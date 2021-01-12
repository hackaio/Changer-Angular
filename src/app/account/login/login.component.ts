import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  loadingState = false;
  title = 'change';
  constructor(private authService: AuthService, private uiService: UiService ) { }

  ngOnInit(): void {
    this.uiService.loadingStateChanged.subscribe(
      loadState => {
        this.loadingState = loadState;
      }
    );
  }
  login(logForm: NgForm): void{
    console.log(logForm.value);
    if (logForm.invalid){
      return this.uiService.showSnackbar('LOG FORM CONTAIN ERRORS, REFILL');
    }
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(logForm.value.email)) {
      this.uiService.showSnackbar('Enter the valid email, please to register');
      return;
    }
    if (logForm.value.password.length < 6) {
      this.uiService.showSnackbar('Passwords should be 6+ characters');
      return;
    }
    this.authService.login(logForm.value.email, logForm.value.password);
  }
}
