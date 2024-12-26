import hotellistone from "../assets/hotelworld/hotellistone.jpg";
import hoteltwo from "../assets/hotelworld/hotellisttwo.png";
import hotelthree from "../assets/hotelworld/hotellistthree.jpg";
import hotelfoor from "../assets/hotelworld/hotelfoor.jpg";
import hotelfive from "../assets/hotelworld/hotelfive.jpg";
import hotelsix from "../assets/hotelworld/hotelsix.jpg";
import hotelseven from "../assets/hotelworld/hotelseven.jpg";
import hoteleight from "../assets/hotelworld/hoteleight.jpg";
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
        stars: 6,
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
    {
        id: 6,
        country: "UAE",
        city: "Dubai",
        name: "Atlantis The Palm",
        price: "500",
        days: 5,
        location: "Palm Jumeirah, Dubai, UAE",
        stars: 4,
        image: hotelfive, 
        description: `
        Atlantis The Palm is located on the iconic Palm Jumeirah island in Dubai and offers the perfect blend of luxury and entertainment. This massive resort features underwater restaurants, water parks, aquariums, and luxurious spa facilities, providing guests with an unforgettable experience. There are various activities, restaurants, and relaxation areas available for both families and couples. Additionally, its private beach and swimming pools make it a true paradise for vacationers.
        `,
        rating: 4.8,
        reviews: 1200,
        features: ["Private beach", "Aquaventure Waterpark", "Underwater restaurant", "Spa & wellness center", "Luxury shopping", "Kids club", "Helipad", "5-star dining"],
        rooms: [crillionroomone, crillionroomtwo, crillionroomthree, crilionroomfoor],
    },
    {
        id: 7,
        country: "Japan",
        city: "Tokyo",
        name: "Aman Tokyo",
        price: "600",
        days: 5,
        location: "Toranomon, Tokyo, Japan",
        stars: 10,
        image: hotelsix,
        description: `
           
Here’s the description of Aman Tokyo in English:

Aman Tokyo is one of the most luxurious hotels in Tokyo, Japan’s capital. Combining modern design with Japanese aesthetics, this hotel offers guests a peaceful and luxurious experience. The spacious and elegant rooms at Aman Tokyo offer stunning views of the city, providing guests with an atmosphere of tranquility. The hotel features a spa, swimming pools, and traditional Japanese baths (onsen), offering ideal facilities for relaxation and rejuvenation.
        `,
        rating: 4.9,
        reviews: 900,
        features: ["City view", "Private spa", "Traditional Onsen", "Luxury dining", "Yoga classes", "Private gardens", "5-star service", "Infinity pool"],
        rooms: [crillionroomone, crillionroomtwo, crillionroomthree, crilionroomfoor],  // Oda görselleri eklenmeli
    },
   {
        id: 8,
        country: "Italy",
        city: "Turin",
        name: "Grand Hotel Sitea",
        price: "400",
        days: 5,
        location: "Via Carlo Alberto, 35, 10123 Turin, Italy",
        stars: 9,
        image: hoteleight, 
        description: `
            Grand Hotel Sitea is one of the most prestigious hotels in Turin, Italy. This luxury hotel blends classic elegance with modern comfort, offering guests a sophisticated and refined stay in the heart of the city. Located just steps away from the main attractions like the Egyptian Museum and the Royal Palace, it provides the perfect base to explore Turin's rich history and culture. The hotel offers spacious rooms, a renowned restaurant serving authentic Italian cuisine, and a luxurious wellness center for relaxation. With impeccable service and attention to detail, it’s a perfect choice for travelers seeking an unforgettable experience in Turin.
        `,
        rating: 4.8,
        reviews: 750,
        features: ["Central location", "Gourmet restaurant", "Luxury wellness center", "Spacious rooms", "Italian cuisine", "Bar/lounge", "5-star service", "City tours"],
        rooms: [crillionroomone, crillionroomtwo, crillionroomthree, crilionroomfoor],
    },
    {
        id: 9,
        country: "Italy",
        city: "Portofino",
        name: "Hotel Splendido",
        price: "800",
        days: 5,
        location: "Salita Baratta 16, 16034 Portofino, Italy",
        stars: 10,
        image: hotelseven, 
        description: `
            Hotel Splendido is one of the most iconic and luxurious hotels in Italy, located in the picturesque seaside village of Portofino. This glamorous hotel offers breathtaking views of the Ligurian Sea and the charming harbor. It combines a rich history of hospitality with modern luxury, providing guests with an unforgettable experience. The hotel features spacious rooms and suites, a Michelin-starred restaurant, a world-class spa, and an outdoor pool. Guests can also enjoy private yacht tours and exclusive services. With its stunning views, exceptional service, and refined atmosphere, Hotel Splendido is perfect for those seeking the best of luxury and relaxation in the heart of the Italian Riviera.
        `,
        rating: 4.9,
        reviews: 1200,
        features: ["Seafront location", "Michelin-starred restaurant", "Luxury spa", "Infinity pool", "Private yacht tours", "5-star service", "Exclusive amenities", "Panoramic views"],
        rooms: [crillionroomone, crillionroomtwo, crillionroomthree, crilionroomfoor],  // Room images should be added here
    }
    
    
    
    
];

export default hotels;
