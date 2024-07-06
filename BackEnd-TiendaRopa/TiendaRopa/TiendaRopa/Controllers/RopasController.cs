using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TiendaRopa.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TiendaRopa.Controllers
{
    [Route("api/[controller]")]
    public class RopasController : Controller
    {

        //Variable de contexto de BD
        private readonly TiendaRopaContext _baseDatos;

        public RopasController(TiendaRopaContext baseDatos)
        {
            this._baseDatos = baseDatos;
        }



        //Método GET ListaTareas
        [HttpGet]
        [Route("ListaRopa")]
        public async Task<IActionResult> Lista()
        {
            var listaTareas = await _baseDatos.Ropas.ToListAsync();
            return Ok(listaTareas);
        }

  

        
    }
}

