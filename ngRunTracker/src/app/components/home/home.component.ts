import { RunService } from './../../services/run.service';
import { Component, OnInit } from '@angular/core';
import { Run } from 'src/app/models/run';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  runs: Run[] = [];

  newRun: Run = new Run();
  selected: Run | null = null;
  selectedType: string = 'all';

  constructor(private runService: RunService) { }

  ngOnInit(): void {
    this.loadRuns();
  }

  loadRuns() {
    this.runService.index().subscribe(
      (success) => (this.runs = success),
      (err) => console.log('Observable got an error ' + err)
    );
  }

  setRun(run: Run) {
    this.selected = run;
  }

}
