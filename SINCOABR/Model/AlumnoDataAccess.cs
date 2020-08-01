using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace SINCOABR.Model
{
    public class AlumnoDataAccess
    {
        SincoABRContext db = new SincoABRContext();

        public IEnumerable<Alumno> GetAlumnos()
        {
            try
            {
                return db.Alumno.ToList();
            }
            catch
            {
                throw;
            }
        }

        // Add nuevo registro de alumno   
        public int AddAlumno(Alumno alumno)
        {
            try
            {
                db.Alumno.Add(alumno);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        // Update los registros de los alumnos 
        public int UpdateAlumno(Alumno alumno)
        {
            try
            {
                db.Entry(alumno).State = EntityState.Modified;
                db.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Get los detalles alumnos
        public Alumno GetAlumnoData(int id)
        {
            try
            {
                Alumno alumno = db.Alumno.Find(id);
                return alumno;
            }
            catch
            {
                throw;
            }
        }

        // Delete alumno  
        public int DeleteAlumno(int id)
        {
            try
            {
                Alumno alumno = db.Alumno.Find(id);
                db.Alumno.Remove(alumno);
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

        // Get the list Sexo  
        public List<Sexo> GetSexo()
        {
            List<Sexo> listaSexo = new List<Sexo>();
            listaSexo = (from listaSex in db.Sexo select listaSex).ToList();

            return listaSexo;
        }
    }
}
