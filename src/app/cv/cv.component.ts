import {Component, OnInit} from '@angular/core';
import {CvService} from './cv.service';
import {CV} from '../models/cv.model';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'app-home',
    templateUrl: './cv.component.html',
    styleUrls: ['./cv.component.css'],
    providers: [CvService]
})
export class CvComponent implements OnInit {
    constructor(private cvService: CvService) {
    }

    ngOnInit() {
    }

    get cv(): Observable<CV> {
        return this.cvService.cv;
    }
}
