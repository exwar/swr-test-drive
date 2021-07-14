import styled from "styled-components";

export const PostsUI = styled.div`
  border-radius: 10px;
  margin: 20px auto;
  width: 400px;
  text-align: left;
  padding: 20px;
  border: 2px solid #dadada;
  background: #fafafa;
  font-size: 12px;
`;

export const PostWrapper = styled.div`
  padding: 5px;
  margin-bottom: 15px;

  p {
    margin: 0 0 5px;
  }

  & :last-child {
    margin-bottom: 0;
  }
`;

export const Error = styled.div`
  height: 150px;
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 10px;

  img {
    flex: 1 0 auto;
    height: 0;
  }
`;

export const Loader = styled.div`
  height: 150px;
  background: url("https://s.exwar.space/2021/07/undraw_Loading_re_5axr.svg")
    no-repeat center;
  background-size: contain;
`;
