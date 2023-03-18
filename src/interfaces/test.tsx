export const Parent = () => {
  const handleClick = () => {};

  return <Test onClick={handleClick}></Test>;
};

export const Test = (props: Props) => {
  const handleClick = () => {}; // 클릭했을떄 하는 행동

  return <div onClick={handleClick}></div>;
};

interface Props {
  onClick?: () => void; // onClick // 클릭할때
}

export const div = (props: Props) => {};

//          onClick          handleClick
// props = 클릭할떄? value = 클릭했을떄 하는동
