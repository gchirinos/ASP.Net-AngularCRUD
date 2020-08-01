using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Data.OData.Query.SemanticAst;
using Microsoft.VisualStudio.Web.CodeGeneration.Contracts.Messaging;

namespace SINCOABR.Model
{
    public class AlumnoXMateriaDataAccess
    {
        SincoABRContext db = new SincoABRContext();
        public IEnumerable<AlumnoXmateria> GetAlumnosXMateria()
        {
            try
            {
                return db.AlumnoXmateria.ToList();
            }
            catch
            {
                throw;
            }
        }

        // Add nuevo registro de alumnoXmateria   
        public int AddAlumnoXMateria(AlumnoXmateria alumnoXmateria)
        {
            try
            {
                db.AlumnoXmateria.Add(alumnoXmateria);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Get los detalles alumnoXmateria
        public AlumnoXmateria GetAlumnoxMateriaData(int id)
        {
            try
            {
                AlumnoXmateria alumnoXmateria = db.AlumnoXmateria.Find(id);
                return alumnoXmateria;
            }
            catch
            {
                throw;
            }
        }

        //Get los detalles alumnoXmateriaAlumnosId
        public List<AlumnoXmateria> GetAlumnoxMateriaDataAlumnosId(int idAlumnos)
        {
            try
            {
                List<AlumnoXmateria> result = db.AlumnoXmateria.Where(x => x.IdAlumno == idAlumnos).ToList();
                return result;
            }
            catch
            {
                throw;
            }
        }

        //Get los detalles innerJoin
        public List<object> GetAlumnoxMateriaInner(int idAlumnos)
        {
            List<object> result;
            try
            {
                if (idAlumnos > 0)
                {
                    IQueryable<object> query;
                    query = (from alumnoXmateria in db.AlumnoXmateria
                        join materia in db.Materia on alumnoXmateria.IdMateria equals materia.Id
                        join alumno in db.Alumno on alumnoXmateria.IdAlumno equals alumno.AlumnoId
                        where alumnoXmateria.IdAlumno == idAlumnos
                        select new
                        {
                            alumnoXmateria.Id,
                            alumnoXmateria.IdAlumno,
                            alumno.Nombre,
                            alumno.Apellido,
                            alumnoXmateria.Calificacion,
                            materia.Materia1
                        });
                    result = query.ToList();

                    if (result.Count == 0)
                    {
                        query = from alumno in db.Alumno
                            where alumno.AlumnoId == idAlumnos
                            select new
                            {
                                IdAlumno = alumno.AlumnoId
                            };
                        result = query.ToList();
                    }
                }

                else
                {
                    IQueryable<object> query;
                    query = (from alumnoXmateria in db.AlumnoXmateria
                        join materia in db.Materia on alumnoXmateria.IdMateria equals materia.Id
                        join alumno in db.Alumno on alumnoXmateria.IdAlumno equals alumno.AlumnoId
                        select new
                        {
                            alumnoXmateria.Id,
                            alumnoXmateria.IdAlumno,
                            alumno.Nombre,
                            alumno.Apellido,
                            alumnoXmateria.Calificacion,
                            materia.Materia1
                        });
                            result = query.ToList();
                }
                
                return result;
            }
            catch
            {
                throw;
            }
        }

        // Delete alumnoXmateria  
        public int DeleteAlumnoXMateria(int id)
        {
            try
            {
                AlumnoXmateria alumnoXmateria = db.AlumnoXmateria.Find(id);
                db.AlumnoXmateria.Remove(alumnoXmateria);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        // Get the list Materias  
        public List<Materia> GetMaterias()
        {
            List<Materia> listaMaterias = new List<Materia>();
            listaMaterias = (from materialist in db.Materia select materialist).ToList();

            return listaMaterias;
        }
    }
}
