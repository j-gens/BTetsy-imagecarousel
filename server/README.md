## CRUD Documentation

Operation | HTTP | Endpoint | Purpose
--- | --- | --- | ---
Create | POST | /wishlist/:username | Add a product ID to a user's wishlist
Read | GET | /products/:productId | Retrieve photos for an individual product
Read | GET | /wishlist/:username | Retrieve a user's wishlist
Update | PUT | /products/:productId | Update if a product photo has been 'liked/unliked'
Delete | DELETE | /wishlist/:username | Remove a product ID from a user's wishlist