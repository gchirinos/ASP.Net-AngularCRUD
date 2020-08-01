using System;
using System.Collections.Generic;

namespace SINCOABR.Model
{
    public partial class Periodo
    {
        public Periodo()
        {
            AlumnoXmateria = new HashSet<AlumnoXmateria>();
        }

        public int Id { get; set; }
        public string Nombre { get; set; }
        public DateTime FechaInicio { get; set; }
        public DateTime FechaFin { get; set; }

        public virtual ICollection<AlumnoXmateria> AlumnoXmateria { get; set; }
    }
}
