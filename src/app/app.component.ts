import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordStrengthComponent } from './password-strength/password-strength.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    PasswordStrengthComponent,
    FormsModule,
    ReactiveFormsModule,
  ],

})


export class AppComponent implements OnInit {
  title = 'password-strength';
  passwordForm!: FormGroup;

  strongPassword = false;
  // working: boolean;

  onPasswordStrengthChanged(event: boolean) {
    this.strongPassword = event;
  }
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.passwordForm = this.fb.group({
      password: ['', [Validators.required]],
    });
  }

}
