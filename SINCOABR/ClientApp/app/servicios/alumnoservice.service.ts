import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AlumnoServicio {
    myAppUrl: string = "";

    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }

    getCiudadLista() {
        return this._http.get(this.myAppUrl + 'api/Alumno/GetCiudadesList')
            .map(res => res.json())
            .catch(this.errorHandler);
    }

    getAlumnos() {
        return this._http.get(this.myAppUrl + 'api/Alumno/Index')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    getAlumnoById(id: number) {
        return this._http.get(this.myAppUrl + "api/Alumno/Details/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    saveAlumno(alumno) {
        return this._http.post(this.myAppUrl + 'api/Alumno/Create', alumno)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    updateAlumno(alumno) {
        return this._http.put(this.myAppUrl + 'api/alumno/Edit', alumno)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    deleteAlumno(id) {
        return this._http.delete(this.myAppUrl + "api/Alumno/Delete/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}