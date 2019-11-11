## CRUD Documentation

Operation | HTTP | Endpoint | Purpose
--- | --- | --- | ---
Create | POST | /products | Add a product ID to the DB
Read | GET | /products/:productId | Retrieve photos for an individual product
Update | PATCH | /products/:productId | Update if a product photo has been 'liked/unliked'
Delete | DELETE | /products/:productId | Remove a product from the DB