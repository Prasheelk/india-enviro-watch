// Static environmental data for India

export const airQualityData = [
  { city: "Delhi", aqi: 312, pm25: 185, pm10: 290, so2: 18, no2: 42, co: 2.1 },
  { city: "Mumbai", aqi: 142, pm25: 68, pm10: 120, so2: 12, no2: 28, co: 1.4 },
  { city: "Bengaluru", aqi: 89, pm25: 35, pm10: 72, so2: 8, no2: 22, co: 0.9 },
  { city: "Chennai", aqi: 105, pm25: 45, pm10: 95, so2: 10, no2: 25, co: 1.1 },
  { city: "Kolkata", aqi: 178, pm25: 92, pm10: 155, so2: 15, no2: 35, co: 1.7 },
  { city: "Hyderabad", aqi: 95, pm25: 40, pm10: 80, so2: 9, no2: 20, co: 1.0 },
  { city: "Lucknow", aqi: 245, pm25: 130, pm10: 210, so2: 16, no2: 38, co: 1.9 },
  { city: "Jaipur", aqi: 165, pm25: 78, pm10: 140, so2: 13, no2: 30, co: 1.5 },
  { city: "Patna", aqi: 280, pm25: 155, pm10: 240, so2: 17, no2: 40, co: 2.0 },
  { city: "Ahmedabad", aqi: 130, pm25: 58, pm10: 110, so2: 11, no2: 26, co: 1.3 },
];

export const temperatureData = [
  { month: "Jan", north: 8, south: 24, east: 16, west: 18, central: 14 },
  { month: "Feb", north: 12, south: 26, east: 19, west: 21, central: 18 },
  { month: "Mar", north: 18, south: 29, east: 24, west: 26, central: 24 },
  { month: "Apr", north: 26, south: 32, east: 29, west: 32, central: 30 },
  { month: "May", north: 34, south: 34, east: 32, west: 36, central: 36 },
  { month: "Jun", north: 36, south: 30, east: 30, west: 34, central: 35 },
  { month: "Jul", north: 32, south: 28, east: 28, west: 30, central: 31 },
  { month: "Aug", north: 30, south: 28, east: 28, west: 29, central: 30 },
  { month: "Sep", north: 28, south: 28, east: 28, west: 30, central: 29 },
  { month: "Oct", north: 22, south: 27, east: 25, west: 28, central: 25 },
  { month: "Nov", north: 14, south: 25, east: 20, west: 23, central: 19 },
  { month: "Dec", north: 9, south: 24, east: 16, west: 19, central: 14 },
];

export const deforestationData = [
  { state: "Madhya Pradesh", forestArea2020: 77414, forestArea2024: 76800, change: -614 },
  { state: "Arunachal Pradesh", forestArea2020: 66688, forestArea2024: 66150, change: -538 },
  { state: "Chhattisgarh", forestArea2020: 55611, forestArea2024: 55320, change: -291 },
  { state: "Maharashtra", forestArea2020: 50778, forestArea2024: 50400, change: -378 },
  { state: "Odisha", forestArea2020: 51619, forestArea2024: 51200, change: -419 },
  { state: "Karnataka", forestArea2020: 38575, forestArea2024: 38300, change: -275 },
  { state: "Kerala", forestArea2020: 21144, forestArea2024: 20850, change: -294 },
  { state: "Assam", forestArea2020: 28312, forestArea2024: 27900, change: -412 },
];

export const glacierData = [
  { year: 2010, gangotri: 100, siachen: 100, zemu: 100, pindari: 100 },
  { year: 2012, gangotri: 98.2, siachen: 99.1, zemu: 98.8, pindari: 97.5 },
  { year: 2014, gangotri: 96.1, siachen: 97.8, zemu: 97.2, pindari: 95.0 },
  { year: 2016, gangotri: 93.8, siachen: 96.2, zemu: 95.5, pindari: 92.1 },
  { year: 2018, gangotri: 91.2, siachen: 94.5, zemu: 93.6, pindari: 89.0 },
  { year: 2020, gangotri: 88.5, siachen: 92.8, zemu: 91.5, pindari: 85.8 },
  { year: 2022, gangotri: 85.6, siachen: 90.9, zemu: 89.2, pindari: 82.3 },
  { year: 2024, gangotri: 82.8, siachen: 88.7, zemu: 86.8, pindari: 78.5 },
];

export const historicalTrends = {
  temperature: [
    { year: 2010, avg: 24.1 }, { year: 2011, avg: 24.3 }, { year: 2012, avg: 24.5 },
    { year: 2013, avg: 24.4 }, { year: 2014, avg: 24.7 }, { year: 2015, avg: 25.0 },
    { year: 2016, avg: 25.3 }, { year: 2017, avg: 25.1 }, { year: 2018, avg: 25.4 },
    { year: 2019, avg: 25.6 }, { year: 2020, avg: 25.2 }, { year: 2021, avg: 25.8 },
    { year: 2022, avg: 26.0 }, { year: 2023, avg: 26.3 }, { year: 2024, avg: 26.5 },
    { year: 2025, avg: 26.7 },
  ],
  forestCover: [
    { year: 2010, area: 692027 }, { year: 2011, area: 690899 }, { year: 2012, area: 689500 },
    { year: 2013, area: 697898 }, { year: 2014, area: 701673 }, { year: 2015, area: 708273 },
    { year: 2016, area: 712249 }, { year: 2017, area: 708273 }, { year: 2018, area: 712249 },
    { year: 2019, area: 713789 }, { year: 2020, area: 714169 }, { year: 2021, area: 713789 },
    { year: 2022, area: 712249 }, { year: 2023, avg: 710500 }, { year: 2024, area: 708800 },
    { year: 2025, area: 707200 },
  ],
  airQuality: [
    { year: 2010, avgAqi: 145 }, { year: 2011, avgAqi: 152 }, { year: 2012, avgAqi: 158 },
    { year: 2013, avgAqi: 165 }, { year: 2014, avgAqi: 172 }, { year: 2015, avgAqi: 180 },
    { year: 2016, avgAqi: 188 }, { year: 2017, avgAqi: 185 }, { year: 2018, avgAqi: 178 },
    { year: 2019, avgAqi: 175 }, { year: 2020, avgAqi: 140 }, { year: 2021, avgAqi: 168 },
    { year: 2022, avgAqi: 172 }, { year: 2023, avgAqi: 170 }, { year: 2024, avgAqi: 168 },
    { year: 2025, avgAqi: 165 },
  ],
  seaLevel: [
    { year: 2010, rise: 0 }, { year: 2011, rise: 3.2 }, { year: 2012, rise: 6.5 },
    { year: 2013, rise: 9.8 }, { year: 2014, rise: 13.1 }, { year: 2015, rise: 16.8 },
    { year: 2016, rise: 20.5 }, { year: 2017, rise: 24.0 }, { year: 2018, rise: 28.2 },
    { year: 2019, rise: 32.5 }, { year: 2020, rise: 36.0 }, { year: 2021, rise: 40.2 },
    { year: 2022, rise: 44.8 }, { year: 2023, rise: 49.5 }, { year: 2024, rise: 54.0 },
    { year: 2025, rise: 58.8 },
  ],
};

export const stateEnvironmentData: Record<string, { name: string; aqi: number; temp: number; forestPercent: number; rainfall: number }> = {
  "DL": { name: "Delhi", aqi: 312, temp: 25.4, forestPercent: 12.0, rainfall: 790 },
  "MH": { name: "Maharashtra", aqi: 130, temp: 27.2, forestPercent: 16.5, rainfall: 1350 },
  "KA": { name: "Karnataka", aqi: 89, temp: 26.8, forestPercent: 20.1, rainfall: 1250 },
  "TN": { name: "Tamil Nadu", aqi: 105, temp: 28.5, forestPercent: 17.4, rainfall: 950 },
  "WB": { name: "West Bengal", aqi: 178, temp: 26.0, forestPercent: 14.2, rainfall: 1650 },
  "RJ": { name: "Rajasthan", aqi: 165, temp: 26.5, forestPercent: 4.7, rainfall: 530 },
  "UP": { name: "Uttar Pradesh", aqi: 245, temp: 25.8, forestPercent: 6.1, rainfall: 990 },
  "MP": { name: "Madhya Pradesh", aqi: 120, temp: 25.6, forestPercent: 25.1, rainfall: 1150 },
  "GJ": { name: "Gujarat", aqi: 130, temp: 27.0, forestPercent: 7.5, rainfall: 820 },
  "BR": { name: "Bihar", aqi: 280, temp: 25.5, forestPercent: 7.7, rainfall: 1200 },
  "AP": { name: "Andhra Pradesh", aqi: 95, temp: 28.0, forestPercent: 17.3, rainfall: 910 },
  "TS": { name: "Telangana", aqi: 95, temp: 27.5, forestPercent: 18.4, rainfall: 950 },
  "KL": { name: "Kerala", aqi: 65, temp: 27.0, forestPercent: 54.4, rainfall: 3050 },
  "AS": { name: "Assam", aqi: 110, temp: 24.5, forestPercent: 35.8, rainfall: 2820 },
  "OR": { name: "Odisha", aqi: 115, temp: 27.0, forestPercent: 33.2, rainfall: 1480 },
  "PB": { name: "Punjab", aqi: 195, temp: 24.0, forestPercent: 3.6, rainfall: 650 },
  "HR": { name: "Haryana", aqi: 210, temp: 25.0, forestPercent: 3.5, rainfall: 570 },
  "CG": { name: "Chhattisgarh", aqi: 100, temp: 26.0, forestPercent: 41.1, rainfall: 1350 },
  "JH": { name: "Jharkhand", aqi: 150, temp: 25.5, forestPercent: 29.6, rainfall: 1300 },
  "UK": { name: "Uttarakhand", aqi: 85, temp: 18.0, forestPercent: 45.4, rainfall: 1550 },
  "HP": { name: "Himachal Pradesh", aqi: 70, temp: 16.0, forestPercent: 27.1, rainfall: 1100 },
  "GA": { name: "Goa", aqi: 55, temp: 27.5, forestPercent: 60.2, rainfall: 2930 },
  "JK": { name: "Jammu & Kashmir", aqi: 60, temp: 14.0, forestPercent: 15.3, rainfall: 680 },
  "AR": { name: "Arunachal Pradesh", aqi: 45, temp: 18.5, forestPercent: 79.6, rainfall: 2780 },
  "MN": { name: "Manipur", aqi: 50, temp: 21.0, forestPercent: 75.5, rainfall: 1550 },
  "ML": { name: "Meghalaya", aqi: 48, temp: 20.0, forestPercent: 76.3, rainfall: 2820 },
  "MZ": { name: "Mizoram", aqi: 42, temp: 21.5, forestPercent: 84.5, rainfall: 2500 },
  "NL": { name: "Nagaland", aqi: 47, temp: 20.5, forestPercent: 75.3, rainfall: 1800 },
  "SK": { name: "Sikkim", aqi: 38, temp: 15.0, forestPercent: 47.1, rainfall: 2740 },
  "TR": { name: "Tripura", aqi: 55, temp: 24.5, forestPercent: 73.7, rainfall: 2100 },
};

export const quickStats = {
  avgAqi: 156,
  avgTemp: 26.5,
  forestCoverChange: -0.8,
  glacierMeltIndex: 14.2,
};

export const satellitePrograms = [
  {
    name: "Bhuvan",
    org: "ISRO / NRSC",
    description: "India's geoportal providing visualization of Indian Remote Sensing data, thematic maps, and geospatial services for environmental monitoring.",
    url: "https://bhuvan.nrsc.gov.in",
    capabilities: ["Land use mapping", "Forest cover monitoring", "Urban sprawl tracking", "Disaster management support"],
  },
  {
    name: "MOSDAC",
    org: "Space Applications Centre, ISRO",
    description: "Meteorological & Oceanographic Satellite Data Archival Centre providing weather, ocean, and atmospheric data from Indian satellites.",
    url: "https://mosdac.gov.in",
    capabilities: ["Weather forecasting", "Cyclone tracking", "Ocean state monitoring", "Atmospheric composition analysis"],
  },
  {
    name: "NRSC Data Centre",
    org: "National Remote Sensing Centre",
    description: "Acquires, processes, and disseminates remote sensing data from Indian and foreign satellites for resource survey and environmental monitoring.",
    url: "https://www.nrsc.gov.in",
    capabilities: ["Satellite data acquisition", "Aerial survey data", "Cartographic products", "Value-added geological data"],
  },
  {
    name: "VEDAS",
    org: "Space Applications Centre, ISRO",
    description: "Visualization of Earth observation Data and Archival System for online analysis of satellite data over the Indian subcontinent.",
    url: "https://vedas.sac.gov.in",
    capabilities: ["Vegetation monitoring", "Snow/glacier monitoring", "Ocean color monitoring", "Air quality monitoring"],
  },
  {
    name: "India WRIS",
    org: "ISRO / Ministry of Jal Shakti",
    description: "Water Resources Information System of India providing comprehensive water resources data using satellite-based observations.",
    url: "https://indiawris.gov.in",
    capabilities: ["River basin monitoring", "Reservoir monitoring", "Groundwater assessment", "Flood forecasting"],
  },
];
