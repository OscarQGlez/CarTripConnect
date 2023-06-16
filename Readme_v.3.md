# Car Trip Connect

# Car Trip Connect is the backend application of a platform that facilitates the exchange of trips between people traveling in the same direction, promoting efficiency in the use of vehicles and reducing congestion and pollution.

It allows users to search and view available trips that fit their routes and schedule. Users can post and offer rides that they are willing to share their vehicle with other passengers, users can select and request a ride that suits them and is available. Users can give and receive feedback and ratings on the ridesharing experience, in order to maintain a reliable and quality environment on the platform.

## Prerequisites

To run this application, make sure you have the following:

- MySQL database installed and configured.


## Installation

1. Clone the repository
1. Install the required packages: **`npm i`**
3. Create a **`.env`** file based on the provided **`.env.example`** file. Specify the values for the environment variables required by the application to work.


## Usage and Endpoints



|----------------------------------------|---------------------------------------------------------------|-----------------------|
| Endpoint                               | Description                                                   | Role                  |
|----------------------------------------|---------------------------------------------------------------|-----------------------|
| `/api/auth/signup`                     | Creates a new user account                                    | Guest                 |
| `/api/auth/login`                      | Authenticates user credentials and generates a session token  | Guest                 |
|----------------------------------------|---------------------------------------------------------------|-----------------------|
| `/api/user`                            | Fetches a list of all users                                   | Admin                 |
| `/api/user/:id`                        | Fetches details of a specific user                            | Admin                 |
| `/api/user`                            | Creates a new user                                            | Admin                 |
| `/api/user/:id`                        | Updates information of a specific user                        | Admin                 |
| `/api/user/:id`                        | Deletes a specific user                                       | Admin                 |
|----------------------------------------|---------------------------------------------------------------|-----------------------|
| `/api/trip`                            | Fetches a list of all travels 			                     | Logged user           |
| `/api/trip/search`         		     | Fetches a list of all travels including el score and coment   |                       |
| `/api/trip/searchAllTripsRatings`     | Fetches a list of all travels including el score and coment   |                       |
| `/api/trip/:id`                        | Fetches details of a specific travel                          | Logged user           |
| `/api/trip/offerTrip`                  | Creates a new travel                                          | Logged user or admin  |
| `/api/trip/addUserTrip/:tripId'`       | Add user to a travel	                                         | Logged user or admin  |
| `/api/trip/provideFeedback`            | Creates a new travel                                          | Logged user or admin  |
| `/api/trip/:id`                        | Updates information of a specific travel                      | Admin                 |
| `/api/trip/:id`                        | Deletes a specific travel                                     | Admin                 |
|----------------------------------------|---------------------------------------------------------------|-----------------------|
| `/api/origin`                       	 | Fetches a list of all of origin locations                     | Logged user           |
| `/api/origin/:id`                  	 | Fetches details of a specific origin locations                | Logged user           |
| `/api/origin`                          | Creates a new origin locations                                | Admin                 |
| `/api/origin/:id`                    	 | Updates information of a specific origin locations            | Admin                 |
| `/api/origin/:id`                      | Deletes a specific origin locations                           | Admin                 |
|																                                                                 |
| `/api/destination`                     | Fetches a list of all destinations                            | Logged user           |
| `/api/destination/:id`                 | Fetches details of a specific destination                     | Logged user           |
| `/api/destination`                     | Creates a new destination                                     | Admin                 |
| `/api/destination/:id`                 | Updates information of a specific destination                 | Admin                 |
| `/api/destination/:id`                 | Deletes a specific destination                                | Admin                 |
|----------------------------------------|---------------------------------------------------------------|-----------------------|
| `/api/rating`                          | Fetches a list of all rating                                  | Logged user           |
| `/api/rating/:id`                      | Fetches details of a specific rating                          | Logged user           |
| `/api/rating`                          | Creates a new rating                                          | Admin                 |
| `/api/rating/:id`                      | Updates information of a specific rating                      | Admin                 |
| `/api/rating/:id`                      | Deletes a specific rating                                     | Admin                 |
|----------------------------------------|---------------------------------------------------------------|-----------------------|

## Data Model

### Table "users" 