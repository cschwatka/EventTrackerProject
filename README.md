# EventTrackerProject

## Angular

http://34.199.50.15:8080/RunTrackerREST/

## API Endpoint Tests

Run List
`http://34.199.50.15:8080/RunTrackerREST/api/runs`

Get Run by Id
`http://34.199.50.15:8080/RunTrackerREST/api/runs/1`

Create Run
`http://34.199.50.15:8080/RunTrackerREST/api/runs`

`   {
        "name": "Evergreen Hills"
    }`

Update Run by Id
`http://34.199.50.15:8080/RunTrackerREST/api/runs/4`

Delete Run by Id
`http://34.199.50.15:8080/RunTrackerREST/api/runs/6`

Search Run by Distance Range
`http://34.199.50.15:8080/RunTrackerREST/api/runs/search/distance/0/4`

Search Run by Name or Comment
`http://34.199.50.15:8080/RunTrackerREST/api/runs/search/high`


## Description
This app allows a user to log a run and keep track of useful data points such as name/location, date, distance ran, start time, end time, the calories they burned, their heart rate, etc.. The user can also add comments. The user is able to search by all fields using an instant feedback search bar (filter table data, in this case with observables and our NgbHighlight component used in Typeahead). The user can also delete and edit runs.

## Technology Used
Spring Data JPA repository, Spring Boot, REST in general by way of creating a backend API that accepts API requests, mysql, aws, apache. Angular for the frontend (with Typescript).


## Lessons Learned

### Configuration
Material UI install with NPM was attempted halfway through the project which was already configured for Angular Bootstrap. TailwindCSS using PostCSS was used during the XML HttpRequest version of the project last week and this also took quite a bit of time to configure correctly. Regarding Material UI this weekend, there was an issue with a dependency (Font Awesome?) that broke the app and took an hour or two to resolve. Going forward, this software developer will likely configure and settle on a UI kit before starting on the business logic. The package.json is still yellow, but I'm hesitant to delete anything else from the dependencies array this close to deadline since it's all working.

### State & Pipes
It's still difficult to intuit state in Angular. The bootstrap table filtering It took many hours to solve a null bug where the a pipe filter is being used that calls a search function. It wasn't working not because the observable array was null (what I thought), but because there was a null value in one of the properties it was searching over. I wasn't ever able to get the startsWith() JS method to work with it so I created redundant views and used *ngIf to mask the problem for now.

### Routing
Not particularly difficult, but using this on this project benefited my overall understanding of how the pieces of an app can fit together without just using *ngIf views.


### Data JPA Repositories
Data JPA repos are very useful and make it easy to add findby queries. Learned how to test api endpoints. Learned about some of the quirks about Data JPA such as Optionals.
