// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const data = [
	{
		"brand": "Maruti",
		"name": "Maruti Baleno",
		"vehicleType": "Hatchback",
		"fuelType": "Petrol",
		"seating": "5",
		"imageURL": "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Baleno/8674/1645684614616/front-left-side-47.jpg?tr=w-456"
	},
	{
		"brand": "Maruti",
		"name": "Maruti Swift",
		"vehicleType": "Hatchback",
		"fuelType": "Petrol",
		"seating": "5",
		"imageURL": "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Swift/8378/1644834798148/front-left-side-47.jpg?tr=w-456"
	},
	{
		"brand": "Maruti",
		"name": "Maruti Dzire",
		"vehicleType": "Sedan",
		"fuelType": "CNG",
		"seating": "5",
		"imageURL": "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Dzire-2020/7664/1584705998420/front-left-side-47.jpg?imwidth=420&impolicy=resize"
	},
	{
		"brand": "Tata",
		"name": "Tata safari",
		"vehicleType": "Off road",
		"fuelType": "Diesel",
		"seating": "6",
		"imageURL": "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/New-Safari/6845/1645420318264/front-left-side-47.jpg?imwidth=420&impolicy=resize"
	},
	{
		"brand": "BMW",
		"name": "BMW 7 Series",
		"vehicleType": "Luxury",
		"fuelType": "Diesel",
		"seating": "4",
		"imageURL": "https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/7-Series/7036/1592998676734/front-left-side-47.jpg?tr=w-456"
	},
	{
		"brand": "BMW",
		"name": "BMW X5",
		"vehicleType": "Luxury",
		"fuelType": "Diesel",
		"seating": "5",
		"imageURL": "https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/X5/8601/1649051042142/front-left-side-47.jpg?tr=w-456"
	},
	{
		"brand": "Mercedes-Benz",
		"name": "Mercedes-Benz AMG GT",
		"vehicleType": "Coupe",
		"fuelType": "Petrol",
		"seating": "2",
		"imageURL": "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mercedes-Benz/AMG-G-63/8591/1630666326351/front-left-side-47.jpg?tr=w-456"
	},
	{
		"brand": "Mercedes-Benz",
		"name": "Mercedes-Benz AMG GLE 53",
		"vehicleType": "Luxury",
		"fuelType": "Petrol",
		"seating": "5",
		"imageURL": "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mercedes-Benz/AMG-GLE-53/7326/1601033036360/front-left-side-47.jpg?imwidth=420&impolicy=resize"
	},
	{
		"brand": "Audi",
		"name": "Audi A6",
		"vehicleType": "Sedan",
		"fuelType": "Petrol",
		"seating": "5",
		"imageURL": "https://stimg.cardekho.com/images/carexteriorimages/630x420/Audi/A6/6426/1571906388003/front-left-side-47.jpg?tr=w-456"
	},
	{
		"brand": "Audi",
		"name": "Audi A8",
		"vehicleType": "Sedan",
		"fuelType": "Petrol",
		"seating": "5",
		"imageURL": "https://stimg.cardekho.com/images/carexteriorimages/630x420/Audi/Audi-A8-2019/6722/1544785682176/front-left-side-47.jpg?imwidth=420&impolicy=resize"
	},
	{
		"brand": "Audi",
		"name": "Audi RS7",
		"vehicleType": "Sedan",
		"fuelType": "Petrol",
		"seating": "4",
		"imageURL": "https://stimg.cardekho.com/images/carexteriorimages/630x420/Audi/RS7/7808/1594880535587/front-left-side-47.jpg?tr=w-456"
	}
]

export default function handler(req, res) {
	res.status(200).json(data)
}
