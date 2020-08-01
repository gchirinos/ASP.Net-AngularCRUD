using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace SINCOABR.Model
{
    public class MateriaDataAccess
    {
        SincoABRContext db = new SincoABRContext();

        public IEnumerable<Materia> GetMaterias()
        {
            try
            {
                return db.Materia.ToList();
            }
            catch
            {
                throw;
            }
        }

        // Add nuevo registro de materia   
        public int AddMateria(Materia materia)
        {
            try
            {
                db.Materia.Add(materia);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        // Update los registros de las materias 
        public int UpdateMateria(Materia materia)
        {
            try
            {
                db.Entry(materia).State = EntityState.Modified;
                db.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Get los detalles alumnos por Id
        public Materia GetMateriaData(int id)
        {
            try
            {
                Materia materia = db.Materia.Find(id);
                return materia;
            }
            catch
            {
                throw;
            }
        }

        // Delete materia  
        public int DeleteMateria(int id)
        {
            try
            {
                Materia materia = db.Materia.Find(id);
                db.Materia.Remove(materia);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
    }
}
