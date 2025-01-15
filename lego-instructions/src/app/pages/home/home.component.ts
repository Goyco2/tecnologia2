import { Component, OnInit } from '@angular/core';
import { LegoDataService } from '../../services/lego-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  legoSets: any[] = [];

  constructor(private legoDataService: LegoDataService) { }

  ngOnInit(): void {
    this.legoDataService.getLegoSets().subscribe(data => {
      this.legoSets = data;
    });
  }
}
