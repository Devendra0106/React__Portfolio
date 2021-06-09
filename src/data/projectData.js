import exploreCamps from '../assets/projects_images/ExploreCamps.png';
import covidTracker from '../assets/projects_images/CovidTracker.png';
import burgerBuilder from '../assets/projects_images/BurgerBuilderApp.png';
import amazonClone from '../assets/projects_images/AmazonClone.PNG';
import netflixClone from '../assets/projects_images/NetflixClone.png';
import movieApp from '../assets/projects_images/MovieApp.png';
import weatherApp from '../assets/projects_images/WeatherApp.PNG';
import pestNDisease from '../assets/projects_images/PestNDisease.png';


const projects_data = [
    {
        name: 'Explore Camps',
        image: exploreCamps,
        deployed_url: 'https://protected-dusk-63517.herokuapp.com/',
        github_url: 'https://github.com/Devendra0106/ExploreCamps',
        category: ['node.js', 'mongoDB', 'responsive', 'html', 'css', 'javascript', 'express.js']
    },

    {
        name: 'Covid-19 Tracker',
        image: covidTracker,
        deployed_url: 'https://covid19-report-6ae83.web.app/',
        github_url: 'https://github.com/Devendra0106/React__Covid-19Tracker',
        category: ['react.js', 'responsive']
    },

    {
        name: 'Burger Builder App',
        image: burgerBuilder,
        deployed_url: 'https://my-burger-1c106.web.app/',
        github_url: 'https://github.com/Devendra0106/React-Redux__BurgerBuilderApp',
        category: ['react.js', 'redux', 'responsive', 'firebase']
    },

    {
        name: 'Amazon Clone',
        image: amazonClone,
        deployed_url: 'https://clone-5d27b.web.app/',
        github_url: 'https://github.com/Devendra0106/React__Amazon-clone',
        category: ['react.js', 'firebase']
    },

    {
        name: 'Netflix Clone',
        image: netflixClone,
        deployed_url: 'https://netflix-clone-42fcb.web.app/',
        github_url: 'https://github.com/Devendra0106/React__Netflix-clone',
        category: ['react.js', 'responsive']
    },

    {
        name: 'Movie Search App',
        image: movieApp,
        deployed_url: 'https://movie-search-app-865db.web.app/',
        github_url: 'https://github.com/Devendra0106/React__MovieSearch-App',
        category: ['react.js', 'responsive']
    },

    {
        name: 'Weather Forecast App',
        image: weatherApp,
        deployed_url: 'https://weather-app-81180.web.app/',
        github_url: 'https://github.com/Devendra0106/React__Weather-App',
        category: ['react.js', 'responsive']
    },

    {
        name: 'Pest and Disease Identification',
        image: pestNDisease,
        deployed_url: '!#',
        github_url: 'https://github.com/Devendra0106/PestAndDiseaseIdentification',
        category: ['Deep Learning']
    }
]

export default projects_data;