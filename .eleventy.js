const htmlmin = require("html-minifier");
const MarkdownIt = require("markdown-it");
const mdRender = new MarkdownIt();

module.exports = function (eleventyConfig) {
    eleventyConfig.setUseGitIgnore(false);

    eleventyConfig.addWatchTarget("./_tmp/style.css");

    eleventyConfig.addPassthroughCopy({ "./_tmp/style.css": "./style.css" });

    eleventyConfig.addPassthroughCopy({ "./images/*": "./images/" });
    eleventyConfig.addPassthroughCopy({ "./fonts/*": "./fonts/" });

    eleventyConfig.addPassthroughCopy({
        "./node_modules/alpinejs/dist/alpine.js": "./js/alpine.js",
    });

    eleventyConfig.addShortcode("version", function () {
        return String(Date.now());
    });

    eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
        if (
            process.env.ELEVENTY_PRODUCTION &&
            outputPath &&
            outputPath.endsWith(".html")
        ) {
            return htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true,
            });
        }

        return content;
    });

    eleventyConfig.addFilter("renderUsingMarkdown", function(content) {
        return mdRender.render(content);
    });
};