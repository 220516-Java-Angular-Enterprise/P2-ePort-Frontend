# P2-ePort-Frontend

An application for a fictional black market auction 

### Team Members
* Brayan Aviles
* Matthew Berkheimer
* Joseph Choi
* Mark Quercioli

## Project Description
ePort is a black market auction application for anomalous and potentially dangerous products. 
Users of the application can bid for items available through the auction application, and after a defined
period of time, the item in question is given to the highest bidder.

## Functional Features
### An ADMIN can:

* activate a user account
* delete a user account
* view users, search for a specific user, and view a user's details
* submit a new item to be auctioned
* view auction items (sortable and filterable)

### A USER(DEFAULT) can:

* register for an account
* place funds in his/her account
* bid on auction items using his/her account funds
* update their existing bid on an auction item
* view his/her history of bids
* edit his/her account details
* view auction items (sortable and filterable)

## Non-Functional Features

### An auction ITEM can:

* be bid on by multiple, distinct users
* have a time period during which users can bid on it
* prevent users from bidding on it after bidding period ends

### Other 
* Input validation to prevent invalid data from entering the system
* Password Encryption
* Error and Exception handling

## Stretch Goals

* Package tracking of completed bids
* Package tracking can fail depending on danger level of object
* Encrypted e-mail notifications
* False auction page to hide black market
* USERS(DEFAULT) also can submit a item for auction
* Reactive design (i.e. friendly to a variety of views)
* Retract on-going packages sent to deleted users
