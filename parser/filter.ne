filter ->  
        brand 
    |   carname
    |   vehicletype
    |   fueltype
    
    |   brand andOR carname  
    |   carname andOR brand
    |   carname andOR vehicletype    
    |   vehicletype andOR carname
    |   vehicletype andOR fueltype  
    |   fueltype andOR vehicletype
    |   fueltype andOR carname   
    |   carname andOR fueltype

    |   brand andOR carname andOR vehicletype
    |   brand andOR vehicletype andOR carname
    |   carname andOR brand andOR vehicletype
    |   carname andOR vehicletype andOR brand
    |   vehicletype andOR brand andOR carname
    |   vehicletype andOR carname andOR brand

    |   carname andOR vehicletype andOR fueltype
    |   carname andOR fueltype andOR vehicletype
    |   vehicletype andOR carname andOR fueltype
    |   vehicletype andOR fueltype andOR carname
    |   fueltype andOR carname andOR vehicletype
    |   fueltype andOR vehicletype andOR carname

    |   vehicletype andOR fueltype andOR brand
    |   vehicletype andOR brand andOR fueltype
    |   fueltype andOR vehicletype andOR brand
    |   fueltype andOR brand andOR vehicletype
    |   brand andOR vehicletype andOR fueltype
    |   brand andOR fueltype andOR vehicletype

    |   brand andOR carname andOR vehicletype andOR fueltype
    |   brand andOR carname andOR fueltype andOR vehicletype
    |   brand andOR vehicletype andOR carname andOR fueltype
    |   brand andOR vehicletype andOR fueltype andOR carname
    |   brand andOR fueltype andOR carname andOR vehicletype
    |   brand andOR fueltype andOR vehicletype andOR carname
    |   carname andOR brand andOR vehicletype andOR fueltype
    |   carname andOR brand andOR fueltype andOR vehicletype
    |   carname andOR vehicletype andOR brand andOR fueltype
    |   carname andOR vehicletype andOR fueltype andOR brand
    |   carname andOR fueltype andOR brand andOR vehicletype
    |   carname andOR fueltype andOR vehicletype andOR brand
    |   vehicletype andOR brand andOR carname andOR fueltype
    |   vehicletype andOR brand andOR fueltype andOR carname
    |   vehicletype andOR carname andOR brand andOR fueltype
    |   vehicletype andOR carname andOR fueltype andOR brand
    |   vehicletype andOR fueltype andOR brand andOR carname
    |   vehicletype andOR fueltype andOR carname andOR brand
    |   fueltype andOR brand andOR carname andOR vehicletype
    |   fueltype andOR brand andOR vehicletype andOR carname
    |   fueltype andOR carname andOR brand andOR vehicletype
    |   fueltype andOR carname andOR vehicletype andOR brand
    |   fueltype andOR vehicletype andOR brand andOR carname
    |   fueltype andOR vehicletype andOR carname andOR brand

brand -> "Brand" equals string | "brand" equals string
carname -> "Name" equals string | "name" equals string
vehicletype -> "VehicleType" equals string | "vehicletype" equals string
fueltype -> "FuelType" equals string | "fueltype" equals string

andOR -> and | or

equals -> " = "
and -> " and "
or -> " or "

string -> "\"" characters "\""
characters -> character | character characters
character -> [^\"]