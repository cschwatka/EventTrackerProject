package com.skilldistillery.services;

import java.util.List;

import com.skilldistillery.entities.Run;

public interface RunService {
	
	List<Run> index();
	Run getRunById(int runId);
	Run createRun(Run run);
	boolean deleteRunById(int runId);
	Run updateRun(int runId, Run run);

}
