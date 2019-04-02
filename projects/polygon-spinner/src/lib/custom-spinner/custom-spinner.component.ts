import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'ngx-custom-spinner',
  templateUrl: './custom-spinner.component.html',
  styleUrls: ['./custom-spinner.component.css']
})
export class CustomSpinnerComponent implements OnChanges {

  readonly three: Array<[number, number]> = [[50,28.6],[68.6,60.8],[31.4,60.8]];
  readonly four: Array<[number, number]> = [[31,31],[68,31],[68,68],[31,68]];
  readonly five: Array<[number, number]> = [[50,25.2],[73.9,42.6],[64.8,70.8],[35.2,70.8],[26.1,42.6]];
  readonly six: Array<[number, number]> = [[50,24.2],[71.9,36.8],[71.9,62],[50,74.7],[28.1,62],[28.1,36.8]];
  readonly seven: Array<[number, number]> = [[50,25.2],[69.7,34.7],[74.6,56],[61,73.2],[39,73.2],[25.4,56],[30.3,34.7]];
  readonly eight: Array<[number, number]> = [[50,23.6],[68.6,31.4],[76.4,50],[68.6,68.6],[50,76.4],[31.4,68.6],[23.6,50],[31.4,31.4]];
  readonly nine: Array<[number, number]> = [[50,24],[66.6,30],[75.4,45.3],[72.4,62.7],[58.8,74],[41.2,74],[27.6,62.7],[24.6,45.3],[33.4,30]];
  readonly ten: Array<[number, number]> = [[50,23.6],[65.5,28.7],[75.1,41.9],[75.1,58.1],[65.5,71.3],[50,76.4],[34.5,71.3],[24.9,58.1],[24.9,41.9],[34.5,28.7]];

  @Input() configs;
  polygons = [];


  constructor() {}

  ngOnChanges() {
    // console.log(this.configs);
    this.polygons = [];
    this.configs.polygons.forEach(p => {

      // Define polygon points
      switch(p.sides) {
         case 3: {
            p.points = this.three.toString();
            break;
         }
         case 4: {
            p.points = this.four.toString();
            break;
         }
      }

      // Sizing
      p.size = p.size + '%';  // convert to string and add %

      // Animations
      let animations = [];
      if(p.spin && p.spin.direction) {
        switch(p.spin.direction) {
          case 'clockwise': {
            animations.push(`spin-clockwise ${p.spin.duration} ${p.spin.type} infinite`);
            break;
          }
          case 'counter-clockwise': {
            animations.push(`spin-counter-clockwise ${p.spin.duration} ${p.spin.type} infinite`);
            break;
          }
        }
      }
      p.animations = animations.join(',');

      this.polygons.push(p);
    });

  }

  // [style.animation]="a"

}
