var config = {
    style: 'mapbox://styles/nellienator69/cmtpqltkn002j01qt2umc4epj',
    accessToken: 'pk.eyJ1IjoibmVsbGllbmF0b3I2OSIsImEiOiJjbWt5djZkeWIwZDM5M2xvZWYweHk1N2IwIn0.yJyYKz6Ar1-CJVpbsWKmTg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Strata Malls in Singapore',
    subtitle: 'Endangered Malls of the Singaporean Cityscape',
    byline: 'By Danielle Berboso',
    footer: 'Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-container',
            alignment: 'left',
            hidden: false,
            title: 'Strata Malls in Singapore',
            description: 'Strata Malls in Singapore emerged in the early 1970s to replace the outdoor peddler markets and bazaars. It introduced a new model of ownership where individual shopkeepers owned their spaces. The arrival of the Strata Mall introduced shopping as a leisure activity to a nation still finding its urban identity.<br><br> <img src="images/strata malls .png" style="height:80%;width:100px;"></img> <br> <a href="https://www.channelnewsasia.com/commentary/strata-titled-malls-adaptive-reuse-ageing-property-5942111"> <strong>Read more</strong></a>',
            location: {
                center: [103.83180, 1.30649],
                zoom: 12,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'strata-malls',
                    opacity: 1
                },
                {
                    layer: 'land-use',
                    opacity: 0               
                },
                {
                    layer: 'bus-stops',
                    opacity: 0                
                },
                {
                    layer: 'mrt-exits',
                    opacity: 0
                },
                {
                    layer: 'living-landmarks',
                    opacity: 0
                },
                {
                    layer: 'landmarks',
                    opacity: 0
                }
                
            ],
            onChapterExit: [
                {
                    layer: 'strata-malls',
                    opacity: 1
                },
                {
                    layer: 'land-use',
                    opacity: 0               
                },
                {
                    layer: 'bus-stops',
                    opacity: 0                
                },
                {
                    layer: 'mrt-exits',
                    opacity: 0
                },
                {
                    layer: 'living-landmarks',
                    opacity: 0
                },
                {
                    layer: 'landmarks',
                    opacity: 0
                }
            ]
        },
        {
            id: 'second-container',
            alignment: 'left',
            hidden: false,
            title: 'Accessibility',
            description: 'Strata Malls boast having great connectivity to public transport systems, making them highly accessible to clientele from near and far.<br><br> <img src="images/transporation.png" style="height:50%;width:80px;"></img>',
            location: {
                center: [103.85876, 1.30082],
                zoom: 14.50,
                pitch: 50.35,
                bearing: -28.80
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'strata-malls',
                    opacity: 1
                },
                {
                    layer: 'land-use',
                    opacity: 0              
                },
                {
                    layer: 'bus-stops',
                    opacity: 1                
                },
                {
                    layer: 'mrt-exits',
                    opacity: 1
                },
                {
                    layer: 'living-landmarks',
                    opacity: 0
                },
                {
                    layer: 'landmarks',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'strata-malls',
                    opacity: 1
                },
                {
                    layer: 'land-use',
                    opacity: 0               
                },
                {
                    layer: 'bus-stops',
                    opacity: 1                
                },
                {
                    layer: 'mrt-exits',
                    opacity: 1
                },
                {
                    layer: 'living-landmarks',
                    opacity: 0
                },
                {
                    layer: 'landmarks',
                    opacity: 0
                }
            ],
        },
        {
            id: 'third-container',
            alignment: 'right',
            hidden: false,
            title: 'Who Shops Here',
            description: 'Many Strata Malls are located in downtown Singapore, around other businesses ',
            location: {
                center: [103.85401, 1.29851],
                zoom: 13.48,
                pitch: 45.66,
                bearing: -36.54,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 4, // make the flying slow
                curve: 5, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'strata-malls',
                    opacity: 1
                },
                {
                    layer: 'land-use',
                    opacity: 1               
                },
                {
                    layer: 'bus-stops',
                    opacity: 0                
                },
                {
                    layer: 'mrt-exits',
                    opacity: 0
                },
                {
                    layer: 'living-landmarks',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'strata-malls',
                    opacity: 1
                },
                {
                    layer: 'land-use',
                    opacity: 1               
                },
                {
                    layer: 'bus-stops',
                    opacity: 0                
                },
                {
                    layer: 'mrt-exits',
                    opacity: 0
                },
                {
                    layer: 'living-landmarks',
                    opacity: 0
                },
                {
                    layer: 'landmarks',
                    opacity: 0
                }
            ]
        },
        {
            id: 'fourth-container',
            alignment: 'right',
            hidden: false,
            title: 'Dying Landmarks',
            description: 'However, a handful of Strata Malls have fallen to a demise of the Strata En Bloc Redevelopment Scheme, leading to a demolition of such malls, like Peace Centre. <br><br> <img src="images/peace_centre_0172_crop.jpg" style="height:200%;width:300px;"></img><br><span style="font-style: italic; font-size: 11px;">Peace Centre, before its redevelopment. Photo Credit: JLL</span> <br> <a href="https://www.channelnewsasia.com/business/peace-centre-peace-mansion-sold-650-million-jll-2355426"> <strong>Read more</strong></a>',
            location: {
                center: [103.84946, 1.30123],
                zoom: 17.58,
                pitch: 43.00,
                bearing: -40.00,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 10, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'strata-malls',
                    opacity: 0
                },
                {
                    layer: 'land-use',
                    opacity: 0               
                },
                {
                    layer: 'bus-stops',
                    opacity: 0                
                },
                {
                    layer: 'mrt-exits',
                    opacity: 0
                },
                {
                    layer: 'living-landmarks',
                    opacity: 1
                },
                {
                    layer: 'landmarks',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'strata-malls',
                    opacity: 1
                },
                {
                    layer: 'land-use',
                    opacity: 0               
                },
                {
                    layer: 'bus-stops',
                    opacity: 0                
                },
                {
                    layer: 'mrt-exits',
                    opacity: 0
                },
                {
                    layer: 'living-landmarks',
                    opacity: 1
                },
                {
                    layer: 'landmarks',
                    opacity: 1
                }
            ]
        },
        {
            id: 'fifth-container',
            alignment: 'left',
            hidden: false,
            title: 'Living Landmarks',
            description: 'However, a handful of strata malls, like Queensway Shopping Centre, remain a highly successful mall, and even had a failed En Bloc bid in 2019, after failing to get the different approvals from the storeowners. Today, it remains as the beloved Sporting Goods mall of Singapore. <br><br> <img src="images/DSC06290.JPG" style="height:200%;width:300px;"></img><span style="font-style: italic; font-size: 11px;"> Queensway Shopping Centre Photo taken by Author </span><br><img src="images/DSC06163.JPG" style="height:200%;width:300px;"></img><br><img src="images/DSC06220.JPG" style="height:200%;width:300px;"></img><br><img src="images/DSC06175.JPG" style="height:200%;width:300px;"></img><br><span style="font-style: italic; font-size: 11px;"> Inside Queensway Shopping Centre, Photos taken by Author </span> ',
            location: {
                center: [103.80346, 1.28765],
                zoom: 16.95,
                pitch: 43.69,
                bearing: -18.31,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 10, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'strata-malls',
                    opacity: 0
                },
                {
                    layer: 'land-use',
                    opacity: 0               
                },
                {
                    layer: 'bus-stops',
                    opacity: 0                
                },
                {
                    layer: 'mrt-exits',
                    opacity: 0
                },
                {
                    layer: 'living-landmarks',
                    opacity: 1
                },
                {
                    layer: 'landmarks',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'strata-malls',
                    opacity: 0
                },
                {
                    layer: 'land-use',
                    opacity: 0               
                },
                {
                    layer: 'bus-stops',
                    opacity: 0                
                },
                {
                    layer: 'mrt-exits',
                    opacity: 0
                },
                {
                    layer: 'living-landmarks',
                    opacity: 1
                },
                {
                    layer: 'landmarks',
                    opacity: 1
                }
            ]
        }
    ]
};