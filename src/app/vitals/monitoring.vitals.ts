import { PulseRate } from './pulserate';
import { Spo2 } from './spo2';
import { Temperature } from './temperature';

export class MonitoringVitals{
    pulseRate:PulseRate;
    spo2:Spo2;
    temperature:Temperature;

    public constructor(pulseRate:PulseRate,spo2:Spo2,temperature:Temperature)
    {
        this.pulseRate=pulseRate;
        this.spo2=spo2;
        this.temperature=temperature;
    }
}