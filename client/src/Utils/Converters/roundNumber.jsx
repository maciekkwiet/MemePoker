const roundNumber = number => Math.round((number + Number.EPSILON) * 1000) / 1000;

export default roundNumber;
