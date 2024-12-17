tailwind.config = {
    theme: {
        extend: {
            // Customizing breakpoints for responsive design
            screens: {
                'xs': '475px',       // Extra small devices
                'sm': '640px',       // Small devices (default Tailwind)
                'md': '768px',       // Medium devices (default Tailwind)
                'lg': '1024px',      // Large devices (default Tailwind)
                'xl': '1280px',      // Extra large devices (default Tailwind)
                '2xl': '1536px',     // Extra extra large devices (default Tailwind)
                '3xl': '1920px',     // Custom breakpoint for very large screens
            },
            colors: {
                primary: '#3490dc',      // Custom primary color
                secondary: '#ffed4a',    // Custom secondary color
                accent: '#38c172',       // Custom accent color
            },
            fontWeight: {
                medium: 500,            // Custom font weight as per preference
            },
            spacing: {
                '128': '32rem',         // Custom spacing
                '144': '36rem',
            },
            borderRadius: {
                'xl': '1.25rem',        // Custom border radius
            },
        },
    },
}