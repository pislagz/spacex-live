  <a href="https://spacex-live.netlify.app">
    <img src="https://raw.githubusercontent.com/pislagz/pislagz/main/assets/spacex-live/animated-logo.svg" alt="Logo">
  </a>
  
# SpaceX Live Info Docs

## Disclaimer

_This project is not affiliated, associated, authorized, endorsed by, or in any way officially connected with Space Exploration Technologies Corp (SpaceX), or any of its subsidiaries or its affiliates. The names SpaceX as well as related names, marks, emblems and images are registered trademarks of their respective owners._

## App URL

<a>https://spacex-live.netlify.app</a>

## Used API

[SpaceX-API](https://github.com/r-spacex/SpaceX-API/)

## Launch dates

- **Why do upcoming launch date formats differ?** – It depends on **API-provided date precision** for specific mission. Sometimes it's uncertain at what time will the launch occur. SpaceX Live Info utilizes the API in a way that the shown date is always as precise as currently possible.

Example ISO 8601 Date:

```
2022-02-04T11:42:18+00:00
```

| Precision | Displayed date   |
| --------- | ---------------- |
| quarter   | 1Q 2022          |
| half      | H1 2022          |
| year      | 2022             |
| month     | Feb 2022         |
| day       | Feb 04, 2022     |
| hour      | Feb 04, 12:42 PM |

- **What timezone does the "Local" option set?** – It sets displayed launch dates for your system timezone. All necessary timezone calculations are handled neatly under the hood by the [Luxon](https://moment.github.io/luxon/#/) library.
  </br>

![image](https://user-images.githubusercontent.com/77860645/145209751-f71ed7c7-b711-4cef-9f6a-269487cd4108.png)

## Routes

### [Dashboard](dashboard) - Info for current launches, facilities and Starlinks on low Earth's orbit

### [Starlink](starlink) - 3D view of each Starlink satellite orbiting the Earth in real-time

### [Rockets](rockets) - Detailed info for SpaceX rockets

### [Launches](launches) - Detailed list of previous and upcoming missions

### [History](history) - SpaceX historical milestones

### [About](about) - Company details

<br/>
<br/>
Each of these routes utilizes API data in some way. All of the query bodies can be easily found in the source code.
