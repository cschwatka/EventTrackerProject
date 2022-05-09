# EventTrackerProject

## API Endpoint Tests

Run List
`http://localhost:8082/api/runs`

Get Run by Id
`http://localhost:8082/api/runs/1`

Create Run
`http://localhost:8082/api/runs`

Update Run by Id
`http://localhost:8082/api/runs/4`

Delete Run by Id
`http://localhost:8082/api/runs/2`

Search Run by Distance Range
`http://localhost:8082/api/runs/search/distance/1/3

Search Run by Name or Comment
`http://localhost:8082/api/runs/search/high`


## Description
This app allows a user to log a run and keep track of useful data points such as name/location, date, distance ran, start time, end time, the calories they burned, their heart rate, etc.. The user can also add comments. The user is able to search by all text fields and by distance.

## Technology Used
Spring Data JPA repository, Spring Boot, REST in general by way of creating a backend API that accepts API requests, mysql, aws, apache.


## Lessons Learned
Data JPA repos are very useful and make it easy to add findby queries. Learned how to test api endpoints. Learned about some of the quirks about Data JPA such as Optionals.
