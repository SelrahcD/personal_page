const fs = require(`fs`);

module.exports = {
  eleventyComputed: {
    preview_image: data => {
        if(data.preview_image) {
            return data.page.url + data.preview_image;
        }
    }
  }
};