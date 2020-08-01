import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AlumnoXMateriaServicio {
    myAppUrl: string = "";

    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }

    getMateriaLista() {
        return this._http.get(this.myAppUrl + 'api/AlumnoXMateria/GetMateriasList')
            .map(res => res.json())
            .catch(this.errorHandler);
    }

    getAlumnosXMaterias() {
        return this._http.get(this.myAppUrl + 'api/AlumnoXMateria/Index')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    getAlumnoXMateriaById(id: number) {
        return this._http.get(this.myAppUrl + "api/AlumnoXMateria/Details/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    getAlumnoXMateriaByIdAlumno(idAlumno: number) {
        return this._http.get(this.myAppUrl + "api/AlumnoXMateriaIdAlumno/Details/" + idAlumno)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    getAlumnoXMateriaInnerJoin(idAlumno: number) {
        return this._http.get(this.myAppUrl + "api/AlumnoXMateriaInnerJoin/Details/" + idAlumno)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    saveAlumnoXMateria(alumnoXmateria) {
        return this._http.post(this.myAppUrl + 'api/AlumnoXMateria/Create', alumnoXmateria)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    deleteAlumnoXMateria(id) {
        return this._http.delete(this.myAppUrl + "api/AlumnoXMateria/Delete/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}