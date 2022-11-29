module.exports = {
    environment: process.env.ELEVENTY_ENV || 'dev',
    url: process.env.ELEVENTY_ENV === 'dev' ? 'http://localhost:8080' : 'https://www.charlesdesneuf.com'
};