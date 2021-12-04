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

        public virtual DbSet<Especialidade> Especialidades { get; set; }
        public virtual DbSet<Formulario> Formularios { get; set; }
        public virtual DbSet<ImagemLoja> ImagemLojas { get; set; }
        public virtual DbSet<Loja> Lojas { get; set; }
        public virtual DbSet<TiposUsuario> TiposUsuarios { get; set; }
        public virtual DbSet<Usuario> Usuarios { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=LAPTOP-II7UP0KL; initial catalog=Eletronicos; user Id=sa; pwd=Senai@132;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Latin1_General_CI_AS");

            modelBuilder.Entity<Especialidade>(entity =>
            {
                entity.HasKey(e => e.IdEspecialidade)
                    .HasName("PK__Especial__40969805C92B0572");

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
                    .HasName("PK__Formular__3215A82B42FF4EA9");

                entity.ToTable("Formulario");

                entity.Property(e => e.IdFormulario).HasColumnName("idFormulario");

                entity.Property(e => e.Status)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("status");
            });

            modelBuilder.Entity<ImagemLoja>(entity =>
            {
                entity.HasKey(e => e.IdImagem)
                    .HasName("PK__imagemLo__EA9A7137B283D66C");

                entity.ToTable("imagemLoja");

                entity.HasIndex(e => e.IdLoja, "UQ__imagemLo__1B95BE16DA80B338")
                    .IsUnique();

                entity.Property(e => e.IdImagem).HasColumnName("idImagem");

                entity.Property(e => e.Binario)
                    .IsRequired()
                    .HasColumnName("binario");

                entity.Property(e => e.DataInclusao)
                    .HasColumnType("datetime")
                    .HasColumnName("dataInclusao")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.IdLoja).HasColumnName("idLoja");

                entity.Property(e => e.MimeType)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("mimeType");

                entity.Property(e => e.NomeArquivo)
                    .IsRequired()
                    .HasMaxLength(250)
                    .IsUnicode(false)
                    .HasColumnName("nomeArquivo");

                entity.HasOne(d => d.IdLojaNavigation)
                    .WithOne(p => p.ImagemLoja)
                    .HasForeignKey<ImagemLoja>(d => d.IdLoja)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__imagemLoj__idLoj__22CA2527");
            });

            modelBuilder.Entity<Loja>(entity =>
            {
                entity.HasKey(e => e.IdLoja)
                    .HasName("PK__Loja__1B95BE17C36D173F");

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

                entity.Property(e => e.Cnpj)
                    .HasMaxLength(18)
                    .IsUnicode(false)
                    .HasColumnName("CNPJ");

                entity.Property(e => e.Complemento)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("complemento");

                entity.Property(e => e.IdEspecialidade).HasColumnName("idEspecialidade");

                entity.Property(e => e.IdFormulario).HasColumnName("idFormulario");

                entity.Property(e => e.IdUsuario).HasColumnName("idUsuario");

                entity.Property(e => e.N)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.NomeComercio)
                    .IsRequired()
                    .HasMaxLength(300)
                    .IsUnicode(false)
                    .HasColumnName("nomeComercio");

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

                entity.Property(e => e.Uf)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("UF");

                entity.HasOne(d => d.IdEspecialidadeNavigation)
                    .WithMany(p => p.Lojas)
                    .HasForeignKey(d => d.IdEspecialidade)
                    .HasConstraintName("FK__Loja__idEspecial__1E05700A");

                entity.HasOne(d => d.IdFormularioNavigation)
                    .WithMany(p => p.Lojas)
                    .HasForeignKey(d => d.IdFormulario)
                    .HasConstraintName("FK__Loja__idFormular__1EF99443");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Lojas)
                    .HasForeignKey(d => d.IdUsuario)
                    .HasConstraintName("FK__Loja__idUsuario__1D114BD1");
            });

            modelBuilder.Entity<TiposUsuario>(entity =>
            {
                entity.HasKey(e => e.IdTiposUsuario)
                    .HasName("PK__TiposUsu__E45DC1B54871C3FD");

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
                    .HasName("PK__Usuario__3940559A5017563A");

                entity.ToTable("Usuario");

                entity.HasIndex(e => e.Celular, "UQ__Usuario__2E4973E71BEC0E07")
                    .IsUnique();

                entity.HasIndex(e => e.Email, "UQ__Usuario__AB6E6164199EA781")
                    .IsUnique();

                entity.HasIndex(e => e.Cpf, "UQ__Usuario__C1F897312547B169")
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

                entity.Property(e => e.N)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.NomeCompleto)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nomeCompleto");

                entity.Property(e => e.Rua)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("rua");

                entity.Property(e => e.Senha)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("senha");

                entity.Property(e => e.Uf)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("UF");

                entity.HasOne(d => d.IdTiposUsuarioNavigation)
                    .WithMany(p => p.Usuarios)
                    .HasForeignKey(d => d.IdTiposUsuario)
                    .HasConstraintName("FK__Usuario__idTipos__184C96B4");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
