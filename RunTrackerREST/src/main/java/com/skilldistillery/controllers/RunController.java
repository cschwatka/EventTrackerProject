package com.skilldistillery.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.entities.Run;
import com.skilldistillery.services.RunService;

@CrossOrigin({ "*", "http://localhost:4203" })
@RestController
@RequestMapping("api")
public class RunController {

	@Autowired
	private RunService runServ;

	@GetMapping("runs")
	public List<Run> listAllRuns() {
		return runServ.index();
	}

	@GetMapping("runs/{runId}")
	public Run getRunById(@PathVariable Integer runId, HttpServletResponse res) {
		Run run = runServ.getRunById(runId);
		if (run == null) {
			res.setStatus(404);
		}
		return run;
	}

	@PostMapping("runs")
	public Run createRun(@RequestBody Run run, HttpServletRequest req, HttpServletResponse res) {
		try {
			runServ.createRun(run);
			res.setStatus(201); // created, but where?
			StringBuffer url = req.getRequestURL(); // here
			url.append("/").append(run.getId());
			res.setHeader("Location", url.toString());
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400); // bad user
			run = null; // clear the post
		}
		return run;
	}

	
	@PutMapping("runs/{runId}")
	public Run updateRun(
			@PathVariable("runId") Integer runId,
			@RequestBody Run run,
			HttpServletResponse res
	) {
		try {
			run = runServ.updateRun(runId, run);
			if (run == null) {
				res.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
			run = null;
		}
		return run;
	}
	
	
	@DeleteMapping("runs/{runId}")
	public void deleteRun(
			@PathVariable("runId") Integer postId, 
			HttpServletResponse res) {
		try {
			if (runServ.deleteRunById(postId)) {
				res.setStatus(204); // delete succeeded and no response body
			} else {
				res.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400); // t/c perhaps overkill, no child entities
		}
	}
	
	
	@GetMapping("runs/search/{keyword}")
	public List<Run> getRunsByNameOrComments(
			@PathVariable String keyword, 
			HttpServletResponse res) {
		List<Run> runs = runServ.findByNameLikeOrCommentsLike(keyword);
		if (runs == null) {
			res.setStatus(404);
		}
		return runs;

	}
	
	@GetMapping("runs/search/distance/{low}/{high}")
	public List<Run> getRunsWithinDistanceRange(
			@PathVariable Double low,
			@PathVariable Double high,
			HttpServletResponse res) {
		List<Run> runs = runServ.findByDistanceBetween(low, high);
		if (runs == null ) {
			res.setStatus(404);
		}
		return runs;
	}
	
}
