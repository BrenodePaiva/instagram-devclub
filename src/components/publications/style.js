import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ContainerPublications = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  width: 100%;
  height: 320px;
  overflow-y: scroll;

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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 240px;
`;

export const PublicationImage = styled.img`
  width: 100%;
  height: 220px;
  border-radius: 20px;
`;
