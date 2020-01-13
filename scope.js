// practice scope 

const logSkyColor = () => {
    const dusk = NaN;
    let color = 'blue';

    if (dusk) {
        let color = 'pink';
        console.log(color); // pink
    }
    console.log(color); // blue
};

logSkyColor();

// contoh 2
const logVisibleLightWaves = () => {
    let lightWaves = 'Moonlight';
    let region = 'The Arctic';

    if (region === 'The Arctic') {
        let lightWaves = 'Northern Lights';
        console.log(lightWaves);
    }

    console.log(lightWaves);
};

logVisibleLightWaves();