package com.skilldistillery.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.skilldistillery.entities.Run;

public interface RunRepository extends JpaRepository<Run, Integer> {
	
	List<Run> findByNameLikeOrCommentsLike(@Param("keyword") String keyword, @Param("keyword") String keyword2); // hibernate bug
	List<Run> findByDistanceBetween(Double lowest, Double highest);

}
