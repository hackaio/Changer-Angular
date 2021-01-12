import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { UiService } from './ui.service';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import {NgForm} from '@angular/forms';
@Injectable(
    { providedIn: 'root' }
)

export class AuthService {
    uri = '';

    constructor(
        private http: HttpClient,
        private uiService: UiService,
        private router: Router,
        private route: ActivatedRoute) {
    }
    login(email: string, password: string): void {
        localStorage.removeItem('token');
        this.uiService.loadingStateChanged.next(true);
        this.http.post('http://172.20.10.3:5000/user/login', {

        }).subscribe(
            (result: any) => {
                this.uiService.showSnackbar(result.message);
              this.uiService.loadingStateChanged.next(false);
                localStorage.setItem('token', result.token);
                console.log(result);
                if (result.role === '') {
                    return this.router.navigate(['../../change-provider'], { relativeTo: this.route });
                }
                if (result.role === '') {
                    return this.router.navigate(['../../user'], { relativeTo: this.route });
                }
            },
            error => {
                this.uiService.loadingStateChanged.next(false);
                this.uiService.showSnackbar(error.message);
                console.log(error);
            }
        );
    }
    register(registerForm: NgForm): void{
      this.uiService.loadingStateChanged.next(true);
      console.log(registerForm.value);
      this.http.post('http://172.20.10.3:5000/user/register', {
        firstname: registerForm.value.firstname,
        sirname: registerForm.value.sirname,
        business: registerForm.value.business,
        username: registerForm.value.username,
        phone: registerForm.value.phonenumber,
        email: registerForm.value.email,
        location: registerForm.value.location,
        role: registerForm.value.role,
        password: registerForm.value.password,
      }).subscribe(
        (result: any) => {
          if (!result) {
            return this.uiService.showSnackbar('COULD NOT REGISTER');
          }
          console.log(result);
          this.uiService.showSnackbar(result.message);
          // if (result.token !== null){
          this.router.navigate(['../account/login'], {relativeTo: this.route});
          // }
      },
        error => {
          this.uiService.showSnackbar(error.error.message);
          this.uiService.loadingStateChanged.next(false);
          console.log(error);
        }
      );
    }

}
