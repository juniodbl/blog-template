export default {
    about: () => {
        return fetch("http://localhost:3001/about")
            .then(resp => resp.text())
            .then(text => (async() => (JSON.parse(text)))())
    },
    posts: () => {
        return [{
            image: "https://www.w3schools.com/w3images/woods.jpg",
            imageAlt: "Nature",
            title: "TITLE HEADING",
            description: "Title description",
            date: "April 7, 2014",
            content: "Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
            commentCount: "0"
        }, {
            image: "https://www.w3schools.com/w3images/bridge.jpg",
            imageAlt: "Norway",
            title: "BLOG ENTRY",
            description: "Title description",
            date: "April 2, 2014",
            content: "Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
            commentCount: "2"
        }]
    },
    popularPosts: () => {
        return [{
            image: "https://www.w3schools.com/w3images/workshop.jpg",
            title: "Lorem",
            subTitle: "Sed mattis nunc"
        }, {
            image: "https://www.w3schools.com/w3images/gondol.jpg",
            title: "Ipsum",
            subTitle: "Praes tinci sed"
        }, {
            image: "https://www.w3schools.com/w3images/skies.jpg",
            title: "Dorum",
            subTitle: "Ultricies congue"
        }, {
            image: "https://www.w3schools.com/w3images/rock.jpg",
            title: "Mingsum",
            subTitle: "Lorem ipsum dipsum"
        }]
    },
    tags: () => {
        return [{
            name: 'Travel',
            selected: true
        }, {
            name: 'New York',
            selected: false
        }, {
            name: 'London',
            selected: false
        }, {
            name: 'IKEA',
            selected: false
        }, {
            name: 'NORWAY',
            selected: false
        }, {
            name: 'DIY',
            selected: false
        }, {
            name: 'Ideas',
            selected: false
        }, {
            name: 'Baby',
            selected: false
        }, {
            name: 'Family',
            selected: false
        }, {
            name: 'News',
            selected: false
        }, {
            name: 'Clothing',
            selected: false
        }, {
            name: 'Shopping',
            selected: false
        }, {
            name: 'Sports',
            selected: false
        }, {
            name: 'Games',
            selected: false
        }];
    }
};