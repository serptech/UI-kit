import styled from "styled-components";

const PageWrapper = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  position: relative;
  padding-bottom: 90px;
  display: flex;
  flex-direction: column;
`;

PageWrapper.Container = styled.div`
  box-sizing: border-box;
  width: 1000px;
  padding-left: 30px;
  padding-right: 30px;
  margin: 0 auto;
  display: flex;
`;

export { PageWrapper };
