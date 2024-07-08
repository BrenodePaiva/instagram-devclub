import styled from "styled-components";

export const Container = styled.div`
  width: 1000px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  overflow-x: scroll;
  padding: 8px 12px;

  &::-webkit-scrollbar {
    width: 4px; /* width of the entire scrollbar */
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent; /* color of the tracking area */
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) =>
      props.theme.textPrimary}; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
  }
`;

export const Profile = styled.div`
  position: relative;
  width: 74px;
  height: 74px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, #833ab4, #fd1d1d, #fcb045);

  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
`;
