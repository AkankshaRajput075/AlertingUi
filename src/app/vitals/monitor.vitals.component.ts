import { Component, OnInit, Input, Output } from '@angular/core';
import { MonitoringVitalService } from './monitor.vitals.service';
import { MonitoringVitals } from './monitoring.vitals';
import { PulseRate } from './pulserate';
import { Spo2 } from './spo2';
import { Temperature } from './temperature';
import { Observable, timer, interval } from 'rxjs';
import {MatDialog} from '@angular/material';

const timeLimit = interval(5000);

@Component({
    selector: 'monitor-vital',
    templateUrl: './monitor.vital.component.html',
    styleUrls: ['./monitor.vital.component.css']
})


export class MonitoringVitalComponent implements OnInit {
    public pulseRate: PulseRate;
    public spo2: Spo2;
    public temperature: Temperature;
    public vital: MonitoringVitals;

    public pulseAlertGenerated: boolean = false;
    public spo2AlertGenerated: boolean = false;
    public temperatureAlertGenerated: boolean = false;
    public alertGenerated: boolean = true;



    @Input()
    bedId: number;


    public constructor(private vitalService: MonitoringVitalService) {

    }

    ngOnInit() {
        timeLimit.
            subscribe(

                () => {
                    this.getVitals(this.bedId);
                    this.alertGenerated=true;
                }

            )

        this.getVitals(this.bedId);
    }

    getVitals(bedId): void {
        this.vitalService.getVitals(bedId).subscribe(
            (data) => {
                this.vital = data;
                this.vital.pulseRate = data.pulseRate;
                this.vital.spo2 = data.spo2;
                this.vital.temperature = data.temperature;
            });

    }

    checkPulseRate(): boolean {
        if (this.vital.pulseRate.result != 'Normal' || this.pulseAlertGenerated) {
            if(this.alertGenerated)
            {
                this.pulseAlertGenerated=true;
            }
            return true;
        }
        else {
            return false;
        }
    }

    checkSpo2(): boolean {

        if (this.vital.spo2.result != 'Normal' || this.spo2AlertGenerated) {
            if(this.alertGenerated)
            {
                this.spo2AlertGenerated=true;
            }

            return true;
        }
        else {

            return false;
        }
    }

    checkTemperature(): boolean {

        if (this.vital.temperature.result != 'Normal' || this.temperatureAlertGenerated) {
            if(this.alertGenerated)
            {
                this.temperatureAlertGenerated=true;
            }

            return true;

        }
        else {

            return false;
        }
    }

    dismissAlert(): void {

        this.temperatureAlertGenerated = false;
        this.pulseAlertGenerated = false;
        this.spo2AlertGenerated = false;
        this.alertGenerated=false;

    }

    public getPulseAlert() {
        return this.pulseAlertGenerated;
    }

    public getSpo2Alert() {
        return this.spo2AlertGenerated;
    }

    public getTemperatureAlert() {
        return this.temperatureAlertGenerated;

    }

}