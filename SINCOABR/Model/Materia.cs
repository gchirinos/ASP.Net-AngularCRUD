using System;
using System.Collections.Generic;

namespace SINCOABR.Model
{
    public partial class Materia
    {
        public Materia()
        {
            AlumnoXmateria = new HashSet<AlumnoXmateria>();
        }

        public int Id { get; set; }
        public string Materia1 { get; set; }

        public virtual ICollection<AlumnoXmateria> AlumnoXmateria { get; set; }
    }
}
