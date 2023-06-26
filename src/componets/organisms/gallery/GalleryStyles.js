import styled  from "styled-components";

export const LayoutGallery = styled.div`
  width: 100%;
  height: 100vh;
  background: #ffffe0;
  margin: 0px;
  padding-top: 20px
`;

export const ContainerGallery = styled.div`
  text-align: center;
  width: 95%;
  height: 50px
  background: #ffffe0;
  box-sizing: content-box;
  margin: 0px auto;

  @media screen and (max-width: 768px) {
    width: 85%;
  }
`;

export const CharacterTitleGallery = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

export const TitleGallery = styled.h2`
  font-size: 42px;
`;

export const ContentGallery = styled.div`
  margin: 50px 0px;
  width: 100%;
  height: 60vh;
  border-color: white;
`;
