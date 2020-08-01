import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FetchAlumnoComponent } from '../fetchalumnos/fetchalumno.component';
import { AlumnoServicio } from '../../servicios/alumnoservice.service'

@Component({
    templateUrl: './AddAlumno.component.html'
})

export class createAlumno implements OnInit {
    alumnoForm: FormGroup;
    titulo: string = "Crear";
    alumnoId: number = 0;
    errorMessage: any;
    ciudadList: Array<any> = [];

    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private alumnoService: AlumnoServicio, private _router: Router) {
        if (this._avRoute.snapshot.params["id"]) {
            this.alumnoId = this._avRoute.snapshot.params["id"];
        }

        this.alumnoForm = this._fb.group({
            alumnoId: 0,
            nombre: ['', [Validators.required]],
            apellido: ['', [Validators.required]],
            sexo: ['', [Validators.required]],
            ciudad: ['', [Validators.required]]
            
        })
    }

    ngOnInit() {

        this.alumnoService.getCiudadLista().subscribe(
            data => this.ciudadList = data
        )

        if (this.alumnoId > 0) {
            this.titulo = "Edit";
            this.alumnoService.getAlumnoById(this.alumnoId)
                .subscribe(resp => this.alumnoForm.setValue(resp)
                    , error => this.errorMessage = error);
        }

    }

    save() {

        if (!this.alumnoForm.valid) {
            return;
        }

        if (this.titulo == "Crear") {
            this.alumnoService.saveAlumno(this.alumnoForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/fetch-alumno']);
                }, error => this.errorMessage = error)
        }
        else if (this.titulo == "Edit") {
            this.alumnoService.updateAlumno(this.alumnoForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/fetch-alumno']);
                }, error => this.errorMessage = error)
        }
    }

    cancel() {
        this._router.navigate(['/fetch-alumno']);
    }

    get nombre() { return this.alumnoForm.get('nombre'); }
    get apellido() { return this.alumnoForm.get('apellido'); }
    get ciudad() { return this.alumnoForm.get('ciudad'); }
    get sexo() { return this.alumnoForm.get('sexo'); }
}