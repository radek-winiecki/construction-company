const msnry = new Macy({
    container: '.masonry_gallery',
    mobileFirst: true,
    columns: 1,
    breakAt: {
        400: 2,
        700: 2,
        1100: 3,
    },
    margin: {
        x: 10,
        y: 10,
    }
});