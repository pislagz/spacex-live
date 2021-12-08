<div id="top"></div>

<!-- PROJECT SHIELDS -->

[![MIT License][license-shield]][license-url]
[![Contributors][contributors-shield]][contributors-url]
[![Issues][issues-shield]][issues-url]
[![React][react-shield]][react-url]
[![Redux][redux-shield]][redux-url]
[![SpaceX][spacex-shield]][spacex-url]

<!-- [![Three.js-shield][threejs-shield]][threejs-url] -->
<!-- [![Forks][forks-shield]][forks-url] -->
<!-- [![Stargazers][stars-shield]][stars-url] -->
<!-- [![LinkedIn][linkedin-shield]][linkedin-url] -->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://spacex-live.netlify.app">
    <img src="docs/animated-logo.svg" alt="Logo">
  </a>

  <h3 align="center">SpaceX Live Info</h3>

  <p align="center">
    App tailored for all of the space and tech enthusiasts out there!
    <br />
    <br />
    <a href="docs"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://spacex-live.netlify.app">Open the app</a>
    ·
    <a href="https://github.com/pislagz/spacex-live/issues">Report Bug</a>
    ·
    <a href="https://github.com/pislagz/spacex-live/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#dashboard-usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

![](https://github.com/pislagz/pislagz/blob/main/assets/spacex-live/animation.webp)

SpaceX Live Info is a place to look for upcoming and previous SpaceX missions and mission insights.

Some of the key features:

- Quickly check out next and previous launches, weather conditions in launch facilities and active Starlink satellites count.
- Watch Starlink satellites move around in real time over a 3D Earth model.
- Browse mission records including payloads, crews, boosters, lauchpads etc.
- Get to know with each SpaceX rocket specification.

SpaceX Live Info is a project touching areas close to my heart. I'm deeply in love with all space-related stuff, especially rocketry itself. To be honest, I reckon that these topics are mind-blowing not only for me but for everyone. This very fact made doing the project even more fun.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [React.js](https://reactjs.org/)
- [Redux.js](https://redux.js.org/)
- [styled-components](https://styled-components.com/)
- [styled-system](https://styled-system.com)
- [SpaceX-API](https://github.com/r-spacex/SpaceX-API/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Dashboard Usage

When you open the app for the first time, you'll be greeted by the curated Dashboard view. There will be quite a few information getting into your eyes in the very moment, but don't feel overwhelmed, it's <s>not</s> rocket science.

![image](https://user-images.githubusercontent.com/77860645/145186107-6b3df8d8-bab9-4998-bb81-f887df6f5084.png)

Dashbord supplies you with basic visual info about next and previous launch, weather in all the launch facilities and Starlink program progress (active satellites count).
Let's focus on a few eye-catching features, to make you feel more comfy.

<ol>
  <li><b>Available routes</b><br/>Piece of cake, you can handle that. 🍰</li>
  <li><b>Settings tweaker</b><br/>Use it to tweak windspeed and temperature units which are used primarly in the <b>Launch facilities</b> widget and some more places across the app. You can also change the timezone for launches to your local time, as UTC is set to default. ⚙️</li>
  <li><b>See more button</b></br>Dive into mission details, lovely. ✨</li>
  <li><b>Mission Patch</b><br/>Depending on availability this window contains either a mission patch, or a rocket logo, if a patch isn't yet available. 🚀</li>
</ol>

_For more usage manuals, please refer to the <a href="docs">Documentation</a>_

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/pislagz/spacex-live.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the dev server
   ```sh
   npm start
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create.<br />
You are **greatly appreciated** to contribute!

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` file for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Pawel Pisulski - [/pislagz](https://github.com/pislagz) - pislax@yahoo.com

Project Link: [github.com/pislagz/spacex-live](github.com/pislagz/spacex-live)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

This project wouldn't be possible without all these amazing libraries:

- [Framer Motion](https://github.com/pislagz/spacex-live/issues)
- [Luxon](https://moment.github.io/luxon/#/)
- [Axios](https://axios-http.com/docs/intro)
- [Three.js](https://threejs.org)
- [Globe.GL](https://globe.gl)
- [tle.js](https://www.npmjs.com/package/tle)
- [react-tooltip](https://github.com/wwayne/react-tooltip)
- [react-chrono](https://github.com/prabhuignoto/react-chrono)
- [react-device-detect](https://github.com/duskload/react-device-detect)
- [react-collapse](https://github.com/kunukn/react-collapse)
- [react-styled-modal](https://github.com/AlexanderRichey/styled-react-modal)



nor without my mentor:

- [Ernest Rudziec](https://github.com/ernestrudziec/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[contributors-shield]: https://img.shields.io/github/contributors/pislagz/spacex-live.svg?style=for-the-badge
[contributors-url]: https://github.com/pislagz/spacex-live/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/pislagz/spacex-live.svg?style=for-the-badge
[forks-url]: https://github.com/pislagz/spacex-live/network/members
[stars-shield]: https://img.shields.io/github/stars/pislagz/spacex-live.svg?style=for-the-badge
[stars-url]: https://github.com/pislagz/spacex-live/stargazers
[issues-shield]: https://img.shields.io/github/issues/pislagz/spacex-live.svg?style=for-the-badge
[issues-url]: https://github.com/pislagz/spacex-live/issues
[license-shield]: https://img.shields.io/github/license/pislagz/spacex-live.svg?style=for-the-badge
[license-url]: https://github.com/pislagz/spacex-live/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com
[product-screenshot]: images/screenshot.png
[react-shield]: https://img.shields.io/static/v1?label=&message=React&color=gray&style=for-the-badge&logo=react
[react-url]: https://reactjs.org
[redux-shield]: https://img.shields.io/static/v1?label=&message=Redux&color=9321b5&style=for-the-badge&logo=redux
[redux-url]: https://redux.js.org
[spacex-shield]: https://img.shields.io/static/v1?label=&message=SpaceX&color=3e3c5c&style=for-the-badge&logo=spacex
[spacex-url]: https://www.spacex.com
[threejs-shield]: https://img.shields.io/static/v1?label=&message=three.js&color=2b2b2b&style=for-the-badge&logo=threedotjs
[threejs-url]: https://threejs.org
