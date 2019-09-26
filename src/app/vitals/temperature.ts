export class Temperature {
    reading: number;
    result: string;
    vitalName: string;

    public constructor(vitalName: string) {
        this.vitalName = vitalName;
    }
}
