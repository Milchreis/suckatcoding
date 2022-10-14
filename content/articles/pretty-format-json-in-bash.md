---
title: Pretty format json in bash
description: Simple solution to pretty format json data for better readablity.
img: https://images.unsplash.com/photo-1542651314-8c3b3fb85762?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1929&q=80
alt: ordered shoes
author: 
  name: Nick
tags: 
  - Bash
createdAt: 2022-10-14
---

## The problem

Sometimes I query a REST interface directly on the server and get back an unformatted JSON. Depending on how much data is returned, this can quickly become confusing. 

```bash
curl https://randomuser.me/api/
{"results":[{"gender":"male","name":{"title":"Mr","first":"Carter","last":"Williams"},"location":{"street":{"number":1635,"name":"Dufferin St"},"city":"Hudson","state":"Ontario","country":"Canada","postcode":"H2F 5L3","coordinates":{"latitude":"-68.5900","longitude":"-38.5204"},"timezone":{"offset":"-1:00","description":"Azores, Cape Verde Islands"}},"email":"carter.williams@example.com","login":{"uuid":"3f6266a7-2a5f-4ed5-b337-a1bbc59758ed","username":"brownkoala677","password":"carnage","salt":"iNv04YwD","md5":"d6b23b66b183fca53934955f4bf0231c","sha1":"1db40ee7b1fa190f4a52ac31b4c49d6c2649fe5c","sha256":"a697835fa4480a6b34ba7824f8fbbc923e3099e83bdc850f6005da3398a2a57e"},"dob":{"date":"1950-06-04T14:00:22.760Z","age":72},"registered":{"date":"2016-11-04T21:42:53.080Z","age":5},"phone":"U35 M35-9817","cell":"R62 H80-0869","id":{"name":"SIN","value":"087936068"},"picture":{"large":"https://randomuser.me/api/portraits/men/74.jpg","medium":"https://randomuser.me/api/portraits/med/men/74.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/74.jpg"},"nat":"CA"}],"info":{"seed":"d54490113ba47447","results":1,"page":1,"version":"1.4"}} 
```

## The solution

In most Linux distributions Python3 is already included and exactly this helps to format the JSON pretty. To do this, simply pass the JSON as text into the python3 module 'json.tool'.

```bash
curl -s https://randomuser.me/api/ | python3 -m json.tool
{
    "results": [
        {
            "gender": "female",
            "name": {
                "title": "Mrs",
                "first": "Romena",
                "last": "Nikitenko"
            },
            "location": {
                "street": {
                    "number": 4480,
                    "name": "Ievgena Grebinki"
                },
                "city": "Blagovishchenske",
                "state": "Zaporizka",
                "country": "Ukraine",
                "postcode": 14660,
                "coordinates": {
                    "latitude": "75.6031",
                    "longitude": "18.2593"
                },
                "timezone": {
                    "offset": "+9:30",
                    "description": "Adelaide, Darwin"
                }
            },
            "email": "romena.nikitenko@example.com",
            "login": {
                "uuid": "b95e7514-0623-4e0e-877a-ceb5c6c33379",
                "username": "redsnake895",
                "password": "interacial",
                "salt": "zlp6c7HD",
                "md5": "0781a4fddd13bc0dae3a3ad5ad65a8a3",
                "sha1": "79b681e40452c58979fcadcdf7a65699dd75372e",
                "sha256": "50211d3441249352e7ea5c2b69e05620981ac4ce5eaf9514da162c6808de420c"
            },
            "dob": {
                "date": "1987-01-12T13:16:02.912Z",
                "age": 35
            },
            "registered": {
                "date": "2009-09-23T09:50:21.873Z",
                "age": 13
            },
            "phone": "(068) T21-2459",
            "cell": "(097) T89-0021",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/73.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/73.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/73.jpg"
            },
            "nat": "UA"
        }
    ],
    "info": {
        "seed": "2f740ac58da5a06a",
        "results": 1,
        "page": 1,
        "version": "1.4"
    }
}
        
```