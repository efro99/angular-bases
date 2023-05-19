import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `<h3>Counter {{counter}} </h3>
    
    <button (click)="increaseBy()" class="btn btn-success mx-2">Increase</button>
    <button (click)="resetValue()" class="btn btn-ligth mx-2">Reset</button>
    <button (click)="decreaseBy()" class="btn btn-danger mx-2">-1</button>
    `
})

export class CounterComponent {
    constructor() { }
    
    public counter: number = 10;

    increaseBy(): void {
        this.counter++;
    }

    decreaseBy(): void {
        this.counter--;
    }

    resetValue(): void {
        this.counter = 10;
    }
}