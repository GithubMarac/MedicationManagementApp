import { Component, OnInit } from '@angular/core';
import { MedicationService } from '../medication.service';

@Component({
  selector: 'app-medication-list',
  templateUrl: './medication-list.component.html',
  styleUrls: ['./medication-list.component.css']
})
export class MedicationListComponent implements OnInit {
  medications: any[] = [];
  selectedMedication: any = null;

  constructor(private medicationService: MedicationService) {}

  ngOnInit(): void {
    this.loadMedications();
  }

  loadMedications(): void {
    this.medicationService.getMedications().subscribe((data) => {
      this.medications = data;
    });
  }

  deleteMedication(id: number): void {
    this.medicationService.deleteMedication(id).subscribe(() => {
      this.loadMedications();
    });
  }

  editMedication(medication: any): void {
    this.selectedMedication = { ...medication };
  }
}
