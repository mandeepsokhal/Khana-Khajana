import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Khana-Khajana';
  loadFeature = 'recipe';

  OnEventSelected(feature : string)
  {
       this.loadFeature = feature;
  }
}
