import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'step',
  templateUrl: './src/step.component.html',
})

export class StepComponent {
  @Input('group') stepsGroup: FormGroup;

  constructor(private fb: FormBuilder) {
  }
}
