import { Patient } from '../patient/patient';

export class Bed{
    bedId:number;
    isAvailable:boolean;
    patient:Patient;

    public constructor(bedId:number,isAvailable:boolean)
    {
        this.bedId=bedId;
        this.isAvailable=isAvailable;
    }
}