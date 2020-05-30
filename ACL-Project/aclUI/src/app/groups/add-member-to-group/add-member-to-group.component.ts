import { Component, OnInit,NgZone } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { BugService } from '../../../shared/shared/bug.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-add-member-to-group',
  templateUrl: './add-member-to-group.component.html',
  styleUrls: ['./add-member-to-group.component.css']
})
export class AddMemberToGroupComponent implements OnInit {
  user = [];
  isLoadingResults = true;

  constructor(
	public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public bugService: BugService
	) { }

  ngOnInit(): void {
	this.bugService.GetGroupMembrss().subscribe((res: any[])=>{
      console.log("Api result",res);
      this.user = res['data'];
   })

  }

  
}



