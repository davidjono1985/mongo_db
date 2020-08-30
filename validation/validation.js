db.createCollection('posts', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['title', 'text', 'creator', 'comments'],
            properties: {
                title: {
                    bsonType: "string",
                    description: "must be a string and si required"
                },
                text: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                creator: {
                    bsonType: "objectId",
                    description: "must be an ojectid and is required"
                },
                comments: {
                    bsonType: "array",
                    description: "must be an array and is required",
                    items: {
                        bsonType: "object",
                        required: ["text", "author"],
                        properties: {
                            bsonType: "string",
                            description: "must be a string and si required"
                        },
                        author: {
                            bsonType: "objectId",
                            description: "must be an ojectid and is required"
                        }
                    }
                }
            }
        }
    }
})