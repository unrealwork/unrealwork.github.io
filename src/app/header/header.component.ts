import {Component, OnInit} from '@angular/core';
import {MenuItem} from '../models/menu.item.model';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    items: Array<MenuItem>;
    selected: MenuItem;

    constructor() {
        this.items = [
            new MenuItem('Home', '/'), new MenuItem('CV', '/cv')];
        this.selected = this.items[0];
    }

    ngOnInit() {
    }

    onSelect(item) {
        this.selected = item;
    }
}
