import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-registration',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './employee-registration.component.html',
  styleUrl: './employee-registration.component.scss'
})
export class EmployeeRegistrationComponent {

  private fb = inject(FormBuilder);

  submitted = false;

  employeeForm = this.fb.group(
    {
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],
      role: [
        'Developer',
        Validators.required
      ],
      experience: [
        0,
        [
          Validators.required,
          Validators.min(0),
          Validators.max(30)
        ]
      ],

      terms: [
        false,
        [
          Validators.requiredTrue
        ]
      ]
    }
  );


  submit(): void {
    this.submitted = true;

    if(this.employeeForm.invalid){
      this.employeeForm.markAllAsTouched();

      return;
    }

    console.log(
      this.employeeForm.value
    );
  }

  reset(): void {
    this.employeeForm.reset({
      role: 'Developer',
      experience: 0,
      terms: false
    });
    this.submitted = false;
  }

}
