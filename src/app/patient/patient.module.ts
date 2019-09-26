import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PatientComponent } from './patient.component';
import { PatientService } from './patient.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [PatientComponent],
    imports: [FormsModule, HttpClientModule, BrowserModule, CommonModule],
    exports: [PatientComponent],
    providers: [PatientService]
})
export class PatientModule {


}
