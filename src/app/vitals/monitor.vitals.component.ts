import { Component, OnInit, Input, Output } from '@angular/core';
import { MonitoringVitalService } from './monitor.vitals.service';
import { MonitoringVitals } from './monitoring.vitals';
import { PulseRate } from './pulserate';
import { Spo2 } from './spo2';
import { Temperature } from './temperature';
import { Observable,timer } from 'rxjs';

const timeLimit:Observable<number> =timer(10000,10000);
  let pulseAlertGenerated:boolean=false;
 let spo2AlertGenerated:boolean=false; 
  let temperatureAlertGenerated:boolean=false;
 let  alertGenerated:boolean=false;

@Component({
  selector: 'monitor-vital',
  templateUrl:'./monitor.vital.component.html',
  styleUrls: ['./monitor.vital.component.css']
})


export class MonitoringVitalComponent implements OnInit{
    pulseRate:PulseRate;
    spo2:Spo2;
    temperature:Temperature;
    vital:MonitoringVitals;


    @Input()
    bedId:number;

   

    public constructor(private vitalService:MonitoringVitalService)
    {
        
    }

    ngOnInit()
    {
        timeLimit.
        subscribe(

            () =>
            {
            this.getVitals(this.bedId);
            }

        )

        this.getVitals(this.bedId);
    }

    getVitals(bedId):void{

        this.vitalService.getVitals(bedId).subscribe(data=>this.vital=data);
        console.log("Vital : ",this.vital);
    }

    checkPulseRate():boolean
    {
        if(this.vital.pulseRate.result != 'Normal' || pulseAlertGenerated)
        {
            pulseAlertGenerated=true;
            alertGenerated=true;
            return true;
        }
        else{
            return false;
        }
    }

    checkSpo2():boolean
    {
        if(this.vital.spo2.result != 'Normal' || spo2AlertGenerated)
        {
            spo2AlertGenerated=true;
            alertGenerated=true;
            return true;
        }
        else{
            return false;
        }
    }

    checkTemperature():boolean
    {
        if(this.vital.temperature.result != 'Normal' || temperatureAlertGenerated)
        {
            temperatureAlertGenerated=true;
            alertGenerated=true;
            return true;
        }
        else{
            return false;
        }
    }

    dismissAlert():boolean
    {
        console.log("dismiss called");
        console.log("before pulse : ",pulseAlertGenerated)
        temperatureAlertGenerated=false;
        pulseAlertGenerated=false;
        spo2AlertGenerated=false;
        alertGenerated=false;
        console.log("after pulse : ",pulseAlertGenerated);
        console.log("after pulse : ",spo2AlertGenerated);
        console.log("after pulse : ",temperatureAlertGenerated);
        console.log("after pulse : ",alertGenerated);


        return alertGenerated;
    }

    public getAlert()
    {
        console.log("Returning : ",alertGenerated);
        return alertGenerated;
    }


}