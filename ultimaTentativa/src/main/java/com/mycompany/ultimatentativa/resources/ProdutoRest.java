package com.mycompany.ultimatentativa.resources;

import com.mycompany.ultimatentativa.Produto;
import com.mycompany.ultimatentativa.repositorio.ProdutoRepositorio;
import java.util.List;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 *
 * @author 
 */
@Path("produto")
public class ProdutoRest {
    @Inject
    ProdutoRepositorio repositorio;
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Produto> todos(){
        return repositorio.findAll();
    }
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public void create(Produto pessoa){
        repositorio.create(pessoa);
    }
    
    @PUT
    @Path("{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public void update(@PathParam("id") String id, Produto pessoa){
        repositorio.edit(pessoa);
    }
    
    @DELETE
    @Path("{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public void delete(@PathParam("id") String id){
        repositorio.remove(repositorio.find(id));
    }
}
