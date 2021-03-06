import { Component, OnInit, Input, Output } from '@angular/core';
import { MonitoringVitalService } from './monitor.vitals.service';
import { MonitoringVitals } from './monitoring.vitals';
import { PulseRate } from './pulserate';
import { Spo2 } from './spo2';
import { Temperature } from './temperature';
import { Observable, timer, interval } from 'rxjs';

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


    test:boolean=false;

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
        console.log("Vital : ", this.vital);
    }

    checkPulseRate(): boolean {
        console.log("Bed : ", this.bedId);
        if (this.vital.pulseRate.result != 'Normal' || this.pulseAlertGenerated) {
            if(this.alertGenerated)
            {
                this.pulseAlertGenerated=true;
            }
            console.log("In pulse : ", this.pulseAlertGenerated);

            return true;
        }
        else {
            console.log("returning false for checkPulseRate");
            return false;
        }
    }

    checkSpo2(): boolean {
        console.log("Bed : ", this.bedId);

        if (this.vital.spo2.result != 'Normal' || this.spo2AlertGenerated) {
            if(this.alertGenerated)
            {
                this.spo2AlertGenerated=true;
            }
            console.log("In spo2 : ", this.spo2AlertGenerated);

            return true;
        }
        else {
            console.log("returning false for checkSpo2Rate");

            return false;
        }
    }

    checkTemperature(): boolean {
        console.log("Bed : ", this.bedId);

        if (this.vital.temperature.result != 'Normal' || this.temperatureAlertGenerated) {
            if(this.alertGenerated)
            {
                this.temperatureAlertGenerated=true;
            }
            console.log("In temp : ", this.temperatureAlertGenerated);

            return true;

        }
        else {
            console.log("returning false for checkPTempRate");

            return false;
        }
    }

    dismissAlert(): void {

        console.log("dismiss called");
        // console.log("before pulse : ", this.pulseAlertGenerated)
        this.temperatureAlertGenerated = false;
        this.pulseAlertGenerated = false;
        this.spo2AlertGenerated = false;
        // console.log("after pulse : ", this.pulseAlertGenerated);
        // console.log("after spo2 : ", this.spo2AlertGenerated);
        // console.log("after temp : ", this.temperatureAlertGenerated);
        // console.log("after alert : ", this.alertGenerated);
        // return this.alertGenerated;
        this.alertGenerated=false;
        console.log("TestingAlertGenerated : ",this.alertGenerated);

    }

    public getPulseAlert() {
        console.log("Returning Pulse: ", this.pulseAlertGenerated);
        return this.pulseAlertGenerated;
    }

    public getSpo2Alert() {
        console.log("Returning Spo2: ", this.pulseAlertGenerated);
        return this.spo2AlertGenerated;
    }

    public getTemperatureAlert() {
        console.log("Returning temperature: ", this.pulseAlertGenerated);
        return this.temperatureAlertGenerated;
    }
}