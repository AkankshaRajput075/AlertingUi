import {Injectable} from '@angular/core';
//import { HttpClient } from '@angular/common/http';
 
@Injectable()
export class ConfigService {
    public numberOfBedsInTopRow:number=5;
    public numberOfBedsInLeftSide:number=3;
    public numberOfBedsInLastRow:number=2;
    public numberOfBedsInRightSide:number=0;
}