import { Injectable } from '@angular/core';
import { ICovDetails } from '../objects/covDetails';

@Injectable({
  providedIn: 'root'
})
export class CoverageDetailsService {

  constructor() { }

  public ICovDetails;

  private mockCovDetails : ICovDetails[] = [
    {
      id: 1,
      covCd: "Fire",
      section: "I",
      bulletNo: 1,
      sumInsured: 20000,
      sortSe: 10,
      currencyCd: "PHP",
      deductibles: "testing deduc1",
      remarks: "testing remarks1"},
      {
        id: 2,
        covCd: "MotorCar",
        section: "III",
        bulletNo: 2,
        sumInsured: 25000,
        sortSe: 20,
        currencyCd: "PHP",
        deductibles: "testing deduc2",
        remarks: "testing remarks2"}
  ];

  getCovDetails(): ICovDetails[] {
    return this.mockCovDetails;
  }
}
