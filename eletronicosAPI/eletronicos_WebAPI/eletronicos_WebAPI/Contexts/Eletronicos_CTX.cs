using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using eletronicos_WebAPI.Domains;

#nullable disable

namespace eletronicos_WebAPI.Contexts
{
    public partial class Eletronicos_CTX : DbContext
    {
        public Eletronicos_CTX()
        {
        }

        public Eletronicos_CTX(DbContextOptions<Eletronicos_CTX> options)
            : base(options)
        {
        }

        public virtual DbSet<Comentario> Comentarios { get; set; }
        public virtual DbSet<Especialidade> Especialidades { get; set; }
        public virtual DbSet<Formulario> Formularios { get; set; }
        public virtual DbSet<Loja> Lojas { get; set; }
        public virtual DbSet<TiposUsuario> TiposUsuarios { get; set; }
        public virtual DbSet<Usuario> Usuarios { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=LAPTOP-II7UP0KL; initial catalog=Eletronicos; user Id=sa; pwd=Senai@132;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Latin1_General_CI_AS");

            modelBuilder.Entity<Comentario>(entity =>
            {
                entity.HasKey(e => e.IdComentario)
                    .HasName("PK__Comentar__C74515DAD7C93C29");

                entity.ToTable("Comentario");

                entity.Property(e => e.IdComentario).HasColumnName("idComentario");

                entity.Property(e => e.Comentario1)
                    .IsRequired()
                    .HasMaxLength(300)
                    .IsUnicode(false)
                    .HasColumnName("comentario");

                entity.Property(e => e.IdUsuarios).HasColumnName("idUsuarios");

                entity.HasOne(d => d.IdUsuariosNavigation)
                    .WithMany(p => p.Comentarios)
                    .HasForeignKey(d => d.IdUsuarios)
                    .HasConstraintName("FK__Comentari__idUsu__4C364F0E");
            });

            modelBuilder.Entity<Especialidade>(entity =>
            {
                entity.HasKey(e => e.IdEspecialidade)
                    .HasName("PK__Especial__409698058C6E8BD7");

                entity.ToTable("Especialidade");

                entity.Property(e => e.IdEspecialidade).HasColumnName("idEspecialidade");

                entity.Property(e => e.TituloEspecialidade)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("tituloEspecialidade");
            });

            modelBuilder.Entity<Formulario>(entity =>
            {
                entity.HasKey(e => e.IdFormulario)
                    .HasName("PK__Formular__3215A82B6028D934");

                entity.ToTable("Formulario");

                entity.Property(e => e.IdFormulario).HasColumnName("idFormulario");

                entity.Property(e => e.Status)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("status");
            });

            modelBuilder.Entity<Loja>(entity =>
            {
                entity.HasKey(e => e.IdLoja)
                    .HasName("PK__Loja__1B95BE17F5FA9604");

                entity.ToTable("Loja");

                entity.Property(e => e.IdLoja).HasColumnName("idLoja");

                entity.Property(e => e.Cep)
                    .IsRequired()
                    .HasMaxLength(22)
                    .IsUnicode(false)
                    .HasColumnName("CEP");

                entity.Property(e => e.Cidade)
                    .IsRequired()
                    .HasMaxLength(300)
                    .IsUnicode(false)
                    .HasColumnName("cidade");

                entity.Property(e => e.Complemento)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("complemento");

                entity.Property(e => e.IdComentario).HasColumnName("idComentario");

                entity.Property(e => e.IdEspecialidade).HasColumnName("idEspecialidade");

                entity.Property(e => e.IdFormulario).HasColumnName("idFormulario");

                entity.Property(e => e.IdUsuarios).HasColumnName("idUsuarios");

                entity.Property(e => e.Imagem)
                    .IsRequired()
                    .HasMaxLength(200)
                    .HasColumnName("imagem");

                entity.Property(e => e.NomeComercio)
                    .IsRequired()
                    .HasMaxLength(300)
                    .IsUnicode(false)
                    .HasColumnName("nomeComercio");

                entity.Property(e => e.Nº)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Rua)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("rua");

                entity.Property(e => e.Telefone)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("telefone");

                entity.HasOne(d => d.IdComentarioNavigation)
                    .WithMany(p => p.Lojas)
                    .HasForeignKey(d => d.IdComentario)
                    .HasConstraintName("FK__Loja__idComentar__53D770D6");

                entity.HasOne(d => d.IdEspecialidadeNavigation)
                    .WithMany(p => p.Lojas)
                    .HasForeignKey(d => d.IdEspecialidade)
                    .HasConstraintName("FK__Loja__idEspecial__51EF2864");

                entity.HasOne(d => d.IdFormularioNavigation)
                    .WithMany(p => p.Lojas)
                    .HasForeignKey(d => d.IdFormulario)
                    .HasConstraintName("FK__Loja__idFormular__52E34C9D");

                entity.HasOne(d => d.IdUsuariosNavigation)
                    .WithMany(p => p.Lojas)
                    .HasForeignKey(d => d.IdUsuarios)
                    .HasConstraintName("FK__Loja__idUsuarios__50FB042B");
            });

            modelBuilder.Entity<TiposUsuario>(entity =>
            {
                entity.HasKey(e => e.IdTiposUsuario)
                    .HasName("PK__TiposUsu__E45DC1B5E31E3542");

                entity.ToTable("TiposUsuario");

                entity.Property(e => e.IdTiposUsuario).HasColumnName("idTiposUsuario");

                entity.Property(e => e.TituloTiposUsuario)
                    .IsRequired()
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("tituloTiposUsuario");
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.IdUsuarios)
                    .HasName("PK__Usuario__3940559A7F70FC13");

                entity.ToTable("Usuario");

                entity.HasIndex(e => e.Celular, "UQ__Usuario__2E4973E7DBB20C7F")
                    .IsUnique();

                entity.HasIndex(e => e.Email, "UQ__Usuario__AB6E616477050DF6")
                    .IsUnique();

                entity.HasIndex(e => e.Cpf, "UQ__Usuario__C1F8973142048374")
                    .IsUnique();

                entity.Property(e => e.IdUsuarios).HasColumnName("idUsuarios");

                entity.Property(e => e.Celular)
                    .IsRequired()
                    .HasMaxLength(18)
                    .IsUnicode(false)
                    .HasColumnName("celular");

                entity.Property(e => e.Cep)
                    .IsRequired()
                    .HasMaxLength(22)
                    .IsUnicode(false)
                    .HasColumnName("CEP");

                entity.Property(e => e.Cnpj)
                    .HasMaxLength(18)
                    .IsUnicode(false)
                    .HasColumnName("CNPJ");

                entity.Property(e => e.Complemento)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("complemento");

                entity.Property(e => e.Cpf)
                    .IsRequired()
                    .HasMaxLength(14)
                    .IsUnicode(false)
                    .HasColumnName("CPF");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(250)
                    .IsUnicode(false)
                    .HasColumnName("email");

                entity.Property(e => e.IdTiposUsuario).HasColumnName("idTiposUsuario");

                entity.Property(e => e.NomeCompleto)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nomeCompleto");

                entity.Property(e => e.Nº)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Rua)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("rua");

                entity.Property(e => e.Senha)
                    .IsRequired()
                    .HasMaxLength(15)
                    .IsUnicode(false)
                    .HasColumnName("senha");

                entity.HasOne(d => d.IdTiposUsuarioNavigation)
                    .WithMany(p => p.Usuarios)
                    .HasForeignKey(d => d.IdTiposUsuario)
                    .HasConstraintName("FK__Usuario__idTipos__4959E263");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
