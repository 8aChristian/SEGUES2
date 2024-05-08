import { Component, OnInit } from '@angular/core';
import { Database, object, ref } from '@angular/fire/database';

@Component({
  selector: 'app-sector-a',
  templateUrl: './sector-a.page.html',
  styleUrls: ['./sector-a.page.scss'],
})
export class SectorAPage implements OnInit {

  states: boolean[] = new Array(16).fill(false);
  states2: boolean[] = new Array(12).fill(false);

  trueCount: number = 0;
  falseCount: number = 0;

  constructor(private database: Database) {}

  ngOnInit(): void {
    this.subscribeToDatabaseChanges();
    this.subscribeToF3DatabaseChanges();
  }

  private subscribeToDatabaseChanges(): void {
    for (let i = 1; i <= 16; i++) {
      const frame = i <= 8 ? 'f1' : 'f2';
      const col = i % 8 === 0 ? 8 : i % 8;
      const route = `/sectorA/${frame}/c${col}`;
      const sectorRef = ref(this.database, route);
      object(sectorRef).subscribe(value => {
        this.states[i - 1] = value.snapshot.val();
        this.updateCounts();
      });
    }
  }

  private subscribeToF3DatabaseChanges(): void {
    for (let i = 1; i <= 12; i++) {
      const route = `/sectorA/f3/c${i}`;
      const sectorRef = ref(this.database, route);
      object(sectorRef).subscribe(value => {
        this.states2[i - 1] = value.snapshot.val();
        this.updateCounts();
      });
    }
  }

  private updateCounts(): void {
    this.trueCount = [...this.states, ...this.states2].filter(val => val).length;
    this.falseCount = [...this.states, ...this.states2].length - this.trueCount;
  }
}
