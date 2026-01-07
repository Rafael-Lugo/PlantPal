const Light_Icon = {
    "Full Sun": "/icons/light/full_sun.svg",
    "Partial Shade": "/icons/light/partial_shade.svg",
    "Full Shade": "/icons/light/full_shade.svg",
};

const Water_Icon = {
    "Low": "/icons/water/low.svg",
    "Medium": "/icons/water/medium.svg",
    "High": "/icons/water/high.svg",
};

export function getLightIconSrc(lightNeed) {
    return Light_Icon[lightNeed] ?? null;
}

export function getWaterIconSrc(waterNeed) {
    return Water_Icon[waterNeed] ?? null;
}