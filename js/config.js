var config = {
    style: 'mapbox://styles/tpmccrea/ck709sezc4b0l1in56noqrq12',
    accessToken: 'pk.eyJ1IjoidHBtY2NyZWEiLCJhIjoiY2s2azA2eHpxMDFwZTNvdDgxaHdlaTJwbiJ9.F4x8uD_KK-UUf4V-eR2vzw',
    showMarkers: false,
    theme: 'light',
    alignment: 'right',
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'DC',
            title: 'US Data Center Locations',
            image: '',
            description: 'Locations of US Data Centers, as well as Coal Fired Power Plants, and a map of US Counties showing Computer Ownership',
            location: {
                center: [-77.509766, 39.044960],
                zoom: 5,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'US_Data_Centers',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'US_Data_Centers',
                    opacity: 1
                }
            ]
        },
        {
            id: 'Coal Power Plants',
            title: 'Coal Fired Power Plants',
            image: '',
            description: 'Coal fired power plants cause the bulk of energy generation related emissions in the US',
            location: {
                center: [-82.627322, 38.462133],
                zoom: 4,
                pitch: 55.50,
                bearing: -7.20
            },
            onChapterEnter: [
                {
                    layer: 'US_CF_PP',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'indego',
            title: 'Indego Bike Share',
            image: '',
            description: 'Indego has been operating in Philadelphia since 20XX. The system initally was focused on Center City, but has expanded service to neighboring areas to support equitable mobility options to the city\'s residents.',
            location: {
                center: [-75.16468, 39.94503],
                zoom: 13.15,
                pitch: 60.00,
                bearing: -16.80
            },
            onChapterEnter: [
                {
                    layer: 'indego-stations',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'indego-stations',
                    opacity: 0
                }
            ]
        },

    ]
};
