# Dmoney-Trnx-API-Testing Using Postman
This is a practice Trnx-API testing project on a demo DMoney Transaction API. Based on the given scenario, I have generated some test scenarios by using "POSTMAN" and a report using "NEWMAN".

### Test Scenarios Covered
- Admin creates an agent and random 2 customers.
- Deposit some money from SYSTEM account to the agent. System account: SYSTEM (range 10 tk to 10000 tk)
- Agent deposit to any of 1 customer
- Check agent balance
- Then withdraw any amount by the customer from the agent (range 10 tk to 10000 tk)
- Then the customer checks balance
- Then send money to the other customer
- Then from the another customer payment to any merchant (create a merchant account)
- Then the second customer will check both balance and statement
- Then the merchant will check his own balance

## Prerequisites
  - NodeJs(latest LTS)
  - Newman
  - newman-htmlextra
 
## How to run this project
  - Clone This project
  - Then run the following command
  - ```npm i```
  - ```npm run report.js```

## Tools 
  - Postman
  - Newman

## Test Case
https://docs.google.com/spreadsheets/d/1wrRwN9p1TBfYJtjtF-ITrtiRkRyALxROUi0libYYEe8/edit?usp=sharing

## Bug And Improvement Report
## Postman documentation
https://documenter.getpostman.com/view/35117532/2sA3Qwb9TZ

#### Screenshot of Newman Report
![newman report](https://github.com/SharminMim/Dmoney-Trnx-API-Testing/assets/98965200/847e8ec3-3c2e-4dab-8e99-f9a192ad37a5)

