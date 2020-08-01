using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SINCOABR.Model;

namespace SINCOABR.Controllers
{
    public class AlumnoController : Controller
    {
        AlumnoDataAccess objAlumno = new AlumnoDataAccess();

        [HttpGet]
        [Route("api/Alumno/Index")]
        public IEnumerable<Alumno> Index()
        {
            return objAlumno.GetAlumnos();
        }

        [HttpPost]
        [Route("api/Alumno/Create")]
        public int Create([FromBody] Alumno alumno)
        {
            return objAlumno.AddAlumno(alumno);
        }

        [HttpGet]
        [Route("api/Alumno/Details/{id}")]
        public Alumno Details(int id)
        {
            return objAlumno.GetAlumnoData(id);
        }

        [HttpPut]
        [Route("api/Alumno/Edit")]
        public int Edit([FromBody]Alumno alumno)
        {
            return objAlumno.UpdateAlumno(alumno);
        }

        [HttpDelete]
        [Route("api/Alumno/Delete/{id}")]
        public int Delete(int id)
        {
            return objAlumno.DeleteAlumno(id);
        }

        [HttpGet]
        [Route("api/Alumno/GetCiudadesList")]
        public IEnumerable<Ciudades> Details()
        {
            return objAlumno.GetCiudades();
        }
    }
}