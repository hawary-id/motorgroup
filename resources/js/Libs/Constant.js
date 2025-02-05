import { FaCar } from "react-icons/fa6";
import { GiEarthAsiaOceania, GiPriceTag } from "react-icons/gi";
import { GoHeartFill } from "react-icons/go";

export const MENU_DATA = [
    {
        label: 'New Vehicle',
        url: 'vehicle.index',
        target:false,
        active: 'vehicle.index'
    },
    {
        label: 'Motorcycle',
        url: 'https://motoauc.42web.io/',
        target:true,
        active: 'motorcycle.*'
    },
    
    {
        label: 'About Us',
        url: 'about',
        target:false,
        active: 'about'
    },
    {
        label: 'News',
        url: 'news.index',
        target:false,
        active: 'news.*'
    },
    {
        label: 'Contact Us',
        url: 'contact.index',
        target:false,
        active: 'contact.*'
    },
]

export const SLIDER_DATA = [
    {
        image_large: "/slider/slider-main.webp",
        image_small: "/slider/slider-small.webp",
        url:"",
        label:"Main slider 1"
    },
    {
        image_large: "/slider/slider-2.webp",
        image_small: "/slider/slider-small.webp",
        url:"",
        label:"Main slider 2"
    },
    {
        image_large: "/slider/slider-3.webp",
        image_small: "/slider/slider-small.webp",
        url:"",
        label:"Main slider 3"
    },
]

export const BANNER_DATA = [
    {
        name: 'Vehicle Banner Motorgroupo',
        category: 'vehicle',
        images: [
            {
                large_image: '/banner/banner-vehicle.webp',
                type: 'large'
            },
            {
                small_image: '/banner/banner-vehicle-small.webp',
                type: 'small'
            },       
        ]
    },
    {
        name: 'Motorcycle Banner Motorgroupo',
        category: 'moto',
        images: [
            {
                large_image: '/banner/banner-moto.webp',
                type: 'large'
            },
            {
                small_image: '/banner/banner-moto-small.webp',
                type: 'small'
            },       
        ]
    },
]

export const QUOTE = "We are global with export companies in 9 different countries, we can supply the vehicles you need";

export const VEHICLE_BRAND_DATA = [
    {
        name: 'Toyota',
        image: '/logo/logo-toyota.png',
        slug: 'toyota',
        description: 'GAS Export specialise in all vehicles Toyota, supplying both Left Hand Drive Toyota and Right Hand Drive Toyota Models to our customers in over 180 different countries.',
        description_2 : 'When you order vehicles from GAS you can be assured of fast replies to all inquires, quality care of your vehicles and service second to none, we think of our customers as friends, we are in the business for the long haul, when you are choosing where to source your vehicles please contact us and see the difference good old fashioned service makes'
    },
    {
        name: 'Lexus',
        image: '/logo/logo-lexus.png',
        slug: 'lexus',
        description: 'GAS Export specialise in all vehicles Lexus, supplying both Left Hand Drive Toyota and Right Hand Drive Toyota Models to our customers in over 180 different countries.',
        description_2 : 'When you order vehicles from GAS you can be assured of fast replies to all inquires, quality care of your vehicles and service second to none, we think of our customers as friends, we are in the business for the long haul, when you are choosing where to source your vehicles please contact us and see the difference good old fashioned service makes'
    },
    {
        name: 'Ford',
        image: '/logo/logo-ford.png',
        slug: 'ford',
        description: 'GAS Export specialise in all vehicles Ford, supplying both Left Hand Drive Toyota and Right Hand Drive Toyota Models to our customers in over 180 different countries.',
        description_2 : 'When you order vehicles from GAS you can be assured of fast replies to all inquires, quality care of your vehicles and service second to none, we think of our customers as friends, we are in the business for the long haul, when you are choosing where to source your vehicles please contact us and see the difference good old fashioned service makes'
    },
    {
        name: 'Isuzu',
        image: '/logo/logo-isuzu.png',
        slug: 'isuzu',
        description: 'GAS Export specialise in all vehicles Isuzu, supplying both Left Hand Drive Toyota and Right Hand Drive Toyota Models to our customers in over 180 different countries.',
        description_2 : 'When you order vehicles from GAS you can be assured of fast replies to all inquires, quality care of your vehicles and service second to none, we think of our customers as friends, we are in the business for the long haul, when you are choosing where to source your vehicles please contact us and see the difference good old fashioned service makes'
    },
    {
        name: 'Nissan',
        image: '/logo/logo-nissan.png',
        slug: 'nissan',
        description: 'GAS Export specialise in all vehicles Nissan, supplying both Left Hand Drive Toyota and Right Hand Drive Toyota Models to our customers in over 180 different countries.',
        description_2 : 'When you order vehicles from GAS you can be assured of fast replies to all inquires, quality care of your vehicles and service second to none, we think of our customers as friends, we are in the business for the long haul, when you are choosing where to source your vehicles please contact us and see the difference good old fashioned service makes'
    },
    {
        name: 'Masda',
        image: '/logo/logo-masda.png',
        slug: 'masda',
        description: 'GAS Export specialise in all vehicles Masda, supplying both Left Hand Drive Toyota and Right Hand Drive Toyota Models to our customers in over 180 different countries.',
        description_2 : 'When you order vehicles from GAS you can be assured of fast replies to all inquires, quality care of your vehicles and service second to none, we think of our customers as friends, we are in the business for the long haul, when you are choosing where to source your vehicles please contact us and see the difference good old fashioned service makes'
    },
    {
        name: 'Suzuki',
        image: '/logo/logo-suzuki.png',
        slug: 'suzuki',
        description: 'GAS Export specialise in all vehicles Suzuki, supplying both Left Hand Drive Toyota and Right Hand Drive Toyota Models to our customers in over 180 different countries.',
        description_2 : 'When you order vehicles from GAS you can be assured of fast replies to all inquires, quality care of your vehicles and service second to none, we think of our customers as friends, we are in the business for the long haul, when you are choosing where to source your vehicles please contact us and see the difference good old fashioned service makes'
    },
    {
        name: 'MItsubishi',
        image: '/logo/logo-mitsubishi.png',
        slug: 'mitsubishi',
        description: 'GAS Export specialise in all vehicles MItsubishi, supplying both Left Hand Drive Toyota and Right Hand Drive Toyota Models to our customers in over 180 different countries.',
        description_2 : 'When you order vehicles from GAS you can be assured of fast replies to all inquires, quality care of your vehicles and service second to none, we think of our customers as friends, we are in the business for the long haul, when you are choosing where to source your vehicles please contact us and see the difference good old fashioned service makes'
    },
    {
        name: 'Honda',
        image: '/logo/logo-honda.png',
        slug: 'honda',
        description: 'GAS Export specialise in all vehicles Honda, supplying both Left Hand Drive Toyota and Right Hand Drive Toyota Models to our customers in over 180 different countries.',
        description_2 : 'When you order vehicles from GAS you can be assured of fast replies to all inquires, quality care of your vehicles and service second to none, we think of our customers as friends, we are in the business for the long haul, when you are choosing where to source your vehicles please contact us and see the difference good old fashioned service makes'
    },
    {
        name: 'Chevrolet',
        image: '/logo/logo-chevrolet.png',
        slug: 'chevrolet',
        description: 'GAS Export specialise in all vehicles Chevrolet, supplying both Left Hand Drive Toyota and Right Hand Drive Toyota Models to our customers in over 180 different countries.',
        description_2 : 'When you order vehicles from GAS you can be assured of fast replies to all inquires, quality care of your vehicles and service second to none, we think of our customers as friends, we are in the business for the long haul, when you are choosing where to source your vehicles please contact us and see the difference good old fashioned service makes'
    },
    {
        name: 'BMW',
        image: '/logo/logo-bmw.png',
        slug: 'bmw',
        description: 'GAS Export specialise in all vehicles BMW, supplying both Left Hand Drive Toyota and Right Hand Drive Toyota Models to our customers in over 180 different countries.',
        description_2 : 'When you order vehicles from GAS you can be assured of fast replies to all inquires, quality care of your vehicles and service second to none, we think of our customers as friends, we are in the business for the long haul, when you are choosing where to source your vehicles please contact us and see the difference good old fashioned service makes'
    },
    {
        name: 'Mercedes Benz',
        image: '/logo/logo-mercedes-benz.png',
        slug: 'mercedes-benz',
        description: 'GAS Export specialise in all vehicles Mercedes Benz, supplying both Left Hand Drive Toyota and Right Hand Drive Toyota Models to our customers in over 180 different countries.',
        description_2 : 'When you order vehicles from GAS you can be assured of fast replies to all inquires, quality care of your vehicles and service second to none, we think of our customers as friends, we are in the business for the long haul, when you are choosing where to source your vehicles please contact us and see the difference good old fashioned service makes'
    },
    {
        name: 'Cadillac',
        image: '/logo/logo-cadillac.png',
        slug: 'cadillac',
        description: 'GAS Export specialise in all vehicles Cadillac, supplying both Left Hand Drive Toyota and Right Hand Drive Toyota Models to our customers in over 180 different countries.',
        description_2 : 'When you order vehicles from GAS you can be assured of fast replies to all inquires, quality care of your vehicles and service second to none, we think of our customers as friends, we are in the business for the long haul, when you are choosing where to source your vehicles please contact us and see the difference good old fashioned service makes'
    },
    {
        name: 'Dodge',
        image: '/logo/logo-dodge.png',
        slug: 'dodge',
        description: 'GAS Export specialise in all vehicles Dodge, supplying both Left Hand Drive Toyota and Right Hand Drive Toyota Models to our customers in over 180 different countries.',
        description_2 : 'When you order vehicles from GAS you can be assured of fast replies to all inquires, quality care of your vehicles and service second to none, we think of our customers as friends, we are in the business for the long haul, when you are choosing where to source your vehicles please contact us and see the difference good old fashioned service makes'
    },
    {
        name: 'Jeep',
        image: '/logo/logo-jeep.png',
        slug: 'jeep',
        description: 'GAS Export specialise in all vehicles Jeep, supplying both Left Hand Drive Toyota and Right Hand Drive Toyota Models to our customers in over 180 different countries.',
        description_2 : 'When you order vehicles from GAS you can be assured of fast replies to all inquires, quality care of your vehicles and service second to none, we think of our customers as friends, we are in the business for the long haul, when you are choosing where to source your vehicles please contact us and see the difference good old fashioned service makes'
    },
    {
        name: 'Lincoln',
        image: '/logo/logo-lincoln.png',
        slug: 'lincoln',
        description: 'GAS Export specialise in all vehicles Lincoln, supplying both Left Hand Drive Toyota and Right Hand Drive Toyota Models to our customers in over 180 different countries.',
        description_2 : 'When you order vehicles from GAS you can be assured of fast replies to all inquires, quality care of your vehicles and service second to none, we think of our customers as friends, we are in the business for the long haul, when you are choosing where to source your vehicles please contact us and see the difference good old fashioned service makes'
    },
    {
        name: 'Chrysler',
        image: '/logo/logo-chrysler.png',
        slug: 'chrysler',
        description: 'GAS Export specialise in all vehicles Chrysler, supplying both Left Hand Drive Toyota and Right Hand Drive Toyota Models to our customers in over 180 different countries.',
        description_2 : 'When you order vehicles from GAS you can be assured of fast replies to all inquires, quality care of your vehicles and service second to none, we think of our customers as friends, we are in the business for the long haul, when you are choosing where to source your vehicles please contact us and see the difference good old fashioned service makes'
    },
    {
        name: 'RAM',
        image: '/logo/logo-ram.png',
        slug: 'ram',
        description: 'GAS Export specialise in all vehicles RAM, supplying both Left Hand Drive Toyota and Right Hand Drive Toyota Models to our customers in over 180 different countries.',
        description_2 : 'When you order vehicles from GAS you can be assured of fast replies to all inquires, quality care of your vehicles and service second to none, we think of our customers as friends, we are in the business for the long haul, when you are choosing where to source your vehicles please contact us and see the difference good old fashioned service makes'
    },
]

export const VEHICLE_TYPE_DATA = [
    {
        name: 'Hatchback',
        image: '/vehicle/vehicle-hatchback.png'
    },
    {
        name: 'Sedan',
        image: '/vehicle/vehicle-sedan.png'
    },
    {
        name: 'SUV',
        image: '/vehicle/vehicle-SUV.png'
    },
    {
        name: 'MVP',
        image: '/vehicle/vehicle-MVP.png'
    },
    {
        name: 'Coupe',
        image: '/vehicle/vehicle-coupe.png'
    },
    {
        name: 'Truck',
        image: '/vehicle/vehicle-truck.png'
    },
    {
        name: 'Wagon',
        image: '/vehicle/vehicle-SUV.png'
    },
    {
        name: 'Convertible',
        image: '/vehicle/vehicle-SUV.png'
    },
]

export const MODEL_DATA = [
    {
        name: 'Alphard',
        slug: 'alphard',
        brand:{
            name: 'Toyota',
            slug: 'toyota',
        },
        image: '/product/alphard.jpg',
        stering_position: ['LHD','RHD'],
        grades_count: 1
    },
    {
        name: 'Altis',
        slug: 'altis',
        brand:{
            name: 'Toyota',
            slug: 'toyota',
        },
        image: '/product/altis.png',
        stering_position: ['LHD','RHD'],
        grades_count: 2
    },
    {
        name: 'Avanza',
        slug: 'avanza',
        brand:{
            name: 'Toyota',
            slug: 'toyota',
        },
        image: '/product/avanza.jpg',
        stering_position: ['LHD','RHD'],
        grades_count: 3
    },
    {
        name: 'Bz4x',
        slug: 'bz4x',
        brand:{
            name: 'Toyota',
            slug: 'toyota',
        },
        image: '/product/bz4x.jpg',
        stering_position: ['RHD'],
        grades_count: 3
    },
    {
        name: 'Camry',
        slug: 'camry',
        brand:{
            name: 'Toyota',
            slug: 'toyota',
        },
        image: '/product/camry.jpg',
        stering_position: ['LHD','RHD'],
        grades_count: 4
    },
    {
        name: 'Coaster',
        slug: 'coaster',
        brand:{
            name: 'Toyota',
            slug: 'toyota',
        },
        image: '/product/coaster.jpg',
        stering_position: ['RHD'],
        grades_count: 1
    },
    {
        name: 'Commuter',
        slug: 'commuter',
        brand:{
            name: 'Toyota',
            slug: 'toyota',
        },
        image: '/product/commuter.jpg',
        stering_position: ['LHD','RHD'],
        grades_count: 1
    },
    {
        name: 'Corolla',
        slug: 'corolla',
        brand:{
            name: 'Toyota',
            slug: 'toyota',
        },
        image: '/product/corolla.jpg',
        stering_position: ['LHD','RHD'],
        grades_count: 9
    },
    {
        name: 'Fortuner',
        slug: 'fortuner',
        brand:{
            name: 'Toyota',
            slug: 'toyota',
        },
        image: '/product/fortuner.jpg',
        stering_position: ['RHD'],
        grades_count: 7
    },
    {
        name: 'GR86',
        slug: 'gr86',
        brand:{
            name: 'Toyota',
            slug: 'toyota',
        },
        image: '/product/GR86.jpg',
        stering_position: ['LHD','RHD'],
        grades_count: 2
    },
    {
        name: 'Hiace',
        slug: 'hiace',
        brand:{
            name: 'Toyota',
            slug: 'toyota',
        },
        image: '/product/hiace.jpg',
        stering_position: ['LHD','RHD'],
        grades_count: 9
    },
    {
        name: 'highlander',
        slug: 'highlander',
        brand:{
            name: 'Toyota',
            slug: 'toyota',
        },
        image: '/product/highlander.jpg',
        stering_position: ['LHD','RHD'],
        grades_count: 4
    },
    {
        name: 'Hilux',
        slug: 'hilux',
        brand:{
            name: 'Toyota',
            slug: 'toyota',
        },
        image: '/product/hilux.jpg',
        stering_position: ['LHD','RHD'],
        grades_count: 16
    },
    {
        name: 'Innova',
        slug: 'innova',
        brand:{
            name: 'Toyota',
            slug: 'toyota',
        },
        image: '/product/innova.png',
        stering_position: ['LHD','RHD'],
        grades_count: 4
    },
    {
        name: 'Land-Cruiser-300',
        slug: 'land-cruiser-300',
        brand:{
            name: 'Toyota',
            slug: 'toyota',
        },
        image: '/product/land-cruiser-300.jpg',
        stering_position: ['LHD','RHD'],
        grades_count: 2
    },
    {
        name: 'Land-Cruiser-Prado',
        slug: 'land-cruiser-prado',
        brand:{
            name: 'Toyota',
            slug: 'toyota',
        },
        image: '/product/land-cruiser-prado.png',
        stering_position: ['LHD','RHD'],
        grades_count: 2
    },
    
]

export const BODY_TYPE = [
    {
        name: 'Double Cab',
        slug: 'double-cab',
    },
    {
        name: 'Extra Cab',
        slug: 'extra-cab',
    },
    {
        name: 'Single Cab',
        slug: 'single-cab',
    },
    {
        name: 'SUV',
        slug: 'suv',
    },
    {
        name: 'Passanger Car',
        slug: 'passanger-car',
    },
    {
        name: 'MiniVans / Vans',
        slug: 'minivans-vans',
    },
    {
        name: 'Truck',
        slug: 'truck',
    },
    {
        name: 'Bus',
        slug: 'bus',
    },
    {
        name: 'Hybrid & EV',
        slug: 'hybrid-ev',
    },
]

export const STEERING_TYPE = [
    {
        name: 'Right Hand Drive',
        value: 'RHD',
    },
    {
        name: 'Left Hand Drive',
        value: 'LHD',
    }
]

export const VEHICLE_DATA = [
    {
        name: '2022 Nissan Navara NP300 Double Cab VL Calibre 2.5L Diesel 4x2 A/T',
        slug: '2022-nissan-navara-NP300-Double-Cab-VL-Calibre-25L-Diesel-4x2-AT',
        image: [
            {
                url: '/vehicle-data/nissan-navara.jpg'
            },
            {
                url: '/vehicle-data/nissan-navara-2.jpg'
            },
            {
                url: '/vehicle-data/nissan-navara-3.jpg'
            },
            {
                url: '/vehicle-data/nissan-navara-4.jpg'
            },
            {
                url: '/vehicle-data/nissan-navara-5.jpg'
            },
            {
                url: '/vehicle-data/nissan-navara-6.jpg'
            },
            {
                url: '/vehicle-data/nissan-navara-7.jpg'
            },
            {
                url: '/vehicle-data/nissan-navara-3.jpg'
            },
            {
                url: '/vehicle-data/nissan-navara-7.jpg'
            },
            {
                url: '/vehicle-data/nissan-navara-4.jpg'
            },
            {
                url: '/vehicle-data/nissan-navara.jpg'
            },
        ],
        price: '100',
        discount: '95',
        description:'Nissan Navara NP300 Double Cab VL Calibre 2.5L Diesel 4x2 A/T',
        code: '	L50600405',
        year: '2022',
        colours: 'Forged Metallic Copper, Lunar Metallic Gray, Aspen Pearl White',
        engine: 'Inline 4-Cylinder, DOHC, 16-Valve, Variable Turbocharger (VGS) with Intercooler',
        fuel_type: 'Diesel',
        emission: 'Euro 4',
        output: '190 / 3,600',
        torque: '450 / 2,000',
        transmission: '	7-Speed Automatic',
        drive_type: '4WD',
        wheele_size_type: '18" Alloy Wheels',
        tire_size: '235/50R18',
        dimensions: 'L 5,260 X W 1,850 X H 1,845',
        tank_capacity: '80',
        number_door: '4',
        seating_capacity: '5',
        body_type:'Double Cap', 
        safeties:[
            {
                name: 'Adaptive High Beam System (AHS)',
            },
            {
                name: 'Camera Panoramic View Monitor',
            },
            {
                name: 'Dynamic Radar Cruise Control (DRCC)',
            },
            {
                name: 'Lane Departure Alert (LDA)',
            },
            {
                name: 'RCTA Rear Cross Traffic Alert',
            },
            {
                name: 'Security System Alarm + Siren + Immobilizer',
            },
            {
                name: 'Vehicle Stability Control (VSC)',
            },
            {
                name: 'Automatic High Beam (AHB)',
            },
            {
                name: 'Child Restraint System Isofix Tether Anchor : 2',
            },
            {
                name: 'ELR 3 Point 2 Position Seatbelt Row 1',
            },
            {
                name: 'Lane Tracing Assist',
            },
            {
                name: 'Rear #1 Seatbelt 3P ELR (2 pcs) + 3P ELR (1 pc)',
            },
            {
                name: 'SRS Airbags - Curtain Side Rear Passengers',
            },
            {
                name: 'BSM Blind Sport Monitoring',
            },
            {
                name: 'Clearance & Back Sonar Front: 4 Rear: 4',
            },
            {
                name: 'Hill Start Assist Control (HAC)',
            },
            {
                name: 'Pre-Collision System (PCS)',
            },
            {
                name: 'Rear No.2 Seat Belt 3P Elr * 2 + 3P Elr * 1',
            },
        ],
        interiors:[
            {
                name:'15 - Speaker JBL Sound System'
            },
            {
                name:'Accessory Connector 12V (120W) : 1'
            },
            {
                name:'Apple Carplay & Android Auto'
            },
            {
                name:'Cupholder Front : 4 Rear : 5'
            },
            {
                name:'Door Sunshade Rr #1 & #2'
            },
            {
                name:'HDMI Jack'
            },
            {
                name:'Leather Seats'
            },
            {
                name:'Parking Brake EPB + Brake Hold'
            },
            {
                name:'Power Sliding Door Dual'
            },
            {
                name:'Rear Air Condition Dual Zone Climate Control'
            },
            {
                name:'Seat Heater With (D + P + Rear1)'
            },
            {
                name:'Steering Audio + Voice + Display + Telephone + Cruise Control + Lane Departure'
            },
            {
                name:'USB Type C Front: 3 Rear: 4'
            },
            {
                name:'4 Ways Power Front Passenger Seat'
            },
            {
                name:'AM/FM + Bluetooth + Voice Command'
            },
        ],
        exteriors:[
            {
                name:'3-Bulb LED'
            },
            {
                name:'Daytime Running Lights LED'
            },
            {
                name:'High Mount Stop Lamp'
            },
            {
                name:'Outer Mirror Power Adjust + Auto Fold + Heater + Memory'
            },
            {
                name:'Rear Windshield Wiper Intermittent + Reverse-Linked'
            },
            {
                name:'Clearance Lamp LED'
            },
            {
                name:'Front Windshield Wiper Intermittent + Rain-Sensing'
            },
            {
                name:'LED Front Fog Lamps'
            },
            {
                name:'Outer Mirror Puddle Lamp + Reverse-Linked	'
            },
            {
                name:'Side Turn Signal Lamp with Outer Mirror'
            },
        ],
        brand:{
            slug: 'nissan'
        },
        model:{
            slug: 'navara'
        },
        steering:{
            slug: 'RHD',
            name: 'Right Hand Drive'
        }
    },
    {
        name: '2023 Toyota Alphard 2.5L Hybrid 2WD CVT',
        slug: '2023-Toyota-Alphard-2.5L-Hybrid-2WD-CVT',
        image: [
            {
                url: '/vehicle-data/alphard.jpg'
            },
            {
                url: '/vehicle-data/alphard-2.jpg'
            },
            {
                url: '/vehicle-data/alphard-3.jpg'
            },
            {
                url: '/vehicle-data/alphard-4.jpg'
            },
            {
                url: '/vehicle-data/alphard-5.jpg'
            },
            {
                url: '/vehicle-data/alphard-6.jpg'
            },
            {
                url: '/vehicle-data/alphard-7.jpg'
            },
            {
                url: '/vehicle-data/alphard-8.jpg'
            },
            {
                url: '/vehicle-data/alphard-9.jpg'
            },
            {
                url: '/vehicle-data/alphard-10.jpg'
            },
            {
                url: '/vehicle-data/alphard-11.jpg'
            },
            {
                url: '/vehicle-data/alphard-12.jpg'
            },
        ],
        price: '100',
        discount: '95',
        description:'Toyota Alphard 2.5L Hybrid 2WD CVT',
        code: '	L510098',
        year: '2023',
        colours: 'Pearl White, Black',
        engine: 'Hybrid, 4-cylinder, In-Line, 16-valve DOHC,Chain Drive (With Dual VVT-i)',
        fuel_type: 'Hybrid',
        emission: 'Euro 4',
        output: '188/6000',
        torque: '233/4300-4500',
        transmission: 'CVT',
        drive_type: '2WD',
        wheele_size_type: '19" Alloy Wheels',
        tire_size: '155/80R 98',
        dimensions: 'L 5,260 X W 1,850 X H 1,845',
        tank_capacity: '80',
        number_door: '4',
        seating_capacity: '5', 
        body_type:'Passanger Car', 
        safeties:[
            {
                name: 'Adaptive High Beam System (AHS)',
            },
            {
                name: 'Camera Panoramic View Monitor',
            },
            {
                name: 'Dynamic Radar Cruise Control (DRCC)',
            },
            {
                name: 'Lane Departure Alert (LDA)',
            },
            {
                name: 'RCTA Rear Cross Traffic Alert',
            },
            {
                name: 'Security System Alarm + Siren + Immobilizer',
            },
            {
                name: 'Vehicle Stability Control (VSC)',
            },
            {
                name: 'Automatic High Beam (AHB)',
            },
            {
                name: 'Child Restraint System Isofix Tether Anchor : 2',
            },
            {
                name: 'ELR 3 Point 2 Position Seatbelt Row 1',
            },
            {
                name: 'Lane Tracing Assist',
            },
            {
                name: 'Rear #1 Seatbelt 3P ELR (2 pcs) + 3P ELR (1 pc)',
            },
            {
                name: 'SRS Airbags - Curtain Side Rear Passengers',
            },
            {
                name: 'BSM Blind Sport Monitoring',
            },
            {
                name: 'Clearance & Back Sonar Front: 4 Rear: 4',
            },
            {
                name: 'Hill Start Assist Control (HAC)',
            },
            {
                name: 'Pre-Collision System (PCS)',
            },
            {
                name: 'Rear No.2 Seat Belt 3P Elr * 2 + 3P Elr * 1',
            },
        ],
        interiors:[
            {
                name:'15 - Speaker JBL Sound System'
            },
            {
                name:'Accessory Connector 12V (120W) : 1'
            },
            {
                name:'Apple Carplay & Android Auto'
            },
            {
                name:'Cupholder Front : 4 Rear : 5'
            },
            {
                name:'Door Sunshade Rr #1 & #2'
            },
            {
                name:'HDMI Jack'
            },
            {
                name:'Leather Seats'
            },
            {
                name:'Parking Brake EPB + Brake Hold'
            },
            {
                name:'Power Sliding Door Dual'
            },
            {
                name:'Rear Air Condition Dual Zone Climate Control'
            },
            {
                name:'Seat Heater With (D + P + Rear1)'
            },
            {
                name:'Steering Audio + Voice + Display + Telephone + Cruise Control + Lane Departure'
            },
            {
                name:'USB Type C Front: 3 Rear: 4'
            },
            {
                name:'4 Ways Power Front Passenger Seat'
            },
            {
                name:'AM/FM + Bluetooth + Voice Command'
            },
        ],
        exteriors:[
            {
                name:'3-Bulb LED'
            },
            {
                name:'Daytime Running Lights LED'
            },
            {
                name:'High Mount Stop Lamp'
            },
            {
                name:'Outer Mirror Power Adjust + Auto Fold + Heater + Memory'
            },
            {
                name:'Rear Windshield Wiper Intermittent + Reverse-Linked'
            },
            {
                name:'Clearance Lamp LED'
            },
            {
                name:'Front Windshield Wiper Intermittent + Rain-Sensing'
            },
            {
                name:'LED Front Fog Lamps'
            },
            {
                name:'Outer Mirror Puddle Lamp + Reverse-Linked	'
            },
            {
                name:'Side Turn Signal Lamp with Outer Mirror'
            },
        ],
        brand:{
            slug: 'toyota'
        },
        model:{
            slug: 'alphard'
        },
        steering:{
            slug: 'LHD',
            name: 'Left Hand Drive'
        }
    },
    {
        name: '2023 Toyota Avanza E 1.3L Gas 2WD A/T',
        slug: '2023-Toyota-Avanza-E-13L-Gas-2WD-AT',
        image: [
            {
                url: '/vehicle-data/avanza.jpg'
            },
            {
                url: '/vehicle-data/avanza-2.jpg'
            },
            {
                url: '/vehicle-data/avanza-3.jpg'
            },
            {
                url: '/vehicle-data/avanza-4.jpg'
            },
        ],
        price: '100',
        discount: '95',
        description:'Toyota Avanza E 1.3L Gas 2WD A/T',
        code: '	L510088',
        year: '2023',
        colours: 'Silver Mica Metallic, Gray Metallic, Gray Metallic, Beige Metallic, Dark Blue SE',
        engine: '1NR-VE',
        fuel_type: 'Gas',
        emission: 'Euro 4',
        output: '95/6000 (kW/rpm)',
        torque: '121/4200 (Nm/rpm)',
        transmission: '4-Speed Automatic',
        drive_type: '2WD',
        wheele_size_type: '14" Alloy Wheels',
        tire_size: '185/70 R14',
        dimensions: 'L 4,190 X W 1,660 X H 1,695',
        tank_capacity: '45',
        number_door: '5',
        seating_capacity: '7', 
        body_type:'Single Cab', 
        safeties:[
            {
                name: 'Adaptive High Beam System (AHS)',
            },
            {
                name: 'Camera Panoramic View Monitor',
            },
            {
                name: 'Dynamic Radar Cruise Control (DRCC)',
            },
            {
                name: 'Lane Departure Alert (LDA)',
            },
            {
                name: 'RCTA Rear Cross Traffic Alert',
            },
            {
                name: 'Security System Alarm + Siren + Immobilizer',
            },
            {
                name: 'Vehicle Stability Control (VSC)',
            },
            {
                name: 'Automatic High Beam (AHB)',
            },
            {
                name: 'Child Restraint System Isofix Tether Anchor : 2',
            },
            {
                name: 'ELR 3 Point 2 Position Seatbelt Row 1',
            },
            {
                name: 'Lane Tracing Assist',
            },
            {
                name: 'Rear #1 Seatbelt 3P ELR (2 pcs) + 3P ELR (1 pc)',
            },
            {
                name: 'SRS Airbags - Curtain Side Rear Passengers',
            },
            {
                name: 'BSM Blind Sport Monitoring',
            },
            {
                name: 'Clearance & Back Sonar Front: 4 Rear: 4',
            },
            {
                name: 'Hill Start Assist Control (HAC)',
            },
            {
                name: 'Pre-Collision System (PCS)',
            },
            {
                name: 'Rear No.2 Seat Belt 3P Elr * 2 + 3P Elr * 1',
            },
        ],
        interiors:[
            {
                name:'15 - Speaker JBL Sound System'
            },
            {
                name:'Accessory Connector 12V (120W) : 1'
            },
            {
                name:'Apple Carplay & Android Auto'
            },
            {
                name:'Cupholder Front : 4 Rear : 5'
            },
            {
                name:'Door Sunshade Rr #1 & #2'
            },
            {
                name:'HDMI Jack'
            },
            {
                name:'Leather Seats'
            },
            {
                name:'Parking Brake EPB + Brake Hold'
            },
            {
                name:'Power Sliding Door Dual'
            },
            {
                name:'Rear Air Condition Dual Zone Climate Control'
            },
            {
                name:'Seat Heater With (D + P + Rear1)'
            },
            {
                name:'Steering Audio + Voice + Display + Telephone + Cruise Control + Lane Departure'
            },
            {
                name:'USB Type C Front: 3 Rear: 4'
            },
            {
                name:'4 Ways Power Front Passenger Seat'
            },
            {
                name:'AM/FM + Bluetooth + Voice Command'
            },
        ],
        exteriors:[
            {
                name:'3-Bulb LED'
            },
            {
                name:'Daytime Running Lights LED'
            },
            {
                name:'High Mount Stop Lamp'
            },
            {
                name:'Outer Mirror Power Adjust + Auto Fold + Heater + Memory'
            },
            {
                name:'Rear Windshield Wiper Intermittent + Reverse-Linked'
            },
            {
                name:'Clearance Lamp LED'
            },
            {
                name:'Front Windshield Wiper Intermittent + Rain-Sensing'
            },
            {
                name:'LED Front Fog Lamps'
            },
            {
                name:'Outer Mirror Puddle Lamp + Reverse-Linked	'
            },
            {
                name:'Side Turn Signal Lamp with Outer Mirror'
            },
        ],
        brand:{
            slug: 'toyota'
        },
        model:{
            slug: 'avanza'
        },
        steering:{
            slug: 'RHD',
            name: 'Right Hand Drive'
        }
    },
    {
        name: '2023 Toyota Avanza E 1.3L Gas 2WD M/T',
        slug: '2023-Toyota-Avanza-E-13L-Gas-2WD-MT',
        image: [
            {
                url: '/vehicle-data/avanza-2.jpg'
            },
            {
                url: '/vehicle-data/avanza.jpg'
            },
            {
                url: '/vehicle-data/avanza-3.jpg'
            },
            {
                url: '/vehicle-data/avanza-4.jpg'
            },
        ],
        price: '100',
        discount: '95',
        description:'Toyota Avanza E 1.3L Gas 2WD A/T',
        code: '	L510088',
        year: '2023',
        colours: 'Silver Mica Metallic, Gray Metallic, Gray Metallic, Beige Metallic, Dark Blue SE',
        engine: '1NR-VE',
        fuel_type: 'Gas',
        emission: 'Euro 4',
        output: '95/6000 (kW/rpm)',
        torque: '121/4200 (Nm/rpm)',
        transmission: '4-Speed Automatic',
        drive_type: '2WD',
        wheele_size_type: '14" Alloy Wheels',
        tire_size: '185/70 R14',
        dimensions: 'L 4,190 X W 1,660 X H 1,695',
        tank_capacity: '45',
        number_door: '5',
        seating_capacity: '7', 
        body_type:'Single Cab',
        safeties:[
            {
                name: 'Adaptive High Beam System (AHS)',
            },
            {
                name: 'Camera Panoramic View Monitor',
            },
            {
                name: 'Dynamic Radar Cruise Control (DRCC)',
            },
            {
                name: 'Lane Departure Alert (LDA)',
            },
            {
                name: 'RCTA Rear Cross Traffic Alert',
            },
            {
                name: 'Security System Alarm + Siren + Immobilizer',
            },
            {
                name: 'Vehicle Stability Control (VSC)',
            },
            {
                name: 'Automatic High Beam (AHB)',
            },
            {
                name: 'Child Restraint System Isofix Tether Anchor : 2',
            },
            {
                name: 'ELR 3 Point 2 Position Seatbelt Row 1',
            },
            {
                name: 'Lane Tracing Assist',
            },
            {
                name: 'Rear #1 Seatbelt 3P ELR (2 pcs) + 3P ELR (1 pc)',
            },
            {
                name: 'SRS Airbags - Curtain Side Rear Passengers',
            },
            {
                name: 'BSM Blind Sport Monitoring',
            },
            {
                name: 'Clearance & Back Sonar Front: 4 Rear: 4',
            },
            {
                name: 'Hill Start Assist Control (HAC)',
            },
            {
                name: 'Pre-Collision System (PCS)',
            },
            {
                name: 'Rear No.2 Seat Belt 3P Elr * 2 + 3P Elr * 1',
            },
        ],
        interiors:[
            {
                name:'15 - Speaker JBL Sound System'
            },
            {
                name:'Accessory Connector 12V (120W) : 1'
            },
            {
                name:'Apple Carplay & Android Auto'
            },
            {
                name:'Cupholder Front : 4 Rear : 5'
            },
            {
                name:'Door Sunshade Rr #1 & #2'
            },
            {
                name:'HDMI Jack'
            },
            {
                name:'Leather Seats'
            },
            {
                name:'Parking Brake EPB + Brake Hold'
            },
            {
                name:'Power Sliding Door Dual'
            },
            {
                name:'Rear Air Condition Dual Zone Climate Control'
            },
            {
                name:'Seat Heater With (D + P + Rear1)'
            },
            {
                name:'Steering Audio + Voice + Display + Telephone + Cruise Control + Lane Departure'
            },
            {
                name:'USB Type C Front: 3 Rear: 4'
            },
            {
                name:'4 Ways Power Front Passenger Seat'
            },
            {
                name:'AM/FM + Bluetooth + Voice Command'
            },
        ],
        exteriors:[
            {
                name:'3-Bulb LED'
            },
            {
                name:'Daytime Running Lights LED'
            },
            {
                name:'High Mount Stop Lamp'
            },
            {
                name:'Outer Mirror Power Adjust + Auto Fold + Heater + Memory'
            },
            {
                name:'Rear Windshield Wiper Intermittent + Reverse-Linked'
            },
            {
                name:'Clearance Lamp LED'
            },
            {
                name:'Front Windshield Wiper Intermittent + Rain-Sensing'
            },
            {
                name:'LED Front Fog Lamps'
            },
            {
                name:'Outer Mirror Puddle Lamp + Reverse-Linked	'
            },
            {
                name:'Side Turn Signal Lamp with Outer Mirror'
            },
        ],
        brand:{
            slug: 'toyota'
        },
        model:{
            slug: 'avanza'
        },
        steering:{
            slug: 'RHD',
            name: 'Right Hand Drive'
        }
    },
    {
        name: '2023 Toyota Avanza J 1.3L 2WD M/T',
        slug: '2023-Toyota-Avanza-J-13L-2WD-MT',
        image: [
            {
                url: '/vehicle-data/avanza-3.webp'
            },
            {
                url: '/vehicle-data/avanza-2.jpg'
            },
            {
                url: '/vehicle-data/avanza-3.jpg'
            },
            {
                url: '/vehicle-data/avanza-4.jpg'
            },
        ],
        price: '100',
        discount: '95',
        description:'Toyota Avanza E 1.3L Gas 2WD A/T',
        code: '	L510088',
        year: '2023',
        colours: 'Silver Mica Metallic, Gray Metallic, Gray Metallic, Beige Metallic, Dark Blue SE',
        engine: '1NR-VE',
        fuel_type: 'Gas',
        emission: 'Euro 4',
        output: '95/6000 (kW/rpm)',
        torque: '121/4200 (Nm/rpm)',
        transmission: '4-Speed Automatic',
        drive_type: '2WD',
        wheele_size_type: '14" Alloy Wheels',
        tire_size: '185/70 R14',
        dimensions: 'L 4,190 X W 1,660 X H 1,695',
        tank_capacity: '45',
        number_door: '5',
        seating_capacity: '7',
        body_type:'Single Cab', 
        safeties:[
            {
                name: 'Adaptive High Beam System (AHS)',
            },
            {
                name: 'Camera Panoramic View Monitor',
            },
            {
                name: 'Dynamic Radar Cruise Control (DRCC)',
            },
            {
                name: 'Lane Departure Alert (LDA)',
            },
            {
                name: 'RCTA Rear Cross Traffic Alert',
            },
            {
                name: 'Security System Alarm + Siren + Immobilizer',
            },
            {
                name: 'Vehicle Stability Control (VSC)',
            },
            {
                name: 'Automatic High Beam (AHB)',
            },
            {
                name: 'Child Restraint System Isofix Tether Anchor : 2',
            },
            {
                name: 'ELR 3 Point 2 Position Seatbelt Row 1',
            },
            {
                name: 'Lane Tracing Assist',
            },
            {
                name: 'Rear #1 Seatbelt 3P ELR (2 pcs) + 3P ELR (1 pc)',
            },
            {
                name: 'SRS Airbags - Curtain Side Rear Passengers',
            },
            {
                name: 'BSM Blind Sport Monitoring',
            },
            {
                name: 'Clearance & Back Sonar Front: 4 Rear: 4',
            },
            {
                name: 'Hill Start Assist Control (HAC)',
            },
            {
                name: 'Pre-Collision System (PCS)',
            },
            {
                name: 'Rear No.2 Seat Belt 3P Elr * 2 + 3P Elr * 1',
            },
        ],
        interiors:[
            {
                name:'15 - Speaker JBL Sound System'
            },
            {
                name:'Accessory Connector 12V (120W) : 1'
            },
            {
                name:'Apple Carplay & Android Auto'
            },
            {
                name:'Cupholder Front : 4 Rear : 5'
            },
            {
                name:'Door Sunshade Rr #1 & #2'
            },
            {
                name:'HDMI Jack'
            },
            {
                name:'Leather Seats'
            },
            {
                name:'Parking Brake EPB + Brake Hold'
            },
            {
                name:'Power Sliding Door Dual'
            },
            {
                name:'Rear Air Condition Dual Zone Climate Control'
            },
            {
                name:'Seat Heater With (D + P + Rear1)'
            },
            {
                name:'Steering Audio + Voice + Display + Telephone + Cruise Control + Lane Departure'
            },
            {
                name:'USB Type C Front: 3 Rear: 4'
            },
            {
                name:'4 Ways Power Front Passenger Seat'
            },
            {
                name:'AM/FM + Bluetooth + Voice Command'
            },
        ],
        exteriors:[
            {
                name:'3-Bulb LED'
            },
            {
                name:'Daytime Running Lights LED'
            },
            {
                name:'High Mount Stop Lamp'
            },
            {
                name:'Outer Mirror Power Adjust + Auto Fold + Heater + Memory'
            },
            {
                name:'Rear Windshield Wiper Intermittent + Reverse-Linked'
            },
            {
                name:'Clearance Lamp LED'
            },
            {
                name:'Front Windshield Wiper Intermittent + Rain-Sensing'
            },
            {
                name:'LED Front Fog Lamps'
            },
            {
                name:'Outer Mirror Puddle Lamp + Reverse-Linked	'
            },
            {
                name:'Side Turn Signal Lamp with Outer Mirror'
            },
        ],
        brand:{
            slug: 'toyota'
        },
        model:{
            slug: 'avanza'
        },
        steering:{
            slug: 'LHD',
            name: 'Left Hand Drive'
        }
    },
    {
        name: '2023 Toyota Altis E 1.6L Petrol 2WD CVT',
        slug: '2023-Toyota-Altis-E-2WD-MT',
        image: [
            {
                url: '/vehicle-data/altis.jpg'
            },
            {
                url: '/vehicle-data/avanza-2.jpg'
            },
            {
                url: '/vehicle-data/avanza-3.jpg'
            },
            {
                url: '/vehicle-data/avanza-4.jpg'
            },
        ],
        price: '100',
        discount: '95',
        description:'Toyota Avanza E 1.3L Gas 2WD A/T',
        code: '	L510088',
        year: '2023',
        colours: 'Silver Mica Metallic, Gray Metallic, Gray Metallic, Beige Metallic, Dark Blue SE',
        engine: '1NR-VE',
        fuel_type: 'Gas',
        emission: 'Euro 4',
        output: '95/6000 (kW/rpm)',
        torque: '121/4200 (Nm/rpm)',
        transmission: '4-Speed Automatic',
        drive_type: '2WD',
        wheele_size_type: '14" Alloy Wheels',
        tire_size: '185/70 R14',
        dimensions: 'L 4,190 X W 1,660 X H 1,695',
        tank_capacity: '45',
        number_door: '5',
        seating_capacity: '7', 
        body_type:'Extra Cab',
        safeties:[
            {
                name: 'Adaptive High Beam System (AHS)',
            },
            {
                name: 'Camera Panoramic View Monitor',
            },
            {
                name: 'Dynamic Radar Cruise Control (DRCC)',
            },
            {
                name: 'Lane Departure Alert (LDA)',
            },
            {
                name: 'RCTA Rear Cross Traffic Alert',
            },
            {
                name: 'Security System Alarm + Siren + Immobilizer',
            },
            {
                name: 'Vehicle Stability Control (VSC)',
            },
            {
                name: 'Automatic High Beam (AHB)',
            },
            {
                name: 'Child Restraint System Isofix Tether Anchor : 2',
            },
            {
                name: 'ELR 3 Point 2 Position Seatbelt Row 1',
            },
            {
                name: 'Lane Tracing Assist',
            },
            {
                name: 'Rear #1 Seatbelt 3P ELR (2 pcs) + 3P ELR (1 pc)',
            },
            {
                name: 'SRS Airbags - Curtain Side Rear Passengers',
            },
            {
                name: 'BSM Blind Sport Monitoring',
            },
            {
                name: 'Clearance & Back Sonar Front: 4 Rear: 4',
            },
            {
                name: 'Hill Start Assist Control (HAC)',
            },
            {
                name: 'Pre-Collision System (PCS)',
            },
            {
                name: 'Rear No.2 Seat Belt 3P Elr * 2 + 3P Elr * 1',
            },
        ],
        interiors:[
            {
                name:'15 - Speaker JBL Sound System'
            },
            {
                name:'Accessory Connector 12V (120W) : 1'
            },
            {
                name:'Apple Carplay & Android Auto'
            },
            {
                name:'Cupholder Front : 4 Rear : 5'
            },
            {
                name:'Door Sunshade Rr #1 & #2'
            },
            {
                name:'HDMI Jack'
            },
            {
                name:'Leather Seats'
            },
            {
                name:'Parking Brake EPB + Brake Hold'
            },
            {
                name:'Power Sliding Door Dual'
            },
            {
                name:'Rear Air Condition Dual Zone Climate Control'
            },
            {
                name:'Seat Heater With (D + P + Rear1)'
            },
            {
                name:'Steering Audio + Voice + Display + Telephone + Cruise Control + Lane Departure'
            },
            {
                name:'USB Type C Front: 3 Rear: 4'
            },
            {
                name:'4 Ways Power Front Passenger Seat'
            },
            {
                name:'AM/FM + Bluetooth + Voice Command'
            },
        ],
        exteriors:[
            {
                name:'3-Bulb LED'
            },
            {
                name:'Daytime Running Lights LED'
            },
            {
                name:'High Mount Stop Lamp'
            },
            {
                name:'Outer Mirror Power Adjust + Auto Fold + Heater + Memory'
            },
            {
                name:'Rear Windshield Wiper Intermittent + Reverse-Linked'
            },
            {
                name:'Clearance Lamp LED'
            },
            {
                name:'Front Windshield Wiper Intermittent + Rain-Sensing'
            },
            {
                name:'LED Front Fog Lamps'
            },
            {
                name:'Outer Mirror Puddle Lamp + Reverse-Linked	'
            },
            {
                name:'Side Turn Signal Lamp with Outer Mirror'
            },
        ],
        brand:{
            slug: 'toyota'
        },
        model:{
            slug: 'altis'
        },
        steering:{
            slug: 'LHD',
            name: 'Left Hand Drive'
        }
    },
    {
        name: '2023 Toyota Altis G 1.6L Petrol 2WD CVT',
        slug: '2023-Toyota-Altis-E-2WD-CVT',
        image: [
            {
                url: '/vehicle-data/altis-2.webp'
            },
            {
                url: '/vehicle-data/avanza-2.jpg'
            },
            {
                url: '/vehicle-data/avanza-3.jpg'
            },
            {
                url: '/vehicle-data/avanza-4.jpg'
            },
        ],
        price: '100',
        discount: '95',
        description:'Toyota Avanza E 1.3L Gas 2WD A/T',
        code: '	L510088',
        year: '2023',
        colours: 'Silver Mica Metallic, Gray Metallic, Gray Metallic, Beige Metallic, Dark Blue SE',
        engine: '1NR-VE',
        fuel_type: 'Gas',
        emission: 'Euro 4',
        output: '95/6000 (kW/rpm)',
        torque: '121/4200 (Nm/rpm)',
        transmission: '4-Speed Automatic',
        drive_type: '2WD',
        wheele_size_type: '14" Alloy Wheels',
        tire_size: '185/70 R14',
        dimensions: 'L 4,190 X W 1,660 X H 1,695',
        tank_capacity: '45',
        number_door: '5',
        seating_capacity: '7', 
        body_type:'Extra Cab',
        safeties:[
            {
                name: 'Adaptive High Beam System (AHS)',
            },
            {
                name: 'Camera Panoramic View Monitor',
            },
            {
                name: 'Dynamic Radar Cruise Control (DRCC)',
            },
            {
                name: 'Lane Departure Alert (LDA)',
            },
            {
                name: 'RCTA Rear Cross Traffic Alert',
            },
            {
                name: 'Security System Alarm + Siren + Immobilizer',
            },
            {
                name: 'Vehicle Stability Control (VSC)',
            },
            {
                name: 'Automatic High Beam (AHB)',
            },
            {
                name: 'Child Restraint System Isofix Tether Anchor : 2',
            },
            {
                name: 'ELR 3 Point 2 Position Seatbelt Row 1',
            },
            {
                name: 'Lane Tracing Assist',
            },
            {
                name: 'Rear #1 Seatbelt 3P ELR (2 pcs) + 3P ELR (1 pc)',
            },
            {
                name: 'SRS Airbags - Curtain Side Rear Passengers',
            },
            {
                name: 'BSM Blind Sport Monitoring',
            },
            {
                name: 'Clearance & Back Sonar Front: 4 Rear: 4',
            },
            {
                name: 'Hill Start Assist Control (HAC)',
            },
            {
                name: 'Pre-Collision System (PCS)',
            },
            {
                name: 'Rear No.2 Seat Belt 3P Elr * 2 + 3P Elr * 1',
            },
        ],
        interiors:[
            {
                name:'15 - Speaker JBL Sound System'
            },
            {
                name:'Accessory Connector 12V (120W) : 1'
            },
            {
                name:'Apple Carplay & Android Auto'
            },
            {
                name:'Cupholder Front : 4 Rear : 5'
            },
            {
                name:'Door Sunshade Rr #1 & #2'
            },
            {
                name:'HDMI Jack'
            },
            {
                name:'Leather Seats'
            },
            {
                name:'Parking Brake EPB + Brake Hold'
            },
            {
                name:'Power Sliding Door Dual'
            },
            {
                name:'Rear Air Condition Dual Zone Climate Control'
            },
            {
                name:'Seat Heater With (D + P + Rear1)'
            },
            {
                name:'Steering Audio + Voice + Display + Telephone + Cruise Control + Lane Departure'
            },
            {
                name:'USB Type C Front: 3 Rear: 4'
            },
            {
                name:'4 Ways Power Front Passenger Seat'
            },
            {
                name:'AM/FM + Bluetooth + Voice Command'
            },
        ],
        exteriors:[
            {
                name:'3-Bulb LED'
            },
            {
                name:'Daytime Running Lights LED'
            },
            {
                name:'High Mount Stop Lamp'
            },
            {
                name:'Outer Mirror Power Adjust + Auto Fold + Heater + Memory'
            },
            {
                name:'Rear Windshield Wiper Intermittent + Reverse-Linked'
            },
            {
                name:'Clearance Lamp LED'
            },
            {
                name:'Front Windshield Wiper Intermittent + Rain-Sensing'
            },
            {
                name:'LED Front Fog Lamps'
            },
            {
                name:'Outer Mirror Puddle Lamp + Reverse-Linked	'
            },
            {
                name:'Side Turn Signal Lamp with Outer Mirror'
            },
        ],
        brand:{
            slug: 'toyota'
        },
        model:{
            slug: 'bz4x'
        },
        steering:{
            slug: 'LHD',
            name: 'Left Hand Drive'
        }
    },
    {
        name: '2023 Toyota Bz4x Long Endurance Pro EV 2WD',
        slug: '2023-Toyota-Bz4x-Long-Endurance-Pro-EV-2WD',
        image: [
            {
                url: '/vehicle-data/bz4x.jpg'
            },
            {
                url: '/vehicle-data/avanza-2.jpg'
            },
            {
                url: '/vehicle-data/avanza-3.jpg'
            },
            {
                url: '/vehicle-data/avanza-4.jpg'
            },
        ],
        price: '100',
        discount: '95',
        description:'Toyota Avanza E 1.3L Gas 2WD A/T',
        code: '	L510088',
        year: '2023',
        colours: 'Silver Mica Metallic, Gray Metallic, Gray Metallic, Beige Metallic, Dark Blue SE',
        engine: '1NR-VE',
        fuel_type: 'Gas',
        emission: 'Euro 4',
        output: '95/6000 (kW/rpm)',
        torque: '121/4200 (Nm/rpm)',
        transmission: '4-Speed Automatic',
        drive_type: '2WD',
        wheele_size_type: '14" Alloy Wheels',
        tire_size: '185/70 R14',
        dimensions: 'L 4,190 X W 1,660 X H 1,695',
        tank_capacity: '45',
        number_door: '5',
        seating_capacity: '7', 
        body_type:'SUV',
        safeties:[
            {
                name: 'Adaptive High Beam System (AHS)',
            },
            {
                name: 'Camera Panoramic View Monitor',
            },
            {
                name: 'Dynamic Radar Cruise Control (DRCC)',
            },
            {
                name: 'Lane Departure Alert (LDA)',
            },
            {
                name: 'RCTA Rear Cross Traffic Alert',
            },
            {
                name: 'Security System Alarm + Siren + Immobilizer',
            },
            {
                name: 'Vehicle Stability Control (VSC)',
            },
            {
                name: 'Automatic High Beam (AHB)',
            },
            {
                name: 'Child Restraint System Isofix Tether Anchor : 2',
            },
            {
                name: 'ELR 3 Point 2 Position Seatbelt Row 1',
            },
            {
                name: 'Lane Tracing Assist',
            },
            {
                name: 'Rear #1 Seatbelt 3P ELR (2 pcs) + 3P ELR (1 pc)',
            },
            {
                name: 'SRS Airbags - Curtain Side Rear Passengers',
            },
            {
                name: 'BSM Blind Sport Monitoring',
            },
            {
                name: 'Clearance & Back Sonar Front: 4 Rear: 4',
            },
            {
                name: 'Hill Start Assist Control (HAC)',
            },
            {
                name: 'Pre-Collision System (PCS)',
            },
            {
                name: 'Rear No.2 Seat Belt 3P Elr * 2 + 3P Elr * 1',
            },
        ],
        interiors:[
            {
                name:'15 - Speaker JBL Sound System'
            },
            {
                name:'Accessory Connector 12V (120W) : 1'
            },
            {
                name:'Apple Carplay & Android Auto'
            },
            {
                name:'Cupholder Front : 4 Rear : 5'
            },
            {
                name:'Door Sunshade Rr #1 & #2'
            },
            {
                name:'HDMI Jack'
            },
            {
                name:'Leather Seats'
            },
            {
                name:'Parking Brake EPB + Brake Hold'
            },
            {
                name:'Power Sliding Door Dual'
            },
            {
                name:'Rear Air Condition Dual Zone Climate Control'
            },
            {
                name:'Seat Heater With (D + P + Rear1)'
            },
            {
                name:'Steering Audio + Voice + Display + Telephone + Cruise Control + Lane Departure'
            },
            {
                name:'USB Type C Front: 3 Rear: 4'
            },
            {
                name:'4 Ways Power Front Passenger Seat'
            },
            {
                name:'AM/FM + Bluetooth + Voice Command'
            },
        ],
        exteriors:[
            {
                name:'3-Bulb LED'
            },
            {
                name:'Daytime Running Lights LED'
            },
            {
                name:'High Mount Stop Lamp'
            },
            {
                name:'Outer Mirror Power Adjust + Auto Fold + Heater + Memory'
            },
            {
                name:'Rear Windshield Wiper Intermittent + Reverse-Linked'
            },
            {
                name:'Clearance Lamp LED'
            },
            {
                name:'Front Windshield Wiper Intermittent + Rain-Sensing'
            },
            {
                name:'LED Front Fog Lamps'
            },
            {
                name:'Outer Mirror Puddle Lamp + Reverse-Linked	'
            },
            {
                name:'Side Turn Signal Lamp with Outer Mirror'
            },
        ],
        brand:{
            slug: 'toyota'
        },
        model:{
            slug: 'bz4x'
        },
        steering:{
            slug: 'LHD',
            name: 'Left Hand Drive'
        }
    },
    {
        name: '2023 Toyota Bz4x X-MODE 4WD Pro EV',
        slug: '2023-Toyota-Bz4x-X-MODE-4WD-Pro-EV',
        image: [
            {
                url: '/vehicle-data/bz4x-2.webp'
            },
            {
                url: '/vehicle-data/avanza-2.jpg'
            },
            {
                url: '/vehicle-data/avanza-3.jpg'
            },
            {
                url: '/vehicle-data/avanza-4.jpg'
            },
        ],
        price: '100',
        discount: '95',
        description:'Toyota Avanza E 1.3L Gas 2WD A/T',
        code: '	L510088',
        year: '2023',
        colours: 'Silver Mica Metallic, Gray Metallic, Gray Metallic, Beige Metallic, Dark Blue SE',
        engine: '1NR-VE',
        fuel_type: 'Gas',
        emission: 'Euro 4',
        output: '95/6000 (kW/rpm)',
        torque: '121/4200 (Nm/rpm)',
        transmission: '4-Speed Automatic',
        drive_type: '2WD',
        wheele_size_type: '14" Alloy Wheels',
        tire_size: '185/70 R14',
        dimensions: 'L 4,190 X W 1,660 X H 1,695',
        tank_capacity: '45',
        number_door: '5',
        seating_capacity: '7', 
        body_type:'SUV',
        safeties:[
            {
                name: 'Adaptive High Beam System (AHS)',
            },
            {
                name: 'Camera Panoramic View Monitor',
            },
            {
                name: 'Dynamic Radar Cruise Control (DRCC)',
            },
            {
                name: 'Lane Departure Alert (LDA)',
            },
            {
                name: 'RCTA Rear Cross Traffic Alert',
            },
            {
                name: 'Security System Alarm + Siren + Immobilizer',
            },
            {
                name: 'Vehicle Stability Control (VSC)',
            },
            {
                name: 'Automatic High Beam (AHB)',
            },
            {
                name: 'Child Restraint System Isofix Tether Anchor : 2',
            },
            {
                name: 'ELR 3 Point 2 Position Seatbelt Row 1',
            },
            {
                name: 'Lane Tracing Assist',
            },
            {
                name: 'Rear #1 Seatbelt 3P ELR (2 pcs) + 3P ELR (1 pc)',
            },
            {
                name: 'SRS Airbags - Curtain Side Rear Passengers',
            },
            {
                name: 'BSM Blind Sport Monitoring',
            },
            {
                name: 'Clearance & Back Sonar Front: 4 Rear: 4',
            },
            {
                name: 'Hill Start Assist Control (HAC)',
            },
            {
                name: 'Pre-Collision System (PCS)',
            },
            {
                name: 'Rear No.2 Seat Belt 3P Elr * 2 + 3P Elr * 1',
            },
        ],
        interiors:[
            {
                name:'15 - Speaker JBL Sound System'
            },
            {
                name:'Accessory Connector 12V (120W) : 1'
            },
            {
                name:'Apple Carplay & Android Auto'
            },
            {
                name:'Cupholder Front : 4 Rear : 5'
            },
            {
                name:'Door Sunshade Rr #1 & #2'
            },
            {
                name:'HDMI Jack'
            },
            {
                name:'Leather Seats'
            },
            {
                name:'Parking Brake EPB + Brake Hold'
            },
            {
                name:'Power Sliding Door Dual'
            },
            {
                name:'Rear Air Condition Dual Zone Climate Control'
            },
            {
                name:'Seat Heater With (D + P + Rear1)'
            },
            {
                name:'Steering Audio + Voice + Display + Telephone + Cruise Control + Lane Departure'
            },
            {
                name:'USB Type C Front: 3 Rear: 4'
            },
            {
                name:'4 Ways Power Front Passenger Seat'
            },
            {
                name:'AM/FM + Bluetooth + Voice Command'
            },
        ],
        exteriors:[
            {
                name:'3-Bulb LED'
            },
            {
                name:'Daytime Running Lights LED'
            },
            {
                name:'High Mount Stop Lamp'
            },
            {
                name:'Outer Mirror Power Adjust + Auto Fold + Heater + Memory'
            },
            {
                name:'Rear Windshield Wiper Intermittent + Reverse-Linked'
            },
            {
                name:'Clearance Lamp LED'
            },
            {
                name:'Front Windshield Wiper Intermittent + Rain-Sensing'
            },
            {
                name:'LED Front Fog Lamps'
            },
            {
                name:'Outer Mirror Puddle Lamp + Reverse-Linked	'
            },
            {
                name:'Side Turn Signal Lamp with Outer Mirror'
            },
        ],
        brand:{
            slug: 'toyota'
        },
        model:{
            slug: 'bz4x'
        },
        steering:{
            slug: 'LHD',
            name: 'Left Hand Drive'
        }
    },
    {
        name: '2023 Toyota Bz4x X-MODE 4WD Ultra EV',
        slug: '2023-Toyota-Bz4x-X-MODE-4WD-Ultra-EV',
        image: [
            {
                url: '/vehicle-data/bz4x-3.webp'
            },
            {
                url: '/vehicle-data/avanza-2.jpg'
            },
            {
                url: '/vehicle-data/avanza-3.jpg'
            },
            {
                url: '/vehicle-data/avanza-4.jpg'
            },
        ],
        price: '100',
        discount: '95',
        description:'Toyota Avanza E 1.3L Gas 2WD A/T',
        code: '	L510088',
        year: '2023',
        colours: 'Silver Mica Metallic, Gray Metallic, Gray Metallic, Beige Metallic, Dark Blue SE',
        engine: '1NR-VE',
        fuel_type: 'Gas',
        emission: 'Euro 4',
        output: '95/6000 (kW/rpm)',
        torque: '121/4200 (Nm/rpm)',
        transmission: '4-Speed Automatic',
        drive_type: '2WD',
        wheele_size_type: '14" Alloy Wheels',
        tire_size: '185/70 R14',
        dimensions: 'L 4,190 X W 1,660 X H 1,695',
        tank_capacity: '45',
        number_door: '5',
        seating_capacity: '7', 
        body_type:'SUV',
        safeties:[
            {
                name: 'Adaptive High Beam System (AHS)',
            },
            {
                name: 'Camera Panoramic View Monitor',
            },
            {
                name: 'Dynamic Radar Cruise Control (DRCC)',
            },
            {
                name: 'Lane Departure Alert (LDA)',
            },
            {
                name: 'RCTA Rear Cross Traffic Alert',
            },
            {
                name: 'Security System Alarm + Siren + Immobilizer',
            },
            {
                name: 'Vehicle Stability Control (VSC)',
            },
            {
                name: 'Automatic High Beam (AHB)',
            },
            {
                name: 'Child Restraint System Isofix Tether Anchor : 2',
            },
            {
                name: 'ELR 3 Point 2 Position Seatbelt Row 1',
            },
            {
                name: 'Lane Tracing Assist',
            },
            {
                name: 'Rear #1 Seatbelt 3P ELR (2 pcs) + 3P ELR (1 pc)',
            },
            {
                name: 'SRS Airbags - Curtain Side Rear Passengers',
            },
            {
                name: 'BSM Blind Sport Monitoring',
            },
            {
                name: 'Clearance & Back Sonar Front: 4 Rear: 4',
            },
            {
                name: 'Hill Start Assist Control (HAC)',
            },
            {
                name: 'Pre-Collision System (PCS)',
            },
            {
                name: 'Rear No.2 Seat Belt 3P Elr * 2 + 3P Elr * 1',
            },
        ],
        interiors:[
            {
                name:'15 - Speaker JBL Sound System'
            },
            {
                name:'Accessory Connector 12V (120W) : 1'
            },
            {
                name:'Apple Carplay & Android Auto'
            },
            {
                name:'Cupholder Front : 4 Rear : 5'
            },
            {
                name:'Door Sunshade Rr #1 & #2'
            },
            {
                name:'HDMI Jack'
            },
            {
                name:'Leather Seats'
            },
            {
                name:'Parking Brake EPB + Brake Hold'
            },
            {
                name:'Power Sliding Door Dual'
            },
            {
                name:'Rear Air Condition Dual Zone Climate Control'
            },
            {
                name:'Seat Heater With (D + P + Rear1)'
            },
            {
                name:'Steering Audio + Voice + Display + Telephone + Cruise Control + Lane Departure'
            },
            {
                name:'USB Type C Front: 3 Rear: 4'
            },
            {
                name:'4 Ways Power Front Passenger Seat'
            },
            {
                name:'AM/FM + Bluetooth + Voice Command'
            },
        ],
        exteriors:[
            {
                name:'3-Bulb LED'
            },
            {
                name:'Daytime Running Lights LED'
            },
            {
                name:'High Mount Stop Lamp'
            },
            {
                name:'Outer Mirror Power Adjust + Auto Fold + Heater + Memory'
            },
            {
                name:'Rear Windshield Wiper Intermittent + Reverse-Linked'
            },
            {
                name:'Clearance Lamp LED'
            },
            {
                name:'Front Windshield Wiper Intermittent + Rain-Sensing'
            },
            {
                name:'LED Front Fog Lamps'
            },
            {
                name:'Outer Mirror Puddle Lamp + Reverse-Linked	'
            },
            {
                name:'Side Turn Signal Lamp with Outer Mirror'
            },
        ],
        brand:{
            slug: 'toyota'
        },
        model:{
            slug: 'bz4x'
        },
        steering:{
            slug: 'LHD',
            name: 'Left Hand Drive'
        }
    },
    {
        name: '2023 Toyota Bz4x X-MODE 4WD Ultra EV CVT',
        slug: '2023-Toyota-Bz4x-X-MODE-4WD-Ultra-EV-CVT',
        image: [
            {
                url: '/vehicle-data/bz4x.jpg'
            },
            {
                url: '/vehicle-data/avanza-2.jpg'
            },
            {
                url: '/vehicle-data/avanza-3.jpg'
            },
            {
                url: '/vehicle-data/avanza-4.jpg'
            },
        ],
        price: '100',
        discount: '95',
        description:'Toyota Avanza E 1.3L Gas 2WD A/T',
        code: '	L510088',
        year: '2023',
        colours: 'Silver Mica Metallic, Gray Metallic, Gray Metallic, Beige Metallic, Dark Blue SE',
        engine: '1NR-VE',
        fuel_type: 'Gas',
        emission: 'Euro 4',
        output: '95/6000 (kW/rpm)',
        torque: '121/4200 (Nm/rpm)',
        transmission: '4-Speed Automatic',
        drive_type: '2WD',
        wheele_size_type: '14" Alloy Wheels',
        tire_size: '185/70 R14',
        dimensions: 'L 4,190 X W 1,660 X H 1,695',
        tank_capacity: '45',
        number_door: '5',
        seating_capacity: '7', 
        body_type:'SUV',
        safeties:[
            {
                name: 'Adaptive High Beam System (AHS)',
            },
            {
                name: 'Camera Panoramic View Monitor',
            },
            {
                name: 'Dynamic Radar Cruise Control (DRCC)',
            },
            {
                name: 'Lane Departure Alert (LDA)',
            },
            {
                name: 'RCTA Rear Cross Traffic Alert',
            },
            {
                name: 'Security System Alarm + Siren + Immobilizer',
            },
            {
                name: 'Vehicle Stability Control (VSC)',
            },
            {
                name: 'Automatic High Beam (AHB)',
            },
            {
                name: 'Child Restraint System Isofix Tether Anchor : 2',
            },
            {
                name: 'ELR 3 Point 2 Position Seatbelt Row 1',
            },
            {
                name: 'Lane Tracing Assist',
            },
            {
                name: 'Rear #1 Seatbelt 3P ELR (2 pcs) + 3P ELR (1 pc)',
            },
            {
                name: 'SRS Airbags - Curtain Side Rear Passengers',
            },
            {
                name: 'BSM Blind Sport Monitoring',
            },
            {
                name: 'Clearance & Back Sonar Front: 4 Rear: 4',
            },
            {
                name: 'Hill Start Assist Control (HAC)',
            },
            {
                name: 'Pre-Collision System (PCS)',
            },
            {
                name: 'Rear No.2 Seat Belt 3P Elr * 2 + 3P Elr * 1',
            },
        ],
        interiors:[
            {
                name:'15 - Speaker JBL Sound System'
            },
            {
                name:'Accessory Connector 12V (120W) : 1'
            },
            {
                name:'Apple Carplay & Android Auto'
            },
            {
                name:'Cupholder Front : 4 Rear : 5'
            },
            {
                name:'Door Sunshade Rr #1 & #2'
            },
            {
                name:'HDMI Jack'
            },
            {
                name:'Leather Seats'
            },
            {
                name:'Parking Brake EPB + Brake Hold'
            },
            {
                name:'Power Sliding Door Dual'
            },
            {
                name:'Rear Air Condition Dual Zone Climate Control'
            },
            {
                name:'Seat Heater With (D + P + Rear1)'
            },
            {
                name:'Steering Audio + Voice + Display + Telephone + Cruise Control + Lane Departure'
            },
            {
                name:'USB Type C Front: 3 Rear: 4'
            },
            {
                name:'4 Ways Power Front Passenger Seat'
            },
            {
                name:'AM/FM + Bluetooth + Voice Command'
            },
        ],
        exteriors:[
            {
                name:'3-Bulb LED'
            },
            {
                name:'Daytime Running Lights LED'
            },
            {
                name:'High Mount Stop Lamp'
            },
            {
                name:'Outer Mirror Power Adjust + Auto Fold + Heater + Memory'
            },
            {
                name:'Rear Windshield Wiper Intermittent + Reverse-Linked'
            },
            {
                name:'Clearance Lamp LED'
            },
            {
                name:'Front Windshield Wiper Intermittent + Rain-Sensing'
            },
            {
                name:'LED Front Fog Lamps'
            },
            {
                name:'Outer Mirror Puddle Lamp + Reverse-Linked	'
            },
            {
                name:'Side Turn Signal Lamp with Outer Mirror'
            },
        ],
        brand:{
            slug: 'toyota'
        },
        model:{
            slug: 'bz4x'
        },
        steering:{
            slug: 'LHD',
            name: 'Left Hand Drive'
        }
    },
    
    
]

export const PART_DATA = [
    {
        image: "/part/part-1.png",
    },
    {
        image: "/part/part-2.png",
    },
    {
        image: "/part/part-3.png",
    }
]

export const NEWS_CATEGORY = [
    {
        value: 'news',
        label: 'News',
    },
    {
        value: 'offer',
        label: 'Vehicle Offers',
    }
]

export const NEWS_DATA = [
    {
        category:"News",
        badge:"BUYER'S GUIDE",
        title: "How To Service Your Car Yourself At Home: Pros and Cons",
        slug: "How-To-Service-Your-Car-Yourself-At-Home-Pros-and-Cons",
        image:"/news/news.jpeg",
        author: "Jonathan",
        post_date: "Jun 28, 2024",
        view: "59.6K",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eos beatae, neque nihil doloribus itaque libero! Neque laudantium provident?..."
    },
    {
        category:"News",
        badge:"BUYER'S GUIDE",
        title: "How To Was, Wax, and Detail Your Car Like a Pro",
        slug: "How-To-Was-Wax-and-Detail-Your-Car-Like-a-Pro",
        image:"/news/news-3.jpeg",
        author: "Jonathan",
        post_date: "Jun 28, 2024",
        view: "59.6K",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eos beatae, neque nihil doloribus itaque libero! Neque laudantium provident?..."
    },
    {
        category:"News",
        badge:"BUYER'S GUIDE",
        title: "10 Tips for Your Car Tire Maintenance Before a Trip",
        slug: "10-Tips-for-Your-Car-Tire-Maintenance-Before-a-Trip",
        image:"/news/news-2.webp",
        author: "Jonathan",
        post_date: "Jun 28, 2024",
        view: "59.6K",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eos beatae, neque nihil doloribus itaque libero! Neque laudantium provident?..."
    },
    {
        category:"Vehicle Offers",
        badge:"BUYER'S GUIDE",
        title: "Toyota Launches New Land Cruiser",
        slug: "Toyota-Launches-New-Land-Cruiser",
        image:"/news/news-4.jpg",
        author: "Jonathan",
        post_date: "Jun 28, 2024",
        view: "59.6K",
        description: "Since its launch in 1951, the Land Cruiser has supported the safety and security of its owners and passengers, and allowed people to go anywhere and everywhere and come back alive and safe. In order to conti..."
    }
]

export const VALUES_DATA = [
    {
        // icon: <GiPriceTag className='text-4xl font-semibold text-center text-violet-700'/>,
        title: "Executive Vehicle Range",
        subtitle: 'We maintain exclusive range of automobiles for export, our inventory is weekly updated'
    },
    {
        // icon: <FaCar className='text-4xl font-semibold text-center text-violet-700'/>,
        title: "Expert Car Exporter",
        subtitle: '23 years of experience on hand has made it possible for us to serve you exceptionally'
    },
    {
        // icon: <GiEarthAsiaOceania className='text-4xl font-semibold text-center text-violet-700'/>,
        title: "Registered & Global",
        subtitle: 'Is a registered Trade Mark. We have showrooms in Dubai and Belgium'
    },
    {
        // icon: <GoHeartFill className='text-4xl font-semibold text-center text-violet-700'/>,
        title: "Trusted & Friendly",
        subtitle: 'Our business relationship is built on unmatched customer satisfaction and trust'
    },
];

export const COUNTRIES_STEERING_DATA = [
    { country: 'Abu Dhabi', stering_position: 'Left Hand Drive' },
    { country: 'Afghanistan', stering_position: 'Left Hand Drive' },
    { country: 'Albania', stering_position: 'Left Hand Drive' },
    { country: 'Algeria', stering_position: 'Left Hand Drive' },
    { country: 'American Samoa', stering_position: 'Left Hand Drive' },
    { country: 'Andorra', stering_position: 'Left Hand Drive' },
    { country: 'Angola', stering_position: 'Left Hand Drive' },
    { country: 'Argentina', stering_position: 'Left Hand Drive' },
    { country: 'Armenia', stering_position: 'Left Hand Drive' },
    { country: 'Aruba', stering_position: 'Left Hand Drive' },
    { country: 'Austria', stering_position: 'Left Hand Drive' },
    { country: 'Azerbaijan', stering_position: 'Left Hand Drive' },
    { country: 'Azores', stering_position: 'Left Hand Drive' },
    { country: 'Bahrain', stering_position: 'Left Hand Drive' },
    { country: 'Balearic Islands', stering_position: 'Left Hand Drive' },
    { country: 'Belarus', stering_position: 'Left Hand Drive' },
    { country: 'Belgium', stering_position: 'Left Hand Drive' },
    { country: 'Belize', stering_position: 'Left Hand Drive' },
    { country: 'Benin', stering_position: 'Left Hand Drive' },
    { country: 'Bolivia', stering_position: 'Left Hand Drive' },
    { country: 'Bonaire', stering_position: 'Left Hand Drive' },
    { country: 'Bosnia and Herzegovina', stering_position: 'Left Hand Drive' },
    { country: 'Brazil', stering_position: 'Left Hand Drive' },
    { country: 'Bulgaria', stering_position: 'Left Hand Drive' },
    { country: 'Burkina Faso', stering_position: 'Left Hand Drive' },
    { country: 'Burma (officially Myanmar)', stering_position: 'Left Hand Drive' },
    { country: 'Burundi', stering_position: 'Left Hand Drive' },
    { country: 'Cambodia', stering_position: 'Left Hand Drive' },
    { country: 'Cameroon', stering_position: 'Left Hand Drive' },
    { country: 'Canada', stering_position: 'Left Hand Drive' },
    { country: 'Canary Islands', stering_position: 'Left Hand Drive' },
    { country: 'Cape Verde', stering_position: 'Left Hand Drive' },
    { country: 'Central African Republic', stering_position: 'Left Hand Drive' },
    { country: 'Chad', stering_position: 'Left Hand Drive' },
    { country: 'Chile', stering_position: 'Left Hand Drive' },
    { country: 'China, People’s Republic of', stering_position: 'Left Hand Drive' },
    { country: 'Colombia', stering_position: 'Left Hand Drive' },
    { country: 'Comoros', stering_position: 'Left Hand Drive' },
    { country: 'Congo, Democratic Republic of', stering_position: 'Left Hand Drive' },
    { country: 'Congo, People’s Republic of', stering_position: 'Left Hand Drive' },
    { country: 'Costa Rica', stering_position: 'Left Hand Drive' },
    { country: 'Côte d’Ivoire (Ivory Coast)', stering_position: 'Left Hand Drive' },
    { country: 'Croatia', stering_position: 'Left Hand Drive' },
    { country: 'Cuba', stering_position: 'Left Hand Drive' },
    { country: 'Curaçao', stering_position: 'Left Hand Drive' },
    { country: 'Czech Republic', stering_position: 'Left Hand Drive' },
    { country: 'Denmark', stering_position: 'Left Hand Drive' },
    { country: 'Djibouti', stering_position: 'Left Hand Drive' },
    { country: 'Dominican Republic', stering_position: 'Left Hand Drive' },
    { country: 'Dubai', stering_position: 'Left Hand Drive' },
    { country: 'Ecuador', stering_position: 'Left Hand Drive' },
    { country: 'Egypt', stering_position: 'Left Hand Drive' },
    { country: 'El Salvador', stering_position: 'Left Hand Drive' },
    { country: 'Equatorial Guinea', stering_position: 'Left Hand Drive' },
    { country: 'Eritrea', stering_position: 'Left Hand Drive' },
    { country: 'Estonia', stering_position: 'Left Hand Drive' },
    { country: 'Ethiopia', stering_position: 'Left Hand Drive' },
    { country: 'Faeroe Islands', stering_position: 'Left Hand Drive' },
    { country: 'Finland', stering_position: 'Left Hand Drive' },
    { country: 'French Guiana', stering_position: 'Left Hand Drive' },
    { country: 'French Polynesia', stering_position: 'Left Hand Drive' },
    { country: 'Gabon (Gabonese Republic)', stering_position: 'Left Hand Drive' },
    { country: 'Gambia', stering_position: 'Left Hand Drive' },
    { country: 'Gaza', stering_position: 'Left Hand Drive' },
    { country: 'Georgia', stering_position: 'Left Hand Drive' },
    { country: 'Germany', stering_position: 'Left Hand Drive' },
    { country: 'Ghana', stering_position: 'Left Hand Drive' },
    { country: 'Gibraltar', stering_position: 'Left Hand Drive' },
    { country: 'Greece', stering_position: 'Left Hand Drive' },
    { country: 'Greenland', stering_position: 'Left Hand Drive' },
    { country: 'Guadeloupe', stering_position: 'Left Hand Drive' },
    { country: 'Guam', stering_position: 'Left Hand Drive' },
    { country: 'Guatemala', stering_position: 'Left Hand Drive' },
    { country: 'Guinea', stering_position: 'Left Hand Drive' },
    { country: 'Guinea-Bissau', stering_position: 'Left Hand Drive' },
    { country: 'Anguilla', stering_position: 'Right Hand Drive' },
    { country: 'Antigua and Barbuda', stering_position: 'Right Hand Drive' },
    { country: 'Australia', stering_position: 'Right Hand Drive' },
    { country: 'Bahamas', stering_position: 'Right Hand Drive' },
    { country: 'Bangladesh', stering_position: 'Right Hand Drive' },
    { country: 'Barbados', stering_position: 'Right Hand Drive' },
    { country: 'Bermuda', stering_position: 'Right Hand Drive' },
    { country: 'Bhutan', stering_position: 'Right Hand Drive' },
    { country: 'Botswana', stering_position: 'Right Hand Drive' },
    { country: 'British Virgin Islands', stering_position: 'Right Hand Drive' },
    { country: 'Brunei', stering_position: 'Right Hand Drive' },
    { country: 'Cayman Islands', stering_position: 'Right Hand Drive' },
    { country: 'Channel Islands (Guernsey & Jersey)', stering_position: 'Right Hand Drive' },
    { country: 'Christmas Island', stering_position: 'Right Hand Drive' },
    { country: 'Cocos (Keeling) Islands', stering_position: 'Right Hand Drive' },
    { country: 'Cook Islands', stering_position: 'Right Hand Drive' },
    { country: 'Cyprus', stering_position: 'Right Hand Drive' },
    { country: 'Dominica', stering_position: 'Right Hand Drive' },
    { country: 'East Timor (Timor-Leste)', stering_position: 'Right Hand Drive' },
    { country: 'England', stering_position: 'Right Hand Drive' },
    { country: 'Falkland Islands', stering_position: 'Right Hand Drive' },
    { country: 'Fiji', stering_position: 'Right Hand Drive' },
    { country: 'Great Britain (GB)', stering_position: 'Right Hand Drive' },
    { country: 'Grenada', stering_position: 'Right Hand Drive' },
    { country: 'Guernsey', stering_position: 'Right Hand Drive' },
    { country: 'Guyana', stering_position: 'Right Hand Drive' },
    { country: 'Hong Kong', stering_position: 'Right Hand Drive' },
    { country: 'India', stering_position: 'Right Hand Drive' },
    { country: 'Indonesia', stering_position: 'Right Hand Drive' },
    { country: 'Ireland (Eire)', stering_position: 'Right Hand Drive' },
    { country: 'Ireland, Northern', stering_position: 'Right Hand Drive' },
    { country: 'Isle of Man', stering_position: 'Right Hand Drive' },
    { country: 'Jamaica', stering_position: 'Right Hand Drive' },
    { country: 'Japan', stering_position: 'Right Hand Drive' },
    { country: 'Jersey', stering_position: 'Right Hand Drive' },
    { country: 'Kenya', stering_position: 'Right Hand Drive' },
    { country: 'Kiribati', stering_position: 'Right Hand Drive' },
    { country: 'Lesotho', stering_position: 'Right Hand Drive' },
    { country: 'Macau', stering_position: 'Right Hand Drive' },
    { country: 'Malawi', stering_position: 'Right Hand Drive' },
    { country: 'Malaysia', stering_position: 'Right Hand Drive' },
    { country: 'Maldives', stering_position: 'Right Hand Drive' },
    { country: 'Malta', stering_position: 'Right Hand Drive' },
    { country: 'Mauritius', stering_position: 'Right Hand Drive' },
    { country: 'Montserrat', stering_position: 'Right Hand Drive' },
    { country: 'Mozambique', stering_position: 'Right Hand Drive' },
    { country: 'Namibia', stering_position: 'Right Hand Drive' },
    { country: 'Nauru', stering_position: 'Right Hand Drive' },
    { country: 'Nepal', stering_position: 'Right Hand Drive' },
    { country: 'New Zealand', stering_position: 'Right Hand Drive' },
    { country: 'Niue', stering_position: 'Right Hand Drive' },
    { country: 'Norfolk Island', stering_position: 'Right Hand Drive' },
    { country: 'North Cyprus (unrecognised, self-declared state)', stering_position: 'Right Hand Drive' },
    { country: 'Northern Ireland', stering_position: 'Right Hand Drive' },
    { country: 'Pakistan', stering_position: 'Right Hand Drive' },
    { country: 'Papua New Guinea', stering_position: 'Right Hand Drive' },
    { country: 'Pitcairn Islands', stering_position: 'Right Hand Drive' },
    { country: 'Saint Kitts and Nevis (officially the Federation of Saint Christopher and Nevis)', stering_position: 'Right Hand Drive' },
    { country: 'Saint Lucia', stering_position: 'Right Hand Drive' },
    { country: 'Saint Helena', stering_position: 'Right Hand Drive' },
    { country: 'Saint Vincent and the Grenadines', stering_position: 'Right Hand Drive' },
    { country: 'Samoa', stering_position: 'Right Hand Drive' },
    { country: 'Scotland', stering_position: 'Right Hand Drive' },
    { country: 'Seychelles', stering_position: 'Right Hand Drive' },
    { country: 'Singapore', stering_position: 'Right Hand Drive' },
    { country: 'Solomon Islands', stering_position: 'Right Hand Drive' },
    { country: 'South Africa', stering_position: 'Right Hand Drive' },
    { country: 'Sri Lanka', stering_position: 'Right Hand Drive' },
    { country: 'Suriname', stering_position: 'Right Hand Drive' },
    { country: 'Swaziland', stering_position: 'Right Hand Drive' },
    { country: 'Tanzania', stering_position: 'Right Hand Drive' },
    { country: 'Thailand', stering_position: 'Right Hand Drive' },
    { country: 'Tokelau', stering_position: 'Right Hand Drive' },
    { country: 'Tonga', stering_position: 'Right Hand Drive' },
    { country: 'Trinidad and Tobago', stering_position: 'Right Hand Drive' },
    { country: 'Turks and Caicos Islands', stering_position: 'Right Hand Drive' },
    { country: 'Tuvalu', stering_position: 'Right Hand Drive' },
    { country: 'Uganda', stering_position: 'Right Hand Drive' },
]

export const USEFUL_LINKS = [
    {
        title: 'USEFUL LINKS',
        links: [
            {
                label: 'Latest Automotive News',
                url: 'home'
            },
            {
                label: 'About Global Auto Supply',
                url: 'about'
            },
            {
                label: 'Shipping & Logistics',
                url: 'shipping.index'
            },
            {
                label: 'LHD/RHD Country Guide',
                url: 'guidecountrySteering'
            },
            {
                label: 'Armoured & Specialty Vehicles',
                url: 'armoured.index'
            },
            {
                label: 'Japan Vehicle Auctions',
                url: 'japanAction.index'
            },
            {
                label: 'Shipping Incoterms',
                url: 'incoterms.index'
            },
            {
                label: 'Global Auto Supply Core Values',
                url: 'coreValue.index'
            },
            {
                label: 'Banking Information',
                url: 'bank.index'
            },
            {
                label: 'Term of Trade',
                url: 'termTrade.index'
            },
            {
                label: 'Privacy Policy',
                url: 'privacyPolicy.index'
            }
        ]
    },
    {
        title: 'POPULAR VEHICLES WE SUPPLY',
        links: [
            {
                label: 'RHD Toyota Hilux for GASe',
                url:'shipping.index'
            },
            {
                label: 'LHD Toyota Hilux for GASe',
                url:'shipping.index'
            },
            {
                label: 'New Left Hand Drive Toyota',
                url:'shipping.index'
            },
            {
                label: 'New Right Hand Drive Toyota',
                url:'shipping.index'
            },
            {
                label: 'All models Toyota available',
                url:'shipping.index'
            },
            {
                label: 'All models Ford available',
                url:'shipping.index'
            },
            {
                label: 'All models Nissan available',
                url:'shipping.index'
            },
            {
                label: 'All models Vehicles available',
                url:'shipping.index'
            },
            {
                label: 'Export / Import Info',
                url:'shipping.index'
            },
            {
                label: 'FAQ',
                url:'faq.index'
            },
        ]
    },
    {
        title: 'DIVISIONS',
        links: [
            {
                label: 'Free Zone Logistics Services',
                url:'shipping.index'
            },
            {
                label: 'New Vehicle Supply',
                url:'shipping.index'
            },
            {
                label: 'Japan Motorcycle Auctions',
                url:'shipping.index'
            },
            {
                label: 'Thailand Vehicle Auctions',
                url:'shipping.index'
            },
            {
                label: 'Japan Vehicle Auctions',
                url:'shipping.index'
            },
        ]
    }
];

export  const AUCTIONS_SCHEDULE = [
    {
        day: 'Monday',
        auctions: [
            {
                name: 'AUCNET',
            },
            {
                name: 'GAO!',
            },
            {
                name: 'GNN Osaka',
            },
            {
                name: 'Honda Fukuoka',
            },
            {
                name: 'Honda Hokkaido',
            },
            {
                name: 'Honda Kansai',
            },
            {
                name: 'Honda Nagoya',
            },
            {
                name: 'Honda Sendai',
            },
            {
                name: 'Honda Tokyo',
            },
            {
                name: 'JU Tokyo',
            },
            {
                name: 'USS R Nagoya',
            },
        ]
    },
    {
        day: 'Tuesday',
        auctions: [
            {
                name: 'ARAI Sendai',
            },
            {
                name: 'CAA Gifu',
            },
            {
                name: 'CAA Tokyo',
            },
            {
                name: 'CAA Touhoku',
            },
            {
                name: 'GE Tokyo',
            },
            {
                name: 'JU Mie',
            },
            {
                name: 'JU Nagano',
            },
            {
                name: 'JU Saitama',
            },
            {
                name: 'JU Shizuoka',
            },
            {
                name: 'JU Yamaguchi',
            },
            {
                name: 'NPS Osaka',
            },
            {
                name: 'NPS Tokio',
            },
            {
                name: 'ORIX Kobe',
            },
            {
                name: 'ORIX Sendai',
            },
            {
                name: 'ORIX ',
            },
            {
                name: 'Sendai',
            },
            {
                name: 'SAA',
            },
            {
                name: 'Sapporo',
            },
            {
                name: 'TAA',
            },
            {
                name: 'Hiroshima',
            },
            {
                name: 'TAA Kinki',
            },
            {
                name: 'TAA',
            },
            {
                name: 'Kyushu',
            },
            {
                name: 'TAA',
            },
            {
                name: 'Minamikyu',
            },
            {
                name: 'TAA',
            },
            {
                name: 'Shikoku',
            },
            {
                name: 'USS',
            },
            {
                name: 'Yokohama',
            },
            {
                name: 'ZIP Tokyo',
            },
        ]
    },
    {
        "day": "Wednesday",
        "auctions": [
          {
            "name": "BAYAUC"
          },
          {
            "name": "BCN"
          },
          {
            "name": "CAA Chubu"
          },
          {
            "name": "FAA Shizuoka"
          },
          {
            "name": "GE Fukuoka"
          },
          {
            "name": "GNN"
          },
          {
            "name": "HERO"
          },
          {
            "name": "IAA Osaka"
          },
          {
            "name": "Isuzu Makuhari"
          },
          {
            "name": "JAA"
          },
          {
            "name": "JU Ibaraki"
          },
          {
            "name": "JU Ishikawa"
          },
          {
            "name": "KAA"
          },
          {
            "name": "KCAA Ebino"
          },
          {
            "name": "LAA Shikoku"
          },
          {
            "name": "ORIX Atsugi"
          },
          {
            "name": "USS Fujioka"
          },
          {
            "name": "USS Fukuoka"
          },
          {
            "name": "USS Kobe"
          },
          {
            "name": "USS Niigata"
          },
          {
            "name": "USS Sapporo"
          },
          {
            "name": "USS Tohoku"
          }
        ]
    },      
    {
        "day": "Thursday",
        "auctions": [
          {
            "name": "ARAI Oyama"
          },
          {
            "name": "GAO! TENDER Gulliver"
          },
          {
            "name": "GE Kobe"
          },
          {
            "name": "HAA Osaka (Hanaten)"
          },
          {
            "name": "Isuzu Kyushu"
          },
          {
            "name": "JU Aichi"
          },
          {
            "name": "JU Fukushima"
          },
          {
            "name": "JU Gunma"
          },
          {
            "name": "JU Hiroshima"
          },
          {
            "name": "JU Kanagawa"
          },
          {
            "name": "JU Sapporo"
          },
          {
            "name": "JU Toyama"
          },
          {
            "name": "KCAA Fukuoka"
          },
          {
            "name": "LAA Kansai"
          },
          {
            "name": "NAA Nagoya"
          },
          {
            "name": "NAA Osaka"
          },
          {
            "name": "ORIX Fukuoka"
          },
          {
            "name": "ORIX Nagoya"
          },
          {
            "name": "SAA Hamamatsu"
          },
          {
            "name": "TAA Chubu"
          },
          {
            "name": "TAA Hokkaido"
          },
          {
            "name": "TAA Kantou"
          },
          {
            "name": "TAA Touhoku"
          },
          {
            "name": "USS R Tokyo"
          },
          {
            "name": "USS Tokyo"
          },
          {
            "name": "ZIP Osaka"
          },
          {
            "name": "ZiP Osaka"
          }
        ]
    },
    {
        "day": "Friday",
        "auctions": [
          {
            "name": "ARAI Bayside"
          },
          {
            "name": "Isuzu Kobe"
          },
          {
            "name": "JAA Tsukuba"
          },
          {
            "name": "JU Chiba"
          },
          {
            "name": "JU Fukuoka"
          },
          {
            "name": "JU Miyagi"
          },
          {
            "name": "JU Niigata"
          },
          {
            "name": "JU Okayama LAA"
          },
          {
            "name": "JU Okinawa"
          },
          {
            "name": "JU Tochigi"
          },
          {
            "name": "KCAA Yamaguchi"
          },
          {
            "name": "KUA Katayamazu"
          },
          {
            "name": "NAA Tokyo"
          },
          {
            "name": "USS Hokuriku"
          },
          {
            "name": "USS Nagoya"
          },
          {
            "name": "USS Osaka"
          },
          {
            "name": "USS Saitama"
          },
          {
            "name": "White Wing"
          }
        ]
    },
    {
        "day": "Saturday",
        "auctions": [
          {
            "name": "ARAI Oyama"
          },
          {
            "name": "HAA Kobe"
          },
          {
            "name": "JU Gifu"
          },
          {
            "name": "JU Nara"
          },
          {
            "name": "NAA Nagoya Nyu"
          },
          {
            "name": "NAA Osaka"
          },
          {
            "name": "NAA Tokyo Nyuusatsu"
          },
          {
            "name": "TAA Yokohama"
          },
          {
            "name": "USS Gunma"
          },
          {
            "name": "USS Kyushu"
          },
          {
            "name": "USS Okayama"
          },
          {
            "name": "USS Ryuutsu"
          },
          {
            "name": "USS Shizuoka"
          }
        ]
    },
    {
        "day": "Oneprice",
        "auctions": [
          {
            "name": "AS Members"
          },
          {
            "name": "AS Oneprice"
          },
          {
            "name": "Apple Stock"
          },
          {
            "name": "BAYAUC Oneprice"
          },
          {
            "name": "CAA Chubu Oneprice"
          },
          {
            "name": "CAA Gifu Oneprice"
          },
          {
            "name": "CAA Tohoku Oneprice"
          },
          {
            "name": "CAA ZIP Tokyo Oneprice"
          },
          {
            "name": "GAO Stock"
          },
          {
            "name": "HAA Kobe Oneprice"
          },
          {
            "name": "Hero Oneprice"
          },
          {
            "name": "Ippatsu Stock"
          },
          {
            "name": "JAA Kasai Oneprice"
          },
          {
            "name": "JAA Tsukuba Oneprice"
          },
          {
            "name": "Korea Oneprice One"
          },
          {
            "name": "Kyouyuu Stock"
          },
          {
            "name": "Syoudan Stock"
          },
          {
            "name": "USS Stock"
          }
        ]
    }       
]

export const INCOTERMS_DATA = [
    {
      "title": "EXW – Ex Works",
      "subtitle": "Vehicle/s are placed at the disposal of the buyer at the Global Auto Supply premises or at another named place (warehouse, factory, etc). Global Auto Supply has no obligation to load the vehicle/s on any collecting means of transport."
    },
    {
      "title": "FCA – Free Carrier",
      "subtitle": "Global Auto Supply delivers the vehicles/s to the carrier or another person nominated by the buyer at Global Auto Supply premises or another named place."
    },
    {
      "title": "FOB – Free On Board",
      "subtitle": "Vehicle/s cost and all costs up to delivery over the ships rail at the named port of shipment. sea or inland waterways transport only."
    },
    {
      "title": "FAS – Free Alongside Ship",
      "subtitle": "Global Auto Supply delivers the vehicle/s alongside the vessel nominated by the buyer at the named port of shipment."
    },
    {
      "title": "CFR – Cost and Freight",
      "subtitle": "Vehicle/s Cost and Freight Cost, the cost of insurance if any is covered by the buyer."
    },
    {
      "title": "CIF – Cost, Insurance and Freight",
      "subtitle": "Cost of Vehicle/s plus insurance and freight, duty unpaid, to a named port of destination. Sea or inland waterways transport only."
    },
    {
      "title": "CPT – Carriage Paid To",
      "subtitle": "As for CIP, except the cost of insurance is carried by the buyer."
    },
    {
      "title": "CIP – Carriage and Insurance Paid To",
      "subtitle": "Costs of carriage and insurance of the Vehicle/s and duty unpaid, to the named destination."
    },
    {
      "title": "DAT – Delivered At Terminal",
      "subtitle": "Delivery takes place when the Vehicle/s are placed at the disposal of the buyer once unloaded from the arriving means of transport at a named terminal at the named port of place of destination. Global Auto Supply bears all the risks of loss or damage to the Vehicle/s until they have been delivered in accordance with the agreed delivery place. Applies to all modes of transport."
    },
    {
      "title": "DAP – Delivered At Place",
      "subtitle": "Delivery takes place when the Vehicle/s are placed at the disposal of the buyer on the arriving means of transport at a named place of destination. Global Auto Supply bears all the risks of loss or damage to the Vehicle/s until they have been delivered in accordance with agreed delivery place. Applies to all modes of transport."
    },
    {
      "title": "DDP – Delivery Duty Paid",
      "subtitle": "Delivery takes place when the Vehicle/s are placed at the disposal of the buyer, cleared for import, on the arriving means of transport at a named place of destination. Global Auto Supply bears all the risks of loss or damage to the Vehicle/s until they have been delivered in accordance with the agreed delivery palce. Applies to all modes of transport."
    }
]

export const CORE_VALUE_DATA =[
    {
      "title": "Trust",
      "contents": [
        { "list": "Always act with honesty and integrity and with no hidden agendas." },
        { "list": "Meet obligations that are set." }
      ]
    },
    {
      "title": "Integrity",
      "contents": [
        { "list": "Global Auto Supply staff to treat customers and suppliers alike with the utmost highest respect and treat the business that we do mutually with the same respect." },
        { "list": "Trustworthy, consistent and reliable – Our actions should be consistent with words." },
        { "list": "To behave in an honest, ethical and straightforward manner." },
        { "list": "To keep commitments and to admit mistakes if we make them." },
        { "list": "Be honest and open in our dealings with everyone around us." },
        { "list": "Be prepared to step out of your comfort zone to help your customer and your team." }
      ]
    },
    {
      "title": "Customer Focus",
      "contents": [
        { "list": "To understand customers, putting them first is always the number one factor when we are doing business, we are committed to giving satisfaction of the highest standards." },
        { "list": "Strive for our customers’ success, we want to be their go to for vehicle needs." },
        { "list": "Build lasting relationships with our customers based on Trust and Honesty." },
        { "list": "Create value for our customers, provide the best vehicles and options for their needs." }
      ]
    },
    {
      "title": "Quality",
      "contents": [
        { "list": "We will not sell 2nd rate goods or defective goods, Global Auto Supply is proud to consistently provide quality genuine parts and service." }
      ]
    },
    {
      "title": "Ownership",
      "contents": [
        { "list": "We do not pass the buck, if some goes wrong somewhere in the supply chain, we take the responsibility and fix it, we are accountable for everything we do, and operate responsibly and efficiently for long-term mutual business relationships." }
      ]
    },
    {
      "title": "Passion",
      "contents": [
        { "list": "We know motor vehicles inside and out, front to back, back to front, we are not in it just for the business side, Global Auto Supply sales staff have many years in the automotive business and have a passion for motor vehicles of all kinds, we are dedicated to supplying the right vehicles needed for your application and needs, when it comes to purchasing your vehicles please talk to us and ask some hard questions, you will see Global Auto Supply have the knowledge you expect from your vehicle supplier, we take an interest in your vehicle needs, not just an interest in your wallet." }
      ]
    },
    {
      "title": "Excellence",
      "contents": [
        { "list": "To be excellent, learn and apply the best practices of Global Auto Supply." },
        { "list": "Uphold Global Auto Supply standards and hold other team members to the same." },
        { "list": "Foster learning, the sharing of knowledge with others and continuous improvement." },
        { "list": "To set and achieve a high level of performance." }
      ]
    },
    {
      "title": "Innovation",
      "contents": [
        { "list": "Do not prematurely judge and positively build on the ideas of others." },
        { "list": "Work through the challenges i.e. develop the idea and learn from the process." },
        { "list": "Seek and consider new ideas, approaches and best way to implement them." },
        { "list": "Always improve current practices and ways of getting things done." },
        { "list": "To anticipate and adapt to change, keep ahead of the competition." },
        { "list": "Set Goals, meet and exceed them." },
        { "list": "Look out for our customer’s interests as much as we do the companies." },
        { "list": "To be open in communication with everyone." },
        { "list": "If promises are made promises will be kept." }
      ]
    }
]

export const BANK_INFORMATION_DATA = [
    {
        name: 'UOB (Thai) Pcl',
        website: 'http://uob.co.th',
        swiftCode: 'UOVBTHBK',
        branchName: 'Sukhumvit 25 Branch',
        branchAddress: '1st F1 Sukhumvit Road, Klongtoei, Wattana, Bangkok,10110,Thailand',
        accountName: 'Global Auto Supply Co., Ltd',
        accountNumber: '743-900-353-0',
        accountCurrency: 'USD',
        image: '/bank/uob.png',
    },
    {
        name: 'Bank 2',
        website: 'http://uob.co.th',
        swiftCode: 'FRTGFHFR',
        branchName: 'bANK 2 Branch',
        branchAddress: 'Adress bank 2',
        accountName: 'Global Auto Supply Co., Ltd',
        accountNumber: '743-900-353-0',
        accountCurrency: 'USD',
        image: '/bank/uob.png',
    },
    {
        name: 'Bank 3',
        website: 'http://uob.co.th',
        swiftCode: 'FRTGFHFR',
        branchName: 'bANK 2 Branch',
        branchAddress: 'Adress bank 2',
        accountName: 'Global Auto Supply Co., Ltd',
        accountNumber: '743-900-353-0',
        accountCurrency: 'USD',
        image: '/bank/uob.png',
    },
    {
        name: 'Bank 4',
        website: 'http://uob.co.th',
        swiftCode: 'FRTGFHFR',
        branchName: 'bANK 2 Branch',
        branchAddress: 'Adress bank 2',
        accountName: 'Global Auto Supply Co., Ltd',
        accountNumber: '743-900-353-0',
        accountCurrency: 'USD',
        image: '/bank/uob.png',
    }
]

export const BIKE_BRAND_DATA = [
    {
        name: 'Kawasaki',
        image: '/logo/logo-kawasaki.png',
        slug: 'kawasaki',
        description: 'GAS Export specialise in all vehicles Toyota, supplying both Left Hand Drive Toyota and Right Hand Drive Toyota Models to our customers in over 180 different countries.',
        description_2 : 'When you order vehicles from GAS you can be assured of fast replies to all inquires, quality care of your vehicles and service second to none, we think of our customers as friends, we are in the business for the long haul, when you are choosing where to source your vehicles please contact us and see the difference good old fashioned service makes'
    },
    {
        name: 'Suzuki',
        image: '/logo/logo-suzuki.png',
        slug: 'suzuki',
        description: 'GAS Export specialise in all vehicles Toyota, supplying both Left Hand Drive Toyota and Right Hand Drive Toyota Models to our customers in over 180 different countries.',
        description_2 : 'When you order vehicles from GAS you can be assured of fast replies to all inquires, quality care of your vehicles and service second to none, we think of our customers as friends, we are in the business for the long haul, when you are choosing where to source your vehicles please contact us and see the difference good old fashioned service makes'
    },
    {
        name: 'BMW',
        image: '/logo/logo-bmw.png',
        slug: 'bmw',
        description: 'GAS Export specialise in all vehicles Toyota, supplying both Left Hand Drive Toyota and Right Hand Drive Toyota Models to our customers in over 180 different countries.',
        description_2 : 'When you order vehicles from GAS you can be assured of fast replies to all inquires, quality care of your vehicles and service second to none, we think of our customers as friends, we are in the business for the long haul, when you are choosing where to source your vehicles please contact us and see the difference good old fashioned service makes'
    },
    {
        name: 'Ducati',
        image: '/logo/logo-ducati.png',
        slug: 'ducati',
        description: 'GAS Export specialise in all vehicles Toyota, supplying both Left Hand Drive Toyota and Right Hand Drive Toyota Models to our customers in over 180 different countries.',
        description_2 : 'When you order vehicles from GAS you can be assured of fast replies to all inquires, quality care of your vehicles and service second to none, we think of our customers as friends, we are in the business for the long haul, when you are choosing where to source your vehicles please contact us and see the difference good old fashioned service makes'
    },
    {
        name: 'Honda',
        image: '/logo/logo-honda-motor.jpg',
        slug: 'honda-motor',
        description: 'GAS Export specialise in all vehicles Toyota, supplying both Left Hand Drive Toyota and Right Hand Drive Toyota Models to our customers in over 180 different countries.',
        description_2 : 'When you order vehicles from GAS you can be assured of fast replies to all inquires, quality care of your vehicles and service second to none, we think of our customers as friends, we are in the business for the long haul, when you are choosing where to source your vehicles please contact us and see the difference good old fashioned service makes'
    },
    {
        name: 'MV Agusta',
        image: '/logo/logo-mv-agusta.png',
        slug: 'mv-agusta',
        description: 'GAS Export specialise in all vehicles Toyota, supplying both Left Hand Drive Toyota and Right Hand Drive Toyota Models to our customers in over 180 different countries.',
        description_2 : 'When you order vehicles from GAS you can be assured of fast replies to all inquires, quality care of your vehicles and service second to none, we think of our customers as friends, we are in the business for the long haul, when you are choosing where to source your vehicles please contact us and see the difference good old fashioned service makes'
    },
]

export const MODEL_BIKE_DATA = [
    {
        name: 'VTR1000',
        slug: 'VTR1000',
        brand:{
            name: 'Honda',
            slug: 'honda-motor',
        },
        image: '/motorcycle/honda-vtr1000.jpg',
        grades_count: 1
    },

    {
        name: '749R',
        slug: '749R',
        brand:{
            name: 'Ducati',
            slug: 'ducati',
        },
        image: '/motorcycle/ducati-749R.jpg',
        grades_count: 1
    },

    {
        name: '998S',
        slug: '998S',
        brand:{
            name: 'Ducati',
            slug: 'ducati',
        },
        image: '/motorcycle/ducati-998S.jpg',
        grades_count: 1
    },
    {
        name: '996 SPS',
        slug: '996-sps',
        brand:{
            name: 'Ducati',
            slug: 'ducati',
        },
        image: '/motorcycle/ducati-996SPS.jpg',
        grades_count: 1
    },
    {
        name: '996 SPS',
        slug: '996-sps',
        brand:{
            name: 'Ducati',
            slug: 'ducati',
        },
        image: '/motorcycle/ducati-996SPS.jpg',
        grades_count: 1
    },
    {
        name: 'F4',
        slug: 'F4',
        brand:{
            name: 'MV Agusta',
            slug: 'mv-agusta',
        },
        image: '/motorcycle/ducati-996SPS.jpg',
        grades_count: 1
    },
    
]

export const BIKE_BODY_TYPE = [
    {
        name: 'Sportbike',
        slug: 'sportbike',
    },
    {
        name: 'Cruiser',
        slug: 'cruiser',
    },
    {
        name: 'Touring',
        slug: 'touring',
    },
    {
        name: 'Standard',
        slug: 'standard',
    },
    {
        name: 'Dual-Sport',
        slug: 'dual-Sport',
    },
    {
        name: 'Scooter',
        slug: 'scooter',
    },
]

export const BIKE_DATA = [
    {
        name: '2000 DUCATI 996 SPS #98233153',
        slug: '2000-DUCATI-996-SPS',
        image: [
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            
        ],
        price: '100',
        discount: '95',
        odometer:'12291',
        transmission:'Manual',
        colours: 'Red',
        engine:'996cc',
        key_facts:[
            {
                key: "This 1999 Ducati 'Sport production special' is a largely original example of the marque's classi legal superbike, presented in smart overall condition"                
            },
            {
                key: "It is built arround a lightweight version of the 996cc 90° L-twin desmodromic motor found in the 916 six-speed manual transmission"                
            },
            {
                key: "The odometer shows 12,291 kilometers from new"                
            },
            {
                key: "Build in 1999, this is 2000 model year 996 SPS"                
            },
            {
                key: "Imported from Japan to Australia, this bike is numbered 1143 of approximately 1,780 produced, and its signed by Superbike World Championship winner Troy Bayliss"                
            },
            {
                key: "It was recently serviced with the timing belts changed in November 2022"                
            },
        ],
        fairing_material: '',
        front_forks: '',
        rear_shock:'',
        front_wheel:'',
        front_tire:'',
        rear_wheel:'',
        rear_tire:'',
        rear_hugger:'',
        swing_arm:'',
        steering_damper:'',
        rear_sets:'',
        front_brakes:'',
        front_caliper:'',
        front_discs:'',
        rear_brake:'',
        rear_caliper:'',
        throttle_bodies:'',
        airbox:'',
        exhaust_system:'',
        non_factory_items:'',
        overal_condition:'',
        service_history:'This 2000 Ducati 996 ‘Sports Production Special’ is a neat and original example of Ducati’s rare sports bike, boasting a signature by Ducati rider and three-time Superbike World Champion Troy Bayliss on its fuel tank. Recently serviced and reported to be in fine mechanical health, this engaging modern classic is ready to ride and enjoy immediately, and would make a fine addition to any collection. ',
        summary:"The description of this auction lot is, to the best of the seller's knowledge, accurate and not misleading. Collecting Cars requests a range of detail about the lot from the seller, and performs a level of due diligence. However, bidders must satisfy themselves as to the accuracy of the description, and conduct any research they feel is necessary before committing to a bid. Please see our Terms and Conditions for full details. ",
        exteriors:[
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
        ],
        interiors:[
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
        ],
        mechanicals:[
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
        ],
        code: '98233153',
        year: '2000',
        body_type:'sportbike',
        brand:{
            slug: 'ducati'
        },
        model:{
            slug: '996S'
        },
    },
    {
        name: '2007 MV Agusta F4 1000R 312',
        slug: '2007-mv-agusta-f4-1000r-312',
        image: [
            {
                url: '/motorcycle/mv-agusta-f4.webp'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
        ],
        price: '100',
        discount: '95',
        odometer:'12291',
        transmission:'Manual',
        colours: 'Red',
        engine:'996cc',
        key_facts:[
            {
                key: "This 1999 Ducati 'Sport production special' is a largely original example of the marque's classi legal superbike, presented in smart overall condition"                
            },
            {
                key: "It is built arround a lightweight version of the 996cc 90° L-twin desmodromic motor found in the 916 six-speed manual transmission"                
            },
            {
                key: "The odometer shows 12,291 kilometers from new"                
            },
            {
                key: "Build in 1999, this is 2000 model year 996 SPS"                
            },
            {
                key: "Imported from Japan to Australia, this bike is numbered 1143 of approximately 1,780 produced, and its signed by Superbike World Championship winner Troy Bayliss"                
            },
            {
                key: "It was recently serviced with the timing belts changed in November 2022"                
            },
        ],
        fairing_material: '',
        front_forks: '',
        rear_shock:'',
        front_wheel:'',
        front_tire:'',
        rear_wheel:'',
        rear_tire:'',
        rear_hugger:'',
        swing_arm:'',
        steering_damper:'',
        rear_sets:'',
        front_brakes:'',
        front_caliper:'',
        front_discs:'',
        rear_brake:'',
        rear_caliper:'',
        throttle_bodies:'',
        airbox:'',
        exhaust_system:'',
        non_factory_items:'',
        overal_condition:'',
        service_history:'This 2000 Ducati 996 ‘Sports Production Special’ is a neat and original example of Ducati’s rare sports bike, boasting a signature by Ducati rider and three-time Superbike World Champion Troy Bayliss on its fuel tank. Recently serviced and reported to be in fine mechanical health, this engaging modern classic is ready to ride and enjoy immediately, and would make a fine addition to any collection. ',
        summary:"The description of this auction lot is, to the best of the seller's knowledge, accurate and not misleading. Collecting Cars requests a range of detail about the lot from the seller, and performs a level of due diligence. However, bidders must satisfy themselves as to the accuracy of the description, and conduct any research they feel is necessary before committing to a bid. Please see our Terms and Conditions for full details. ",
        exteriors:[
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
        ],
        interiors:[
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
        ],
        mechanicals:[
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
        ],
        code: '98233153',
        year: '2007',
        body_type:'sportbike',
        brand:{
            slug: 'mv-agusta'
        },
        model:{
            slug: 'F4'
        },
    },
    {
        name: '2023 changan uUi-k iDD 1.5T Zhilling #57050708',
        slug: '2023-changan-uUi-k-iDD-15T-Zhilling',
        image: [
            {
                url: '/motorcycle/motorcycle-1.png'
            },
            {
                url: '/motorcycle/motorcycle-2.png'
            },
            {
                url: '/motorcycle/motorcycle-3.png'
            },
            {
                url: '/motorcycle/motorcycle-4.png'
            },
        ],
        price: '100',
        discount: '95',
        odometer:'12291',
        transmission:'Manual',
        colours: 'Red',
        engine:'996cc',
        key_facts:[
            {
                key: "This 1999 Ducati 'Sport production special' is a largely original example of the marque's classi legal superbike, presented in smart overall condition"                
            },
            {
                key: "It is built arround a lightweight version of the 996cc 90° L-twin desmodromic motor found in the 916 six-speed manual transmission"                
            },
            {
                key: "The odometer shows 12,291 kilometers from new"                
            },
            {
                key: "Build in 1999, this is 2000 model year 996 SPS"                
            },
            {
                key: "Imported from Japan to Australia, this bike is numbered 1143 of approximately 1,780 produced, and its signed by Superbike World Championship winner Troy Bayliss"                
            },
            {
                key: "It was recently serviced with the timing belts changed in November 2022"                
            },
        ],
        fairing_material: '',
        front_forks: '',
        rear_shock:'',
        front_wheel:'',
        front_tire:'',
        rear_wheel:'',
        rear_tire:'',
        rear_hugger:'',
        swing_arm:'',
        steering_damper:'',
        rear_sets:'',
        front_brakes:'',
        front_caliper:'',
        front_discs:'',
        rear_brake:'',
        rear_caliper:'',
        throttle_bodies:'',
        airbox:'',
        exhaust_system:'',
        non_factory_items:'',
        overal_condition:'',
        service_history:'This 2000 Ducati 996 ‘Sports Production Special’ is a neat and original example of Ducati’s rare sports bike, boasting a signature by Ducati rider and three-time Superbike World Champion Troy Bayliss on its fuel tank. Recently serviced and reported to be in fine mechanical health, this engaging modern classic is ready to ride and enjoy immediately, and would make a fine addition to any collection. ',
        summary:"The description of this auction lot is, to the best of the seller's knowledge, accurate and not misleading. Collecting Cars requests a range of detail about the lot from the seller, and performs a level of due diligence. However, bidders must satisfy themselves as to the accuracy of the description, and conduct any research they feel is necessary before committing to a bid. Please see our Terms and Conditions for full details. ",
        exteriors:[
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/motorcycle-1.png'
            },
            {
                url: '/motorcycle/motorcycle-2.png'
            },
            {
                url: '/motorcycle/motorcycle-3.png'
            },
            {
                url: '/motorcycle/motorcycle-4.png'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
        ],
        interiors:[
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
        ],
        mechanicals:[
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
        ],
        code: '98233153',
        year: '2007',
        body_type:'sportbike',
        brand:{
            slug: 'mv-agusta'
        },
        model:{
            slug: 'F4'
        },
    },
    {
        name: '2023 Audi Q5 40 e-tron Shining Mech Suit #72036369',
        slug: '2023-Audi-Q5-40-e-tron-Shining-Mech-Suit',
        image: [
            {
                url: '/motorcycle/motorcycle-3.png'
            },
            {
                url: '/motorcycle/motorcycle-1.png'
            },
            {
                url: '/motorcycle/motorcycle-4.png'
            },
            {
                url: '/motorcycle/motorcycle-2.png'
            },
        ],
        price: '100',
        discount: '95',
        odometer:'12291',
        transmission:'Manual',
        colours: 'Red',
        engine:'996cc',
        key_facts:[
            {
                key: "This 1999 Ducati 'Sport production special' is a largely original example of the marque's classi legal superbike, presented in smart overall condition"                
            },
            {
                key: "It is built arround a lightweight version of the 996cc 90° L-twin desmodromic motor found in the 916 six-speed manual transmission"                
            },
            {
                key: "The odometer shows 12,291 kilometers from new"                
            },
            {
                key: "Build in 1999, this is 2000 model year 996 SPS"                
            },
            {
                key: "Imported from Japan to Australia, this bike is numbered 1143 of approximately 1,780 produced, and its signed by Superbike World Championship winner Troy Bayliss"                
            },
            {
                key: "It was recently serviced with the timing belts changed in November 2022"                
            },
        ],
        fairing_material: '',
        front_forks: '',
        rear_shock:'',
        front_wheel:'',
        front_tire:'',
        rear_wheel:'',
        rear_tire:'',
        rear_hugger:'',
        swing_arm:'',
        steering_damper:'',
        rear_sets:'',
        front_brakes:'',
        front_caliper:'',
        front_discs:'',
        rear_brake:'',
        rear_caliper:'',
        throttle_bodies:'',
        airbox:'',
        exhaust_system:'',
        non_factory_items:'',
        overal_condition:'',
        service_history:'This 2000 Ducati 996 ‘Sports Production Special’ is a neat and original example of Ducati’s rare sports bike, boasting a signature by Ducati rider and three-time Superbike World Champion Troy Bayliss on its fuel tank. Recently serviced and reported to be in fine mechanical health, this engaging modern classic is ready to ride and enjoy immediately, and would make a fine addition to any collection. ',
        summary:"The description of this auction lot is, to the best of the seller's knowledge, accurate and not misleading. Collecting Cars requests a range of detail about the lot from the seller, and performs a level of due diligence. However, bidders must satisfy themselves as to the accuracy of the description, and conduct any research they feel is necessary before committing to a bid. Please see our Terms and Conditions for full details. ",
        exteriors:[
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/motorcycle-1.png'
            },
            {
                url: '/motorcycle/motorcycle-2.png'
            },
            {
                url: '/motorcycle/motorcycle-3.png'
            },
            {
                url: '/motorcycle/motorcycle-4.png'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
        ],
        interiors:[
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
        ],
        mechanicals:[
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
        ],
        code: '98233153',
        year: '2007',
        body_type:'sportbike',
        brand:{
            slug: 'mv-agusta'
        },
        model:{
            slug: 'F4'
        },
    },
    {
        name: '2023 volkswagen ID.4X Pure+ #57965101',
        slug: '2023-volkswagen-ID.4X-Pure+',
        image: [
            {
                url: '/motorcycle/motorcycle-4.png'
            },
            {
                url: '/motorcycle/motorcycle-2.png'
            },
            {
                url: '/motorcycle/motorcycle-1.png'
            },
            {
                url: '/motorcycle/motorcycle-3.png'
            },
        ],
        price: '100',
        discount: '95',
        odometer:'12291',
        transmission:'Manual',
        colours: 'Red',
        engine:'996cc',
        key_facts:[
            {
                key: "This 1999 Ducati 'Sport production special' is a largely original example of the marque's classi legal superbike, presented in smart overall condition"                
            },
            {
                key: "It is built arround a lightweight version of the 996cc 90° L-twin desmodromic motor found in the 916 six-speed manual transmission"                
            },
            {
                key: "The odometer shows 12,291 kilometers from new"                
            },
            {
                key: "Build in 1999, this is 2000 model year 996 SPS"                
            },
            {
                key: "Imported from Japan to Australia, this bike is numbered 1143 of approximately 1,780 produced, and its signed by Superbike World Championship winner Troy Bayliss"                
            },
            {
                key: "It was recently serviced with the timing belts changed in November 2022"                
            },
        ],
        fairing_material: '',
        front_forks: '',
        rear_shock:'',
        front_wheel:'',
        front_tire:'',
        rear_wheel:'',
        rear_tire:'',
        rear_hugger:'',
        swing_arm:'',
        steering_damper:'',
        rear_sets:'',
        front_brakes:'',
        front_caliper:'',
        front_discs:'',
        rear_brake:'',
        rear_caliper:'',
        throttle_bodies:'',
        airbox:'',
        exhaust_system:'',
        non_factory_items:'',
        overal_condition:'',
        service_history:'This 2000 Ducati 996 ‘Sports Production Special’ is a neat and original example of Ducati’s rare sports bike, boasting a signature by Ducati rider and three-time Superbike World Champion Troy Bayliss on its fuel tank. Recently serviced and reported to be in fine mechanical health, this engaging modern classic is ready to ride and enjoy immediately, and would make a fine addition to any collection. ',
        summary:"The description of this auction lot is, to the best of the seller's knowledge, accurate and not misleading. Collecting Cars requests a range of detail about the lot from the seller, and performs a level of due diligence. However, bidders must satisfy themselves as to the accuracy of the description, and conduct any research they feel is necessary before committing to a bid. Please see our Terms and Conditions for full details. ",
        exteriors:[
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/motorcycle-1.png'
            },
            {
                url: '/motorcycle/motorcycle-2.png'
            },
            {
                url: '/motorcycle/motorcycle-3.png'
            },
            {
                url: '/motorcycle/motorcycle-4.png'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
        ],
        interiors:[
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
        ],
        mechanicals:[
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
        ],
        code: '98233153',
        year: '2007',
        body_type:'sportbike',
        brand:{
            slug: 'mv-agusta'
        },
        model:{
            slug: 'F4'
        },
    },
    {
        name: '2023 Audi Q5 40 e-tron Shining Mech Suit #72036369',
        slug: '2023-Audi-Q5-40-e-tron-Shining-Mech-Suit',
        image: [
            {
                url: '/motorcycle/motorcycle-2.png'
            },
            {
                url: '/motorcycle/motorcycle-4.png'
            },
            {
                url: '/motorcycle/motorcycle-1.png'
            },
            {
                url: '/motorcycle/motorcycle-3.png'
            },
        ],
        price: '100',
        discount: '95',
        odometer:'12291',
        transmission:'Manual',
        colours: 'Red',
        engine:'996cc',
        key_facts:[
            {
                key: "This 1999 Ducati 'Sport production special' is a largely original example of the marque's classi legal superbike, presented in smart overall condition"                
            },
            {
                key: "It is built arround a lightweight version of the 996cc 90° L-twin desmodromic motor found in the 916 six-speed manual transmission"                
            },
            {
                key: "The odometer shows 12,291 kilometers from new"                
            },
            {
                key: "Build in 1999, this is 2000 model year 996 SPS"                
            },
            {
                key: "Imported from Japan to Australia, this bike is numbered 1143 of approximately 1,780 produced, and its signed by Superbike World Championship winner Troy Bayliss"                
            },
            {
                key: "It was recently serviced with the timing belts changed in November 2022"                
            },
        ],
        fairing_material: '',
        front_forks: '',
        rear_shock:'',
        front_wheel:'',
        front_tire:'',
        rear_wheel:'',
        rear_tire:'',
        rear_hugger:'',
        swing_arm:'',
        steering_damper:'',
        rear_sets:'',
        front_brakes:'',
        front_caliper:'',
        front_discs:'',
        rear_brake:'',
        rear_caliper:'',
        throttle_bodies:'',
        airbox:'',
        exhaust_system:'',
        non_factory_items:'',
        overal_condition:'',
        service_history:'This 2000 Ducati 996 ‘Sports Production Special’ is a neat and original example of Ducati’s rare sports bike, boasting a signature by Ducati rider and three-time Superbike World Champion Troy Bayliss on its fuel tank. Recently serviced and reported to be in fine mechanical health, this engaging modern classic is ready to ride and enjoy immediately, and would make a fine addition to any collection. ',
        summary:"The description of this auction lot is, to the best of the seller's knowledge, accurate and not misleading. Collecting Cars requests a range of detail about the lot from the seller, and performs a level of due diligence. However, bidders must satisfy themselves as to the accuracy of the description, and conduct any research they feel is necessary before committing to a bid. Please see our Terms and Conditions for full details. ",
        exteriors:[
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/motorcycle-1.png'
            },
            {
                url: '/motorcycle/motorcycle-2.png'
            },
            {
                url: '/motorcycle/motorcycle-3.png'
            },
            {
                url: '/motorcycle/motorcycle-4.png'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
        ],
        interiors:[
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
        ],
        mechanicals:[
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
            {
                url: '/motorcycle/ducati-996sps.jpg'
            },
            {
                url: '/motorcycle/Ducati-996-SPS-2.webp'
            },
        ],
        code: '98233153',
        year: '2007',
        body_type:'sportbike',
        brand:{
            slug: 'mv-agusta'
        },
        model:{
            slug: 'F4'
        },
    },
]

export const MOTORCYCLE_DATA = [
    {
        title: '2023 changan uUi-k iDD 1.5T Zhilling #57050708',
        image: '/motorcycle/motorcycle-1.png',
        price: '101',
        discount: '99',
    },
    {
        title: '2023 Audi Q5 40 e-tron Shining Mech Suit #72036369',
        image: '/motorcycle/motorcycle-2.png',
        price: '94',
        discount: '88',
    },
    {
        title: '023 volkswagen ID.4X Pure+ #57965101',
        image: '/motorcycle/motorcycle-3.png',
        price: '99',
        discount: '92',
    },
    {
        title: '2023 Audi Q5 40 e-tron Shining Mech Suit #72036369',
        image: '/motorcycle/motorcycle-4.png',
        price: '87',
        discount: '82',
    },
]

export const PHONE_COUNTRY_CODE = [
    {'name': 'Afghanistan', 'code': '+93'},
    {'name': 'Albania', 'code': '+355'},
    {'name': 'Algeria', 'code': '+213'},
    {'name': 'Andorra', 'code': '+376'},
    {'name': 'Angola', 'code': '+244'},
    {'name': 'Antigua and Barbuda', 'code': '+1-268'},
    {'name': 'Argentina', 'code': '+54'},
    {'name': 'Armenia', 'code': '+374'},
    {'name': 'Australia', 'code': '+61'},
    {'name': 'Austria', 'code': '+43'},
    {'name': 'Azerbaijan', 'code': '+994'},
    {'name': 'Bahamas', 'code': '+1-242'},
    {'name': 'Bahrain', 'code': '+973'},
    {'name': 'Bangladesh', 'code': '+880'},
    {'name': 'Barbados', 'code': '+1-246'},
    {'name': 'Belarus', 'code': '+375'},
    {'name': 'Belgium', 'code': '+32'},
    {'name': 'Belize', 'code': '+501'},
    {'name': 'Benin', 'code': '+229'},
    {'name': 'Bhutan', 'code': '+975'},
    {'name': 'Bolivia', 'code': '+591'},
    {'name': 'Bosnia and Herzegovina', 'code': '+387'},
    {'name': 'Botswana', 'code': '+267'},
    {'name': 'Brazil', 'code': '+55'},
    {'name': 'Brunei', 'code': '+673'},
    {'name': 'Bulgaria', 'code': '+359'},
    {'name': 'Burkina Faso', 'code': '+226'},
    {'name': 'Burundi', 'code': '+257'},
    {'name': 'Cabo Verde', 'code': '+238'},
    {'name': 'Cambodia', 'code': '+855'},
    {'name': 'Cameroon', 'code': '+237'},
    {'name': 'Canada', 'code': '+1'},
    {'name': 'Central African Republic', 'code': '+236'},
    {'name': 'Chad', 'code': '+235'},
    {'name': 'Chile', 'code': '+56'},
    {'name': 'China', 'code': '+86'},
    {'name': 'Colombia', 'code': '+57'},
    {'name': 'Comoros', 'code': '+269'},
    {'name': 'Congo (Congo-Brazzaville)', 'code': '+242'},
    {'name': 'Costa Rica', 'code': '+506'},
    {'name': 'Croatia', 'code': '+385'},
    {'name': 'Cuba', 'code': '+53'},
    {'name': 'Cyprus', 'code': '+357'},
    {'name': 'Czechia (Czech Republic)', 'code': '+420'},
    {'name': 'Democratic Republic of the Congo', 'code': '+243'},
    {'name': 'Denmark', 'code': '+45'},
    {'name': 'Djibouti', 'code': '+253'},
    {'name': 'Dominica', 'code': '+1-767'},
    {'name': 'Dominican Republic', 'code': '+1-809'},
    {'name': 'Ecuador', 'code': '+593'},
    {'name': 'Egypt', 'code': '+20'},
    {'name': 'El Salvador', 'code': '+503'},
    {'name': 'Equatorial Guinea', 'code': '+240'},
    {'name': 'Eritrea', 'code': '+291'},
    {'name': 'Estonia', 'code': '+372'},
    {'name': 'Eswatini (fmr. "Swaziland")', 'code': '+268'},
    {'name': 'Ethiopia', 'code': '+251'},
    {'name': 'Fiji', 'code': '+679'},
    {'name': 'Finland', 'code': '+358'},
    {'name': 'France', 'code': '+33'},
    {'name': 'Gabon', 'code': '+241'},
    {'name': 'Gambia', 'code': '+220'},
    {'name': 'Georgia', 'code': '+995'},
    {'name': 'Germany', 'code': '+49'},
    {'name': 'Ghana', 'code': '+233'},
    {'name': 'Greece', 'code': '+30'},
    {'name': 'Grenada', 'code': '+1-473'},
    {'name': 'Guatemala', 'code': '+502'},
    {'name': 'Guinea', 'code': '+224'},
    {'name': 'Guinea-Bissau', 'code': '+245'},
    {'name': 'Guyana', 'code': '+592'},
    {'name': 'Haiti', 'code': '+509'},
    {'name': 'Holy See', 'code': '+379'},
    {'name': 'Honduras', 'code': '+504'},
    {'name': 'Hungary', 'code': '+36'},
    {'name': 'Iceland', 'code': '+354'},
    {'name': 'India', 'code': '+91'},
    {'name': 'Indonesia', 'code': '+62'},
    {'name': 'Iran', 'code': '+98'},
    {'name': 'Iraq', 'code': '+964'},
    {'name': 'Ireland', 'code': '+353'},
    {'name': 'Israel', 'code': '+972'},
    {'name': 'Italy', 'code': '+39'},
    {'name': 'Jamaica', 'code': '+1-876'},
    {'name': 'Japan', 'code': '+81'},
    {'name': 'Jordan', 'code': '+962'},
    {'name': 'Kazakhstan', 'code': '+7'},
    {'name': 'Kenya', 'code': '+254'},
    {'name': 'Kiribati', 'code': '+686'},
    {'name': 'Kuwait', 'code': '+965'},
    {'name': 'Kyrgyzstan', 'code': '+996'},
    {'name': 'Laos', 'code': '+856'},
    {'name': 'Latvia', 'code': '+371'},
    {'name': 'Lebanon', 'code': '+961'},
    {'name': 'Lesotho', 'code': '+266'},
    {'name': 'Liberia', 'code': '+231'},
    {'name': 'Libya', 'code': '+218'},
    {'name': 'Liechtenstein', 'code': '+423'},
    {'name': 'Lithuania', 'code': '+370'},
    {'name': 'Luxembourg', 'code': '+352'},
    {'name': 'Madagascar', 'code': '+261'},
    {'name': 'Malawi', 'code': '+265'},
    {'name': 'Malaysia', 'code': '+60'},
    {'name': 'Maldives', 'code': '+960'},
    {'name': 'Mali', 'code': '+223'},
    {'name': 'Malta', 'code': '+356'},
    {'name': 'Marshall Islands', 'code': '+692'},
    {'name': 'Mauritania', 'code': '+222'},
    {'name': 'Mauritius', 'code': '+230'},
    {'name': 'Mexico', 'code': '+52'},
    {'name': 'Micronesia', 'code': '+691'},
    {'name': 'Moldova', 'code': '+373'},
    {'name': 'Monaco', 'code': '+377'},
    {'name': 'Mongolia', 'code': '+976'},
    {'name': 'Montenegro', 'code': '+382'},
    {'name': 'Morocco', 'code': '+212'},
    {'name': 'Mozambique', 'code': '+258'},
    {'name': 'Myanmar (formerly Burma)', 'code': '+95'},
    {'name': 'Namibia', 'code': '+264'},
    {'name': 'Nauru', 'code': '+674'},
    {'name': 'Nepal', 'code': '+977'},
    {'name': 'Netherlands', 'code': '+31'},
    {'name': 'New Zealand', 'code': '+64'},
    {'name': 'Nicaragua', 'code': '+505'},
    {'name': 'Niger', 'code': '+227'},
    {'name': 'Nigeria', 'code': '+234'},
    {'name': 'North Macedonia', 'code': '+389'},
    {'name': 'Norway', 'code': '+47'},
    {'name': 'Oman', 'code': '+968'},
    {'name': 'Pakistan', 'code': '+92'},
    {'name': 'Palau', 'code': '+680'},
    {'name': 'Palestine State', 'code': '+970'},
    {'name': 'Panama', 'code': '+507'},
    {'name': 'Papua New Guinea', 'code': '+675'},
    {'name': 'Paraguay', 'code': '+595'},
    {'name': 'Peru', 'code': '+51'},
    {'name': 'Philippines', 'code': '+63'},
    {'name': 'Poland', 'code': '+48'},
    {'name': 'Portugal', 'code': '+351'},
    {'name': 'Qatar', 'code': '+974'},
    {'name': 'Romania', 'code': '+40'},
    {'name': 'Russia', 'code': '+7'},
    {'name': 'Rwanda', 'code': '+250'},
    {'name': 'Saint Kitts and Nevis', 'code': '+1-869'},
    {'name': 'Saint Lucia', 'code': '+1-758'},
    {'name': 'Saint Vincent and the Grenadines', 'code': '+1-784'},
    {'name': 'Samoa', 'code': '+685'},
    {'name': 'San Marino', 'code': '+378'},
    {'name': 'Sao Tome and Principe', 'code': '+239'},
    {'name': 'Saudi Arabia', 'code': '+966'},
    {'name': 'Senegal', 'code': '+221'},
    {'name': 'Serbia', 'code': '+381'},
    {'name': 'Seychelles', 'code': '+248'},
    {'name': 'Sierra Leone', 'code': '+232'},
    {'name': 'Singapore', 'code': '+65'},
    {'name': 'Slovakia', 'code': '+421'},
    {'name': 'Slovenia', 'code': '+386'},
    {'name': 'Solomon Islands', 'code': '+677'},
    {'name': 'Somalia', 'code': '+252'},
    {'name': 'South Africa', 'code': '+27'},
    {'name': 'South Sudan', 'code': '+211'},
    {'name': 'Spain', 'code': '+34'},
    {'name': 'Sri Lanka', 'code': '+94'},
    {'name': 'Sudan', 'code': '+249'},
    {'name': 'Suriname', 'code': '+597'},
    {'name': 'Sweden', 'code': '+46'},
    {'name': 'Switzerland', 'code': '+41'},
    {'name': 'Syria', 'code': '+963'},
    {'name': 'Tajikistan', 'code': '+992'},
    {'name': 'Tanzania', 'code': '+255'},
    {'name': 'Thailand', 'code': '+66'},
    {'name': 'Timor-Leste', 'code': '+670'},
    {'name': 'Togo', 'code': '+228'},
    {'name': 'Tonga', 'code': '+676'},
    {'name': 'Trinidad and Tobago', 'code': '+1-868'},
    {'name': 'Tunisia', 'code': '+216'},
    {'name': 'Turkey', 'code': '+90'},
    {'name': 'Turkmenistan', 'code': '+993'},
    {'name': 'Tuvalu', 'code': '+688'},
    {'name': 'Uganda', 'code': '+256'},
    {'name': 'Ukraine', 'code': '+380'},
    {'name': 'United Arab Emirates', 'code': '+971'},
    {'name': 'United Kingdom', 'code': '+44'},
    {'name': 'United States of America', 'code': '+1'},
    {'name': 'Uruguay', 'code': '+598'},
    {'name': 'Uzbekistan', 'code': '+998'},
    {'name': 'Vanuatu', 'code': '+678'},
    {'name': 'Venezuela', 'code': '+58'},
    {'name': 'Vietnam', 'code': '+84'},
    {'name': 'Yemen', 'code': '+967'},
    {'name': 'Zambia', 'code': '+260'},
    {'name': 'Zimbabwe', 'code': '+263'},
    {'name': 'South Korea', 'code': '+82'},
]

  
  

