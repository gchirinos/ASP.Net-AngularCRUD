import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ProfesorServicio {
    myAppUrl: string = "";

    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }

    getCiudadLista() {
        return this._http.get(this.myAppUrl + 'api/Profesor/GetCiudadesList')
            .map(res => res.json())
            .catch(this.errorHandler);
    }

    getProfesores() {
        return this._http.get(this.myAppUrl + 'api/Profesor/Index')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    getProfesorById(id: number) {
        return this._http.get(this.myAppUrl + "api/Profesor/Details/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    saveProfesor(profesor) {
        return this._http.post(this.myAppUrl + 'api/Profesor/Create', profesor)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    updateProfesor(profesor) {
        return this._http.put(this.myAppUrl + 'api/Profesor/Edit', profesor)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    deleteProfesor(id) {
        return this._http.delete(this.myAppUrl + "api/Profesor/Delete/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}