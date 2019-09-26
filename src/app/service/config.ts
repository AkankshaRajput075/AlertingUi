import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
    public numberOfBedsInTopRow = 5;
    public numberOfBedsInLeftSide = 3;
    public numberOfBedsInLastRow = 2;
    public numberOfBedsInRightSide = 0;
}
