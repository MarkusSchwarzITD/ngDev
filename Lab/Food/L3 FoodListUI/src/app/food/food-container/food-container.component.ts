import { Component, OnInit } from "@angular/core";
import { FoodService } from "src/app/shared/food.service";
import { FoodItem } from "src/app/shared/foodItem";

@Component({
  selector: "app-food-container",
  templateUrl: "./food-container.component.html",
  styleUrls: ["./food-container.component.scss"],
})
export class FoodContainerComponent implements OnInit {
  food: FoodItem[];
  selected: FoodItem;

  constructor(private fs: FoodService) {}

  ngOnInit() {
    this.fs.getFood().subscribe((data) => (this.food = data));
  }

  selectFood(f: FoodItem) {
    this.selected = { ...f };
  }

  foodSaved(f: FoodItem) {
    let arr = this.food.filter((item) => item.id != f.id);
    arr.push(f);
    this.food = [...arr];
    this.selected = null;
  }
}
