import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, AbstractControl, FormBuilder, Validators, FormControl } from '@angular/forms';

function userNameValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^a/)) {
    return { invalidUser: true };
  }
}

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  myForm: FormGroup;
  userName: AbstractControl;
  password: AbstractControl;
  // authService: AuthService;
  a: AuthService;


  constructor(private fb: FormBuilder, private authService: AuthService) {
    // 创建表单
    this.myForm = this.fb.group(
      {
        'userName': ['aaa', Validators.compose([Validators.required, userNameValidator])],
        'password': ['', Validators.compose([Validators.required, Validators.minLength(5)])]
      });
    this.userName = this.myForm.controls['userName'];
    this.password = this.myForm.controls['password'];
    this.a = authService;
  }
  ngOnInit(): void {

  }


  onSubmit(value: any) {
    console.log(value);
  }
  login() {
    this.authService.login();
  }

}


