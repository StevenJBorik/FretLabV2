const scalePositions = {
  // MAJOR //
  cMajor: {
    position1: {
      eString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 4 },
      ],
      aString: [
        { fret: 7, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 10, finger: 4 },
      ],
      dString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      gString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      bString: [
        { fret: 8, finger: 2 },
        { fret: 10, finger: 4 },
      ],
      eStringHigh: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 4 },
      ],
      aString: [
        { fret: 3, finger: 2 },
        { fret: 5, finger: 4 },
      ],
      dString: [
        { fret: 2, finger: 1 },
        { fret: 3, finger: 2 },
        { fret: 5, finger: 4 },
      ],
      gString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      bString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      eStringHigh: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
      ],
      aString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
      ],
      dString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 4 },
      ],
      gString: [
        { fret: 9, finger: 1 },
        { fret: 10, finger: 2 },
        { fret: 12, finger: 4 },
      ],
      bString: [
        { fret: 10, finger: 1 },
        { fret: 13, finger: 4 },
      ],
      eStringHigh: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
      ],
    },
    position4: {
      eString: [
        { fret: 12, finger: 1 },
        { fret: 15, finger: 4 },
      ],
      aString: [
        { fret: 12, finger: 1 },
        { fret: 15, finger: 4 },
      ],
      dString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      gString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      bString: [
        { fret: 13, finger: 2 },
        { fret: 15, finger: 4 },
      ],
      eStringHigh: [
        { fret: 12, finger: 1 },
        { fret: 15, finger: 4 },
      ],
    },
    position5: {
      // Mirroring position1 for frets 19-22
      eString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 4 },
      ],
      aString: [
        { fret: 19, finger: 1 },
        { fret: 20, finger: 2 },
        { fret: 22, finger: 4 },
      ],
      dString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      gString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      bString: [
        { fret: 20, finger: 2 },
        { fret: 22, finger: 4 },
      ],
      eStringHigh: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 4 },
      ],
    },
    position6: {
      // Mirroring position2 for frets 13-16
      eString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 4 },
      ],
      aString: [
        { fret: 15, finger: 2 },
        { fret: 17, finger: 4 },
      ],
      dString: [
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 17, finger: 4 },
      ],
      gString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      bString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      eStringHigh: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 4 },
      ],
    },
    position7: {
      // Mirroring position3 for frets 13-16, adjusted to start at 13th fret
      eString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 4 },
      ],
      aString: [
        { fret: 15, finger: 2 },
        { fret: 17, finger: 4 },
      ],
      dString: [
        { fret: 14, finger: 1 },
        { fret: 17, finger: 4 },
      ],
      gString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      bString: [
        { fret: 15, finger: 2 },
        { fret: 18, finger: 4 },
      ],
      eStringHigh: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 4 },
      ],
    },
    position8: {
      // Mirroring position4 for frets 13-16, adjusted to start at 13th fret
      eString: [
        { fret: 17, finger: 1 },
        { fret: 20, finger: 4 },
      ],
      aString: [
        { fret: 17, finger: 1 },
        { fret: 20, finger: 4 },
      ],
      dString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      gString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      bString: [
        { fret: 18, finger: 2 },
        { fret: 20, finger: 4 },
      ],
      eStringHigh: [
        { fret: 17, finger: 1 },
        { fret: 20, finger: 4 },
      ],
    },
  },
  cSharpDFlatMajor: {
    position1: {
      eString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 4 },
      ],
      aString: [
        { fret: 8, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 11, finger: 4 },
      ],
      dString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      gString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      bString: [
        { fret: 9, finger: 2 },
        { fret: 11, finger: 4 },
      ],
      eStringHigh: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 4 },
      ],
      aString: [
        { fret: 4, finger: 2 },
        { fret: 6, finger: 4 },
      ],
      dString: [
        { fret: 3, finger: 1 },
        { fret: 4, finger: 2 },
        { fret: 6, finger: 4 },
      ],
      gString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      bString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      eStringHigh: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
      ],
      aString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
      ],
      dString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 4 },
      ],
      gString: [
        { fret: 10, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 13, finger: 4 },
      ],
      bString: [
        { fret: 11, finger: 1 },
        { fret: 14, finger: 4 },
      ],
      eStringHigh: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
      ],
    },
    position4: {
      eString: [
        { fret: 13, finger: 1 },
        { fret: 16, finger: 4 },
      ],
      aString: [
        { fret: 13, finger: 1 },
        { fret: 16, finger: 4 },
      ],
      dString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      gString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      bString: [
        { fret: 14, finger: 2 },
        { fret: 16, finger: 4 },
      ],
      eStringHigh: [
        { fret: 13, finger: 1 },
        { fret: 16, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 4 },
      ],
      aString: [
        { fret: 20, finger: 1 },
        { fret: 21, finger: 2 },
        { fret: 23, finger: 4 },
      ],
      dString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 23, finger: 4 },
      ],
      gString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 23, finger: 4 },
      ],
      bString: [
        { fret: 21, finger: 2 },
        { fret: 23, finger: 4 },
      ],
      eStringHigh: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 4 },
      ],
      aString: [
        { fret: 16, finger: 2 },
        { fret: 18, finger: 4 },
      ],
      dString: [
        { fret: 15, finger: 1 },
        { fret: 16, finger: 2 },
        { fret: 18, finger: 4 },
      ],
      gString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      bString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      eStringHigh: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 4 },
      ],
      aString: [
        { fret: 17, finger: 2 },
        { fret: 19, finger: 4 },
      ],
      dString: [
        { fret: 16, finger: 1 },
        { fret: 19, finger: 4 },
      ],
      gString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      bString: [
        { fret: 17, finger: 2 },
        { fret: 20, finger: 4 },
      ],
      eStringHigh: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 4 },
      ],
    },
    position8: {
      eString: [
        { fret: 19, finger: 1 },
        { fret: 22, finger: 4 },
      ],
      aString: [
        { fret: 19, finger: 1 },
        { fret: 22, finger: 4 },
      ],
      dString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      gString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      bString: [
        { fret: 20, finger: 2 },
        { fret: 22, finger: 4 },
      ],
      eStringHigh: [
        { fret: 19, finger: 1 },
        { fret: 22, finger: 4 },
      ],
    },
  },
  dMajor: {
    position1: {
      eString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 4 },
      ],
      aString: [
        { fret: 9, finger: 1 },
        { fret: 10, finger: 2 },
        { fret: 12, finger: 4 },
      ],
      dString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      gString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      bString: [
        { fret: 10, finger: 2 },
        { fret: 12, finger: 4 },
      ],
      eStringHigh: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 4 },
      ],
      aString: [
        { fret: 5, finger: 2 },
        { fret: 7, finger: 4 },
      ],
      dString: [
        { fret: 4, finger: 1 },
        { fret: 5, finger: 2 },
        { fret: 7, finger: 4 },
      ],
      gString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      bString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      eStringHigh: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
      ],
      aString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
      ],
      dString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 4 },
      ],
      gString: [
        { fret: 11, finger: 1 },
        { fret: 12, finger: 2 },
        { fret: 14, finger: 4 },
      ],
      bString: [
        { fret: 12, finger: 1 },
        { fret: 15, finger: 4 },
      ],
      eStringHigh: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
      ],
    },
    position4: {
      eString: [
        { fret: 14, finger: 1 },
        { fret: 17, finger: 4 },
      ],
      aString: [
        { fret: 14, finger: 1 },
        { fret: 17, finger: 4 },
      ],
      dString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      gString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      bString: [
        { fret: 15, finger: 2 },
        { fret: 17, finger: 4 },
      ],
      eStringHigh: [
        { fret: 14, finger: 1 },
        { fret: 17, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      aString: [
        { fret: 21, finger: 1 },
        { fret: 22, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      dString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      gString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      bString: [
        { fret: 22, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      eStringHigh: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 4 },
      ],
      aString: [
        { fret: 17, finger: 2 },
        { fret: 19, finger: 4 },
      ],
      dString: [
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 19, finger: 4 },
      ],
      gString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      bString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      eStringHigh: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 4 },
      ],
      aString: [
        { fret: 18, finger: 2 },
        { fret: 20, finger: 4 },
      ],
      dString: [
        { fret: 17, finger: 1 },
        { fret: 20, finger: 4 },
      ],
      gString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      bString: [
        { fret: 18, finger: 2 },
        { fret: 21, finger: 4 },
      ],
      eStringHigh: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 4 },
      ],
    },
    position8: {
      eString: [
        { fret: 20, finger: 1 },
        { fret: 23, finger: 4 },
      ],
      aString: [
        { fret: 20, finger: 1 },
        { fret: 23, finger: 4 },
      ],
      dString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 23, finger: 4 },
      ],
      gString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 23, finger: 4 },
      ],
      bString: [
        { fret: 21, finger: 2 },
        { fret: 23, finger: 4 },
      ],
      eStringHigh: [
        { fret: 20, finger: 1 },
        { fret: 23, finger: 4 },
      ],
    },
  },
  dSharpEFlatMajor: {
    position1: {
      eString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 4 },
      ],
      aString: [
        { fret: 10, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 13, finger: 4 },
      ],
      dString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      gString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      bString: [
        { fret: 11, finger: 2 },
        { fret: 13, finger: 4 },
      ],
      eStringHigh: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 4 },
      ],
      aString: [
        { fret: 6, finger: 2 },
        { fret: 8, finger: 4 },
      ],
      dString: [
        { fret: 5, finger: 1 },
        { fret: 6, finger: 2 },
        { fret: 8, finger: 4 },
      ],
      gString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      bString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      eStringHigh: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
      ],
      aString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
      ],
      dString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 4 },
      ],
      gString: [
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
        { fret: 15, finger: 4 },
      ],
      bString: [
        { fret: 13, finger: 1 },
        { fret: 16, finger: 4 },
      ],
      eStringHigh: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
      ],
    },
    position4: {
      eString: [
        { fret: 15, finger: 1 },
        { fret: 18, finger: 4 },
      ],
      aString: [
        { fret: 15, finger: 1 },
        { fret: 18, finger: 4 },
      ],
      dString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      gString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      bString: [
        { fret: 16, finger: 2 },
        { fret: 18, finger: 4 },
      ],
      eStringHigh: [
        { fret: 15, finger: 1 },
        { fret: 18, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 23, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      aString: [
        { fret: 22, finger: 1 },
        { fret: 23, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      dString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      gString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      bString: [
        { fret: 23, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      eStringHigh: [
        { fret: 23, finger: 1 },
        { fret: 24, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 4 },
      ],
      aString: [
        { fret: 18, finger: 2 },
        { fret: 20, finger: 4 },
      ],
      dString: [
        { fret: 17, finger: 1 },
        { fret: 18, finger: 2 },
        { fret: 20, finger: 4 },
      ],
      gString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      bString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      eStringHigh: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 4 },
      ],
      aString: [
        { fret: 19, finger: 2 },
        { fret: 21, finger: 4 },
      ],
      dString: [
        { fret: 18, finger: 1 },
        { fret: 21, finger: 4 },
      ],
      gString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      bString: [
        { fret: 19, finger: 2 },
        { fret: 22, finger: 4 },
      ],
      eStringHigh: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 4 },
      ],
    },
    position8: {
      eString: [
        { fret: 21, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      aString: [
        { fret: 21, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      dString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      gString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      bString: [
        { fret: 22, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      eStringHigh: [
        { fret: 21, finger: 1 },
        { fret: 24, finger: 4 },
      ],
    },
  },
  eMajor: {
    position1: {
      eString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 4 },
      ],
      aString: [
        { fret: 11, finger: 1 },
        { fret: 12, finger: 2 },
        { fret: 14, finger: 4 },
      ],
      dString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      gString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      bString: [
        { fret: 12, finger: 2 },
        { fret: 14, finger: 4 },
      ],
      eStringHigh: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 4 },
      ],
      aString: [
        { fret: 7, finger: 2 },
        { fret: 9, finger: 4 },
      ],
      dString: [
        { fret: 6, finger: 1 },
        { fret: 7, finger: 2 },
        { fret: 9, finger: 4 },
      ],
      gString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      bString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      eStringHigh: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
      ],
      aString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
      ],
      dString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 4 },
      ],
      gString: [
        { fret: 13, finger: 1 },
        { fret: 14, finger: 2 },
        { fret: 16, finger: 4 },
      ],
      bString: [
        { fret: 14, finger: 1 },
        { fret: 17, finger: 4 },
      ],
      eStringHigh: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
      ],
    },
    position4: {
      eString: [
        { fret: 16, finger: 1 },
        { fret: 19, finger: 4 },
      ],
      aString: [
        { fret: 16, finger: 1 },
        { fret: 19, finger: 4 },
      ],
      dString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      gString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      bString: [
        { fret: 17, finger: 2 },
        { fret: 19, finger: 4 },
      ],
      eStringHigh: [
        { fret: 16, finger: 1 },
        { fret: 19, finger: 4 },
      ],
    },
    position5: {
      eString: [{ fret: 24, finger: 1 }],
      aString: [
        { fret: 23, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      dString: [
        { fret: 23, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      gString: [
        { fret: 23, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      bString: [{ fret: 24, finger: 1 }],
      eStringHigh: [{ fret: 24, finger: 1 }],
    },
    position6: {
      eString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 4 },
      ],
      aString: [
        { fret: 19, finger: 2 },
        { fret: 21, finger: 4 },
      ],
      dString: [
        { fret: 18, finger: 1 },
        { fret: 19, finger: 2 },
        { fret: 21, finger: 4 },
      ],
      gString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      bString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      eStringHigh: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 4 },
      ],
      aString: [
        { fret: 20, finger: 2 },
        { fret: 22, finger: 4 },
      ],
      dString: [
        { fret: 19, finger: 1 },
        { fret: 22, finger: 4 },
      ],
      gString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      bString: [
        { fret: 20, finger: 2 },
        { fret: 23, finger: 4 },
      ],
      eStringHigh: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 4 },
      ],
    },
    position8: {
      eString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      aString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      dString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      gString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      bString: [
        { fret: 23, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      eStringHigh: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
    },
  },
  fMajor: {
    position1: {
      eString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 4 },
      ],
      aString: [
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
        { fret: 15, finger: 4 },
      ],
      dString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      gString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      bString: [
        { fret: 13, finger: 2 },
        { fret: 15, finger: 4 },
      ],
      eStringHigh: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 4 },
      ],
      aString: [
        { fret: 8, finger: 2 },
        { fret: 10, finger: 4 },
      ],
      dString: [
        { fret: 7, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 10, finger: 4 },
      ],
      gString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      bString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      eStringHigh: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
      ],
      aString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
      ],
      dString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 4 },
      ],
      gString: [
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 17, finger: 4 },
      ],
      bString: [
        { fret: 15, finger: 1 },
        { fret: 18, finger: 4 },
      ],
      eStringHigh: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
      ],
    },
    position4: {
      eString: [
        { fret: 17, finger: 1 },
        { fret: 20, finger: 4 },
      ],
      aString: [
        { fret: 17, finger: 1 },
        { fret: 20, finger: 4 },
      ],
      dString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      gString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      bString: [
        { fret: 18, finger: 2 },
        { fret: 20, finger: 4 },
      ],
      eStringHigh: [
        { fret: 17, finger: 1 },
        { fret: 20, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 4 },
      ],
      aString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 4 },
      ],
      dString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 4 },
      ],
      gString: [
        { fret: 2, finger: 2 },
        { fret: 3, finger: 4 },
      ],
      bString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 4 },
      ],
      eStringHigh: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 4 },
      ],
      aString: [
        { fret: 20, finger: 2 },
        { fret: 22, finger: 4 },
      ],
      dString: [
        { fret: 19, finger: 1 },
        { fret: 20, finger: 2 },
        { fret: 22, finger: 4 },
      ],
      gString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      bString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      eStringHigh: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 4 },
      ],
      aString: [
        { fret: 21, finger: 2 },
        { fret: 23, finger: 4 },
      ],
      dString: [
        { fret: 20, finger: 1 },
        { fret: 23, finger: 4 },
      ],
      gString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 23, finger: 4 },
      ],
      bString: [
        { fret: 21, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      eStringHigh: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 4 },
      ],
    },
    position8: {
      eString: [
        { fret: 23, finger: 1 },
        { fret: 1, finger: 4 },
      ],
      aString: [
        { fret: 23, finger: 1 },
        { fret: 1, finger: 4 },
      ],
      dString: [
        { fret: 23, finger: 1 },
        { fret: 1, finger: 4 },
      ],
      gString: [
        { fret: 23, finger: 1 },
        { fret: 1, finger: 4 },
      ],
      bString: [
        { fret: 24, finger: 2 },
        { fret: 1, finger: 4 },
      ],
      eStringHigh: [
        { fret: 23, finger: 1 },
        { fret: 1, finger: 4 },
      ],
    },
  },
  fSharpGMajor: {
    position1: {
      eString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 4 },
      ],
      aString: [
        { fret: 13, finger: 1 },
        { fret: 14, finger: 2 },
        { fret: 16, finger: 4 },
      ],
      dString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      gString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      bString: [
        { fret: 14, finger: 2 },
        { fret: 16, finger: 4 },
      ],
      eStringHigh: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 4 },
      ],
      aString: [
        { fret: 9, finger: 2 },
        { fret: 11, finger: 4 },
      ],
      dString: [
        { fret: 8, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 11, finger: 4 },
      ],
      gString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      bString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      eStringHigh: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
      ],
      aString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
      ],
      dString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 4 },
      ],
      gString: [
        { fret: 15, finger: 1 },
        { fret: 16, finger: 2 },
        { fret: 18, finger: 4 },
      ],
      bString: [
        { fret: 16, finger: 1 },
        { fret: 19, finger: 4 },
      ],
      eStringHigh: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
      ],
    },
    position4: {
      eString: [
        { fret: 18, finger: 1 },
        { fret: 21, finger: 4 },
      ],
      aString: [
        { fret: 18, finger: 1 },
        { fret: 21, finger: 4 },
      ],
      dString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      gString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      bString: [
        { fret: 19, finger: 2 },
        { fret: 21, finger: 4 },
      ],
      eStringHigh: [
        { fret: 18, finger: 1 },
        { fret: 21, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 4 },
      ],
      aString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 4 },
      ],
      dString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 4 },
      ],
      gString: [
        { fret: 3, finger: 2 },
        { fret: 4, finger: 4 },
      ],
      bString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 4 },
      ],
      eStringHigh: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 4 },
      ],
      aString: [
        { fret: 21, finger: 2 },
        { fret: 23, finger: 4 },
      ],
      dString: [
        { fret: 20, finger: 1 },
        { fret: 21, finger: 2 },
        { fret: 23, finger: 4 },
      ],
      gString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 23, finger: 4 },
      ],
      bString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 23, finger: 4 },
      ],
      eStringHigh: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      aString: [
        { fret: 22, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      dString: [
        { fret: 21, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      gString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      bString: [
        { fret: 22, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      eStringHigh: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
    },
    position8: {
      eString: [{ fret: 24, finger: 1 }],
      aString: [{ fret: 24, finger: 1 }],
      dString: [{ fret: 24, finger: 1 }],
      gString: [{ fret: 24, finger: 1 }],
      bString: [{ fret: 24, finger: 1 }],
      eStringHigh: [{ fret: 24, finger: 1 }],
    },
  },
  gMajor: {
    position1: {
      eString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 4 },
      ],
      aString: [
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 17, finger: 4 },
      ],
      dString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      gString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      bString: [
        { fret: 15, finger: 2 },
        { fret: 17, finger: 4 },
      ],
      eStringHigh: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 4 },
      ],
      aString: [
        { fret: 10, finger: 2 },
        { fret: 12, finger: 4 },
      ],
      dString: [
        { fret: 9, finger: 1 },
        { fret: 10, finger: 2 },
        { fret: 12, finger: 4 },
      ],
      gString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      bString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      eStringHigh: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
      ],
      aString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
      ],
      dString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 4 },
      ],
      gString: [
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 19, finger: 4 },
      ],
      bString: [
        { fret: 17, finger: 1 },
        { fret: 20, finger: 4 },
      ],
      eStringHigh: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
      ],
    },
    position4: {
      eString: [
        { fret: 19, finger: 1 },
        { fret: 22, finger: 4 },
      ],
      aString: [
        { fret: 19, finger: 1 },
        { fret: 22, finger: 4 },
      ],
      dString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      gString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      bString: [
        { fret: 20, finger: 2 },
        { fret: 22, finger: 4 },
      ],
      eStringHigh: [
        { fret: 19, finger: 1 },
        { fret: 22, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 4 },
      ],
      aString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 4 },
      ],
      dString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 4 },
      ],
      gString: [
        { fret: 4, finger: 2 },
        { fret: 5, finger: 4 },
      ],
      bString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 4 },
      ],
      eStringHigh: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      aString: [
        { fret: 22, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      dString: [
        { fret: 21, finger: 1 },
        { fret: 22, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      gString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      bString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      eStringHigh: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 23, finger: 1 },
        { fret: 1, finger: 4 },
      ],
      aString: [
        { fret: 23, finger: 2 },
        { fret: 1, finger: 4 },
      ],
      dString: [
        { fret: 22, finger: 1 },
        { fret: 1, finger: 4 },
      ],
      gString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 3 },
        { fret: 1, finger: 4 },
      ],
      bString: [
        { fret: 23, finger: 2 },
        { fret: 1, finger: 4 },
      ],
      eStringHigh: [
        { fret: 23, finger: 1 },
        { fret: 1, finger: 4 },
      ],
    },
    position8: {
      eString: [{ fret: 1, finger: 1 }],
      aString: [{ fret: 1, finger: 1 }],
      dString: [{ fret: 1, finger: 1 }],
      gString: [{ fret: 1, finger: 1 }],
      bString: [{ fret: 1, finger: 1 }],
      eStringHigh: [{ fret: 1, finger: 1 }],
    },
  },
  aSharpBFlatMajor: {
    position1: {
      eString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 4 },
      ],
      aString: [
        { fret: 0, finger: 0 },
        { fret: 1, finger: 1 },
        { fret: 3, finger: 4 },
      ],
      dString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 3 },
        { fret: 3, finger: 4 },
      ],
      gString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 3 },
        { fret: 3, finger: 4 },
      ],
      bString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 4 },
      ],
      eStringHigh: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 4 },
      ],
      aString: [
        { fret: 6, finger: 2 },
        { fret: 8, finger: 4 },
      ],
      dString: [
        { fret: 5, finger: 1 },
        { fret: 6, finger: 2 },
        { fret: 8, finger: 4 },
      ],
      gString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      bString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      eStringHigh: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 4 },
      ],
      aString: [
        { fret: 8, finger: 2 },
        { fret: 10, finger: 4 },
      ],
      dString: [
        { fret: 7, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 10, finger: 4 },
      ],
      gString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      bString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      eStringHigh: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 10, finger: 1 },
        { fret: 13, finger: 4 },
      ],
      aString: [
        { fret: 10, finger: 1 },
        { fret: 13, finger: 4 },
      ],
      dString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      gString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      bString: [
        { fret: 11, finger: 2 },
        { fret: 13, finger: 4 },
      ],
      eStringHigh: [
        { fret: 10, finger: 1 },
        { fret: 13, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 4 },
      ],
      aString: [
        { fret: 3, finger: 1 },
        { fret: 6, finger: 4 },
      ],
      dString: [
        { fret: 3, finger: 1 },
        { fret: 6, finger: 4 },
      ],
      gString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      bString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 4 },
      ],
      eStringHigh: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 4 },
      ],
      aString: [
        { fret: 13, finger: 2 },
        { fret: 15, finger: 4 },
      ],
      dString: [
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
        { fret: 15, finger: 4 },
      ],
      gString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      bString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      eStringHigh: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 4 },
      ],
      aString: [
        { fret: 15, finger: 2 },
        { fret: 17, finger: 4 },
      ],
      dString: [
        { fret: 14, finger: 1 },
        { fret: 17, finger: 4 },
      ],
      gString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      bString: [
        { fret: 15, finger: 2 },
        { fret: 18, finger: 4 },
      ],
      eStringHigh: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 4 },
      ],
    },
    position8: {
      eString: [
        { fret: 17, finger: 1 },
        { fret: 20, finger: 4 },
      ],
      aString: [
        { fret: 17, finger: 1 },
        { fret: 20, finger: 4 },
      ],
      dString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      gString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      bString: [
        { fret: 18, finger: 2 },
        { fret: 20, finger: 4 },
      ],
      eStringHigh: [
        { fret: 17, finger: 1 },
        { fret: 20, finger: 4 },
      ],
    },
  },
  bMajor: {
    position1: {
      eString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 4 },
      ],
      aString: [
        { fret: 1, finger: 1 },
        { fret: 2, finger: 2 },
        { fret: 4, finger: 4 },
      ],
      dString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
      ],
      gString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
      ],
      bString: [
        { fret: 2, finger: 2 },
        { fret: 4, finger: 4 },
      ],
      eStringHigh: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 4 },
      ],
      aString: [
        { fret: 7, finger: 2 },
        { fret: 9, finger: 4 },
      ],
      dString: [
        { fret: 6, finger: 1 },
        { fret: 7, finger: 2 },
        { fret: 9, finger: 4 },
      ],
      gString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      bString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      eStringHigh: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 4 },
      ],
      aString: [
        { fret: 9, finger: 2 },
        { fret: 11, finger: 4 },
      ],
      dString: [
        { fret: 8, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 11, finger: 4 },
      ],
      gString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      bString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      eStringHigh: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 11, finger: 1 },
        { fret: 14, finger: 4 },
      ],
      aString: [
        { fret: 11, finger: 1 },
        { fret: 14, finger: 4 },
      ],
      dString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      gString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      bString: [
        { fret: 12, finger: 2 },
        { fret: 14, finger: 4 },
      ],
      eStringHigh: [
        { fret: 11, finger: 1 },
        { fret: 14, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 4 },
      ],
      aString: [
        { fret: 4, finger: 1 },
        { fret: 7, finger: 4 },
      ],
      dString: [
        { fret: 4, finger: 1 },
        { fret: 7, finger: 4 },
      ],
      gString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      bString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 4 },
      ],
      eStringHigh: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 4 },
      ],
      aString: [
        { fret: 14, finger: 2 },
        { fret: 16, finger: 4 },
      ],
      dString: [
        { fret: 13, finger: 1 },
        { fret: 14, finger: 2 },
        { fret: 16, finger: 4 },
      ],
      gString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      bString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      eStringHigh: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 4 },
      ],
      aString: [
        { fret: 16, finger: 2 },
        { fret: 18, finger: 4 },
      ],
      dString: [
        { fret: 15, finger: 1 },
        { fret: 18, finger: 4 },
      ],
      gString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      bString: [
        { fret: 16, finger: 2 },
        { fret: 19, finger: 4 },
      ],
      eStringHigh: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 4 },
      ],
    },
    position8: {
      eString: [
        { fret: 18, finger: 1 },
        { fret: 21, finger: 4 },
      ],
      aString: [
        { fret: 18, finger: 1 },
        { fret: 21, finger: 4 },
      ],
      dString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      gString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      bString: [
        { fret: 19, finger: 2 },
        { fret: 21, finger: 4 },
      ],
      eStringHigh: [
        { fret: 18, finger: 1 },
        { fret: 21, finger: 4 },
      ],
    },
  },

  // MINOR //

  cMinor: {
    position1: {
      eString: [
        { fret: 8, finger: 1 },
        { fret: 11, finger: 4 },
      ],
      aString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      dString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      gString: [
        { fret: 8, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 10, finger: 3 },
      ],
      bString: [
        { fret: 8, finger: 1 },
        { fret: 11, finger: 4 },
      ],
      eStringHigh: [
        { fret: 8, finger: 1 },
        { fret: 11, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 3, finger: 1 },
        { fret: 6, finger: 4 },
      ],
      aString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      dString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      gString: [
        { fret: 3, finger: 1 },
        { fret: 4, finger: 2 },
        { fret: 5, finger: 3 },
      ],
      bString: [
        { fret: 3, finger: 1 },
        { fret: 6, finger: 4 },
      ],
      eStringHigh: [
        { fret: 3, finger: 1 },
        { fret: 6, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      aString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      dString: [
        { fret: 11, finger: 1 },
        { fret: 12, finger: 2 },
        { fret: 13, finger: 3 },
      ],
      gString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      bString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      eStringHigh: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 13, finger: 1 },
        { fret: 16, finger: 4 },
      ],
      aString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      dString: [
        { fret: 13, finger: 1 },
        { fret: 14, finger: 2 },
        { fret: 15, finger: 3 },
      ],
      gString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      bString: [
        { fret: 13, finger: 1 },
        { fret: 16, finger: 4 },
      ],
      eStringHigh: [
        { fret: 13, finger: 1 },
        { fret: 16, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      aString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      dString: [
        { fret: 6, finger: 1 },
        { fret: 7, finger: 2 },
        { fret: 8, finger: 3 },
      ],
      gString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      bString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      eStringHigh: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 9, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      aString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      dString: [
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 18, finger: 3 },
      ],
      gString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      bString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      eStringHigh: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 20, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      aString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      dString: [
        { fret: 18, finger: 1 },
        { fret: 19, finger: 2 },
        { fret: 20, finger: 3 },
      ],
      gString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      bString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      eStringHigh: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
      ],
    },
    position8: {
      eString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 23, finger: 4 },
      ],
      aString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 23, finger: 4 },
      ],
      dString: [
        { fret: 20, finger: 1 },
        { fret: 21, finger: 2 },
        { fret: 22, finger: 3 },
      ],
      gString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      bString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 23, finger: 4 },
      ],
      eStringHigh: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 23, finger: 4 },
      ],
    },
  },
  cSharpDFlatMinor: {
    position1: {
      eString: [
        { fret: 9, finger: 1 },
        { fret: 12, finger: 4 },
      ],
      aString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      dString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      gString: [
        { fret: 9, finger: 1 },
        { fret: 10, finger: 2 },
        { fret: 11, finger: 3 },
      ],
      bString: [
        { fret: 9, finger: 1 },
        { fret: 12, finger: 4 },
      ],
      eStringHigh: [
        { fret: 9, finger: 1 },
        { fret: 12, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 4, finger: 1 },
        { fret: 7, finger: 4 },
      ],
      aString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      dString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      gString: [
        { fret: 4, finger: 1 },
        { fret: 5, finger: 2 },
        { fret: 6, finger: 3 },
      ],
      bString: [
        { fret: 4, finger: 1 },
        { fret: 7, finger: 4 },
      ],
      eStringHigh: [
        { fret: 4, finger: 1 },
        { fret: 7, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      aString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      dString: [
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
        { fret: 14, finger: 3 },
      ],
      gString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      bString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      eStringHigh: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 14, finger: 1 },
        { fret: 17, finger: 4 },
      ],
      aString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      dString: [
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 16, finger: 3 },
      ],
      gString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      bString: [
        { fret: 14, finger: 1 },
        { fret: 17, finger: 4 },
      ],
      eStringHigh: [
        { fret: 14, finger: 1 },
        { fret: 17, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      aString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      dString: [
        { fret: 7, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 9, finger: 3 },
      ],
      gString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      bString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      eStringHigh: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 10, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      aString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      dString: [
        { fret: 17, finger: 1 },
        { fret: 18, finger: 2 },
        { fret: 19, finger: 3 },
      ],
      gString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      bString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      eStringHigh: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      aString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      dString: [
        { fret: 19, finger: 1 },
        { fret: 20, finger: 2 },
        { fret: 21, finger: 3 },
      ],
      gString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      bString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      eStringHigh: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
    },
    position8: {
      eString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      aString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      dString: [
        { fret: 21, finger: 1 },
        { fret: 22, finger: 2 },
        { fret: 23, finger: 3 },
      ],
      gString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 23, finger: 4 },
      ],
      bString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      eStringHigh: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
    },
  },
  dMinor: {
    position1: {
      eString: [
        { fret: 10, finger: 1 },
        { fret: 13, finger: 4 },
      ],
      aString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      dString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      gString: [
        { fret: 10, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 12, finger: 3 },
      ],
      bString: [
        { fret: 10, finger: 1 },
        { fret: 13, finger: 4 },
      ],
      eStringHigh: [
        { fret: 10, finger: 1 },
        { fret: 13, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 5, finger: 1 },
        { fret: 8, finger: 4 },
      ],
      aString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      dString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      gString: [
        { fret: 5, finger: 1 },
        { fret: 6, finger: 2 },
        { fret: 7, finger: 3 },
      ],
      bString: [
        { fret: 5, finger: 1 },
        { fret: 8, finger: 4 },
      ],
      eStringHigh: [
        { fret: 5, finger: 1 },
        { fret: 8, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      aString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      dString: [
        { fret: 13, finger: 1 },
        { fret: 14, finger: 2 },
        { fret: 15, finger: 3 },
      ],
      gString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      bString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      eStringHigh: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 15, finger: 1 },
        { fret: 18, finger: 4 },
      ],
      aString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      dString: [
        { fret: 15, finger: 1 },
        { fret: 16, finger: 2 },
        { fret: 17, finger: 3 },
      ],
      gString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      bString: [
        { fret: 15, finger: 1 },
        { fret: 18, finger: 4 },
      ],
      eStringHigh: [
        { fret: 15, finger: 1 },
        { fret: 18, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      aString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      dString: [
        { fret: 8, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 10, finger: 3 },
      ],
      gString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      bString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      eStringHigh: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 11, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      aString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      dString: [
        { fret: 18, finger: 1 },
        { fret: 19, finger: 2 },
        { fret: 20, finger: 3 },
      ],
      gString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      bString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      eStringHigh: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 22, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 23, finger: 4 },
      ],
      aString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 23, finger: 4 },
      ],
      dString: [
        { fret: 20, finger: 1 },
        { fret: 21, finger: 2 },
        { fret: 22, finger: 3 },
      ],
      gString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      bString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 23, finger: 4 },
      ],
      eStringHigh: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 23, finger: 4 },
      ],
    },
    position8: {
      eString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      aString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      dString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      gString: [
        { fret: 21, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      bString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      eStringHigh: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
    },
  },
  dSharpEFlatMinor: {
    position1: {
      eString: [
        { fret: 11, finger: 1 },
        { fret: 14, finger: 4 },
      ],
      aString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      dString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      gString: [
        { fret: 11, finger: 1 },
        { fret: 12, finger: 2 },
        { fret: 13, finger: 3 },
      ],
      bString: [
        { fret: 11, finger: 1 },
        { fret: 14, finger: 4 },
      ],
      eStringHigh: [
        { fret: 11, finger: 1 },
        { fret: 14, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 6, finger: 1 },
        { fret: 9, finger: 4 },
      ],
      aString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      dString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      gString: [
        { fret: 6, finger: 1 },
        { fret: 7, finger: 2 },
        { fret: 8, finger: 3 },
      ],
      bString: [
        { fret: 6, finger: 1 },
        { fret: 9, finger: 4 },
      ],
      eStringHigh: [
        { fret: 6, finger: 1 },
        { fret: 9, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      aString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      dString: [
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 16, finger: 3 },
      ],
      gString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      bString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      eStringHigh: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 18, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 16, finger: 1 },
        { fret: 19, finger: 4 },
      ],
      aString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      dString: [
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 18, finger: 3 },
      ],
      gString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      bString: [
        { fret: 16, finger: 1 },
        { fret: 19, finger: 4 },
      ],
      eStringHigh: [
        { fret: 16, finger: 1 },
        { fret: 19, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      aString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      dString: [
        { fret: 9, finger: 1 },
        { fret: 10, finger: 2 },
        { fret: 11, finger: 3 },
      ],
      gString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      bString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      eStringHigh: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 12, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 23, finger: 4 },
      ],
      aString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 23, finger: 4 },
      ],
      dString: [
        { fret: 19, finger: 1 },
        { fret: 20, finger: 2 },
        { fret: 21, finger: 3 },
      ],
      gString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      bString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 23, finger: 4 },
      ],
      eStringHigh: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 23, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      aString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      dString: [
        { fret: 21, finger: 1 },
        { fret: 22, finger: 2 },
        { fret: 23, finger: 3 },
      ],
      gString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 23, finger: 4 },
      ],
      bString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      eStringHigh: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
    },
    position8: {
      eString: [
        { fret: 23, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      aString: [
        { fret: 23, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      dString: [
        { fret: 23, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      gString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      bString: [
        { fret: 23, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      eStringHigh: [
        { fret: 23, finger: 1 },
        { fret: 24, finger: 4 },
      ],
    },
  },
  eMinor: {
    position1: {
      eString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 1 },
        { fret: 3, finger: 2 },
        { fret: 5, finger: 4 },
      ],
      aString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 1 },
        { fret: 3, finger: 2 },
        { fret: 5, finger: 4 },
      ],
      dString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 1 },
        { fret: 3, finger: 2 },
        { fret: 4, finger: 3 },
      ],
      gString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 1 },
        { fret: 3, finger: 2 },
        { fret: 4, finger: 3 },
      ],
      bString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 1 },
        { fret: 3, finger: 2 },
        { fret: 5, finger: 4 },
      ],
      eStringHigh: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 1 },
        { fret: 3, finger: 2 },
        { fret: 5, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 8, finger: 4 },
        { fret: 10, finger: 4 },
      ],
      aString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 8, finger: 4 },
        { fret: 10, finger: 4 },
      ],
      dString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
        { fret: 9, finger: 4 },
      ],
      gString: [
        { fret: 4, finger: 1 },
        { fret: 5, finger: 2 },
        { fret: 7, finger: 4 },
        { fret: 9, finger: 4 },
      ],
      bString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 8, finger: 4 },
        { fret: 10, finger: 4 },
      ],
      eStringHigh: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 8, finger: 4 },
        { fret: 10, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 13, finger: 4 },
        { fret: 15, finger: 4 },
      ],
      aString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 13, finger: 4 },
        { fret: 15, finger: 4 },
      ],
      dString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 12, finger: 4 },
        { fret: 14, finger: 4 },
      ],
      gString: [
        { fret: 9, finger: 1 },
        { fret: 10, finger: 2 },
        { fret: 12, finger: 4 },
        { fret: 14, finger: 4 },
      ],
      bString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 13, finger: 4 },
        { fret: 15, finger: 4 },
      ],
      eStringHigh: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 13, finger: 4 },
        { fret: 15, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 17, finger: 4 },
        { fret: 19, finger: 4 },
      ],
      aString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 17, finger: 4 },
        { fret: 19, finger: 4 },
      ],
      dString: [
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 17, finger: 4 },
        { fret: 18, finger: 4 },
      ],
      gString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
        { fret: 18, finger: 4 },
      ],
      bString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 17, finger: 4 },
        { fret: 19, finger: 4 },
      ],
      eStringHigh: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 17, finger: 4 },
        { fret: 19, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 10, finger: 4 },
        { fret: 12, finger: 4 },
      ],
      aString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 10, finger: 4 },
        { fret: 12, finger: 4 },
      ],
      dString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
        { fret: 11, finger: 4 },
      ],
      gString: [
        { fret: 6, finger: 1 },
        { fret: 7, finger: 2 },
        { fret: 9, finger: 4 },
        { fret: 11, finger: 4 },
      ],
      bString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 10, finger: 4 },
        { fret: 12, finger: 4 },
      ],
      eStringHigh: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 10, finger: 4 },
        { fret: 12, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 15, finger: 4 },
        { fret: 17, finger: 4 },
      ],
      aString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 15, finger: 4 },
        { fret: 17, finger: 4 },
      ],
      dString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
        { fret: 16, finger: 4 },
      ],
      gString: [
        { fret: 11, finger: 1 },
        { fret: 12, finger: 2 },
        { fret: 14, finger: 4 },
        { fret: 16, finger: 4 },
      ],
      bString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 15, finger: 4 },
        { fret: 17, finger: 4 },
      ],
      eStringHigh: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 15, finger: 4 },
        { fret: 17, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 20, finger: 4 },
        { fret: 22, finger: 4 },
      ],
      aString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 20, finger: 4 },
        { fret: 22, finger: 4 },
      ],
      dString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 20, finger: 4 },
        { fret: 21, finger: 4 },
      ],
      gString: [
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 19, finger: 4 },
        { fret: 21, finger: 4 },
      ],
      bString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 20, finger: 4 },
        { fret: 22, finger: 4 },
      ],
      eStringHigh: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 20, finger: 4 },
        { fret: 22, finger: 4 },
      ],
    },
    position8: {
      eString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
        { fret: 24, finger: 4 },
      ],
      aString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
        { fret: 24, finger: 4 },
      ],
      dString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 22, finger: 4 },
        { fret: 23, finger: 4 },
      ],
      gString: [
        { fret: 18, finger: 1 },
        { fret: 19, finger: 2 },
        { fret: 21, finger: 4 },
        { fret: 23, finger: 4 },
      ],
      bString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
        { fret: 24, finger: 4 },
      ],
      eStringHigh: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
        { fret: 24, finger: 4 },
      ],
    },
  },
  fMinor: {
    position1: {
      eString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
        { fret: 6, finger: 4 },
      ],
      aString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
        { fret: 6, finger: 4 },
      ],
      dString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
        { fret: 5, finger: 4 },
      ],
      gString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
        { fret: 5, finger: 4 },
      ],
      bString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
        { fret: 6, finger: 4 },
      ],
      eStringHigh: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
        { fret: 6, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 9, finger: 4 },
        { fret: 11, finger: 4 },
      ],
      aString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 9, finger: 4 },
        { fret: 11, finger: 4 },
      ],
      dString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
        { fret: 10, finger: 4 },
      ],
      gString: [
        { fret: 5, finger: 1 },
        { fret: 6, finger: 2 },
        { fret: 8, finger: 4 },
        { fret: 10, finger: 4 },
      ],
      bString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 9, finger: 4 },
        { fret: 11, finger: 4 },
      ],
      eStringHigh: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 9, finger: 4 },
        { fret: 11, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 14, finger: 4 },
        { fret: 16, finger: 4 },
      ],
      aString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 14, finger: 4 },
        { fret: 16, finger: 4 },
      ],
      dString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
        { fret: 15, finger: 4 },
      ],
      gString: [
        { fret: 10, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 13, finger: 4 },
        { fret: 15, finger: 4 },
      ],
      bString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 14, finger: 4 },
        { fret: 16, finger: 4 },
      ],
      eStringHigh: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 14, finger: 4 },
        { fret: 16, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 6, finger: 4 },
        { fret: 8, finger: 4 },
      ],
      aString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 6, finger: 4 },
        { fret: 8, finger: 4 },
      ],
      dString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 6, finger: 4 },
        { fret: 7, finger: 4 },
      ],
      gString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 6, finger: 4 },
        { fret: 7, finger: 4 },
      ],
      bString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 6, finger: 4 },
        { fret: 8, finger: 4 },
      ],
      eStringHigh: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 6, finger: 4 },
        { fret: 8, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 11, finger: 4 },
        { fret: 13, finger: 4 },
      ],
      aString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 11, finger: 4 },
        { fret: 13, finger: 4 },
      ],
      dString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
        { fret: 12, finger: 4 },
      ],
      gString: [
        { fret: 7, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 10, finger: 4 },
        { fret: 12, finger: 4 },
      ],
      bString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 11, finger: 4 },
        { fret: 13, finger: 4 },
      ],
      eStringHigh: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 11, finger: 4 },
        { fret: 13, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 16, finger: 4 },
        { fret: 18, finger: 4 },
      ],
      aString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 16, finger: 4 },
        { fret: 18, finger: 4 },
      ],
      dString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
        { fret: 17, finger: 4 },
      ],
      gString: [
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
        { fret: 15, finger: 4 },
        { fret: 17, finger: 4 },
      ],
      bString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 16, finger: 4 },
        { fret: 18, finger: 4 },
      ],
      eStringHigh: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 16, finger: 4 },
        { fret: 18, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
        { fret: 23, finger: 4 },
      ],
      aString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
        { fret: 23, finger: 4 },
      ],
      dString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
        { fret: 22, finger: 4 },
      ],
      gString: [
        { fret: 17, finger: 1 },
        { fret: 18, finger: 2 },
        { fret: 20, finger: 4 },
        { fret: 22, finger: 4 },
      ],
      bString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
        { fret: 23, finger: 4 },
      ],
      eStringHigh: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
        { fret: 23, finger: 4 },
      ],
    },
    position8: {
      eString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 23, finger: 4 },
        { fret: 25, finger: 4 },
      ],
      aString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 23, finger: 4 },
        { fret: 25, finger: 4 },
      ],
      dString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 23, finger: 4 },
        { fret: 24, finger: 4 },
      ],
      gString: [
        { fret: 19, finger: 1 },
        { fret: 20, finger: 2 },
        { fret: 22, finger: 4 },
        { fret: 24, finger: 4 },
      ],
      bString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 23, finger: 4 },
        { fret: 25, finger: 4 },
      ],
      eStringHigh: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 23, finger: 4 },
        { fret: 25, finger: 4 },
      ],
    },
  },
  fSharpGFlatMinor: {
    position1: {
      eString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 6, finger: 4 },
        { fret: 7, finger: 4 },
      ],
      aString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 6, finger: 4 },
        { fret: 7, finger: 4 },
      ],
      dString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 6, finger: 4 },
        { fret: 7, finger: 4 },
      ],
      gString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 6, finger: 4 },
        { fret: 8, finger: 4 },
      ],
      bString: [
        { fret: 2, finger: 1 },
        { fret: 3, finger: 2 },
        { fret: 5, finger: 4 },
        { fret: 7, finger: 4 },
      ],
      eStringHigh: [
        { fret: 2, finger: 1 },
        { fret: 3, finger: 2 },
        { fret: 5, finger: 4 },
        { fret: 7, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
        { fret: 12, finger: 4 },
      ],
      aString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
        { fret: 12, finger: 4 },
      ],
      dString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
        { fret: 12, finger: 4 },
      ],
      gString: [
        { fret: 7, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 10, finger: 4 },
        { fret: 12, finger: 4 },
      ],
      bString: [
        { fret: 7, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 10, finger: 4 },
        { fret: 12, finger: 4 },
      ],
      eStringHigh: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
        { fret: 12, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
        { fret: 17, finger: 4 },
      ],
      aString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
        { fret: 17, finger: 4 },
      ],
      dString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
        { fret: 17, finger: 4 },
      ],
      gString: [
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
        { fret: 15, finger: 4 },
        { fret: 17, finger: 4 },
      ],
      bString: [
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
        { fret: 15, finger: 4 },
        { fret: 17, finger: 4 },
      ],
      eStringHigh: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
        { fret: 17, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
        { fret: 10, finger: 4 },
      ],
      aString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
        { fret: 10, finger: 4 },
      ],
      dString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
        { fret: 10, finger: 4 },
      ],
      gString: [
        { fret: 5, finger: 1 },
        { fret: 6, finger: 2 },
        { fret: 8, finger: 4 },
        { fret: 10, finger: 4 },
      ],
      bString: [
        { fret: 5, finger: 1 },
        { fret: 6, finger: 2 },
        { fret: 8, finger: 4 },
        { fret: 10, finger: 4 },
      ],
      eStringHigh: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
        { fret: 10, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
        { fret: 15, finger: 4 },
      ],
      aString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
        { fret: 15, finger: 4 },
      ],
      dString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
        { fret: 15, finger: 4 },
      ],
      gString: [
        { fret: 10, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 13, finger: 4 },
        { fret: 15, finger: 4 },
      ],
      bString: [
        { fret: 10, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 13, finger: 4 },
        { fret: 15, finger: 4 },
      ],
      eStringHigh: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
        { fret: 15, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
        { fret: 20, finger: 4 },
      ],
      aString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
        { fret: 20, finger: 4 },
      ],
      dString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
        { fret: 20, finger: 4 },
      ],
      gString: [
        { fret: 15, finger: 1 },
        { fret: 16, finger: 2 },
        { fret: 18, finger: 4 },
        { fret: 20, finger: 4 },
      ],
      bString: [
        { fret: 15, finger: 1 },
        { fret: 16, finger: 2 },
        { fret: 18, finger: 4 },
        { fret: 20, finger: 4 },
      ],
      eStringHigh: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
        { fret: 20, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 24, finger: 4 },
        { fret: 25, finger: 4 },
      ],
      aString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 24, finger: 4 },
        { fret: 25, finger: 4 },
      ],
      dString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 24, finger: 4 },
        { fret: 25, finger: 4 },
      ],
      gString: [
        { fret: 20, finger: 1 },
        { fret: 21, finger: 2 },
        { fret: 23, finger: 4 },
        { fret: 25, finger: 4 },
      ],
      bString: [
        { fret: 20, finger: 1 },
        { fret: 21, finger: 2 },
        { fret: 23, finger: 4 },
        { fret: 25, finger: 4 },
      ],
      eStringHigh: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 24, finger: 4 },
        { fret: 25, finger: 4 },
      ],
    },
    position8: {
      eString: [{ fret: 25, finger: 1 }],
      aString: [{ fret: 25, finger: 1 }],
      dString: [{ fret: 25, finger: 1 }],
      gString: [{ fret: 25, finger: 1 }],
      bString: [{ fret: 25, finger: 1 }],
      eStringHigh: [{ fret: 25, finger: 1 }],
    },
  },
  gMinor: {
    position1: {
      eString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 6, finger: 4 },
        { fret: 8, finger: 4 },
      ],
      aString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 7, finger: 4 },
        { fret: 8, finger: 4 },
      ],
      dString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 7, finger: 4 },
        { fret: 8, finger: 4 },
      ],
      gString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 7, finger: 4 },
        { fret: 8, finger: 4 },
      ],
      bString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 6, finger: 4 },
        { fret: 8, finger: 4 },
      ],
      eStringHigh: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 6, finger: 4 },
        { fret: 8, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 11, finger: 4 },
        { fret: 13, finger: 4 },
      ],
      aString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 12, finger: 4 },
        { fret: 13, finger: 4 },
      ],
      dString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 12, finger: 4 },
        { fret: 13, finger: 4 },
      ],
      gString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 12, finger: 4 },
        { fret: 13, finger: 4 },
      ],
      bString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 11, finger: 4 },
        { fret: 13, finger: 4 },
      ],
      eStringHigh: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 11, finger: 4 },
        { fret: 13, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 16, finger: 4 },
        { fret: 18, finger: 4 },
      ],
      aString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
        { fret: 18, finger: 4 },
      ],
      dString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
        { fret: 18, finger: 4 },
      ],
      gString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
        { fret: 18, finger: 4 },
      ],
      bString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 16, finger: 4 },
        { fret: 18, finger: 4 },
      ],
      eStringHigh: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 16, finger: 4 },
        { fret: 18, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 9, finger: 4 },
        { fret: 11, finger: 4 },
      ],
      aString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
        { fret: 11, finger: 4 },
      ],
      dString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
        { fret: 11, finger: 4 },
      ],
      gString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
        { fret: 11, finger: 4 },
      ],
      bString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 9, finger: 4 },
        { fret: 11, finger: 4 },
      ],
      eStringHigh: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 9, finger: 4 },
        { fret: 11, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 14, finger: 4 },
        { fret: 16, finger: 4 },
      ],
      aString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
        { fret: 16, finger: 4 },
      ],
      dString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
        { fret: 16, finger: 4 },
      ],
      gString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
        { fret: 16, finger: 4 },
      ],
      bString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 14, finger: 4 },
        { fret: 16, finger: 4 },
      ],
      eStringHigh: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 14, finger: 4 },
        { fret: 16, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 19, finger: 4 },
        { fret: 21, finger: 4 },
      ],
      aString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 20, finger: 4 },
        { fret: 21, finger: 4 },
      ],
      dString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 20, finger: 4 },
        { fret: 21, finger: 4 },
      ],
      gString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 20, finger: 4 },
        { fret: 21, finger: 4 },
      ],
      bString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 19, finger: 4 },
        { fret: 21, finger: 4 },
      ],
      eStringHigh: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 19, finger: 4 },
        { fret: 21, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
        { fret: 25, finger: 4 },
      ],
      aString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 25, finger: 4 },
      ],
      dString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 25, finger: 4 },
      ],
      gString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 25, finger: 4 },
      ],
      bString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
        { fret: 25, finger: 4 },
      ],
      eStringHigh: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
        { fret: 25, finger: 4 },
      ],
    },
    position8: {
      eString: [{ fret: 25, finger: 1 }],
      aString: [{ fret: 25, finger: 1 }],
      dString: [{ fret: 25, finger: 1 }],
      gString: [{ fret: 25, finger: 1 }],
      bString: [{ fret: 25, finger: 1 }],
      eStringHigh: [{ fret: 25, finger: 1 }],
    },
  },
  gSharpAflatMinor: {
    position1: {
      eString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
        { fret: 9, finger: 4 },
      ],
      aString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 8, finger: 4 },
        { fret: 9, finger: 4 },
      ],
      dString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 8, finger: 4 },
        { fret: 9, finger: 4 },
      ],
      gString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 8, finger: 4 },
        { fret: 9, finger: 4 },
      ],
      bString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
        { fret: 9, finger: 4 },
      ],
      eStringHigh: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
        { fret: 9, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 12, finger: 4 },
        { fret: 14, finger: 4 },
      ],
      aString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 13, finger: 4 },
        { fret: 14, finger: 4 },
      ],
      dString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 13, finger: 4 },
        { fret: 14, finger: 4 },
      ],
      gString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 13, finger: 4 },
        { fret: 14, finger: 4 },
      ],
      bString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 12, finger: 4 },
        { fret: 14, finger: 4 },
      ],
      eStringHigh: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 12, finger: 4 },
        { fret: 14, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 17, finger: 4 },
        { fret: 19, finger: 4 },
      ],
      aString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 18, finger: 4 },
        { fret: 19, finger: 4 },
      ],
      dString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 18, finger: 4 },
        { fret: 19, finger: 4 },
      ],
      gString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 18, finger: 4 },
        { fret: 19, finger: 4 },
      ],
      bString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 17, finger: 4 },
        { fret: 19, finger: 4 },
      ],
      eStringHigh: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 17, finger: 4 },
        { fret: 19, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 10, finger: 4 },
        { fret: 12, finger: 4 },
      ],
      aString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
        { fret: 12, finger: 4 },
      ],
      dString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
        { fret: 12, finger: 4 },
      ],
      gString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
        { fret: 12, finger: 4 },
      ],
      bString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 10, finger: 4 },
        { fret: 12, finger: 4 },
      ],
      eStringHigh: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 10, finger: 4 },
        { fret: 12, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 15, finger: 4 },
        { fret: 17, finger: 4 },
      ],
      aString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
        { fret: 17, finger: 4 },
      ],
      dString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
        { fret: 17, finger: 4 },
      ],
      gString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
        { fret: 17, finger: 4 },
      ],
      bString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 15, finger: 4 },
        { fret: 17, finger: 4 },
      ],
      eStringHigh: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 15, finger: 4 },
        { fret: 17, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 20, finger: 4 },
        { fret: 22, finger: 4 },
      ],
      aString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
        { fret: 22, finger: 4 },
      ],
      dString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
        { fret: 22, finger: 4 },
      ],
      gString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
        { fret: 22, finger: 4 },
      ],
      bString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 20, finger: 4 },
        { fret: 22, finger: 4 },
      ],
      eStringHigh: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 20, finger: 4 },
        { fret: 22, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 3 },
        { fret: 25, finger: 4 },
        { fret: 27, finger: 4 },
      ],
      aString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 3 },
        { fret: 26, finger: 4 },
        { fret: 27, finger: 4 },
      ],
      dString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 3 },
        { fret: 26, finger: 4 },
        { fret: 27, finger: 4 },
      ],
      gString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 3 },
        { fret: 26, finger: 4 },
        { fret: 27, finger: 4 },
      ],
      bString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 3 },
        { fret: 25, finger: 4 },
        { fret: 27, finger: 4 },
      ],
      eStringHigh: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 3 },
        { fret: 25, finger: 4 },
        { fret: 27, finger: 4 },
      ],
    },
  },
  aMinor: {
    position1: {
      eString: [
        { fret: 0, finger: 1 },
        { fret: 2, finger: 3 },
        { fret: 3, finger: 4 },
        { fret: 5, finger: 4 },
      ],
      aString: [
        { fret: 0, finger: 1 },
        { fret: 2, finger: 3 },
        { fret: 4, finger: 4 },
        { fret: 5, finger: 4 },
      ],
      dString: [
        { fret: 0, finger: 1 },
        { fret: 2, finger: 3 },
        { fret: 4, finger: 4 },
        { fret: 5, finger: 4 },
      ],
      gString: [
        { fret: 0, finger: 1 },
        { fret: 2, finger: 3 },
        { fret: 4, finger: 4 },
        { fret: 5, finger: 4 },
      ],
      bString: [
        { fret: 0, finger: 1 },
        { fret: 2, finger: 3 },
        { fret: 3, finger: 4 },
        { fret: 5, finger: 4 },
      ],
      eStringHigh: [
        { fret: 0, finger: 1 },
        { fret: 2, finger: 3 },
        { fret: 3, finger: 4 },
        { fret: 5, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 8, finger: 4 },
        { fret: 10, finger: 4 },
      ],
      aString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
        { fret: 10, finger: 4 },
      ],
      dString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
        { fret: 10, finger: 4 },
      ],
      gString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
        { fret: 10, finger: 4 },
      ],
      bString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 8, finger: 4 },
        { fret: 10, finger: 4 },
      ],
      eStringHigh: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 8, finger: 4 },
        { fret: 10, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 13, finger: 4 },
        { fret: 15, finger: 4 },
      ],
      aString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
        { fret: 15, finger: 4 },
      ],
      dString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
        { fret: 15, finger: 4 },
      ],
      gString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
        { fret: 15, finger: 4 },
      ],
      bString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 13, finger: 4 },
        { fret: 15, finger: 4 },
      ],
      eStringHigh: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 13, finger: 4 },
        { fret: 15, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 7, finger: 4 },
        { fret: 8, finger: 4 },
      ],
      aString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 7, finger: 4 },
        { fret: 9, finger: 4 },
      ],
      dString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 7, finger: 4 },
        { fret: 9, finger: 4 },
      ],
      gString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 7, finger: 4 },
        { fret: 9, finger: 4 },
      ],
      bString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 7, finger: 4 },
        { fret: 8, finger: 4 },
      ],
      eStringHigh: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 7, finger: 4 },
        { fret: 8, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 12, finger: 4 },
        { fret: 13, finger: 4 },
      ],
      aString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 12, finger: 4 },
        { fret: 14, finger: 4 },
      ],
      dString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 12, finger: 4 },
        { fret: 14, finger: 4 },
      ],
      gString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 12, finger: 4 },
        { fret: 14, finger: 4 },
      ],
      bString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 12, finger: 4 },
        { fret: 13, finger: 4 },
      ],
      eStringHigh: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 12, finger: 4 },
        { fret: 13, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
        { fret: 18, finger: 4 },
      ],
      aString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
        { fret: 19, finger: 4 },
      ],
      dString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
        { fret: 19, finger: 4 },
      ],
      gString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
        { fret: 19, finger: 4 },
      ],
      bString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
        { fret: 18, finger: 4 },
      ],
      eStringHigh: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
        { fret: 18, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 22, finger: 4 },
        { fret: 23, finger: 4 },
      ],
      aString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 22, finger: 4 },
        { fret: 24, finger: 4 },
      ],
      dString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 22, finger: 4 },
        { fret: 24, finger: 4 },
      ],
      gString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 22, finger: 4 },
        { fret: 24, finger: 4 },
      ],
      bString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 22, finger: 4 },
        { fret: 23, finger: 4 },
      ],
      eStringHigh: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 22, finger: 4 },
        { fret: 23, finger: 4 },
      ],
    },
    position8: {
      eString: [{ fret: 23, finger: 1 }],
      aString: [{ fret: 23, finger: 1 }],
      dString: [{ fret: 23, finger: 1 }],
      gString: [{ fret: 23, finger: 1 }],
      bString: [{ fret: 23, finger: 1 }],
      eStringHigh: [{ fret: 23, finger: 1 }],
    },
  },
  aSharpBFlatMinor: {
    position1: {
      eString: [
        { fret: 1, finger: 1 },
        { fret: 2, finger: 2 },
        { fret: 4, finger: 4 },
      ],
      aString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
      ],
      dString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
      ],
      gString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
      ],
      bString: [
        { fret: 1, finger: 1 },
        { fret: 2, finger: 2 },
        { fret: 4, finger: 4 },
      ],
      eStringHigh: [
        { fret: 1, finger: 1 },
        { fret: 2, finger: 2 },
        { fret: 4, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 4, finger: 1 },
        { fret: 5, finger: 2 },
        { fret: 7, finger: 4 },
      ],
      aString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      dString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      gString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      bString: [
        { fret: 4, finger: 1 },
        { fret: 5, finger: 2 },
        { fret: 7, finger: 4 },
      ],
      eStringHigh: [
        { fret: 4, finger: 1 },
        { fret: 5, finger: 2 },
        { fret: 7, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      aString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      dString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      gString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      bString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      eStringHigh: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 10, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 10, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 13, finger: 4 },
      ],
      aString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      dString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      gString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      bString: [
        { fret: 10, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 13, finger: 4 },
      ],
      eStringHigh: [
        { fret: 10, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 13, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 13, finger: 1 },
        { fret: 14, finger: 2 },
        { fret: 16, finger: 4 },
      ],
      aString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      dString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      gString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      bString: [
        { fret: 13, finger: 1 },
        { fret: 14, finger: 2 },
        { fret: 16, finger: 4 },
      ],
      eStringHigh: [
        { fret: 13, finger: 1 },
        { fret: 14, finger: 2 },
        { fret: 16, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 19, finger: 4 },
      ],
      aString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      dString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      gString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      bString: [
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 19, finger: 4 },
      ],
      eStringHigh: [
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 19, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 19, finger: 1 },
        { fret: 20, finger: 2 },
        { fret: 22, finger: 4 },
      ],
      aString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      dString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      gString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      bString: [
        { fret: 19, finger: 1 },
        { fret: 20, finger: 2 },
        { fret: 22, finger: 4 },
      ],
      eStringHigh: [
        { fret: 19, finger: 1 },
        { fret: 20, finger: 2 },
        { fret: 22, finger: 4 },
      ],
    },
    position8: {
      eString: [{ fret: 22, finger: 1 }],
      aString: [{ fret: 22, finger: 1 }],
      dString: [{ fret: 22, finger: 1 }],
      gString: [{ fret: 22, finger: 1 }],
      bString: [{ fret: 22, finger: 1 }],
      eStringHigh: [{ fret: 22, finger: 1 }],
    },
  },
  bMinor: {
    position1: {
      eString: [
        { fret: 2, finger: 1 },
        { fret: 3, finger: 2 },
        { fret: 5, finger: 4 },
      ],
      aString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      dString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      gString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      bString: [
        { fret: 2, finger: 1 },
        { fret: 3, finger: 2 },
        { fret: 5, finger: 4 },
      ],
      eStringHigh: [
        { fret: 2, finger: 1 },
        { fret: 3, finger: 2 },
        { fret: 5, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      aString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      dString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      gString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      bString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      eStringHigh: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 8, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 9, finger: 1 },
        { fret: 10, finger: 2 },
        { fret: 12, finger: 4 },
      ],
      aString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      dString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      gString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      bString: [
        { fret: 9, finger: 1 },
        { fret: 10, finger: 2 },
        { fret: 12, finger: 4 },
      ],
      eStringHigh: [
        { fret: 9, finger: 1 },
        { fret: 10, finger: 2 },
        { fret: 12, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      aString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      dString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      gString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      bString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      eStringHigh: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 15, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 19, finger: 4 },
      ],
      aString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      dString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      gString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      bString: [
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 19, finger: 4 },
      ],
      eStringHigh: [
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 19, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      aString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      dString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      gString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      bString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      eStringHigh: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
    },
    position7: {
      eString: [{ fret: 22, finger: 1 }],
      aString: [{ fret: 22, finger: 1 }],
      dString: [{ fret: 22, finger: 1 }],
      gString: [{ fret: 22, finger: 1 }],
      bString: [{ fret: 22, finger: 1 }],
      eStringHigh: [{ fret: 22, finger: 1 }],
    },
    position8: {
      eString: [{ fret: 22, finger: 1 }],
      aString: [{ fret: 22, finger: 1 }],
      dString: [{ fret: 22, finger: 1 }],
      gString: [{ fret: 22, finger: 1 }],
      bString: [{ fret: 22, finger: 1 }],
      eStringHigh: [{ fret: 22, finger: 1 }],
    },
  },

  // LYDIAN //

  cLydian: {
    position1: {
      eString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      aString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      dString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      gString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      bString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      eStringHigh: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      aString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      dString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      gString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      bString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      eStringHigh: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 10, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 10, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 12, finger: 4 },
      ],
      aString: [
        { fret: 10, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 12, finger: 4 },
      ],
      dString: [
        { fret: 10, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 12, finger: 4 },
      ],
      gString: [
        { fret: 9, finger: 1 },
        { fret: 10, finger: 2 },
        { fret: 12, finger: 4 },
      ],
      bString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      eStringHigh: [
        { fret: 10, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 12, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
        { fret: 14, finger: 4 },
      ],
      aString: [
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
        { fret: 14, finger: 4 },
      ],
      dString: [
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
        { fret: 14, finger: 4 },
      ],
      gString: [
        { fret: 11, finger: 1 },
        { fret: 12, finger: 2 },
        { fret: 14, finger: 4 },
      ],
      bString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      eStringHigh: [
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
        { fret: 14, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 16, finger: 4 },
      ],
      aString: [
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 16, finger: 4 },
      ],
      dString: [
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 16, finger: 4 },
      ],
      gString: [
        { fret: 13, finger: 1 },
        { fret: 14, finger: 2 },
        { fret: 16, finger: 4 },
      ],
      bString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      eStringHigh: [
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 16, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 19, finger: 4 },
      ],
      aString: [
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 19, finger: 4 },
      ],
      dString: [
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 19, finger: 4 },
      ],
      gString: [
        { fret: 15, finger: 1 },
        { fret: 16, finger: 2 },
        { fret: 18, finger: 4 },
      ],
      bString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      eStringHigh: [
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 19, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
      ],
      aString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
      ],
      dString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
      ],
      gString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
      ],
      bString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
      ],
      eStringHigh: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
      ],
    },
    position8: {
      eString: [{ fret: 21, finger: 1 }],
      aString: [{ fret: 21, finger: 1 }],
      dString: [{ fret: 21, finger: 1 }],
      gString: [{ fret: 20, finger: 1 }],
      bString: [{ fret: 19, finger: 1 }],
      eStringHigh: [{ fret: 21, finger: 1 }],
    },
  },
  cSharpBFlatLydian: {
    position1: {
      eString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      aString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      dString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      gString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
      ],
      bString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      eStringHigh: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      aString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      dString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      gString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      bString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      eStringHigh: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 8, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 8, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 11, finger: 4 },
      ],
      aString: [
        { fret: 8, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 11, finger: 4 },
      ],
      dString: [
        { fret: 8, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 11, finger: 4 },
      ],
      gString: [
        { fret: 7, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 10, finger: 4 },
      ],
      bString: [
        { fret: 7, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 10, finger: 4 },
      ],
      eStringHigh: [
        { fret: 8, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 11, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      aString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      dString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      gString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      bString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      eStringHigh: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 15, finger: 1 },
        { fret: 16, finger: 2 },
        { fret: 18, finger: 4 },
      ],
      aString: [
        { fret: 15, finger: 1 },
        { fret: 16, finger: 2 },
        { fret: 18, finger: 4 },
      ],
      dString: [
        { fret: 15, finger: 1 },
        { fret: 16, finger: 2 },
        { fret: 18, finger: 4 },
      ],
      gString: [
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 17, finger: 4 },
      ],
      bString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      eStringHigh: [
        { fret: 15, finger: 1 },
        { fret: 16, finger: 2 },
        { fret: 18, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      aString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      dString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      gString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      bString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      eStringHigh: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
      ],
      aString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
      ],
      dString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
      ],
      gString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
      ],
      bString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
      ],
      eStringHigh: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
      ],
    },
    position8: {
      eString: [{ fret: 24, finger: 1 }],
      aString: [{ fret: 24, finger: 1 }],
      dString: [{ fret: 24, finger: 1 }],
      gString: [{ fret: 24, finger: 1 }],
      bString: [{ fret: 24, finger: 1 }],
      eStringHigh: [{ fret: 24, finger: 1 }],
    },
  },
  dLydian: {
    position1: {
      eString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      aString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      dString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      gString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      bString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      eStringHigh: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 6, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      aString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      dString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      gString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      bString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      eStringHigh: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      aString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      dString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      gString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      bString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      eStringHigh: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 13, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      aString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      dString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      gString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      bString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      eStringHigh: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      aString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      dString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      gString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      bString: [
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 17, finger: 4 },
      ],
      eStringHigh: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 17, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      aString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      dString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      gString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      bString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      eStringHigh: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      aString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      dString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      gString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
      ],
      bString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
      ],
      eStringHigh: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
    },
    position8: {
      eString: [{ fret: 24, finger: 1 }],
      aString: [{ fret: 24, finger: 1 }],
      dString: [{ fret: 24, finger: 1 }],
      gString: [{ fret: 24, finger: 1 }],
      bString: [{ fret: 24, finger: 1 }],
      eStringHigh: [{ fret: 24, finger: 1 }],
    },
  },
  dSharpEFlatLydian: {
    position1: {
      eString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      aString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      dString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      gString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      bString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      eStringHigh: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 7, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      aString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      dString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      gString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      bString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      eStringHigh: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      aString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      dString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      gString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      bString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      eStringHigh: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 12, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      aString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      dString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      gString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      bString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      eStringHigh: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      aString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      dString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      gString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      bString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      eStringHigh: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      aString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      dString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      gString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      bString: [
        { fret: 18, finger: 1 },
        { fret: 19, finger: 2 },
        { fret: 21, finger: 4 },
      ],
      eStringHigh: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
      ],
      aString: [
        { fret: 21, finger: 1 },
        { fret: 22, finger: 2 },
      ],
      dString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
      ],
      gString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
      ],
      bString: [
        { fret: 21, finger: 1 },
        { fret: 22, finger: 2 },
      ],
      eStringHigh: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
      ],
    },
    position8: {
      eString: [{ fret: 24, finger: 1 }],
      aString: [{ fret: 24, finger: 1 }],
      dString: [{ fret: 24, finger: 1 }],
      gString: [{ fret: 24, finger: 1 }],
      bString: [{ fret: 24, finger: 1 }],
      eStringHigh: [{ fret: 24, finger: 1 }],
    },
  },
  eLydian: {
    position1: {
      eString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      aString: [
        { fret: 3, finger: 1 },
        { fret: 4, finger: 2 },
        { fret: 6, finger: 4 },
      ],
      dString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      gString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      bString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      eStringHigh: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 8, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      aString: [
        { fret: 6, finger: 1 },
        { fret: 7, finger: 2 },
        { fret: 9, finger: 4 },
      ],
      dString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      gString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      bString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      eStringHigh: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      aString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      dString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      gString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      bString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      eStringHigh: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      aString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      dString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      gString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      bString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      eStringHigh: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 18, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      aString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      dString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      gString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
      ],
      bString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
      ],
      eStringHigh: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 19, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
      ],
      aString: [
        { fret: 19, finger: 1 },
        { fret: 20, finger: 2 },
      ],
      dString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
      ],
      gString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
      ],
      bString: [
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 19, finger: 4 },
      ],
      eStringHigh: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
      ],
    },
    position7: {
      eString: [
        { fret: 21, finger: 1 },
        { fret: 22, finger: 2 },
      ],
      aString: [
        { fret: 21, finger: 1 },
        { fret: 22, finger: 2 },
      ],
      dString: [
        { fret: 21, finger: 1 },
        { fret: 22, finger: 2 },
      ],
      gString: [{ fret: 20, finger: 1 }],
      bString: [{ fret: 19, finger: 1 }],
      eStringHigh: [
        { fret: 21, finger: 1 },
        { fret: 22, finger: 2 },
      ],
    },
    position8: {
      eString: [{ fret: 24, finger: 1 }],
      aString: [{ fret: 24, finger: 1 }],
      dString: [{ fret: 24, finger: 1 }],
      gString: [{ fret: 24, finger: 1 }],
      bString: [{ fret: 24, finger: 1 }],
      eStringHigh: [{ fret: 24, finger: 1 }],
    },
  },
  fLydian: {
    position1: {
      eString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      aString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      dString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      gString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      bString: [
        { fret: 4, finger: 1 },
        { fret: 5, finger: 2 },
        { fret: 7, finger: 4 },
      ],
      eStringHigh: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      aString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      dString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      gString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      bString: [
        { fret: 6, finger: 1 },
        { fret: 7, finger: 2 },
        { fret: 9, finger: 4 },
      ],
      eStringHigh: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 12, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      aString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      dString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      gString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      bString: [
        { fret: 8, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 11, finger: 4 },
      ],
      eStringHigh: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 13, finger: 1 },
        { fret: 14, finger: 2 },
        { fret: 16, finger: 4 },
      ],
      aString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      dString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      gString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      bString: [
        { fret: 11, finger: 1 },
        { fret: 12, finger: 2 },
        { fret: 14, finger: 4 },
      ],
      eStringHigh: [
        { fret: 13, finger: 1 },
        { fret: 14, finger: 2 },
        { fret: 16, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      aString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      dString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      gString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      bString: [
        { fret: 13, finger: 1 },
        { fret: 14, finger: 2 },
        { fret: 16, finger: 4 },
      ],
      eStringHigh: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      aString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      dString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      gString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      bString: [
        { fret: 15, finger: 1 },
        { fret: 16, finger: 2 },
        { fret: 18, finger: 4 },
      ],
      eStringHigh: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 20, finger: 1 },
        { fret: 21, finger: 2 },
        { fret: 23, finger: 4 },
      ],
      aString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      dString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      gString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      bString: [
        { fret: 18, finger: 1 },
        { fret: 19, finger: 2 },
        { fret: 21, finger: 4 },
      ],
      eStringHigh: [
        { fret: 20, finger: 1 },
        { fret: 21, finger: 2 },
        { fret: 23, finger: 4 },
      ],
    },
    position8: {
      eString: [{ fret: 24, finger: 1 }],
      aString: [{ fret: 21, finger: 1 }],
      dString: [{ fret: 20, finger: 1 }],
      gString: [{ fret: 20, finger: 1 }],
      bString: [{ fret: 22, finger: 1 }],
      eStringHigh: [{ fret: 24, finger: 1 }],
    },
  },
  fSharpGFlatLydian: {
    position1: {
      eString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      aString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      dString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      gString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      bString: [
        { fret: 5, finger: 1 },
        { fret: 6, finger: 2 },
        { fret: 8, finger: 4 },
      ],
      eStringHigh: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      aString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      dString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      gString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      bString: [
        { fret: 8, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 11, finger: 4 },
      ],
      eStringHigh: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 13, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      aString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      dString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      gString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      bString: [
        { fret: 10, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 13, finger: 4 },
      ],
      eStringHigh: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      aString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      dString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      gString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      bString: [
        { fret: 13, finger: 1 },
        { fret: 14, finger: 2 },
        { fret: 16, finger: 4 },
      ],
      eStringHigh: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 18, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      aString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      dString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      gString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      bString: [
        { fret: 15, finger: 1 },
        { fret: 16, finger: 2 },
        { fret: 18, finger: 4 },
      ],
      eStringHigh: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 19, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 18, finger: 1 },
        { fret: 19, finger: 2 },
        { fret: 21, finger: 4 },
      ],
      aString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      dString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      gString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      bString: [
        { fret: 17, finger: 1 },
        { fret: 18, finger: 2 },
        { fret: 20, finger: 4 },
      ],
      eStringHigh: [
        { fret: 18, finger: 1 },
        { fret: 19, finger: 2 },
        { fret: 21, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 20, finger: 1 },
        { fret: 21, finger: 2 },
      ],
      aString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
      ],
      dString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
      ],
      gString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
      ],
      bString: [
        { fret: 19, finger: 1 },
        { fret: 20, finger: 2 },
      ],
      eStringHigh: [
        { fret: 20, finger: 1 },
        { fret: 21, finger: 2 },
      ],
    },
    position8: {
      eString: [{ fret: 24, finger: 1 }],
      aString: [{ fret: 21, finger: 1 }],
      dString: [{ fret: 20, finger: 1 }],
      gString: [{ fret: 20, finger: 1 }],
      bString: [{ fret: 22, finger: 1 }],
      eStringHigh: [{ fret: 24, finger: 1 }],
    },
  },
  gLydian: {
    position1: {
      eString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      aString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      dString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      gString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      bString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      eStringHigh: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 7, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 7, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 10, finger: 4 },
      ],
      aString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      dString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      gString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      bString: [
        { fret: 7, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 10, finger: 4 },
      ],
      eStringHigh: [
        { fret: 7, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 10, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      aString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      dString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      gString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      bString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      eStringHigh: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 17, finger: 4 },
      ],
      aString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      dString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      gString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      bString: [
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 17, finger: 4 },
      ],
      eStringHigh: [
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 17, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      aString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      dString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      gString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      bString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      eStringHigh: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 21, finger: 1 },
        { fret: 22, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      aString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      dString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      gString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      bString: [
        { fret: 21, finger: 1 },
        { fret: 22, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      eStringHigh: [
        { fret: 21, finger: 1 },
        { fret: 22, finger: 2 },
        { fret: 24, finger: 4 },
      ],
    },
    position7: {
      eString: [{ fret: 24, finger: 1 }],
      aString: [{ fret: 22, finger: 1 }],
      dString: [{ fret: 21, finger: 1 }],
      gString: [{ fret: 21, finger: 1 }],
      bString: [{ fret: 24, finger: 1 }],
      eStringHigh: [{ fret: 24, finger: 1 }],
    },
    position8: {
      eString: [{ fret: 24, finger: 1 }],
      aString: [{ fret: 22, finger: 1 }],
      dString: [{ fret: 21, finger: 1 }],
      gString: [{ fret: 21, finger: 1 }],
      bString: [{ fret: 24, finger: 1 }],
      eStringHigh: [{ fret: 24, finger: 1 }],
    },
  },
  gSharpAFlatLydian: {
    position1: {
      eString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      aString: [
        { fret: 3, finger: 1 },
        { fret: 4, finger: 2 },
        { fret: 6, finger: 4 },
      ],
      dString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      gString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      bString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      eStringHigh: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 8, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 8, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 11, finger: 4 },
      ],
      aString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      dString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      gString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      bString: [
        { fret: 8, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 11, finger: 4 },
      ],
      eStringHigh: [
        { fret: 8, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 11, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      aString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      dString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      gString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      bString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      eStringHigh: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 15, finger: 1 },
        { fret: 16, finger: 2 },
        { fret: 18, finger: 4 },
      ],
      aString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      dString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      gString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      bString: [
        { fret: 15, finger: 1 },
        { fret: 16, finger: 2 },
        { fret: 18, finger: 4 },
      ],
      eStringHigh: [
        { fret: 15, finger: 1 },
        { fret: 16, finger: 2 },
        { fret: 18, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      aString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      dString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      gString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      bString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      eStringHigh: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      aString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 23, finger: 4 },
      ],
      dString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      gString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      bString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      eStringHigh: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
    },
    position7: {
      eString: [{ fret: 24, finger: 1 }],
      aString: [{ fret: 23, finger: 1 }],
      dString: [{ fret: 21, finger: 1 }],
      gString: [{ fret: 21, finger: 1 }],
      bString: [{ fret: 24, finger: 1 }],
      eStringHigh: [{ fret: 24, finger: 1 }],
    },
    position8: {
      eString: [{ fret: 24, finger: 1 }],
      aString: [{ fret: 23, finger: 1 }],
      dString: [{ fret: 21, finger: 1 }],
      gString: [{ fret: 21, finger: 1 }],
      bString: [{ fret: 24, finger: 1 }],
      eStringHigh: [{ fret: 24, finger: 1 }],
    },
  },
  aLydian: {
    position1: {
      eString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      aString: [
        { fret: 4, finger: 1 },
        { fret: 5, finger: 2 },
        { fret: 7, finger: 4 },
      ],
      dString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      gString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      bString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      eStringHigh: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 9, finger: 1 },
        { fret: 10, finger: 2 },
        { fret: 12, finger: 4 },
      ],
      aString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      dString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      gString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      bString: [
        { fret: 9, finger: 1 },
        { fret: 10, finger: 2 },
        { fret: 12, finger: 4 },
      ],
      eStringHigh: [
        { fret: 9, finger: 1 },
        { fret: 10, finger: 2 },
        { fret: 12, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      aString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      dString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      gString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      bString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      eStringHigh: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 19, finger: 4 },
      ],
      aString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      dString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      gString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      bString: [
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 19, finger: 4 },
      ],
      eStringHigh: [
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 19, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      aString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      dString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      gString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      bString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      eStringHigh: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 3 },
      ],
      aString: [
        { fret: 21, finger: 1 },
        { fret: 22, finger: 2 },
      ],
      dString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
      ],
      gString: [
        { fret: 18, finger: 1 },
        { fret: 19, finger: 2 },
      ],
      bString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 3 },
      ],
      eStringHigh: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 3 },
      ],
    },
    position7: {
      eString: [{ fret: 24, finger: 1 }],
      aString: [{ fret: 22, finger: 1 }],
      dString: [{ fret: 20, finger: 1 }],
      gString: [{ fret: 19, finger: 1 }],
      bString: [{ fret: 24, finger: 1 }],
      eStringHigh: [{ fret: 24, finger: 1 }],
    },
    position8: {
      eString: [{ fret: 24, finger: 1 }],
      aString: [{ fret: 22, finger: 1 }],
      dString: [{ fret: 20, finger: 1 }],
      gString: [{ fret: 19, finger: 1 }],
      bString: [{ fret: 24, finger: 1 }],
      eStringHigh: [{ fret: 24, finger: 1 }],
    },
  },
  aSharpBFlatLydian: {
    position1: {
      eString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      aString: [
        { fret: 5, finger: 1 },
        { fret: 6, finger: 2 },
        { fret: 8, finger: 4 },
      ],
      dString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      gString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      bString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      eStringHigh: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 10, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 13, finger: 4 },
      ],
      aString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      dString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      gString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      bString: [
        { fret: 10, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 13, finger: 4 },
      ],
      eStringHigh: [
        { fret: 10, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 13, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      aString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      dString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      gString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      bString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      eStringHigh: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 17, finger: 1 },
        { fret: 18, finger: 2 },
        { fret: 20, finger: 4 },
      ],
      aString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      dString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      gString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      bString: [
        { fret: 17, finger: 1 },
        { fret: 18, finger: 2 },
        { fret: 20, finger: 4 },
      ],
      eStringHigh: [
        { fret: 17, finger: 1 },
        { fret: 18, finger: 2 },
        { fret: 20, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 23, finger: 4 },
      ],
      aString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      dString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      gString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      bString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 23, finger: 4 },
      ],
      eStringHigh: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 23, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 23, finger: 1 },
        { fret: 24, finger: 2 },
      ],
      aString: [
        { fret: 22, finger: 1 },
        { fret: 23, finger: 2 },
      ],
      dString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
      ],
      gString: [
        { fret: 18, finger: 1 },
        { fret: 19, finger: 2 },
      ],
      bString: [
        { fret: 23, finger: 1 },
        { fret: 24, finger: 2 },
      ],
      eStringHigh: [
        { fret: 23, finger: 1 },
        { fret: 24, finger: 2 },
      ],
    },
    position7: {
      eString: [{ fret: 24, finger: 1 }],
      aString: [{ fret: 23, finger: 1 }],
      dString: [{ fret: 21, finger: 1 }],
      gString: [{ fret: 19, finger: 1 }],
      bString: [{ fret: 24, finger: 1 }],
      eStringHigh: [{ fret: 24, finger: 1 }],
    },
    position8: {
      eString: [{ fret: 24, finger: 1 }],
      aString: [{ fret: 23, finger: 1 }],
      dString: [{ fret: 21, finger: 1 }],
      gString: [{ fret: 19, finger: 1 }],
      bString: [{ fret: 24, finger: 1 }],
      eStringHigh: [{ fret: 24, finger: 1 }],
    },
  },
  bLydian: {
    position1: {
      eString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      aString: [
        { fret: 6, finger: 1 },
        { fret: 7, finger: 2 },
        { fret: 9, finger: 4 },
      ],
      dString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      gString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      bString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      eStringHigh: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 11, finger: 1 },
        { fret: 12, finger: 2 },
        { fret: 14, finger: 4 },
      ],
      aString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      dString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      gString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      bString: [
        { fret: 11, finger: 1 },
        { fret: 12, finger: 2 },
        { fret: 14, finger: 4 },
      ],
      eStringHigh: [
        { fret: 11, finger: 1 },
        { fret: 12, finger: 2 },
        { fret: 14, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      aString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      dString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      gString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      bString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      eStringHigh: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 18, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 18, finger: 1 },
        { fret: 19, finger: 2 },
        { fret: 21, finger: 4 },
      ],
      aString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      dString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      gString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      bString: [
        { fret: 18, finger: 1 },
        { fret: 19, finger: 2 },
        { fret: 21, finger: 4 },
      ],
      eStringHigh: [
        { fret: 18, finger: 1 },
        { fret: 19, finger: 2 },
        { fret: 21, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      aString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 23, finger: 4 },
      ],
      dString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      gString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      bString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      eStringHigh: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
    },
    position6: {
      eString: [{ fret: 24, finger: 1 }],
      aString: [{ fret: 23, finger: 1 }],
      dString: [{ fret: 22, finger: 1 }],
      gString: [{ fret: 21, finger: 1 }],
      bString: [{ fret: 24, finger: 1 }],
      eStringHigh: [{ fret: 24, finger: 1 }],
    },
    position7: {
      eString: [{ fret: 24, finger: 1 }],
      aString: [{ fret: 23, finger: 1 }],
      dString: [{ fret: 22, finger: 1 }],
      gString: [{ fret: 21, finger: 1 }],
      bString: [{ fret: 24, finger: 1 }],
      eStringHigh: [{ fret: 24, finger: 1 }],
    },
    position8: {
      eString: [{ fret: 24, finger: 1 }],
      aString: [{ fret: 23, finger: 1 }],
      dString: [{ fret: 22, finger: 1 }],
      gString: [{ fret: 21, finger: 1 }],
      bString: [{ fret: 24, finger: 1 }],
      eStringHigh: [{ fret: 24, finger: 1 }],
    },
  },

  // Mixolydian //

  cMixolydian: {
    position1: {
      eString: [
        { fret: 0, finger: 0 },
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
      ],
      aString: [
        { fret: 0, finger: 0 },
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
      ],
      dString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 3, finger: 3 },
      ],
      gString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
      ],
      bString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
      ],
      eStringHigh: [
        { fret: 0, finger: 0 },
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
      ],
    },
    position2: {
      eString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      aString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      dString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      gString: [
        { fret: 2, finger: 1 },
        { fret: 3, finger: 2 },
        { fret: 5, finger: 4 },
      ],
      bString: [
        { fret: 3, finger: 1 },
        { fret: 6, finger: 4 },
      ],
      eStringHigh: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 6, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
      ],
      aString: [
        { fret: 7, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 10, finger: 4 },
      ],
      dString: [
        { fret: 7, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 10, finger: 4 },
      ],
      gString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      bString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
      ],
      eStringHigh: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
      ],
    },
    position4: {
      eString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      aString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
      ],
      dString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
      ],
      gString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      bString: [
        { fret: 8, finger: 1 },
        { fret: 11, finger: 4 },
      ],
      eStringHigh: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 11, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      aString: [
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
        { fret: 15, finger: 4 },
      ],
      dString: [
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
        { fret: 15, finger: 4 },
      ],
      gString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      bString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      eStringHigh: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      aString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      dString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      gString: [
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 17, finger: 4 },
      ],
      bString: [
        { fret: 15, finger: 1 },
        { fret: 18, finger: 4 },
      ],
      eStringHigh: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 18, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      aString: [
        { fret: 19, finger: 1 },
        { fret: 20, finger: 2 },
        { fret: 22, finger: 4 },
      ],
      dString: [
        { fret: 19, finger: 1 },
        { fret: 20, finger: 2 },
        { fret: 22, finger: 4 },
      ],
      gString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      bString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      eStringHigh: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 22, finger: 4 },
      ],
    },
    position8: {
      eString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 3 },
      ],
      aString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 3 },
      ],
      dString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 3 },
      ],
      gString: [
        { fret: 21, finger: 1 },
        { fret: 22, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      bString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 3 },
      ],
      eStringHigh: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 3 },
      ],
    },
  },
  cSharpDFlatMixolydian: {
    position1: {
      eString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 4, finger: 4 },
      ],
      aString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 4, finger: 4 },
      ],
      dString: [
        { fret: 1, finger: 1 },
        { fret: 2, finger: 2 },
        { fret: 4, finger: 4 },
      ],
      gString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
      ],
      bString: [
        { fret: 2, finger: 2 },
        { fret: 4, finger: 4 },
      ],
      eStringHigh: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 4, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      aString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      dString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      gString: [
        { fret: 3, finger: 1 },
        { fret: 4, finger: 2 },
        { fret: 6, finger: 4 },
      ],
      bString: [
        { fret: 4, finger: 1 },
        { fret: 7, finger: 4 },
      ],
      eStringHigh: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
      ],
      aString: [
        { fret: 8, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 11, finger: 4 },
      ],
      dString: [
        { fret: 8, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 11, finger: 4 },
      ],
      gString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      bString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
      ],
      eStringHigh: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
      ],
    },
    position4: {
      eString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      aString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
      ],
      dString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
      ],
      gString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      bString: [
        { fret: 9, finger: 1 },
        { fret: 12, finger: 4 },
      ],
      eStringHigh: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 12, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      aString: [
        { fret: 13, finger: 1 },
        { fret: 14, finger: 2 },
        { fret: 16, finger: 4 },
      ],
      dString: [
        { fret: 13, finger: 1 },
        { fret: 14, finger: 2 },
        { fret: 16, finger: 4 },
      ],
      gString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      bString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      eStringHigh: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      aString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      dString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      gString: [
        { fret: 15, finger: 1 },
        { fret: 16, finger: 2 },
        { fret: 18, finger: 4 },
      ],
      bString: [
        { fret: 16, finger: 1 },
        { fret: 19, finger: 4 },
      ],
      eStringHigh: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 19, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 23, finger: 4 },
      ],
      aString: [
        { fret: 20, finger: 1 },
        { fret: 21, finger: 2 },
        { fret: 23, finger: 4 },
      ],
      dString: [
        { fret: 20, finger: 1 },
        { fret: 21, finger: 2 },
        { fret: 23, finger: 4 },
      ],
      gString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      bString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 23, finger: 4 },
      ],
      eStringHigh: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 23, finger: 4 },
      ],
    },
    position8: {
      eString: [{ fret: 23, finger: 1 }],
      aString: [{ fret: 23, finger: 1 }],
      dString: [{ fret: 23, finger: 1 }],
      gString: [
        { fret: 22, finger: 1 },
        { fret: 23, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      bString: [{ fret: 23, finger: 1 }],
      eStringHigh: [{ fret: 23, finger: 1 }],
    },
    position9: {
      eString: [{ fret: 24, finger: 1 }],
      aString: [{ fret: 24, finger: 1 }],
      dString: [{ fret: 24, finger: 1 }],
      gString: [{ fret: 24, finger: 1 }],
      bString: [{ fret: 24, finger: 1 }],
      eStringHigh: [{ fret: 24, finger: 1 }],
    },
  },
  dMixolydian: {
    position1: {
      eString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 3, finger: 3 },
      ],
      aString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 3, finger: 3 },
      ],
      dString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
      ],
      gString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
      ],
      bString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
      ],
      eStringHigh: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 3, finger: 3 },
      ],
    },
    position2: {
      eString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
      ],
      aString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
      ],
      dString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      gString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      bString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
      ],
      eStringHigh: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
      ],
    },
    position3: {
      eString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      aString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      dString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      gString: [
        { fret: 4, finger: 1 },
        { fret: 5, finger: 2 },
        { fret: 7, finger: 4 },
      ],
      bString: [
        { fret: 5, finger: 1 },
        { fret: 8, finger: 4 },
      ],
      eStringHigh: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 8, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
      ],
      aString: [
        { fret: 9, finger: 1 },
        { fret: 10, finger: 2 },
        { fret: 12, finger: 4 },
      ],
      dString: [
        { fret: 9, finger: 1 },
        { fret: 10, finger: 2 },
        { fret: 12, finger: 4 },
      ],
      gString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      bString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
      ],
      eStringHigh: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
      ],
    },
    position5: {
      eString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      aString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
      ],
      dString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
      ],
      gString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      bString: [
        { fret: 10, finger: 1 },
        { fret: 13, finger: 4 },
      ],
      eStringHigh: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 13, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      aString: [
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 17, finger: 4 },
      ],
      dString: [
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 17, finger: 4 },
      ],
      gString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      bString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      eStringHigh: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      aString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      dString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      gString: [
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 19, finger: 4 },
      ],
      bString: [
        { fret: 17, finger: 1 },
        { fret: 20, finger: 4 },
      ],
      eStringHigh: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 20, finger: 4 },
      ],
    },
    position8: {
      eString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      aString: [
        { fret: 21, finger: 1 },
        { fret: 22, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      dString: [
        { fret: 21, finger: 1 },
        { fret: 22, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      gString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      bString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      eStringHigh: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 24, finger: 4 },
      ],
    },
    position9: {
      eString: [{ fret: 24, finger: 1 }],
      aString: [{ fret: 24, finger: 1 }],
      dString: [{ fret: 24, finger: 1 }],
      gString: [
        { fret: 23, finger: 1 },
        { fret: 24, finger: 2 },
      ],
      bString: [{ fret: 24, finger: 1 }],
      eStringHigh: [{ fret: 24, finger: 1 }],
    },
  },
  dSharpMixolydian: {
    position1: {
      eString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
      ],
      aString: [
        { fret: 1, finger: 1 },
        { fret: 2, finger: 2 },
        { fret: 4, finger: 4 },
      ],
      dString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
      ],
      gString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
      ],
      bString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
      ],
      eStringHigh: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
      ],
    },
    position2: {
      eString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      aString: [
        { fret: 6, finger: 1 },
        { fret: 7, finger: 2 },
        { fret: 9, finger: 4 },
      ],
      dString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      gString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
      ],
      bString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
      ],
      eStringHigh: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
      ],
    },
    position3: {
      eString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
      ],
      aString: [
        { fret: 11, finger: 1 },
        { fret: 12, finger: 2 },
        { fret: 14, finger: 4 },
      ],
      dString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
      ],
      gString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
      ],
      bString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
      ],
      eStringHigh: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
      ],
    },
    position4: {
      eString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
      ],
      aString: [
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 18, finger: 3 },
      ],
      dString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
      ],
      gString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
      ],
      bString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
      ],
      eStringHigh: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
      ],
    },
    position5: {
      eString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
      ],
      aString: [
        { fret: 1, finger: 1 },
        { fret: 2, finger: 2 },
        { fret: 4, finger: 4 },
      ],
      dString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
      ],
      gString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
      ],
      bString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
      ],
      eStringHigh: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
      ],
    },
    position6: {
      eString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
      ],
      aString: [
        { fret: 6, finger: 1 },
        { fret: 7, finger: 2 },
        { fret: 9, finger: 4 },
      ],
      dString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
      ],
      gString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
      ],
      bString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
      ],
      eStringHigh: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
      ],
    },
    position7: {
      eString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
      ],
      aString: [
        { fret: 11, finger: 1 },
        { fret: 12, finger: 2 },
        { fret: 13, finger: 3 },
      ],
      dString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
      ],
      gString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
      ],
      bString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
      ],
      eStringHigh: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
      ],
    },
    position8: {
      eString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
      ],
      aString: [
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 18, finger: 3 },
      ],
      dString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
      ],
      gString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
      ],
      bString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
      ],
      eStringHigh: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
      ],
    },
  },
  eMixolydian: {
    position1: {
      eString: [
        { fret: 0, finger: 1 },
        { fret: 2, finger: 3 },
        { fret: 4, finger: 4 },
      ],
      aString: [
        { fret: 0, finger: 1 },
        { fret: 2, finger: 3 },
        { fret: 3, finger: 4 },
      ],
      dString: [
        { fret: 0, finger: 1 },
        { fret: 2, finger: 3 },
      ],
      gString: [
        { fret: 0, finger: 1 },
        { fret: 2, finger: 3 },
      ],
      bString: [
        { fret: 0, finger: 1 },
        { fret: 2, finger: 3 },
        { fret: 4, finger: 4 },
      ],
      eStringHigh: [
        { fret: 0, finger: 1 },
        { fret: 2, finger: 3 },
        { fret: 4, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      aString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      dString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
      ],
      gString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
      ],
      bString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      eStringHigh: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      aString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      dString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
      ],
      gString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
      ],
      bString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      eStringHigh: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      aString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      dString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
      ],
      gString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
      ],
      bString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      eStringHigh: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 0, finger: 1 },
        { fret: 2, finger: 3 },
        { fret: 4, finger: 4 },
      ],
      aString: [
        { fret: 0, finger: 1 },
        { fret: 2, finger: 3 },
        { fret: 3, finger: 4 },
      ],
      dString: [
        { fret: 0, finger: 1 },
        { fret: 2, finger: 3 },
      ],
      gString: [
        { fret: 0, finger: 1 },
        { fret: 2, finger: 3 },
      ],
      bString: [
        { fret: 0, finger: 1 },
        { fret: 2, finger: 3 },
        { fret: 4, finger: 4 },
      ],
      eStringHigh: [
        { fret: 0, finger: 1 },
        { fret: 2, finger: 3 },
        { fret: 4, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      aString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      dString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
      ],
      gString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
      ],
      bString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      eStringHigh: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      aString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      dString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
      ],
      gString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
      ],
      bString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      eStringHigh: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
      ],
    },
    position8: {
      eString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      aString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      dString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
      ],
      gString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
      ],
      bString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      eStringHigh: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
      ],
    },
  },
  fMixolydian: {
    position1: {
      eString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      aString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
      ],
      dString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
      ],
      gString: [
        { fret: 1, finger: 1 },
        { fret: 2, finger: 2 },
      ],
      bString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      eStringHigh: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      aString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      dString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
      ],
      gString: [
        { fret: 6, finger: 1 },
        { fret: 7, finger: 2 },
      ],
      bString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      eStringHigh: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      aString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      dString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
      ],
      gString: [
        { fret: 11, finger: 1 },
        { fret: 12, finger: 2 },
      ],
      bString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      eStringHigh: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      aString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      dString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
      ],
      gString: [
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
      ],
      bString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      eStringHigh: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 20, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      aString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
      ],
      dString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
      ],
      gString: [
        { fret: 1, finger: 1 },
        { fret: 2, finger: 2 },
      ],
      bString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      eStringHigh: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      aString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      dString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
      ],
      gString: [
        { fret: 6, finger: 1 },
        { fret: 7, finger: 2 },
      ],
      bString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      eStringHigh: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      aString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      dString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
      ],
      gString: [
        { fret: 11, finger: 1 },
        { fret: 12, finger: 2 },
      ],
      bString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      eStringHigh: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
    },
    position8: {
      eString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      aString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      dString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
      ],
      gString: [
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
      ],
      bString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      eStringHigh: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 20, finger: 4 },
      ],
    },
  },
  fSharpMixolydian: {
    position1: {
      eString: [
        { fret: 2, finger: 2 },
        { fret: 4, finger: 4 },
      ],
      aString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 4, finger: 4 },
      ],
      dString: [
        { fret: 1, finger: 1 },
        { fret: 2, finger: 2 },
        { fret: 4, finger: 4 },
      ],
      gString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
      ],
      bString: [
        { fret: 2, finger: 2 },
        { fret: 4, finger: 4 },
      ],
      eStringHigh: [
        { fret: 2, finger: 2 },
        { fret: 4, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      aString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      dString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      gString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      bString: [
        { fret: 5, finger: 2 },
        { fret: 7, finger: 4 },
      ],
      eStringHigh: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      aString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      dString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      gString: [
        { fret: 8, finger: 2 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      bString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      eStringHigh: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 11, finger: 1 },
        { fret: 12, finger: 2 },
        { fret: 14, finger: 4 },
      ],
      aString: [
        { fret: 11, finger: 1 },
        { fret: 12, finger: 2 },
        { fret: 14, finger: 4 },
      ],
      dString: [
        { fret: 11, finger: 1 },
        { fret: 12, finger: 2 },
        { fret: 14, finger: 4 },
      ],
      gString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      bString: [
        { fret: 11, finger: 1 },
        { fret: 12, finger: 2 },
        { fret: 14, finger: 4 },
      ],
      eStringHigh: [
        { fret: 11, finger: 1 },
        { fret: 12, finger: 2 },
        { fret: 14, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      aString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      dString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      gString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      bString: [
        { fret: 15, finger: 2 },
        { fret: 17, finger: 4 },
      ],
      eStringHigh: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 17, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      aString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      dString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      gString: [
        { fret: 18, finger: 2 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      bString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      eStringHigh: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 21, finger: 1 },
        { fret: 22, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      aString: [
        { fret: 21, finger: 1 },
        { fret: 22, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      dString: [
        { fret: 21, finger: 1 },
        { fret: 22, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      gString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      bString: [
        { fret: 21, finger: 1 },
        { fret: 22, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      eStringHigh: [
        { fret: 21, finger: 1 },
        { fret: 22, finger: 2 },
        { fret: 24, finger: 4 },
      ],
    },
    position8: {
      eString: [],
      aString: [],
      dString: [],
      gString: [],
      bString: [],
      eStringHigh: [],
    },
  },
  gMixolydian: {
    position1: {
      eString: [
        { fret: 3, finger: 2 },
        { fret: 5, finger: 4 },
      ],
      aString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      dString: [
        { fret: 2, finger: 2 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      gString: [
        { fret: 2, finger: 2 },
        { fret: 4, finger: 4 },
      ],
      bString: [
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      eStringHigh: [
        { fret: 3, finger: 2 },
        { fret: 5, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      aString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      dString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      gString: [
        { fret: 4, finger: 1 },
        { fret: 5, finger: 2 },
        { fret: 7, finger: 4 },
      ],
      bString: [
        { fret: 5, finger: 1 },
        { fret: 8, finger: 4 },
      ],
      eStringHigh: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 8, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      aString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      dString: [
        { fret: 9, finger: 2 },
        { fret: 10, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      gString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      bString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      eStringHigh: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 12, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      aString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      dString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      gString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      bString: [
        { fret: 13, finger: 2 },
        { fret: 15, finger: 4 },
      ],
      eStringHigh: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 15, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      aString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      dString: [
        { fret: 16, finger: 2 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      gString: [
        { fret: 16, finger: 2 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      bString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      eStringHigh: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 19, finger: 1 },
        { fret: 20, finger: 2 },
        { fret: 22, finger: 4 },
      ],
      aString: [
        { fret: 19, finger: 1 },
        { fret: 20, finger: 2 },
        { fret: 22, finger: 4 },
      ],
      dString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      gString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      bString: [
        { fret: 19, finger: 1 },
        { fret: 20, finger: 2 },
        { fret: 22, finger: 4 },
      ],
      eStringHigh: [
        { fret: 19, finger: 1 },
        { fret: 20, finger: 2 },
        { fret: 22, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      aString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      dString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      gString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      bString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      eStringHigh: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
    },
    position8: {
      eString: [],
      aString: [],
      dString: [],
      gString: [],
      bString: [],
      eStringHigh: [],
    },
  },
  gSharpMixolydian: {
    position1: {
      eString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
      ],
      aString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      dString: [
        { fret: 3, finger: 2 },
        { fret: 4, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      gString: [
        { fret: 3, finger: 2 },
        { fret: 5, finger: 4 },
      ],
      bString: [
        { fret: 4, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      eStringHigh: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
      ],
    },
    position2: {
      eString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      aString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      dString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      gString: [
        { fret: 5, finger: 1 },
        { fret: 6, finger: 2 },
        { fret: 8, finger: 4 },
      ],
      bString: [
        { fret: 6, finger: 1 },
        { fret: 9, finger: 4 },
      ],
      eStringHigh: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 9, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      aString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      dString: [
        { fret: 10, finger: 2 },
        { fret: 11, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      gString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      bString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      eStringHigh: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 13, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      aString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      dString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      gString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      bString: [
        { fret: 14, finger: 2 },
        { fret: 16, finger: 4 },
      ],
      eStringHigh: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 16, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      aString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      dString: [
        { fret: 17, finger: 2 },
        { fret: 18, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      gString: [
        { fret: 17, finger: 2 },
        { fret: 18, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      bString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      eStringHigh: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 20, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 20, finger: 1 },
        { fret: 21, finger: 2 },
        { fret: 23, finger: 4 },
      ],
      aString: [
        { fret: 20, finger: 1 },
        { fret: 21, finger: 2 },
        { fret: 23, finger: 4 },
      ],
      dString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 23, finger: 4 },
      ],
      gString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 23, finger: 4 },
      ],
      bString: [
        { fret: 20, finger: 1 },
        { fret: 21, finger: 2 },
        { fret: 23, finger: 4 },
      ],
      eStringHigh: [
        { fret: 20, finger: 1 },
        { fret: 21, finger: 2 },
        { fret: 23, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 23, finger: 1 },
        { fret: 25, finger: 4 },
      ],
      aString: [
        { fret: 23, finger: 1 },
        { fret: 25, finger: 4 },
      ],
      dString: [
        { fret: 23, finger: 1 },
        { fret: 25, finger: 4 },
      ],
      gString: [
        { fret: 23, finger: 1 },
        { fret: 25, finger: 4 },
      ],
      bString: [
        { fret: 23, finger: 1 },
        { fret: 25, finger: 4 },
      ],
      eStringHigh: [
        { fret: 23, finger: 1 },
        { fret: 25, finger: 4 },
      ],
    },
    position8: {
      eString: [],
      aString: [],
      dString: [],
      gString: [],
      bString: [],
      eStringHigh: [],
    },
  },
  aMixolydian: {
    position1: {
      eString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 3, finger: 3 },
      ],
      aString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 3, finger: 3 },
      ],
      dString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
      ],
      gString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
      ],
      bString: [
        { fret: 2, finger: 2 },
        { fret: 3, finger: 3 },
      ],
      eStringHigh: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 3, finger: 3 },
      ],
    },
    position2: {
      eString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
      ],
      aString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
      ],
      dString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      gString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      bString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
      ],
      eStringHigh: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
      ],
    },
    position3: {
      eString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      aString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      dString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      gString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      bString: [
        { fret: 5, finger: 1 },
        { fret: 8, finger: 4 },
      ],
      eStringHigh: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 8, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      aString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      dString: [
        { fret: 9, finger: 2 },
        { fret: 10, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      gString: [
        { fret: 9, finger: 2 },
        { fret: 11, finger: 4 },
      ],
      bString: [
        { fret: 10, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      eStringHigh: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 12, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      aString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      dString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      gString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      bString: [
        { fret: 13, finger: 2 },
        { fret: 15, finger: 4 },
      ],
      eStringHigh: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 15, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      aString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      dString: [
        { fret: 16, finger: 2 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      gString: [
        { fret: 16, finger: 2 },
        { fret: 18, finger: 4 },
      ],
      bString: [
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      eStringHigh: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 19, finger: 1 },
        { fret: 20, finger: 2 },
        { fret: 22, finger: 4 },
      ],
      aString: [
        { fret: 19, finger: 1 },
        { fret: 20, finger: 2 },
        { fret: 22, finger: 4 },
      ],
      dString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      gString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 23, finger: 4 },
      ],
      bString: [
        { fret: 20, finger: 2 },
        { fret: 22, finger: 4 },
      ],
      eStringHigh: [
        { fret: 19, finger: 1 },
        { fret: 20, finger: 2 },
        { fret: 22, finger: 4 },
      ],
    },
    position8: {
      eString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      aString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      dString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      gString: [
        { fret: 23, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      bString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      eStringHigh: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
    },
  },
  aSharpMixolydian: {
    position1: {
      eString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
      ],
      aString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
      ],
      dString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
      ],
      gString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
      ],
      bString: [
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
      ],
      eStringHigh: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
      ],
      aString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
      ],
      dString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      gString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      bString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
      ],
      eStringHigh: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
      ],
    },
    position3: {
      eString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      aString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      dString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      gString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      bString: [
        { fret: 6, finger: 1 },
        { fret: 9, finger: 4 },
      ],
      eStringHigh: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 9, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      aString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      dString: [
        { fret: 10, finger: 2 },
        { fret: 11, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      gString: [
        { fret: 10, finger: 2 },
        { fret: 12, finger: 4 },
      ],
      bString: [
        { fret: 11, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      eStringHigh: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 13, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      aString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      dString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      gString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      bString: [
        { fret: 14, finger: 2 },
        { fret: 16, finger: 4 },
      ],
      eStringHigh: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 16, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      aString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      dString: [
        { fret: 17, finger: 2 },
        { fret: 18, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      gString: [
        { fret: 17, finger: 2 },
        { fret: 19, finger: 4 },
      ],
      bString: [
        { fret: 18, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      eStringHigh: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 20, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 20, finger: 1 },
        { fret: 21, finger: 2 },
        { fret: 23, finger: 4 },
      ],
      aString: [
        { fret: 20, finger: 1 },
        { fret: 21, finger: 2 },
        { fret: 23, finger: 4 },
      ],
      dString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 23, finger: 4 },
      ],
      gString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      bString: [
        { fret: 21, finger: 2 },
        { fret: 23, finger: 4 },
      ],
      eStringHigh: [
        { fret: 20, finger: 1 },
        { fret: 21, finger: 2 },
        { fret: 23, finger: 4 },
      ],
    },
    position8: {
      eString: [
        { fret: 23, finger: 1 },
        { fret: 25, finger: 4 },
      ],
      aString: [
        { fret: 23, finger: 1 },
        { fret: 25, finger: 4 },
      ],
      dString: [
        { fret: 23, finger: 1 },
        { fret: 25, finger: 4 },
      ],
      gString: [{ fret: 24, finger: 2 }],
      bString: [
        { fret: 23, finger: 1 },
        { fret: 25, finger: 4 },
      ],
      eStringHigh: [
        { fret: 23, finger: 1 },
        { fret: 25, finger: 4 },
      ],
    },
  },
  bMixolydian: {
    position1: {
      eString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      aString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      dString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
      ],
      gString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
      ],
      bString: [
        { fret: 4, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      eStringHigh: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 5, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
      ],
      aString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
      ],
      dString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      gString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      bString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
      ],
      eStringHigh: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
      ],
    },
    position3: {
      eString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      aString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      dString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      gString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      bString: [
        { fret: 7, finger: 1 },
        { fret: 10, finger: 4 },
      ],
      eStringHigh: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 10, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      aString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      dString: [
        { fret: 11, finger: 2 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      gString: [
        { fret: 11, finger: 2 },
        { fret: 13, finger: 4 },
      ],
      bString: [
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      eStringHigh: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      aString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      dString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      gString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      bString: [
        { fret: 15, finger: 2 },
        { fret: 17, finger: 4 },
      ],
      eStringHigh: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 17, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      aString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      dString: [
        { fret: 18, finger: 2 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      gString: [
        { fret: 18, finger: 2 },
        { fret: 20, finger: 4 },
      ],
      bString: [
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      eStringHigh: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 21, finger: 1 },
        { fret: 22, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      aString: [
        { fret: 21, finger: 1 },
        { fret: 22, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      dString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      gString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 25, finger: 4 },
      ],
      bString: [
        { fret: 22, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      eStringHigh: [
        { fret: 21, finger: 1 },
        { fret: 22, finger: 2 },
        { fret: 24, finger: 4 },
      ],
    },
    position8: {
      eString: [{ fret: 24, finger: 1 }],
      aString: [{ fret: 24, finger: 1 }],
      dString: [{ fret: 24, finger: 1 }],
      gString: [{ fret: 25, finger: 2 }],
      bString: [{ fret: 24, finger: 1 }],
      eStringHigh: [{ fret: 24, finger: 1 }],
    },
  },

  // DORIAN //

  cDorian: {
    position1: {
      eString: [
        { fret: 0, finger: 0 },
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
      ],
      aString: [
        { fret: 0, finger: 0 },
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
      ],
      dString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 3, finger: 3 },
      ],
      gString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 3, finger: 3 },
      ],
      bString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
      ],
      eStringHigh: [
        { fret: 0, finger: 0 },
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
      ],
    },
    position2: {
      eString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
      ],
      aString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      dString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      gString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      bString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      eStringHigh: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
      ],
    },
    position3: {
      eString: [
        { fret: 5, finger: 1 },
        { fret: 6, finger: 2 },
        { fret: 8, finger: 4 },
      ],
      aString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      dString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      gString: [
        { fret: 7, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 10, finger: 4 },
      ],
      bString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      eStringHigh: [
        { fret: 5, finger: 1 },
        { fret: 6, finger: 2 },
        { fret: 8, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      aString: [
        { fret: 9, finger: 1 },
        { fret: 10, finger: 2 },
        { fret: 12, finger: 4 },
      ],
      dString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      gString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      bString: [
        { fret: 9, finger: 1 },
        { fret: 10, finger: 2 },
        { fret: 11, finger: 3 },
      ],
      eStringHigh: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 11, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      aString: [
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
        { fret: 15, finger: 4 },
      ],
      dString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      gString: [
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 17, finger: 4 },
      ],
      bString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      eStringHigh: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      aString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      dString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      gString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      bString: [
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 18, finger: 3 },
      ],
      eStringHigh: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 18, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      aString: [
        { fret: 19, finger: 1 },
        { fret: 20, finger: 2 },
        { fret: 22, finger: 4 },
      ],
      dString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      gString: [
        { fret: 21, finger: 1 },
        { fret: 22, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      bString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 23, finger: 4 },
      ],
      eStringHigh: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 22, finger: 4 },
      ],
    },
    position8: {
      eString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      aString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      dString: [{ fret: 24, finger: 1 }],
      gString: [{ fret: 24, finger: 1 }],
      bString: [
        { fret: 23, finger: 1 },
        { fret: 24, finger: 2 },
      ],
      eStringHigh: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
    },
  },
  cSharpDFlatDorian: {
    position1: {
      eString: [
        { fret: 1, finger: 1 },
        { fret: 2, finger: 2 },
        { fret: 4, finger: 4 },
      ],
      aString: [
        { fret: 1, finger: 1 },
        { fret: 2, finger: 2 },
        { fret: 4, finger: 4 },
      ],
      dString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
      ],
      gString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
      ],
      bString: [
        { fret: 2, finger: 2 },
        { fret: 4, finger: 4 },
      ],
      eStringHigh: [
        { fret: 1, finger: 1 },
        { fret: 2, finger: 2 },
        { fret: 4, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      aString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      dString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      gString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      bString: [
        { fret: 5, finger: 2 },
        { fret: 7, finger: 4 },
      ],
      eStringHigh: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      aString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      dString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      gString: [
        { fret: 8, finger: 2 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      bString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      eStringHigh: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      aString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      dString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      gString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      bString: [
        { fret: 12, finger: 2 },
        { fret: 14, finger: 4 },
      ],
      eStringHigh: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 14, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      aString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      dString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      gString: [
        { fret: 15, finger: 2 },
        { fret: 16, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      bString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      eStringHigh: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 18, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      aString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      dString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      gString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      bString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      eStringHigh: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      aString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      dString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      gString: [
        { fret: 22, finger: 2 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      bString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      eStringHigh: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
    },
    position8: {
      eString: [],
      aString: [],
      dString: [],
      gString: [],
      bString: [],
      eStringHigh: [],
    },
  },
  dDorian: {
    position1: {
      eString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 3, finger: 3 },
      ],
      aString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      dString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      gString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 4, finger: 4 },
      ],
      bString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      eStringHigh: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 3, finger: 3 },
      ],
    },
    position2: {
      eString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      aString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
      ],
      dString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
      ],
      gString: [
        { fret: 4, finger: 1 },
        { fret: 5, finger: 2 },
        { fret: 7, finger: 4 },
      ],
      bString: [
        { fret: 5, finger: 1 },
        { fret: 6, finger: 2 },
        { fret: 8, finger: 4 },
      ],
      eStringHigh: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 6, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      aString: [
        { fret: 7, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 10, finger: 4 },
      ],
      dString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      gString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      bString: [
        { fret: 8, finger: 2 },
        { fret: 10, finger: 4 },
      ],
      eStringHigh: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      aString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      dString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      gString: [
        { fret: 11, finger: 2 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      bString: [
        { fret: 10, finger: 1 },
        { fret: 13, finger: 4 },
      ],
      eStringHigh: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 13, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      aString: [
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 17, finger: 4 },
      ],
      dString: [
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 17, finger: 4 },
      ],
      gString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      bString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      eStringHigh: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      aString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      dString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      gString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      bString: [
        { fret: 17, finger: 1 },
        { fret: 20, finger: 4 },
      ],
      eStringHigh: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 20, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      aString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      dString: [
        { fret: 21, finger: 2 },
        { fret: 22, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      gString: [
        { fret: 21, finger: 2 },
        { fret: 23, finger: 4 },
      ],
      bString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      eStringHigh: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 24, finger: 4 },
      ],
    },
    position8: {
      eString: [{ fret: 24, finger: 1 }],
      aString: [{ fret: 24, finger: 1 }],
      dString: [{ fret: 24, finger: 1 }],
      gString: [{ fret: 24, finger: 1 }],
      bString: [{ fret: 24, finger: 1 }],
      eStringHigh: [{ fret: 24, finger: 1 }],
    },
  },
  dSharpEFlatDorian: {
    position1: {
      eString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
      ],
      aString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
        { fret: 6, finger: 4 },
      ],
      dString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
        { fret: 6, finger: 4 },
      ],
      gString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      bString: [
        { fret: 2, finger: 2 },
        { fret: 4, finger: 4 },
        { fret: 6, finger: 4 },
      ],
      eStringHigh: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      aString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
      ],
      dString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
      ],
      gString: [
        { fret: 5, finger: 1 },
        { fret: 6, finger: 2 },
        { fret: 8, finger: 4 },
      ],
      bString: [
        { fret: 6, finger: 1 },
        { fret: 7, finger: 2 },
        { fret: 9, finger: 4 },
      ],
      eStringHigh: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      aString: [
        { fret: 8, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 11, finger: 4 },
      ],
      dString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      gString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      bString: [
        { fret: 9, finger: 2 },
        { fret: 11, finger: 4 },
      ],
      eStringHigh: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      aString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      dString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      gString: [
        { fret: 12, finger: 2 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      bString: [
        { fret: 11, finger: 1 },
        { fret: 14, finger: 4 },
      ],
      eStringHigh: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 14, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      aString: [
        { fret: 15, finger: 1 },
        { fret: 16, finger: 2 },
        { fret: 18, finger: 4 },
      ],
      dString: [
        { fret: 15, finger: 1 },
        { fret: 16, finger: 2 },
        { fret: 18, finger: 4 },
      ],
      gString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      bString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      eStringHigh: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 18, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      aString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      dString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      gString: [
        { fret: 19, finger: 2 },
        { fret: 20, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      bString: [
        { fret: 18, finger: 1 },
        { fret: 21, finger: 4 },
      ],
      eStringHigh: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      aString: [
        { fret: 22, finger: 1 },
        { fret: 23, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      dString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 3 },
      ],
      gString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 3 },
      ],
      bString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      eStringHigh: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
    },
    position8: {
      eString: [],
      aString: [],
      dString: [],
      gString: [],
      bString: [],
      eStringHigh: [],
    },
  },
  eDorian: {
    position1: {
      eString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      aString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 5, finger: 4 },
      ],
      dString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 4, finger: 4 },
      ],
      gString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 4, finger: 4 },
      ],
      bString: [
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      eStringHigh: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
      ],
      aString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      dString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      gString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      bString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      eStringHigh: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
      ],
    },
    position3: {
      eString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      aString: [
        { fret: 9, finger: 1 },
        { fret: 10, finger: 2 },
        { fret: 12, finger: 4 },
      ],
      dString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      gString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      bString: [
        { fret: 8, finger: 2 },
        { fret: 10, finger: 4 },
      ],
      eStringHigh: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 10, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      aString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      dString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
      ],
      gString: [
        { fret: 11, finger: 2 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      bString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      eStringHigh: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 17, finger: 4 },
      ],
      aString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      dString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      gString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      bString: [
        { fret: 15, finger: 2 },
        { fret: 17, finger: 4 },
      ],
      eStringHigh: [
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 17, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      aString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
      ],
      dString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      gString: [
        { fret: 18, finger: 2 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      bString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      eStringHigh: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 21, finger: 1 },
        { fret: 22, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      aString: [
        { fret: 21, finger: 1 },
        { fret: 22, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      dString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      gString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
      ],
      bString: [
        { fret: 20, finger: 1 },
        { fret: 21, finger: 2 },
        { fret: 22, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      eStringHigh: [
        { fret: 21, finger: 1 },
        { fret: 22, finger: 2 },
        { fret: 24, finger: 4 },
      ],
    },
    position8: {
      eString: [{ fret: 24, finger: 1 }],
      aString: [{ fret: 24, finger: 1 }],
      dString: [{ fret: 24, finger: 1 }],
      gString: [{ fret: 24, finger: 1 }],
      bString: [{ fret: 24, finger: 1 }],
      eStringHigh: [{ fret: 24, finger: 1 }],
    },
  },
  fDorian: {
    position1: {
      eString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
        { fret: 6, finger: 4 },
      ],
      aString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      dString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      gString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      bString: [
        { fret: 4, finger: 4 },
        { fret: 6, finger: 4 },
      ],
      eStringHigh: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
        { fret: 6, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      aString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      dString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      gString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      bString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      eStringHigh: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 9, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      aString: [
        { fret: 10, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 13, finger: 4 },
      ],
      dString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      gString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      bString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      eStringHigh: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 13, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      aString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      dString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      gString: [
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
        { fret: 15, finger: 4 },
      ],
      bString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      eStringHigh: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 16, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      aString: [
        { fret: 17, finger: 1 },
        { fret: 18, finger: 2 },
        { fret: 20, finger: 4 },
      ],
      dString: [
        { fret: 17, finger: 1 },
        { fret: 18, finger: 2 },
        { fret: 20, finger: 4 },
      ],
      gString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      bString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      eStringHigh: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 20, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 23, finger: 4 },
      ],
      aString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      dString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      gString: [
        { fret: 19, finger: 1 },
        { fret: 20, finger: 2 },
        { fret: 22, finger: 4 },
      ],
      bString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 23, finger: 4 },
      ],
      eStringHigh: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 23, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 23, finger: 1 },
        { fret: 25, finger: 4 },
      ],
      aString: [
        { fret: 24, finger: 1 },
        { fret: 25, finger: 2 },
      ],
      dString: [{ fret: 24, finger: 1 }],
      gString: [{ fret: 24, finger: 1 }],
      bString: [
        { fret: 23, finger: 1 },
        { fret: 25, finger: 4 },
      ],
      eStringHigh: [
        { fret: 23, finger: 1 },
        { fret: 25, finger: 4 },
      ],
    },
    position8: {
      eString: [],
      aString: [],
      dString: [],
      gString: [],
      bString: [],
      eStringHigh: [],
    },
  },
  fSharpGFlatDorian: {
    position1: {
      eString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      aString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 5, finger: 4 },
        { fret: 7, finger: 4 },
      ],
      dString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      gString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      bString: [
        { fret: 5, finger: 4 },
        { fret: 7, finger: 4 },
      ],
      eStringHigh: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 5, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      aString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      dString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      gString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      bString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      eStringHigh: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      aString: [
        { fret: 11, finger: 1 },
        { fret: 12, finger: 2 },
        { fret: 14, finger: 4 },
      ],
      dString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      gString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      bString: [
        { fret: 10, finger: 2 },
        { fret: 12, finger: 4 },
      ],
      eStringHigh: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 14, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      aString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      dString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      gString: [
        { fret: 13, finger: 2 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      bString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      eStringHigh: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 17, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      aString: [
        { fret: 18, finger: 1 },
        { fret: 19, finger: 2 },
        { fret: 21, finger: 4 },
      ],
      dString: [
        { fret: 18, finger: 1 },
        { fret: 19, finger: 2 },
        { fret: 21, finger: 4 },
      ],
      gString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      bString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      eStringHigh: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      aString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      dString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      gString: [
        { fret: 20, finger: 2 },
        { fret: 21, finger: 3 },
        { fret: 23, finger: 4 },
      ],
      bString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      eStringHigh: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
    },
    position7: {
      eString: [],
      aString: [],
      dString: [],
      gString: [],
      bString: [],
      eStringHigh: [],
    },
    position8: {
      eString: [],
      aString: [],
      dString: [],
      gString: [],
      bString: [],
      eStringHigh: [],
    },
  },
  gDorian: {
    position1: {
      eString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      aString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      dString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      gString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      bString: [{ fret: 6, finger: 4 }],
      eStringHigh: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 6, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      aString: [
        { fret: 7, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 10, finger: 4 },
      ],
      dString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      gString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      bString: [
        { fret: 8, finger: 2 },
        { fret: 10, finger: 4 },
      ],
      eStringHigh: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      aString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      dString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      gString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      bString: [
        { fret: 11, finger: 2 },
        { fret: 13, finger: 4 },
      ],
      eStringHigh: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 13, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      aString: [
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 17, finger: 4 },
      ],
      dString: [
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 17, finger: 4 },
      ],
      gString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      bString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      eStringHigh: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      aString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      dString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      gString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      bString: [
        { fret: 18, finger: 2 },
        { fret: 20, finger: 4 },
      ],
      eStringHigh: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 20, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      aString: [
        { fret: 21, finger: 1 },
        { fret: 22, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      dString: [
        { fret: 21, finger: 1 },
        { fret: 22, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      gString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      bString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      eStringHigh: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 24, finger: 4 },
      ],
    },
    position7: {
      eString: [],
      aString: [],
      dString: [],
      gString: [],
      bString: [],
      eStringHigh: [],
    },
    position8: {
      eString: [],
      aString: [],
      dString: [],
      gString: [],
      bString: [],
      eStringHigh: [],
    },
  },
  gSharpAFlatDorian: {
    position1: {
      eString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      aString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      dString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      gString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      bString: [{ fret: 7, finger: 4 }],
      eStringHigh: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      aString: [
        { fret: 8, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 11, finger: 4 },
      ],
      dString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      gString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      bString: [
        { fret: 9, finger: 2 },
        { fret: 11, finger: 4 },
      ],
      eStringHigh: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      aString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      dString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      gString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      bString: [
        { fret: 12, finger: 2 },
        { fret: 14, finger: 4 },
      ],
      eStringHigh: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 14, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      aString: [
        { fret: 15, finger: 1 },
        { fret: 16, finger: 2 },
        { fret: 18, finger: 4 },
      ],
      dString: [
        { fret: 15, finger: 1 },
        { fret: 16, finger: 2 },
        { fret: 18, finger: 4 },
      ],
      gString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      bString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      eStringHigh: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 18, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      aString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      dString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      gString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      bString: [
        { fret: 19, finger: 2 },
        { fret: 21, finger: 4 },
      ],
      eStringHigh: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      aString: [
        { fret: 22, finger: 1 },
        { fret: 23, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      dString: [
        { fret: 22, finger: 1 },
        { fret: 23, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      gString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 3 },
      ],
      bString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      eStringHigh: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
    },
    position7: {
      eString: [],
      aString: [],
      dString: [],
      gString: [],
      bString: [],
      eStringHigh: [],
    },
    position8: {
      eString: [],
      aString: [],
      dString: [],
      gString: [],
      bString: [],
      eStringHigh: [],
    },
  },
  aDorian: {
    position1: {
      eString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      aString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      dString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 4, finger: 4 },
      ],
      gString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 4, finger: 4 },
      ],
      bString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      eStringHigh: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      aString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      dString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      gString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      bString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      eStringHigh: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 8, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      aString: [
        { fret: 9, finger: 1 },
        { fret: 10, finger: 2 },
        { fret: 12, finger: 4 },
      ],
      dString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      gString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      bString: [
        { fret: 8, finger: 2 },
        { fret: 10, finger: 4 },
      ],
      eStringHigh: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 12, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      aString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      dString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      gString: [
        { fret: 11, finger: 2 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      bString: [
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
        { fret: 15, finger: 4 },
      ],
      eStringHigh: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 15, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      aString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      dString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      gString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      bString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      eStringHigh: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      aString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      dString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      gString: [
        { fret: 18, finger: 2 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      bString: [
        { fret: 19, finger: 1 },
        { fret: 20, finger: 2 },
        { fret: 22, finger: 4 },
      ],
      eStringHigh: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      aString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      dString: [
        { fret: 21, finger: 1 },
        { fret: 22, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      gString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      bString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      eStringHigh: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
    },
    position8: {
      eString: [],
      aString: [],
      dString: [],
      gString: [],
      bString: [],
      eStringHigh: [],
    },
  },
  aSharpBFlatDorian: {
    position1: {
      eString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
        { fret: 6, finger: 4 },
      ],
      aString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
        { fret: 6, finger: 4 },
      ],
      dString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      gString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      bString: [
        { fret: 2, finger: 2 },
        { fret: 4, finger: 4 },
        { fret: 6, finger: 4 },
      ],
      eStringHigh: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
        { fret: 6, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      aString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      dString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      gString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      bString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      eStringHigh: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 9, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      aString: [
        { fret: 10, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 13, finger: 4 },
      ],
      dString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      gString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      bString: [
        { fret: 9, finger: 2 },
        { fret: 11, finger: 4 },
      ],
      eStringHigh: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 13, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      aString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      dString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      gString: [
        { fret: 12, finger: 2 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      bString: [
        { fret: 13, finger: 1 },
        { fret: 14, finger: 2 },
        { fret: 16, finger: 4 },
      ],
      eStringHigh: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 16, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      aString: [
        { fret: 17, finger: 1 },
        { fret: 18, finger: 2 },
        { fret: 20, finger: 4 },
      ],
      dString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      gString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      bString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      eStringHigh: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 20, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 23, finger: 4 },
      ],
      aString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      dString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      gString: [
        { fret: 19, finger: 2 },
        { fret: 20, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      bString: [
        { fret: 20, finger: 1 },
        { fret: 21, finger: 2 },
        { fret: 23, finger: 4 },
      ],
      eStringHigh: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 23, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 23, finger: 1 },
        { fret: 25, finger: 4 },
      ],
      aString: [
        { fret: 24, finger: 1 },
        { fret: 25, finger: 2 },
      ],
      dString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 3 },
      ],
      gString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 3 },
      ],
      bString: [
        { fret: 23, finger: 1 },
        { fret: 25, finger: 4 },
      ],
      eStringHigh: [
        { fret: 23, finger: 1 },
        { fret: 25, finger: 4 },
      ],
    },
    position8: {
      eString: [],
      aString: [],
      dString: [],
      gString: [],
      bString: [],
      eStringHigh: [],
    },
  },
  bDorian: {
    position1: {
      eString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      aString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 5, finger: 4 },
        { fret: 7, finger: 4 },
      ],
      dString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      gString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      bString: [
        { fret: 3, finger: 2 },
        { fret: 5, finger: 4 },
        { fret: 7, finger: 4 },
      ],
      eStringHigh: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 5, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      aString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      dString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      gString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      bString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      eStringHigh: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      aString: [
        { fret: 11, finger: 1 },
        { fret: 12, finger: 2 },
        { fret: 14, finger: 4 },
      ],
      dString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      gString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      bString: [
        { fret: 10, finger: 2 },
        { fret: 12, finger: 4 },
      ],
      eStringHigh: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 12, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      aString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      dString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      gString: [
        { fret: 13, finger: 2 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      bString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      eStringHigh: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 19, finger: 4 },
      ],
      aString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      dString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      gString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      bString: [
        { fret: 17, finger: 2 },
        { fret: 19, finger: 4 },
      ],
      eStringHigh: [
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 19, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      aString: [
        { fret: 21, finger: 1 },
        { fret: 22, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      dString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      gString: [
        { fret: 20, finger: 2 },
        { fret: 21, finger: 3 },
        { fret: 23, finger: 4 },
      ],
      bString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      eStringHigh: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      aString: [{ fret: 24, finger: 1 }],
      dString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      gString: [
        { fret: 23, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      bString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      eStringHigh: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
    },
    position8: {
      eString: [],
      aString: [],
      dString: [],
      gString: [],
      bString: [],
      eStringHigh: [],
    },
  },

  // PHRYGIAN //

  cPhrygian: {
    position1: {
      eString: [
        { fret: 0, finger: 0 },
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
      ],
      aString: [
        { fret: 0, finger: 0 },
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
      ],
      dString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 3, finger: 3 },
      ],
      gString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 3, finger: 3 },
      ],
      bString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
      ],
      eStringHigh: [
        { fret: 0, finger: 0 },
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
      ],
    },
    position2: {
      eString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
      ],
      aString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      dString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      gString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      bString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      eStringHigh: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
      ],
    },
    position3: {
      eString: [
        { fret: 5, finger: 1 },
        { fret: 6, finger: 2 },
        { fret: 8, finger: 4 },
      ],
      aString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      dString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      gString: [
        { fret: 7, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 10, finger: 4 },
      ],
      bString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      eStringHigh: [
        { fret: 5, finger: 1 },
        { fret: 6, finger: 2 },
        { fret: 8, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      aString: [
        { fret: 9, finger: 1 },
        { fret: 10, finger: 2 },
        { fret: 12, finger: 4 },
      ],
      dString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      gString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      bString: [
        { fret: 9, finger: 1 },
        { fret: 10, finger: 2 },
        { fret: 11, finger: 3 },
      ],
      eStringHigh: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 11, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      aString: [
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
        { fret: 15, finger: 4 },
      ],
      dString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      gString: [
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 17, finger: 4 },
      ],
      bString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      eStringHigh: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      aString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      dString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      gString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      bString: [
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 18, finger: 3 },
      ],
      eStringHigh: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 18, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      aString: [
        { fret: 19, finger: 1 },
        { fret: 20, finger: 2 },
        { fret: 22, finger: 4 },
      ],
      dString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      gString: [
        { fret: 21, finger: 1 },
        { fret: 22, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      bString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 23, finger: 4 },
      ],
      eStringHigh: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 22, finger: 4 },
      ],
    },
    position8: {
      eString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      aString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      dString: [{ fret: 24, finger: 1 }],
      gString: [{ fret: 24, finger: 1 }],
      bString: [
        { fret: 23, finger: 1 },
        { fret: 24, finger: 2 },
      ],
      eStringHigh: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
    },
  },
  cSharpDFlatPhrygian: {
    position1: {
      eString: [
        { fret: 1, finger: 1 },
        { fret: 2, finger: 2 },
        { fret: 4, finger: 4 },
      ],
      aString: [
        { fret: 1, finger: 1 },
        { fret: 2, finger: 2 },
        { fret: 4, finger: 4 },
      ],
      dString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
      ],
      gString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
      ],
      bString: [
        { fret: 2, finger: 2 },
        { fret: 4, finger: 4 },
      ],
      eStringHigh: [
        { fret: 1, finger: 1 },
        { fret: 2, finger: 2 },
        { fret: 4, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
      ],
      aString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      dString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      gString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      bString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      eStringHigh: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
      ],
    },
    position3: {
      eString: [
        { fret: 6, finger: 1 },
        { fret: 7, finger: 2 },
        { fret: 9, finger: 4 },
      ],
      aString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      dString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      gString: [
        { fret: 8, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 11, finger: 4 },
      ],
      bString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      eStringHigh: [
        { fret: 6, finger: 1 },
        { fret: 7, finger: 2 },
        { fret: 9, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      aString: [
        { fret: 10, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 13, finger: 4 },
      ],
      dString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      gString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      bString: [
        { fret: 10, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 12, finger: 3 },
      ],
      eStringHigh: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 12, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
        { fret: 15, finger: 4 },
      ],
      aString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      dString: [
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 17, finger: 4 },
      ],
      gString: [
        { fret: 15, finger: 1 },
        { fret: 16, finger: 2 },
        { fret: 17, finger: 3 },
      ],
      bString: [
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
        { fret: 15, finger: 4 },
      ],
      eStringHigh: [
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
        { fret: 15, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 15, finger: 1 },
        { fret: 16, finger: 2 },
        { fret: 18, finger: 4 },
      ],
      aString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      dString: [
        { fret: 17, finger: 1 },
        { fret: 18, finger: 2 },
        { fret: 20, finger: 4 },
      ],
      gString: [
        { fret: 17, finger: 1 },
        { fret: 18, finger: 2 },
        { fret: 19, finger: 3 },
      ],
      bString: [
        { fret: 15, finger: 1 },
        { fret: 16, finger: 2 },
        { fret: 18, finger: 4 },
      ],
      eStringHigh: [
        { fret: 15, finger: 1 },
        { fret: 16, finger: 2 },
        { fret: 18, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 18, finger: 1 },
        { fret: 19, finger: 2 },
        { fret: 21, finger: 4 },
      ],
      aString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      dString: [
        { fret: 20, finger: 1 },
        { fret: 21, finger: 2 },
        { fret: 23, finger: 4 },
      ],
      gString: [
        { fret: 19, finger: 1 },
        { fret: 20, finger: 2 },
        { fret: 21, finger: 3 },
      ],
      bString: [
        { fret: 18, finger: 1 },
        { fret: 19, finger: 2 },
        { fret: 21, finger: 4 },
      ],
      eStringHigh: [
        { fret: 18, finger: 1 },
        { fret: 19, finger: 2 },
        { fret: 21, finger: 4 },
      ],
    },
    position8: {
      eString: [
        { fret: 21, finger: 1 },
        { fret: 22, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      aString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      dString: [
        { fret: 23, finger: 1 },
        { fret: 24, finger: 2 },
      ],
      gString: [
        { fret: 21, finger: 1 },
        { fret: 22, finger: 2 },
        { fret: 23, finger: 3 },
      ],
      bString: [
        { fret: 21, finger: 1 },
        { fret: 22, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      eStringHigh: [
        { fret: 21, finger: 1 },
        { fret: 22, finger: 2 },
        { fret: 24, finger: 4 },
      ],
    },
  },
  dPhrygian: {
    position1: {
      eString: [
        { fret: 0, finger: 0 },
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
      ],
      aString: [
        { fret: 0, finger: 0 },
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      dString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      gString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      bString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      eStringHigh: [
        { fret: 0, finger: 0 },
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
      ],
    },
    position2: {
      eString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      aString: [
        { fret: 5, finger: 1 },
        { fret: 6, finger: 2 },
        { fret: 8, finger: 4 },
      ],
      dString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      gString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      bString: [
        { fret: 6, finger: 2 },
        { fret: 8, finger: 4 },
      ],
      eStringHigh: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 6, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      aString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
      ],
      dString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      gString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      bString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      eStringHigh: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      aString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      dString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      gString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      bString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      eStringHigh: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 13, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      aString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      dString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      gString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      bString: [
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 17, finger: 4 },
      ],
      eStringHigh: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      aString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      dString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      gString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      bString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      eStringHigh: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 20, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      aString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      dString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      gString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      bString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      eStringHigh: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 24, finger: 4 },
      ],
    },
    position8: {
      eString: [],
      aString: [],
      dString: [],
      gString: [],
      bString: [],
      eStringHigh: [],
    },
  },
  dSharpEFlatPhrygian: {
    position1: {
      eString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
      ],
      aString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
        { fret: 6, finger: 4 },
      ],
      dString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
        { fret: 6, finger: 4 },
      ],
      gString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
        { fret: 6, finger: 4 },
      ],
      bString: [
        { fret: 2, finger: 2 },
        { fret: 4, finger: 4 },
        { fret: 7, finger: 4 },
      ],
      eStringHigh: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      aString: [
        { fret: 6, finger: 1 },
        { fret: 7, finger: 2 },
        { fret: 9, finger: 4 },
      ],
      dString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      gString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      bString: [
        { fret: 7, finger: 2 },
        { fret: 9, finger: 4 },
      ],
      eStringHigh: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      aString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
      ],
      dString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      gString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      bString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      eStringHigh: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      aString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      dString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      gString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      bString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      eStringHigh: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 14, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      aString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      dString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      gString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      bString: [
        { fret: 15, finger: 1 },
        { fret: 16, finger: 2 },
        { fret: 18, finger: 4 },
      ],
      eStringHigh: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 18, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      aString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      dString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 23, finger: 4 },
      ],
      gString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 23, finger: 4 },
      ],
      bString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      eStringHigh: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      aString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      dString: [
        { fret: 23, finger: 1 },
        { fret: 24, finger: 2 },
      ],
      gString: [
        { fret: 23, finger: 1 },
        { fret: 24, finger: 2 },
      ],
      bString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      eStringHigh: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
    },
    position8: {
      eString: [],
      aString: [],
      dString: [],
      gString: [],
      bString: [],
      eStringHigh: [],
    },
  },
  ePhrygian: {
    position1: {
      eString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 3, finger: 3 },
      ],
      aString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      dString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      gString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      bString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      eStringHigh: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 3, finger: 3 },
      ],
    },
    position2: {
      eString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      aString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      dString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      gString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      bString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      eStringHigh: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 7, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 7, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 10, finger: 4 },
      ],
      aString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      dString: [
        { fret: 9, finger: 1 },
        { fret: 10, finger: 2 },
        { fret: 12, finger: 4 },
      ],
      gString: [
        { fret: 9, finger: 1 },
        { fret: 10, finger: 2 },
        { fret: 12, finger: 4 },
      ],
      bString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      eStringHigh: [
        { fret: 7, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 10, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      aString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      dString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      gString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      bString: [
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
        { fret: 14, finger: 3 },
      ],
      eStringHigh: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 17, finger: 4 },
      ],
      aString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      dString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      gString: [
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 19, finger: 4 },
      ],
      bString: [
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 17, finger: 4 },
      ],
      eStringHigh: [
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 17, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      aString: [
        { fret: 19, finger: 1 },
        { fret: 20, finger: 2 },
        { fret: 22, finger: 4 },
      ],
      dString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      gString: [
        { fret: 19, finger: 1 },
        { fret: 20, finger: 2 },
        { fret: 21, finger: 3 },
      ],
      bString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      eStringHigh: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 20, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      aString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      dString: [{ fret: 24, finger: 1 }],
      gString: [
        { fret: 21, finger: 1 },
        { fret: 22, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      bString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      eStringHigh: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 24, finger: 4 },
      ],
    },
    position8: {
      eString: [],
      aString: [],
      dString: [],
      gString: [],
      bString: [],
      eStringHigh: [],
    },
  },
  fPhrygian: {
    position1: {
      eString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      aString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
        { fret: 6, finger: 4 },
      ],
      dString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
        { fret: 6, finger: 4 },
      ],
      gString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      bString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
        { fret: 6, finger: 4 },
      ],
      eStringHigh: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 5, finger: 1 },
        { fret: 6, finger: 2 },
        { fret: 8, finger: 4 },
      ],
      aString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      dString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      gString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      bString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      eStringHigh: [
        { fret: 5, finger: 1 },
        { fret: 6, finger: 2 },
        { fret: 8, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      aString: [
        { fret: 10, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 13, finger: 4 },
      ],
      dString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      gString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      bString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      eStringHigh: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 11, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      aString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      dString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      gString: [
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
        { fret: 15, finger: 4 },
      ],
      bString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      eStringHigh: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 15, finger: 1 },
        { fret: 16, finger: 2 },
        { fret: 18, finger: 4 },
      ],
      aString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      dString: [
        { fret: 17, finger: 1 },
        { fret: 18, finger: 2 },
        { fret: 20, finger: 4 },
      ],
      gString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      bString: [
        { fret: 15, finger: 1 },
        { fret: 16, finger: 2 },
        { fret: 18, finger: 4 },
      ],
      eStringHigh: [
        { fret: 15, finger: 1 },
        { fret: 16, finger: 2 },
        { fret: 18, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      aString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 23, finger: 4 },
      ],
      dString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      gString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      bString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      eStringHigh: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 22, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 22, finger: 1 },
        { fret: 23, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      aString: [
        { fret: 23, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      dString: [{ fret: 24, finger: 1 }],
      gString: [
        { fret: 22, finger: 1 },
        { fret: 23, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      bString: [
        { fret: 22, finger: 1 },
        { fret: 23, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      eStringHigh: [
        { fret: 22, finger: 1 },
        { fret: 23, finger: 2 },
        { fret: 24, finger: 4 },
      ],
    },
    position8: {
      eString: [],
      aString: [],
      dString: [],
      gString: [],
      bString: [],
      eStringHigh: [],
    },
  },
  fSharpGFlatPhrygian: {
    position1: {
      eString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      aString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      dString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      gString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      bString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      eStringHigh: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 6, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 6, finger: 1 },
        { fret: 7, finger: 2 },
        { fret: 9, finger: 4 },
      ],
      aString: [
        { fret: 6, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      dString: [
        { fret: 6, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      gString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      bString: [
        { fret: 7, finger: 2 },
        { fret: 9, finger: 4 },
      ],
      eStringHigh: [
        { fret: 6, finger: 1 },
        { fret: 7, finger: 2 },
        { fret: 9, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      aString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      dString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      gString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      bString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      eStringHigh: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 13, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 13, finger: 1 },
        { fret: 14, finger: 2 },
        { fret: 16, finger: 4 },
      ],
      aString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      dString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      gString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      bString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      eStringHigh: [
        { fret: 13, finger: 1 },
        { fret: 14, finger: 2 },
        { fret: 16, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      aString: [
        { fret: 18, finger: 1 },
        { fret: 19, finger: 2 },
        { fret: 21, finger: 4 },
      ],
      dString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      gString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      bString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      eStringHigh: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 19, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 23, finger: 4 },
      ],
      aString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      dString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
      ],
      gString: [
        { fret: 20, finger: 1 },
        { fret: 21, finger: 2 },
        { fret: 23, finger: 4 },
      ],
      bString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 23, finger: 4 },
      ],
      eStringHigh: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 23, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 23, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      aString: [{ fret: 24, finger: 1 }],
      dString: [{ fret: 24, finger: 1 }],
      gString: [
        { fret: 23, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      bString: [
        { fret: 23, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      eStringHigh: [
        { fret: 23, finger: 1 },
        { fret: 24, finger: 4 },
      ],
    },
    position8: {
      eString: [],
      aString: [],
      dString: [],
      gString: [],
      bString: [],
      eStringHigh: [],
    },
  },
  gPhrygian: {
    position1: {
      eString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      aString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 6, finger: 4 },
        { fret: 8, finger: 4 },
      ],
      dString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      gString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      bString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 6, finger: 4 },
        { fret: 8, finger: 4 },
      ],
      eStringHigh: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 6, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      aString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
      ],
      dString: [
        { fret: 7, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 10, finger: 4 },
      ],
      gString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      bString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      eStringHigh: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      aString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      dString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      gString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      bString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      eStringHigh: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 13, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      aString: [
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 17, finger: 4 },
      ],
      dString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      gString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      bString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      eStringHigh: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      aString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      dString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      gString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      bString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      eStringHigh: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 20, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      aString: [
        { fret: 21, finger: 1 },
        { fret: 22, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      dString: [
        { fret: 21, finger: 1 },
        { fret: 22, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      gString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      bString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      eStringHigh: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 24, finger: 4 },
      ],
    },
    position7: {
      eString: [],
      aString: [],
      dString: [],
      gString: [],
      bString: [],
      eStringHigh: [],
    },
    position8: {
      eString: [],
      aString: [],
      dString: [],
      gString: [],
      bString: [],
      eStringHigh: [],
    },
  },
  gSharpAFlatPhrygian: {
    position1: {
      eString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      aString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
        { fret: 9, finger: 4 },
      ],
      dString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      gString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      bString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
        { fret: 9, finger: 4 },
      ],
      eStringHigh: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      aString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      dString: [
        { fret: 8, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 11, finger: 4 },
      ],
      gString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      bString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      eStringHigh: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      aString: [
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
        { fret: 15, finger: 4 },
      ],
      dString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      gString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      bString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      eStringHigh: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 14, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      aString: [
        { fret: 15, finger: 1 },
        { fret: 16, finger: 2 },
        { fret: 18, finger: 4 },
      ],
      dString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      gString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      bString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      eStringHigh: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 18, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      aString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      dString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      gString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      bString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      eStringHigh: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      aString: [
        { fret: 22, finger: 1 },
        { fret: 23, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      dString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      gString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      bString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      eStringHigh: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
    },
    position7: {
      eString: [],
      aString: [],
      dString: [],
      gString: [],
      bString: [],
      eStringHigh: [],
    },
    position8: {
      eString: [],
      aString: [],
      dString: [],
      gString: [],
      bString: [],
      eStringHigh: [],
    },
  },
  aPhrygian: {
    position1: {
      eString: [
        { fret: 0, finger: 0 },
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
      ],
      aString: [
        { fret: 0, finger: 0 },
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      dString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      gString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      bString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      eStringHigh: [
        { fret: 0, finger: 0 },
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
      ],
    },
    position2: {
      eString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      aString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
      ],
      dString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      gString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      bString: [
        { fret: 5, finger: 1 },
        { fret: 6, finger: 2 },
        { fret: 8, finger: 4 },
      ],
      eStringHigh: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 6, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      aString: [
        { fret: 7, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 10, finger: 4 },
      ],
      dString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      gString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      bString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      eStringHigh: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      aString: [
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
        { fret: 15, finger: 4 },
      ],
      dString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      gString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      bString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      eStringHigh: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 13, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      aString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      dString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      gString: [
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 17, finger: 4 },
      ],
      bString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      eStringHigh: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      aString: [
        { fret: 19, finger: 1 },
        { fret: 20, finger: 2 },
        { fret: 22, finger: 4 },
      ],
      dString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      gString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      bString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      eStringHigh: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 20, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      aString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      dString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      gString: [
        { fret: 21, finger: 1 },
        { fret: 22, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      bString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      eStringHigh: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 24, finger: 4 },
      ],
    },
    position8: {
      eString: [],
      aString: [],
      dString: [],
      gString: [],
      bString: [],
      eStringHigh: [],
    },
  },
  aSharpBFlatPhrygian: {
    position1: {
      eString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
      ],
      aString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
        { fret: 6, finger: 4 },
      ],
      dString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      gString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      bString: [
        { fret: 2, finger: 2 },
        { fret: 4, finger: 4 },
        { fret: 6, finger: 4 },
      ],
      eStringHigh: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      aString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
      ],
      dString: [
        { fret: 5, finger: 1 },
        { fret: 6, finger: 2 },
        { fret: 8, finger: 4 },
      ],
      gString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      bString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      eStringHigh: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 7, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 10, finger: 4 },
      ],
      aString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      dString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      gString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      bString: [
        { fret: 7, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 10, finger: 4 },
      ],
      eStringHigh: [
        { fret: 7, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 10, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 10, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 13, finger: 4 },
      ],
      aString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      dString: [
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
        { fret: 15, finger: 4 },
      ],
      gString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      bString: [
        { fret: 10, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 13, finger: 4 },
      ],
      eStringHigh: [
        { fret: 10, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 13, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      aString: [
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 17, finger: 4 },
      ],
      dString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      gString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      bString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      eStringHigh: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 16, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 19, finger: 4 },
      ],
      aString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      dString: [
        { fret: 18, finger: 1 },
        { fret: 19, finger: 2 },
        { fret: 21, finger: 4 },
      ],
      gString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      bString: [
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 19, finger: 4 },
      ],
      eStringHigh: [
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 19, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 19, finger: 1 },
        { fret: 20, finger: 2 },
        { fret: 22, finger: 4 },
      ],
      aString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 23, finger: 4 },
      ],
      dString: [
        { fret: 21, finger: 1 },
        { fret: 22, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      gString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      bString: [
        { fret: 19, finger: 1 },
        { fret: 20, finger: 2 },
        { fret: 22, finger: 4 },
      ],
      eStringHigh: [
        { fret: 19, finger: 1 },
        { fret: 20, finger: 2 },
        { fret: 22, finger: 4 },
      ],
    },
    position8: {
      eString: [],
      aString: [],
      dString: [],
      gString: [],
      bString: [],
      eStringHigh: [],
    },
  },
  bPhrygian: {
    position1: {
      eString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      aString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 5, finger: 4 },
        { fret: 7, finger: 4 },
      ],
      dString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      gString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      bString: [
        { fret: 3, finger: 2 },
        { fret: 5, finger: 4 },
        { fret: 7, finger: 4 },
      ],
      eStringHigh: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 5, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      aString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
      ],
      dString: [
        { fret: 6, finger: 1 },
        { fret: 7, finger: 2 },
        { fret: 9, finger: 4 },
      ],
      gString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      bString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      eStringHigh: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      aString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      dString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      gString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      bString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      eStringHigh: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 12, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      aString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      dString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      gString: [
        { fret: 13, finger: 1 },
        { fret: 14, finger: 2 },
        { fret: 16, finger: 4 },
      ],
      bString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      eStringHigh: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 19, finger: 4 },
      ],
      aString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      dString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      gString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      bString: [
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 19, finger: 4 },
      ],
      eStringHigh: [
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 19, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      aString: [
        { fret: 21, finger: 1 },
        { fret: 22, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      dString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      gString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 23, finger: 4 },
      ],
      bString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      eStringHigh: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      aString: [{ fret: 24, finger: 1 }],
      dString: [{ fret: 24, finger: 1 }],
      gString: [
        { fret: 23, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      bString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      eStringHigh: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
    },
    position8: {
      eString: [],
      aString: [],
      dString: [],
      gString: [],
      bString: [],
      eStringHigh: [],
    },
  },

  // HARMONIC MINOR //

  cHarmonicMinor: {
    position1: {
      eString: [
        { fret: 3, finger: 1 },
        { fret: 4, finger: 2 },
        { fret: 7, finger: 4 },
      ],
      aString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      dString: [
        { fret: 4, finger: 1 },
        { fret: 5, finger: 2 },
        { fret: 7, finger: 4 },
      ],
      gString: [
        { fret: 4, finger: 1 },
        { fret: 5, finger: 2 },
        { fret: 7, finger: 4 },
      ],
      bString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      eStringHigh: [
        { fret: 3, finger: 1 },
        { fret: 4, finger: 2 },
        { fret: 7, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 7, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 11, finger: 4 },
      ],
      aString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      dString: [
        { fret: 7, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 10, finger: 4 },
      ],
      gString: [
        { fret: 7, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 9, finger: 3 },
      ],
      bString: [
        { fret: 7, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 10, finger: 4 },
      ],
      eStringHigh: [
        { fret: 7, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 11, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 11, finger: 1 },
        { fret: 12, finger: 2 },
        { fret: 15, finger: 4 },
      ],
      aString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      dString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      gString: [
        { fret: 9, finger: 1 },
        { fret: 12, finger: 4 },
      ],
      bString: [
        { fret: 10, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 13, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      eStringHigh: [
        { fret: 11, finger: 1 },
        { fret: 12, finger: 2 },
        { fret: 15, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 15, finger: 1 },
        { fret: 16, finger: 2 },
        { fret: 19, finger: 4 },
      ],
      aString: [
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 17, finger: 4 },
      ],
      dString: [
        { fret: 13, finger: 1 },
        { fret: 14, finger: 2 },
        { fret: 17, finger: 4 },
      ],
      gString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      bString: [
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 17, finger: 4 },
      ],
      eStringHigh: [
        { fret: 15, finger: 1 },
        { fret: 16, finger: 2 },
        { fret: 19, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 19, finger: 1 },
        { fret: 20, finger: 2 },
        { fret: 22, finger: 4 },
      ],
      aString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      dString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      gString: [
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 19, finger: 4 },
      ],
      bString: [
        { fret: 17, finger: 1 },
        { fret: 18, finger: 2 },
        { fret: 20, finger: 4 },
      ],
      eStringHigh: [
        { fret: 19, finger: 1 },
        { fret: 20, finger: 2 },
        { fret: 22, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 22, finger: 1 },
        { fret: 23, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      aString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      dString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
      ],
      gString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      bString: [
        { fret: 20, finger: 1 },
        { fret: 21, finger: 2 },
        { fret: 23, finger: 4 },
      ],
      eStringHigh: [
        { fret: 22, finger: 1 },
        { fret: 23, finger: 2 },
        { fret: 24, finger: 4 },
      ],
    },
    position7: {
      eString: [],
      aString: [],
      dString: [],
      gString: [],
      bString: [],
      eStringHigh: [],
    },
    position8: {
      eString: [],
      aString: [],
      dString: [],
      gString: [],
      bString: [],
      eStringHigh: [],
    },
  },
  cSharpDFlatHarmonicMinor: {
    position1: {
      eString: [
        { fret: 4, finger: 1 },
        { fret: 5, finger: 2 },
        { fret: 8, finger: 4 },
      ],
      aString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      dString: [
        { fret: 5, finger: 1 },
        { fret: 6, finger: 2 },
        { fret: 8, finger: 4 },
      ],
      gString: [
        { fret: 5, finger: 1 },
        { fret: 6, finger: 2 },
        { fret: 8, finger: 4 },
      ],
      bString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      eStringHigh: [
        { fret: 4, finger: 1 },
        { fret: 5, finger: 2 },
        { fret: 8, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 8, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 12, finger: 4 },
      ],
      aString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      dString: [
        { fret: 8, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 11, finger: 4 },
      ],
      gString: [
        { fret: 8, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 10, finger: 3 },
      ],
      bString: [
        { fret: 8, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 11, finger: 4 },
      ],
      eStringHigh: [
        { fret: 8, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 12, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
        { fret: 16, finger: 4 },
      ],
      aString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      dString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      gString: [
        { fret: 10, finger: 1 },
        { fret: 13, finger: 4 },
      ],
      bString: [
        { fret: 11, finger: 1 },
        { fret: 12, finger: 2 },
        { fret: 14, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      eStringHigh: [
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
        { fret: 16, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 20, finger: 4 },
      ],
      aString: [
        { fret: 15, finger: 1 },
        { fret: 16, finger: 2 },
        { fret: 18, finger: 4 },
      ],
      dString: [
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 18, finger: 4 },
      ],
      gString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      bString: [
        { fret: 15, finger: 1 },
        { fret: 16, finger: 2 },
        { fret: 18, finger: 4 },
      ],
      eStringHigh: [
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 20, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 20, finger: 1 },
        { fret: 21, finger: 2 },
        { fret: 23, finger: 4 },
      ],
      aString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      dString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      gString: [
        { fret: 17, finger: 1 },
        { fret: 18, finger: 2 },
        { fret: 20, finger: 4 },
      ],
      bString: [
        { fret: 18, finger: 1 },
        { fret: 19, finger: 2 },
        { fret: 21, finger: 4 },
      ],
      eStringHigh: [
        { fret: 20, finger: 1 },
        { fret: 21, finger: 2 },
        { fret: 23, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 23, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      aString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      dString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
      ],
      gString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 23, finger: 4 },
      ],
      bString: [
        { fret: 21, finger: 1 },
        { fret: 22, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      eStringHigh: [
        { fret: 23, finger: 1 },
        { fret: 24, finger: 4 },
      ],
    },
    position7: {
      eString: [],
      aString: [],
      dString: [],
      gString: [],
      bString: [],
      eStringHigh: [],
    },
    position8: {
      eString: [],
      aString: [],
      dString: [],
      gString: [],
      bString: [],
      eStringHigh: [],
    },
  },
  dHarmonicMinor: {
    position1: {
      eString: [
        { fret: 0, finger: 0 },
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      aString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      dString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 3, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      gString: [
        { fret: 1, finger: 1 },
        { fret: 2, finger: 2 },
        { fret: 4, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      bString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      eStringHigh: [
        { fret: 0, finger: 0 },
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 5, finger: 1 },
        { fret: 6, finger: 2 },
        { fret: 8, finger: 4 },
      ],
      aString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      dString: [
        { fret: 6, finger: 1 },
        { fret: 7, finger: 2 },
        { fret: 9, finger: 4 },
      ],
      gString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      bString: [
        { fret: 5, finger: 1 },
        { fret: 6, finger: 2 },
        { fret: 8, finger: 4 },
      ],
      eStringHigh: [
        { fret: 5, finger: 1 },
        { fret: 6, finger: 2 },
        { fret: 8, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      aString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      dString: [
        { fret: 9, finger: 1 },
        { fret: 10, finger: 2 },
        { fret: 12, finger: 4 },
      ],
      gString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      bString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      eStringHigh: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 11, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      aString: [
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
        { fret: 15, finger: 4 },
      ],
      dString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      gString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      bString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      eStringHigh: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      aString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      dString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      gString: [
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 19, finger: 4 },
      ],
      bString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      eStringHigh: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 18, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      aString: [
        { fret: 19, finger: 1 },
        { fret: 20, finger: 2 },
        { fret: 22, finger: 4 },
      ],
      dString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      gString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 23, finger: 4 },
      ],
      bString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      eStringHigh: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 22, finger: 4 },
      ],
    },
    position7: {
      eString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      aString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      dString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      gString: [
        { fret: 23, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      bString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
      eStringHigh: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 4 },
      ],
    },
    position8: {
      eString: [],
      aString: [],
      dString: [],
      gString: [],
      bString: [],
      eStringHigh: [],
    },
  },
  dSharpEFlatHarmonicMinor: {
    position1: {
      eString: [
        { fret: 1, finger: 1 },
        { fret: 2, finger: 2 },
        { fret: 4, finger: 4 },
      ],
      aString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
      ],
      dString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      gString: [
        { fret: 2, finger: 2 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      bString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
      ],
      eStringHigh: [
        { fret: 1, finger: 1 },
        { fret: 2, finger: 2 },
        { fret: 4, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 6, finger: 1 },
        { fret: 7, finger: 2 },
        { fret: 9, finger: 4 },
      ],
      aString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      dString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      gString: [
        { fret: 7, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 10, finger: 4 },
      ],
      bString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      eStringHigh: [
        { fret: 6, finger: 1 },
        { fret: 7, finger: 2 },
        { fret: 9, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      aString: [
        { fret: 9, finger: 1 },
        { fret: 10, finger: 2 },
        { fret: 12, finger: 4 },
      ],
      dString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      gString: [
        { fret: 10, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 13, finger: 4 },
      ],
      bString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      eStringHigh: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 12, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 13, finger: 1 },
        { fret: 14, finger: 2 },
        { fret: 16, finger: 4 },
      ],
      aString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      dString: [
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
        { fret: 16, finger: 4 },
      ],
      gString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      bString: [
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
        { fret: 15, finger: 4 },
      ],
      eStringHigh: [
        { fret: 13, finger: 1 },
        { fret: 14, finger: 2 },
        { fret: 16, finger: 4 },
      ],
    },
    position5: {
      eString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      aString: [
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 19, finger: 4 },
      ],
      dString: [
        { fret: 17, finger: 1 },
        { fret: 18, finger: 2 },
        { fret: 20, finger: 4 },
      ],
      gString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      bString: [
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 19, finger: 4 },
      ],
      eStringHigh: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 19, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      aString: [
        { fret: 19, finger: 1 },
        { fret: 20, finger: 2 },
        { fret: 22, finger: 4 },
      ],
      dString: [
        { fret: 20, finger: 1 },
        { fret: 21, finger: 2 },
        { fret: 23, finger: 4 },
      ],
      gString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 23, finger: 4 },
      ],
      bString: [
        { fret: 19, finger: 1 },
        { fret: 20, finger: 2 },
        { fret: 22, finger: 4 },
      ],
      eStringHigh: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
    },
    position7: {
      eString: [{ fret: 24, finger: 4 }],
      aString: [{ fret: 24, finger: 4 }],
      dString: [{ fret: 24, finger: 4 }],
      gString: [{ fret: 23, finger: 3 }],
      bString: [{ fret: 22, finger: 2 }],
      eStringHigh: [{ fret: 24, finger: 4 }],
    },
    position8: {
      eString: [],
      aString: [],
      dString: [],
      gString: [],
      bString: [],
      eStringHigh: [],
    },
  },
  eHarmonicMinor: {
    position1: {
      eString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 3, finger: 3 },
        { fret: 6, finger: 1 },
        { fret: 7, finger: 2 },
        { fret: 10, finger: 4 },
      ],
      aString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 3, finger: 3 },
        { fret: 6, finger: 1 },
        { fret: 7, finger: 2 },
        { fret: 9, finger: 4 },
      ],
      dString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 4, finger: 4 },
        { fret: 6, finger: 1 },
        { fret: 7, finger: 2 },
        { fret: 9, finger: 4 },
      ],
      gString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 4, finger: 4 },
        { fret: 6, finger: 1 },
        { fret: 7, finger: 2 },
      ],
      bString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 3, finger: 3 },
        { fret: 6, finger: 1 },
        { fret: 7, finger: 2 },
        { fret: 9, finger: 4 },
      ],
      eStringHigh: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 3, finger: 3 },
        { fret: 6, finger: 1 },
        { fret: 7, finger: 2 },
        { fret: 10, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 2 },
        { fret: 8, finger: 3 },
        { fret: 12, finger: 1 },
        { fret: 14, finger: 2 },
        { fret: 15, finger: 3 },
      ],
      aString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 2 },
        { fret: 9, finger: 4 },
        { fret: 12, finger: 1 },
        { fret: 14, finger: 2 },
        { fret: 15, finger: 3 },
      ],
      dString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 2 },
        { fret: 9, finger: 4 },
        { fret: 11, finger: 1 },
        { fret: 12, finger: 2 },
        { fret: 14, finger: 4 },
      ],
      gString: [
        { fret: 4, finger: 1 },
        { fret: 5, finger: 2 },
        { fret: 7, finger: 4 },
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      bString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 2 },
        { fret: 8, finger: 3 },
        { fret: 12, finger: 1 },
        { fret: 14, finger: 2 },
        { fret: 15, finger: 3 },
      ],
      eStringHigh: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 2 },
        { fret: 8, finger: 3 },
        { fret: 12, finger: 1 },
        { fret: 14, finger: 2 },
        { fret: 15, finger: 3 },
      ],
    },
    position3: {
      eString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 12, finger: 3 },
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
      ],
      aString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
      ],
      dString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 13, finger: 4 },
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
      ],
      gString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 2 },
        { fret: 14, finger: 4 },
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
      ],
      bString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
      ],
      eStringHigh: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 12, finger: 3 },
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
      ],
    },
    position4: {
      eString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 2 },
        { fret: 17, finger: 3 },
      ],
      aString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 2 },
        { fret: 18, finger: 4 },
      ],
      dString: [
        { fret: 13, finger: 1 },
        { fret: 14, finger: 2 },
        { fret: 16, finger: 4 },
      ],
      gString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 2 },
        { fret: 18, finger: 4 },
      ],
      bString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 2 },
        { fret: 17, finger: 3 },
      ],
      eStringHigh: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 2 },
        { fret: 17, finger: 3 },
      ],
    },
    position5: {
      eString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
      ],
      aString: [
        { fret: 19, finger: 1 },
        { fret: 20, finger: 2 },
        { fret: 22, finger: 4 },
      ],
      dString: [
        { fret: 20, finger: 1 },
        { fret: 21, finger: 2 },
        { fret: 23, finger: 4 },
      ],
      gString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 23, finger: 4 },
      ],
      bString: [
        { fret: 19, finger: 1 },
        { fret: 20, finger: 2 },
        { fret: 22, finger: 4 },
      ],
      eStringHigh: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
      ],
    },
    position6: {
      eString: [{ fret: 24, finger: 4 }],
      aString: [{ fret: 24, finger: 4 }],
      dString: [{ fret: 24, finger: 4 }],
      gString: [{ fret: 23, finger: 3 }],
      bString: [{ fret: 22, finger: 2 }],
      eStringHigh: [{ fret: 24, finger: 4 }],
    },
    position7: {
      eString: [],
      aString: [],
      dString: [],
      gString: [],
      bString: [],
      eStringHigh: [],
    },
    position8: {
      eString: [],
      aString: [],
      dString: [],
      gString: [],
      bString: [],
      eStringHigh: [],
    },
  },
  fHarmonicMinor: {
    position1: {
      eString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
        { fret: 7, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 11, finger: 4 },
      ],
      aString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
        { fret: 7, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 10, finger: 4 },
      ],
      dString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
        { fret: 7, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 10, finger: 4 },
      ],
      gString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
        { fret: 7, finger: 1 },
        { fret: 8, finger: 2 },
      ],
      bString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
        { fret: 7, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 10, finger: 4 },
      ],
      eStringHigh: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
        { fret: 7, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 11, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 9, finger: 3 },
        { fret: 13, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 16, finger: 3 },
      ],
      aString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 10, finger: 4 },
        { fret: 13, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 17, finger: 4 },
      ],
      dString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 10, finger: 4 },
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
        { fret: 15, finger: 4 },
      ],
      gString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 2 },
        { fret: 9, finger: 4 },
        { fret: 11, finger: 1 },
        { fret: 12, finger: 2 },
        { fret: 14, finger: 4 },
      ],
      bString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 9, finger: 3 },
        { fret: 13, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 16, finger: 3 },
      ],
      eStringHigh: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 9, finger: 3 },
        { fret: 13, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 16, finger: 3 },
      ],
    },
    position3: {
      eString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 2 },
        { fret: 13, finger: 3 },
        { fret: 17, finger: 1 },
        { fret: 18, finger: 2 },
      ],
      aString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 2 },
        { fret: 14, finger: 4 },
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
      ],
      dString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 2 },
        { fret: 14, finger: 4 },
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
      ],
      gString: [
        { fret: 11, finger: 1 },
        { fret: 12, finger: 2 },
        { fret: 14, finger: 4 },
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
      ],
      bString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 2 },
        { fret: 13, finger: 3 },
        { fret: 17, finger: 1 },
        { fret: 18, finger: 2 },
      ],
      eStringHigh: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 2 },
        { fret: 13, finger: 3 },
        { fret: 17, finger: 1 },
        { fret: 18, finger: 2 },
      ],
    },
    position4: {
      eString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 18, finger: 3 },
      ],
      aString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 19, finger: 4 },
      ],
      dString: [
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 17, finger: 4 },
      ],
      gString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 19, finger: 4 },
      ],
      bString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 18, finger: 3 },
      ],
      eStringHigh: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 18, finger: 3 },
      ],
    },
    position5: {
      eString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
      ],
      aString: [
        { fret: 20, finger: 1 },
        { fret: 21, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      dString: [
        { fret: 21, finger: 1 },
        { fret: 22, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      gString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      bString: [
        { fret: 20, finger: 1 },
        { fret: 21, finger: 2 },
        { fret: 23, finger: 4 },
      ],
      eStringHigh: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
      ],
    },
    position6: {
      eString: [{ fret: 24, finger: 4 }],
      aString: [{ fret: 24, finger: 4 }],
      dString: [{ fret: 24, finger: 4 }],
      gString: [{ fret: 24, finger: 4 }],
      bString: [{ fret: 24, finger: 4 }],
      eStringHigh: [{ fret: 24, finger: 4 }],
    },
    position7: {
      eString: [],
      aString: [],
      dString: [],
      gString: [],
      bString: [],
      eStringHigh: [],
    },
    position8: {
      eString: [],
      aString: [],
      dString: [],
      gString: [],
      bString: [],
      eStringHigh: [],
    },
  },
  fSharpGFlatHarmonicMinor: {
    position1: {
      eString: [
        { fret: 2, finger: 1 },
        { fret: 3, finger: 2 },
        { fret: 6, finger: 1 },
        { fret: 7, finger: 2 },
        { fret: 10, finger: 1 },
        { fret: 11, finger: 2 },
      ],
      aString: [
        { fret: 2, finger: 1 },
        { fret: 3, finger: 2 },
        { fret: 5, finger: 4 },
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      dString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 5, finger: 4 },
        { fret: 7, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 10, finger: 4 },
      ],
      gString: [
        { fret: 1, finger: 1 },
        { fret: 2, finger: 2 },
        { fret: 5, finger: 4 },
        { fret: 7, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 11, finger: 4 },
      ],
      bString: [
        { fret: 2, finger: 1 },
        { fret: 3, finger: 2 },
        { fret: 6, finger: 4 },
        { fret: 7, finger: 1 },
        { fret: 10, finger: 2 },
      ],
      eStringHigh: [
        { fret: 2, finger: 1 },
        { fret: 3, finger: 2 },
        { fret: 6, finger: 1 },
        { fret: 7, finger: 2 },
        { fret: 10, finger: 1 },
        { fret: 11, finger: 2 },
      ],
    },
    position2: {
      eString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 10, finger: 3 },
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
      ],
      aString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 11, finger: 4 },
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
      ],
      dString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 11, finger: 4 },
        { fret: 13, finger: 1 },
        { fret: 14, finger: 2 },
      ],
      gString: [
        { fret: 7, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 11, finger: 4 },
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
      ],
      bString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 10, finger: 3 },
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
      ],
      eStringHigh: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 10, finger: 3 },
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
      ],
    },
    position3: {
      eString: [
        { fret: 10, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 15, finger: 1 },
        { fret: 17, finger: 2 },
      ],
      aString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
        { fret: 15, finger: 1 },
      ],
      dString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 13, finger: 4 },
        { fret: 15, finger: 1 },
      ],
      gString: [
        { fret: 10, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 14, finger: 4 },
        { fret: 15, finger: 1 },
      ],
      bString: [
        { fret: 10, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 14, finger: 4 },
        { fret: 15, finger: 1 },
      ],
      eStringHigh: [
        { fret: 10, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 15, finger: 1 },
        { fret: 17, finger: 2 },
      ],
    },
    position4: {
      eString: [
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 19, finger: 1 },
      ],
      aString: [
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 19, finger: 1 },
      ],
      dString: [
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 19, finger: 1 },
      ],
      gString: [
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 19, finger: 1 },
      ],
      bString: [
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 19, finger: 1 },
      ],
      eStringHigh: [
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 19, finger: 1 },
      ],
    },
    position5: {
      eString: [{ fret: 19, finger: 1 }],
      aString: [{ fret: 19, finger: 1 }],
      dString: [{ fret: 19, finger: 1 }],
      gString: [{ fret: 19, finger: 1 }],
      bString: [{ fret: 19, finger: 1 }],
      eStringHigh: [{ fret: 19, finger: 1 }],
    },
    position6: {
      eString: [],
      aString: [],
      dString: [],
      gString: [],
      bString: [],
      eStringHigh: [],
    },
    position7: {
      eString: [],
      aString: [],
      dString: [],
      gString: [],
      bString: [],
      eStringHigh: [],
    },
    position8: {
      eString: [],
      aString: [],
      dString: [],
      gString: [],
      bString: [],
      eStringHigh: [],
    },
  },
  gHarmonicMinor: {
    position1: {
      eString: [
        { fret: 3, finger: 1 },
        { fret: 4, finger: 2 },
        { fret: 7, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 11, finger: 1 },
        { fret: 12, finger: 2 },
      ],
      aString: [
        { fret: 3, finger: 1 },
        { fret: 4, finger: 2 },
        { fret: 6, finger: 4 },
        { fret: 7, finger: 1 },
        { fret: 10, finger: 2 },
        { fret: 11, finger: 4 },
      ],
      dString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 6, finger: 4 },
        { fret: 7, finger: 1 },
        { fret: 10, finger: 2 },
        { fret: 12, finger: 4 },
      ],
      gString: [
        { fret: 2, finger: 1 },
        { fret: 3, finger: 2 },
        { fret: 6, finger: 4 },
        { fret: 7, finger: 1 },
        { fret: 10, finger: 2 },
        { fret: 12, finger: 4 },
      ],
      bString: [
        { fret: 3, finger: 1 },
        { fret: 4, finger: 2 },
        { fret: 7, finger: 4 },
        { fret: 8, finger: 1 },
        { fret: 11, finger: 2 },
      ],
      eStringHigh: [
        { fret: 3, finger: 1 },
        { fret: 4, finger: 2 },
        { fret: 7, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 11, finger: 1 },
        { fret: 12, finger: 2 },
      ],
    },
    position2: {
      eString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 2 },
        { fret: 11, finger: 3 },
        { fret: 15, finger: 1 },
        { fret: 16, finger: 2 },
      ],
      aString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 2 },
        { fret: 12, finger: 4 },
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
      ],
      dString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 2 },
        { fret: 12, finger: 4 },
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
      ],
      gString: [
        { fret: 8, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 12, finger: 4 },
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
      ],
      bString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 2 },
        { fret: 11, finger: 3 },
        { fret: 15, finger: 1 },
        { fret: 16, finger: 2 },
      ],
      eStringHigh: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 2 },
        { fret: 11, finger: 3 },
        { fret: 15, finger: 1 },
        { fret: 16, finger: 2 },
      ],
    },
    position3: {
      eString: [
        { fret: 11, finger: 1 },
        { fret: 12, finger: 2 },
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
      ],
      aString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
        { fret: 16, finger: 1 },
      ],
      dString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 14, finger: 4 },
        { fret: 16, finger: 1 },
      ],
      gString: [
        { fret: 11, finger: 1 },
        { fret: 12, finger: 2 },
        { fret: 15, finger: 4 },
        { fret: 16, finger: 1 },
      ],
      bString: [
        { fret: 11, finger: 1 },
        { fret: 12, finger: 2 },
        { fret: 16, finger: 4 },
        { fret: 17, finger: 1 },
      ],
      eStringHigh: [
        { fret: 11, finger: 1 },
        { fret: 12, finger: 2 },
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
      ],
    },
    position4: {
      eString: [
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
      ],
      aString: [
        { fret: 15, finger: 1 },
        { fret: 16, finger: 2 },
      ],
      dString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 2 },
      ],
      gString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 2 },
      ],
      bString: [
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
      ],
      eStringHigh: [
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
      ],
    },
    position5: {
      eString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
        { fret: 24, finger: 1 },
      ],
      aString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
        { fret: 22, finger: 1 },
      ],
      dString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 19, finger: 4 },
        { fret: 21, finger: 1 },
      ],
      gString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 19, finger: 4 },
        { fret: 20, finger: 1 },
      ],
      bString: [
        { fret: 19, finger: 1 },
        { fret: 20, finger: 2 },
        { fret: 22, finger: 4 },
      ],
      eStringHigh: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
    },
    position6: {
      eString: [{ fret: 24, finger: 1 }],
      aString: [{ fret: 22, finger: 1 }],
      dString: [{ fret: 21, finger: 1 }],
      gString: [{ fret: 20, finger: 1 }],
      bString: [{ fret: 24, finger: 1 }],
      eStringHigh: [{ fret: 24, finger: 1 }],
    },
    position7: {
      eString: [{ fret: 24, finger: 1 }],
      aString: [{ fret: 22, finger: 1 }],
      dString: [{ fret: 21, finger: 1 }],
      gString: [{ fret: 20, finger: 1 }],
      bString: [{ fret: 24, finger: 1 }],
      eStringHigh: [{ fret: 24, finger: 1 }],
    },
    position8: {
      eString: [{ fret: 24, finger: 1 }],
      aString: [{ fret: 22, finger: 1 }],
      dString: [{ fret: 21, finger: 1 }],
      gString: [{ fret: 20, finger: 1 }],
      bString: [{ fret: 24, finger: 1 }],
      eStringHigh: [{ fret: 24, finger: 1 }],
    },
  },
  gSharpAFlatHarmonicMinor: {
    position1: {
      eString: [
        { fret: 4, finger: 1 },
        { fret: 5, finger: 2 },
        { fret: 8, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
      ],
      aString: [
        { fret: 4, finger: 1 },
        { fret: 5, finger: 2 },
        { fret: 7, finger: 4 },
        { fret: 8, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 12, finger: 4 },
      ],
      dString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
        { fret: 8, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 13, finger: 4 },
      ],
      gString: [
        { fret: 3, finger: 1 },
        { fret: 4, finger: 2 },
        { fret: 7, finger: 4 },
        { fret: 8, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 13, finger: 4 },
      ],
      bString: [
        { fret: 4, finger: 1 },
        { fret: 5, finger: 2 },
        { fret: 8, finger: 4 },
        { fret: 9, finger: 1 },
        { fret: 12, finger: 2 },
      ],
      eStringHigh: [
        { fret: 4, finger: 1 },
        { fret: 5, finger: 2 },
        { fret: 8, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
      ],
    },
    position2: {
      eString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 12, finger: 3 },
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
      ],
      aString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 13, finger: 4 },
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
      ],
      dString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 13, finger: 4 },
        { fret: 15, finger: 1 },
        { fret: 16, finger: 2 },
      ],
      gString: [
        { fret: 9, finger: 1 },
        { fret: 10, finger: 2 },
        { fret: 13, finger: 4 },
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
      ],
      bString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 12, finger: 3 },
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
      ],
      eStringHigh: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 12, finger: 3 },
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
      ],
    },
    position3: {
      eString: [
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
        { fret: 17, finger: 1 },
        { fret: 18, finger: 2 },
      ],
      aString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
        { fret: 17, finger: 1 },
      ],
      dString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 15, finger: 4 },
        { fret: 17, finger: 1 },
      ],
      gString: [
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
        { fret: 16, finger: 4 },
        { fret: 17, finger: 1 },
      ],
      bString: [
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
        { fret: 17, finger: 4 },
        { fret: 18, finger: 1 },
      ],
      eStringHigh: [
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
        { fret: 17, finger: 1 },
        { fret: 18, finger: 2 },
      ],
    },
    position4: {
      eString: [
        { fret: 17, finger: 1 },
        { fret: 18, finger: 2 },
      ],
      aString: [
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
      ],
      dString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 2 },
      ],
      gString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 2 },
      ],
      bString: [
        { fret: 17, finger: 1 },
        { fret: 18, finger: 2 },
      ],
      eStringHigh: [
        { fret: 17, finger: 1 },
        { fret: 18, finger: 2 },
      ],
    },
    position5: {
      eString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      aString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 23, finger: 4 },
      ],
      dString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      gString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      bString: [
        { fret: 21, finger: 1 },
        { fret: 22, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      eStringHigh: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
    },
    position6: {
      eString: [{ fret: 24, finger: 1 }],
      aString: [{ fret: 23, finger: 1 }],
      dString: [{ fret: 21, finger: 1 }],
      gString: [{ fret: 21, finger: 1 }],
      bString: [{ fret: 24, finger: 1 }],
      eStringHigh: [{ fret: 24, finger: 1 }],
    },
    position7: {
      eString: [{ fret: 24, finger: 1 }],
      aString: [{ fret: 23, finger: 1 }],
      dString: [{ fret: 21, finger: 1 }],
      gString: [{ fret: 21, finger: 1 }],
      bString: [{ fret: 24, finger: 1 }],
      eStringHigh: [{ fret: 24, finger: 1 }],
    },
    position8: {
      eString: [{ fret: 24, finger: 1 }],
      aString: [{ fret: 23, finger: 1 }],
      dString: [{ fret: 21, finger: 1 }],
      gString: [{ fret: 21, finger: 1 }],
      bString: [{ fret: 24, finger: 1 }],
      eStringHigh: [{ fret: 24, finger: 1 }],
    },
  },
  aHarmonicMinor: {
    position1: {
      eString: [
        { fret: 0, finger: 0 },
        { fret: 1, finger: 1 },
        { fret: 4, finger: 1 },
        { fret: 5, finger: 2 },
        { fret: 8, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
      ],
      aString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 4, finger: 1 },
        { fret: 5, finger: 2 },
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
      ],
      dString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 8, finger: 4 },
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
      ],
      gString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 4, finger: 1 },
        { fret: 5, finger: 2 },
        { fret: 9, finger: 1 },
        { fret: 10, finger: 2 },
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
      ],
      bString: [
        { fret: 1, finger: 1 },
        { fret: 4, finger: 1 },
        { fret: 5, finger: 2 },
        { fret: 8, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 12, finger: 1 },
      ],
      eStringHigh: [
        { fret: 0, finger: 0 },
        { fret: 1, finger: 1 },
        { fret: 4, finger: 1 },
        { fret: 5, finger: 2 },
        { fret: 8, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
      ],
    },
    position2: {
      eString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 2 },
        { fret: 8, finger: 3 },
        { fret: 12, finger: 1 },
        { fret: 14, finger: 2 },
      ],
      aString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 2 },
        { fret: 9, finger: 4 },
        { fret: 12, finger: 1 },
        { fret: 14, finger: 2 },
      ],
      dString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 2 },
        { fret: 9, finger: 4 },
        { fret: 10, finger: 1 },
        { fret: 14, finger: 2 },
      ],
      gString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 2 },
        { fret: 9, finger: 4 },
        { fret: 10, finger: 1 },
        { fret: 14, finger: 2 },
      ],
      bString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 2 },
        { fret: 8, finger: 3 },
        { fret: 12, finger: 1 },
        { fret: 14, finger: 2 },
      ],
      eStringHigh: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 2 },
        { fret: 8, finger: 3 },
        { fret: 12, finger: 1 },
        { fret: 14, finger: 2 },
      ],
    },
    position3: {
      eString: [
        { fret: 8, finger: 1 },
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
        { fret: 17, finger: 1 },
      ],
      aString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 12, finger: 1 },
        { fret: 14, finger: 2 },
        { fret: 16, finger: 4 },
        { fret: 17, finger: 1 },
      ],
      dString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 2 },
        { fret: 9, finger: 4 },
        { fret: 12, finger: 1 },
        { fret: 14, finger: 2 },
        { fret: 16, finger: 4 },
        { fret: 17, finger: 1 },
      ],
      gString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 2 },
        { fret: 9, finger: 4 },
        { fret: 10, finger: 1 },
        { fret: 14, finger: 2 },
        { fret: 16, finger: 4 },
        { fret: 17, finger: 1 },
      ],
      bString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 2 },
        { fret: 8, finger: 3 },
        { fret: 12, finger: 1 },
        { fret: 14, finger: 2 },
        { fret: 16, finger: 4 },
      ],
      eStringHigh: [
        { fret: 8, finger: 1 },
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
        { fret: 17, finger: 1 },
      ],
    },
    position4: {
      eString: [
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
        { fret: 17, finger: 1 },
      ],
      aString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 2 },
        { fret: 16, finger: 4 },
        { fret: 17, finger: 1 },
      ],
      dString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 2 },
        { fret: 16, finger: 4 },
        { fret: 17, finger: 1 },
      ],
      gString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 2 },
        { fret: 16, finger: 4 },
        { fret: 17, finger: 1 },
      ],
      bString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 2 },
        { fret: 16, finger: 4 },
      ],
      eStringHigh: [
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
        { fret: 17, finger: 1 },
      ],
    },
    position5: {
      eString: [{ fret: 17, finger: 1 }],
      aString: [
        { fret: 14, finger: 2 },
        { fret: 17, finger: 1 },
      ],
      dString: [
        { fret: 14, finger: 2 },
        { fret: 17, finger: 1 },
      ],
      gString: [
        { fret: 14, finger: 2 },
        { fret: 17, finger: 1 },
      ],
      bString: [{ fret: 16, finger: 4 }],
      eStringHigh: [{ fret: 17, finger: 1 }],
    },
    position6: {
      eString: [{ fret: 17, finger: 1 }],
      aString: [
        { fret: 14, finger: 2 },
        { fret: 17, finger: 1 },
      ],
      dString: [
        { fret: 14, finger: 2 },
        { fret: 17, finger: 1 },
      ],
      gString: [
        { fret: 14, finger: 2 },
        { fret: 17, finger: 1 },
      ],
      bString: [{ fret: 16, finger: 4 }],
      eStringHigh: [{ fret: 17, finger: 1 }],
    },
    position7: {
      eString: [{ fret: 17, finger: 1 }],
      aString: [
        { fret: 14, finger: 2 },
        { fret: 17, finger: 1 },
      ],
      dString: [
        { fret: 14, finger: 2 },
        { fret: 17, finger: 1 },
      ],
      gString: [
        { fret: 14, finger: 2 },
        { fret: 17, finger: 1 },
      ],
      bString: [{ fret: 16, finger: 4 }],
      eStringHigh: [{ fret: 17, finger: 1 }],
    },
    position8: {
      eString: [{ fret: 17, finger: 1 }],
      aString: [
        { fret: 14, finger: 2 },
        { fret: 17, finger: 1 },
      ],
      dString: [
        { fret: 14, finger: 2 },
        { fret: 17, finger: 1 },
      ],
      gString: [
        { fret: 14, finger: 2 },
        { fret: 17, finger: 1 },
      ],
      bString: [{ fret: 16, finger: 4 }],
      eStringHigh: [{ fret: 17, finger: 1 }],
    },
  },
  aSharpBFlatHarmonicMinor: {
    position1: {
      eString: [
        { fret: 1, finger: 1 },
        { fret: 4, finger: 1 },
        { fret: 5, finger: 2 },
        { fret: 9, finger: 1 },
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
        { fret: 17, finger: 1 },
        { fret: 20, finger: 1 },
        { fret: 21, finger: 2 },
      ],
      aString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
        { fret: 8, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 16, finger: 4 },
        { fret: 20, finger: 1 },
      ],
      dString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 2 },
        { fret: 5, finger: 4 },
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
        { fret: 20, finger: 1 },
      ],
      gString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
        { fret: 20, finger: 1 },
      ],
      bString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 2 },
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 13, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 17, finger: 4 },
        { fret: 20, finger: 1 },
      ],
      eStringHigh: [
        { fret: 1, finger: 1 },
        { fret: 4, finger: 1 },
        { fret: 5, finger: 2 },
        { fret: 9, finger: 1 },
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
        { fret: 17, finger: 1 },
        { fret: 20, finger: 1 },
        { fret: 21, finger: 2 },
      ],
    },
    position2: {
      eString: [
        { fret: 5, finger: 1 },
        { fret: 9, finger: 1 },
        { fret: 12, finger: 1 },
        { fret: 17, finger: 1 },
        { fret: 21, finger: 1 },
      ],
      aString: [
        { fret: 4, finger: 1 },
        { fret: 8, finger: 1 },
        { fret: 12, finger: 1 },
        { fret: 16, finger: 1 },
        { fret: 20, finger: 1 },
      ],
      dString: [
        { fret: 3, finger: 1 },
        { fret: 7, finger: 1 },
        { fret: 10, finger: 1 },
        { fret: 15, finger: 1 },
        { fret: 19, finger: 1 },
      ],
      gString: [
        { fret: 2, finger: 1 },
        { fret: 5, finger: 1 },
        { fret: 9, finger: 1 },
        { fret: 14, finger: 1 },
        { fret: 17, finger: 1 },
        { fret: 21, finger: 1 },
      ],
      bString: [
        { fret: 4, finger: 1 },
        { fret: 8, finger: 1 },
        { fret: 12, finger: 1 },
        { fret: 17, finger: 1 },
        { fret: 20, finger: 1 },
      ],
      eStringHigh: [
        { fret: 5, finger: 1 },
        { fret: 9, finger: 1 },
        { fret: 12, finger: 1 },
        { fret: 17, finger: 1 },
        { fret: 21, finger: 1 },
      ],
    },
    position3: {
      eString: [
        { fret: 12, finger: 1 },
        { fret: 17, finger: 1 },
        { fret: 20, finger: 1 },
        { fret: 21, finger: 2 },
      ],
      aString: [
        { fret: 12, finger: 1 },
        { fret: 16, finger: 2 },
        { fret: 19, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      dString: [
        { fret: 12, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
        { fret: 21, finger: 1 },
      ],
      gString: [
        { fret: 14, finger: 2 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
        { fret: 21, finger: 1 },
      ],
      bString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 2 },
        { fret: 17, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      eStringHigh: [
        { fret: 12, finger: 1 },
        { fret: 17, finger: 1 },
        { fret: 20, finger: 1 },
        { fret: 21, finger: 2 },
      ],
    },
    position4: {
      eString: [
        { fret: 17, finger: 1 },
        { fret: 20, finger: 1 },
        { fret: 21, finger: 2 },
      ],
      aString: [
        { fret: 16, finger: 1 },
        { fret: 19, finger: 2 },
        { fret: 20, finger: 3 },
      ],
      dString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      gString: [
        { fret: 14, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      bString: [
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 20, finger: 3 },
      ],
      eStringHigh: [
        { fret: 17, finger: 1 },
        { fret: 20, finger: 1 },
        { fret: 21, finger: 2 },
      ],
    },
    position5: {
      eString: [
        { fret: 17, finger: 1 },
        { fret: 21, finger: 1 },
      ],
      aString: [
        { fret: 19, finger: 1 },
        { fret: 20, finger: 2 },
      ],
      dString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 1 },
      ],
      gString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 1 },
      ],
      bString: [{ fret: 20, finger: 1 }],
      eStringHigh: [{ fret: 21, finger: 1 }],
    },
    position6: {
      eString: [{ fret: 21, finger: 1 }],
      aString: [
        { fret: 19, finger: 2 },
        { fret: 21, finger: 1 },
      ],
      dString: [
        { fret: 19, finger: 2 },
        { fret: 21, finger: 1 },
      ],
      gString: [
        { fret: 19, finger: 2 },
        { fret: 21, finger: 1 },
      ],
      bString: [{ fret: 20, finger: 1 }],
      eStringHigh: [{ fret: 21, finger: 1 }],
    },
    position7: {
      eString: [{ fret: 21, finger: 1 }],
      aString: [
        { fret: 19, finger: 2 },
        { fret: 21, finger: 1 },
      ],
      dString: [
        { fret: 19, finger: 2 },
        { fret: 21, finger: 1 },
      ],
      gString: [
        { fret: 19, finger: 2 },
        { fret: 21, finger: 1 },
      ],
      bString: [{ fret: 20, finger: 1 }],
      eStringHigh: [{ fret: 21, finger: 1 }],
    },
    position8: {
      eString: [{ fret: 21, finger: 1 }],
      aString: [
        { fret: 19, finger: 2 },
        { fret: 21, finger: 1 },
      ],
      dString: [
        { fret: 19, finger: 2 },
        { fret: 21, finger: 1 },
      ],
      gString: [
        { fret: 19, finger: 2 },
        { fret: 21, finger: 1 },
      ],
      bString: [{ fret: 20, finger: 1 }],
      eStringHigh: [{ fret: 21, finger: 1 }],
    },
  },
  bHarmonicMinor: {
    position1: {
      eString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 1 },
        { fret: 3, finger: 2 },
        { fret: 7, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 15, finger: 4 },
        { fret: 19, finger: 1 },
      ],
      aString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 1 },
        { fret: 4, finger: 2 },
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 12, finger: 1 },
        { fret: 14, finger: 2 },
        { fret: 16, finger: 4 },
        { fret: 19, finger: 1 },
      ],
      dString: [
        { fret: 1, finger: 1 },
        { fret: 2, finger: 2 },
        { fret: 4, finger: 4 },
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
        { fret: 12, finger: 1 },
        { fret: 14, finger: 2 },
        { fret: 16, finger: 3 },
        { fret: 19, finger: 1 },
      ],
      gString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 1 },
        { fret: 4, finger: 2 },
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 12, finger: 1 },
        { fret: 14, finger: 2 },
        { fret: 16, finger: 3 },
        { fret: 19, finger: 1 },
      ],
      bString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 1 },
        { fret: 3, finger: 2 },
        { fret: 7, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 12, finger: 1 },
        { fret: 14, finger: 2 },
        { fret: 15, finger: 3 },
        { fret: 19, finger: 1 },
      ],
      eStringHigh: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 1 },
        { fret: 3, finger: 2 },
        { fret: 7, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 12, finger: 1 },
        { fret: 14, finger: 2 },
        { fret: 15, finger: 3 },
        { fret: 19, finger: 1 },
      ],
    },
    position2: {
      eString: [
        { fret: 3, finger: 1 },
        { fret: 7, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 12, finger: 1 },
        { fret: 15, finger: 1 },
        { fret: 19, finger: 1 },
      ],
      aString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 2 },
        { fret: 7, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 12, finger: 1 },
        { fret: 14, finger: 2 },
        { fret: 16, finger: 3 },
        { fret: 19, finger: 1 },
      ],
      dString: [
        { fret: 1, finger: 1 },
        { fret: 4, finger: 2 },
        { fret: 7, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 11, finger: 3 },
        { fret: 12, finger: 1 },
        { fret: 14, finger: 2 },
        { fret: 16, finger: 3 },
        { fret: 19, finger: 1 },
      ],
      gString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 2 },
        { fret: 7, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 12, finger: 1 },
        { fret: 14, finger: 2 },
        { fret: 16, finger: 3 },
        { fret: 19, finger: 1 },
      ],
      bString: [
        { fret: 2, finger: 1 },
        { fret: 3, finger: 2 },
        { fret: 7, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 12, finger: 1 },
        { fret: 14, finger: 2 },
        { fret: 15, finger: 3 },
        { fret: 19, finger: 1 },
      ],
      eStringHigh: [
        { fret: 3, finger: 1 },
        { fret: 7, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 12, finger: 1 },
        { fret: 15, finger: 1 },
        { fret: 19, finger: 1 },
      ],
    },
    position3: {
      eString: [
        { fret: 12, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 19, finger: 1 },
      ],
      aString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 2 },
        { fret: 16, finger: 3 },
        { fret: 19, finger: 1 },
      ],
      dString: [
        { fret: 11, finger: 1 },
        { fret: 12, finger: 2 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
        { fret: 19, finger: 1 },
      ],
      gString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 2 },
        { fret: 16, finger: 3 },
        { fret: 19, finger: 1 },
      ],
      bString: [
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
        { fret: 14, finger: 3 },
        { fret: 19, finger: 1 },
      ],
      eStringHigh: [
        { fret: 12, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 19, finger: 1 },
      ],
    },
    position4: {
      eString: [
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 19, finger: 1 },
      ],
      aString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 2 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 1 },
      ],
      dString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 2 },
        { fret: 18, finger: 3 },
        { fret: 19, finger: 1 },
      ],
      gString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 2 },
        { fret: 18, finger: 3 },
        { fret: 19, finger: 1 },
      ],
      bString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 19, finger: 1 },
      ],
      eStringHigh: [
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 19, finger: 1 },
      ],
    },
    position5: {
      eString: [
        { fret: 15, finger: 1 },
        { fret: 19, finger: 1 },
      ],
      aString: [
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 19, finger: 1 },
      ],
      dString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 2 },
        { fret: 19, finger: 1 },
      ],
      gString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 2 },
        { fret: 19, finger: 1 },
      ],
      bString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 1 },
      ],
      eStringHigh: [
        { fret: 15, finger: 1 },
        { fret: 19, finger: 1 },
      ],
    },
    position6: {
      eString: [{ fret: 19, finger: 1 }],
      aString: [
        { fret: 16, finger: 1 },
        { fret: 19, finger: 1 },
      ],
      dString: [
        { fret: 16, finger: 1 },
        { fret: 19, finger: 1 },
      ],
      gString: [
        { fret: 16, finger: 1 },
        { fret: 19, finger: 1 },
      ],
      bString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 1 },
      ],
      eStringHigh: [{ fret: 19, finger: 1 }],
    },
    position7: {
      eString: [{ fret: 19, finger: 1 }],
      aString: [
        { fret: 16, finger: 2 },
        { fret: 19, finger: 1 },
      ],
      dString: [
        { fret: 16, finger: 2 },
        { fret: 19, finger: 1 },
      ],
      gString: [
        { fret: 16, finger: 2 },
        { fret: 19, finger: 1 },
      ],
      bString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 1 },
      ],
      eStringHigh: [{ fret: 19, finger: 1 }],
    },
    position8: {
      eString: [{ fret: 19, finger: 1 }],
      aString: [
        { fret: 16, finger: 2 },
        { fret: 19, finger: 1 },
      ],
      dString: [
        { fret: 16, finger: 2 },
        { fret: 19, finger: 1 },
      ],
      gString: [
        { fret: 16, finger: 2 },
        { fret: 19, finger: 1 },
      ],
      bString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 1 },
      ],
      eStringHigh: [{ fret: 19, finger: 1 }],
    },
  },

  // MELODIC MINOR //
  cMelodicMinor: {
    position1: {
      eString: [
        { fret: 0, finger: 0 },
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
      ],
      aString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 3, finger: 3 },
      ],
      dString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      gString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
      ],
      bString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      eStringHigh: [
        { fret: 0, finger: 0 },
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
      ],
    },
    position2: {
      eString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 2 },
        { fret: 7, finger: 4 },
      ],
      aString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 2 },
        { fret: 7, finger: 4 },
      ],
      dString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 2 },
        { fret: 7, finger: 4 },
      ],
      gString: [
        { fret: 4, finger: 1 },
        { fret: 5, finger: 2 },
        { fret: 7, finger: 4 },
      ],
      bString: [
        { fret: 5, finger: 2 },
        { fret: 6, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      eStringHigh: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 2 },
        { fret: 7, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 7, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 10, finger: 4 },
      ],
      aString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      dString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      gString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      bString: [
        { fret: 8, finger: 2 },
        { fret: 10, finger: 4 },
      ],
      eStringHigh: [
        { fret: 7, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 10, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
      ],
      aString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
      ],
      dString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
      ],
      gString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
      ],
      bString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
      ],
      eStringHigh: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
      ],
    },
    position5: {
      eString: [
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
        { fret: 15, finger: 4 },
      ],
      aString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      dString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      gString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      bString: [
        { fret: 13, finger: 2 },
        { fret: 15, finger: 4 },
      ],
      eStringHigh: [
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
        { fret: 15, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
      ],
      aString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
      ],
      dString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
      ],
      gString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
      ],
      bString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
      ],
      eStringHigh: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
      ],
    },
    position7: {
      eString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
      ],
      aString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
      ],
      dString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
      ],
      gString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
      ],
      bString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
      ],
      eStringHigh: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
      ],
    },
    position8: {
      eString: [
        { fret: 19, finger: 1 },
        { fret: 20, finger: 2 },
        { fret: 22, finger: 4 },
      ],
      aString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      dString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      gString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
        { fret: 23, finger: 4 },
      ],
      bString: [
        { fret: 20, finger: 2 },
        { fret: 22, finger: 4 },
      ],
      eStringHigh: [
        { fret: 19, finger: 1 },
        { fret: 20, finger: 2 },
        { fret: 22, finger: 4 },
      ],
    },
  },
  cSharpDFlatMelodicMinor: {
    position1: {
      eString: [
        { fret: 1, finger: 1 },
        { fret: 2, finger: 2 },
        { fret: 4, finger: 4 },
      ],
      aString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
      ],
      dString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 3 },
        { fret: 4, finger: 4 },
        { fret: 6, finger: 4 },
      ],
      gString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
      ],
      bString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      eStringHigh: [
        { fret: 1, finger: 1 },
        { fret: 2, finger: 2 },
        { fret: 4, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 2 },
        { fret: 8, finger: 4 },
      ],
      aString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 2 },
        { fret: 8, finger: 4 },
      ],
      dString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 2 },
        { fret: 8, finger: 4 },
      ],
      gString: [
        { fret: 5, finger: 1 },
        { fret: 6, finger: 2 },
        { fret: 8, finger: 4 },
      ],
      bString: [
        { fret: 6, finger: 2 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      eStringHigh: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 2 },
        { fret: 8, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 8, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 11, finger: 4 },
      ],
      aString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      dString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      gString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      bString: [
        { fret: 9, finger: 2 },
        { fret: 11, finger: 4 },
      ],
      eStringHigh: [
        { fret: 8, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 11, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
      ],
      aString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
      ],
      dString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
      ],
      gString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
      ],
      bString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
      ],
      eStringHigh: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
      ],
    },
    position5: {
      eString: [
        { fret: 13, finger: 1 },
        { fret: 14, finger: 2 },
        { fret: 16, finger: 4 },
      ],
      aString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      dString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      gString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      bString: [
        { fret: 14, finger: 2 },
        { fret: 16, finger: 4 },
      ],
      eStringHigh: [
        { fret: 13, finger: 1 },
        { fret: 14, finger: 2 },
        { fret: 16, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
      ],
      aString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
      ],
      dString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
      ],
      gString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
      ],
      bString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
      ],
      eStringHigh: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
      ],
    },
    position7: {
      eString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
      ],
      aString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
      ],
      dString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
      ],
      gString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
      ],
      bString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
      ],
      eStringHigh: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
      ],
    },
    position8: {
      eString: [
        { fret: 20, finger: 1 },
        { fret: 21, finger: 2 },
        { fret: 23, finger: 4 },
      ],
      aString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 23, finger: 4 },
      ],
      dString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 23, finger: 4 },
      ],
      gString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      bString: [
        { fret: 21, finger: 2 },
        { fret: 23, finger: 4 },
      ],
      eStringHigh: [
        { fret: 20, finger: 1 },
        { fret: 21, finger: 2 },
        { fret: 23, finger: 4 },
      ],
    },
  },
  dMelodicMinor: {
    position1: {
      eString: [
        { fret: 2, finger: 1 },
        { fret: 3, finger: 2 },
        { fret: 5, finger: 4 },
      ],
      aString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 5, finger: 4 },
      ],
      dString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 5, finger: 4 },
        { fret: 7, finger: 4 },
      ],
      gString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
      ],
      bString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      eStringHigh: [
        { fret: 2, finger: 1 },
        { fret: 3, finger: 2 },
        { fret: 5, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 2 },
        { fret: 9, finger: 4 },
      ],
      aString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 2 },
        { fret: 9, finger: 4 },
      ],
      dString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 2 },
        { fret: 9, finger: 4 },
      ],
      gString: [
        { fret: 6, finger: 1 },
        { fret: 7, finger: 2 },
        { fret: 9, finger: 4 },
      ],
      bString: [
        { fret: 7, finger: 2 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      eStringHigh: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 2 },
        { fret: 9, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 9, finger: 1 },
        { fret: 10, finger: 2 },
        { fret: 12, finger: 4 },
      ],
      aString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      dString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      gString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      bString: [
        { fret: 10, finger: 2 },
        { fret: 12, finger: 4 },
      ],
      eStringHigh: [
        { fret: 9, finger: 1 },
        { fret: 10, finger: 2 },
        { fret: 12, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
      ],
      aString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
      ],
      dString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
      ],
      gString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
      ],
      bString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
      ],
      eStringHigh: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
      ],
    },
    position5: {
      eString: [
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 17, finger: 4 },
      ],
      aString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      dString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      gString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      bString: [
        { fret: 15, finger: 2 },
        { fret: 17, finger: 4 },
      ],
      eStringHigh: [
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 17, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
      ],
      aString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
      ],
      dString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
      ],
      gString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
      ],
      bString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
      ],
      eStringHigh: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
      ],
    },
    position7: {
      eString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
      ],
      aString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
      ],
      dString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
      ],
      gString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
      ],
      bString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
      ],
      eStringHigh: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
      ],
    },
    position8: {
      eString: [
        { fret: 21, finger: 1 },
        { fret: 22, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      aString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      dString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 24, finger: 4 },
      ],
      gString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
        { fret: 25, finger: 4 },
      ], // Note: Fret 25 is beyond typical range, adjust as needed
      bString: [
        { fret: 22, finger: 2 },
        { fret: 24, finger: 4 },
      ],
      eStringHigh: [
        { fret: 21, finger: 1 },
        { fret: 22, finger: 2 },
        { fret: 24, finger: 4 },
      ],
    },
  },
  dSharpEFlatMelodicMinor: {
    position1: {
      eString: [
        { fret: 3, finger: 1 },
        { fret: 4, finger: 2 },
        { fret: 6, finger: 4 },
      ],
      aString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      dString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 6, finger: 4 },
        { fret: 8, finger: 4 },
      ],
      gString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
      ],
      bString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      eStringHigh: [
        { fret: 3, finger: 1 },
        { fret: 4, finger: 2 },
        { fret: 6, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 10, finger: 4 },
      ],
      aString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 10, finger: 4 },
      ],
      dString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 10, finger: 4 },
      ],
      gString: [
        { fret: 7, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 10, finger: 4 },
      ],
      bString: [
        { fret: 8, finger: 2 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      eStringHigh: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 10, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 10, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 13, finger: 4 },
      ],
      aString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      dString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      gString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      bString: [
        { fret: 11, finger: 2 },
        { fret: 13, finger: 4 },
      ],
      eStringHigh: [
        { fret: 10, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 13, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
      ],
      aString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
      ],
      dString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
      ],
      gString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
      ],
      bString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
      ],
      eStringHigh: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
      ],
    },
    position5: {
      eString: [
        { fret: 15, finger: 1 },
        { fret: 16, finger: 2 },
        { fret: 18, finger: 4 },
      ],
      aString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      dString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 18, finger: 4 },
      ],
      gString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      bString: [
        { fret: 16, finger: 2 },
        { fret: 18, finger: 4 },
      ],
      eStringHigh: [
        { fret: 15, finger: 1 },
        { fret: 16, finger: 2 },
        { fret: 18, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
      ],
      aString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
      ],
      dString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
      ],
      gString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
      ],
      bString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
      ],
      eStringHigh: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
      ],
    },
    position7: {
      eString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
      ],
      aString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
      ],
      dString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
      ],
      gString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
      ],
      bString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
      ],
      eStringHigh: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
      ],
    },
    position8: {
      eString: [
        { fret: 22, finger: 1 },
        { fret: 23, finger: 2 },
        { fret: 25, finger: 4 },
      ],
      aString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 3 },
        { fret: 25, finger: 4 },
      ],
      dString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 3 },
        { fret: 25, finger: 4 },
      ],
      gString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 3 },
        { fret: 26, finger: 4 },
      ], // Note: Fret 26 is beyond typical range, adjust as needed
      bString: [
        { fret: 23, finger: 2 },
        { fret: 25, finger: 4 },
      ],
      eStringHigh: [
        { fret: 22, finger: 1 },
        { fret: 23, finger: 2 },
        { fret: 25, finger: 4 },
      ],
    },
  },
  eMelodicMinor: {
    position1: {
      eString: [
        { fret: 4, finger: 1 },
        { fret: 5, finger: 2 },
        { fret: 7, finger: 4 },
      ],
      aString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      dString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
        { fret: 9, finger: 4 },
      ],
      gString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
      ],
      bString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      eStringHigh: [
        { fret: 4, finger: 1 },
        { fret: 5, finger: 2 },
        { fret: 7, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 11, finger: 4 },
      ],
      aString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 11, finger: 4 },
      ],
      dString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 11, finger: 4 },
      ],
      gString: [
        { fret: 8, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 11, finger: 4 },
      ],
      bString: [
        { fret: 9, finger: 2 },
        { fret: 10, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      eStringHigh: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 11, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 11, finger: 1 },
        { fret: 12, finger: 2 },
        { fret: 14, finger: 4 },
      ],
      aString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      dString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      gString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      bString: [
        { fret: 12, finger: 2 },
        { fret: 14, finger: 4 },
      ],
      eStringHigh: [
        { fret: 11, finger: 1 },
        { fret: 12, finger: 2 },
        { fret: 14, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
      ],
      aString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
      ],
      dString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
      ],
      gString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
      ],
      bString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
      ],
      eStringHigh: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
      ],
    },
    position5: {
      eString: [
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 19, finger: 4 },
      ],
      aString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      dString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 19, finger: 4 },
      ],
      gString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      bString: [
        { fret: 17, finger: 2 },
        { fret: 19, finger: 4 },
      ],
      eStringHigh: [
        { fret: 16, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 19, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
      ],
      aString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
      ],
      dString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
      ],
      gString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
      ],
      bString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
      ],
      eStringHigh: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
      ],
    },
    position7: {
      eString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
      ],
      aString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
      ],
      dString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
      ],
      gString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
      ],
      bString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
      ],
      eStringHigh: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
      ],
    },
    position8: {
      eString: [
        { fret: 23, finger: 1 },
        { fret: 24, finger: 2 },
        { fret: 26, finger: 4 },
      ],
      aString: [
        { fret: 23, finger: 1 },
        { fret: 25, finger: 3 },
        { fret: 26, finger: 4 },
      ],
      dString: [
        { fret: 23, finger: 1 },
        { fret: 25, finger: 3 },
        { fret: 26, finger: 4 },
      ],
      gString: [
        { fret: 23, finger: 1 },
        { fret: 25, finger: 3 },
        { fret: 27, finger: 4 },
      ], // Note: Fret 27 is beyond typical range, adjust as needed
      bString: [
        { fret: 24, finger: 2 },
        { fret: 26, finger: 4 },
      ],
      eStringHigh: [
        { fret: 23, finger: 1 },
        { fret: 24, finger: 2 },
        { fret: 26, finger: 4 },
      ],
    },
  },
  fMelodicMinor: {
    position1: {
      eString: [
        { fret: 5, finger: 1 },
        { fret: 6, finger: 2 },
        { fret: 8, finger: 4 },
      ],
      aString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      dString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 8, finger: 4 },
        { fret: 10, finger: 4 },
      ],
      gString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
      ],
      bString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      eStringHigh: [
        { fret: 5, finger: 1 },
        { fret: 6, finger: 2 },
        { fret: 8, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 2 },
        { fret: 12, finger: 4 },
      ],
      aString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 2 },
        { fret: 12, finger: 4 },
      ],
      dString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 2 },
        { fret: 12, finger: 4 },
      ],
      gString: [
        { fret: 9, finger: 1 },
        { fret: 10, finger: 2 },
        { fret: 12, finger: 4 },
      ],
      bString: [
        { fret: 10, finger: 2 },
        { fret: 11, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      eStringHigh: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 2 },
        { fret: 12, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
        { fret: 15, finger: 4 },
      ],
      aString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      dString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      gString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      bString: [
        { fret: 13, finger: 2 },
        { fret: 15, finger: 4 },
      ],
      eStringHigh: [
        { fret: 12, finger: 1 },
        { fret: 13, finger: 2 },
        { fret: 15, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
      ],
      aString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
      ],
      dString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
      ],
      gString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
      ],
      bString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
      ],
      eStringHigh: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
      ],
    },
    position5: {
      eString: [
        { fret: 17, finger: 1 },
        { fret: 18, finger: 2 },
        { fret: 20, finger: 4 },
      ],
      aString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      dString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 20, finger: 4 },
      ],
      gString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      bString: [
        { fret: 18, finger: 2 },
        { fret: 20, finger: 4 },
      ],
      eStringHigh: [
        { fret: 17, finger: 1 },
        { fret: 18, finger: 2 },
        { fret: 20, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
      ],
      aString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
      ],
      dString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
      ],
      gString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
      ],
      bString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
      ],
      eStringHigh: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
      ],
    },
    position7: {
      eString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 3 },
      ],
      aString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 3 },
      ],
      dString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 3 },
      ],
      gString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
      ],
      bString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 3 },
      ],
      eStringHigh: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 3 },
      ],
    },
    position8: {
      // Leaving this position blank as requested since it exceeds fret 24
    },
  },
  fSharpGFlatMelodicMinor: {
    position1: {
      eString: [
        { fret: 6, finger: 1 },
        { fret: 7, finger: 2 },
        { fret: 9, finger: 4 },
      ],
      aString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      dString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 9, finger: 4 },
        { fret: 11, finger: 4 },
      ],
      gString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
      ],
      bString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      eStringHigh: [
        { fret: 6, finger: 1 },
        { fret: 7, finger: 2 },
        { fret: 9, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 13, finger: 4 },
      ],
      aString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 13, finger: 4 },
      ],
      dString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 13, finger: 4 },
      ],
      gString: [
        { fret: 10, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 13, finger: 4 },
      ],
      bString: [
        { fret: 11, finger: 2 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      eStringHigh: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 13, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 13, finger: 1 },
        { fret: 14, finger: 2 },
        { fret: 16, finger: 4 },
      ],
      aString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      dString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 16, finger: 4 },
      ],
      gString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
        { fret: 17, finger: 4 },
      ],
      bString: [
        { fret: 14, finger: 2 },
        { fret: 16, finger: 4 },
      ],
      eStringHigh: [
        { fret: 13, finger: 1 },
        { fret: 14, finger: 2 },
        { fret: 16, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
      ],
      aString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
      ],
      dString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
      ],
      gString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
      ],
      bString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
      ],
      eStringHigh: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
      ],
    },
    position5: {
      eString: [
        { fret: 18, finger: 1 },
        { fret: 19, finger: 2 },
        { fret: 21, finger: 4 },
      ],
      aString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      dString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 21, finger: 4 },
      ],
      gString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
        { fret: 22, finger: 4 },
      ],
      bString: [
        { fret: 19, finger: 2 },
        { fret: 21, finger: 4 },
      ],
      eStringHigh: [
        { fret: 18, finger: 1 },
        { fret: 19, finger: 2 },
        { fret: 21, finger: 4 },
      ],
    },
    position6: {
      eString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
      ],
      aString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
      ],
      dString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
      ],
      gString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
      ],
      bString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
      ],
      eStringHigh: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
      ],
    },
    position7: {
      eString: [
        { fret: 23, finger: 1 },
        { fret: 24, finger: 3 },
      ],
      aString: [
        { fret: 23, finger: 1 },
        { fret: 24, finger: 3 },
      ],
      dString: [
        { fret: 23, finger: 1 },
        { fret: 24, finger: 3 },
      ],
      gString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 3 },
      ],
      bString: [
        { fret: 23, finger: 1 },
        { fret: 24, finger: 3 },
      ],
      eStringHigh: [
        { fret: 23, finger: 1 },
        { fret: 24, finger: 3 },
      ],
    },
    position8: {
      // This position is within the 0-24 fret range
      eString: [{ fret: 24, finger: 1 }],
      aString: [{ fret: 24, finger: 1 }],
      dString: [{ fret: 24, finger: 1 }],
      gString: [{ fret: 24, finger: 1 }],
      bString: [{ fret: 24, finger: 1 }],
      eStringHigh: [{ fret: 24, finger: 1 }],
    },
  },
  gMelodicMinor: {
    position1: {
      eString: [
        { fret: 0, finger: 0 },
        { fret: 3, finger: 2 },
        { fret: 5, finger: 4 },
      ],
      aString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 1 },
        { fret: 3, finger: 2 },
        { fret: 5, finger: 4 },
      ],
      dString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 2 },
        { fret: 5, finger: 4 },
      ],
      gString: [
        { fret: 0, finger: 0 },
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
      ],
      bString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 2 },
        { fret: 5, finger: 4 },
      ],
      eStringHigh: [
        { fret: 0, finger: 0 },
        { fret: 3, finger: 2 },
        { fret: 5, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 2 },
        { fret: 8, finger: 3 },
      ],
      aString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
      ],
      dString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      gString: [
        { fret: 4, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      bString: [
        { fret: 5, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      eStringHigh: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 2 },
        { fret: 8, finger: 3 },
      ],
    },
    position3: {
      eString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 2 },
        { fret: 12, finger: 4 },
      ],
      aString: [
        { fret: 7, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      dString: [
        { fret: 9, finger: 1 },
        { fret: 10, finger: 2 },
        { fret: 12, finger: 4 },
      ],
      gString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      bString: [
        { fret: 10, finger: 2 },
        { fret: 12, finger: 4 },
      ],
      eStringHigh: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 2 },
        { fret: 12, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
      ],
      aString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
      ],
      dString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
      ],
      gString: [
        { fret: 11, finger: 1 },
        { fret: 14, finger: 3 },
      ],
      bString: [
        { fret: 12, finger: 1 },
        { fret: 15, finger: 4 },
      ],
      eStringHigh: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
      ],
    },
    position5: {
      eString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
      ],
      aString: [
        { fret: 14, finger: 1 },
        { fret: 17, finger: 3 },
      ],
      dString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 2 },
        { fret: 17, finger: 3 },
      ],
      gString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 2 },
        { fret: 18, finger: 4 },
      ],
      bString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
      ],
      eStringHigh: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
      ],
    },
    position6: {
      eString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
      ],
      aString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
      ],
      dString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
      ],
      gString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
      ],
      bString: [
        { fret: 17, finger: 1 },
        { fret: 20, finger: 4 },
      ],
      eStringHigh: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
      ],
    },
    position7: {
      eString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
      ],
      aString: [
        { fret: 19, finger: 1 },
        { fret: 22, finger: 3 },
      ],
      dString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 2 },
        { fret: 22, finger: 3 },
      ],
      gString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 2 },
      ],
      bString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
      ],
      eStringHigh: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
      ],
    },
    position8: {
      eString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 3 },
      ],
      aString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 3 },
      ],
      dString: [
        { fret: 21, finger: 1 },
        { fret: 24, finger: 3 },
      ],
      gString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
      ],
      bString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 3 },
      ],
      eStringHigh: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 3 },
      ],
    },
  },
  gSharpAFlatMelodicMinor: {
    position1: {
      eString: [
        { fret: 1, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      aString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 2 },
        { fret: 4, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      dString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 2 },
        { fret: 6, finger: 4 },
      ],
      gString: [
        { fret: 1, finger: 1 },
        { fret: 3, finger: 2 },
        { fret: 5, finger: 3 },
      ],
      bString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      eStringHigh: [
        { fret: 1, finger: 1 },
        { fret: 4, finger: 3 },
        { fret: 6, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 9, finger: 3 },
      ],
      aString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 9, finger: 3 },
      ],
      dString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 10, finger: 3 },
      ],
      gString: [
        { fret: 5, finger: 1 },
        { fret: 8, finger: 3 },
        { fret: 10, finger: 4 },
      ],
      bString: [
        { fret: 6, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      eStringHigh: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 9, finger: 3 },
      ],
    },
    position3: {
      eString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 13, finger: 4 },
      ],
      aString: [
        { fret: 8, finger: 1 },
        { fret: 11, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      dString: [
        { fret: 10, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 13, finger: 4 },
      ],
      gString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      bString: [
        { fret: 11, finger: 2 },
        { fret: 13, finger: 4 },
      ],
      eStringHigh: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 13, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
      ],
      aString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
      ],
      dString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
      ],
      gString: [
        { fret: 12, finger: 1 },
        { fret: 15, finger: 3 },
      ],
      bString: [
        { fret: 13, finger: 1 },
        { fret: 16, finger: 4 },
      ],
      eStringHigh: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
      ],
    },
    position5: {
      eString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
      ],
      aString: [
        { fret: 15, finger: 1 },
        { fret: 18, finger: 3 },
      ],
      dString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 18, finger: 3 },
      ],
      gString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 2 },
        { fret: 19, finger: 4 },
      ],
      bString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
      ],
      eStringHigh: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
      ],
    },
    position6: {
      eString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
      ],
      aString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
      ],
      dString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
      ],
      gString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
      ],
      bString: [
        { fret: 18, finger: 1 },
        { fret: 21, finger: 4 },
      ],
      eStringHigh: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
      ],
    },
    position7: {
      eString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
      ],
      aString: [
        { fret: 20, finger: 1 },
        { fret: 23, finger: 3 },
      ],
      dString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 2 },
        { fret: 23, finger: 3 },
      ],
      gString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 2 },
      ],
      bString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
      ],
      eStringHigh: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 3 },
      ],
    },
    position8: {
      eString: [
        { fret: 23, finger: 1 },
        { fret: 24, finger: 2 },
      ],
      aString: [
        { fret: 23, finger: 1 },
        { fret: 24, finger: 2 },
      ],
      dString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 2 },
      ],
      gString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 2 },
      ],
      bString: [
        { fret: 23, finger: 1 },
        { fret: 24, finger: 2 },
      ],
      eStringHigh: [
        { fret: 23, finger: 1 },
        { fret: 24, finger: 2 },
      ],
    },
  },
  aMelodicMinor: {
    position1: {
      eString: [
        { fret: 2, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      aString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 2 },
        { fret: 5, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      dString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 2 },
        { fret: 7, finger: 4 },
      ],
      gString: [
        { fret: 2, finger: 1 },
        { fret: 4, finger: 2 },
        { fret: 6, finger: 3 },
      ],
      bString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      eStringHigh: [
        { fret: 2, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 7, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 10, finger: 3 },
      ],
      aString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 10, finger: 3 },
      ],
      dString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 11, finger: 3 },
      ],
      gString: [
        { fret: 6, finger: 1 },
        { fret: 9, finger: 3 },
        { fret: 11, finger: 4 },
      ],
      bString: [
        { fret: 7, finger: 1 },
        { fret: 10, finger: 3 },
        { fret: 12, finger: 4 },
      ],
      eStringHigh: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 10, finger: 3 },
      ],
    },
    position3: {
      eString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 2 },
        { fret: 14, finger: 4 },
      ],
      aString: [
        { fret: 9, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      dString: [
        { fret: 11, finger: 1 },
        { fret: 12, finger: 2 },
        { fret: 14, finger: 4 },
      ],
      gString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      bString: [
        { fret: 12, finger: 2 },
        { fret: 14, finger: 4 },
      ],
      eStringHigh: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 2 },
        { fret: 14, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
      ],
      aString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
      ],
      dString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
      ],
      gString: [
        { fret: 13, finger: 1 },
        { fret: 16, finger: 3 },
      ],
      bString: [
        { fret: 14, finger: 1 },
        { fret: 17, finger: 4 },
      ],
      eStringHigh: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
      ],
    },
    position5: {
      eString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
      ],
      aString: [
        { fret: 16, finger: 1 },
        { fret: 19, finger: 3 },
      ],
      dString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 2 },
        { fret: 19, finger: 3 },
      ],
      gString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 2 },
        { fret: 20, finger: 4 },
      ],
      bString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
      ],
      eStringHigh: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
      ],
    },
    position6: {
      eString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
      ],
      aString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
      ],
      dString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
      ],
      gString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
      ],
      bString: [
        { fret: 19, finger: 1 },
        { fret: 22, finger: 4 },
      ],
      eStringHigh: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
      ],
    },
    position7: {
      eString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 3 },
      ],
      aString: [
        { fret: 21, finger: 1 },
        { fret: 24, finger: 3 },
      ],
      dString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 2 },
        { fret: 24, finger: 3 },
      ],
      gString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 2 },
      ],
      bString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 3 },
      ],
      eStringHigh: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 3 },
      ],
    },
    position8: {
      eString: [{ fret: 24, finger: 1 }],
      aString: [{ fret: 24, finger: 1 }],
      dString: [
        { fret: 23, finger: 1 },
        { fret: 24, finger: 2 },
      ],
      gString: [
        { fret: 23, finger: 1 },
        { fret: 24, finger: 2 },
      ],
      bString: [{ fret: 24, finger: 1 }],
      eStringHigh: [{ fret: 24, finger: 1 }],
    },
  },
  aSharpBFlatMelodicMinor: {
    position1: {
      eString: [
        { fret: 3, finger: 1 },
        { fret: 6, finger: 4 },
      ],
      aString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 6, finger: 4 },
      ],
      dString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      gString: [
        { fret: 3, finger: 1 },
        { fret: 5, finger: 2 },
        { fret: 7, finger: 4 },
      ],
      bString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 8, finger: 4 },
      ],
      eStringHigh: [
        { fret: 3, finger: 1 },
        { fret: 6, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 10, finger: 4 },
      ],
      aString: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 10, finger: 4 },
      ],
      dString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
      ],
      gString: [
        { fret: 7, finger: 1 },
        { fret: 10, finger: 4 },
      ],
      bString: [
        { fret: 8, finger: 1 },
        { fret: 10, finger: 3 },
      ],
      eStringHigh: [
        { fret: 6, finger: 1 },
        { fret: 8, finger: 2 },
        { fret: 10, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 10, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 13, finger: 4 },
      ],
      aString: [
        { fret: 10, finger: 1 },
        { fret: 13, finger: 4 },
      ],
      dString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 13, finger: 4 },
      ],
      gString: [
        { fret: 10, finger: 1 },
        { fret: 12, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      bString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
      ],
      eStringHigh: [
        { fret: 10, finger: 1 },
        { fret: 11, finger: 2 },
        { fret: 13, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
      ],
      aString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
      ],
      dString: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
      ],
      gString: [
        { fret: 14, finger: 1 },
        { fret: 15, finger: 2 },
        { fret: 17, finger: 4 },
      ],
      bString: [
        { fret: 15, finger: 1 },
        { fret: 17, finger: 3 },
      ],
      eStringHigh: [
        { fret: 13, finger: 1 },
        { fret: 15, finger: 3 },
      ],
    },
    position5: {
      eString: [{ fret: 18, finger: 4 }],
      aString: [
        { fret: 17, finger: 2 },
        { fret: 18, finger: 3 },
      ],
      dString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
      ],
      gString: [
        { fret: 17, finger: 1 },
        { fret: 19, finger: 3 },
      ],
      bString: [
        { fret: 18, finger: 2 },
        { fret: 20, finger: 4 },
      ],
      eStringHigh: [{ fret: 18, finger: 4 }],
    },
    position6: {
      eString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 2 },
      ],
      aString: [{ fret: 20, finger: 3 }],
      dString: [
        { fret: 19, finger: 1 },
        { fret: 20, finger: 2 },
        { fret: 22, finger: 4 },
      ],
      gString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 3 },
      ],
      bString: [
        { fret: 20, finger: 2 },
        { fret: 22, finger: 4 },
      ],
      eStringHigh: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 2 },
      ],
    },
    position7: {
      eString: [
        { fret: 22, finger: 1 },
        { fret: 23, finger: 2 },
      ],
      aString: [
        { fret: 22, finger: 1 },
        { fret: 23, finger: 2 },
      ],
      dString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 3 },
      ],
      gString: [
        { fret: 21, finger: 1 },
        { fret: 23, finger: 2 },
      ],
      bString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 3 },
      ],
      eStringHigh: [
        { fret: 22, finger: 1 },
        { fret: 23, finger: 2 },
      ],
    },
    position8: {
      // This position extends beyond the typical 24-fret range and is not included
    },
  },
  bMelodicMinor: {
    position1: {
      eString: [
        { fret: 4, finger: 1 },
        { fret: 7, finger: 4 },
      ],
      aString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 7, finger: 4 },
      ],
      dString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      gString: [
        { fret: 4, finger: 1 },
        { fret: 6, finger: 2 },
        { fret: 8, finger: 4 },
      ],
      bString: [
        { fret: 5, finger: 1 },
        { fret: 7, finger: 3 },
        { fret: 9, finger: 4 },
      ],
      eStringHigh: [
        { fret: 4, finger: 1 },
        { fret: 7, finger: 4 },
      ],
    },
    position2: {
      eString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 11, finger: 4 },
      ],
      aString: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 11, finger: 4 },
      ],
      dString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
      ],
      gString: [
        { fret: 8, finger: 1 },
        { fret: 11, finger: 4 },
      ],
      bString: [
        { fret: 9, finger: 1 },
        { fret: 11, finger: 3 },
      ],
      eStringHigh: [
        { fret: 7, finger: 1 },
        { fret: 9, finger: 2 },
        { fret: 11, finger: 4 },
      ],
    },
    position3: {
      eString: [
        { fret: 11, finger: 1 },
        { fret: 12, finger: 2 },
        { fret: 14, finger: 4 },
      ],
      aString: [
        { fret: 11, finger: 1 },
        { fret: 14, finger: 4 },
      ],
      dString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 14, finger: 4 },
      ],
      gString: [
        { fret: 11, finger: 1 },
        { fret: 13, finger: 3 },
        { fret: 15, finger: 4 },
      ],
      bString: [
        { fret: 12, finger: 1 },
        { fret: 14, finger: 3 },
      ],
      eStringHigh: [
        { fret: 11, finger: 1 },
        { fret: 12, finger: 2 },
        { fret: 14, finger: 4 },
      ],
    },
    position4: {
      eString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
      ],
      aString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
      ],
      dString: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
      ],
      gString: [
        { fret: 15, finger: 1 },
        { fret: 16, finger: 2 },
        { fret: 18, finger: 4 },
      ],
      bString: [
        { fret: 16, finger: 1 },
        { fret: 18, finger: 3 },
      ],
      eStringHigh: [
        { fret: 14, finger: 1 },
        { fret: 16, finger: 3 },
      ],
    },
    position5: {
      eString: [{ fret: 19, finger: 4 }],
      aString: [
        { fret: 18, finger: 2 },
        { fret: 19, finger: 3 },
      ],
      dString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
      ],
      gString: [
        { fret: 18, finger: 1 },
        { fret: 20, finger: 3 },
      ],
      bString: [
        { fret: 19, finger: 2 },
        { fret: 21, finger: 4 },
      ],
      eStringHigh: [{ fret: 19, finger: 4 }],
    },
    position6: {
      eString: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 2 },
      ],
      aString: [{ fret: 21, finger: 3 }],
      dString: [
        { fret: 20, finger: 1 },
        { fret: 21, finger: 2 },
        { fret: 23, finger: 4 },
      ],
      gString: [
        { fret: 20, finger: 1 },
        { fret: 22, finger: 3 },
      ],
      bString: [
        { fret: 21, finger: 2 },
        { fret: 23, finger: 4 },
      ],
      eStringHigh: [
        { fret: 19, finger: 1 },
        { fret: 21, finger: 2 },
      ],
    },
    position7: {
      eString: [
        { fret: 23, finger: 1 },
        { fret: 24, finger: 2 },
      ],
      aString: [
        { fret: 23, finger: 1 },
        { fret: 24, finger: 2 },
      ],
      dString: [
        { fret: 23, finger: 1 },
        { fret: 24, finger: 2 },
      ],
      gString: [
        { fret: 22, finger: 1 },
        { fret: 24, finger: 2 },
      ],
      bString: [
        { fret: 23, finger: 1 },
        { fret: 24, finger: 2 },
      ],
      eStringHigh: [
        { fret: 23, finger: 1 },
        { fret: 24, finger: 2 },
      ],
    },
    position8: {
      // This position extends beyond the typical 24-fret range and is not included
    },
  },
};
