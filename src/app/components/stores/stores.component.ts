import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class StoresComponent {


  clickedColumn: string;
  descending: boolean;
  ascending: boolean;
  showIcons: boolean;
  editable = false;
  isAscending = false;

  columnsToDisplay = ['StoreName', 'WebsiteClicks', 'PhoneNumberClicks', 'Views', 'Reviews',];
  // columnsToDisplay = [
  //   { name: 'StoreName', type: 'string', isAscending: true },
  //   { name: 'WebsiteClicks', type: 'number', isAscending: true },
  //   { name: 'Clicks', type: 'number', isAscending: true },
  //   { name: 'Views', type: 'number', isAscending: true },
  //   { name: 'Reviews', type: 'number', isAscending: true },
  //   { name: 'PhoneNumberClicks', type: 'string', isAscending: true }
  // ];
  expandedElement: PeriodicElement | null;

  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  public dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor() { }


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




}
export interface PeriodicElement {
  StoreName: string;
  WebsiteClicks: number;
  Views: number;
  Reviews: number;
  PhoneNumberClicks: number;
  Address: string;
  Id: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    Id: 1,

    PhoneNumberClicks: 612,
    Reviews: 51,
    StoreName: 'Azaria',
    Views: 1079,
    WebsiteClicks: 98,
    Address: `347, Park Street, 
                  Shelbyville, 
                  TN 37160.`
  }, {
    Id: 2,

    PhoneNumberClicks: 534,
    Reviews: 39,
    StoreName: 'Castle Couture',
    Views: 4026,
    WebsiteClicks: 87,
    Address: `347, Park Street, 
                  Shelbyville, 
                  TN 37160.`
  }, {
    Id: 3,

    PhoneNumberClicks: 123,
    Reviews: 32,
    StoreName: 'Windsor',
    Views: 6941,
    WebsiteClicks: 76,
    Address: `347, Park Street, 
                  Shelbyville, 
                  TN 37160.`
  }, {
    Id: 4,

    PhoneNumberClicks: 143,
    Reviews: 48,
    StoreName: 'Tom James Company',
    Views: 9122,
    WebsiteClicks: 65,
    Address: `347, Park Street, 
                  Shelbyville, 
                  TN 37160.`
  }, {
    Id: 5,

    PhoneNumberClicks: 190,
    Reviews: 33,
    StoreName: 'FragranceNet.com',
    Views: 1811,
    WebsiteClicks: 65,
    Address: `347, Park Street, 
                  Shelbyville, 
                  TN 37160.`
  }, {
    Id: 6,

    PhoneNumberClicks: 43,
    Reviews: 42,
    StoreName: 'The Black Tux',
    Views: 10107,
    WebsiteClicks: 54,
    Address: `347, Park Street, 
                  Shelbyville, 
                  TN 37160.`
  }, {
    Id: 7,

    PhoneNumberClicks: 67,
    Reviews: 51,
    StoreName: 'DSW',
    Views: 10067,
    WebsiteClicks: 43,
    Address: `347, Park Street, 
                  Shelbyville, 
                  TN 37160.`
  }, {
    Id: 8,

    PhoneNumberClicks: 45,
    Reviews: 56,
    StoreName: 'Men\'s Wearhouse',
    Views: 19994,
    WebsiteClicks: 32,
    Address: `347, Park Street, 
                  Shelbyville, 
                  TN 37160.`
  }, {
    Id: 9,

    PhoneNumberClicks: 890,
    Reviews: 72,
    StoreName: 'Alain Dupetit',
    Views: 2984,
    WebsiteClicks: 21,
    Address: `347, Park Street, 
                  Shelbyville, 
                  TN 37160.`
  }, {
    Id: 10,
    PhoneNumberClicks: 343,
    Reviews: 34,
    StoreName: 'LoliPromDress',
    Views: 21797,
    WebsiteClicks: 10,
    Address: `347, Park Street, 
                  Shelbyville, 
                  TN 37160.`
  }, {
    Id: 11,
    PhoneNumberClicks: 143,
    Reviews: 23,
    StoreName: 'The Celebrity Dresses',
    Views: 10107,
    WebsiteClicks: 12,
    Address: `347, Park Street, 
                  Shelbyville, 
                  TN 37160.`
  }, {
    Id: 12,
    PhoneNumberClicks: 67,
    Reviews: 82,
    StoreName: 'Hebeos',
    Views: 10067,
    WebsiteClicks: 32,
    Address: `347, Park Street, 
                  Shelbyville, 
                  TN 37160.`
  }, {
    Id: 13,
    PhoneNumberClicks: 123,
    Reviews: 45,
    StoreName: 'Macys',
    Views: 6941,
    WebsiteClicks: 43,
    Address: `347, Park Street, 
                  Shelbyville, 
                  TN 37160.`
  }, {
    Id: 14,
    PhoneNumberClicks: 1233,
    Reviews: 92,
    StoreName: 'JJ\'s House',
    Views: 19994,
    WebsiteClicks: 54,
    Address: `347, Park Street, 
                  Shelbyville, 
                  TN 37160.`
  }, {
    Id: 15,
    PhoneNumberClicks: 9043,
    Reviews: 63,
    StoreName: 'Lulus',
    Views: 2984,
    WebsiteClicks: 65,
    Address: `347, Park Street, 
                  Shelbyville, 
                  TN 37160.`
  }, {
    Id: 16,
    PhoneNumberClicks: 457,
    Reviews: 15,
    StoreName: 'Rem doloremque',
    Views: 21797,
    WebsiteClicks: 67,
    Address: `347, Park Street, 
                  Shelbyville, 
                  TN 37160.`
  }, {
    Id: 17,
    PhoneNumberClicks: 103,
    Reviews: 44,
    StoreName: 'explicabo assumenda',
    Views: 21797,
    WebsiteClicks: 78,
    Address: `347, Park Street, 
                  Shelbyville, 
                  TN 37160.`
  }, {
    Id: 18,
    PhoneNumberClicks: 643,
    Reviews: 32,
    StoreName: 'Dolores ducimus',
    Views: 10107,
    WebsiteClicks: 89,
    Address: `347, Park Street, 
                  Shelbyville, 
                  TN 37160.`
  }, {
    Id: 19,
    PhoneNumberClicks: 235,
    Reviews: 21,
    StoreName: 'consectetur',
    Views: 10067,
    WebsiteClicks: 90,
    Address: `347, Park Street, 
                  Shelbyville, 
                  TN 37160.`
  }, {
    Id: 20,
    PhoneNumberClicks: 666,
    Reviews: 93,
    StoreName: 'adipisicing',
    Views: 6941,
    WebsiteClicks: 99,
    Address: `347, Park Street, 
                  Shelbyville, 
                  TN 37160.`
  }
];


 // public Stores = [
  //   {
  //     storeCoverImage: '../../../assets/images/exampleimages/flowers.jpg',
  //     StoreName: 'Castle Couture'
  //   },
  //   {
  //     storeCoverImage: '../../../assets/images/exampleimages/newsfeedone.jpg',
  //     StoreName: 'Azaria'

  //   },
  //   {
  //     storeCoverImage: '../../../assets/images/exampleimages/NewsFeedImageFive.png',
  //     StoreName: 'Windsor'

  //   },
  //   {
  //     storeCoverImage: '../../../assets/images/exampleimages/NewsFeedImageFour.png',
  //     StoreName: 'The Black Tux'

  //   },
  //   {
  //     storeCoverImage: '../../../assets/images/exampleimages/flowers.jpg',
  //     StoreName: 'FragranceNet.com'

  //   },
  //   {
  //     storeCoverImage: '../../../assets/images/exampleimages/newsfeedone.jpg',
  //     StoreName: 'Tom James Company'

  //   },

  // ]
  // store = this.Stores
  // constructor() { }

  // applyFilter(event: Event) {
  //   let blogs = this.store;
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.Stores = blogs.filter(item => item.StoreName.trim().toLowerCase().indexOf(filterValue) !== -1);
  // }

  // ngOnInit(): void {
  // }

  // sorting(clickedevent) {
  //   this.clickedColumn = clickedevent;
  //   alert(this.clickedColumn);
  //   ELEMENT_DATA.sort(this.compare);
  //   compare(a, b) {
  //     if (a.clickedColumn < b.clickedColumn) {
  //       return -1;
  //     }
  //     if (a.clickedColumn > b.clickedColumn) {
  //       return 1;
  //     }
  //     return 0;
  //   }
  // }

  // selectedValue(event, element: any) {
  //   const index = this.dataSource.filteredData.findIndex(x => x.Id === element.Id);;
  //   const options = {
  //     1: 'New',
  //     2: 'Inprogress',
  //     3: 'Completed'
  //   }
  //   this.dataSource.filteredData[index].Clicks = options[event.value];
  // }

  // ngOnInit() {
  //   this.dataSource.paginator = this.paginator;
  // }

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }

  // ascendingOrder(clickedevent) {
  //   alert("ascending");
  //   this.clickedColumn = clickedevent;
  //   this.descending = true;
  //   ELEMENT_DATA.sort(this.compare);
  // }
  // compare(a, b) {
  //   var me = this;

  //   if (a['WebsiteClicks'] < b['WebsiteClicks']) {
  //     return -1;
  //   }
  //   if (a['WebsiteClicks'] > b['WebsiteClicks']) {
  //     return 1;
  //   }
  //   return 0;
  // }
  // descendingOrder(clickedevent) {
  //   alert("descending");

  //   this.clickedColumn = clickedevent;
  //   ELEMENT_DATA.sort(this.compare);
  //   compare(a, b) {
  //     if (a.clickedColumn < b.clickedColumn) {
  //       return -1;
  //     }
  //     if (a.clickedColumn > b.clickedColumn) {
  //       return 1;
  //     }
  //     return 0;
  //   }
  // }

// @ViewChild(MatPaginator) paginator: MatPaginator;

  // @ViewChild(MatSort) sort: MatSort;