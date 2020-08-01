using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace SINCOABR.Model
{
    public partial class SincoABRContext : DbContext
    {
        public SincoABRContext()
        {
        }

        public SincoABRContext(DbContextOptions<SincoABRContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Alumno> Alumno { get; set; }
        public virtual DbSet<AlumnoXmateria> AlumnoXmateria { get; set; }
        public virtual DbSet<Ciudades> Ciudades { get; set; }
        public virtual DbSet<Materia> Materia { get; set; }
        public virtual DbSet<Periodo> Periodo { get; set; }
        public virtual DbSet<Profesor> Profesor { get; set; }
        public virtual DbSet<Sexo> Sexo { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=LAPTOP-44I7DOJ2;Database=SincoABR; Trusted_Connection=true");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Alumno>(entity =>
            {
                entity.Property(e => e.Apellido)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Ciudad)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Nombre)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Sexo)
                    .IsRequired()
                    .HasMaxLength(6)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<AlumnoXmateria>(entity =>
            {
                entity.ToTable("AlumnoXMateria");

                entity.Property(e => e.Calificacion)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.IdAlumno).HasColumnName("idAlumno");

                entity.HasOne(d => d.IdAlumnoNavigation)
                    .WithMany(p => p.AlumnoXmateria)
                    .HasForeignKey(d => d.IdAlumno)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_AlumnoXMateria_Alumno");

                entity.HasOne(d => d.IdMateriaNavigation)
                    .WithMany(p => p.AlumnoXmateria)
                    .HasForeignKey(d => d.IdMateria)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_AlumnoXMateria_Materia");

                entity.HasOne(d => d.IdPeriodoNavigation)
                    .WithMany(p => p.AlumnoXmateria)
                    .HasForeignKey(d => d.IdPeriodo)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_AlumnoXMateria_Periodo");
            });

            modelBuilder.Entity<Ciudades>(entity =>
            {
                entity.Property(e => e.CiudadesId).HasColumnName("CiudadesID");

                entity.Property(e => e.NombreCiudades)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Materia>(entity =>
            {
                entity.Property(e => e.Materia1)
                    .IsRequired()
                    .HasColumnName("Materia")
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Periodo>(entity =>
            {
                entity.Property(e => e.FechaFin).HasColumnType("datetime");

                entity.Property(e => e.FechaInicio).HasColumnType("datetime");

                entity.Property(e => e.Nombre)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Profesor>(entity =>
            {
                entity.Property(e => e.Apellido)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Ciudad)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Nombre)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Sexo)
                    .IsRequired()
                    .HasMaxLength(6)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Sexo>(entity =>
            {
                entity.Property(e => e.SexoId).HasColumnName("SexoID");

                entity.Property(e => e.NombreSexo)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
