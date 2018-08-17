import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatBottomSheetRef, MatBottomSheet } from '@angular/material';
import * as _ from 'lodash';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  api_value: { name: string; channel: string; image: string; desc: string; country: string; subscriber: number; }[];
  filter = {};
  query;
  sorting = {
    1: {
      key: 'name',
      order: 'ASC'
    },
    2: {
      key: 'name',
      order: 'desc'
    },
    3: {
      key: 'subscriber',
      order: 'ASC'
    },
    4: {
      key: 'subscriber',
      order: 'desc'
    }
  };
  videos = [
    {
      name: 'Inamtes',
      channel: 'TVF',
      image: 'http://www.mediainfoline.com/wp-content/uploads/2017/10/TVF-Inmates.jpg?x53413',
      desc: 'Madhav, is a virgin (Ashish Verma) who is desperate to get laid. He hooks up with a pretty woman Janet on Tinder, but to his shock, she turns out to be an older lady who wants to spice up her married life. Toadd to the fun, her husband wants to watch the action from the sidelines.',
      country: 'india',
      subscriber: 3000
    },
    {
      name: 'Breathe',
      channel: 'amazon',
      image: 'https://m.media-amazon.com/images/M/MV5BMTczNjIzNjk5N15BMl5BanBnXkFtZTgwNTAyMDk1NDM@._V1_UX182_CR0,0,182,268_AL__QL50.jpg',
      desc: 'Breathe is an Indian drama that explores the lives of ordinary men faced with extraordinary circumstances. Kabir (Sadh), a brilliant but non-conventional officer of the Crime Branch, puts the pieces together of seemingly unconnected deaths that lead to an unlikely suspect - the affable Danny (R.Madhavan). Kabir will not stop till he cracks the case and delivers justice..',
      country: 'pakisthan',
      subscriber: 43000
    },
    {
      name: 'Permanent Roommates ',
      channel: 'TVF',
      image: 'https://m.media-amazon.com/images/M/MV5BYzJlMGI1NDgtNTNhYS00NTFhLTgwZTktOWMzMmU0NTU5NTAxXkEyXkFqcGdeQXVyMTcwODI2NjQ@._V1_QL50_SY1000_CR0,0,666,1000_AL_.jpg',
      desc: 'A couple, who were in a long distance relationship for 3 years, face the prospect of getting married.',
      country: 'india',
      subscriber: 2000
    },
    {
      name: 'On Air with AIB',
      channel: 'OML',
      image: 'https://m.media-amazon.com/images/M/MV5BYmU1MzY3YTMtZDhhZS00Nzg1LWE1N2UtYTdhNDAxMTYzNWQ3XkEyXkFqcGdeQXVyNzYxMzIzMDI@._V1_UY268_CR147,0,182,268_AL__QL50.jpg',
      desc: 'Madhav, is a virgin (Ashish Verma) who is desperate to get laid. He hooks up with a pretty woman Janet on Tinder, but to his shock, she turns out to be an older lady who wants to spice up her married life. Toadd to the fun, her husband wants to watch the action from the sidelines.',
      country: 'srilanka',
      subscriber: 21000
    },
    {
      name: 'Inamtes',
      channel: 'TVF',
      image: 'http://www.mediainfoline.com/wp-content/uploads/2017/10/TVF-Inmates.jpg?x53413',
      desc: 'Madhav, is a virgin (Ashish Verma) who is desperate to get laid. He hooks up with a pretty woman Janet on Tinder, but to his shock, she turns out to be an older lady who wants to spice up her married life. Toadd to the fun, her husband wants to watch the action from the sidelines.',
      country: 'australia',
      subscriber: 6000
    },
    {
      name: 'Pitchers',
      channel: 'TVF',
      image: 'https://m.media-amazon.com/images/M/MV5BMjQwNTQ5MjAxNF5BMl5BanBnXkFtZTgwNTU0MDA3NjE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg',
      desc: 'A story of trials and tribulations of four young entrepreneurs who quit their day jobs in order to pursue their start up venture.',
      country: 'australia',
      subscriber: 5000
    },
    {
      name: 'Tripling',
      channel: 'TVF',
      image: 'https://m.media-amazon.com/images/M/MV5BYWFmODI5OWEtNzBjNC00YjVlLTgyMGUtNWIwYjQyOWE3ZWE2XkEyXkFqcGdeQXVyNTkwMjAxMTI@._V1_UY268_CR4,0,182,268_AL__QL50.jpg',
      desc: 'Madhav, is a virgin (Ashish Verma) who is desperate to get laid. He hooks up with a pretty woman Janet on Tinder, but to his shock, she turns out to be an older lady who wants to spice up her married life. Toadd to the fun, her husband wants to watch the action from the sidelines.',
      country: 'australia',
      subscriber: 15000
    }
  ]
  constructor(public dialog: MatDialog,
     private bottomSheet: MatBottomSheet) { }

  ngOnInit() {
    this.api_value = this.videos
    
  }
  openFilter(): void {
    const dialogRef = this.dialog.open(filterComponent, {
      width: '250px',
      data: this.filter
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
      this.videos = this.api_value;
      this.filter = result ? result : {};
      for (const key in result) {
        if (result.hasOwnProperty(key)) {
          const element = result[key];
          this.videos = this.videos.filter(v => {
            if (key === 'subscriber') {
              return v[key] >= result[key];
            }
            return v[key] === result[key];
          })
          
        }
      }
    });
  }

  openSort(): void {
    const bottomSheetRef = this.bottomSheet.open(sortlist);
    bottomSheetRef.afterDismissed().subscribe((result) => {
      console.log('Bottom sheet has been dismissed.', );
      const sort = localStorage.getItem('sort');
      this.videos = _.orderBy(this.videos, this.sorting[sort].key, this.sorting[sort].order)
    });
  }

  export(): void {
    new Angular5Csv(this.api_value, 'videos' ,{noDownload: false});
    // new Angular2Csv(this.api_value, 'My Report');
  }
}

@Component({
  selector: 'filter',
  templateUrl: 'filter.html',
})
export class filterComponent {
  filter = {};
  countries = [
    'india',
    'pakisthan',
    'srilanka',
    'australia'
  ]
  channels = [
    'TVF',
    'OML',
    'amazon'
  ]
  constructor(
    public dialogRef: MatDialogRef<filterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log(data, 'isdialog');
      this.filter = data;
    }

  onNoClick(): void {
    this.filter = {};
    this.dialogRef.close();
  }

}

@Component({
  selector: 'sort',
  templateUrl: 'sort.html',
})
export class sortlist {
  constructor(private bottomSheetRef: MatBottomSheetRef<sortlist>) {}

  sort(event: MouseEvent, sortvalue): void {
    localStorage.setItem('sort', sortvalue);
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
