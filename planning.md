## Summary

Create an app that lets user pick a random date in the past and renders major historic events and wheather for that date

    

## API

API Sources:
1. https://www.visualcrossing.com/weather-api
2. https://www.api-ninjas.com/api/historicalevents

## MVP Features
- Built by React
- Uses 3rd party CSS library (SASS or Tailwind)
- Consumes Data from 2 APIs (Wheather API, Historic Data API)
- No secret keys

## MVP Stretch Goals
- Add Wikipedia API/Google API for that date
- Build a backend database for users to upload/delete/edit images to a specific date



# Project Planning

MVP User Stories

As a user, I want to select a specific date from a calendar, so that I can view historical data for that day.

As a user, I want to see the weather information for the chosen date, so that I can learn what the weather was like on that day in the past.

As a user, I want to view the moon phase for the selected date, so that I can know how the moon appeared at that time.

As a user, I want to see which day of the week the chosen date fell on, so that I can better contextualize the date.

As a user, I want to view notable historical events that happened on the selected date, so that I can understand its significance.

As a user, I want to see what movie was top at the box office on the chosen date, so that I can enjoy a nostalgic look at the most popular films from that time.





## ERD

### Entities:

Date: Attributes might include id, day, month, year.
Weather: Attributes might include temperature, condition.
Event: Attributes might include event_id, title, description, date_id.

### Relationships:

A Date entity can have a one-to-one relationship with Weather and MoonPhase.
A Date entity can have a one-to-many relationship with Event if multiple events can occur on that day.