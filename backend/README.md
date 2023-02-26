# SSR API
API for SSR Website

## Send data
POST /api/form

```json
{
  "num": 1111,
  "name": "str",
  "phone": "str",
  "mail": "str",
  "q0": "str",
  "q1": "str",
  "q2": "str"
}
```

Response 201 Created

```json
[
    "OK"
]
```

## Show data
POST /api/admin

```json
{
    "key": "<ADMIN_KEY>"
}
```

Response 200 OK

```json
[
    {
        "num": 1111,
        "name": "str",
        "phone": "str",
        "mail": "str",
        "q0": "str",
        "q1": "str",
        "q2": "str"
    }
]
```

Response 401 Unauthorized

```json
[
    "Auth fail"
]
```
