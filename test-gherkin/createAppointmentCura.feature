Feature: Appointment

Scenario Outline: Create a new appointment
  Given User login
  When User choose Facility
  And User choose Healthcare Program
  And User choose Visit Date
  And User input Comment
  And User click Book Appointment button
  Then Appointment has been created
