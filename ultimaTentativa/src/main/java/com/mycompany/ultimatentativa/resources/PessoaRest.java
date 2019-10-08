package com.mycompany.ultimatentativa.resources;

import com.mycompany.ultimatentativa.Pessoa;
import com.mycompany.ultimatentativa.repositorio.PessoaRepositorio;
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
@Path("pessoa")
public class PessoaRest {
    @Inject
    PessoaRepositorio repositorio;
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Pessoa> todos(){
        return repositorio.findAll();
    }
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public void create(Pessoa pessoa){
        repositorio.create(pessoa);
    }
    
    @PUT
    @Path("{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public void update(@PathParam("id") String id, Pessoa pessoa){
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
