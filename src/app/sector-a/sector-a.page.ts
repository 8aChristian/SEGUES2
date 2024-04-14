import { Component, OnInit } from '@angular/core';
import { Database, object, ref } from '@angular/fire/database';

@Component({
  selector: 'app-sector-a',
  templateUrl: './sector-a.page.html',
  styleUrls: ['./sector-a.page.scss'],
})
export class SectorAPage implements OnInit {
  // State arrays for different frames
  states: boolean[] = new Array(16).fill(false);
  states2: boolean[] = new Array(12).fill(false);

  constructor(private database: Database) {}

  ngOnInit(): void {
    this.subscribeToDatabaseChanges(); 
    this.subscribeToF3DatabaseChanges();
  }

  private subscribeToDatabaseChanges(): void {

    for (let i = 1; i <= 16; i++) {
      const route = `/sectorA/${i <= 8 ? 'f1' : 'f2'}/c${i % 8 === 0 ? 8 : i % 8}`;
      const sectorRef = ref(this.database, route);
      object(sectorRef).subscribe(value => {
        this.states[i - 1] = value.snapshot.val(); 
      });
    }
  }

  private subscribeToF3DatabaseChanges(): void {

    for (let i = 1; i <= 12; i++) {
      const route = `/sectorA/f3/c${i}`;
      const sectorRef = ref(this.database, route);
      object(sectorRef).subscribe(value => {
        this.states2[i - 1] = value.snapshot.val(); 
      });
    }
  }
}
