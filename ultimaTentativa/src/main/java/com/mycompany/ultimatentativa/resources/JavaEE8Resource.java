package com.mycompany.ultimatentativa.resources;

import com.mycompany.ultimatentativa.Pessoa;
import com.mycompany.ultimatentativa.repositorio.PessoaRepositorio;
import java.util.List;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 *
 * @author 
 */
@Path("javaee8")
public class JavaEE8Resource {
    @Inject
    PessoaRepositorio repositorio;
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Pessoa> ping(){
        return repositorio.findAll();
    }
}
