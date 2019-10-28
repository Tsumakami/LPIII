/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.ultimatentativa.repositorio;

import com.mycompany.ultimatentativa.Pessoa;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

/**
 *
 * @author joao
 */
public class PessoaRepositorio extends AbstractFacade<Pessoa> {
 
    private final EntityManagerFactory
            factory;
    private final EntityManager
            entityManager;
    
    public PessoaRepositorio() {
        super(Pessoa.class);
        this.factory = 
            Persistence
        .createEntityManagerFactory("persistente");
        this.entityManager = 
           this.factory.createEntityManager();
        
    }

    @Override
    protected EntityManager getEntityManager() {
        return entityManager;
        
    }

}
