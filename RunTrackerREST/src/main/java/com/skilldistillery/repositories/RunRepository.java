package com.skilldistillery.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.entities.Run;

public interface RunRepository extends JpaRepository<Run, Integer> {
	
//	List<Run> findByCategory_Id(Integer id);

}
