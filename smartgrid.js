const smartgrid = require('smart-grid');

smartgrid('./css/layout', {
    mobileFirst: false,
    columns: 24,
    offset: "20px",
    outputStyle: "scss",
    container: {
        maxWidth: "1200px",
        fields: "10px",
    },
    breakPoints: {
        lg: {
            width: "1199.99px",
            fields: "10px",
        },
        md: {
            width: "991.99px",
            fields: "10px",
        },
        sm: {
            width: "767.99px",
            fields: "10px",
        },
        xs: {
            width: "575.99px",
            fields: "10px",
        }
    },
});