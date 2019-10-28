package com.mycompany.ultimatentativa.resources;

import com.mycompany.ultimatentativa.Pessoa;
import com.mycompany.ultimatentativa.Produto;
import com.mycompany.ultimatentativa.repositorio.ProdutoRepositorio;
import java.util.List;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 *
 * @author 
 */
@Path("login")
public class LoginRest {
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
    public boolean create(Object login){
        Pessoa logar = (Pessoa) login;
        PessoaRest teste = new PessoaRest();
        Pessoa encontradaOuNao = teste.findByEmail(logar.getEmail());
        
        if(logar.getEmail().equals(encontradaOuNao.getEmail())){
            if(logar.getSenha().equals(encontradaOuNao.getSenha())){
                return true;
            }
            return false;
        }
        return false;
    }
    
}
