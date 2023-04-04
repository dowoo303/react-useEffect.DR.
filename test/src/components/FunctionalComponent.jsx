import { useEffect } from "react";

const FunctionComponent = () => {
  useEffect(() => {}, []); // 라이프사이클을 함수형 컴포넌트에서 구현하기 위한 형태
  return <div className="bg-blue-100 h-96">FunctionComponent</div>;
};

export default FunctionComponent;
