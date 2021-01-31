import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
`;

export const Header = styled.header`
  width: 100%;
  height: 80px;
  background: #e84a5f;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    color: #fff;
  }
`;

export const Form = styled.form`
  display: flex;
  margin-top: 32px;
  width: 500px;
  align-items: center;
  input {
    flex: 1;
    height: 40px;
    padding: 0 16px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    transition: 0.2s;
    &:focus {
      border: 1px solid #31a7de;
    }
  }
  button {
    height: 40px;
    margin-left: 8px;
    padding: 0 16px;
    border: 0;
    background: #31a7de;
    color: #fff;
    transition: 0.2s;
    &:hover {
      background: #2197de;
    }
  }
`;

export const Content = styled.main`
  border-top: 1px solid #03405c11;
  width: 500px;
  margin-top: 32px;
`;

export const Todo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #03405c11;
  height: 80px;
  p {
    color: #03405c;
  }
  button {
    height: 40px;
    margin-left: 8px;
    padding: 0 16px;
    border: 1px solid #31a7de;
    color: #31a7de;
    background: transparent;
    transition: 0.2s;
    &:hover {
      color: #1187de;
      border: 1px solid #1187de;
    }
  }
`;
