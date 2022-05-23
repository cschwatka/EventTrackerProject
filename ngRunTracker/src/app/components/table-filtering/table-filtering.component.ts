import { Component, OnInit, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Run } from 'src/app/models/run';
import { RunService } from './../../services/run.service';
import { Router } from '@angular/router';

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

// let RUNS: Run[] =[];
// let RUNS: Run[] = [
//   {
//     id: 2,
//     name: 'test',
//     date: 'test',
//     distance: 2,
//     startTime: 'test',
//     endTime: 'test',
//     heartRate: 3,
//     caloriesBurned: 3,
//     comments: 'test',
//     mediaUrl: 'test'
//   },
//  {
//     id: 3,
//     name: 'test',
//     date: 'test',
//     distance: 2,
//     startTime: 'test',
//     endTime: 'test',
//     heartRate: 3,
//     caloriesBurned: 3,
//     comments: 'test',
//     mediaUrl: 'test'

//   }
// ];

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754,
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199,
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463,
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397,
  },
];

// function search(text: string, pipe: PipeTransform): Country[] {
//   return COUNTRIES.filter(country => {
//     const term = text.toLowerCase();
//     return country.name.toLowerCase().includes(term)
//         || pipe.transform(country.area).includes(term)
//         || pipe.transform(country.population).includes(term);
//   });
// }

@Component({
  selector: 'ngbd-table-filtering',
  templateUrl: './table-filtering.component.html',
  providers: [DecimalPipe],
})
export class NgbdTableFiltering implements OnInit {
  runs: Run[] = [];

  showFiltered: boolean = false;

  newRun: Run = new Run();
  selected: Run | null = null;
  runToEdit: Run | null = null;
  selectedType: string = 'all';

  runs$: Observable<Run[]>;
  // countries$: Observable<Country[]>;
  filter = new FormControl('');

  // constructor(private runService: RunService, pipe: DecimalPipe) {
  //   this.runs$ = this.filter.valueChanges.pipe(
  //     startWith(''),
  //     map(text => search(text, pipe))
  //   );
  // }

  constructor(pipe: DecimalPipe, private runService: RunService, private router: Router) {
    // this.countries$ = this.filter.valueChanges.pipe(
    //     startWith(''),
    //     map(text => search(text, pipe))
    //   )}

    this.runs$ = this.filter.valueChanges.pipe(
      startWith(''),
      map((text) => this.search(text, pipe))
      );
  }

  ngOnInit(): void {
    // this.runs$ = this.runService.index();
    this.loadRuns();
  }

  search(text: string, pipe: PipeTransform): Run[] {

    return this.runs.filter(run => {
      const term = text.toLowerCase();
      return run.name.toLowerCase().includes(term)
          || pipe.transform(run.id).includes(term)
          // || run.date.toLowerCase().includes(term)
          || pipe.transform(run.distance).includes(term)
          || run.startTime.toLowerCase().includes(term)
          || run.endTime.toLowerCase().includes(term)
          // || pipe.transform(run.heartRate).includes(term)
    }
    );

  }



  loadRuns() {
    this.runService.index().subscribe(
      (success) => (this.runs = success),
      (err) => console.log('Observable got an error ' + err)
    );
  }

  reload() {
    this.runService.index().subscribe(
      (success) => (this.runs = success),
      (err) => console.log('Observable got an error ' + err)
    );
  }

  setRun(run: Run) {
    this.selected = run;
  }

  setRunToEdit(run: Run) {
    this.runToEdit = run;
  }

  editRun(run: Run) {
    this.runService.update(run).subscribe(
      (data) => {
        this.loadRuns();
        this.newRun = new Run(); // reset the form
      },
      (err) => console.log('Observable got an error ' + err)
    );
  }

  deleteRun(id: number) {
    this.runService.destroy(id).subscribe(
      data => this.reload(),
      err => console.error(err)
    );

    this.router.navigate(['/runs'])
  }




}
