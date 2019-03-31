export const mockProps = {"category": "planets", "planets": [{"Climate": "temperate", "Name": "Alderaan", "Population": "2000000000", "Terrain": "grasslands, mountains"}, {"Climate": "temperate, tropical", "Name": "Yavin IV", "Population": "1000", "Terrain": "jungle, rainforests"}, {"Climate": "frozen", "Name": "Hoth", "Population": "unknown", "Terrain": "tundra, ice caves, mountain ranges"}, {"Climate": "murky", "Name": "Dagobah", "Population": "unknown", "Terrain": "swamp, jungles"}, {"Climate": "temperate", "Name": "Bespin", "Population": "6000000", "Terrain": "gas giant"}, {"Climate": "temperate", "Name": "Endor", "Population": "30000000", "Terrain": "forests, mountains, lakes"}, {"Climate": "temperate", "Name": "Naboo", "Population": "4500000000", "Terrain": "grassy hills, swamps, forests, mountains"}, {"Climate": "temperate", "Name": "Coruscant", "Population": "1000000000000", "Terrain": "cityscape, mountains"}, {"Climate": "temperate", "Name": "Kamino", "Population": "1000000000", "Terrain": "ocean"}, {"Climate": "temperate, arid", "Name": "Geonosis", "Population": "100000000000", "Terrain": "rock, desert, mountain, barren"}]}

export const cleanedPlanets = [{"Climate": "temperate", "Name": "Alderaan", "Population": undefined, "Terrain": undefined}, {"Climate": "temperate, tropical", "Name": "Yavin IV", "Population": undefined, "Terrain": undefined}, {"Climate": "frozen", "Name": "Hoth", "Population": undefined, "Terrain": undefined}, {"Climate": "murky", "Name": "Dagobah", "Population": undefined, "Terrain": undefined}, {"Climate": "temperate", "Name": "Bespin", "Population": undefined, "Terrain": undefined}, {"Climate": "temperate", "Name": "Endor", "Population": undefined, "Terrain": undefined}, {"Climate": "temperate", "Name": "Naboo", "Population": undefined, "Terrain": undefined}, {"Climate": "temperate", "Name": "Coruscant", "Population": undefined, "Terrain": undefined}, {"Climate": "temperate", "Name": "Kamino", "Population": undefined, "Terrain": undefined}, {"Climate": "temperate, arid", "Name": "Geonosis", "Population": undefined, "Terrain": undefined}]


export const preCleanedPlanets = [{name: "Alderaan", rotation_period: "24", orbital_period: "364", diameter: "12500", climate: "temperate"}, {name: "Yavin IV", rotation_period: "24", orbital_period: "4818", diameter: "10200", climate: "temperate, tropical"}, {name: "Hoth", rotation_period: "23", orbital_period: "549", diameter: "7200", climate: "frozen"}, {name: "Dagobah", rotation_period: "23", orbital_period: "341", diameter: "8900", climate: "murky"}, {name: "Bespin", rotation_period: "12", orbital_period: "5110", diameter: "118000", climate: "temperate"}, {name: "Endor", rotation_period: "18", orbital_period: "402", diameter: "4900", climate: "temperate"}, {name: "Naboo", rotation_period: "26", orbital_period: "312", diameter: "12120", climate: "temperate"}, {name: "Coruscant", rotation_period: "24", orbital_period: "368", diameter: "12240", climate: "temperate"}, {name: "Kamino", rotation_period: "27", orbital_period: "463", diameter: "19720", climate: "temperate"}, {name: "Geonosis", rotation_period: "30", orbital_period: "256", diameter: "11370", climate: "temperate, arid"}]

export const cleanedVehicles =  [{"Class": undefined, "Model": "Digger Crawler", "Name": "Sand Crawler", "Passengers": undefined}, {"Class": undefined, "Model": "T-16 skyhopper", "Name": "T-16 skyhopper", "Passengers": undefined}, {"Class": undefined, "Model": "X-34 landspeeder", "Name": "X-34 landspeeder", "Passengers": undefined}, {"Class": undefined, "Model": "Twin Ion Engine/Ln Starfighter", "Name": "TIE/LN starfighter", "Passengers": undefined}, {"Class": undefined, "Model": "t-47 airspeeder", "Name": "Snowspeeder", "Passengers": undefined}, {"Class": undefined, "Model": "TIE/sa bomber", "Name": "TIE bomber", "Passengers": undefined}, {"Class": undefined, "Model": "All Terrain Armored Transport", "Name": "AT-AT", "Passengers": undefined}, {"Class": undefined, "Model": "All Terrain Scout Transport", "Name": "AT-ST", "Passengers": undefined}, {"Class": undefined, "Model": "Storm IV Twin-Pod", "Name": "Storm IV Twin-Pod cloud car", "Passengers": undefined}, {"Class": undefined, "Model": "Modified Luxury Sail Barge", "Name": "Sail barge", "Passengers": undefined}]

export const preCleanedVehicles = [{name: "Sand Crawler", model: "Digger Crawler", manufacturer: "Corellia Mining Corporation", cost_in_credits: "150000", length: "36.8"}, {name: "T-16 skyhopper", model: "T-16 skyhopper", manufacturer: "Incom Corporation", cost_in_credits: "14500", length: "10.4"}, {name: "X-34 landspeeder", model: "X-34 landspeeder", manufacturer: "SoroSuub Corporation", cost_in_credits: "10550", length: "3.4"}, {name: "TIE/LN starfighter", model: "Twin Ion Engine/Ln Starfighter", manufacturer: "Sienar Fleet Systems", cost_in_credits: "unknown", length: "6.4"}, {name: "Snowspeeder", model: "t-47 airspeeder", manufacturer: "Incom corporation", cost_in_credits: "unknown", length: "4.5"}, {name: "TIE bomber", model: "TIE/sa bomber", manufacturer: "Sienar Fleet Systems", cost_in_credits: "unknown", length: "7.8"}, {name: "AT-AT", model: "All Terrain Armored Transport", manufacturer: "Kuat Drive Yards, Imperial Department of Military Research", cost_in_credits: "unknown", length: "20"}, {name: "AT-ST", model: "All Terrain Scout Transport", manufacturer: "Kuat Drive Yards, Imperial Department of Military Research", cost_in_credits: "unknown", length: "2"}, {name: "Storm IV Twin-Pod cloud car", model: "Storm IV Twin-Pod", manufacturer: "Bespin Motors", cost_in_credits: "75000", length: "7"}, {name: "Sail barge", model: "Modified Luxury Sail Barge", manufacturer: "Ubrikkian Industries Custom Vehicle Division", cost_in_credits: "285000", length: "30"}]

export const mockVehicles = [{Name: "Sand Crawler", Model: "Digger Crawler", Class: "wheeled", Passengers: "30"}, {Name: "T-16 skyhopper", Model: "T-16 skyhopper", Class: "repulsorcraft", Passengers: "1"}, {Name: "X-34 landspeeder", Model: "X-34 landspeeder", Class: "repulsorcraft", Passengers: "1"}, {Name: "TIE/LN starfighter", Model: "Twin Ion Engine/Ln Starfighter", Class: "starfighter", Passengers: "0"}, {Name: "Snowspeeder", Model: "t-47 airspeeder", Class: "airspeeder", Passengers: "0"}, {Name: "TIE bomber", Model: "TIE/sa bomber", Class: "space/planetary bomber", Passengers: "0"}, {Name: "AT-AT", Model: "All Terrain Armored Transport", Class: "assault walker", Passengers: "40"}, {Name: "AT-ST", Model: "All Terrain Scout Transport", Class: "walker", Passengers: "0"}, {Name: "Storm IV Twin-Pod cloud car", Model: "Storm IV Twin-Pod", Class: "repulsorcraft", Passengers: "0"}, {Name: "Sail barge", Model: "Modified Luxury Sail Barge", Class: "sail barge", Passengers: "500"}]

export const mockPlanets = [{Name: "Alderaan", Terrain: "grasslands, mountains", Population: "2000000000", Climate: "temperate"}, {Name: "Yavin IV", Terrain: "jungle, rainforests", Population: "1000", Climate: "temperate, tropical"}, {Name: "Hoth", Terrain: "tundra, ice caves, mountain ranges", Population: "unknown", Climate: "frozen"}, {Name: "Dagobah", Terrain: "swamp, jungles", Population: "unknown", Climate: "murky"}, {Name: "Bespin", Terrain: "gas giant", Population: "6000000", Climate: "temperate"}, {Name: "Endor", Terrain: "forests, mountains, lakes", Population: "30000000", Climate: "temperate"}, {Name: "Naboo", Terrain: "grassy hills, swamps, forests, mountains", Population: "4500000000", Climate: "temperate"}, {Name: "Coruscant", Terrain: "cityscape, mountains", Population: "1000000000000", Climate: "temperate"}, {Name: "Kamino", Terrain: "ocean", Population: "1000000000", Climate: "temperate"}, {Name: "Geonosis", Terrain: "rock, desert, mountain, barren", Population: "100000000000", Climate: "temperate, arid"}]

export const mockPeople = [{Name: "Luke Skywalker", Homeworld: "Tatooine", Population: "200000"}, {Name: "C-3PO", Homeworld: "Tatooine", Population: "200000"}, {Name: "R2-D2", Homeworld: "Naboo", Population: "4500000000"}, {Name: "Darth Vader", Homeworld: "Tatooine", Population: "200000"}, {Name: "Leia Organa", Homeworld: "Alderaan", Population: "2000000000"}, {Name: "Owen Lars", Homeworld: "Tatooine", Population: "200000"}, {Name: "Beru Whitesun lars", Homeworld: "Tatooine", Population: "200000"}, {Name: "R5-D4", Homeworld: "Tatooine", Population: "200000"}, {Name: "Biggs Darklighter", Homeworld: "Tatooine", Population: "200000"}, {Name: "Obi-Wan Kenobi", Homeworld: "Stewjon", Population: "unknown"}]

export const mockStateResult = {"category": "", "people": [{"Homeworld": "Tatooine", "Name": "Luke Skywalker", "Population": "200000"}, {"Homeworld": "Tatooine", "Name": "C-3PO", "Population": "200000"}, {"Homeworld": "Naboo", "Name": "R2-D2", "Population": "4500000000"}, {"Homeworld": "Tatooine", "Name": "Darth Vader", "Population": "200000"}, {"Homeworld": "Alderaan", "Name": "Leia Organa", "Population": "2000000000"}, {"Homeworld": "Tatooine", "Name": "Owen Lars", "Population": "200000"}, {"Homeworld": "Tatooine", "Name": "Beru Whitesun lars", "Population": "200000"}, {"Homeworld": "Tatooine", "Name": "R5-D4", "Population": "200000"}, {"Homeworld": "Tatooine", "Name": "Biggs Darklighter", "Population": "200000"}, {"Homeworld": "Stewjon", "Name": "Obi-Wan Kenobi", "Population": "unknown"}], "planets": [{"Climate": "temperate", "Name": "Alderaan", "Population": "2000000000", "Terrain": "grasslands, mountains"}, {"Climate": "temperate, tropical", "Name": "Yavin IV", "Population": "1000", "Terrain": "jungle, rainforests"}, {"Climate": "frozen", "Name": "Hoth", "Population": "unknown", "Terrain": "tundra, ice caves, mountain ranges"}, {"Climate": "murky", "Name": "Dagobah", "Population": "unknown", "Terrain": "swamp, jungles"}, {"Climate": "temperate", "Name": "Bespin", "Population": "6000000", "Terrain": "gas giant"}, {"Climate": "temperate", "Name": "Endor", "Population": "30000000", "Terrain": "forests, mountains, lakes"}, {"Climate": "temperate", "Name": "Naboo", "Population": "4500000000", "Terrain": "grassy hills, swamps, forests, mountains"}, {"Climate": "temperate", "Name": "Coruscant", "Population": "1000000000000", "Terrain": "cityscape, mountains"}, {"Climate": "temperate", "Name": "Kamino", "Population": "1000000000", "Terrain": "ocean"}, {"Climate": "temperate, arid", "Name": "Geonosis", "Population": "100000000000", "Terrain": "rock, desert, mountain, barren"}], "vehicles": [{"Class": "wheeled", "Model": "Digger Crawler", "Name": "Sand Crawler", "Passengers": "30"}, {"Class": "repulsorcraft", "Model": "T-16 skyhopper", "Name": "T-16 skyhopper", "Passengers": "1"}, {"Class": "repulsorcraft", "Model": "X-34 landspeeder", "Name": "X-34 landspeeder", "Passengers": "1"}, {"Class": "starfighter", "Model": "Twin Ion Engine/Ln Starfighter", "Name": "TIE/LN starfighter", "Passengers": "0"}, {"Class": "airspeeder", "Model": "t-47 airspeeder", "Name": "Snowspeeder", "Passengers": "0"}, {"Class": "space/planetary bomber", "Model": "TIE/sa bomber", "Name": "TIE bomber", "Passengers": "0"}, {"Class": "assault walker", "Model": "All Terrain Armored Transport", "Name": "AT-AT", "Passengers": "40"}, {"Class": "walker", "Model": "All Terrain Scout Transport", "Name": "AT-ST", "Passengers": "0"}, {"Class": "repulsorcraft", "Model": "Storm IV Twin-Pod", "Name": "Storm IV Twin-Pod cloud car", "Passengers": "0"}, {"Class": "sail barge", "Model": "Modified Luxury Sail Barge", "Name": "Sail barge", "Passengers": "500"}]};