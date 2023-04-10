import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  name: string = 'BMW';
  speed: number = 1;
  model: string = 'M3';
  colors: Colors | undefined;
  options: string[] | any;
  test: any;

  constructor() { }


  ngOnInit(): void {

    this.name = 'Audi';
    this.speed = 235;
    this.model = 'RS8';
    this.colors = {
      car: 'белый',
      salon: 'черный',
      wheels: 'серебристый'
    }
    this.options = ["ABS", "Автопилот", "Авто паркинг"];
    this.test = 1;
  }

  addOpt(option: string) {
    this.options?.unshift(option);
    return false;
  };

  deleteOpt(option: string) {
    for (let i = 0; i < this.options?.length; i++) {
      if (this.options[i] == option) {
        this.options?.slice(i, 1);
        break;
      }

    }
  };

  carSelect(carName: string) {
    if (carName == 'bmw') {
      this.name = 'BMW';
      this.speed = 280;
      this.model = 'M5';
      this.colors = {
        car: 'синий',
        salon: 'белый',
        wheels: 'серебристый'
      }
      this.options = ["Система трека", "ABS", "Автопилот", "Авто паркинг"];
      this.test = 1;
    } else if (carName == 'audi') {
      this.name = 'Audi';
      this.speed = 235;
      this.model = 'RS8';
      this.colors = {
        car: 'белый',
        salon: 'черный',
        wheels: 'серебристый'
      }
      this.options = ["ABS", "Автопилот", "Круиз контроль", "Авто паркинг"];
      this.test = 1;
    } else if (carName == 'mercedes') {
      this.name = 'Mercedes';
      this.speed = 235;
      this.model = 'C180';
      this.colors = {
        car: 'белый',
        salon: 'черный',
        wheels: 'серебристый'
      }
      this.options = ["ABS", "Автопилот", "Авто паркинг"];
      this.test = 1;
    }
  }
}

interface Colors {
  car: string;
  salon: string;
  wheels: string;
}
function bmwSelect() {
  throw new Error('Function not implemented.');
}

