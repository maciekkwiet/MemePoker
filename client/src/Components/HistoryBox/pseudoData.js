const tasks = [
  {
    id: 1,
    title: 'task nr 1',
    results: [
      {
        userId: 123,
        username: 'piotrek',
        vote: 5,
      },
      {
        userId: 124,
        username: 'jan',
        vote: 3,
      },
      {
        userId: 125,
        username: 'adam',
        vote: 1,
      },
    ],
    estimationTime: 1595013972,
    finalResult: 45.5,
    analysis: {
      average: 4.5,
      median: 5.5,
      standardDeviation: 6.3,
    },
  },
  {
    id: 2,
    title: 'task nr 2',
    results: [
      {
        userId: 223,
        username: 'piotrek',
        vote: 5,
      },
      {
        userId: 224,
        username: 'zenek',
        vote: 100,
      },
      {
        userId: 225,
        username: 'adam',
        vote: 1,
      },
    ],
    estimationTime: 1595013972,
    finalResult: 4.5,
    analysis: {
      average: 4.5,
      median: 5.5,
      standardDeviation: 10.3,
    },
  },
  {
    id: 3,
    title: 'task nr 3',
    results: [
      {
        userId: 323,
        username: 'jonh',
        vote: 5,
      },
      {
        userId: 324,
        username: 'joe',
        vote: 8,
      },
      {
        userId: 325,
        username: 'jon',
        vote: 12,
      },
    ],
    estimationTime: 1595013972,
    finalResult: 13,
    analysis: {
      average: 14.5,
      median: 55.5,
      standardDeviation: 6.3,
    },
  },
];

export default tasks;
