# Phone Number feng shui Processor

# Server Setup

The server run on express framework on localhost:3000. Please install dependencies before starting with **npm install**

With Nodejs:
```
npm start
```

With Nodemon:
```
npm run dev
```


# REST API
| Route               | HTTP   | Description  |
| --------------      |:------:| ------------|
| /phone/analyze/one  | POST   | analyze one phone number, send with 'number' field |
| /phone/analyze/many | POST   | analyze phone numbers in an array, send with 'numbers' field |
| /                   | GET    | express default page |

# Response Format

With single number:
```
{
	"input": "+6287 - 888 - 366- 295",
	"number": "88788836629",
	"matches": 10,
	"good": {
		"kekayaan": "0/10, 0%",
		"kesehatan": "0/10, 0%",
		"relasi": "3/10, 30%",
		"kestabilan": "4/10, 40%",
		"percentage": "70%"
	},
	"bad": {
		"perselisihan": "0/10, 0%",
		"kehilangan": "2/10, 20%",
		"malapetaka": "1/10, 10%",
		"kehancuran": "0/10, 0%",
		"percentage": "30%"
	}
}
```

With an array of phone numbers:
```
[
	{
		"input": "+6287 - 888 - 366- 295",
		"number": "88788836629",
		"matches": 10,
		"good": {
			"kekayaan": "0/10, 0%",
			"kesehatan": "0/10, 0%",
			"relasi": "3/10, 30%",
			"kestabilan": "4/10, 40%",
			"percentage": "70%"
		},
		"bad": {
			"perselisihan": "0/10, 0%",
			"kehilangan": "2/10, 20%",
			"malapetaka": "1/10, 10%",
			"kehancuran": "0/10, 0%",
			"percentage": "30%"
		}
	},
	{
		"input": "0123812039712",
		"number": "1123812239712",
		"matches": 12,
		"good": {
			"kekayaan": "1/12, 8%",
			"kesehatan": "0/12, 0%",
			"relasi": "0/12, 0%",
			"kestabilan": "2/12, 16%",
			"percentage": "25%"
		},
		"bad": {
			"perselisihan": "3/12, 25%",
			"kehilangan": "1/12, 8%",
			"malapetaka": "2/12, 16%",
			"kehancuran": "3/12, 25%",
			"percentage": "75%"
		}
	}
]
```
