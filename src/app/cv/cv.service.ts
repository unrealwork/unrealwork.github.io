import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {CV} from '../models/cv.model';
import {Injectable} from '@angular/core';

@Injectable()
export class CvService {
    private _cv: CV;
    private $cv: Observable<CV>;

    constructor(private db: AngularFireDatabase) {
        this.$cv = this.db.object('cv')
            .valueChanges()
            .map(o => <CV> o);
        this.$cv.subscribe(value => this._cv = value);
    }

    get cv(): Observable<CV> {
        return this.$cv;
    }
}
