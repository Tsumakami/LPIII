/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.ultimatentativa.repositorio;

import com.mycompany.ultimatentativa.Pessoa;
import com.mycompany.ultimatentativa.Produto;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

/**
 *
 * @author joao
 */
public class ProdutoRepositorio extends AbstractFacade<Produto> {
 
    private final EntityManagerFactory
            factory;
    private final EntityManager
            entityManager;
    
    public ProdutoRepositorio() {
        super(Produto.class);
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
