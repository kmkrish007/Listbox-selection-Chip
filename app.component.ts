import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { ChipList } from '@syncfusion/ej2-buttons';
import { ChipListComponent } from '@syncfusion/ej2-angular-buttons';
/**
 * Default ListBox sample
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  // dataSource definition
  @ViewChild('chip') public chip: ChipListComponent;
  public data: { [key: string]: Object }[] = [
    { text: 'Hennessey Venom', id: 'list-01' },
    { text: 'Bugatti Chiron', id: 'list-02' },
    { text: 'Bugatti Veyron Super Sport', id: 'list-03' },
    { text: 'SSC Ultimate Aero', id: 'list-04' },
    { text: 'Koenigsegg CCR', id: 'list-05' },
    { text: 'McLaren F1', id: 'list-06' },
    { text: 'Aston Martin One- 77', id: 'list-07' },
    { text: 'Jaguar XJ220', id: 'list-08' },
    { text: 'McLaren P1', id: 'list-09' },
    { text: 'Ferrari LaFerrari', id: 'list-10' },
  ];
  public select(args) {
    var addChip = args.value;

    this.chip.add(addChip);
  }
}
