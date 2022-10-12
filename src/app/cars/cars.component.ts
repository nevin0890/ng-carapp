import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  constructor(private api: ApiService) { 
    this.fetchCars()
  }
  fetchCars = () => {this.api.getCarList().subscribe((data) => {this.getCars = data})}
  

  getCars: any = [];

  ngOnInit(): void {
  }

}
