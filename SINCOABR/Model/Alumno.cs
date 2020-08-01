using System;
using System.Collections.Generic;

namespace SINCOABR.Model
{
    public partial class Alumno
    {
        public Alumno()
        {
            AlumnoXmateria = new HashSet<AlumnoXmateria>();
        }

        public int AlumnoId { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string Ciudad { get; set; }
        public string Sexo { get; set; }

        public virtual ICollection<AlumnoXmateria> AlumnoXmateria { get; set; }
    }
}
