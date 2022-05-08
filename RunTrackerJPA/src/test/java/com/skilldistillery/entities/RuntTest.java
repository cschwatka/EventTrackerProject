package com.skilldistillery.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;



	class RuntTest {
		
		private static EntityManagerFactory emf;
		private EntityManager em;
		private Run Run;

		@BeforeAll
		static void setUpBeforeClass() throws Exception {
		    emf = Persistence.createEntityManagerFactory("RunTrackerJPA");
		    
		}

		@AfterAll
		static void tearDownAfterClass() throws Exception {
		    emf.close();
		}

		@BeforeEach
		void setUp() throws Exception {
		    em = emf.createEntityManager();
		    Run = em.find(Run.class, 1);
		}

		@AfterEach
		void tearDown() throws Exception {
		    em.close();
		    Run = null;
		 }

		@Test
		void test_Run_entity_mapping() {
			/*
			 * 
			 */
			assertNotNull(Run);
			assertEquals("Open Space", Run.getName());
		}
		

		

}
