# Setup
We use Postman to test the API, you can download it [here](https://www.postman.com)

## API Endpoints

### Auth
Register user
- [POST] `/auth/user/register`

The request body should look like
```
{
    "email": string,
    "password": string
}
```

Register business
- [POST] `/auth/business/register`

The request body should look like
```
{
    "email": string,
    "password": string,
    "storeName": string
}
```

Login
- [POST] `/auth/login`

The request body should look like
```
{
    "email": string,
    "password": string
}
```

This returns a JWT which will be required for some endpoints. You can automatically bind this token to the `ACCESS_TOKEN` environment variable in postman by placing the following script in **Tests**
```
const jsonResponse = pm.response.json();
pm.environment.set("ACCESS_TOKEN", jsonResponse.access_token);
```

Get profile
- [GET] `/auth/profile`

Make sure `ACCESS_TOKEN` is in the header as a Bearer token.


## Drinks

Get drink ID
- [GET] `/drinks/search?partialName=<name>`

Get all drink names
- [GET] `/drinks/getAllDrinkNames`

Get drink ID
- [GET] `/drinks/getDrinkid?drinkName=<name>`

Check if drink exists
- [GET] `/drinks/exists?drinkName=<name>`

Add drink
- [POST] `/drinks/addDrink`

Request body should contain
```
{
    "drinkName": string
}
```

Delete drink
- [DELETE] `/drinks/deleteDrink`

Request body should contain
```
{
    "drinkName": string
}
```

Update drink name
- [POST] `/drinks/updateDrinkName?drinkName=<old_name>&newDrinkName=<new_name>`


## Drink Price

Get prices for a particular drink
- [GET] `/drinkPrice/getPrices?drinkName=<name>`

Get drink inventory of a store
- [GET] `/drinkPrice/getStoreInventory?storeName=<name>`

Add drink price for a given store
- [POST] `/drinkPrice/addDrinkPrice`

Request body should look like
```
{
    "storeName": string,
    "drinkName": string,
    "drinkPrice": number
}
```

Delete drink price
- [DELETE] `/drinkPrice/deleteDrinkPrice`

Request body should look like
```
{
    "storeName": string,
    "drinkName": string
}
```

Update drink price
- [POST] `/drinkPrice/updateDrinkPrice`

Request body should look like
```
{
    "storeName": string,
    "drinkName": string,
    "drinkPrice": number
}
```

Get drinks within radius
- [GET] `/drinkPrice/drinkInRadius?radius=<radius>&latitude=<lat>&longitude=<lon>&drinkName=<name>`


## Store

Get store by name
- [GET] `/store/getStore&storeName=<name>`

Get store location
- [GET] `/store/getLocation&storeName=<name>`

Add store
- [POST] `/store/addStore`

Request body should look like
```
{
    "storeName": string,
    "latutude": number,
    "longitude": number
}
```

Delete store
- [DELETE] `/store/deleteStore`

Request body should look like
```
{
    "storeName": string
}
```

Update store details
- [POST] `/store/updateStoreDetails`

Request body should look like
```
{
    "storeName": string,
    "newStoreName": string,
    "latutude": number,
    "longitude": number
}
```