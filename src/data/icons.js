const icons = {
  'clear-day': `M71.997,51.999h-3.998c-1.105,0-2-0.895-2-1.999s0.895-2,2-2h3.998
	c1.105,0,2,0.896,2,2S73.103,51.999,71.997,51.999z M64.142,38.688c-0.781,0.781-2.049,0.781-2.828,0
	c-0.781-0.781-0.781-2.047,0-2.828l2.828-2.828c0.779-0.781,2.047-0.781,2.828,0c0.779,0.781,0.779,2.047,0,2.828L64.142,38.688z
	 M50.001,61.998c-6.627,0-12-5.372-12-11.998c0-6.627,5.372-11.999,12-11.999c6.627,0,11.998,5.372,11.998,11.999
	C61.999,56.626,56.628,61.998,50.001,61.998z M50.001,42.001c-4.418,0-8,3.581-8,7.999c0,4.417,3.583,7.999,8,7.999
	s7.998-3.582,7.998-7.999C57.999,45.582,54.419,42.001,50.001,42.001z M50.001,34.002c-1.105,0-2-0.896-2-2v-3.999
	c0-1.104,0.895-2,2-2c1.104,0,2,0.896,2,2v3.999C52.001,33.106,51.104,34.002,50.001,34.002z M35.86,38.688l-2.828-2.828
	c-0.781-0.781-0.781-2.047,0-2.828s2.047-0.781,2.828,0l2.828,2.828c0.781,0.781,0.781,2.047,0,2.828S36.641,39.469,35.86,38.688z
	 M34.002,50c0,1.104-0.896,1.999-2,1.999h-4c-1.104,0-1.999-0.895-1.999-1.999s0.896-2,1.999-2h4C33.107,48,34.002,48.896,34.002,50
	z M35.86,61.312c0.781-0.78,2.047-0.78,2.828,0c0.781,0.781,0.781,2.048,0,2.828l-2.828,2.828c-0.781,0.781-2.047,0.781-2.828,0
	c-0.781-0.78-0.781-2.047,0-2.828L35.86,61.312z M50.001,65.998c1.104,0,2,0.895,2,1.999v4c0,1.104-0.896,2-2,2
	c-1.105,0-2-0.896-2-2v-4C48.001,66.893,48.896,65.998,50.001,65.998z M64.142,61.312l2.828,2.828c0.779,0.781,0.779,2.048,0,2.828
  c-0.781,0.781-2.049,0.781-2.828,0l-2.828-2.828c-0.781-0.78-0.781-2.047,0-2.828C62.093,60.531,63.36,60.531,64.142,61.312z`,

  'clear-night': `M50,61.998c-6.627,0-11.999-5.372-11.999-11.998
	c0-6.627,5.372-11.999,11.999-11.999c0.755,0,1.491,0.078,2.207,0.212c-0.132,0.576-0.208,1.173-0.208,1.788
	c0,4.418,3.582,7.999,8,7.999c0.615,0,1.212-0.076,1.788-0.208c0.133,0.717,0.211,1.452,0.211,2.208
	C61.998,56.626,56.626,61.998,50,61.998z M48.212,42.208c-3.556,0.813-6.211,3.989-6.211,7.792c0,4.417,3.581,7.999,7.999,7.999
  c3.802,0,6.978-2.655,7.791-6.211C52.937,50.884,49.115,47.062,48.212,42.208z`,
  
  rain: 'M 63.943 64.941 v -4.381 c 2.389 -1.383 4 -3.961 4 -6.92 c 0 -4.417 -3.582 -7.999 -8 -7.999 c -1.6 0 -3.082 0.48 -4.333 1.291 c -1.231 -5.317 -5.974 -9.29 -11.665 -9.29 c -6.626 0 -11.998 5.372 -11.998 11.998 c 0 3.55 1.551 6.728 4 8.925 v 4.916 c -4.777 -2.768 -8 -7.922 -8 -13.841 c 0 -8.835 7.163 -15.997 15.998 -15.997 c 6.004 0 11.229 3.311 13.965 8.203 c 0.664 -0.113 1.338 -0.205 2.033 -0.205 c 6.627 0 11.999 5.372 11.999 11.999 C 71.942 58.863 68.601 63.293 63.943 64.941 Z M 41.946 53.641 c 1.104 0 1.999 0.896 1.999 2 v 15.998 c 0 1.105 -0.895 2 -1.999 2 s -2 -0.895 -2 -2 V 55.641 C 39.946 54.537 40.842 53.641 41.946 53.641 Z M 49.945 57.641 c 1.104 0 2 0.895 2 2 v 15.998 c 0 1.104 -0.896 2 -2 2 s -2 -0.896 -2 -2 V 59.641 C 47.945 58.535 48.841 57.641 49.945 57.641 Z M 57.944 53.641 c 1.104 0 1.999 0.896 1.999 2 v 15.998 c 0 1.105 -0.895 2 -1.999 2 s -2 -0.895 -2 -2 V 55.641 C 55.944 54.537 56.84 53.641 57.944 53.641 Z',

  snow: `M61.998,65.461v-4.082c3.448-0.891,6-4.012,6-7.738
	c0-4.417-3.582-7.999-7.999-7.999c-1.601,0-3.084,0.48-4.334,1.291c-1.231-5.317-5.973-9.291-11.664-9.291
	c-6.627,0-11.999,5.373-11.999,12c0,4.438,2.417,8.305,5.999,10.379v4.445c-5.86-2.375-9.998-8.113-9.998-14.825
	c0-8.835,7.162-15.999,15.998-15.999c6.004,0,11.229,3.312,13.965,8.204c0.664-0.113,1.336-0.205,2.033-0.205
	c6.626,0,11.998,5.373,11.998,11.998C71.997,59.586,67.671,64.506,61.998,65.461z M43.072,59.641
	c0.553-0.957,1.775-1.283,2.732-0.732L48,60.176v-2.535c0-1.104,0.896-2,2-2s2,0.896,2,2v2.535l2.195-1.268
	c0.957-0.551,2.18-0.225,2.731,0.732c0.553,0.957,0.225,2.18-0.731,2.732l-2.196,1.268l2.196,1.268
	c0.956,0.553,1.284,1.775,0.731,2.732c-0.552,0.955-1.774,1.283-2.731,0.73L52,67.104v2.535c0,1.105-0.896,2-2,2s-2-0.895-2-2
	v-2.535l-2.195,1.268c-0.957,0.553-2.18,0.225-2.732-0.73c-0.552-0.957-0.225-2.18,0.732-2.732L46,63.641l-2.195-1.268
	C42.848,61.82,42.521,60.598,43.072,59.641z M50,65.641c1.104,0,2-0.896,2-2c0-1.105-0.896-2-2-2s-2,0.895-2,2
  C48,64.744,48.896,65.641,50,65.641z`,
  
  sleet: `M63.943,64.941v-4.381c2.387-1.385,3.998-3.961,3.998-6.92c0-4.418-3.58-8-7.998-8
	c-1.602,0-3.084,0.481-4.334,1.291c-1.232-5.316-5.973-9.29-11.664-9.29c-6.627,0-11.998,5.372-11.998,11.999
	c0,3.549,1.549,6.729,3.998,8.926v4.914c-4.777-2.768-7.998-7.922-7.998-13.84c0-8.836,7.162-15.998,15.998-15.998
	c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.336-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12
	C71.941,58.861,68.6,63.293,63.943,64.941z M41.945,53.641c1.104,0,2,0.895,2,2v3.998c0,1.105-0.896,2-2,2c-1.105,0-2-0.895-2-2
	v-3.998C39.945,54.535,40.84,53.641,41.945,53.641z M41.945,65.639c1.104,0,2,0.895,2,2v3.998c0,1.105-0.896,2-2,2
	c-1.105,0-2-0.895-2-2v-3.998C39.945,66.533,40.84,65.639,41.945,65.639z M49.943,57.639c1.105,0,2,0.896,2,2v4c0,1.104-0.895,2-2,2
	c-1.104,0-1.998-0.896-1.998-2v-4C47.945,58.535,48.84,57.639,49.943,57.639z M49.943,69.639c1.105,0,2,0.895,2,1.998v4
	c0,1.105-0.895,2-2,2c-1.104,0-1.998-0.895-1.998-2v-4C47.945,70.533,48.84,69.639,49.943,69.639z M57.943,53.641
	c1.104,0,2,0.895,2,2v3.998c0,1.105-0.896,2-2,2c-1.105,0-2-0.895-2-2v-3.998C55.943,54.535,56.838,53.641,57.943,53.641z
	 M57.943,65.639c1.104,0,2,0.895,2,2v3.998c0,1.105-0.896,2-2,2c-1.105,0-2-0.895-2-2v-3.998
  C55.943,66.533,56.838,65.639,57.943,65.639z`,
  
  wind: `M65.999,52L65.999,52h-3c-1.105,0-2-0.895-2-1.999s0.895-2,2-2h3
	c1.104,0,2-0.896,2-1.999c0-1.105-0.896-2-2-2c-1.105,0-2-0.896-2-2s0.895-2,2-2c0.137,0,0.271,0.014,0.402,0.041
	c3.121,0.211,5.596,2.783,5.596,5.959C71.997,49.314,69.312,52,65.999,52z M55.999,48.001h-2h-6.998H34.002
	c-1.104,0-1.999,0.896-1.999,2S32.898,52,34.002,52h2h3.999h3h4h3h3.998h2c3.314,0,6,2.687,6,6c0,3.176-2.475,5.748-5.596,5.959
	C56.272,63.986,56.138,64,55.999,64c-1.104,0-2-0.896-2-2c0-1.105,0.896-2,2-2c1.105,0,2-0.896,2-2s-0.895-2-2-2h-2h-3.998h-3h-4h-3
	h-3.999h-2c-3.313,0-5.999-2.686-5.999-5.999c0-3.175,2.475-5.747,5.596-5.959c0.131-0.026,0.266-0.04,0.403-0.04l0,0h12.999h6.998
	h2c1.105,0,2-0.896,2-2s-0.895-2-2-2c-1.104,0-2-0.895-2-2c0-1.104,0.896-2,2-2c0.139,0,0.273,0.015,0.404,0.041
  c3.121,0.211,5.596,2.783,5.596,5.959C61.999,45.314,59.313,48.001,55.999,48.001z`,
  
  fog: `M69.998,65.641H30.003c-1.104,0-2-0.896-2-2c0-1.105,0.896-2,2-2h39.995
	c1.104,0,2,0.895,2,2C71.998,64.744,71.103,65.641,69.998,65.641z M69.998,57.641H30.003c-1.104,0-2-0.895-2-2c0-1.104,0.896-2,2-2
	h39.995c1.104,0,2,0.896,2,2C71.998,56.746,71.103,57.641,69.998,57.641z M59.999,45.643c-1.601,0-3.083,0.48-4.333,1.291
	c-1.232-5.317-5.974-9.291-11.665-9.291c-6.626,0-11.998,5.373-11.998,12h-4c0-8.835,7.163-15.999,15.998-15.999
	c6.004,0,11.229,3.312,13.965,8.204c0.664-0.113,1.337-0.205,2.033-0.205c5.222,0,9.652,3.342,11.301,8h-4.381
	C65.535,47.253,62.958,45.643,59.999,45.643z M30.003,69.639h39.995c1.104,0,2,0.896,2,2c0,1.105-0.896,2-2,2H30.003
  c-1.104,0-2-0.895-2-2C28.003,70.535,28.898,69.639,30.003,69.639z`,
  
  cloudy: `M43.945,65.639c-8.835,0-15.998-7.162-15.998-15.998
	c0-8.836,7.163-15.998,15.998-15.998c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205
	c6.627,0,11.999,5.373,11.999,12c0,6.625-5.372,11.998-11.999,11.998C57.168,65.639,47.143,65.639,43.945,65.639z M59.943,61.639
	c4.418,0,8-3.582,8-7.998c0-4.418-3.582-8-8-8c-1.6,0-3.082,0.481-4.333,1.291c-1.231-5.316-5.974-9.29-11.665-9.29
  c-6.626,0-11.998,5.372-11.998,11.999c0,6.626,5.372,11.998,11.998,11.998C47.562,61.639,56.924,61.639,59.943,61.639z`,
  
  'partly-cloudy-day': `M79.941,43.641h-4c-1.104,0-2-0.895-2-2c0-1.104,0.896-1.998,2-1.998h4
	c1.104,0,2,0.895,2,1.998C81.941,42.746,81.045,43.641,79.941,43.641z M72.084,30.329c-0.781,0.781-2.047,0.781-2.828,0
	c-0.781-0.78-0.781-2.047,0-2.827l2.828-2.828c0.781-0.781,2.047-0.781,2.828,0c0.781,0.78,0.781,2.047,0,2.828L72.084,30.329z
	 M69.137,45.936L69.137,45.936c1.749,2.086,2.806,4.77,2.806,7.705c0,6.625-5.372,11.998-11.999,11.998c-2.775,0-12.801,0-15.998,0
	c-8.835,0-15.998-7.162-15.998-15.998s7.163-15.998,15.998-15.998c1.572,0,3.09,0.232,4.523,0.654
	c2.195-2.827,5.618-4.654,9.475-4.654c6.627,0,11.999,5.373,11.999,11.998C69.942,43.156,69.649,44.602,69.137,45.936z
	 M31.947,49.641c0,6.627,5.371,11.998,11.998,11.998c3.616,0,12.979,0,15.998,0c4.418,0,7.999-3.582,7.999-7.998
	c0-4.418-3.581-8-7.999-8c-1.6,0-3.083,0.482-4.333,1.291c-1.231-5.316-5.974-9.289-11.665-9.289
	C37.318,37.643,31.947,43.014,31.947,49.641z M57.943,33.643c-2.212,0-4.215,0.898-5.662,2.349c2.34,1.436,4.285,3.453,5.629,5.854
	c0.664-0.113,1.337-0.205,2.033-0.205c2.125,0,4.119,0.559,5.85,1.527l0,0c0.096-0.494,0.15-1.004,0.15-1.527
	C65.943,37.225,62.361,33.643,57.943,33.643z M57.943,25.643c-1.104,0-1.999-0.895-1.999-1.999v-3.999c0-1.105,0.896-2,1.999-2
	c1.105,0,2,0.895,2,2v3.999C59.943,24.749,59.049,25.643,57.943,25.643z M43.803,30.329l-2.827-2.827
	c-0.781-0.781-0.781-2.048,0-2.828c0.78-0.781,2.047-0.781,2.827,0l2.828,2.828c0.781,0.78,0.781,2.047,0,2.827
  C45.851,31.11,44.584,31.11,43.803,30.329z`,
  
  'partly-cloudy-night': `M69.763,46.758L69.763,46.758c1.368,1.949,2.179,4.318,2.179,6.883
	c0,6.625-5.371,11.998-11.998,11.998c-2.775,0-12.801,0-15.998,0c-8.836,0-15.998-7.162-15.998-15.998s7.162-15.998,15.998-15.998
	c2.002,0,3.914,0.375,5.68,1.047l0,0c1.635-4.682,6.078-8.047,11.318-8.047c0.755,0,1.491,0.078,2.207,0.212
	c-0.131,0.575-0.207,1.173-0.207,1.788c0,4.418,3.581,7.999,7.998,7.999c0.616,0,1.213-0.076,1.789-0.208
	c0.133,0.717,0.211,1.453,0.211,2.208C72.941,41.775,71.73,44.621,69.763,46.758z M31.947,49.641
	c0,6.627,5.371,11.998,11.998,11.998c3.616,0,12.979,0,15.998,0c4.418,0,7.999-3.582,7.999-7.998c0-4.418-3.581-8-7.999-8
	c-1.6,0-3.083,0.482-4.334,1.291c-1.231-5.316-5.973-9.29-11.664-9.29C37.318,37.642,31.947,43.014,31.947,49.641z M51.496,35.545
	c0.001,0,0.002,0,0.002,0S51.497,35.545,51.496,35.545z M59.155,30.85c-2.9,0.664-5.175,2.91-5.925,5.775l0,0
	c1.918,1.372,3.523,3.152,4.68,5.22c0.664-0.113,1.337-0.205,2.033-0.205c2.618,0,5.033,0.85,7.005,2.271l0,0
  c0.858-0.979,1.485-2.168,1.786-3.482C63.881,39.525,60.059,35.706,59.155,30.85z`,
  
  hail: `M63.999,64.941v-4.381c2.389-1.383,3.999-3.961,3.999-6.92
	c0-4.417-3.581-7.999-7.998-7.999c-1.601,0-3.084,0.48-4.334,1.291c-1.231-5.317-5.974-9.29-11.665-9.29
	c-6.626,0-11.998,5.372-11.998,11.998c0,3.55,1.55,6.728,3.999,8.925v4.916c-4.776-2.768-7.998-7.922-7.998-13.841
	c0-8.835,7.162-15.997,15.997-15.997c6.004,0,11.229,3.311,13.966,8.203c0.663-0.113,1.336-0.205,2.033-0.205
	c6.626,0,11.998,5.372,11.998,11.999C71.998,58.863,68.656,63.293,63.999,64.941z M42.002,65.639c-1.104,0-1-0.895-1-1.998v-8
	c0-1.104-0.104-2,1-2s1,0.896,1,2v8C43.002,64.744,43.106,65.639,42.002,65.639z M42.002,69.639c1.104,0,1.999,0.896,1.999,2
	c0,1.105-0.895,2-1.999,2s-2-0.895-2-2C40.002,70.535,40.897,69.639,42.002,69.639z M50.001,69.639c-1.104,0-1-0.895-1-2v-7.998
	c0-1.105-0.104-2,1-2s1,0.895,1,2v7.998C51.001,68.744,51.105,69.639,50.001,69.639z M50.001,73.639c1.104,0,1.999,0.895,1.999,2
	c0,1.104-0.895,2-1.999,2s-2-0.896-2-2C48.001,74.533,48.896,73.639,50.001,73.639z M58,65.639c-1.104,0-1-0.895-1-1.998v-8
	c0-1.104-0.104-2,1-2s1,0.896,1,2v8C59,64.744,59.104,65.639,58,65.639z M58,69.639c1.104,0,2,0.896,2,2c0,1.105-0.896,2-2,2
  s-2-0.895-2-2C56,70.535,56.896,69.639,58,69.639z`,
  
  thunderstorm: `M59.999,65.641c-0.28,0-0.649,0-1.062,0l3.585-4.412
	c3.181-1.057,5.477-4.053,5.477-7.588c0-4.418-3.581-7.998-7.999-7.998c-1.601,0-3.083,0.48-4.333,1.29
	c-1.232-5.316-5.974-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,12c0,5.446,3.632,10.038,8.604,11.504l-1.349,3.777
	c-6.52-2.021-11.255-8.098-11.255-15.282c0-8.835,7.163-15.999,15.998-15.999c6.004,0,11.229,3.312,13.965,8.204
	c0.664-0.114,1.337-0.205,2.033-0.205c6.627,0,11.999,5.371,11.999,11.998S66.626,65.641,59.999,65.641z M48.001,51.641h9.998
  l-5.999,10h6.999L46.001,77.639l3.6-11.998h-6.6L48.001,51.641z`,
  
  tornado: `M68.866,36.459H30.871c-1.104,0-2-0.896-2-1.999c0-1.104,0.896-2,2-2h37.995
	c1.104,0,2,0.896,2,2C70.866,35.563,69.971,36.459,68.866,36.459z M32.871,40.459h29.996c1.104,0,2,0.896,2,2
	c0,1.104-0.896,1.999-2,1.999H32.871c-1.104,0-2-0.896-2-1.999C30.871,41.354,31.767,40.459,32.871,40.459z M44.869,48.458h21.998
	c1.104,0,1.999,0.896,1.999,1.999c0,1.104-0.895,2-1.999,2H44.869c-1.104,0-1.999-0.896-1.999-2
	C42.87,49.354,43.765,48.458,44.869,48.458z M46.869,64.456h5.999c1.104,0,2,0.896,2,1.999c0,1.104-0.896,2-2,2h-5.999
	c-1.104,0-2-0.896-2-2C44.869,65.352,45.765,64.456,46.869,64.456z M47.869,58.456c0-1.104,0.896-1.999,2-1.999h13.998
  c1.104,0,2,0.896,2,1.999c0,1.104-0.896,2-2,2H49.869C48.765,60.456,47.869,59.561,47.869,58.456z`,
  
  sunrise: `M38.688,41.859l-2.828-2.828c-0.781-0.78-2.047-0.78-2.828,0
  c-0.781,0.781-0.781,2.047,0,2.828l2.828,2.828c0.781,0.781,2.047,0.781,2.828,0C39.469,43.906,39.469,42.641,38.688,41.859z
   M71.997,54h-3.999c-1.104,0-1.999,0.896-1.999,2s0.895,2,1.999,2h3.999c1.105,0,2-0.896,2-2S73.103,54,71.997,54z M32.003,54h-4
  c-1.104,0-2,0.896-2,2s0.896,2,2,2h4c1.104,0,2-0.896,2-2S33.106,54,32.003,54z M59.999,63.999H40.001
  c-1.104,0-1.999,0.896-1.999,2s0.896,1.999,1.999,1.999h19.998c1.104,0,2-0.895,2-1.999S61.104,63.999,59.999,63.999z
   M66.969,39.031c-0.78-0.78-2.048-0.78-2.828,0l-2.828,2.828c-0.78,0.781-0.78,2.047,0,2.828c0.781,0.781,2.048,0.781,2.828,0
  l2.828-2.828C67.749,41.078,67.749,39.812,66.969,39.031z M50.001,40.002c1.104,0,1.999-0.896,1.999-2v-3.999
  c0-1.104-0.896-2-1.999-2c-1.105,0-2,0.896-2,2v3.999C48.001,39.106,48.896,40.002,50.001,40.002z M50.001,44.002
  c-6.627,0-11.999,5.371-11.999,11.998c0,1.404,0.254,2.747,0.697,3.999h4.381c-0.683-1.177-1.079-2.54-1.079-3.999
  c0-4.418,3.582-7.999,8-7.999c4.417,0,7.998,3.581,7.998,7.999c0,1.459-0.396,2.822-1.078,3.999h4.381
  c0.443-1.252,0.697-2.595,0.697-3.999C61.999,49.373,56.627,44.002,50.001,44.002z M50.001,60.249c0.552,0,0.999-0.447,0.999-1
  v-3.827l2.536,2.535c0.39,0.391,1.023,0.391,1.414,0c0.39-0.391,0.39-1.023,0-1.414l-4.242-4.242
  c-0.391-0.391-1.024-0.391-1.414,0l-4.242,4.242c-0.391,0.391-0.391,1.023,0,1.414s1.023,0.391,1.414,0l2.535-2.535v3.827
  C49.001,59.802,49.448,60.249,50.001,60.249z`,

  sunset: `M71.998,58h-4c-1.104,0-1.999-0.896-1.999-2s0.895-2,1.999-2h4
	c1.104,0,1.999,0.896,1.999,2S73.103,58,71.998,58z M64.142,44.688c-0.781,0.781-2.048,0.781-2.828,0
	c-0.781-0.781-0.781-2.047,0-2.828l2.828-2.828c0.78-0.78,2.047-0.78,2.827,0c0.781,0.781,0.781,2.047,0,2.828L64.142,44.688z
	 M61.302,59.999h-4.381c0.682-1.177,1.078-2.54,1.078-3.999c0-4.418-3.581-7.999-7.998-7.999c-4.418,0-8,3.581-8,7.999
	c0,1.459,0.397,2.822,1.08,3.999h-4.382c-0.443-1.252-0.697-2.595-0.697-3.999c0-6.627,5.372-11.998,11.999-11.998
	c6.626,0,11.998,5.371,11.998,11.998C61.999,57.404,61.745,58.747,61.302,59.999z M50.001,40.002c-1.105,0-2-0.896-2-2v-3.999
	c0-1.104,0.895-2,2-2c1.104,0,2,0.896,2,2v3.999C52.001,39.106,51.104,40.002,50.001,40.002z M35.86,44.688l-2.828-2.828
	c-0.781-0.781-0.781-2.047,0-2.828c0.781-0.78,2.047-0.78,2.828,0l2.828,2.828c0.781,0.781,0.781,2.047,0,2.828
	S36.642,45.469,35.86,44.688z M34.003,56c0,1.104-0.896,2-2,2h-4c-1.104,0-2-0.896-2-2s0.896-2,2-2h4
	C33.107,54,34.003,54.896,34.003,56z M50.001,52c0.552,0,1,0.448,1,1v3.828l2.535-2.535c0.391-0.391,1.023-0.391,1.414,0
	s0.391,1.023,0,1.414l-4.242,4.242c-0.391,0.391-1.023,0.391-1.414,0l-4.242-4.242c-0.391-0.391-0.391-1.023,0-1.414
	s1.023-0.391,1.414,0l2.535,2.535V53C49.001,52.448,49.448,52,50.001,52z M40.002,63.999h19.997c1.104,0,2,0.896,2,2
	s-0.896,1.999-2,1.999H40.002c-1.104,0-2-0.895-2-1.999S38.897,63.999,40.002,63.999z`,

  temp: `M50,67.865c-4.418,0-7.998-3.58-7.998-7.998c0-2.025,0.758-3.869,2-5.279V37.87
	c0-3.313,2.686-5.999,5.998-5.999c3.314,0,6,2.686,6,5.999v16.718c1.24,1.41,2,3.254,2,5.279C58,64.285,54.418,67.865,50,67.865z
	 M52,56.422v-4.293v-10.26V37.87c0-1.104-0.895-2-2-2c-1.104,0-2,0.896-2,2v3.999v10.26v4.293c-1.189,0.693-1.998,1.969-1.998,3.445
	c0,2.209,1.789,3.998,3.998,3.998s4-1.789,4-3.998C54,58.391,53.191,57.115,52,56.422z M50,62.867c-1.656,0-2.998-1.344-2.998-3
	c0-1.305,0.836-2.402,1.998-2.816v-5.184h2v5.184c1.162,0.414,2,1.512,2,2.816C53,61.523,51.656,62.867,50,62.867z`,
}

export default icons