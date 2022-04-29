<template>
  <!-- need class for container div to set 100% height 
  (div needed for v-if on chart) 
  -->
      <CCard >
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>

            <vue-echarts :option="option" class="chart"  ref="chart6" />

          <CCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CCardText>
        </CCardBody>
      </CCard>


</template>

<script>

import * as echarts from 'echarts';
import { VueEcharts } from 'vue3-echarts';
import axios from 'axios'


import { ref } from 'vue';

import { CCard,CCardBody,CCardTitle ,CCardText} from '@coreui/vue'
import '../public/css/colors.css'
import '../public/css/positions.css'
import '../public/css/card.css'
import '../public/css/modals.css'
import '../public/css/container.css'


export default {
    name:"Chart6",
    components: {
        VueEcharts, 
        CCard,CCardBody,CCardTitle ,CCardText,
    },
    computed: {
        isMapLoaded: {
            get() {
                console.log("Getting map: ",this.mapLoaded)
                return this.mapLoaded
            }
        }
    },
    data ()  {
        return {
            option : {
                title: {
                text: 'USA Population Estimates (2012)',
                subtext: 'Data from www.census.gov',
                sublink: 'http://www.census.gov/popest/data/datasets.html',
                left: 'right'
                },
                tooltip: {
                trigger: 'item',
                showDelay: 0,
                transitionDuration: 0.2,
                formatter: function (params) {
                    const value = (params.value + '').split('.');
                    const valueStr = value[0].replace(
                    /(\d{1,3})(?=(?:\d{3})+(?!\d))/g,
                    '$1,'
                    );
                    return params.seriesName + '<br/>' + params.name + ': ' + valueStr;
                }
                },
                visualMap: {
                    left: 'left',
                    top:"center",
                    min: 1,
                    max: 1000,
                    inRange: {
                        color: [
                        '#313695',
                        '#4575b4',
                        '#74add1',
                        '#abd9e9',
                        '#e0f3f8',
                        '#ffffbf',
                        '#fee090',
                        '#fdae61',
                        '#f46d43',
                        '#d73027',
                        '#a50026'
                        ]
                    },
                },
                toolbox: {
                    show: false,
                },
                series: [
                {
                    name: 'World map',
                    type: 'map',
                    roam: true,
                    map: 'USA',
                    emphasis: {
                    label: {
                        show: true
                    }
                    },
                    data:
[
    {"name": "Aruba",
        "value": 431
    },
    {"name": "Afghanistan",
        "value": 897
    },
    {"name": "Angola",
        "value": 195
    },
    {"name": "Anguilla",
        "value": 832
    },
    {"name": "Albania",
        "value": 499
    },
    {"name": "Aland",
        "value": 31
    },
    {"name": "Andorra",
        "value": 589
    },
    {"name": "United Arab Emirates",
        "value": 426
    },
    {"name": "Argentina",
        "value": 226
    },
    {"name": "Armenia",
        "value": 555
    },
    {"name": "American Samoa",
        "value": 667
    },
    {"name": "Antarctica",
        "value": 667
    },
    {"name": "Ashmore and Cartier Islands",
        "value": 852
    },
    {"name": "French Southern and Antarctic Lands",
        "value": 739
    },
    {"name": "Antigua and Barbuda",
        "value": 455
    },
    {"name": "Australia",
        "value": 250
    },
    {"name": "Austria",
        "value": 57
    },
    {"name": "Azerbaijan",
        "value": 232
    },
    {"name": "Burundi",
        "value": 226
    },
    {"name": "Belgium",
        "value": 457
    },
    {"name": "Benin",
        "value": 178
    },
    {"name": "Burkina Faso",
        "value": 669
    },
    {"name": "Bangladesh",
        "value": 563
    },
    {"name": "Bulgaria",
        "value": 835
    },
    {"name": "Bahrain",
        "value": 771
    },
    {"name": "The Bahamas",
        "value": 36
    },
    {"name": "Bosnia and Herzegovina",
        "value": 678
    },
    {"name": "Bajo Nuevo Bank (Petrel Is.)",
        "value": 626
    },
    {"name": "Saint Barthelemy",
        "value": 374
    },
    {"name": "Belarus",
        "value": 356
    },
    {"name": "Belize",
        "value": 507
    },
    {"name": "Bermuda",
        "value": 350
    },
    {"name": "Bolivia",
        "value": 728
    },
    {"name": "Brazil",
        "value": 913
    },
    {"name": "Barbados",
        "value": 632
    },
    {"name": "Brunei",
        "value": 414
    },
    {"name": "Bhutan",
        "value": 701
    },
    {"name": "Botswana",
        "value": 482
    },
    {"name": "Central African Republic",
        "value": 597
    },
    {"name": "Canada",
        "value": 456
    },
    {"name": "Switzerland",
        "value": 793
    },
    {"name": "Chile",
        "value": 275
    },
    {"name": "China",
        "value": 183
    },
    {"name": "Ivory Coast",
        "value": 743
    },
    {"name": "Clipperton Island",
        "value": 795
    },
    {"name": "Cameroon",
        "value": 546
    },
    {"name": "Cyprus No Mans Area",
        "value": 208
    },
    {"name": "Democratic Republic of the Congo",
        "value": 943
    },
    {"name": "Republic of Congo",
        "value": 288
    },
    {"name": "Cook Islands",
        "value": 805
    },
    {"name": "Colombia",
        "value": 819
    },
    {"name": "Comoros",
        "value": 660
    },
    {"name": "Cape Verde",
        "value": 57
    },
    {"name": "Costa Rica",
        "value": 384
    },
    {"name": "Coral Sea Islands",
        "value": 661
    },
    {"name": "Cuba",
        "value": 89
    },
    {"name": "Cura\u00e7ao",
        "value": 392
    },
    {"name": "Cayman Islands",
        "value": 855
    },
    {"name": "Northern Cyprus",
        "value": 301
    },
    {"name": "Cyprus",
        "value": 350
    },
    {"name": "Czech Republic",
        "value": 157
    },
    {"name": "Germany",
        "value": 748
    },
    {"name": "Djibouti",
        "value": 977
    },
    {"name": "Dominica",
        "value": 742
    },
    {"name": "Denmark",
        "value": 383
    },
    {"name": "Dominican Republic",
        "value": 970
    },
    {"name": "Algeria",
        "value": 39
    },
    {"name": "Ecuador",
        "value": 75
    },
    {"name": "Egypt",
        "value": 625
    },
    {"name": "Eritrea",
        "value": 130
    },
    {"name": "Dhekelia Sovereign Base Area",
        "value": 897
    },
    {"name": "Spain",
        "value": 967
    },
    {"name": "Estonia",
        "value": 495
    },
    {"name": "Ethiopia",
        "value": 9
    },
    {"name": "Finland",
        "value": 792
    },
    {"name": "Fiji",
        "value": 242
    },
    {"name": "Falkland Islands",
        "value": 295
    },
    {"name": "France",
        "value": 706
    },
    {"name": "Faroe Islands",
        "value": 892
    },
    {"name": "Federated States of Micronesia",
        "value": 282
    },
    {"name": "Gabon",
        "value": 137
    },
    {"name": "United Kingdom",
        "value": 937
    },
    {"name": "Georgia",
        "value": 741
    },
    {"name": "Guernsey",
        "value": 279
    },
    {"name": "Ghana",
        "value": 767
    },
    {"name": "Gibraltar",
        "value": 400
    },
    {"name": "Guinea",
        "value": 439
    },
    {"name": "Gambia",
        "value": 751
    },
    {"name": "Guinea Bissau",
        "value": 104
    },
    {"name": "Equatorial Guinea",
        "value": 667
    },
    {"name": "Greece",
        "value": 628
    },
    {"name": "Grenada",
        "value": 107
    },
    {"name": "Greenland",
        "value": 637
    },
    {"name": "Guatemala",
        "value": 221
    },
    {"name": "Guam",
        "value": 321
    },
    {"name": "Guyana",
        "value": 286
    },
    {"name": "Hong Kong S.A.R.",
        "value": 84
    },
    {"name": "Heard Island and McDonald Islands",
        "value": 377
    },
    {"name": "Honduras",
        "value": 533
    },
    {"name": "Croatia",
        "value": 77
    },
    {"name": "Haiti",
        "value": 867
    },
    {"name": "Hungary",
        "value": 766
    },
    {"name": "Indonesia",
        "value": 40
    },
    {"name": "Isle of Man",
        "value": 421
    },
    {"name": "India",
        "value": 368
    },
    {"name": "Indian Ocean Territories",
        "value": 963
    },
    {"name": "British Indian Ocean Territory",
        "value": 271
    },
    {"name": "Ireland",
        "value": 578
    },
    {"name": "Iran",
        "value": 563
    },
    {"name": "Iraq",
        "value": 890
    },
    {"name": "Iceland",
        "value": 7
    },
    {"name": "Israel",
        "value": 404
    },
    {"name": "Italy",
        "value": 667
    },
    {"name": "Jamaica",
        "value": 10
    },
    {"name": "Jersey",
        "value": 335
    },
    {"name": "Jordan",
        "value": 981
    },
    {"name": "Japan",
        "value": 179
    },
    {"name": "Baykonur Cosmodrome",
        "value": 813
    },
    {"name": "Siachen Glacier",
        "value": 941
    },
    {"name": "Kazakhstan",
        "value": 111
    },
    {"name": "Kenya",
        "value": 176
    },
    {"name": "Kyrgyzstan",
        "value": 412
    },
    {"name": "Cambodia",
        "value": 354
    },
    {"name": "Kiribati",
        "value": 277
    },
    {"name": "Saint Kitts and Nevis",
        "value": 145
    },
    {"name": "South Korea",
        "value": 793
    },
    {"name": "Kosovo",
        "value": 967
    },
    {"name": "Kuwait",
        "value": 365
    },
    {"name": "Laos",
        "value": 336
    },
    {"name": "Lebanon",
        "value": 721
    },
    {"name": "Liberia",
        "value": 946
    },
    {"name": "Libya",
        "value": 201
    },
    {"name": "Saint Lucia",
        "value": 288
    },
    {"name": "Liechtenstein",
        "value": 165
    },
    {"name": "Sri Lanka",
        "value": 345
    },
    {"name": "Lesotho",
        "value": 625
    },
    {"name": "Lithuania",
        "value": 320
    },
    {"name": "Luxembourg",
        "value": 387
    },
    {"name": "Latvia",
        "value": 715
    },
    {"name": "Macao S.A.R",
        "value": 216
    },
    {"name": "Saint Martin",
        "value": 431
    },
    {"name": "Morocco",
        "value": 259
    },
    {"name": "Monaco",
        "value": 26
    },
    {"name": "Moldova",
        "value": 181
    },
    {"name": "Madagascar",
        "value": 719
    },
    {"name": "Maldives",
        "value": 269
    },
    {"name": "Mexico",
        "value": 389
    },
    {"name": "Marshall Islands",
        "value": 569
    },
    {"name": "Macedonia",
        "value": 671
    },
    {"name": "Mali",
        "value": 366
    },
    {"name": "Malta",
        "value": 92
    },
    {"name": "Myanmar",
        "value": 171
    },
    {"name": "Montenegro",
        "value": 578
    },
    {"name": "Mongolia",
        "value": 947
    },
    {"name": "Northern Mariana Islands",
        "value": 453
    },
    {"name": "Mozambique",
        "value": 264
    },
    {"name": "Mauritania",
        "value": 320
    },
    {"name": "Montserrat",
        "value": 346
    },
    {"name": "Mauritius",
        "value": 746
    },
    {"name": "Malawi",
        "value": 791
    },
    {"name": "Malaysia",
        "value": 797
    },
    {"name": "Namibia",
        "value": 54
    },
    {"name": "New Caledonia",
        "value": 390
    },
    {"name": "Niger",
        "value": 374
    },
    {"name": "Norfolk Island",
        "value": 576
    },
    {"name": "Nigeria",
        "value": 839
    },
    {"name": "Nicaragua",
        "value": 634
    },
    {"name": "Niue",
        "value": 540
    },
    {"name": "Netherlands",
        "value": 465
    },
    {"name": "Norway",
        "value": 152
    },
    {"name": "Nepal",
        "value": 526
    },
    {"name": "Nauru",
        "value": 374
    },
    {"name": "New Zealand",
        "value": 341
    },
    {"name": "Oman",
        "value": 458
    },
    {"name": "Pakistan",
        "value": 773
    },
    {"name": "Panama",
        "value": 852
    },
    {"name": "Pitcairn Islands",
        "value": 336
    },
    {"name": "Peru",
        "value": 93
    },
    {"name": "Spratly Islands",
        "value": 523
    },
    {"name": "Philippines",
        "value": 681
    },
    {"name": "Palau",
        "value": 573
    },
    {"name": "Papua New Guinea",
        "value": 90
    },
    {"name": "Poland",
        "value": 788
    },
    {"name": "Puerto Rico",
        "value": 268
    },
    {"name": "North Korea",
        "value": 412
    },
    {"name": "Portugal",
        "value": 757
    },
    {"name": "Paraguay",
        "value": 264
    },
    {"name": "Palestine",
        "value": 155
    },
    {"name": "French Polynesia",
        "value": 246
    },
    {"name": "Qatar",
        "value": 757
    },
    {"name": "Romania",
        "value": 84
    },
    {"name": "Russia",
        "value": 36
    },
    {"name": "Rwanda",
        "value": 877
    },
    {"name": "Western Sahara",
        "value": 378
    },
    {"name": "Saudi Arabia",
        "value": 93
    },
    {"name": "Scarborough Reef",
        "value": 127
    },
    {"name": "Sudan",
        "value": 986
    },
    {"name": "South Sudan",
        "value": 335
    },
    {"name": "Senegal",
        "value": 1
    },
    {"name": "Serranilla Bank",
        "value": 817
    },
    {"name": "Singapore",
        "value": 513
    },
    {"name": "South Georgia and South Sandwich Islands",
        "value": 460
    },
    {"name": "Saint Helena",
        "value": 734
    },
    {"name": "Solomon Islands",
        "value": 104
    },
    {"name": "Sierra Leone",
        "value": 779
    },
    {"name": "El Salvador",
        "value": 708
    },
    {"name": "San Marino",
        "value": 634
    },
    {"name": "Somaliland",
        "value": 950
    },
    {"name": "Somalia",
        "value": 191
    },
    {"name": "Saint Pierre and Miquelon",
        "value": 46
    },
    {"name": "Republic of Serbia",
        "value": 999
    },
    {"name": "Sao Tome and Principe",
        "value": 148
    },
    {"name": "Suriname",
        "value": 169
    },
    {"name": "Slovakia",
        "value": 280
    },
    {"name": "Slovenia",
        "value": 355
    },
    {"name": "Sweden",
        "value": 836
    },
    {"name": "Swaziland",
        "value": 677
    },
    {"name": "Sint Maarten",
        "value": 785
    },
    {"name": "Seychelles",
        "value": 904
    },
    {"name": "Syria",
        "value": 946
    },
    {"name": "Turks and Caicos Islands",
        "value": 823
    },
    {"name": "Chad",
        "value": 774
    },
    {"name": "Togo",
        "value": 13
    },
    {"name": "Thailand",
        "value": 926
    },
    {"name": "Tajikistan",
        "value": 268
    },
    {"name": "Turkmenistan",
        "value": 563
    },
    {"name": "East Timor",
        "value": 603
    },
    {"name": "Tonga",
        "value": 194
    },
    {"name": "Trinidad and Tobago",
        "value": 679
    },
    {"name": "Tunisia",
        "value": 207
    },
    {"name": "Turkey",
        "value": 416
    },
    {"name": "Tuvalu",
        "value": 619
    },
    {"name": "Taiwan",
        "value": 318
    },
    {"name": "United Republic of Tanzania",
        "value": 110
    },
    {"name": "Uganda",
        "value": 753
    },
    {"name": "Ukraine",
        "value": 947
    },
    {"name": "United States Minor Outlying Islands",
        "value": 54
    },
    {"name": "Uruguay",
        "value": 367
    },
    {"name": "United States of America",
        "value": 959
    },
    {"name": "US Naval Base Guantanamo Bay",
        "value": 455
    },
    {"name": "Uzbekistan",
        "value": 393
    },
    {"name": "Vatican",
        "value": 239
    },
    {"name": "Saint Vincent and the Grenadines",
        "value": 883
    },
    {"name": "Venezuela",
        "value": 891
    },
    {"name": "British Virgin Islands",
        "value": 234
    },
    {"name": "United States Virgin Islands",
        "value": 264
    },
    {"name": "Vietnam",
        "value": 254
    },
    {"name": "Vanuatu",
        "value": 48
    },
    {"name": "Wallis and Futuna",
        "value": 62
    },
    {"name": "Akrotiri Sovereign Base Area",
        "value": 160
    },
    {"name": "Samoa",
        "value": 145
    },
    {"name": "Yemen",
        "value": 506
    },
    {"name": "South Africa",
        "value": 958
    },
    {"name": "Zambia",
        "value": 215
    },
    {"name": "Zimbabwe",
        "value": 668
    }
] 
               }
                ]
            }
          }
    },
     async setup() {
        // https://echarts.apache.org/en/option.html#geo.map
        /*
        echarts.registerMap('USA', {geoJSON: map})
        console.log("Registered")
        */
        const mapLoaded = ref(false)
        //console.log("Mounted - Chart6:",chart6)
        //console.log("Mounted - Chart6-v:",chart6.value)
        //axios.get("/data/USA.json").then((r) => {
        const url = "data/countries2.json"
        const r = await axios.get(url)
        const geo = r.data
        console.log(geo) 
        echarts.registerMap('USA', {geoJSON: geo})
        mapLoaded.value = true
        console.log("Loaded",mapLoaded.value)

        return {mapLoaded}
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.map {
    height: 100%;
}

.chart {
    height:400px;
}

@media (max-width: 575.98px) {
.chart {
    height:250px;
    }
}


</style>
