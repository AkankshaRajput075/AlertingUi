import { Bed } from '../bed/bed';

export class Patient {
    id: number;
    name: string;
    age: number;
    phoneNumber: string;
    bed: Bed;

    public constructor(id: number, name: string, age: number, phoneNumber: string, bed: Bed) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.bed = bed;

    }
}
