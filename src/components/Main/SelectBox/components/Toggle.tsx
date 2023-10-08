import { motion } from 'framer-motion';

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="white"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }: { toggle: () => void }) => (
  <button onClick={toggle}>
    <svg width="12" height="12" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: 'M6 9L12 15L18 9' },
          open: { d: 'M18 15L12 9L6 15' },
        }}
      />
      <Path
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
    </svg>
  </button>
);
