import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FetchProfesorComponent } from '../fetchprofesores/fetchprofesor.component';
import { ProfesorServicio } from '../../servicios/profesorservice.service'

@Component({
    templateUrl: './AddProfesor.component.html'
})

export class createProfesor implements OnInit {
    profesorForm: FormGroup;
    titulo: string = "Crear";
    profesorId: number = 0;
    errorMessage: any;
    ciudadList: Array<any> = [];

    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private profesorService: ProfesorServicio, private _router: Router) {
        if (this._avRoute.snapshot.params["id"]) {
            this.profesorId = this._avRoute.snapshot.params["id"];
        }

        this.profesorForm = this._fb.group({
            profesorId: 0,
            nombre: ['', [Validators.required]],
            apellido: ['', [Validators.required]],
            sexo: ['', [Validators.required]],
            ciudad: ['', [Validators.required]]

        })
    }

    ngOnInit() {

        this.profesorService.getCiudadLista().subscribe(
            data => this.ciudadList = data
        )

        if (this.profesorId > 0) {
            this.titulo = "Edit";
            this.profesorService.getProfesorById(this.profesorId)
                .subscribe(resp => this.profesorForm.setValue(resp)
                    , error => this.errorMessage = error);
        }

    }

    save() {

        if (!this.profesorForm.valid) {
            return;
        }

        if (this.titulo == "Crear") {
            this.profesorService.saveProfesor(this.profesorForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/fetch-profesor']);
                }, error => this.errorMessage = error)
        }
        else if (this.titulo == "Edit") {
            this.profesorService.updateProfesor(this.profesorForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/fetch-profesor']);
                }, error => this.errorMessage = error)
        }
    }

    cancel() {
        this._router.navigate(['/fetch-profesor']);
    }

    get nombre() { return this.profesorForm.get('nombre'); }
    get apellido() { return this.profesorForm.get('apellido'); }
    get ciudad() { return this.profesorForm.get('ciudad'); }
    get sexo() { return this.profesorForm.get('sexo'); }
}