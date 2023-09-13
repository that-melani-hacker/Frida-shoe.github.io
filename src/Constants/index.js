import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '4k+', label: 'Brands' },
    { value: '700+', label: 'Shops' },
    { value: '500k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Frida Serene Strides ",
        price: "$200.20",
    },
    {
        imgURL: shoe5,
        name: "Frida Coastal Chic",
        price: "$150.20",
    },
    {
        imgURL: shoe6,
        name: "Frida Classic charm",
        price: "$120.20",
    },
    {
        imgURL: shoe7,
        name: "Frida Radiant Reverie",
        price: "$110.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Get Ready to Shop with Confidence: Free Shipping On Us!",
        subtext: "With our Free Shipping offer, you can now shop to your heart's content, knowing that the price you see is the price you pay."
    },
    {
        imgURL: shieldTick,
        label: "Your Peace of Mind, Our Top Priority: Secure Payment",
        subtext: "Shop with confidence, knowing that your security is our top priority. Join the countless satisfied customers who have chosen [Your Company Name] for secure and worry-free online shopping."
    },
    {
        imgURL: support,
        label: "Our Commitment: Love to Help",
        subtext: "Explore the Love to Help section to learn more about our customer-centric approach, and please don't hesitate to reach out if there's anything we can do to enhance your experience. Your satisfaction is our priority, and we're here to help, always."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Moyo Lawani',
        rating: 4.8,
        feedback: "The 'Special Offer' section is a hidden gem on this website. I scored a pair of beautiful sneakers at an unbelievable price. I appreciate how they keep updating the offers. Thanks, Frida, for making high-quality shoes affordable!"
    },
    {
        imgURL: customer2,
        customerName: 'Gabriel Montez',
        rating: 4.7,
        feedback: "The 'Customer Reviews' section was really helpful when I was choosing a pair of shoes for a special event. It's great to see what other customers have to say. I ended up with a fantastic pair that got me tons of compliments!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Frida Serene Strides", link: "/" },
            { name: "Frida Coastal Chic", link: "/" },
            { name: "Frida Classic Charm", link: "/" },
            { name: "Frida Radiant Reverie", link: "/" },
            { name: "Frida Waffle Racer", link: "/" },
            { name: "Frida Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@Frida.com", link: "mailto:customer@nike.com" },
            { name: "+7063785623", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];