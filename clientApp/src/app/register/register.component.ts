import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { User } from '../_models/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {}

  constructor(private accountService : AccountService, private toastr: ToastrService) {

  }

  ngOnInit(): void {

  }

  register() {
    // Check if any required fields are empty
    if (!this.model.username || !this.model.password || !this.model.email) {
      this.toastr.error('Please fill in all required fields.');
      return; // Do not proceed with registration if fields are not filled
    }
    this.accountService.register(this.model).subscribe({
      next: (response) => {
        console.log(response);
        this.cancel();
      },
      error: (errorMsg) => {
        this.toastr.error(errorMsg.error), console.log(errorMsg);
      },
    });
  }

  cancel() {
    console.log('cancelled');
    this.cancelRegister.emit(false);
  }
}
