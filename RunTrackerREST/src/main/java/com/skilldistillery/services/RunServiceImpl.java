package com.skilldistillery.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.entities.Run;
import com.skilldistillery.repositories.RunRepository;

@Service
public class RunServiceImpl implements RunService {

	@Autowired
	RunRepository repo;

	@Override
	public List<Run> index() {
		return repo.findAll();
	}

	@Override
	public Run getRunById(int runId) {
		Optional<Run> op = repo.findById(runId); // findById returns an optional
		if (op.isPresent()) { // check if run in optional
			return op.get(); // return that run

		}
		return null;
	}
	
	@Override
	public Run createRun(Run run) {
		repo.save(run);
		return run;
	}
	
	
	@Override
	public boolean deleteRunById(int runId) {
		boolean deleted = false;
		Optional<Run> opt = repo.findById(runId);
		if (opt.isPresent()) {
			repo.deleteById(runId);
			deleted = true;
		}
		return deleted;
	}
	
	@Override
	public Run updateRun(int runId, Run run) {
		
		Run managed = null;
		Optional<Run> op = repo.findById(runId); // findById returns an optional
		if (op.isPresent()) { // check if run in optional
			managed = op.get(); // return that run
		}
		
		managed.setName(run.getName());;
		repo.saveAndFlush(managed);
		return run;
	
	}
	
	@Override
	public List<Run> findByNameLikeOrCommentsLike(String keyword) {
		keyword = "%" + keyword + "%"; // could have used contains
		return repo.findByNameLikeOrCommentsLike(keyword, keyword);
	}
	
	@Override
	public List<Run> findByDistanceBetween(Double lowest, Double highest) {
		return repo.findByDistanceBetween(lowest, highest);
	}
	
	
}
