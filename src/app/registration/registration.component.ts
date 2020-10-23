import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  calendarStyles: {};
  profileForm;
  
  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, 
                                      Validators.email])],
      password: ['', Validators.compose([Validators.required, 
                                         Validators.minLength(8), 
                                         Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')])],
      birthDate: ['', Validators.required],
      gender: ['', Validators.required],
      contacts: this.fb.group({
          city: ['', Validators.required],
          state: ['', Validators.required],
          zip: ['', Validators.required],
          address: ['', Validators.required],
          phone: ['', Validators.required]
      }),
      agreement: ''
    })
  }

  ngOnInit(): void {
    this.setCalendarStyles();
  }

  setCalendarStyles() {
    this.calendarStyles = {
      'width': '100%'
    };
  }

  setGenderValue(str: string) {
    this.profileForm.patchValue({gender: str})
  }

  onSubmit() {
    console.log(this.profileForm.value);
  }

}
