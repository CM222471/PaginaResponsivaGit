tailwind.config = {
darkMode: "class",

theme: {
extend: {

colors: {
"surface-dim":"#051424",
"inverse-on-surface":"#233143",
"on-primary-fixed-variant":"#2f2ebe",
"tertiary-container":"#8691a7",
"inverse-surface":"#d4e4fa",
"surface-container-lowest":"#010f1f",
"secondary":"#bec6e0",
"on-primary":"#1000a9",
"secondary-container":"#3f465c",
"on-secondary":"#283044",
"surface-variant":"#273647",
"on-primary-fixed":"#07006c",
"surface-bright":"#2c3a4c",
"surface":"#051424",
"background":"#051424",
"surface-tint":"#c0c1ff",
"primary-fixed-dim":"#c0c1ff",
"error-container":"#93000a",
"primary-fixed":"#e1e0ff",
"on-primary-container":"#0d0096",
"primary":"#c0c1ff",
"on-background":"#d4e4fa",
"on-tertiary-container":"#1f2a3c",
"tertiary-fixed-dim":"#bcc7de",
"on-surface":"#d4e4fa",
"outline":"#908fa0",
"on-secondary-container":"#adb4ce",
"outline-variant":"#464554",
"on-secondary-fixed":"#131b2e",
"inverse-primary":"#494bd6",
"tertiary":"#bcc7de",
"error":"#ffb4ab",
"on-surface-variant":"#c7c4d7",
"on-tertiary":"#263143",
"surface-container-highest":"#273647",
"surface-container":"#122131",
"on-error-container":"#ffdad6",
"primary-container":"#8083ff",
"surface-container-high":"#1c2b3c",
"on-tertiary-fixed":"#111c2d",
"on-error":"#690005",
"surface-container-low":"#0d1c2d",
"secondary-fixed":"#dae2fd",
"tertiary-fixed":"#d8e3fb"
},

borderRadius: {
DEFAULT:"0.25rem",
lg:"0.5rem",
xl:"0.75rem",
full:"9999px"
},

spacing:{
unit:"8px",
"section-gap":"120px",
"container-max":"1280px",
gutter:"32px",
"margin-mobile":"24px",
"margin-desktop":"64px"
},

fontFamily:{
"headline-lg":["Bricolage Grotesque"],
"label-md":["Inter"],
"body-lg":["Inter"],
"display-lg":["Bricolage Grotesque"],
"display-lg-mobile":["Bricolage Grotesque"],
"headline-md":["Bricolage Grotesque"],
"body-md":["Inter"]
},

fontSize:{
"headline-lg":[
"40px",
{
lineHeight:"48px",
letterSpacing:"-0.02em",
fontWeight:"700"
}
],

"label-md":[
"14px",
{
lineHeight:"20px",
letterSpacing:"0.05em",
fontWeight:"600"
}
],

"body-lg":[
"18px",
{
lineHeight:"28px",
fontWeight:"400"
}
],

"display-lg":[
"72px",
{
lineHeight:"80px",
letterSpacing:"-0.04em",
fontWeight:"800"
}
],

"display-lg-mobile":[
"48px",
{
lineHeight:"56px",
letterSpacing:"-0.02em",
fontWeight:"800"
}
],

"headline-md":[
"32px",
{
lineHeight:"40px",
fontWeight:"600"
}
],

"body-md":[
"16px",
{
lineHeight:"24px",
fontWeight:"400"
}
]

}

}

}
}