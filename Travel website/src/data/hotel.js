import hotellistone from "../assets/hotelworld/hotellistone.jpg";
import hoteltwo from "../assets/hotelworld/hotellisttwo.png";
import hotelthree from "../assets/hotelworld/hotellistthree.jpg";
import hotelfoor from "../assets/hotelworld/hotelfoor.jpg";
import shahroomone from "../assets/hotelworld/shahotel/shahroomone.jpg";
import shahroomtwo from "../assets/hotelworld/shahotel/shahroomtwo.jpg";
import shahroomthree from "../assets/hotelworld/shahotel/shahroomthree.jpg";
import shahroomfoor from "../assets/hotelworld/shahotel/shahroomfoor.jpg";
import shangriroomone from "../assets/hotelworld/shangri/shangriroomone.jpg";
import shangriroomtwo from "../assets/hotelworld/shangri/shangriroomtwo.jpg";
import shangriroomthree from "../assets/hotelworld/shangri/shangriroomthree.jpg";
import shangriroomfoor from "../assets/hotelworld/shangri/shangriroomfoor.jpg";
import crillionroomone from "../assets/hotelworld/crillon/crillionroomone.jpg";
import crillionroomtwo from "../assets/hotelworld/crillon/crillionroomtwo.jpg";
import crillionroomthree from "../assets/hotelworld/crillon/crillionroomthree.jpg";
import crilionroomfoor from "../assets/hotelworld/crillon/crilionroomfoor.png";
import maldiveroomone from "../assets/hotelworld/maldive/maldiveroomone.jpg";
import maldiveroomtwo from "../assets/hotelworld/maldive/maldiveroomtwo.jpg";
import maldivroomthree from "../assets/hotelworld/maldive/maldivroomthree.jpg";
import maldiveroomfoor from "../assets/hotelworld/maldive/maldiveroomfoor.jpg";

const hotels = [
    {
        id: 1,
        country: "Azerbaijan",
        city: "Baku",
        name: "Shah Palace Hotel",
        price: "240",
        days: 3,
        location: "28 May St, Baku, Azerbaijan",
        stars: 5,
        image: hotellistone,
        description: `
        Shah Palace Hotel offers a magnificent experience with its luxurious rooms and exceptional service. Located in the city center, the hotel is within walking distance of major tourist attractions such as Flame Towers and Fountain Square. It features modern amenities, a full-service spa, and a restaurant serving local and international cuisine, all designed with guest comfort in mind, including a terrace with a breathtaking view of the city. It is an excellent choice for both business and leisure travelers.
        `,
        rating: 4.3,
        reviews: 371,
        features: ["Near park", "Clean hotel", "Free WiFi", "Breakfast included"],
        rooms: [shahroomone, shahroomtwo, shahroomthree, shahroomfoor],
    },
    {
        id: 2,
        country: "Turkey",
        city: "İstanbul",
        name: "Shangri-La Bosphorus",
        price: "320",
        days: 2,
        location: "Kuruçeşme Mah. Çırağan Cad, Istanbul ",
        stars: 3,
        image: hoteltwo,
        description: `
        Shangri-La Bosphorus is famous for its breathtaking view of the Bosphorus. The hotel offers guests an unforgettable accommodation experience with spacious rooms elegantly decorated, a world-class spa, and a restaurant located on the waterfront terrace. Its proximity to significant locations like Dolmabahçe Palace and Taksim Square makes it an ideal place to explore the culture of Istanbul. Additionally, it provides personalized services and a fitness center.
        `,
        rating: 4.7,
        reviews: 250,
        features: ["Near nightlife", "Fitness center", "Spa services", "Pet friendly"],
        rooms: [shangriroomone, shangriroomtwo, shangriroomthree, shangriroomfoor],
    },
    {
        id: 3,
        country: "France",
        city: "Marseille",
        name: "Hôtel de Crillon",
        price: "450",
        days: 5,
        location: "10 Place de la Concorde, Paris, France",
        stars: 8,
        image: hotelthree,
        description: `
        Hôtel de Crillon combines elegance with modern comfort. Located in the heart of Paris, this historic hotel is just steps away from iconic landmarks like the Louvre and Champs-Élysées. Guests can enjoy luxurious accommodation as well as gourmet restaurants, an exclusive bar, and a comprehensive spa experience. This hotel offers a unique Parisian experience that combines history, luxury, and authenticity, ensuring an unforgettable stay.
        `,
        rating: 4.8,
        reviews: 500,
        features: ["Near theater", "Gourmet restaurant", "Valet parking", "24/7 room service"],
        rooms: [crillionroomone, crillionroomtwo, crillionroomthree, crilionroomfoor],
    },
    {
        id: 4,
        country: "Maldives",
        city: "Maafushi",
        name: "Soneva Fushi",
        price: "300",
        days: 4,
        location: "Kunfunadhoo Island, Maldives",
        stars: 6,
        image: hotelfoor,
        description: `
        Soneva Fushi is a unique resort that offers an eco-luxury experience. Surrounded by stunning beaches and natural beauty, this resort features spacious villas with private pools and services focused on sustainability. It provides guests with both a relaxing and adventure-filled holiday. With gourmet restaurants, diving opportunities to explore rich marine life, and outdoor spa services, it offers a comprehensive holiday experience.
        `,
        rating: 4.5,
        reviews: 300,
        features: ["Near beach", "Eco-friendly", "Diving center", "Yoga classes"],
        rooms: [maldiveroomone, maldiveroomtwo, maldivroomthree, maldiveroomfoor],
    },
];

export default hotels;
