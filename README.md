Clone the Repository (if applicable):

If this code is in a repository, clone it to your local machine:
```console
git clone <repository_url>
cd grocery-booking-api
```

Build and Run the Docker Containers:

Use Docker Compose to build and run the application and MongoDB containers:
```console
docker-compose up --build
```
Verify the Application is Running:
Access the application by opening your browser and navigating to http://localhost:3000.

### Testing the Endpoints

#### Add a New Grocery Item:

Method: POST

URL: http://localhost:3000/admin/grocery

Body (JSON):
```json
{
  "name": "Apple",
  "price": 1.2,
  "inventory": 100
}
```

#### View Existing Grocery Items:

Method: GET

URL: http://localhost:3000/admin/grocery

#### Update Grocery Item:

Method: PUT

URL: http://localhost:3000/admin/grocery/<grocery_id>

Body (JSON):
```json
{
  "name": "Banana",
  "price": 0.8,
  "inventory": 150
}
```

#### Remove Grocery Item:

Method: DELETE
URL: http://localhost:3000/admin/grocery/<grocery_id>
View Available Grocery Items:

Method: GET
URL: http://localhost:3000/user/grocery


#### Book Multiple Grocery Items:

Method: POST
URL: http://localhost:3000/user/order
Body (JSON):
```json
{
  "items": [
    {"id": "<grocery_id>", "quantity": 2},
    {"id": "<another_grocery_id>", "quantity": 3}
  ]
}
```

