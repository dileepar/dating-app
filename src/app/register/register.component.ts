import { AuthService } from './../_services/auth.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};
  @Input() inputFromHome: any;
  @Output() cancelRegister = new EventEmitter();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model)
      .subscribe(
        () => console.log('registration successful'),
        (error) => console.log(error)
      );

    console.log(this.model);
  }

  cancel() {
    this.cancelRegister.emit();
    console.log('cancelled');
  }

}
