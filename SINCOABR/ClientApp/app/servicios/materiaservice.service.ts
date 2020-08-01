import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class MateriaServicio {
    myAppUrl: string = "";

    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }

    getMaterias() {
        return this._http.get(this.myAppUrl + 'api/Materia/Index')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    getMateriaById(id: number) {
        return this._http.get(this.myAppUrl + "api/Materia/Details/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    saveMateria(materia) {
        return this._http.post(this.myAppUrl + 'api/Materia/Create', materia)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    updateMateria(materia) {
        return this._http.put(this.myAppUrl + 'api/Materia/Edit', materia)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    deleteMateria(id) {
        return this._http.delete(this.myAppUrl + "api/Materia/Delete/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}