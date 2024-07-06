using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace TiendaRopa.Models;

public partial class TiendaRopaContext : DbContext
{
    public TiendaRopaContext()
    {
    }

    public TiendaRopaContext(DbContextOptions<TiendaRopaContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Ropa> Ropas { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) { }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Ropa>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Ropa__3214EC079406510D");

            entity.ToTable("Ropa");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Descripcion).HasMaxLength(255).HasColumnName("descripcion");
            entity.Property(e => e.Nombre).HasMaxLength(100).HasColumnName("nombre");
            entity.Property(e => e.Precio).HasColumnType("decimal(10, 2)").HasColumnName("precio");
            entity.Property(e => e.Tallas).HasMaxLength(50).HasColumnName("tallas");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
