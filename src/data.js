// import house images
import House1 from "./assets/img/houses/house1.png";
import House2 from "./assets/img/houses/house2.png";
import House3 from "./assets/img/houses/house3.png";
import House4 from "./assets/img/houses/house4.png";
import House5 from "./assets/img/houses/house5.png";
import House6 from "./assets/img/houses/house6.png";
import House7 from "./assets/img/houses/house7.png";
import House8 from "./assets/img/houses/house8.png";
import House9 from "./assets/img/houses/house9.png";
import House10 from "./assets/img/houses/house10.png";
import House11 from "./assets/img/houses/house11.png";
import House12 from "./assets/img/houses/house12.png";
// import house large images
import House1Lg from "./assets/img/houses/house1lg.png";
import House2Lg from "./assets/img/houses/house2lg.png";
import House3Lg from "./assets/img/houses/house3lg.png";
import House4Lg from "./assets/img/houses/house4lg.png";
import House5Lg from "./assets/img/houses/house5lg.png";
import House6Lg from "./assets/img/houses/house6lg.png";
import House7Lg from "./assets/img/houses/house7lg.png";
import House8Lg from "./assets/img/houses/house8lg.png";
import House9Lg from "./assets/img/houses/house9lg.png";
import House10Lg from "./assets/img/houses/house10lg.png";
import House11Lg from "./assets/img/houses/house11lg.png";
import House12Lg from "./assets/img/houses/house12lg.png";

// import apartments images
import Apartment1 from "./assets/img/apartments/a1.png";
import Apartment2 from "./assets/img/apartments/a2.png";
import Apartment3 from "./assets/img/apartments/a3.png";
import Apartment4 from "./assets/img/apartments/a4.png";
import Apartment5 from "./assets/img/apartments/a5.png";
import Apartment6 from "./assets/img/apartments/a6.png";
// import apartments large images
import Apartment1Lg from "./assets/img/apartments/a1lg.png";
import Apartment2Lg from "./assets/img/apartments/a2lg.png";
import Apartment3Lg from "./assets/img/apartments/a3lg.png";
import Apartment4Lg from "./assets/img/apartments/a4lg.png";
import Apartment5Lg from "./assets/img/apartments/a5lg.png";
import Apartment6Lg from "./assets/img/apartments/a6lg.png";

// import agents images
import Agent1 from "./assets/img/agents/agent1.png";
import Agent2 from "./assets/img/agents/agent2.png";
import Agent3 from "./assets/img/agents/agent3.png";
import Agent4 from "./assets/img/agents/agent4.png";
import Agent5 from "./assets/img/agents/agent5.png";
import Agent6 from "./assets/img/agents/agent6.png";
import Agent7 from "./assets/img/agents/agent7.png";
import Agent8 from "./assets/img/agents/agent8.png";
import Agent9 from "./assets/img/agents/agent9.png";
import Agent10 from "./assets/img/agents/agent10.png";
import Agent11 from "./assets/img/agents/agent11.png";
import Agent12 from "./assets/img/agents/agent12.png";

export const housesData = [
  {
    id: 1,
    type: "House",
    name: "House 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: House1,
    imageLg: House1Lg,
    country: "Mumbai",
    address: "123 Marine Drive, Mumbai, Maharashtra 400002",
    bedrooms: "6",
    bathrooms: "3",
    surface: "4200 sq ft",
    year: "2024",
    price: "35000", // Adjusted price
    date: "5",
    agent: {
      image: Agent1,
      name: "Rohan Mehta", // Changed to an Indian name
      phone: "0123 456 78910",
    },
  },
  {
    id: 2,
    type: "House",
    name: "House 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: House2,
    imageLg: House2Lg,
    country: "Delhi",
    address: "456 Connaught Place, New Delhi, Delhi 110001",
    bedrooms: "6",
    bathrooms: "3",
    surface: "4200 sq ft",
    year: "2024",
    price: "28000", // Adjusted price
    date: "10",
    agent: {
      image: Agent2,
      name: "Aditi Sharma", // Changed to an Indian name
      phone: "0123 456 78910",
    },
  },
  {
    id: 3,
    type: "House",
    name: "House 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: House3,
    imageLg: House3Lg,
    country: "Bengaluru",
    address: "789 Brigade Road, Bengaluru, Karnataka 560001",
    bedrooms: "6",
    bathrooms: "3",
    surface: "4200 sq ft",
    year: "2024",
    price: "32000", // Adjusted price
    date: "5",
    agent: {
      image: Agent3,
      name: "Suresh Nair", // Changed to an Indian name
      phone: "0123 456 78910",
    },
  },
  {
    id: 4,
    type: "House",
    name: "House 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: House4,
    imageLg: House4Lg,
    country: "Chennai",
    address: "159 Marina Beach Road, Chennai, Tamil Nadu 600001",
    bedrooms: "6",
    bathrooms: "3",
    surface: "4200 sq ft",
    year: "2024",
    price: "38000", // Adjusted price
    date: "15",
    agent: {
      image: Agent4,
      name: "Deepa Reddy", // Changed to an Indian name
      phone: "0123 456 78910",
    },
  },
  {
    id: 5,
    type: "House",
    name: "House 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: House5,
    imageLg: House5Lg,
    country: "Hyderabad",
    address: "321 Banjara Hills, Hyderabad, Telangana 500034",
    bedrooms: "5",
    bathrooms: "3",
    surface: "4200 sq ft",
    year: "2024",
    price: "25000", // Adjusted price
    date: "20",
    agent: {
      image: Agent5,
      name: "Vikram Joshi", // Changed to an Indian name
      phone: "0123 456 78910",
    },
  },
  {
    id: 6,
    type: "House",
    name: "House 6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: House6,
    imageLg: House6Lg,
    country: "Pune",
    address: "654 Koregaon Park, Pune, Maharashtra 411001",
    bedrooms: "6",
    bathrooms: "3",
    surface: "6200 sq ft",
    year: "2024",
    price: "22000", // Adjusted price
    date: "5",
    agent: {
      image: Agent6,
      name: "Nisha Pillai", // Changed to an Indian name
      phone: "0123 456 78910",
    },
  },
  {
    id: 7,
    type: "Apartment",
    name: "Apartment 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: Apartment1,
    imageLg: Apartment1Lg,
    country: "Noida",
    address: "987 Sector 50, Noida, Uttar Pradesh 202401",
    bedrooms: "2",
    bathrooms: "1",
    surface: "1200 sq ft",
    year: "2024",
    price: "21000", // Adjusted price
    date: "10",
    agent: {
      image: Agent7,
      name: "Rajesh Kumar", // Changed to an Indian name
      phone: "0123 456 78910",
    },
  },
  {
    id: 8,
    type: "Apartment",
    name: "Apartment 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: Apartment2,
    imageLg: Apartment2Lg,
    country: "Gurgaon",
    address: "258 MG Road, Gurgaon, Haryana 122001",
    bedrooms: "3",
    bathrooms: "1",
    surface: "1000 sq ft",
    year: "2024",
    price: "25000", // Adjusted price
    date: "15",
    agent: {
      image: Agent8,
      name: "Sonia Gupta", // Changed to an Indian name
      phone: "0123 456 78910",
    },
  },
  {
    id: 9,
    type: "Apartment",
    name: "Apartment 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: Apartment3,
    imageLg: Apartment3Lg,
    country: "Ahmedabad",
    address: "369 Ashram Road, Ahmedabad, Gujarat 380009",
    bedrooms: "2",
    bathrooms: "1",
    surface: "1100 sq ft",
    year: "2024",
    price: "24000", // Adjusted price
    date: "5",
    agent: {
      image: Agent9,
      name: "Priya Desai", // Changed to an Indian name
      phone: "0123 456 78910",
    },
  },
  
  {
    id: 7,
    type: "Apartment",
    name: "Apartment 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: Apartment1,
    imageLg: Apartment1Lg,
    country: "Noida",
    address: "987 Sector 50, Noida, Uttar Pradesh 202401",
    bedrooms: "2",
    bathrooms: "1",
    surface: "1200 sq ft",
    year: "2024",
    price: "21000", // Adjusted price
    date: "10",
    agent: {
      image: Agent7,
      name: "Rajesh Kumar", // Changed to an Indian name
      phone: "0123 456 78910",
    },
  },
  {
    id: 8,
    type: "Apartment",
    name: "Apartment 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: Apartment2,
    imageLg: Apartment2Lg,
    country: "Gurgaon",
    address: "258 MG Road, Gurgaon, Haryana 122001",
    bedrooms: "3",
    bathrooms: "1",
    surface: "1000 sq ft",
    year: "2024",
    price: "25000", // Adjusted price
    date: "15",
    agent: {
      image: Agent8,
      name: "Sonia Gupta", // Changed to an Indian name
      phone: "0123 456 78910",
    },
  },
  {
    id: 9,
    type: "Apartment",
    name: "Apartment 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: Apartment3,
    imageLg: Apartment3Lg,
    country: "Ahmedabad",
    address: "369 Ashram Road, Ahmedabad, Gujarat 380009",
    bedrooms: "2",
    bathrooms: "1",
    surface: "1100 sq ft",
    year: "2024",
    price: "24000", // Adjusted price
    date: "5",
    agent: {
      image: Agent9,
      name: "Priya Desai", // Changed to an Indian name
      phone: "0123 456 78910",
    },
  },
  
  {
    id: 7,
    type: "Apartment",
    name: "Apartment 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: Apartment1,
    imageLg: Apartment1Lg,
    country: "Noida",
    address: "987 Sector 50, Noida, Uttar Pradesh 202401",
    bedrooms: "2",
    bathrooms: "1",
    surface: "1200 sq ft",
    year: "2024",
    price: "21000", // Adjusted price
    date: "10",
    agent: {
      image: Agent7,
      name: "Rajesh Kumar", // Changed to an Indian name
      phone: "0123 456 78910",
    },
  },
  {
    id: 8,
    type: "Apartment",
    name: "Apartment 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: Apartment2,
    imageLg: Apartment2Lg,
    country: "Gurgaon",
    address: "258 MG Road, Gurgaon, Haryana 122001",
    bedrooms: "3",
    bathrooms: "1",
    surface: "1000 sq ft",
    year: "2024",
    price: "25000", // Adjusted price
    date: "15",
    agent: {
      image: Agent8,
      name: "Sonia Gupta", // Changed to an Indian name
      phone: "0123 456 78910",
    },
  },
  {
    id: 9,
    type: "Apartment",
    name: "Apartment 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: Apartment3,
    imageLg: Apartment3Lg,
    country: "Ahmedabad",
    address: "369 Ashram Road, Ahmedabad, Gujarat 380009",
    bedrooms: "2",
    bathrooms: "1",
    surface: "1100 sq ft",
    year: "2024",
    price: "24000", // Adjusted price
    date: "5",
    agent: {
      image: Agent9,
      name: "Priya Desai", // Changed to an Indian name
      phone: "0123 456 78910",
    },
  },
  
  {
    id: 7,
    type: "Apartment",
    name: "Apartment 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: Apartment1,
    imageLg: Apartment1Lg,
    country: "Noida",
    address: "987 Sector 50, Noida, Uttar Pradesh 202401",
    bedrooms: "2",
    bathrooms: "1",
    surface: "1200 sq ft",
    year: "2024",
    price: "21000", // Adjusted price
    date: "10",
    agent: {
      image: Agent7,
      name: "Rajesh Kumar", // Changed to an Indian name
      phone: "0123 456 78910",
    },
  },
  {
    id: 8,
    type: "Apartment",
    name: "Apartment 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: Apartment2,
    imageLg: Apartment2Lg,
    country: "Gurgaon",
    address: "258 MG Road, Gurgaon, Haryana 122001",
    bedrooms: "3",
    bathrooms: "1",
    surface: "1000 sq ft",
    year: "2024",
    price: "25000", // Adjusted price
    date: "15",
    agent: {
      image: Agent8,
      name: "Sonia Gupta", // Changed to an Indian name
      phone: "0123 456 78910",
    },
  },
  {
    id: 9,
    type: "Apartment",
    name: "Apartment 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: Apartment3,
    imageLg: Apartment3Lg,
    country: "Ahmedabad",
    address: "369 Ashram Road, Ahmedabad, Gujarat 380009",
    bedrooms: "2",
    bathrooms: "1",
    surface: "1100 sq ft",
    year: "2024",
    price: "24000", // Adjusted price
    date: "5",
    agent: {
      image: Agent9,
      name: "Priya Desai", // Changed to an Indian name
      phone: "0123 456 78910",
    },
  },
  
  {
    id: 7,
    type: "Apartment",
    name: "Apartment 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: Apartment1,
    imageLg: Apartment1Lg,
    country: "Noida",
    address: "987 Sector 50, Noida, Uttar Pradesh 202401",
    bedrooms: "2",
    bathrooms: "1",
    surface: "1200 sq ft",
    year: "2024",
    price: "21000", // Adjusted price
    date: "10",
    agent: {
      image: Agent7,
      name: "Rajesh Kumar", // Changed to an Indian name
      phone: "0123 456 78910",
    },
  },
  {
    id: 8,
    type: "Apartment",
    name: "Apartment 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: Apartment2,
    imageLg: Apartment2Lg,
    country: "Gurgaon",
    address: "258 MG Road, Gurgaon, Haryana 122001",
    bedrooms: "3",
    bathrooms: "1",
    surface: "1000 sq ft",
    year: "2024",
    price: "25000", // Adjusted price
    date: "15",
    agent: {
      image: Agent8,
      name: "Sonia Gupta", // Changed to an Indian name
      phone: "0123 456 78910",
    },
  },
  {
    id: 9,
    type: "Apartment",
    name: "Apartment 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: Apartment3,
    imageLg: Apartment3Lg,
    country: "Ahmedabad",
    address: "369 Ashram Road, Ahmedabad, Gujarat 380009",
    bedrooms: "2",
    bathrooms: "1",
    surface: "1100 sq ft",
    year: "2024",
    price: "24000", // Adjusted price
    date: "5",
    agent: {
      image: Agent9,
      name: "Priya Desai", // Changed to an Indian name
      phone: "0123 456 78910",
    },
  },
];
