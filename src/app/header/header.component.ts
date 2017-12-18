import {Component, OnInit} from '@angular/core';
import {MenuItem} from '../models/menu.item.model';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    items: Array<MenuItem>;
    selected: MenuItem;

    constructor(private titleService: Title) {
        this.items = [new MenuItem('CV', '/cv')];
        this.onSelect(this.items[0]);
    }

    ngOnInit() {
    }

    onSelect(item) {
        this.selected = item;
        this.titleService.setTitle(item.name);
    }
}
