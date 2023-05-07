const Loader = () => {
  const circleCommonClasses =
    'h-2.5 w-2.5 bg-current rounded-full inline-block';

  return (
    <div className="flex justify-center h-screen items-center">
      <div
        className={`${circleCommonClasses} mr-1 animate-bounce inline`}
      >{` `}</div>
      <div className={`${circleCommonClasses} mr-1 animate-bounce200 inline`}>
        {` `}
      </div>
      <div
        className={`${circleCommonClasses} animate-bounce400 inline`}
      >{` `}</div>
    </div>
  );
};

export default Loader;
