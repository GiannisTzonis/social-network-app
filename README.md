# Install

`npm install`

---

# Things to add

- Create a `.env` file in config folder and add the following as `key = value`
  - PORT = 2121 (can be any port example: 3000)
  - DB_STRING = `your database URI`
  - CLOUD_NAME = `your cloudinary cloud name`
  - API_KEY = `your cloudinary api key`
  - API_SECRET = `your cloudinary api secret`

---

# Run

`npm start`

<div class="cube">
  <div class="left"></div>
  <div class="right"></div>
  <div class="bottom"></div>
  <div class="top"></div>
  <div class="back"></div>
  <div class="front">
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Gr7hcjTcqf6vnQBkv0kfbgHaFj%26pid%3DApi&f=1&ipt=1e20ea3cf021094de023b4c221a82c325db77dbc5ae321d79758dae8b00165bb&ipo=images"
  </div>
  <div class="sphere-one inner">a</div>
  <div class="sphere-two inner"></div>
  <div class="sphere-three inner"></div>
  <div class="sphere-four inner"></div>
  <div class="sphere-five inner"></div>
  <div class="sphere-six inner"></div>
</div>

$SIDE: 200px;
$HALF-SIDE: $SIDE/2;
$TWO-SIDE: $SIDE\*1.2;

body {
background: #a9a9a9;
}

.cube {
position: absolute;
margin: 0 auto;
left: 0;
right: 0;
top: 50%;
transform-style: preserve-3d;
transform: rotateX(-1deg) rotateY(-1deg) rotateZ(-1deg);
animation: rotate 4.5s infinite linear;
height: $SIDE;
width: $SIDE;

div {
background: rgba(0,0,0,.3);
height: $SIDE;
position: absolute;
width: $SIDE;
transform-style: preserve-3d;
}

.inner {
background: none;
border: 1px dashed #fff;
border-radius: 100%;
}

.top {
transform: rotateX(90deg) translateZ($TWO-SIDE);
}

.bottom {
transform: rotateX(90deg) translateZ(-$TWO-SIDE);
}

.sphere-one {
transform: rotateX(0) translateZ(0);
}

.sphere-two {
transform: rotateY(-90deg) translateZ(0);
}

.sphere-three {
transform: rotateX(90deg) translateY(0);
}

.sphere-three {
transform: rotateY(45deg) rotateX(45deg) translateY(0);
}

.sphere-five {
transform: rotateY(-45deg) rotateX(-45deg) translateY(0);
}

.sphere-six {
transform: rotateY(-45deg) rotateX(45deg) translateY(0);
}

.left {
transform: rotateY(-90deg) translateZ($TWO-SIDE);
}

.right {
transform: rotateY(-90deg) translateZ(-$TWO-SIDE);
}

.front {
transform: translateZ($TWO-SIDE);
}

.back {
transform: translateZ(-$TWO-SIDE);
}
}

@keyframes rotate {
0% {
transform: rotateX(-1deg) rotateY(-1deg) rotateZ(-1deg);
}

50% {
transform: rotateX(180deg) rotateY(180deg) rotateZ(180deg);
}

100% {
transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
}
}

.front > img {
width: 200px;
height: 200px;
}
