using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace SINCOABR.Model
{
    public class ProfesorDataAccess
    {
        SincoABRContext db = new SincoABRContext();

        public IEnumerable<Profesor> GetProfesores()
        {
            try
            {
                return db.Profesor.ToList();
            }
            catch
            {
                throw;
            }
        }

        // Add nuevo registro de profesor   
        public int AddProfesor(Profesor profesor)
        {
            try
            {
                db.Profesor.Add(profesor);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        // Update los registros de los profesor 
        public int UpdateProfesor(Profesor profesor)
        {
            try
            {
                db.Entry(profesor).State = EntityState.Modified;
                db.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Get los detalles profesor
        public Profesor GetProfesorData(int id)
        {
            try
            {
                Profesor profesor = db.Profesor.Find(id);
                return profesor;
            }
            catch
            {
                throw;
            }
        }

        // Delete profesor  
        public int DeleteProfesor(int id)
        {
            try
            {
                Profesor profesor = db.Profesor.Find(id);
                db.Profesor.Remove(profesor);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        // Get the list Ciudades  
        public List<Ciudades> GetCiudades()
        {
            List<Ciudades> listaCiudades = new List<Ciudades>();
            listaCiudades = (from cityList in db.Ciudades select cityList).ToList();

            return listaCiudades;
        }
    }
}
