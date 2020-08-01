using System;
using System.Collections.Generic;

namespace SINCOABR.Model
{
    public partial class AlumnoXmateria
    {
        public int Id { get; set; }
        public int IdAlumno { get; set; }
        public int IdPeriodo { get; set; }
        public int IdMateria { get; set; }
        public string Calificacion { get; set; }

        public virtual Alumno IdAlumnoNavigation { get; set; }
        public virtual Materia IdMateriaNavigation { get; set; }
        public virtual Periodo IdPeriodoNavigation { get; set; }
    }
}
