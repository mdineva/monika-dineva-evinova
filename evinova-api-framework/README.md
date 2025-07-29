# 🚀 API Test Automation Framework

This project is a modular, extensible **API test automation framework** built with **Node.js**, **Supertest**, **Jest**, **Ajv**, and **Artillery**.  
It covers functional testing, negative scenarios, JSON schema validation, dynamic data generation, and load testing.


## 🧪 Test Coverage

1. ✅ `GET /api/users`
- Verifies status code = 200
- Validates full JSON response structure with AJV
- Checks that returned user list is an array

2. ✅ `POST /api/users`
- Uses **Faker.js** to dynamically create payloads
- Validates:
  - status code = 201
  - correct `name` and `job` in response
  - presence of `id` and `createdAt`

3. ❌ `POST /api/users` (Negative Test)
- Sends malformed payload (wrong types, extra fields)
- **Expected:** `400 Bad Request`
- **Actual:** `201 Created` → indicates possible bug in the Reqres API


## 📦 Getting Started
1. 📥 Install dependencies
<pre>npm install</pre>

2. 🧪 Run API Tests
<pre>npm test</pre>

3. 🔥 Run Load Test
<pre>npm run loadtest</pre>

4. 🔁 Run All Tests
<pre>npm run fulltest</pre>

## 📂 Reports Summary
| Report                | Path                                 |
| --------------------- | ------------------------------------ |
| API Test HTML Report  | `reports/api/test-report.html`       |
| API Test JSON Output  | `reports/api/test-results.json`      |
| Load Test JSON Report | `reports/load/artillery-report.json` |


## 📌 Notes
The negative test for POST /api/users intentionally fails (returns 201) — this reflects a limitation or bug in the Reqres API.

