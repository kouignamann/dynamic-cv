import {Component, HostListener, OnInit} from "@angular/core";
import {DataService} from "../core/service/data.service";
import {Category} from "../core/core.model";

export var TITLE_CONTAINER_WIDTH: number = 200;
export var TITLE_CONTAINER_BORDER_LENGTH: number = 30;
export var ROTATION_OFFSET: number = 0.75 * Math.PI;

@Component({
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    public categories: Array<Category>;
    private innerWidth: any;
    private innerHeight: any;

    constructor(private dataService: DataService) {
        this.categories = this.dataService.getCategories();
    }

    ngOnInit(): void {
        this.onResize();
    }

    @HostListener('window:resize', ['$event'])
    onResize() {
        this.innerWidth = window.innerWidth;
        this.innerHeight = window.innerHeight;
        this.computeIconPositions();
    }

    private computeIconPositions() {
        let topOffset = (this.innerHeight - TITLE_CONTAINER_BORDER_LENGTH) / 2;
        let leftOffset = (this.innerWidth - TITLE_CONTAINER_BORDER_LENGTH) / 2;
        let iconCircleRadius = (TITLE_CONTAINER_WIDTH + TITLE_CONTAINER_BORDER_LENGTH) / 2;
        let titleCircleRadius = this.innerWidth * 0.4;
        let rotationThreshold = 2 * Math.PI / this.categories.length;
        this.categories.forEach((category, index) => {
            category.iconPositionTop = topOffset - (iconCircleRadius * Math.sin((index * rotationThreshold) + ROTATION_OFFSET));
            category.iconPositionLeft = leftOffset + (iconCircleRadius * Math.cos((index * rotationThreshold) + ROTATION_OFFSET));
            category.titlePositionTop = topOffset - (titleCircleRadius * Math.sin((index * rotationThreshold) + ROTATION_OFFSET));
            category.titlePositionLeft = leftOffset + (titleCircleRadius * Math.cos((index * rotationThreshold) + ROTATION_OFFSET));
        })
    }
}
