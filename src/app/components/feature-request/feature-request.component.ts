import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

// import {MatTableDataSource} from '@angular/material/table';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
// import { MatSort } from '@angular/material/sort';
// import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-feature-request',
  templateUrl: './feature-request.component.html',
  styleUrls: ['./feature-request.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class FeatureRequestComponent {

  editable = false;
  isAscending = false;
  columnsToDisplay = ['Title', 'Username', 'Status', 'Score'];
  expandedElement: PeriodicElement | null;

  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }



  // @ViewChild(MatPaginator) paginator: MatPaginator;

  // @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  // ngOnInit() {
  //   this.dataSource.paginator = this.paginator;
  // }

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }
  applyFilter(event: Event) {
    // let users = responseData;
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  edit() {
    this.editable = true;
  }

  sortColumn(columnName: any, ascending: any, format: string) {
    this.isAscending = !this.isAscending;
    const data = ELEMENT_DATA;
    const property = columnName;
    if (format === 'number') {
      data.sort((a, b) => {
        const first = parseFloat(a[property] || 0);
        const second = parseFloat(b[property] || 0);
        return this.isAscending ? first - second : second - first;
      });
    }

    if (format === 'string') {
      data.sort((a, b) => {
        const first = b[property].toLowerCase();
        const second = a[property].toLowerCase();
        const ascending = first > second ? -1 : 1;
        const descending = second > first ? -1 : 1;
        return this.isAscending ? ascending : descending;
      });
    }

    if (format === 'date') {
      data.sort((a, b) => {
        const da: any = new Date(a[property]);
        const db: any = new Date(b[property]);
        return this.isAscending ? da - db : db - da;
      });
    }
    if (data && Array.isArray(data)) {
      this.dataSource.data = data
      // return data;
    }
    return data;
  }

  selectedValue(event, element: any) {
    const index = this.dataSource.filteredData.findIndex(x => x.Id === element.Id);;
    const options = {
      1: 'New',
      2: 'Inprogress',
      3: 'Completed'
    }
    this.dataSource.filteredData[index].Status = options[event.value];
  }
}

export interface PeriodicElement {
  Title: string;
  Status: string;
  Score: number;
  Username: string;
  description: string;
  Id: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    Id: 1,
    Status: 'New',
    Title: 'Makeup Explicabo ex ut cum hic possimus laborum quos velit Eos, magnam ',
    Score: 1079,
    Username: 'Harry',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem doloremque ex vitae explicabo assumenda et, fugiat quas veniam dolores ducimus voluptatem labore minima ullam quibusdam at mollitia facilis voluptates eaque.`
  }, {
    Id: 2,
    Status: 'Inprogress',
    Title: 'Dolor sit amet consectetur adipisicing elit',
    Score: 4026,
    Username: 'Helen',
    description: `Sit amet consectetur adipisicing elit. Rem doloremque ex vitae explicabo assumenda et, fugiat quas veniam dolores ducimus voluptatem labore minima ullam quibusdam at mollitia facilis voluptates eaque.`
  }, {
    Id: 3,
    Status: 'Inprogress',
    Title: 'Sit amet consectetur adipisicing elit Rem doloremque ex vitae',
    Score: 6941,
    Username: 'william',
    description: `Lithium is a chemical element with Username Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`
  }, {
    Id: 4,
    Status: 'Completed',
    Title: 'Fugiat quas veniam dolores ducimus voluptatem labore minima',
    Score: 9122,
    Username: 'Addison',
    description: `Ipsum dolor sit amet consectetur adipisicing elit. Rem doloremque ex vitae explicabo assumenda et, fugiat quas veniam dolores ducimus voluptatem labore minima ullam quibusdam at mollitia facilis voluptates eaque.`
  }, {
    Id: 5,
    Status: 'New',
    Title: 'Looks Voluptatem labore minima ullam quibusdam at mollitia facilis voluptates eaque',
    Score: 1811,
    Username: 'Jhonson',
    description: `Boron is a chemical element with Username B and atomic number 5. Produced entirely
        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
        low-abundance element in the Solar system and in the Earth's crust.`
  }, {
    Id: 6,
    Status: 'New',
    Title: 'Dolores ducimus voluptatem labore minima',
    Score: 10107,
    Username: 'Olivia',
    description: `Carbon is a chemical element with Username C and atomic number 6. It is nonmetallic
        and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
        to group 14 of the periodic table.`
  }, {
    Id: 7,
    Status: 'Completed',
    Title: 'Ipsum dolor sit amet consectetur adipisicing elit',
    Score: 10067,
    Username: 'Isabella',
    description: `Nitrogen is a chemical element with Username N and atomic number 7. It was first
        discovered and isolated by Scottish physician Daniel Rutherford in 1772.`
  }, {
    Id: 8,
    Status: 'New',
    Title: 'Sit amet consectetur adipisicing elit Rem doloremque ex vitae',
    Score: 19994,
    Username: 'Sophia',
    description: `Oxygen is a chemical element with Username O and atomic number 8. It is a member of
         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
         agent that readily forms oxides with most elements as well as with other compounds.`
  }, {
    Id: 9,
    Status: 'Completed',
    Title: 'Amet consectetur adipisicing elit doloremque ex vitae',
    Score: 29846,
    Username: 'Amelia',
    description: `Fluorine is a chemical element with Username F and atomic number 9. It is the
        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
        conditions.`
  }, {
    Id: 10,
    Status: 'Inprogress',
    Title: 'Rem doloremque ex vitae explicabo assumenda et',
    Score: 797,
    Username: 'Victoria',
    description: `Neon is a chemical element with Username Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`
  }, {
    Id: 11,
    Status: 'New',
    Title: 'Dolores ducimus voluptatem labore minima',
    Score: 10107,
    Username: 'Ronald',
    description: `Carbon is a chemical element with Username C and atomic number 6. It is nonmetallic
        and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
        to group 14 of the periodic table.`
  }, {
    Id: 12,
    Status: 'Completed',
    Title: 'Ipsum dolor sit amet consectetur adipisicing elit',
    Score: 10067,
    Username: 'Sam Dsouza',
    description: `Nitrogen is a chemical element with Username N and atomic number 7. It was first
        discovered and isolated by Scottish physician Daniel Rutherford in 1772.`
  }, {
    Id: 13,
    Status: 'Inprogress',
    Title: 'Sit amet consectetur adipisicing elit Rem doloremque ex vitae',
    Score: 6941,
    Username: 'Cassandra',
    description: `Lithium is a chemical element with Username Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`
  }, {
    Id: 14,
    Status: 'New',
    Title: 'Sit amet consectetur adipisicing elit Rem doloremque ex vitae',
    Score: 1994,
    Username: 'Ariana',
    description: `Oxygen is a chemical element with Username O and atomic number 8. It is a member of
         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
         agent that readily forms oxides with most elements as well as with other compounds.`
  }, {
    Id: 15,
    Status: 'Completed',
    Title: 'Amet consectetur adipisicing elit doloremque ex vitae',
    Score: 2984,
    Username: 'Rose Williams',
    description: `Fluorine is a chemical element with Username F and atomic number 9. It is the
        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
        conditions.`
  }, {
    Id: 16,
    Status: 'Inprogress',
    Title: 'Doloremque ex vitae explicabo assumenda et',
    Score: 21797,
    Username: 'Glory',
    description: `Neon is a chemical element with Username Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`
  }, {
    Id: 17,
    Status: 'Inprogress',
    Title: 'Rem doloremque ex vitae explicabo assumenda et',
    Score: 21798,
    Username: 'Victoria',
    description: `Neon is a chemical element with Username Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`
  }, {
    Id: 18,
    Status: 'New',
    Title: 'Dolores ducimus voluptatem labore minima',
    Score: 10107,
    Username: 'Ronald',
    description: `Carbon is a chemical element with Username C and atomic number 6. It is nonmetallic
        and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
        to group 14 of the periodic table.`
  }, {
    Id: 19,
    Status: 'Completed',
    Title: 'Ipsum dolor sit amet consectetur adipisicing elit',
    Score: 10067,
    Username: 'Sam Dsouza',
    description: `Nitrogen is a chemical element with Username N and atomic number 7. It was first
        discovered and isolated by Scottish physician Daniel Rutherford in 1772.`
  }, {
    Id: 20,
    Status: 'Inprogress',
    Title: 'Sit amet consectetur adipisicing elit Rem doloremque ex vitae',
    Score: 6941,
    Username: 'Cassandra',
    description: `Lithium is a chemical element with Username Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`
  }
];

