const noteMappings = {
  A2: [
    { fret: 0, string: 'A', frequency: 109.29731839890319 },
    { fret: 5, string: 'Low E', frequency: 108.82289874232004 },
  ],
  A3: [
    { fret: 2, string: 'G', frequency: 218.41505353783103 },
    { fret: 7, string: 'D', frequency: 219.36331125231712 },
    { fret: 12, string: 'A', frequency: 218.08466313903585 },
    { fret: 17, string: 'Low E', frequency: 216.15946143420035 },
  ],
  A4: [
    { fret: 5, string: 'High E', frequency: 442.12159464149624 },
    { fret: 10, string: 'B', frequency: 440.19495382570665 },
    { fret: 14, string: 'G', frequency: 439.55032697726375 },
    { fret: 19, string: 'D', frequency: 438.72852520163525 },
  ],
  B2: [
    { fret: 2, string: 'A', frequency: 122.34523180502036 },
    { fret: 7, string: 'Low E', frequency: 121.77339140840631 },
  ],
  B3: [
    { fret: 0, string: 'B', frequency: 245.61046735554012 },
    { fret: 4, string: 'G', frequency: 246.41041179971248 },
    { fret: 9, string: 'D', frequency: 246.83638481464712 },
    { fret: 14, string: 'A', frequency: 245.58414786603186 },
    { fret: 19, string: 'Low E', frequency: 243.79970408499165 },
  ],
  B4: [
    { fret: 7, string: 'High E', frequency: 493.63054537037766 },
    { fret: 12, string: 'B', frequency: 491.74873932396065 },
    { fret: 16, string: 'G', frequency: 492.50921835681856 },
    { fret: 21, string: 'D', frequency: 493.05586222364246 },
  ],
  C3: [
    { fret: 3, string: 'A', frequency: 131.1568087060985 },
    { fret: 8, string: 'Low E', frequency: 129.69916938799216 },
  ],
  C4: [
    { fret: 1, string: 'B', frequency: 262.86311382782856 },
    { fret: 5, string: 'G', frequency: 261.35258994427664 },
    { fret: 10, string: 'D', frequency: 260.826013798937 },
    { fret: 17, string: 'G', frequency: 258.4409214844324 },
    { fret: 20, string: 'Low E', frequency: 258.0232899684571 },
  ],
  C5: [
    { fret: 8, string: 'High E', frequency: 522.3543998301245 },
    { fret: 13, string: 'B', frequency: 520.5119732955417 },
    { fret: 20, string: 'High E', frequency: 519.8088931132332 },
  ],
  D3: [
    { fret: 0, string: 'D', frequency: 144.7792227760196 },
    { fret: 5, string: 'A', frequency: 144.28169007305294 },
    { fret: 10, string: 'Low E', frequency: 145.37975484076748 },
  ],
  D4: [
    { fret: 3, string: 'B', frequency: 293.0052887040495 },
    { fret: 7, string: 'G', frequency: 290.7969580923531 },
    { fret: 12, string: 'D', frequency: 290.3912693154672 },
    { fret: 17, string: 'A', frequency: 288.1441778155962 },
    { fret: 22, string: 'Low E', frequency: 291.216105483294 },
  ],
  D5: [
    { fret: 10, string: 'High E', frequency: 584.9129352573431 },
    { fret: 15, string: 'B', frequency: 582.3735269854725 },
    { fret: 19, string: 'G', frequency: 585.394374111953 },
  ],
  E2: [{ fret: 0, string: 'Low E', frequency: 81.16295716073503 }],
  E3: [
    { fret: 2, string: 'D', frequency: 164.10743500507132 },
    { fret: 7, string: 'A', frequency: 163.26698777551732 },
    { fret: 12, string: 'Low E', frequency: 162.7728749237736 },
  ],
  E4: [
    { fret: 0, string: 'High E', frequency: 329.1075705721399 },
    { fret: 9, string: 'G', frequency: 326.0570366891444 },
    { fret: 14, string: 'D', frequency: 325.88298750333047 },
    { fret: 19, string: 'A', frequency: 325.7414622470455 },
  ],
  E5: [
    { fret: 12, string: 'High E', frequency: 657.2902880621905 },
    { fret: 17, string: 'B', frequency: 656.5691160160274 },
  ],
  F2: [{ fret: 1, string: 'Low E', frequency: 85.81185146938174 }],
  F3: [
    { fret: 3, string: 'D', frequency: 172.97546524964122 },
    { fret: 8, string: 'A', frequency: 172.30021532540152 },
    { fret: 13, string: 'Low E', frequency: 171.71110809613805 },
  ],
  F4: [
    { fret: 1, string: 'High E', frequency: 348.6982451692927 },
    { fret: 6, string: 'B', frequency: 346.6687197772567 },
    { fret: 10, string: 'G', frequency: 347.0596704692706 },
    { fret: 15, string: 'D', frequency: 346.4961248291254 },
    { fret: 20, string: 'A', frequency: 345.8586463505898 },
  ],
  F5: [
    { fret: 13, string: 'High E', frequency: 696.5723178749519 },
    { fret: 18, string: 'B', frequency: 696.9863924686366 },
    { fret: 22, string: 'G', frequency: 698.0024119952526 },
  ],
  G2: [{ fret: 3, string: 'High E', frequency: 97.49112902410535 }],
  G3: [
    { fret: 0, string: 'G', frequency: 195.9196739679139 },
    { fret: 5, string: 'D', frequency: 194.5421507380666 },
    { fret: 10, string: 'A', frequency: 192.35515510071093 },
    { fret: 15, string: 'Low E', frequency: 193.17538893150746 },
  ],
  G4: [
    { fret: 3, string: 'High E', frequency: 391.7012819950789 },
    { fret: 8, string: 'B', frequency: 389.19086552647906 },
    { fret: 12, string: 'G', frequency: 388.8940670802998 },
    { fret: 17, string: 'D', frequency: 390.73125201393236 },
    { fret: 23, string: 'A', frequency: 388.1723952766766 },
  ],
  'G#2': [{ fret: 4, string: 'Low E', frequency: 102.27311570671681 }],
  'G#3': [
    { fret: 1, string: 'G', frequency: 206.63716306554286 },
    { fret: 6, string: 'D', frequency: 205.65056419297755 },
    { fret: 11, string: 'A', frequency: 204.75997999500223 },
    { fret: 16, string: 'Low E', frequency: 204.44316852359728 },
  ],
  'G#4': [
    { fret: 4, string: 'High E', frequency: 414.69849227363454 },
    { fret: 9, string: 'B', frequency: 412.16907273592756 },
    { fret: 13, string: 'G', frequency: 413.1133475481831 },
    { fret: 18, string: 'D', frequency: 409.8044774910727 },
  ],
  'G#5': [
    { fret: 16, string: 'High E', frequency: 829.486425128739 },
    { fret: 21, string: 'B', frequency: 827.9916733204687 },
  ],
  'A#2': [
    { fret: 1, string: 'A', frequency: 115.76045116875001 },
    { fret: 6, string: 'Low E', frequency: 115.17034349208221 },
  ],
  'A#3': [
    { fret: 3, string: 'G', frequency: 232.6725123809698 },
    { fret: 8, string: 'D', frequency: 232.22834420729404 },
    { fret: 13, string: 'A', frequency: 230.85631327082476 },
    { fret: 17, string: 'Low E', frequency: 231.24378127267332 },
  ],
  'A#4': [
    { fret: 6, string: 'High E', frequency: 466.9370136408506 },
    { fret: 15, string: 'G', frequency: 463.57510556396056 },
    { fret: 20, string: 'D', frequency: 465.97676463464103 },
  ],
  'A#5': [
    // Check this one?? Frequencies don't look right
    { fret: 11, string: 'B', frequency: 463.3555869198884 },
    { fret: 18, string: 'G', frequency: 935.0524747725533 },
    // Fret 23 B String (Need 24 String Guitar)
  ],
  'C#3': [
    { fret: 4, string: 'A', frequency: 137.3060035300108 },
    { fret: 9, string: 'Low E', frequency: 137.57611688735184 },
  ],
  'C#4': [
    { fret: 2, string: 'B', frequency: 276.4548279827278 },
    { fret: 6, string: 'G', frequency: 276.3431476551369 },
    { fret: 11, string: 'D', frequency: 277.0804571796065 },
    { fret: 16, string: 'A', frequency: 275.51491141296145 },
    { fret: 21, string: 'Low E', frequency: 274.1799027405144 },
  ],
  'C#5': [
    { fret: 9, string: 'High E', frequency: 554.3378899912931 },
    { fret: 14, string: 'B', frequency: 552.3843511551877 },
    { fret: 18, string: 'G', frequency: 550.6292136626357 },
  ],
  'D#3': [
    { fret: 1, string: 'D', frequency: 155.00598143427626 },
    { fret: 6, string: 'A', frequency: 154.6937274018171 },
    { fret: 11, string: 'Low E', frequency: 154.10326236136592 },
  ],
  'D#4': [
    { fret: 4, string: 'B', frequency: 310.6030421607162 },
    { fret: 8, string: 'G', frequency: 309.71054249383354 },
    { fret: 13, string: 'D', frequency: 311.21308962663016 },
    { fret: 18, string: 'A', frequency: 307.9303528790945 },
  ],
  'D#5': [
    { fret: 11, string: 'High E', frequency: 623.5858489677444 },
    { fret: 16, string: 'B', frequency: 620.1057776434794 },
    { fret: 20, string: 'G', frequency: 616.7783042458899 },
  ],
  'F#2': [{ fret: 2, string: 'Low E', frequency: 92.21923914996015 }],
  'F#3': [
    { fret: 4, string: 'D', frequency: 184.15549965848183 },
    { fret: 9, string: 'A', frequency: 183.37831402967487 },
    { fret: 14, string: 'Low E', frequency: 182.96804710568318 },
  ],
  'F#4': [
    { fret: 2, string: 'High E', frequency: 370.85724983135117 },
    { fret: 7, string: 'B', frequency: 368.0932885008454 },
    { fret: 11, string: 'G', frequency: 367.50167011768934 },
    { fret: 16, string: 'D', frequency: 369.7987106702406 },
    { fret: 21, string: 'A', frequency: 365.01149744523906 },
  ],
  'F#5': [
    { fret: 14, string: 'Low E', frequency: 741.3249897841494 },
    { fret: 19, string: 'B', frequency: 737.4017382139465 },
    //   { fret: 23, string: 'G', frequency: 182.96804710568318 } (need 24)
  ],
};
