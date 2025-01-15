import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LegoDataService } from '../../services/lego-data.service';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css']
})
export class InstructionComponent implements OnInit {
  legoSet: any;

  constructor(private route: ActivatedRoute, private legoDataService: LegoDataService) { }

  ngOnInit(): void {
    const setNumber = this.route.snapshot.paramMap.get('setNumber');
    this.legoDataService.getLegoSets().subscribe(data => {
      this.legoSet = data.find(set => set.setNumber === setNumber);
    });
  }
}
