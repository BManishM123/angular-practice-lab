import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-skills-matrix',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './skills-matrix.component.html',
  styleUrl: './skills-matrix.component.scss'
})


export class SkillsMatrixComponent {

  private fb = inject(FormBuilder);
 

  skillForm = this.fb.group({
    skills: this.fb.array([
      this.createSkill()
    ])
  });

  get skills(): FormArray {
    return this.skillForm.controls.skills;
  }

  createSkill() {
    return this.fb.group({
      name: [
        '',
      Validators.required
      ],

      level: [
        'Intermediate',
        Validators.required
      ]
    });
  }

  addSkill(): void {
   this.skillForm.controls.skills.push(
    this.createSkill()
   );
  }

  removeSkills(index:number): void {
    this.skillForm.controls.skills.removeAt(index);
  }
  
  textSkill!:string;
  submit(): void {
    console.log(this.skillForm.value);
    console.log(typeof(this.skills.value));
    this.textSkill = JSON.stringify(this.skills.value);
    console.log(this.textSkill);
  }

}
