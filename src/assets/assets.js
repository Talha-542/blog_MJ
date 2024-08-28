import article_count_logo from './article_count_logo.png';
import aurthur_logo from './aurthur_logo.png';
import filter from './filter.png';
import hamburger_menu from './hamburger_menu.png';
import search_icon from './search_icon.png';
import logo from './logo.png';

// Category list assets
import category_1 from './category_1.png';
import category_3 from './category_3.png';
import category_4 from './category_4.png';
// import category_3 from './category_.png'

// Import post images
import post_1 from './post_1.png';
import post_2 from './post_2.png';
import post_3 from './post_3.png';
import post_4 from './post_4.png';
import post_5 from './post_5.png';
import post_6 from './post_6.png';
import post_7 from './post_7.png';
import post_8 from './post_8.png';

export const assets = {
    article_count_logo,
    aurthur_logo,
    filter,
    hamburger_menu,
    search_icon,
    logo,
};

export const category_list = [
    {
        id: 1,
        name: "Tech",
        count: "20 articles",
        image: category_1,
    },
    {
        id: 2,
        name: "Health",
        count: "20 articles",
        image: category_3,
    },
    {
        id: 3,
        name: "Finance",
        count: "20 articles",
        image: category_3,
    },
    {
        id: 4,
        name: "Travel",
        count: "20 articles",
        image: category_4,
    },
    {
        id: 4,
        name: "Lifestyle",
        count: "20 articles",
        image: category_3,
    },
    {
        id: 5,
        name: "Education",
        count: "20 articles",
        image: category_4,
    },
    {
        id: 6,
        name: "Food",
        count: "20 articles",
        image: category_3,
    },
    {
        id: 7,
        name: "Entertainment",
        count: "20 articles",
        image: category_1,
    },
];

export const posts = [
    {
        id: 1,
        postTitle: "How Tomorrow's Innovations Will Change the World",
        description: "As the world becomes increasingly dependent on tech ...",
        post_image: post_1,
        autherName: "Michael Johnstone",
        auther_logo: aurthur_logo,
        postDate: "August 27, 2024",
        category: "Tech",
    },
    {
        id: 2,
        postTitle: "The significance of technological advancements",
        description: "In the fast-paced world we live in, technology plays a critical role ...",
        post_image: post_2,
        autherName: "Michael Johnstone",
        auther_logo: aurthur_logo,
        postDate: "August 27, 2024",
        category: "Health",
    },
    {
        id: 3,
        postTitle: "The impact of automation and artificial intelligence",
        description: "Automation and artificial intelligence (AI) are two trans ...",
        post_image: post_4,
        autherName: "Michael Johnstone",
        auther_logo: aurthur_logo,
        postDate: "August 27, 2024",
        category: "Finance",
    },
    {
        id: 4,
        postTitle: "Emerging trends shaping the future of tech",
        description: "In the fast-paced world The future of technology is always evolving, driven by emerging ...",
        post_image: post_3,
        autherName: "Michael Johnstone",
        auther_logo: aurthur_logo,
        postDate: "August 27, 2024",
        category: "Tech",
    },
    {
        id: 5,
        postTitle: "Top Travel Destinations for 2024",
        description: "Explore the best travel spots for 2024 and beyond ...",
        post_image: post_5,
        autherName: "Michael Johnstone",
        auther_logo: aurthur_logo,
        postDate: "August 27, 2024",
        category: "Travel",
    },
    {
        id: 6,
        postTitle: "The Impact of Lifestyle Changes on Mental Health",
        description: "Lifestyle changes can greatly influence mental well-being ...",
        post_image: post_6,
        autherName: "Michael Johnstone",
        auther_logo: aurthur_logo,
        postDate: "August 27, 2024",
        category: "Lifestyle",
    },
    {
        id: 7,
        postTitle: "How to Manage Your Finances in Uncertain Times",
        description: "Financial management tips during economic uncertainty ...",
        post_image: post_7,
        autherName: "Michael Johnstone",
        auther_logo: aurthur_logo,
        postDate: "August 27, 2024",
        category: "Finance",
    },
    {
        id: 8,
        postTitle: "The Role of Education in Future Workforce Development",
        description: "Education is key to preparing for future job markets ...",
        post_image: post_8,
        autherName: "Michael Johnstone",
        auther_logo: aurthur_logo,
        postDate: "August 27, 2024",
        category: "Education",
    },
];
