
# Mentor-Apprentice API

REST API. Return format is in JSON. 

## Endpoints

#### Base URL: https://helloworld-180602.appspot.com

#### User Resources

| Request | Action |
| --- | --- |
| **<code>GET</code> /users** | Get list of users |
| **<code>GET</code> /users/:id** | Get single user |
| **<code>POST</code> /users/:id** | Create a user |
| **<code>PATCH</code> /users/:id** | Edit a user |
| **<code>PUT</code> /users/:id** | Replace a user |
| **<code>DELETE</code> /users/:id** | Delete a user |

#### Listing Resources

| Request | Action |
| --- | --- |
| **<code>GET</code> /listing** | Get list of listings |
| **<code>GET</code> /listing/:id** | Get a single listing |
| **<code>POST</code> /listing/:id** | Create a listing |
| **<code>PATCH</code> /listing/:id** | Edit a listing |
| **<code>PUT</code> /listing/:id** | Replace a listing |
| **<code>DELETE</code> /listing/:id** | Delete a listing |

#### Match User to Listing

| Request | Action |
| --- | --- |
| **<code>PUT</code> /match/user/:id/listing/:id** | Match user to listing |
| **<code>PUT</code> /unmatch/user/:id/listing/:id** | Unmatch user to listing |

## Test it

- Current list of users: https://helloworld-180602.appspot.com/user
- Current list of listings: https://helloworld-180602.appspot.com/listing 

## Usage

#### Add a User

**<code>POST</code> /user** 

| Name | Type | Description |
| --- | --- | --- |
| username | String | The account name |
| password | String | The account password |
| name | String | The person's real name |
| URL | String | **Required** A URL or email associated with account |
| current_listing | String | URL to matched listing. Default is null |

```
Example Input:

{
 "username": "NotBruceWayne",
 "password": "ActuallyBatman",
 "URL": "imbatman@gmail.com"
}
```

```
Response:

Status: 201 Created
Location: https://helloworld-180602.appspot.com/user/ahNzfmhlbGxvd29ybGQtMTgwNjAychELEgRVc2VyGICAgICvnJEKDA
-----------------------------------------------------------------
{
 "username": "NotBruceWayne",
 "password": "ActuallyBatman",
 "name": null,
 "URL": "imbatman@gmail.com",
 "current_listing": null,
 "self": "/user/ahNzfmhlbGxvd29ybGQtMTgwNjAychELEgRVc2VyGICAgICvnJEKDA"
}
```

#### Add a Listing

**<code>POST</code> /listing** 

| Name | Type | Description |
| --- | --- | --- |
| author | String | **Required** The name of the person who created the listing |
| date_published | String | The date and time the listing was created (UTC) |
| job_title | String | **Required** The title of the job position |
| company | String | **Required** The company that is hiring for the listing |
| location | String | **Required** Where the listing opportunity will take place |
| description | Text | Any length paragraph that describes the opportunity  |
| current_user | String | URL to matched user. Default is null |

```
Example Input:

{
 "author": "Diana Prince",
 "job_title": "Superhero",
 "company": "Justice League",
 "location": "Themyscira",
}
```

```
Response:

Status: 201 Created
Location: https://helloworld-180602.appspot.com/listing/ahNzfmhlbGxvd29ybGQtMTgwNjAychQLEgdMaXN0aW5nGICAgIDt24sKDA
-----------------------------------------------------------------
{
 "author": "Diana Prince",
 "date_published": "2017-11-19 03:47:51.049260",
 "job_title": "Superhero",
 "company": "Justice League",
 "location": "Themyscira",
 "description": null,
 "current_user": null,
 "self": "/listing/ahNzfmhlbGxvd29ybGQtMTgwNjAychQLEgdMaXN0aW5nGICAgIDt24sKDA"
}
```

