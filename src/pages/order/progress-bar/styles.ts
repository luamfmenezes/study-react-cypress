import styled from "styled-components";

interface ProgressProps {
  progress: number;
}

export const Container = styled.div`
  width: 100%;
  min-width: 400px;
  height: 16px;
  border-radius: 8px;
  background-color: #aaa;
  padding: 2px;
  margin: 16px 0;
`;

export const Progress = styled.div<ProgressProps>`
  width: ${(props) => props.progress}%;
  height: 12px;
  border-radius: 6px;
  background-color: #38a;
  transition: 0.2s;
`;
