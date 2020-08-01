using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SINCOABR.Model;

namespace SINCOABR.Controllers
{
    public class MateriaController : Controller
    {
        MateriaDataAccess objMateria = new MateriaDataAccess();

        [HttpGet]
        [Route("api/Materia/Index")]
        public IEnumerable<Materia> Index()
        {
            return objMateria.GetMaterias();
        }

        [HttpPost]
        [Route("api/Materia/Create")]
        public int Create([FromBody] Materia materia)
        {
            return objMateria.AddMateria(materia);
        }

        [HttpGet]
        [Route("api/Materia/Details/{id}")]
        public Materia Details(int id)
        {
            return objMateria.GetMateriaData(id);
        }

        [HttpPut]
        [Route("api/Materia/Edit")]
        public int Edit([FromBody]Materia materia)
        {
            return objMateria.UpdateMateria(materia);
        }

        [HttpDelete]
        [Route("api/Materia/Delete/{id}")]
        public int Delete(int id)
        {
            return objMateria.DeleteMateria(id);
        }
    }
}