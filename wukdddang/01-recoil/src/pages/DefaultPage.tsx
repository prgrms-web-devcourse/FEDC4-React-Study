import { Outlet } from "react-router";
import { styled } from "styled-components";

const View = styled.main`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  height: 100%;
  min-height: calc(100vh - 72px);
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: #fff;
`;

const BackDrop = styled.div`
  width: 100%;
  margin-top: 72px;
  min-height: calc(100vh - 72px);
`;

export default function DefaultPage() {
  return (
    <BackDrop>
      <View>
        <Outlet></Outlet>
      </View>
    </BackDrop>
  );
}
