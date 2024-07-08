import { Component, Input } from '@angular/core';
import { MedicationService } from '../medication.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-medication-form',
  templateUrl: './medication-form.component.html',
  styleUrls: ['./medication-form.component.css']
})
export class MedicationFormComponent {
  @Input() medication: any = { id: null, name: '', description: '', dosage: '', imageUrl: '' };

  constructor(private medicationService: MedicationService) {}

  onSubmit(form: NgForm): void {
    if (this.medication.id) {
      this.medicationService.updateMedication(this.medication).subscribe(() => {
        form.resetForm();
        this.resetMedication();
      });
    } else {
      this.medicationService.addMedication(this.medication).subscribe(() => {
        form.resetForm();
        this.resetMedication();
      });
    }
  }

  resetMedication(): void {
    this.medication = { id: null, name: '', description: '', dosage: '', imageUrl: '' };
  }
}
