import React, { useState, useEffect, useRef } from "react";
import Theme from "../theme/theme";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import styles from "../../styles/megamenu/App.module.css";
import Link from "next/link";
function Megamenu() {
  const myRef = useRef(null);
  const { setTheme, theme } = useTheme();
  const [Hovered, setHovered] = useState("");
  const [Subs, setSubs] = useState([]);
  const [Itemlist, setItemlist] = useState([]);

  const [Menus, setMenus] = useState([
    {
      id: 1,
      menu: "Motors",
      sub: [
        {
          id: 1,
          name: "Cars",
          item_list: [
            { id: 1, name: "Toyota", path: "#" },
            { id: 2, name: "Honda", path: "#" },
            { id: 3, name: "Ford", path: "#" },
            { id: 4, name: "Chevrolet", path: "#" },
            { id: 5, name: "BMW", path: "#" },
            { id: 6, name: "Mercedes-Benz", path: "#" },
            { id: 7, name: "Audi", path: "#" },
            { id: 8, name: "Tesla", path: "#" },
            { id: 9, name: "Nissan", path: "#" },
            { id: 10, name: "Volkswagen", path: "#" },
          ],
        },
        {
          id: 2,
          name: "Bikes",
          item_list: [
            { id: 1, name: "Yamaha", path: "#" },
            { id: 2, name: "Suzuki", path: "#" },
            { id: 3, name: "Harley-Davidson", path: "#" },
            { id: 4, name: "Kawasaki", path: "#" },
            { id: 5, name: "Ducati", path: "#" },
            { id: 6, name: "BMW Motorrad", path: "#" },
            { id: 7, name: "Triumph", path: "#" },
            { id: 8, name: "KTM", path: "#" },
            { id: 9, name: "Honda", path: "#" },
            { id: 10, name: "Aprilia", path: "#" },
          ],
        },
        {
          id: 3,
          name: "Trucks",
          item_list: [
            { id: 1, name: "Volvo", path: "#" },
            { id: 2, name: "Kenworth", path: "#" },
            { id: 3, name: "Peterbilt", path: "#" },
            { id: 4, name: "Mack Trucks", path: "#" },
            { id: 5, name: "International", path: "#" },
            { id: 6, name: "Freightliner", path: "#" },
            { id: 7, name: "Isuzu", path: "#" },
            { id: 8, name: "Hino", path: "#" },
            { id: 9, name: "Ford", path: "#" },
            { id: 10, name: "Chevrolet", path: "#" },
          ],
        },
        {
          id: 4,
          name: "Scooters",
          item_list: [
            { id: 1, name: "Vespa", path: "#" },
            { id: 2, name: "Honda", path: "#" },
            { id: 3, name: "Yamaha", path: "#" },
            { id: 4, name: "Piaggio", path: "#" },
            { id: 5, name: "Aprilia", path: "#" },
            { id: 6, name: "SYM", path: "#" },
            { id: 7, name: "Kymco", path: "#" },
            { id: 8, name: "Lambretta", path: "#" },
            { id: 9, name: "Genuine Scooters", path: "#" },
            { id: 10, name: "Tao Tao", path: "#" },
          ],
        },
        {
          id: 5,
          name: "RVs",
          item_list: [
            { id: 1, name: "Airstream", path: "#" },
            { id: 2, name: "Winnebago", path: "#" },
            { id: 3, name: "Jayco", path: "#" },
            { id: 4, name: "Forest River", path: "#" },
            { id: 5, name: "Thor Motor Coach", path: "#" },
            { id: 6, name: "Coachmen", path: "#" },
            { id: 7, name: "Fleetwood", path: "#" },
            { id: 8, name: "Newmar", path: "#" },
            { id: 9, name: "Tiffin Motorhomes", path: "#" },
            { id: 10, name: "Roadtrek", path: "#" },
          ],
        },
      ],
    },

    {
      id: 2,
      menu: "Property",
      sub: [
        {
          id: 1,
          name: "For rent",
          item_list: [
            { id: 1, name: "Villa", path: "#" },
            { id: 2, name: "Apartment", path: "#" },
            { id: 3, name: "House", path: "#" },
            { id: 4, name: "Condo", path: "#" },
            { id: 5, name: "Townhouse", path: "#" },
            { id: 6, name: "Duplex", path: "#" },
            { id: 7, name: "Cottage", path: "#" },
            { id: 8, name: "Loft", path: "#" },
            { id: 9, name: "Studio", path: "#" },
            { id: 10, name: "Penthouse", path: "#" },
          ],
        },
        {
          id: 2,
          name: "For sale",
          item_list: [
            { id: 1, name: "Single Family Home", path: "#" },
            { id: 2, name: "Condo", path: "#" },
            { id: 3, name: "Townhouse", path: "#" },
            { id: 4, name: "Multi-Family Home", path: "#" },
            { id: 5, name: "Land", path: "#" },
            { id: 6, name: "Commercial Property", path: "#" },
            { id: 7, name: "Mobile/Manufactured Home", path: "#" },
            { id: 8, name: "Farm/Ranch", path: "#" },
            { id: 9, name: "Apartment Building", path: "#" },
            { id: 10, name: "Other", path: "#" },
          ],
        },
        {
          id: 3,
          name: "Vacation rental",
          item_list: [
            { id: 1, name: "Beach House", path: "#" },
            { id: 2, name: "Cabin", path: "#" },
            { id: 3, name: "Ski Chalet", path: "#" },
            { id: 4, name: "Lake House", path: "#" },
            { id: 5, name: "Mountain Lodge", path: "#" },
            { id: 6, name: "Villa", path: "#" },
            { id: 7, name: "Cottage", path: "#" },
            { id: 8, name: "Bungalow", path: "#" },
            { id: 9, name: "Treehouse", path: "#" },
            { id: 10, name: "Houseboat", path: "#" },
          ],
        },
        {
          id: 4,
          name: "Commercial",
          item_list: [
            { id: 1, name: "Office Space", path: "#" },
            { id: 2, name: "Retail Space", path: "#" },
            { id: 3, name: "Industrial/Warehouse", path: "#" },
            { id: 4, name: "Restaurant/Bar", path: "#" },
            { id: 5, name: "Medical/Dental", path: "#" },
            { id: 6, name: "Hotel/Motel", path: "#" },
            { id: 7, name: "Land", path: "#" },
            { id: 8, name: "Special Purpose", path: "#" },
            { id: 9, name: "Mixed Use", path: "#" },
            { id: 10, name: "Other", path: "#" },
          ],
        },
        {
          id: 5,
          name: "Land",
          item_list: [
            { id: 1, name: "Residential Land", path: "#" },
            { id: 2, name: "Commercial Land", path: "#" },
            { id: 3, name: "Agricultural Land", path: "#" },
            { id: 4, name: "Industrial Land", path: "#" },
            { id: 5, name: "Undeveloped Land", path: "#" },
            { id: 6, name: "Timber Land", path: "#" },
            { id: 7, name: "Waterfront Land", path: "#" },
            { id: 8, name: "Ranch Land", path: "#" },
            { id: 9, name: "Mountain Land", path: "#" },
            { id: 10, name: "Island", path: "#" },
          ],
        },
      ],
    },

    {
      id: 3,
      menu: "Jobs",
      sub: [
        {
          id: 1,
          name: "Job by Category",
          item_list: [
            { id: 1, name: "Accounting", path: "#" },
            { id: 2, name: "Finance", path: "#" },
            { id: 3, name: "Marketing", path: "#" },
            { id: 4, name: "Information Technology", path: "#" },
            { id: 5, name: "Human Resources", path: "#" },
          ],
        },
        {
          id: 2,
          name: "Job by Location",
          item_list: [
            { id: 1, name: "New York", path: "#" },
            { id: 2, name: "Los Angeles", path: "#" },
            { id: 3, name: "Chicago", path: "#" },
            { id: 4, name: "Houston", path: "#" },
            { id: 5, name: "San Francisco", path: "#" },
          ],
        },
        {
          id: 3,
          name: "Job by Experience Level",
          item_list: [
            { id: 1, name: "Entry Level", path: "#" },
            { id: 2, name: "Mid Level", path: "#" },
            { id: 3, name: "Senior Level", path: "#" },
            { id: 4, name: "Executive Level", path: "#" },
            { id: 5, name: "Internship", path: "#" },
          ],
        },
        {
          id: 4,
          name: "Remote Jobs",
          item_list: [
            { id: 1, name: "Remote Software Developer", path: "#" },
            {
              id: 2,
              name: "Remote Customer Service Representative",
              path: "#",
            },
            { id: 3, name: "Remote Marketing Manager", path: "#" },
            { id: 4, name: "Remote Graphic Designer", path: "#" },
            { id: 5, name: "Remote Project Manager", path: "#" },
          ],
        },
        {
          id: 5,
          name: "Popular Job Titles",
          item_list: [
            { id: 1, name: "Software Engineer", path: "#" },
            { id: 2, name: "Data Analyst", path: "#" },
            { id: 3, name: "Marketing Coordinator", path: "#" },
            { id: 4, name: "Sales Associate", path: "#" },
            { id: 5, name: "Customer Success Manager", path: "#" },
          ],
        },
      ],
    },

    {
      id: 4,
      menu: "Classifieds",
      sub: [
        {
          id: 1,
          name: "Home appliances",
          item_list: [
            { id: 1, name: "Small kitchen", path: "#" },
            { id: 2, name: "Iron & sewing", path: "#" },
            { id: 3, name: "Large appliances", path: "#" },
            { id: 4, name: "Home climate control", path: "#" },
            { id: 5, name: "Laundry", path: "#" },
            { id: 6, name: "Cleaning", path: "#" },
            { id: 7, name: "Home security", path: "#" },
            { id: 8, name: "Garage organization", path: "#" },
            { id: 9, name: "Home automation", path: "#" },
            { id: 10, name: "Others", path: "#" },
          ],
        },
        {
          id: 2,
          name: "Electronics",
          item_list: [
            { id: 1, name: "Televisions", path: "#" },
            { id: 2, name: "Smartphones", path: "#" },
            { id: 3, name: "Laptops", path: "#" },
            { id: 4, name: "Tablets", path: "#" },
            { id: 5, name: "Cameras", path: "#" },
            { id: 6, name: "Headphones", path: "#" },
            { id: 7, name: "Speakers", path: "#" },
            { id: 8, name: "Gaming Consoles", path: "#" },
            { id: 9, name: "Smartwatches", path: "#" },
            { id: 10, name: "Accessories", path: "#" },
          ],
        },
        {
          id: 3,
          name: "Home & Garden",
          item_list: [
            { id: 1, name: "Furniture", path: "#" },
            { id: 2, name: "Kitchenware", path: "#" },
            { id: 3, name: "Bedding", path: "#" },
            { id: 4, name: "Bathroom Accessories", path: "#" },
            { id: 5, name: "Gardening Tools", path: "#" },
            { id: 6, name: "Home Decor", path: "#" },
            { id: 7, name: "Patio & Outdoor Furniture", path: "#" },
            { id: 8, name: "Grills & Outdoor Cooking", path: "#" },
            { id: 9, name: "Lighting", path: "#" },
            { id: 10, name: "DIY Tools", path: "#" },
          ],
        },
        {
          id: 4,
          name: "Mobiles",
          item_list: [
            { id: 1, name: "Smartphones", path: "#" },
            { id: 2, name: "Tablets", path: "#" },
            { id: 3, name: "Accessories", path: "#" },
            { id: 4, name: "Wearables", path: "#" },
            { id: 5, name: "Refurbished Phones", path: "#" },
            { id: 6, name: "Mobile Chargers", path: "#" },
            { id: 7, name: "Phone Cases", path: "#" },
            { id: 8, name: "Screen Protectors", path: "#" },
            { id: 9, name: "Power Banks", path: "#" },
            { id: 10, name: "Mobile Accessories", path: "#" },
          ],
        },
        {
          id: 5,
          name: "Community",
          item_list: [
            { id: 1, name: "Events", path: "#" },
            { id: 2, name: "Groups", path: "#" },
            { id: 3, name: "Volunteer Opportunities", path: "#" },
            { id: 4, name: "Local Services", path: "#" },
            { id: 5, name: "Lost & Found", path: "#" },
            { id: 6, name: "Community Centers", path: "#" },
            { id: 7, name: "Neighborhood Watch", path: "#" },
            { id: 8, name: "Community Gardens", path: "#" },
            { id: 9, name: "Community Events", path: "#" },
            { id: 10, name: "Public Libraries", path: "#" },
          ],
        },
      ],
    },
    {
      id: 5,
      menu: "Furniture & Garden",
      sub: [
        {
          id: 1,
          name: "Home accessories",
          item_list: [
            { id: 1, name: "Bath accessories", path: "#" },
            { id: 2, name: "Kitchen & Dining", path: "#" },
            { id: 3, name: "Home Decor", path: "#" },
            { id: 4, name: "Candles & Fragrances", path: "#" },
            { id: 5, name: "Artificial Plants & Flowers", path: "#" },
            { id: 6, name: "Mirrors", path: "#" },
            { id: 7, name: "Vases & Bowls", path: "#" },
            { id: 8, name: "Curtains & Blinds", path: "#" },
            { id: 9, name: "Clocks", path: "#" },
            { id: 10, name: "Wall Decor", path: "#" },
          ],
        },
        {
          id: 2,
          name: "Garden Furniture",
          item_list: [
            { id: 1, name: "Outdoor Dining Sets", path: "#" },
            { id: 2, name: "Patio Chairs", path: "#" },
            { id: 3, name: "Garden Benches", path: "#" },
            { id: 4, name: "Outdoor Sofas & Loveseats", path: "#" },
            { id: 5, name: "Sun Loungers & Daybeds", path: "#" },
            { id: 6, name: "Garden Tables", path: "#" },
            { id: 7, name: "Outdoor Bar Sets", path: "#" },
            { id: 8, name: "Garden Swings", path: "#" },
            { id: 9, name: "Hammocks", path: "#" },
            { id: 10, name: "Gazebos & Pergolas", path: "#" },
          ],
        },
        {
          id: 3,
          name: "Outdoor Decor",
          item_list: [
            { id: 1, name: "Outdoor Rugs", path: "#" },
            { id: 2, name: "Outdoor Cushions & Pillows", path: "#" },
            { id: 3, name: "Outdoor Lighting", path: "#" },
            { id: 4, name: "Outdoor Clocks & Thermometers", path: "#" },
            { id: 5, name: "Outdoor Wall Art", path: "#" },
            { id: 6, name: "Wind Chimes & Spinners", path: "#" },
            { id: 7, name: "Fire Pits & Patio Heaters", path: "#" },
            { id: 8, name: "Outdoor Fountains", path: "#" },
            { id: 9, name: "Bird Baths & Feeders", path: "#" },
            { id: 10, name: "Statues & Sculptures", path: "#" },
          ],
        },
        {
          id: 4,
          name: "Gardening Tools",
          item_list: [
            { id: 1, name: "Shovels & Spades", path: "#" },
            { id: 2, name: "Pruners & Loppers", path: "#" },
            { id: 3, name: "Garden Hoes & Cultivators", path: "#" },
            { id: 4, name: "Garden Forks & Hand Trowels", path: "#" },
            { id: 5, name: "Watering Equipment", path: "#" },
            { id: 6, name: "Garden Gloves", path: "#" },
            { id: 7, name: "Garden Tool Sets", path: "#" },
            { id: 8, name: "Wheelbarrows & Carts", path: "#" },
            { id: 9, name: "Pruning Saws & Chainsaws", path: "#" },
            { id: 10, name: "Garden Sprayers & Spreaders", path: "#" },
          ],
        },
        {
          id: 5,
          name: "Patio & Outdoor Furniture",
          item_list: [
            { id: 1, name: "Outdoor Dining Sets", path: "#" },
            { id: 2, name: "Outdoor Sofas & Loveseats", path: "#" },
            { id: 3, name: "Outdoor Sectionals", path: "#" },
            { id: 4, name: "Outdoor Daybeds", path: "#" },
            { id: 5, name: "Outdoor Lounge Chairs", path: "#" },
            { id: 6, name: "Outdoor Coffee Tables", path: "#" },
            { id: 7, name: "Outdoor Ottomans", path: "#" },
            { id: 8, name: "Outdoor Bar Furniture", path: "#" },
            { id: 9, name: "Outdoor Benches", path: "#" },
            { id: 10, name: "Outdoor Hammocks", path: "#" },
          ],
        },
      ],
    },
    {
      id: 6,
      menu: "Mobile & Tablets",
      sub: [
        {
          id: 1,
          name: "Tablets",
          item_list: [
            { id: 1, name: "HP", path: "#" },
            { id: 2, name: "Acer", path: "#" },
            { id: 3, name: "Samsung", path: "#" },
            { id: 4, name: "Apple", path: "#" },
            { id: 5, name: "Lenovo", path: "#" },
            { id: 6, name: "Microsoft", path: "#" },
            { id: 7, name: "Huawei", path: "#" },
            { id: 8, name: "ASUS", path: "#" },
            { id: 9, name: "Google", path: "#" },
            { id: 10, name: "Amazon", path: "#" },
          ],
        },
        {
          id: 2,
          name: "Smartphones",
          item_list: [
            { id: 1, name: "Samsung", path: "#" },
            { id: 2, name: "Apple", path: "#" },
            { id: 3, name: "Huawei", path: "#" },
            { id: 4, name: "Xiaomi", path: "#" },
            { id: 5, name: "OnePlus", path: "#" },
            { id: 6, name: "Google", path: "#" },
            { id: 7, name: "Sony", path: "#" },
            { id: 8, name: "LG", path: "#" },
            { id: 9, name: "Motorola", path: "#" },
            { id: 10, name: "Nokia", path: "#" },
          ],
        },
        {
          id: 3,
          name: "Accessories",
          item_list: [
            { id: 1, name: "Phone Cases", path: "#" },
            { id: 2, name: "Screen Protectors", path: "#" },
            { id: 3, name: "Chargers & Cables", path: "#" },
            { id: 4, name: "Power Banks", path: "#" },
            { id: 5, name: "Headphones", path: "#" },
            { id: 6, name: "Bluetooth Speakers", path: "#" },
            { id: 7, name: "Wireless Chargers", path: "#" },
            { id: 8, name: "Car Mounts", path: "#" },
            { id: 9, name: "Smartphone Camera Lenses", path: "#" },
            { id: 10, name: "PopSockets", path: "#" },
          ],
        },
        {
          id: 4,
          name: "Wearables",
          item_list: [
            { id: 1, name: "Smartwatches", path: "#" },
            { id: 2, name: "Fitness Trackers", path: "#" },
            { id: 3, name: "Smart Glasses", path: "#" },
            { id: 4, name: "Activity Trackers", path: "#" },
            { id: 5, name: "Fitness Watches", path: "#" },
            { id: 6, name: "Smart Bands", path: "#" },
            { id: 7, name: "VR Headsets", path: "#" },
            { id: 8, name: "Sleep Trackers", path: "#" },
            { id: 9, name: "Sports Watches", path: "#" },
            { id: 10, name: "Kids Trackers", path: "#" },
          ],
        },
        {
          id: 5,
          name: "Refurbished Phones",
          item_list: [
            { id: 1, name: "Refurbished iPhone", path: "#" },
            { id: 2, name: "Refurbished Samsung", path: "#" },
            { id: 3, name: "Refurbished Google Pixel", path: "#" },
            { id: 4, name: "Refurbished Huawei", path: "#" },
            { id: 5, name: "Refurbished OnePlus", path: "#" },
            { id: 6, name: "Refurbished Xiaomi", path: "#" },
            { id: 7, name: "Refurbished Motorola", path: "#" },
            { id: 8, name: "Refurbished LG", path: "#" },
            { id: 9, name: "Refurbished Sony", path: "#" },
            { id: 10, name: "Refurbished Nokia", path: "#" },
          ],
        },
      ],
    },
    {
      id: 7,
      menu: "Communits",
      sub: [
        {
          id: 1,
          name: "Autoservices",
          item_list: [
            { id: 1, name: "Health", path: "#" },
            { id: 2, name: "Transportation", path: "#" },
            { id: 3, name: "Education", path: "#" },
            { id: 4, name: "Public Safety", path: "#" },
            { id: 5, name: "Environment", path: "#" },
            { id: 6, name: "Social Services", path: "#" },
            { id: 7, name: "Community Centers", path: "#" },
            { id: 8, name: "Emergency Response", path: "#" },
            { id: 9, name: "Animal Services", path: "#" },
            { id: 10, name: "Youth Services", path: "#" },
          ],
        },
        {
          id: 2,
          name: "Events",
          item_list: [
            { id: 1, name: "Concerts", path: "#" },
            { id: 2, name: "Festivals", path: "#" },
            { id: 3, name: "Sports Events", path: "#" },
            { id: 4, name: "Art Exhibitions", path: "#" },
            { id: 5, name: "Workshops & Seminars", path: "#" },
            { id: 6, name: "Charity Events", path: "#" },
            { id: 7, name: "Community Gatherings", path: "#" },
            { id: 8, name: "Fundraisers", path: "#" },
            { id: 9, name: "Food & Drink Events", path: "#" },
            { id: 10, name: "Cultural Events", path: "#" },
          ],
        },
        {
          id: 3,
          name: "Groups",
          item_list: [
            { id: 1, name: "Local Meetups", path: "#" },
            { id: 2, name: "Hobby Groups", path: "#" },
            { id: 3, name: "Support Groups", path: "#" },
            { id: 4, name: "Professional Networks", path: "#" },
            { id: 5, name: "Parenting Groups", path: "#" },
            { id: 6, name: "Book Clubs", path: "#" },
            { id: 7, name: "Sports Teams", path: "#" },
            { id: 8, name: "Religious Groups", path: "#" },
            { id: 9, name: "Art & Craft Groups", path: "#" },
            { id: 10, name: "Language Exchange", path: "#" },
          ],
        },
        {
          id: 4,
          name: "Volunteer Opportunities",
          item_list: [
            { id: 1, name: "Community Cleanups", path: "#" },
            { id: 2, name: "Soup Kitchens", path: "#" },
            { id: 3, name: "Homeless Shelters", path: "#" },
            { id: 4, name: "Animal Shelters", path: "#" },
            { id: 5, name: "Tutoring Programs", path: "#" },
            { id: 6, name: "Mentorship Programs", path: "#" },
            { id: 7, name: "Environmental Conservation", path: "#" },
            { id: 8, name: "Elderly Care", path: "#" },
            { id: 9, name: "Disaster Relief", path: "#" },
            { id: 10, name: "Youth Programs", path: "#" },
          ],
        },
        {
          id: 5,
          name: "Local Services",
          item_list: [
            { id: 1, name: "Plumbing Services", path: "#" },
            { id: 2, name: "Electrician Services", path: "#" },
            { id: 3, name: "Carpentry Services", path: "#" },
            { id: 4, name: "Cleaning Services", path: "#" },
            { id: 5, name: "Moving Services", path: "#" },
            { id: 6, name: "Handyman Services", path: "#" },
            { id: 7, name: "Painting Services", path: "#" },
            { id: 8, name: "Roofing Services", path: "#" },
            { id: 9, name: "Landscaping Services", path: "#" },
            { id: 10, name: "Pest Control Services", path: "#" },
          ],
        },
      ],
    },
  ]);

  const filter_sub = (menu_name) => {
    setSubs(Menus.filter((menu) => menu.menu === menu_name)[0].sub);
  };

  const filter_item_list = (sub_name) => {
    setItemlist(Subs.filter((menu) => menu.name === sub_name)[0].item_list);
  };

  return (
    <div className="bg-white border-b font-sans">
      <div className={styles.mega_menu}>
        {Menus.map((category) => (
          <div
            className={styles.menu_category}
            key={category.id}
            onMouseOver={() => {
              filter_sub(category.menu);
              setHovered(category.menu);
            }}
          >
            <div className={styles.sub_menu}>
              <p>{category.menu}</p>
              {category.sub.map((item) => (
                <p>
                    
                  <div className={styles.sub_menu_item}>
                    <div key={item.id} className={styles.left}>
                      {Subs.map((item) => (
                        <p
                          key={item.id}
                          onMouseOver={() => {
                            filter_item_list(item.name);
                          }}
                        >
                          {item.name}
                        </p>
                      ))}
                    </div>

                    <div key={item.id} className={styles.right}>
                      {Itemlist.map((item) => (
                        <Link href={item.path} key={item.id}>
                          {item.name}
                        </Link>
                      ))}
                    </div>

                    
                  </div>
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Megamenu;
