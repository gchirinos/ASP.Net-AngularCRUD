using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SINCOABR.Model;

namespace SINCOABR.Controllers
{
    public class ProfesorController : Controller
    {
        ProfesorDataAccess _objProfesor = new ProfesorDataAccess();

        [HttpGet]
        [Route("api/Profesor/Index")]
        public IEnumerable<Profesor> Index()
        {
            return _objProfesor.GetProfesores();
        }

        [HttpPost]
        [Route("api/Profesor/Create")]
        public int Create([FromBody] Profesor profesor)
        {
            return _objProfesor.AddProfesor(profesor);
        }

        [HttpGet]
        [Route("api/Profesor/Details/{id}")]
        public Profesor Details(int id)
        {
            return _objProfesor.GetProfesorData(id);
        }

        [HttpPut]
        [Route("api/Profesor/Edit")]
        public int Edit([FromBody]Profesor profesor)
        {
            return _objProfesor.UpdateProfesor(profesor);
        }

        [HttpDelete]
        [Route("api/Profesor/Delete/{id}")]
        public int Delete(int id)
        {
            return _objProfesor.DeleteProfesor(id);
        }

        [HttpGet]
        [Route("api/Profesor/GetCiudadesList")]
        public IEnumerable<Ciudades> Details()
        {
            return _objProfesor.GetCiudades();
        }
    }
}