export const defaultAnimation = {
  visible: {
    transition: {
      when: 'beforeCildren',
      staggerChildren: 0.3,
    },
  },
  hidden: {
    transition: {
      when: 'afterChildren',
    },
  },
};
