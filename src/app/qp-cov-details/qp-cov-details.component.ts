import { Component, OnInit } from '@angular/core';
import { CoverageDetailsService } from '../services/coverage-details.service';

@Component({
  selector: 'app-qp-cov-details',
  templateUrl: './qp-cov-details.component.html',
  styleUrls: ['./qp-cov-details.component.css']
})
export class QpCovDetailsComponent implements OnInit {

  public covDetList = [];
  public covDetails;
  public sec1=0;
  public sec2=0;
  public sec3=0;

  constructor(private _coverageDetailsService: CoverageDetailsService) { 
  }

  ngOnInit() {
    this.covDetList = this._coverageDetailsService.getCovDetails();
  }

  onSelect(covDet){
    this.covDetails = covDet;
    this.sec1 = 0;
    this.sec2 = 0;
    this.sec3 = 0;

    if(covDet.section == "I"){
      this.sec1 = covDet.sumInsured;
    }else if(covDet.section == "II"){
      this.sec2 = covDet.sumInsured;
    }else{
      this.sec3 = covDet.sumInsured;
    }

    console.log("clicked " + covDet.id);
  }
}
