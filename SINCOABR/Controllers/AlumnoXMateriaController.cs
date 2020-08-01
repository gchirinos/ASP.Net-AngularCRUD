using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SINCOABR.Model;

namespace SINCOABR.Controllers
{
    public class AlumnoXMateriaController : Controller
    {
        AlumnoXMateriaDataAccess objAlumnoxMateria = new AlumnoXMateriaDataAccess();

        [HttpGet]
        [Route("api/AlumnoXMateria/Index")]
        public IEnumerable<AlumnoXmateria> Index()
        {
            return objAlumnoxMateria.GetAlumnosXMateria();
        }

        [HttpPost]
        [Route("api/AlumnoXMateria/Create")]
        public int Create([FromBody] AlumnoXmateria alumnoXmateria)
        {
            return objAlumnoxMateria.AddAlumnoXMateria(alumnoXmateria);
        }

        [HttpGet]
        [Route("api/AlumnoXMateria/Details/{id}")]
        public AlumnoXmateria Details(int id)
        {
            return objAlumnoxMateria.GetAlumnoxMateriaData(id);
        }

        [HttpGet]
        [Route("api/AlumnoXMateriaIdAlumno/Details/{idAlumno}")]
        public IEnumerable<AlumnoXmateria> DetailsAlumnoXMateria(int idAlumno)
        {
            return objAlumnoxMateria.GetAlumnoxMateriaDataAlumnosId(idAlumno);
        }

        [HttpGet]
        [Route("api/AlumnoXMateriaInnerJoin/Details/{idAlumno}")]
        public IEnumerable<object> DetailsAlumnoXMateriaInnerJoin(int idAlumno)
        {
            return objAlumnoxMateria.GetAlumnoxMateriaInner(idAlumno);
        }

        [HttpDelete]
        [Route("api/AlumnoXMateria/Delete/{id}")]
        public int Delete(int id)
        {
            return objAlumnoxMateria.DeleteAlumnoXMateria(id);
        }

        [HttpGet]
        [Route("api/AlumnoXMateria/GetMateriasList")]
        public IEnumerable<Materia> Details()
        {
            return objAlumnoxMateria.GetMaterias();
        }
    }
}