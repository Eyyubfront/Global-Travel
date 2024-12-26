import baku from "../assets/cities/baku.jpg";
import istanbul from "../assets/cities/istanbul.jpg";
import japaneses from "../assets/cities/japaneses.jpg";
import maldives from "../assets/cities/maldives.jpg";
import paris from "../assets/cities/paris.jpg";
import abdubai from "../assets/cities/abdubai.jpg";
import sweden from "../assets/cities/sweden.jpg";
import italys from "../assets/cities/italys.jpg";
import airplaneone from "../assets/cities/airplane/cabinone.jpg";
import airplanetwo from "../assets/cities/airplane/cabintwo.jpg";
import airplanethree from "../assets/cities/airplane/cabinthree.jpg";
import airplanefoor from "../assets/cities/airplane/cabinfoor.jpg";
import airplanefive from "../assets/cities/airplane/cabinfive.jpg";

export const cities = [
    { 
        id: 0, 
        img: japaneses, 
        title: "Japanese", 
        citycountry:"Tokyo",
        price: 100, 
        days: 1, 
        rating: 4.5, 
        reviews: 100,
        airplanes: [airplaneone, airplanetwo, airplanethree, airplanefoor,airplanefive],
        details: [
            "Stay for 5 days and enjoy a 50% cancellation fee if you cancel your reservation.",
            "Alcohol consumption is strictly prohibited during the tour, except in hotels.",
            "Guests who violate this rule will not be allowed on transportation.",
            "Check-in time is 3 PM, and check-out time is 11 AM.",
            "Free Wi-Fi is available in all public areas."
        ]
    },
    { 
        id: 1, 
        img: paris, 
        title: "Paris", 
        citycountry:"Marseille",
        price: 150, 
        days: 2, 
        rating: 4.7, 
        reviews: 150,
        airplanes: [airplaneone, airplanetwo, airplanethree, airplanefoor,airplanefive],
        details: [
            "A minimum stay of 3 nights is required to enjoy special offers.",
            "Guests are encouraged to explore the local culture and attractions.",
            "Please note that pets are not allowed in the hotel premises.",
            "Daily housekeeping is included in your stay.",
            "Late check-out may incur additional charges."
        ]
    },
    { 
        id: 2, 
        img: abdubai, 
        title: "Dubai", 
        citycountry:"Abu Dhabi",
        price: 200, 
        days: 3, 
        rating: 4.2, 
        reviews: 80,
        airplanes: [airplaneone, airplanetwo, airplanethree, airplanefoor,airplanefive],
        details: [
            "Guests can enjoy a complimentary breakfast during their stay.",
            "A 30% fee will be applied for cancellations made less than 48 hours before check-in.",
            "Smoking is strictly prohibited in the rooms.",
            "Airport transfers can be arranged upon request.",
            "Gym facilities are available 24/7 for all guests."
        ]
    },
    { 
        id: 3, 
        img: maldives, 
        title: "Maldives", 
        citycountry:"Maafushi",
        price: 250, 
        days: 4, 
        rating: 4.8, 
        reviews: 200,
        airplanes: [airplaneone, airplanetwo, airplanethree, airplanefoor,airplanefive],
        details: [
            "A unique underwater dining experience is available for guests.",
            "Guests must pay a 50% deposit to secure their booking.",
            "Please refrain from using flash photography in common areas.",
            "Water sports activities can be booked through the hotel.",
            "Room service is available 24/7."
        ]
    },
    { 
        id: 4, 
        img: baku, 
        title: "Azerbaijan", 
        citycountry:"Baku",
        price: 300, 
        days: 3, 
        rating: 4.9, 
        reviews: 50,
        airplanes: [airplaneone, airplanetwo, airplanethree, airplanefoor,airplanefive],
        details: [
            "Free guided city tours are available for guests staying more than 3 nights.",
            "A 40% cancellation fee will apply if canceled less than 24 hours before check-in.",
            "Guests are encouraged to try local cuisine at nearby restaurants.",
            "Complimentary snacks and beverages are provided during check-in.",
            "Business center services are available for all guests."
        ]
    },
    { 
        id: 5, 
        img: istanbul, 
        title: "Istanbul", 
        citycountry:"Turkish",
        price: 400, 
        days: 4, 
        rating: 4.6, 
        reviews: 120,
        airplanes: [airplaneone, airplanetwo, airplanethree, airplanefoor,airplanefive],
        details: [
            "Enjoy a complimentary dinner cruise along the Bosphorus for stays over 4 nights.",
            "A cancellation fee of 50% applies to changes made within 72 hours.",
            "Guests are advised to dress modestly when visiting religious sites.",
            "Free shuttle service to major tourist attractions is available.",
            "A loyalty program is offered for returning guests."
        ]
    },
    { 
        id: 6, 
        img: sweden, 
        title: "Sweden", 
        citycountry: "Stockholm, Sweden", // Daha spesifik şehir ve ülke bilgisi
        price: 500, 
        days: 7, 
        rating: 4.9, 
        reviews: 140,
        airplanes: [airplaneone, airplanetwo, airplanethree, airplanefoor, airplanefive],
        details: [
            "Enjoy a complimentary dinner cruise along the Bosphorus for stays over 4 nights.",
            "A cancellation fee of 50% applies to changes made within 72 hours.",
            "Guests are advised to dress modestly when visiting religious sites.",
            "Free shuttle service to major tourist attractions is available.",
            "A loyalty program is offered for returning guests.",
            "Stockholm, the capital of Sweden, is a stunning city built across 14 islands connected by over 50 bridges.",
            "Explore the historical Gamla Stan (Old Town) or enjoy a boat tour of the archipelago.",
            "Enjoy a wide variety of museums, including the famous Vasa Museum, showcasing the 17th-century warship.",
            "Stockholm offers a mix of modern and historical architecture, with scenic views of the Baltic Sea.",
            "Don't miss out on the Northern Lights if you're visiting the northern regions of Kiruna and Abisko."
        ]
    },
    { 
        id: 7, 
        img: italys, 
        title: "Italy", 
        citycountry: "Rome, Italy", // Daha spesifik şehir ve ülke bilgisi
        price: 500, 
        days: 7, 
        rating: 4.9, 
        reviews: 140,
        airplanes: [airplaneone, airplanetwo, airplanethree, airplanefoor, airplanefive],
        details: [
            "Enjoy a complimentary dinner cruise along the Bosphorus for stays over 4 nights.",
            "A cancellation fee of 50% applies to changes made within 72 hours.",
            "Guests are advised to dress modestly when visiting religious sites.",
            "Free shuttle service to major tourist attractions is available.",
            "A loyalty program is offered for returning guests.",
            "Rome, known as the Eternal City, is a place where ancient ruins meet modern life.",
            "Must-see landmarks include the Colosseum, Roman Forum, and the Vatican Museums, home to Michelangelo's Sistine Chapel.",
            "Vatican City, an independent city-state, houses the Pope and offers stunning religious and art treasures.",
            "Visit the iconic Trevi Fountain and toss a coin to ensure your return to Rome.",
            "Enjoy Italy’s world-famous cuisine, including pasta, pizza, and gelato, all while exploring charming piazzas."
        ]
    }
    
];

