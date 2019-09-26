import { Component, OnInit, Input, Output } from '@angular/core';
import { MonitoringVitalService } from './monitor.vitals.service';
import { MonitoringVitals } from './monitoring.vitals';
import { PulseRate } from './pulserate';
import { Spo2 } from './spo2';
import { Temperature } from './temperature';
import { timer } from 'rxjs';
import { EventEmitter } from '@angular/core';

let firstGetVitalsCall = false;
const timeLimit = timer(0, 6000);

@Component({
    selector: 'app-monitor-vital',
    templateUrl: './monitor.vital.component.html',
    styleUrls: ['./monitor.vital.component.css']
})

export class MonitoringVitalComponent implements OnInit {
    public pulseRate: PulseRate;
    public spo2: Spo2;
    public temperature: Temperature;
    public vital: MonitoringVitals;

    public pulseAlertGenerated = false;
    public spo2AlertGenerated = false;
    public temperatureAlertGenerated = false;
    public alertDismissed = false;
    public displayAlert = false;

    @Output() voted = new EventEmitter<boolean>();
    didVote = false;

    @Input()
    bedId: number;


    public constructor(private vitalService: MonitoringVitalService) {

    }

    ngOnInit() {

        timeLimit.
            subscribe(

                () => {

                    this.getVitals(this.bedId);
                    this.alertDismissed = false;
                }

            );

        if (!firstGetVitalsCall) {
            this.getVitals(this.bedId);
            firstGetVitalsCall = true;
        }
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
        if (this.vital.pulseRate.result !== 'Normal' || this.pulseAlertGenerated) {
            if (!this.alertDismissed) {
                this.pulseAlertGenerated = true;
            }

            return true;
        } else {
            return false;
        }
    }

    checkSpo2(): boolean {
        if (this.vital.spo2.result !== 'Normal' || this.spo2AlertGenerated) {
            if (!this.alertDismissed) {
                this.spo2AlertGenerated = true;
            }
            return true;
        } else {
            return false;
        }
    }

    checkTemperature(): boolean {

        if (this.vital.temperature.result !== 'Normal' || this.temperatureAlertGenerated) {
            if (!this.alertDismissed) {
                this.temperatureAlertGenerated = true;
            }

            return true;

        } else {
            return false;
        }
    }

    dismissAlert(): void {

        this.temperatureAlertGenerated = false;
        this.pulseAlertGenerated = false;
        this.spo2AlertGenerated = false;
        this.alertDismissed = true;

    }



    public checkVitals(): boolean {
        const checkPulse = this.checkPulseRate();
        const checkSpo2 = this.checkSpo2();
        const checkTemperature = this.checkTemperature();

        if (( checkPulse || checkSpo2 || checkTemperature) && !this.alertDismissed ) {

            return true;
        } else {
            return false;
        }
    }

    displayAlertFun(): void {
        this.displayAlert = true;

    }


}
