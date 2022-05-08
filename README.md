# LinkHub

### Start with Appwrite

- Create an appwrite project
- Create a database collection with below structure

```json
{
  "$id": "627505b352fea363d3c1",
  "$read": ["role:all"],
  "$write": ["role:all"],
  "name": "users",
  "enabled": true,
  "permission": "collection",
  "attributes": [
    {
      "key": "theme",
      "type": "string",
      "status": "available",
      "required": false,
      "array": false,
      "size": 255,
      "default": "light"
    },
    {
      "key": "Name",
      "type": "string",
      "status": "available",
      "required": false,
      "array": false,
      "size": 255,
      "default": null
    },
    {
      "key": "Bio",
      "type": "string",
      "status": "available",
      "required": false,
      "array": false,
      "size": 255,
      "default": null
    },
    {
      "key": "email",
      "type": "string",
      "status": "available",
      "required": false,
      "array": false,
      "size": 255,
      "default": null
    },
    {
      "key": "instagram",
      "type": "string",
      "status": "available",
      "required": false,
      "array": false,
      "size": 255,
      "default": null
    },
    {
      "key": "github",
      "type": "string",
      "status": "available",
      "required": false,
      "array": false,
      "size": 255,
      "default": null
    },
    {
      "key": "Twitter",
      "type": "string",
      "status": "available",
      "required": false,
      "array": false,
      "size": 255,
      "default": null
    },
    {
      "key": "Linkedin",
      "type": "string",
      "status": "available",
      "required": false,
      "array": false,
      "size": 255,
      "default": null
    },
    {
      "key": "facebook",
      "type": "string",
      "status": "available",
      "required": false,
      "array": false,
      "size": 255,
      "default": null
    },
    {
      "key": "whatsapp",
      "type": "string",
      "status": "available",
      "required": false,
      "array": false,
      "size": 255,
      "default": null
    },
    {
      "key": "views",
      "type": "integer",
      "status": "available",
      "required": false,
      "array": false,
      "min": -9223372036854776000,
      "max": 9223372036854776000,
      "default": 0
    }
  ],
  "indexes": []
}
```

- Create a Storage Bucket
- create a `.env` file in project root and update the credentials as `env.example`
