import { Component, OnInit } from '@angular/core';
import { PatientService } from './patient.service';
import { Patient } from './patient';

@Component({
    selector: 'app-patient',
    templateUrl: './patient.component.html',
    styleUrls: ['./patient.component.css']
})

export class PatientComponent implements OnInit {

    patientList: Patient[];

    public constructor(private patientService: PatientService) {

    }
    ngOnInit() {
        this.getAllPatients();
    }

    public getAllPatients(): void {
        this.patientService.getAllPatients().subscribe(data => { this.patientList = data; });
    }
}
