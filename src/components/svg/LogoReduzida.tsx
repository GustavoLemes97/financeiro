import { SvgProps } from ".";

const Logo = (props: SvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={66}
      height={66}
      viewBox="0 0 66 66"
      fill="none"
      {...props}
    >
      <path d="M65.67 0H0v66h65.67V0z" fill="#F6BE25" />
      <path
        d="M32.778 0L0 32.943l32.778 32.943 32.777-32.943L32.778 0z"
        fill="#fff"
      />
      <path
        d="M33.032 21.312L21.246 33.158l11.787 11.845 11.786-11.845-11.787-11.846z"
        fill="#4D4E4C"
      />
      <path
        d="M33.032 21.312L21.246 33.158l11.787 11.845 11.786-11.845-11.787-11.846z"
        fill="#4D4E4C"
      />
      <path
        d="M45.465 32.944L60.908 19.7l4.847 13.928-20.29-.684z"
        fill="#F6BE25"
      />
    </svg>
  );
};

export default Logo;
