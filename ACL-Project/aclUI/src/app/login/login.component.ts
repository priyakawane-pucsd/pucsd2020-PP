import { Component, OnInit } from '@angular/core';

import { BugService } from '../../shared/shared/bug.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginArr: any = [];

  constructor(
    public fb: FormBuilder,
    // private ngZone: NgZone,
    private router: Router,
    public bugService: BugService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      id: [''],
      password: [''],
    })
  }

  submitForm() {

    console.log(this.loginForm.value)
    // var loginVar = {
    //   id: this.loginForm.value.id,
    //   password: this.loginForm.value.password
    // }
	
	this.loginForm.value.id = parseInt(this.loginForm.value.id,10);
    this.bugService.CreateBug(this.loginForm.value).subscribe(
      res => {
        //console.log('login successfully!')
		console.log('result',res);
		if(res.data)
		{
			Swal.fire('Success','Login Successful','success')
	        this.router.navigate(['/acl']);
		}
		else
		{
			Swal.fire('Oops','Invalid Id or Password','error')
		}


      },
      error => {
        console.error("Error", error)

      }
    );
  }


}
