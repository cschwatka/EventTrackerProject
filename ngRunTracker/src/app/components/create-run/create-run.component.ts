import { Run } from 'src/app/models/run';
import { RunService } from './../../services/run.service';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-create-run',
  templateUrl: './create-run.component.html',
  styleUrls: ['./create-run.component.css']
})
export class CreateRunComponent implements OnInit {

  constructor(private runService: RunService, private router: Router) { }

  ngOnInit(): void {
  }

  runs: Run[] = [];
  newRun: Run= new Run();


  loadRuns() {
    this.runService.index().subscribe(
      (success) => (this.runs = success),
      (err) => console.log('Observable got an error ' + err)
    );
  }

  createRun(run: Run) {
    this.runService.create(run).subscribe(
      (data) => {
        this.loadRuns();
        this.newRun = new Run(); // reset the form
      },
      (err) => console.log('Observable got an error ' + err)
    );

    this.router.navigate(['/runs'])
  }

}
