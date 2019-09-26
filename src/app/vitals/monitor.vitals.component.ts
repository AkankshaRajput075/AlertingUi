import { Component, OnInit, Input, Output } from '@angular/core';
import { MonitoringVitalService } from './monitor.vitals.service';
import { MonitoringVitals } from './monitoring.vitals';
import { PulseRate } from './pulserate';
import { Spo2 } from './spo2';
import { Temperature } from './temperature';
import { Observable, timer, interval } from 'rxjs';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { EventEmitter } from '@angular/core';

let firstGetVitalsCall=false;
const timeLimit = timer(0,3000);

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
    public alertDismissed: boolean = false;
    public displayAlert=false;

    @Output() voted = new EventEmitter<boolean>();
    didVote = false;

    @Input()
    bedId: number;


    public constructor(private vitalService: MonitoringVitalService,private _bottomSheet: MatBottomSheet) {

    }

    ngOnInit() {

        timeLimit.
            subscribe(

                () => {
                    console.log("=*****************************************************=");

                    this.getVitals(this.bedId);
                    this.alertDismissed=false;
                }

            )

        if(!firstGetVitalsCall)
        {
            this.getVitals(this.bedId);
            firstGetVitalsCall=true;
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
        console.log("Vital : ", this.vital);
    }

    checkPulseRate(): boolean {
        console.log("Bed : ", this.bedId);
        console.log("bedore Pulse Condition : ",this.vital.pulseRate.result, " ",this.pulseAlertGenerated);
        if (this.vital.pulseRate.result != 'Normal' || this.pulseAlertGenerated) {
            if(!this.alertDismissed)
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
        console.log("bedore Spo2 Condition : ",this.vital.spo2.result, " ",this.spo2AlertGenerated);
        if (this.vital.spo2.result != 'Normal' || this.spo2AlertGenerated) {
            if(!this.alertDismissed)
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
        console.log("bedore Temp Condition : ",this.vital.temperature.result, " ",this.temperatureAlertGenerated);
        if (this.vital.temperature.result != 'Normal' || this.temperatureAlertGenerated) {
            if(!this.alertDismissed)
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
        this.alertDismissed=true;

        console.log("after pulse : ", this.pulseAlertGenerated);
        console.log("after spo2 : ", this.spo2AlertGenerated);
        console.log("after temp : ", this.temperatureAlertGenerated);
        console.log("after alert : ", this.alertDismissed);
        // return this.alertGenerated;
        console.log("TestingAlertGenerated : ",this.alertDismissed);
        console.log("================================================================================");

    }

    public getPulseAlert():boolean {

        this.voted.emit(this.pulseAlertGenerated);

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

    public checkVitals():boolean
    {
        let checkPulse=this.checkPulseRate();
        let checkSpo2=this.checkSpo2();
        let checkTemperature=this.checkTemperature();

        if((checkPulse || checkSpo2 ||checkTemperature) && !this.alertDismissed)
        {
            
            return true;
        }
        else{
            return false;
        }
    }

    displayAlertFun():void{
        this.displayAlert=true;
        console.log("Alert : ",this.displayAlert);

    }


}
