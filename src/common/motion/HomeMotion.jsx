export const HomeMotion = {
  description: {
    initial: {
      y: 50,
      opacity: 0,
    },
    animated: {
      y: 0,
      opacity: 1,
    },
    transition: {
      delay: 0.2,
      duration: 1.2,
    },
  },
  wrapImg: {
    initial: {
      borderEndEndRadius: "100px",
      borderStartStartRadius: "100px",
    },
    animated: {
      borderEndEndRadius: "500px",
      borderStartStartRadius: "500px",
    },
    transition: {
      delay: 0.3,
      duration: 0.5,
    },
  },
  image: {
    initial: {
      opacity: 0,
    },
    animated: {
      opacity: 1,
    },
    transition: {
      delay: 0.2,
      duration: 2,
    },
  },
};
