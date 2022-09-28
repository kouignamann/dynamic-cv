import { Component } from '@angular/core';
import {DataService} from "../core/service/data.service";
import {Category} from "../core/core.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public categories: Array<Category>;

  constructor(private dataService: DataService) {
    this.categories = this.dataService.getCategories();
    this.categories[0].selected = true;
  }

  selectCategory(category: Category) {
    this.categories.forEach(category => category.selected = false);
    category.selected = true;
  }
}
